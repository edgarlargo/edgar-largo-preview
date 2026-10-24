# Edgar Largo — Studio Loops

Five original instrumental loops composed as a note score for this website. The
sound is made locally with additive and FM oscillators, generated air noise,
sub bass and a restrained pulse. The composition does not load source audio,
samples, recordings, a music generation model, or an external account.

The shared harmonic language is B minor / D major at 100 BPM. The identifiers
retain the site's existing scene hooks; they do not identify borrowed music.

| Scene ID | Title | Length | Arrangement |
| --- | --- | ---: | --- |
| `generic` | Studio / Начало | 9.6 s | Warm pad, soft pluck, small bass pulse |
| `cinematic_0` | Glass / О студии | 9.6 s | Open harmony and airy glass notes |
| `cinematic_2` | Orbit / Пространство | 4.8 s | Light suspended space, sparse notes |
| `cinematic_3` | Underpass / Туннель | 9.6 s | Restrained low pulse, darker voicing |
| `generic_end` | Open Light / Завершение | 19.2 s | Warm D major resolution |

`score.json` contains the chords, notes, timing, dynamics and instrument balance.
`compose.py` is the deterministic synthesizer and encoder workflow.
`manifest.json` records hashes, actual encoded sizes, duration, the render tools,
provenance, decoded loudness, true peak, RMS, clipping and boundary measurements.
`audio/` contains only the five web-ready Ogg Vorbis files.

## Rebuild

Requirements: Python 3.10 or later, NumPy and FFmpeg built with `libvorbis` and
`libmp3lame`. The reference render uses the existing bundled Python and FFmpeg
7.1 from the `imageio-ffmpeg` 0.6.0 wheel cached in the task's temporary tools
directory. No network access is needed for rendering after the tools exist.

Run from the directory containing `compose.py` and `score.json`:

```sh
python compose.py --ffmpeg ffmpeg --masters ../music-render-temp
```

An alternate FFmpeg executable can be passed with `--ffmpeg`. Encoded bytes may
differ between FFmpeg/libvorbis versions; the exact build is recorded in the
manifest. `--output <temporary-directory>` can produce an independent rebuild
without overwriting the reviewed delivery files.

24-bit PCM masters and a ten-second preview containing two seconds of each loop
are written only to the explicit `--masters` temporary directory. The web export
contains neither WAV masters nor previews, render tools or intermediate files.

## Loop construction and technical checks

Every voice release, delay tap and reverb tail is scheduled on the complete
circular timeline. Air-noise modulation and pad LFOs use integer periods of that
timeline. Notes have short smooth anti-click envelopes. Loop boundaries do not
truncate the arrangement or fade the complete mix to silence.

Vorbis can reconstruct its first and last transform windows differently. The
renderer therefore searches small circular phase shifts of the same completed
loop, within 2,048 samples in either direction (42.7 ms at 48 kHz), and selects
the lowest measured decoded boundary curvature. Rotation preserves every sample,
note, tail and the exact duration; the selected shift is in the manifest.

The master uses static gain toward -18 LUFS, with true-peak headroom. The script
then decodes every final Ogg, measures loudness and true peak with FFmpeg, and
rejects clipping, silence, an unexpected decoded length, or a boundary curvature
above its stated check. This is technical verification. A listening review is
not claimed; the owner can review the individual loops and temporary preview.

## Individual website delivery

The five compositions belong to the Edgar Largo website assets. They are not
defaults for other converter customers. The 11 existing interface sound effects
are separate from this set.

Use the existing CMS music fields on `#header-right-sound-btn` to upload the five
Ogg files and save their `data-ea-audio-<id>` values. Keep the shared header's
existing option keys and check each language. The installed audio adapter keeps
its first-interaction loading, sound toggle, scene crossfades and filters.

Record the actual uploaded filenames and hashes in a separate delivery record;
the composition manifest describes the source web assets. Installing or copying
these files alone does not establish that a published website has been updated.
General player/runtime fixes, if needed, use the existing WebSync update path.
