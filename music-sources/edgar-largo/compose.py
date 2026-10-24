"""Render the original Edgar Largo note score with deterministic local synthesis.

Requires Python 3.10+, numpy and FFmpeg with libvorbis. No source music, sample
library, network access, generative music model, or account is used at render time.
Only compressed web files and measurements go beside this script; PCM masters
and the 10-second listening preview go to --masters (a temporary directory).
"""
from __future__ import annotations

import argparse
import hashlib
import json
import math
from pathlib import Path
import re
import subprocess

import numpy as np


NOTE_NAMES = {"C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A": 9, "B": 11}


def frequency(note: str) -> float:
    match = re.fullmatch(r"([A-G])([#b]?)(-?\d+)", note)
    if not match:
        raise ValueError(f"Invalid note: {note}")
    name, accidental, octave = match.groups()
    midi = 12 * (int(octave) + 1) + NOTE_NAMES[name] + {"": 0, "#": 1, "b": -1}[accidental]
    return 440 * 2 ** ((midi - 69) / 12)


def cosine_ramp(value: np.ndarray) -> np.ndarray:
    return 0.5 - 0.5 * np.cos(np.pi * np.clip(value, 0, 1))


def envelope(t: np.ndarray, duration: float, attack: float, release: float) -> np.ndarray:
    return cosine_ramp(t / attack) * cosine_ramp((duration - t) / release)


def circular_add(mix: np.ndarray, voice: np.ndarray, start: int, pan: float, gain: float) -> None:
    """Schedule release tails into the next pass instead of trimming at the seam."""
    if voice.ndim == 1:
        angle = (np.clip(pan, -1, 1) + 1) * np.pi / 4
        voice = np.stack((voice * np.cos(angle), voice * np.sin(angle)), axis=1)
    indices = (start + np.arange(len(voice))) % len(mix)
    np.add.at(mix, indices, voice * gain)


def make_pad(note: str, hold: float, release: float, sr: int, phase: float) -> np.ndarray:
    duration = hold + release
    t = np.arange(round(duration * sr), dtype=np.float64) / sr
    freq = frequency(note)
    env = envelope(t, duration, 0.29, release)
    # Soft additive oscillators: the harmonic rolloff creates warmth without
    # a sharp saw wave, distortion stage, or external filter/sample dependency.
    stereo = []
    for detune, offset in [(-0.0010, phase), (0.0010, phase + 0.21)]:
        theta = 2 * np.pi * freq * (1 + detune) * t + offset
        value = (np.sin(theta) + 0.16 * np.sin(2 * theta + 0.3)
                 + 0.055 * np.sin(3 * theta) + 0.012 * np.sin(5 * theta)) / 1.23
        stereo.append(value * env)
    return np.stack(stereo, axis=1)


def make_glass(note: str, hold: float, sr: int) -> np.ndarray:
    duration = hold + 1.2
    t = np.arange(round(duration * sr), dtype=np.float64) / sr
    freq = frequency(note)
    decay = np.exp(-t / (0.34 + 0.18 * hold))
    env = envelope(t, duration, 0.014, 0.24) * decay
    # Quiet, mostly harmonic FM. The upper partials decay before the body.
    theta = 2 * np.pi * freq * t
    modulation = 0.34 * np.exp(-t / 0.15) * np.sin(2 * np.pi * freq * 2.002 * t)
    return (np.sin(theta + modulation) + 0.07 * np.sin(2 * theta) * np.exp(-t / 0.15)) * env


def make_bass(note: str, hold: float, sr: int) -> np.ndarray:
    duration = hold + 0.17
    t = np.arange(round(duration * sr), dtype=np.float64) / sr
    theta = 2 * np.pi * frequency(note) * t
    return (np.sin(theta) + 0.10 * np.sin(2 * theta) + 0.025 * np.sin(3 * theta)) * envelope(t, duration, 0.028, 0.17) / 1.125


def make_pulse(sr: int) -> np.ndarray:
    t = np.arange(round(0.25 * sr), dtype=np.float64) / sr
    phase = 2 * np.pi * (54 * t + 42 * 0.023 * (1 - np.exp(-t / 0.023)))
    return np.sin(phase) * np.exp(-t / 0.062) * envelope(t, 0.25, 0.009, 0.045)


