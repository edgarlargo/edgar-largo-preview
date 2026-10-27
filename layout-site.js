/* Native interactions for assembled pages, independent of the donor SPA. */
(() => {
  if (!document.documentElement.hasAttribute('data-ea-layout')) return;
  document.documentElement.classList.add('is-ready');
  const button = document.getElementById('header-right-menu-btn'), menu = document.getElementById('header-menu');
  if (button && menu) {
    const toggle = open => { document.documentElement.toggleAttribute('data-ea-layout-menu',open); button.setAttribute('aria-expanded',String(open)); };
    button.setAttribute('aria-controls',menu.id); toggle(false);
    button.addEventListener('click', () => toggle(button.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', event => { if(event.key==='Escape'){toggle(false);button.focus();} });
    menu.addEventListener('click', event => { if(event.target.closest('a[href]'))toggle(false); });
  }
  for (const video of document.querySelectorAll('video')) video.controls = true;
})();
