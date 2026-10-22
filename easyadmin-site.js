// Resolve newly imported pages without rewriting saved client content. Source
// SPA routers must use ordinary navigation for these server-rendered routes.
(() => {
  const context = window.__EA_ROUTE__;
  const key = url => {
    const copy = new URL(url); copy.hash = '';
    copy.pathname = copy.pathname.replace(/\/+$/, '') || '/';
    for (const name of [...copy.searchParams.keys()]) if (/^utm_|^(?:fbclid|gclid|msclkid)$/i.test(name)) copy.searchParams.delete(name);
    copy.searchParams.sort(); return copy.href;
  };
  let source;
  try { source = context?.sourceUrl ? new URL(context.sourceUrl) : null; } catch { source = null; }
  const routes = new Map();
  for (const route of context?.routes || []) {
    try {
      const name = key(route.sourceUrl), previous = routes.get(name);
      if (!previous || route.language === context.language) routes.set(name, route);
    } catch { /* Invalid source metadata cannot change navigation. */ }
  }
  const update = link => {
    const raw = link.getAttribute('href') || '';
    if (!raw || raw.startsWith('#') || link.hasAttribute('download')) return;
    let url; try { url = new URL(link.href, location.href); } catch { return; }
    if (!['http:', 'https:'].includes(url.protocol)) return;
    const base = new URL(context?.basePath || './', location.href);
    const localEntry = url.origin === location.origin && (url.pathname === base.pathname || url.pathname === base.pathname + 'index.php');
    const targetFor = route => {
      const target = new URL(route.href || 'index.php', base);
      if (!route.href) target.searchParams.set('p', route.id);
      if (url.searchParams.has('lang')) target.searchParams.set('lang', url.searchParams.get('lang'));
      target.hash = url.hash; return target;
    };
    // Existing saved menus still contain immutable page IDs. Expose the new
    // address on render without rewriting their saved content or project IDs.
    if (localEntry && !url.searchParams.has('view')) {
      const id = url.searchParams.get('p'), slug = url.searchParams.get('page');
      const route = (context?.routes || []).find(item => slug ? item.slug === slug || item.aliases?.includes(slug) : id && item.id === id);
      if (route?.href) { url = targetFor(route); link.href = url.href; }
    }
    if (source && !url.searchParams.has('p') && !url.searchParams.has('page') && !url.searchParams.has('view')) {
      const candidate = new URL(url.href);
      if (url.origin === location.origin) candidate.host = source.host, candidate.protocol = source.protocol;
      const route = routes.get(key(candidate));
      if (route && (url.origin === source.origin || url.origin === location.origin)) {
        const target = targetFor(route);
        link.href = target.href; url = target;
      }
    }
    if (url.origin !== location.origin || (!url.searchParams.has('p') && !url.searchParams.has('page') && !url.searchParams.has('view'))) return;
    if (!url.pathname.endsWith('/index.php') && url.pathname !== location.pathname) return;
    link.dataset.linkType = 'external';
  };
  const scan = root => { if (root.matches?.('a[href]')) update(root); root.querySelectorAll?.('a[href]').forEach(update); };
  scan(document);
  new MutationObserver(records => { for (const record of records) for (const node of record.addedNodes) if (node.nodeType === 1) scan(node); }).observe(document.documentElement, {childList:true,subtree:true});
})();

document.addEventListener('click', event => {
  const link = event.target.closest('[data-ea-language-link]');
  if (!link) return;
  event.preventDefault(); event.stopImmediatePropagation();
  if(event.ctrlKey || event.metaKey) window.open(link.href, '_blank', 'noopener');
  else window.location.assign(link.href);
}, true);

// New menu links keep the donor's markup. Same-page anchors use its scrolling
// controller when available, including pages with a fixed smooth-scroll shell.
document.addEventListener('click', event => {
  if (document.querySelector('[data-ea-live-editor="editing"]')) return;
  const link = event.target.closest?.('[data-ea-menu-item]');
  const url = link?.getAttribute('data-ea-menu-href') || link?.getAttribute('href') || '';
  if (!link || !url) return;
  const modified = event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
  if (url.startsWith('#') && url.length > 1 && !modified) {
    let id; try { id = decodeURIComponent(url.slice(1)); } catch { return; }
    if (window.eaMenuScrollTo?.(id) === true) { event.preventDefault(); event.stopImmediatePropagation(); return; }
  }
  if (link.tagName !== 'BUTTON') return;
  event.preventDefault(); event.stopImmediatePropagation();
  if (modified || link.getAttribute('target') === '_blank') window.open(url, '_blank', 'noopener');
  else window.location.assign(url);
}, true);

// Code frames have opaque origins. Accept scroll input only from our own
// published frames, then let the source site's existing wheel handler use it.
window.addEventListener('message', event => {
  const data = event.data;
  if (event.origin !== 'null' || !data || data.type !== 'ea-code-wheel' ||
      !Number.isFinite(data.deltaX) || !Number.isFinite(data.deltaY) ||
      Math.abs(data.deltaX) > 10000 || Math.abs(data.deltaY) > 10000 ||
      ![0, 1, 2].includes(data.deltaMode)) return;
  const frame = [...document.querySelectorAll('iframe[data-ea-code],iframe[data-ea-code-block]')]
    .find(item => item.contentWindow === event.source);
  if (!frame) return;
  const wheel = new WheelEvent('wheel', {bubbles:true, cancelable:true,
    deltaX:data.deltaX, deltaY:data.deltaY, deltaMode:data.deltaMode});
  frame.dispatchEvent(wheel);
  // Synthetic events have no native scroll default. Ordinary documents need
  // this fallback; a source smooth-scroll layout keeps its own fixed viewport.
  const root = document.scrollingElement;
  if (!wheel.defaultPrevented && root && (root.scrollHeight > root.clientHeight || root.scrollWidth > root.clientWidth)) {
    const factor = data.deltaMode === 1 ? 16 : data.deltaMode === 2 ? window.innerHeight : 1;
    window.scrollBy(data.deltaX * factor, data.deltaY * factor);
  }
});
