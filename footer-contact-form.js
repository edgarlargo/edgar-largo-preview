(() => {
  if (window.eaFooterContactInstalled) return;
  window.eaFooterContactInstalled = true;
  const boundForms = new WeakSet();
  const sync = () => {
    const section = document.querySelector('[data-ea-footer-contact]');
    if (!section) return;
    const ids = [section.dataset.eaContactCta, ...(section.dataset.eaContactExtraCtas || '').split(/\s+/)].filter(Boolean);
    for (const id of ids) {
      const cta = document.getElementById(id);
      if (!cta) continue;
      cta.setAttribute('data-ea-footer-contact-trigger', '');
      cta.setAttribute('aria-controls', section.id);
      if (cta.tagName === 'A') cta.setAttribute('href', '#' + section.id);
      else { cta.setAttribute('role', 'link'); cta.tabIndex = 0; }
    }
    const form = section.querySelector('form');
    if (form && !boundForms.has(form)) { boundForms.add(form); bindForm(form); }
  };
  const isEditing = () => !!document.querySelector('[data-ea-live-editor="editing"]');
  const open = () => {
    if (isEditing()) return false;
    const section = document.querySelector('[data-ea-footer-contact]');
    if (!section) return false;
    // The imported page scrolls by translating its content container.
    if (window.eaMenuScrollTo?.(section.id) !== true) {
      section.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    }
    section.querySelector('input:not([type="hidden"]):not([type="checkbox"])')?.focus({ preventScroll: true });
    return true;
  };
  document.addEventListener('click', event => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
    if (!event.target.closest?.('[data-ea-footer-contact-trigger]') || !open()) return;
    event.preventDefault(); event.stopImmediatePropagation();
  }, true);
  document.addEventListener('keydown', event => {
    if (event.target.closest?.('[data-ea-footer-contact-trigger]') && ['Enter', ' '].includes(event.key) && open()) {
      event.preventDefault(); event.stopImmediatePropagation();
    }
  }, true);
  function bindForm(form) {
    const editable = target => !!target.closest?.('input,textarea,select,[contenteditable="true"]');
    // Native page shortcuts must not move the page while a visitor edits a field.
    form.addEventListener('keydown', event => {
      if (editable(event.target) && /^(?:Arrow(?:Up|Down|Left|Right)|PageUp|PageDown|Home|End| )$/.test(event.key)) event.stopPropagation();
    }, true);
    form.addEventListener('wheel', event => {
      const control = event.target.closest?.('textarea');
      if (!control || event.ctrlKey || control.scrollHeight <= control.clientHeight) return;
      const canScroll = event.deltaY < 0 ? control.scrollTop > 0 : event.deltaY > 0 && control.scrollTop + control.clientHeight < control.scrollHeight - 1;
      if (canScroll) event.stopPropagation();
    }, { passive: true });
    let editingTouch = false;
    form.addEventListener('touchstart', event => {
      editingTouch = editable(event.target);
      if (editingTouch) event.stopPropagation();
    }, { passive: true });
    form.addEventListener('touchmove', event => { if (editingTouch) event.stopPropagation(); }, { passive: true });
    const finishTouch = event => { if (editingTouch) event.stopPropagation(); editingTouch = false; };
    form.addEventListener('touchend', finishTouch, { passive: true });
    form.addEventListener('touchcancel', finishTouch, { passive: true });
  }
  sync();
  // Imported navigation may replace the page container without reloading this
  // script. Bind its new controls and form while keeping one delegated handler.
  new MutationObserver(sync).observe(document.body, { childList: true, subtree: true });
})();