def make_air(length: int, sr: int, rng: np.random.Generator) -> np.ndarray:
    # FFT synthesis is periodic by construction; modulation is exactly one
    # complete cycle over the loop. Keep this below the notes in the mix.
    spectrum = np.fft.rfft(rng.standard_normal((length, 2)), axis=0)
    frequencies = np.fft.rfftfreq(length, 1 / sr)
    band = (1 - np.exp(-(frequencies / 350) ** 4)) * np.exp(-(frequencies / 2800) ** 4)
    spectrum *= band[:, None]
    value = np.fft.irfft(spectrum, n=length, axis=0)
    value /= max(float(np.sqrt(np.mean(value * value))), 1e-12)
    breath = 0.75 + 0.25 * np.sin(2 * np.pi * np.arange(length) / length)
    return value * breath[:, None]


def circular_room(mix: np.ndarray, sr: int, rng: np.random.Generator) -> np.ndarray:
    length = len(mix)
    ir_length = round(1.6 * sr)
    time = np.arange(ir_length, dtype=np.float64) / sr
    impulse = rng.standard_normal((ir_length, 2)) * np.exp(-time[:, None] / 0.34)
    impulse[:round(0.026 * sr)] = 0
    impulse *= envelope(time, 1.6, 0.06, 0.30)[:, None]
    # An inexpensive soft impulse low-pass avoids brittle sibilant reflections.
    impulse = (impulse + np.roll(impulse, 1, axis=0) + np.roll(impulse, 2, axis=0)
               + np.roll(impulse, 3, axis=0)) / 4
    impulse /= np.sqrt(np.sum(impulse * impulse, axis=0))
    periodic = np.zeros_like(mix)
    periodic[:ir_length] = impulse
    wet = np.fft.irfft(np.fft.rfft(mix, axis=0) * np.fft.rfft(periodic, axis=0), n=length, axis=0)
    return mix + 0.13 * wet


def render_track(score: dict, track: dict, index: int) -> np.ndarray:
    sr = score["sample_rate"]
    beat = 60 / score["bpm"]
    bar = score["beats_per_bar"] * beat
    length = round(track["bars"] * bar * sr)
    rng = np.random.default_rng(score["seed"] + index * 1009)
    mix = np.zeros((length, 2), dtype=np.float64)
    glass = np.zeros_like(mix)
    levels = track["levels"]
    for bar_index, chord_id in enumerate(track["progression"]):
        chord = score["chords"][chord_id]
        start = round(bar_index * bar * sr)
        for voice_index, note in enumerate(chord["pad"]):
            pad = make_pad(note, bar, track["pad_release"], sr, rng.uniform(0, 2 * np.pi))
            # Modulate with an integer cycle of the complete loop. This stays
            # smooth even when the note release wraps through sample zero.
            absolute = start + np.arange(len(pad))
            lfo = 0.93 + 0.07 * np.sin(2 * np.pi * absolute / length + voice_index)
            pad *= lfo[:, None]
            circular_add(mix, pad, start, 0, levels["pad"] * 0.12 / math.sqrt(len(chord["pad"])))
        for beat_index in track["bass_beats"]:
            bass = make_bass(chord["bass"], (0.95 if len(track["bass_beats"]) > 1 else 1.7) * beat, sr)
            circular_add(mix, bass, start + round(beat_index * beat * sr), 0, levels["bass"] * 0.24)
        for beat_index in track["pulse_beats"]:
            circular_add(mix, make_pulse(sr), start + round(beat_index * beat * sr), 0, levels["pulse"] * 0.13)
    for note_index, (when, note, duration, velocity) in enumerate(track["melody"]):
        voice = make_glass(note, duration * beat, sr)
        pan = [-0.28, 0.22, -0.12, 0.30][note_index % 4]
        circular_add(glass, voice, round(when * beat * sr), pan, velocity * levels["glass"] * 0.20)
    # Delay repetitions are additions on the same circular timeline.
    mix += glass
    for delay_beats, gain in [(0.75, 0.20), (1.50, 0.10), (2.25, 0.045)]:
        mix += gain * np.roll(glass[:, ::-1], round(delay_beats * beat * sr), axis=0)
    mix += make_air(length, sr, rng) * levels["air"] * 0.03
    mix = circular_room(mix, sr, rng)
    # Remove DC without a stateful filter that could restart at the loop seam.
    mix -= np.mean(mix, axis=0)
    assert np.all(np.isfinite(mix))
    return mix


def run(command: list[str]) -> subprocess.CompletedProcess:
    return subprocess.run(command, capture_output=True, check=True)


def measure(ffmpeg: str, filename: Path) -> dict:
    process = run([ffmpeg, "-hide_banner", "-nostats", "-i", str(filename),
                   "-af", "loudnorm=I=-18:TP=-2.5:LRA=11:print_format=json", "-f", "null", "-"])
    stderr = process.stderr.decode("utf-8", errors="replace")
    match = re.search(r'\{\s*"input_i"[\s\S]+?\}', stderr)
    if not match:
        raise RuntimeError("FFmpeg did not return loudness measurements")
    values = json.loads(match.group())
    return {key: float(values[key]) for key in ("input_i", "input_tp", "input_lra", "input_thresh")}


