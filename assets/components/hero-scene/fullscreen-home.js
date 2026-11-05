(() => {
  const root = document.documentElement;
  const hero = document.querySelector('#home > #home-hero');
  if (!hero || !root.hasAttribute('data-largo-home-hero-fullscreen')) return;

  const observer = new IntersectionObserver(([entry]) => {
    root.toggleAttribute('data-largo-home-hero-in-view', entry.isIntersecting);
  }, { rootMargin: '-64px 0px 0px 0px' });
  observer.observe(hero);
})();
