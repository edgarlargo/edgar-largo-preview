(() => {
  const selector = 'form[data-ea-footer-contact-form="true"][data-largo-remote-contact]';
  const states = new WeakMap();
  const endpointFor = form => {
    if (!form.matches?.(selector)) return null;
    try {
      const endpoint = new URL(form.dataset.largoRemoteContact);
      return endpoint.protocol === 'https:' && !endpoint.username && !endpoint.password && !endpoint.search && !endpoint.hash ? endpoint.href : null;
    } catch { return null; }
  };
  const stateFor = form => {
    if (!states.has(form)) states.set(form, {startedAt:Date.now(), requestId:null, fingerprint:null, generation:0, busy:false});
    return states.get(form);
  };
  const say = (form, message) => {
    let status = form.querySelector('[data-ea-form-status], [data-largo-preview-status]');
    if (!status) {
      status = document.createElement('p'); status.setAttribute('data-largo-preview-status', '');
      status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite'); form.appendChild(status);
    }
    status.hidden = !message; status.textContent = message;
  };
  const initialize = root => {
    if (root.matches?.(selector) && endpointFor(root)) stateFor(root);
    root.querySelectorAll?.(selector).forEach(form => { if (endpointFor(form)) stateFor(form); });
  };
  const uuid = () => {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID();
    const bytes = new Uint8Array(16); window.crypto.getRandomValues(bytes);
    bytes[6] = bytes[6] & 15 | 64; bytes[8] = bytes[8] & 63 | 128;
    const hex = Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return [hex.slice(0,8),hex.slice(8,12),hex.slice(12,16),hex.slice(16,20),hex.slice(20)].join('-');
  };
  const dataFor = form => {
    const data = new FormData(form), text = name => typeof data.get(name) === 'string' ? data.get(name).trim() : '';
    const page = new URL(window.location.href); page.hash = '';
    const payload = {name:text('name'), email:text('email'), phone:text('phone'), message:text('message'), ea_website:text('ea_website'), page_url:page.href, language:document.documentElement.lang || 'en'};
    if (text('marketing_consent') === 'yes') payload.marketing_consent = 'yes';
    return payload;
  };
  const send = async (form, endpoint, button) => {
    const state = stateFor(form);
    if (state.busy || !form.reportValidity()) return;
    const label = button?.querySelector('[data-ea-submit-label]'), originalLabel = label?.textContent, wasDisabled = button?.disabled;
    const fallback = form.dataset.eaErrorMessage || 'Could not send the message. Please try again.';
    const generation = state.generation;
    let timer;
    state.busy = true;
    if (button) button.disabled = true;
    if (label) label.textContent = form.dataset.eaSendingMessage || 'Sending…';
    form.setAttribute('aria-busy', 'true'); say(form, '');
    try {
      const payload = dataFor(form), fingerprint = JSON.stringify(payload);
      if (!state.requestId || state.fingerprint !== fingerprint) { state.requestId = uuid(); state.fingerprint = fingerprint; }
      payload.request_id = state.requestId; payload.started_at = state.startedAt;
      const dwell = Math.max(0, 800 - (Date.now() - state.startedAt));
      if (dwell) await new Promise(resolve => setTimeout(resolve, dwell));
      const controller = new AbortController(); timer = setTimeout(() => controller.abort(), 20000);
      const response = await fetch(endpoint, {method:'POST', credentials:'omit', mode:'cors', redirect:'error', headers:{'Content-Type':'application/json', Accept:'application/json'}, body:JSON.stringify(payload), signal:controller.signal});
      const result = await response.json(), message = typeof result?.message === 'string' && result.message.length <= 1000 ? result.message : '';
      if (!response.ok || result?.ok !== true) { say(form, message || fallback); return; }
      if (state.generation === generation) { form.reset(); state.requestId = null; state.fingerprint = null; state.startedAt = Date.now(); }
      say(form, form.dataset.eaSuccessMessage || message || 'Thanks! Your message has been received.');
    } catch { say(form, fallback); }
    finally {
      if (timer !== undefined) clearTimeout(timer);
      state.busy = false; form.removeAttribute('aria-busy');
      if (button) button.disabled = wasDisabled;
      if (label) label.textContent = originalLabel;
    }
  };
  // This remains the first capture handler. Unconfigured forms never submit.
  window.addEventListener('submit', async event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    event.preventDefault(); event.stopImmediatePropagation();
    const endpoint = endpointFor(form);
    if (!endpoint) { say(form, 'This is a website preview. Messages are not sent.'); return; }
    await send(form, endpoint, event.submitter || form.querySelector('button[type="submit"],input[type="submit"]'));
  }, true);
  for (const type of ['input', 'change', 'focusin']) window.addEventListener(type, event => {
    const form = event.target.closest?.(selector);
    if (!form || !endpointFor(form)) return;
    const state = stateFor(form);
    // Only a changed payload earns a new UUID in send(); redundant events or
    // editing and reverting must not duplicate an uncertain accepted message.
    if (type !== 'focusin') state.generation++;
  }, true);
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initialize(document), {once:true});
    else initialize(document);
    if (typeof MutationObserver !== 'undefined') new MutationObserver(records => {
      for (const record of records) for (const node of record.addedNodes) if (node.nodeType === 1) initialize(node);
    }).observe(document.documentElement, {childList:true, subtree:true});
  }
})();