def write_wav24(filename: Path, samples: np.ndarray, sr: int, ffmpeg: str) -> None:
    # FFmpeg writes the PCM container; only quantization, no loudness DSP.
    process = subprocess.run([ffmpeg, "-v", "error", "-y", "-fflags", "+bitexact",
                              "-f", "f32le", "-ar", str(sr), "-ac", "2", "-i", "pipe:0",
                              "-map_metadata", "-1", "-c:a", "pcm_s24le", "-flags:a", "+bitexact", str(filename)],
                             input=np.asarray(samples, dtype="<f4").tobytes(), capture_output=True)
    if process.returncode:
        raise RuntimeError(process.stderr.decode(errors="replace"))


def decode(ffmpeg: str, filename: Path, sr: int) -> np.ndarray:
    process = run([ffmpeg, "-v", "error", "-i", str(filename), "-f", "f32le", "-ar", str(sr), "-ac", "2", "pipe:1"])
    return np.frombuffer(process.stdout, dtype="<f4").reshape(-1, 2).astype(np.float64)


def stats(samples: np.ndarray) -> dict:
    rms = float(np.sqrt(np.mean(samples * samples)))
    peak = float(np.max(np.abs(samples)))
    jumps = np.max(np.abs(np.diff(samples, axis=0)), axis=1)
    seam = float(np.max(np.abs(samples[0] - samples[-1])))
    curvature = float(np.max(np.abs(np.diff(samples, n=2, axis=0))))
    seam_curvature = max(float(np.max(np.abs(samples[1] - 2 * samples[0] + samples[-1]))),
                         float(np.max(np.abs(samples[0] - 2 * samples[-1] + samples[-2]))))
    return {"rms_dbfs": round(20 * np.log10(max(rms, 1e-15)), 3),
            "sample_peak_dbfs": round(20 * np.log10(max(peak, 1e-15)), 3),
            "seam_sample_jump": round(seam, 8),
            "max_internal_sample_jump": round(float(np.max(jumps)), 8),
            "seam_vs_internal_max": round(seam / max(float(np.max(jumps)), 1e-15), 5),
            "seam_second_difference": round(seam_curvature, 8),
            "max_internal_second_difference": round(curvature, 8),
            "seam_curvature_ratio": round(seam_curvature / max(curvature, 1e-15), 5),
            "clipped_samples": int(np.sum(np.abs(samples) >= 1)),
            "non_silent": bool(rms > 0.001)}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--ffmpeg", required=True, help="FFmpeg executable with libvorbis")
    parser.add_argument("--masters", type=Path, required=True, help="Temporary destination outside this asset directory")
    parser.add_argument("--output", type=Path, default=Path(__file__).resolve().parent)
    args = parser.parse_args()
    root = args.output.resolve()
    masters = args.masters.resolve()
    if masters == root or root in masters.parents:
        raise ValueError("PCM masters must stay outside the published asset directory")
    masters.mkdir(parents=True, exist_ok=True)
    audio = root / "audio"
    audio.mkdir(parents=True, exist_ok=True)
    score_path = Path(__file__).with_name("score.json")
    score = json.loads(score_path.read_text(encoding="utf-8"))
    version = run([args.ffmpeg, "-version"]).stdout.decode(errors="replace").splitlines()[0]
    entries = []
    renders = []
    for index, track in enumerate(score["tracks"]):
        samples = render_track(score, track, index)
        raw_path = masters / (track["id"] + "-unnormalized.wav")
        write_wav24(raw_path, samples, score["sample_rate"], args.ffmpeg)
        initial = measure(args.ffmpeg, raw_path)
        # Static gain keeps the original note dynamics. True-peak headroom is
        # reserved for Vorbis reconstruction as well as the PCM master.
        gain_db = min(-18 - initial["input_i"], -2.5 - initial["input_tp"])
        samples *= 10 ** (gain_db / 20)
        master = masters / (track["id"] + ".wav")
        target = audio / (track["id"] + ".ogg")
        # Vorbis' first/last transform windows see artificial padding rather
        # than the next lap. Pick a codec-friendly phase of the same circle;
        # no note, sample, reverb tail, or loop duration is added or removed.
        # Search both directions by at most 42.7 ms at the fixed 48 kHz rate.
        candidates = [0] + [signed for step in range(128, 2049, 128) for signed in (step, -step)]
        best = None
        for phase_shift in candidates:
            rotated = np.roll(samples, -phase_shift, axis=0)
            write_wav24(master, rotated, score["sample_rate"], args.ffmpeg)
            run([args.ffmpeg, "-v", "error", "-y", "-fflags", "+bitexact", "-i", str(master),
                 "-map_metadata", "-1", "-c:a", "libvorbis", "-q:a", "6", "-flags:a", "+bitexact",
                 "-serial_offset", str(100 + index), "-fflags", "+bitexact", str(target)])
            candidate_stats = stats(decode(args.ffmpeg, target, score["sample_rate"]))
            objective = candidate_stats["seam_curvature_ratio"]
            if best is None or objective < best[0]:
                best = (objective, phase_shift, target.read_bytes())
        _, phase_shift, encoded = best
        samples = np.roll(samples, -phase_shift, axis=0)
        write_wav24(master, samples, score["sample_rate"], args.ffmpeg)
        target.write_bytes(encoded)
        measured = measure(args.ffmpeg, target)
        decoded = decode(args.ffmpeg, target, score["sample_rate"])
        measured_stats = stats(decoded)
        if (measured["input_tp"] > -1.5 or measured_stats["clipped_samples"]
                or not measured_stats["non_silent"] or measured_stats["seam_curvature_ratio"] > 1.5):
            raise RuntimeError(f"Invalid audio output: {track['id']}")
        expected = len(samples)
        if abs(len(decoded) - expected) > 1024:
            raise RuntimeError(f"Unexpected decoded length: {track['id']}")
        renders.append(samples)
        entries.append({"id": track["id"], "title": track["title"], "file": "audio/" + target.name,
                        "codec": "Vorbis", "container": "Ogg", "channels": 2,
                        "sample_rate": score["sample_rate"], "bars": track["bars"],
                        "duration_seconds": round(expected / score["sample_rate"], 6),
                        "phase_shift_samples": phase_shift,
                        "phase_shift_seconds": round(phase_shift / score["sample_rate"], 8),
                        "decoded_samples": len(decoded), "master_bits": 24,
                        "bytes": target.stat().st_size, "sha256": hashlib.sha256(target.read_bytes()).hexdigest(),
                        "integrated_lufs": measured["input_i"], "true_peak_dbtp": measured["input_tp"],
                        "loudness_range_lu": measured["input_lra"], "decoded": measured_stats,
                        "master": stats(samples)})
        raw_path.unlink()
        # Keep progress portable in Windows consoles with a legacy code page.
        print(json.dumps(entries[-1], ensure_ascii=True))
    # Two seconds from each loop, with short preview-only edge fades. The five
    # web loops retain their circular tails and are not faded at their edges.
    excerpts = []
    for samples in renders:
        excerpt = samples[:2 * score["sample_rate"]].copy()
        t = np.arange(len(excerpt)) / score["sample_rate"]
        excerpt *= envelope(t, 2, 0.025, 0.05)[:, None]
        excerpts.append(excerpt)
    preview = np.concatenate(excerpts)
    preview_wav = masters / "preview-all-five-10s.wav"
    write_wav24(preview_wav, preview, score["sample_rate"], args.ffmpeg)
    run([args.ffmpeg, "-v", "error", "-y", "-i", str(preview_wav), "-map_metadata", "-1",
         "-c:a", "libmp3lame", "-q:a", "4", str(masters / "preview-all-five-10s.mp3")])
    manifest = {"edition": score["edition"], "title": score["title"], "bpm": score["bpm"],
                "tonality": score["tonality"], "render_sample_rate": score["sample_rate"],
                "score_sha256": hashlib.sha256(score_path.read_bytes()).hexdigest(),
                "composer_sha256": hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
                "renderer": {"python": "3.10+", "numpy": np.__version__, "ffmpeg": version,
                             "encoder": "libvorbis -q:a 6, bitexact; Ogg serial offset 100..104",
                             "phase_search": "0 and +/-128..2048 samples in steps of 128; minimum decoded seam curvature ratio"},
                "provenance": {"method": "Original note score and deterministic additive/FM/noise synthesis written for Edgar Largo",
                               "source_audio_used": False, "external_samples_used": False,
                               "music_generation_model_used": False, "seed": score["seed"],
                               "listening_review": "Not claimed; files were decoded and measured automatically"},
                "loop_method": "Circular voice scheduling, circular delay/convolution and period-matched LFO; no boundary truncation",
                "total_bytes": sum(item["bytes"] for item in entries),
                "total_duration_seconds": sum(item["duration_seconds"] for item in entries),
                "tracks": entries}
    (root / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"TOTAL {manifest['total_bytes']} bytes; {manifest['total_duration_seconds']} seconds")
    print(f"PREVIEW {masters / 'preview-all-five-10s.mp3'}")


if __name__ == "__main__":
    main()
