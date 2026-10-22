/* Only integrations explicitly configured in Admintation are managed here. */
(() => {
  const source = document.getElementById('ea-site-preferences');
  if (!source || window.AdmintationConsent) return;
  let config;
  try { config = JSON.parse(source.textContent); } catch { return; }
  const cookies = config.cookies || {}, integrations = Array.isArray(config.integrations) ? config.integrations : [];
  const positions = ['bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right'];
  const position = positions.includes(cookies.position) ? cookies.position : 'bottom-left';
  const type = cookies.type === 'bar' ? 'bar' : 'card';
  const theme = cookies.theme === 'dark' ? 'dark' : 'light';
  const key = 'admintation-consent:' + config.scope, ttl = 180 * 24 * 60 * 60 * 1000;
  const running = new Set();
  const ru = config.language === 'ru';
  const t = (a, b) => ru ? a : b;
  const labels = {
    accept: t('Принять все', 'Accept all'), reject: t('Только необходимые', 'Necessary only'),
    preferences: t('Настроить', 'Preferences'), save: t('Сохранить выбор', 'Save choices'),
    withdraw: t('Настройки cookies', 'Cookie settings')
  };
  for (const name of Object.keys(labels)) if (cookies.labels?.[name]) labels[name] = cookies.labels[name];
  const read = value => {
    try {
      const choice = JSON.parse(value);
      if (choice.version !== config.consentVersion || !Number.isFinite(choice.at) || Date.now() - choice.at > ttl || choice.at > Date.now() + 60000 || typeof choice.analytics !== 'boolean' || typeof choice.marketing !== 'boolean') return null;
      return choice;
    } catch { return null; }
  };
  let choice = null;
  try { choice = read(localStorage.getItem(key)); } catch { /* A choice still works for this visit. */ }
  const allowed = category => category === 'necessary' || !cookies.enabled || choice?.[category] === true;
  const optionalRunning = () => integrations.some(item => item.category !== 'necessary' && running.has(item.id));

  async function insert(node, parent) {
    if (node.nodeType !== 1) { parent.appendChild(node.cloneNode(true)); return; }
    if (node.tagName === 'SCRIPT') {
      const script = document.createElement('script');
      for (const attr of node.attributes) script.setAttribute(attr.name, attr.value);
      if (config.nonce) script.setAttribute('nonce', config.nonce);
      script.textContent = node.textContent;
      // Keep a script URL followed by its inline setup in the supplied order.
      if (script.hasAttribute('src') && !script.hasAttribute('async') && script.type !== 'module') {
        script.async = false;
        await new Promise(resolve => {
          const timeout = setTimeout(resolve, 15000);
          script.onload = script.onerror = () => { clearTimeout(timeout); resolve(); };
          parent.appendChild(script);
        });
      } else parent.appendChild(script);
      return;
    }
    const copy = node.cloneNode(false); if (node.tagName === 'STYLE' && config.nonce) copy.setAttribute('nonce', config.nonce); parent.appendChild(copy);
    for (const child of [...node.childNodes]) await insert(child, copy);
  }
  async function activate(item) {
    if (!item.enabled || running.has(item.id) || !allowed(item.category)) return;
    running.add(item.id);
    const template = document.createElement('template'); template.innerHTML = item.code;
    const parent = item.position === 'head' ? document.head : document.body;
    for (const child of [...template.content.childNodes]) await insert(child, parent);
  }
  const apply = () => {
    for (const item of integrations) activate(item).catch(() => { /* One service must not stop the site. */ });
    window.dispatchEvent(new CustomEvent('admintation:consent', {detail: {necessary: true, analytics: allowed('analytics'), marketing: allowed('marketing')}}));
  };
  const persist = value => {
    choice = value;
    try { if (value) localStorage.setItem(key, JSON.stringify(value)); else localStorage.removeItem(key); } catch { /* Storage is optional. */ }
  };
  let panel, launcher, opener, analytics, marketing;
  const make = (tag, text, parent) => {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (parent) parent.appendChild(element);
    return element;
  };
  const button = (text, parent, callback, secondary = false) => {
    const element = make('button', text, parent); element.type = 'button';
    if (secondary) element.className = 'ea-consent-secondary';
    element.addEventListener('click', callback); return element;
  };
  const hide = () => {
    if (!panel) return;
    const restoreFocus = panel.contains(document.activeElement);
    panel.hidden = true;
    const target = opener || launcher;
    if (restoreFocus && target?.isConnected !== false) target?.focus({preventScroll: true});
    opener = null;
  };
  const save = (a, m) => {
    const reduced = (choice?.analytics === true && !a) || (choice?.marketing === true && !m);
    persist({version: config.consentVersion, at: Date.now(), analytics: a, marketing: m});
    hide();
    // A running third-party script cannot be reliably unloaded. A new document
    // applies the withdrawn choice before any managed optional code executes.
    if (reduced && optionalRunning()) { window.location.reload(); return; }
    apply();
  };
  function open(preferences = false) {
    if (!cookies.enabled) return;
    const inside = panel?.contains(document.activeElement);
    const moveFocus = preferences || !!launcher && document.activeElement === launcher || inside;
    if (preferences && !inside) opener = document.activeElement;
    if (!panel) {
      panel = make('section', '', document.body); panel.id = 'ea-consent';
      panel.dataset.position = position;
      panel.dataset.type = type; panel.dataset.theme = theme;
      panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-labelledby', 'ea-consent-title');
    }
    panel.replaceChildren(); panel.hidden = false;
    panel.dataset.view = preferences ? 'preferences' : 'notice';
    const copy = make('div', '', panel); copy.className = 'ea-consent-copy';
    const title = make('h2', t('Ваш выбор cookies', 'Your cookie choices'), copy); title.id = 'ea-consent-title';
    make('p', cookies.message || t('Выберите, разрешить ли дополнительные сервисы аналитики и маркетинга. Необходимые функции работают всегда.', 'Choose whether to allow optional analytics and marketing services. Necessary functions always work.'), copy);
    if (cookies.privacyUrl) { const policy = make('a', t('Политика конфиденциальности', 'Privacy policy'), copy); policy.href = cookies.privacyUrl; policy.target = '_blank'; policy.rel = 'noopener noreferrer'; }
    if (preferences) {
      const group = make('div', '', panel); group.className = 'ea-consent-options';
      const option = (name, checked, disabled) => {
        const label = make('label', '', group), input = make('input', '', label); input.type = 'checkbox'; input.checked = checked; input.disabled = disabled;
        make('span', name, label); return input;
      };
      option(t('Необходимые — всегда включены', 'Necessary — always enabled'), true, true);
      analytics = option(t('Аналитика', 'Analytics'), choice?.analytics === true, false);
      marketing = option(t('Маркетинг', 'Marketing'), choice?.marketing === true, false);
    }
    const actions = make('div', '', panel); actions.className = 'ea-consent-actions';
    button(labels.reject, actions, () => save(false, false), true);
    button(labels.accept, actions, () => save(true, true));
    if (preferences) button(labels.save, actions, () => save(analytics.checked, marketing.checked), true);
    else button(labels.preferences, actions, () => open(true), true);
    if (choice) button(t('Закрыть', 'Close'), actions, hide, true);
    if (moveFocus) panel.querySelector('input:not(:disabled),button')?.focus({preventScroll: true});
  }
  window.AdmintationConsent = {
    get: () => ({necessary: true, analytics: allowed('analytics'), marketing: allowed('marketing'), chosen: !!choice}),
    open: () => open(true),
    accept: () => save(true, true),
    reject: () => save(false, false),
    save: values => save(values?.analytics === true, values?.marketing === true),
    withdraw: () => { const reload = optionalRunning(); persist(null); if (reload) window.location.reload(); else { apply(); open(); } }
  };
  if (cookies.enabled) {
    if (cookies.showLauncher !== false) {
      launcher = button(labels.withdraw, document.body, () => open(true), true); launcher.id = 'ea-consent-open';
      launcher.dataset.position = position;
      launcher.dataset.theme = theme;
    }
    if (!choice) open();
    window.addEventListener('storage', event => {
      if (event.key !== key) return;
      const previous = choice; choice = read(event.newValue);
      if (((previous?.analytics && !choice?.analytics) || (previous?.marketing && !choice?.marketing)) && optionalRunning()) { window.location.reload(); return; }
      apply(); if (choice) hide(); else open();
    });
  }
  apply();
})();
