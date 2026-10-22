(() => {
  'use strict';
  if (window.EAContentVideo) return;
  const selector = 'video[data-ea-autoplay]';
  const states = new Map();
  const boundImages = new WeakSet();
  const boundPosters = new WeakSet();
  let activeDialog = null;
  let activeTrigger = null;

  function apply(state) {
    const allowed = state.visible && state.video.isConnected && !document.hidden && !activeDialog && !state.video.closest('[inert]');
    if (allowed === state.allowed) return;
    state.allowed = allowed;
    const version = ++state.version;
    if (!allowed) { state.video.pause(); return; }
    // Autoplay is attempted only on entering the stage. A visitor can pause
    // with the native controls without the animation loop restarting it.
    try {
      Promise.resolve(state.video.play()).then(() => {
        if ((version !== state.version && !state.allowed) || !state.video.isConnected) state.video.pause();
      }).catch(() => {});
    } catch {}
  }

  const observer = window.IntersectionObserver ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      const state = states.get(entry.target);
      if (!state || state.managed) continue;
      // A wide horizontal movie may be larger than the viewport. Measure the
      // visible area relative to the smaller stage, rather than its full size.
      const bounds = entry.boundingClientRect, visible = entry.intersectionRect;
      const stage = Math.min(bounds.width, innerWidth) * Math.min(bounds.height, innerHeight);
      state.visible = entry.isIntersecting && stage > 0 && visible.width * visible.height / stage >= .35;
      apply(state);
    }
  }, {threshold: [0, .1, .2, .35, .5, .75, 1]}) : null;

  function bind(root) {
    if (!root?.querySelectorAll) return;
    const videos = [...root.querySelectorAll(selector)];
    if (root.matches?.(selector)) videos.unshift(root);
    for (const video of videos) {
      if (states.has(video)) continue;
      video.muted = true;
      video.playsInline = true;
      const state = {video, visible: false, allowed: false, managed: false, version: 0};
      states.set(video, state);
      observer?.observe(video);
    }
    for (const image of root.querySelectorAll('img[data-ea-youtube-poster]')) {
      if (boundImages.has(image)) continue;
      boundImages.add(image);
      const fallback = () => {
        if (!image.src.includes('/maxresdefault.jpg')) return;
        image.src = 'https://i.ytimg.com/vi/' + image.dataset.eaYoutubePoster + '/hqdefault.jpg';
      };
      image.addEventListener('error', fallback);
      image.addEventListener('load', () => { if (image.naturalWidth <= 160) fallback(); });
      if (image.complete && image.naturalWidth <= 160) fallback();
    }
    const posters = [...root.querySelectorAll('[data-ea-video-open]')];
    if (root.matches?.('[data-ea-video-open]')) posters.unshift(root);
    for (const button of posters) {
      if (boundPosters.has(button)) continue;
      boundPosters.add(button);
      // Stop at the control itself: a parent gallery may listen before the
      // document's delegated handlers receive this pointer gesture.
      for (const name of ['pointerdown', 'mousedown', 'touchstart']) button.addEventListener(name, event => event.stopPropagation(), {passive: true});
    }
  }

  function setVisible(root, visible) {
    bind(root);
    for (const video of root.querySelectorAll(selector)) {
      const state = states.get(video);
      state.managed = true;
      state.visible = !!visible;
      apply(state);
    }
  }

  function clean() {
    if (activeDialog && (!activeTrigger?.isConnected || activeTrigger.closest('[inert]'))) activeDialog.close();
    for (const [video, state] of states) {
      if (video.isConnected) continue;
      state.visible = false;
      apply(state);
      observer?.unobserve(video);
      states.delete(video);
    }
  }

  function playerURL(source) {
    try {
      const url = new URL(source);
      if (url.protocol !== 'https:' || url.username || url.password || url.port) return '';
      if (url.hostname === 'www.youtube-nocookie.com' && /^\/embed\/[A-Za-z0-9_-]{11}$/.test(url.pathname) && !url.search) {
        url.searchParams.set('autoplay', '1');
        url.searchParams.set('playsinline', '1');
        url.searchParams.set('rel', '0');
      } else if (url.hostname === 'player.vimeo.com' && /^\/video\/[0-9]{1,15}$/.test(url.pathname) && (!url.search || /^\?h=[a-f0-9]{6,32}$/i.test(url.search))) {
        url.searchParams.set('autoplay', '1');
      } else return '';
      return url.href;
    } catch { return ''; }
  }

  function localVideoURL(source) {
    return /^uploads\/[A-Za-z0-9][A-Za-z0-9_.-]*\.(?:mp4|webm)$/i.test(source || '') ? source : '';
  }

  function watchURL(source) {
    const url = new URL(source);
    if (url.hostname === 'www.youtube-nocookie.com') return 'https://www.youtube.com/watch?v=' + url.pathname.split('/').pop();
    return 'https://vimeo.com/' + url.pathname.split('/').pop() + (url.searchParams.get('h') ? '/' + url.searchParams.get('h') : '');
  }

  function open(button) {
    const source = playerURL(button.getAttribute('data-ea-video-open'));
    if (!source || activeDialog) return;
    const fallback = localVideoURL(button.getAttribute('data-ea-video-fallback'));
    const youtube = source.startsWith('https://www.youtube-nocookie.com/');
    const provider = youtube ? 'YouTube' : 'Vimeo';
    const ru = /^ru(?:-|$)/i.test(document.documentElement.lang || '');
    const dialog = document.createElement('dialog');
    dialog.className = 'ea-video-lightbox';
    dialog.setAttribute('aria-label', button.getAttribute('data-ea-video-title') || 'Video');
    const header = document.createElement('div');
    header.className = 'ea-video-header';
    const sources = document.createElement('div');
    sources.className = 'ea-video-sources';
    const local = document.createElement('button');
    local.type = 'button';
    local.textContent = ru ? 'Смотреть на сайте' : 'Watch here';
    const external = document.createElement('button');
    external.type = 'button';
    external.textContent = provider;
    const watch = document.createElement('a');
    watch.href = watchURL(source);
    watch.target = '_blank';
    watch.rel = 'noopener noreferrer';
    watch.textContent = (ru ? 'Открыть ' : 'Open on ') + provider;
    watch.className = 'ea-video-watch';
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'ea-video-close';
    close.setAttribute('aria-label', ru ? 'Закрыть видео' : 'Close video');
    close.textContent = ru ? 'Закрыть' : 'Close';
    const stage = document.createElement('div');
    stage.className = 'ea-video-stage';
    const status = document.createElement('p');
    status.className = 'ea-video-status';
    status.setAttribute('role', 'status');
    status.hidden = true;
    let player = null;
    let current = '';
    function unload() {
      if (!player) return;
      if (player.tagName.toLowerCase() === 'video') player.pause();
      player.removeAttribute('src');
      if (player.tagName.toLowerCase() === 'video') player.load();
      player.remove();
      player = null;
    }
    function show(kind) {
      if (kind === current) return;
      unload();
      current = kind;
      status.hidden = true;
      local.setAttribute('aria-pressed', String(kind === 'local'));
      external.setAttribute('aria-pressed', String(kind === 'external'));
      watch.hidden = kind === 'local';
      if (kind === 'local') {
        const video = document.createElement('video');
        video.controls = true;
        video.playsInline = true;
        video.preload = 'metadata';
        video.setAttribute('playsinline', '');
        video.src = fallback;
        const poster = button.getAttribute('data-ea-video-cover');
        if (poster) video.poster = poster;
        video.addEventListener('error', () => {
          if (player !== video) return;
          status.textContent = ru ? 'Не удалось загрузить видео. Выберите ' + provider + '.' : 'The video could not load. Choose ' + provider + '.';
          status.hidden = false;
        });
        player = video;
        stage.append(video);
        // This is the owner's local copy, started by the visitor's Play gesture.
        // Browser autoplay policy may still require the native Play control.
        try { Promise.resolve(video.play()).catch(() => {}); } catch {}
      } else {
        const frame = document.createElement('iframe');
        frame.title = button.getAttribute('data-ea-video-title') || 'Video';
        frame.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media';
        frame.setAttribute('allowfullscreen', '');
        frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-presentation allow-popups');
        player = frame;
        stage.append(frame);
        frame.src = source;
      }
    }
    local.addEventListener('click', () => show('local'));
    external.addEventListener('click', () => show('external'));
    close.addEventListener('click', () => dialog.close());
    // Donor galleries can bind document handlers before this runtime. Stop at
    // the dialog so native controls never begin a background drag gesture.
    for (const name of ['pointerdown', 'mousedown', 'touchstart']) dialog.addEventListener(name, event => event.stopPropagation(), {passive: true});
    dialog.addEventListener('click', event => {
      event.stopPropagation();
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('keydown', event => {
      event.stopPropagation();
      if (event.key === 'Escape') { event.preventDefault(); dialog.close(); }
    });
    dialog.addEventListener('close', () => {
      unload();
      dialog.remove();
      activeDialog = null;
      activeTrigger = null;
      for (const state of states.values()) apply(state);
      if (button.isConnected && !button.closest('[inert]')) button.focus({preventScroll: true});
    }, {once: true});
    if (fallback) sources.append(local, external);
    header.append(sources, watch, close);
    dialog.append(header, stage, status);
    document.body.append(dialog);
    activeDialog = dialog;
    activeTrigger = button;
    for (const state of states.values()) apply(state);
    dialog.showModal();
    show(fallback ? 'local' : 'external');
    close.focus({preventScroll: true});
  }

  window.EAContentVideo = {bind, setVisible};
  document.addEventListener('click', event => {
    const button = event.target.closest?.('[data-ea-video-open]');
    if (!button || button.closest('[inert]')) return;
    event.preventDefault();
    event.stopPropagation();
    open(button);
  });
  // Keep native buttons and controls from becoming gallery drag gestures.
  for (const name of ['pointerdown', 'mousedown', 'touchstart']) document.addEventListener(name, event => {
    if (event.target.closest?.('[data-ea-video-open],.ea-video-lightbox')) event.stopPropagation();
  });
  window.addEventListener('wheel', event => {
    if (!activeDialog) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, {capture: true, passive: false});
  document.addEventListener('visibilitychange', () => { for (const state of states.values()) apply(state); });
  window.addEventListener('pagehide', () => {
    if (activeDialog) activeDialog.close();
    for (const state of states.values()) { state.visible = false; apply(state); }
  });
  for (const event of ['popstate', 'hashchange']) window.addEventListener(event, () => { if (activeDialog) activeDialog.close(); });
  bind(document);
  new MutationObserver(changes => {
    for (const change of changes) for (const node of change.addedNodes) if (node.nodeType === 1) bind(node);
    clean();
  }).observe(document.documentElement, {childList: true, subtree: true, attributes: true, attributeFilter: ['inert']});
})();
