(() => {
  'use strict';
  const selector = 'iframe[data-ea-code][data-ea-scene-gallery]';
  const maxBytes = 30 * 1024 * 1024, states = new Map(), queue = [];
  const rasterMime = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif']);
  let active = 0, suspended = false, root;
  try {
    const script = new URL(document.currentScript.src);
    if (!/\/assets\/scene\/scene-gallery\.js$/.test(script.pathname)) return;
    root = new URL('../../', script);
    if (root.origin !== location.origin || root.username || root.password) return;
  } catch { return; }

  function localImage(src) {
    if (typeof src !== 'string' || src.length > 2048 || !/^(?:assets\/|uploads\/)/.test(src)) return null;
    const parts = src.split('/');
    if (parts.some(part => !/^[A-Za-z0-9_-][A-Za-z0-9._-]*$/.test(part)) || parts[0] === 'uploads' && parts.length !== 2
      || !/\.(?:jpe?g|png|webp|gif|avif)$/i.test(src)) return null;
    const url = new URL(src, root);
    return url.origin === root.origin && url.pathname.startsWith(root.pathname) && !url.search && !url.hash ? url.href : null;
  }
  function configuration(raw) {
    if (!raw || raw.length > 262144) return null;
    try {
      const config = JSON.parse(raw);
      if (config?.version !== 1 || !Array.isArray(config.images) || config.images.length > 40) return null;
      const images = config.images.map(image => {
        const url = localImage(image?.src);
        if (!url || ![image.width, image.height].every(value => Number.isInteger(value) && value > 0)
          || image.width * image.height > 40000000 || typeof image.alt !== 'string' || [...image.alt].length > 300) throw new Error();
        return { url, width: image.width, height: image.height, alt: image.alt };
      });
      return images;
    } catch { return null; }
  }
  function current(state) {
    return !suspended && state.frame.isConnected && states.get(state.frame) === state
      && state.frame.matches(selector) && state.frame.getAttribute('data-ea-scene-gallery') === state.raw;
  }
  function reply(state, message, transfer = []) {
    if (current(state)) state.frame.contentWindow?.postMessage(message, '*', transfer);
  }
  function sendConfig(state) {
    reply(state, { type: 'ea-scene-gallery-config', version: 1,
      images: state.images.map(({ width, height, alt }, index) => ({ index, width, height, alt })) });
  }
  function unmount(state) {
    state.controller.abort();
    state.frame.removeEventListener('load', state.onLoad);
    if (states.get(state.frame) === state) states.delete(state.frame);
  }
  function mount(frame) {
    if (suspended || !frame?.isConnected || !frame.matches(selector)) return null;
    const raw = frame.getAttribute('data-ea-scene-gallery'), previous = states.get(frame);
    if (previous?.raw === raw) return previous;
    if (previous) unmount(previous);
    const images = configuration(raw);
    if (!images) return null;
    const state = { frame, raw, images, controller: new AbortController(), pending: new Map(), requests: new Set() };
    state.onLoad = () => { const loaded = mount(frame); if (loaded) sendConfig(loaded); };
    states.set(frame, state); frame.addEventListener('load', state.onLoad); sendConfig(state);
    return state;
  }
  function scan() {
    for (const state of states.values()) if (!current(state)) unmount(state);
    if (!suspended) for (const frame of document.querySelectorAll(selector)) mount(frame);
  }
  function drain() {
    while (active < 4 && queue.length) {
      const job = queue.shift(); active++;
      Promise.resolve().then(job.run).then(job.resolve, job.reject).finally(() => { active--; drain(); });
    }
  }
  function schedule(run) {
    return new Promise((resolve, reject) => { queue.push({ run, resolve, reject }); drain(); });
  }
  async function fetchImage(state, index) {
    if (!current(state)) throw new Error();
    const controller = new AbortController(), abort = () => controller.abort();
    state.controller.signal.addEventListener('abort', abort, { once: true });
    const timeout = setTimeout(abort, 30000);
    try {
      const response = await fetch(state.images[index].url, { credentials: 'omit', mode: 'same-origin', redirect: 'error', signal: controller.signal });
      const mime = (response.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
      const length = response.headers.get('content-length');
      if (!response.ok || !rasterMime.has(mime) || length !== null && (!/^\d+$/.test(length) || Number(length) > maxBytes)
        || !response.body?.getReader || !current(state)) throw new Error();
      const reader = response.body.getReader(), chunks = []; let size = 0;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > maxBytes || !current(state)) { await reader.cancel(); throw new Error(); }
        chunks.push(value);
      }
      if (!size || !current(state)) throw new Error();
      const bytes = new Uint8Array(size); let offset = 0;
      for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
      return { mime, bytes: bytes.buffer };
    } finally {
      clearTimeout(timeout); state.controller.signal.removeEventListener('abort', abort);
      controller.abort();
    }
  }
  addEventListener('message', event => {
    const data = event.data;
    if (suspended || !data || !['ea-scene-gallery-ready', 'ea-scene-gallery-load'].includes(data.type)) return;
    const frame = [...document.querySelectorAll(selector)].find(node => node.contentWindow === event.source);
    const state = mount(frame);
    if (!state) return;
    if (data.type === 'ea-scene-gallery-ready') { sendConfig(state); return; }
    const { index, request } = data;
    if (!Number.isInteger(index) || index < 0 || index >= state.images.length || typeof request !== 'string'
      || !/^[A-Za-z0-9._:-]{1,96}$/.test(request) || state.requests.has(request) || state.requests.size >= 128) return;
    state.requests.add(request);
    let pending = state.pending.get(index);
    if (!pending) {
      pending = schedule(() => fetchImage(state, index)); state.pending.set(index, pending);
      pending.then(() => state.pending.delete(index), () => state.pending.delete(index));
    }
    pending.then(result => {
      if (!current(state)) return;
      const bytes = result.bytes.slice(0);
      reply(state, { type: 'ea-scene-gallery-image', index, request, mime: result.mime, bytes }, [bytes]);
    }, () => reply(state, { type: 'ea-scene-gallery-image', index, request, error: 'Image unavailable' }))
      .finally(() => state.requests.delete(request));
  });
  new MutationObserver(scan).observe(document.documentElement, { subtree: true, childList: true, attributes: true,
    attributeFilter: ['data-ea-code', 'data-ea-scene-gallery'] });
  addEventListener('pagehide', () => { suspended = true; for (const state of states.values()) unmount(state); });
  addEventListener('pageshow', () => { suspended = false; scan(); });
  scan();
})();
