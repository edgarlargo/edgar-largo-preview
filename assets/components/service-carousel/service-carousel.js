(() => {
  const track = document.querySelector('#projects-main .project-list[data-ea-project-collection="services"][data-largo-service-carousel]');
  if (!track || track.closest('.largo-services-carousel')) return;

  const contactLink = document.querySelector('.header-menu-link[data-scroll-to="contact"]');
  const contactEmail = document.querySelector('#header-menu-talk a[href^="mailto:"]');
  if (contactLink && contactEmail) {
    contactLink.href = contactEmail.href;
    contactLink.removeAttribute('data-scroll-to');
  }

  const slides = Array.from(track.children).filter((child) => child.matches('.largo-services-slide, a.project-item'));
  if (!slides.length) return;
  const cards = slides.map((slide) => slide.matches('a.project-item') ? slide : slide.querySelector('a.project-item'));
  const projects = track.querySelector(':scope > .largo-services-projects');
  const panels = projects ? [...slides, projects] : slides;

  const desktop = matchMedia('(min-width: 992px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const carousel = document.createElement('section');
  carousel.className = 'largo-services-carousel';
  carousel.setAttribute('aria-labelledby', 'projects-main-title');
  track.id ||= 'largo-services-track';

  const controls = document.createElement('div');
  controls.className = 'largo-services-controls';
  controls.setAttribute('role', 'group');
  controls.setAttribute('aria-label', 'Service navigation');

  const pagination = document.createElement('div');
  pagination.className = 'largo-services-pagination';
  const arrows = document.createElement('div');
  arrows.className = 'largo-services-arrows';

  function control(className, label, action) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-controls', track.id);
    button.addEventListener('click', action);
    return button;
  }

  function serviceTitle(card, index) {
    return card.getAttribute('aria-label') || card.querySelector('.project-item-line-2-inner')?.textContent.trim() || `Service ${index + 1}`;
  }

  const pages = cards.map((card, index) => {
    const page = control('largo-services-page', serviceTitle(card, index), () => moveTo(index));
    page.textContent = String(index + 1).padStart(2, '0');
    pagination.append(page);
    return page;
  });

  function arrow(direction, label, path, step) {
    const button = control(`largo-services-arrow largo-services-arrow--${direction}`, label, () => {
      if (button.getAttribute('aria-disabled') !== 'true') moveTo(commandIndex() + step);
    });
    button.innerHTML = `<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"/></svg>`;
    return button;
  }

  const previous = arrow('prev', 'Previous service', 'm14.5 6-6 6 6 6', -1);
  const next = arrow('next', 'Next service', 'm9.5 6 6 6-6 6', 1);
  arrows.append(previous, next);
  controls.append(pagination, arrows);
  track.before(carousel);
  carousel.append(track, controls);
  carousel.setAttribute('data-largo-services-ready', '');

  function isolateDialog(modal) {
    modal.addEventListener('click', (event) => {
      if (event.target !== modal) return;
      const rect = modal.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) modal.close();
    });

    // Keep the theme's virtual page scrolling out of the open dialog.
    for (const type of ['wheel', 'mousewheel', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'keydown']) {
      modal.addEventListener(type, (event) => event.stopPropagation());
    }
  }

  const dialog = document.createElement('dialog');
  const supportsDialog = typeof dialog.showModal === 'function';
  const descriptions = slides.map((slide) => slide.querySelector('.largo-services-description'));
  let openDescription;
  let overviewTrigger;

  if (supportsDialog && descriptions.some(Boolean)) {
    dialog.className = 'largo-services-dialog';
    dialog.setAttribute('aria-labelledby', 'largo-services-dialog-title');
    const header = document.createElement('div');
    header.className = 'largo-services-dialog-header';
    const title = document.createElement('h2');
    title.id = 'largo-services-dialog-title';
    title.className = 'largo-services-dialog-title';
    title.tabIndex = -1;
    title.setAttribute('autofocus', '');
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'largo-services-dialog-close';
    close.setAttribute('aria-label', 'Close details');
    close.innerHTML = '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>';
    close.addEventListener('click', () => dialog.close());
    header.append(title, close);
    const body = document.createElement('div');
    body.className = 'largo-services-dialog-body';
    body.tabIndex = 0;
    dialog.append(header, body);
    document.body.append(dialog);
    isolateDialog(dialog);

    dialog.addEventListener('close', () => {
      if (dialog.open || !openDescription) return;
      openDescription.append(...body.childNodes);
      openDescription = undefined;
      overviewTrigger?.focus({ preventScroll: true });
      overviewTrigger = undefined;
    });

    track.addEventListener('click', (event) => {
      if (desktop.matches || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || dialog.open || openDescription) return;
      const card = event.target.closest('a.project-item');
      const index = cards.indexOf(card);
      const description = descriptions[index];
      if (!description?.hasChildNodes()) return;

      title.textContent = serviceTitle(card, index);
      body.append(...description.childNodes);
      try {
        dialog.showModal();
      } catch {
        description.append(...body.childNodes);
        return;
      }
      event.preventDefault();
      openDescription = description;
      overviewTrigger = card;
      body.scrollTop = 0;
    });
  }

  const requestDialog = document.querySelector('dialog[data-largo-service-request-dialog]');
  const requestForm = requestDialog?.querySelector('form[data-ea-contact-form]');
  const requestServiceId = requestForm?.querySelector('input[name="service_id"]');
  const requestTitle = requestDialog?.querySelector('#largo-services-request-heading');
  const closeRequest = requestDialog?.querySelector('[data-largo-request-close]');

  if (supportsDialog && requestForm && requestServiceId && requestTitle && closeRequest) {
    const requestStatus = requestForm.querySelector('[data-ea-form-status]');
    let requestTrigger;
    requestTitle.tabIndex = -1;
    isolateDialog(requestDialog);

    closeRequest.addEventListener('click', (event) => {
      event.preventDefault();
      requestDialog.close();
    });
    requestDialog.addEventListener('close', () => {
      if (requestDialog.open) return;
      requestTrigger?.focus({ preventScroll: true });
      requestTrigger = undefined;
    });

    slides.forEach((slide, index) => {
      const trigger = slide.querySelector('button[data-largo-service-request]');
      const serviceId = trigger?.dataset.largoServiceRequest;
      if (!serviceId) return;

      trigger.addEventListener('click', () => {
        if (requestDialog.open) return;
        if (requestServiceId.value !== serviceId) {
          if (requestForm.dataset.eaSubmitting === 'true') return;
          requestForm.reset();
          if (requestStatus) {
            requestStatus.hidden = true;
            requestStatus.textContent = '';
          }
        }

        requestServiceId.defaultValue = serviceId;
        requestServiceId.value = serviceId;
        requestTitle.textContent = `Request ${serviceTitle(cards[index], index)}`;
        requestDialog.showModal();
        requestTrigger = trigger;
        requestForm.scrollTop = 0;
        requestTitle.focus({ preventScroll: true });
      });
      trigger.setAttribute('aria-haspopup', 'dialog');
      trigger.hidden = false;
    });
  }

  let offsets = [];
  let activeIndex = -1;
  let arrowIndex = -1;
  let requestedIndex = 0;
  let requestExpires = 0;
  let frame = 0;
  let wheelDirection = 0;
  let wheelLockUntil = 0;
  let projectProgress = 0;
  let projectFrame = 0;
  let projectLastTick = 0;
  let projectHoldUntil = 0;
  let projectNavigation = 0;
  let projectNavigating = false;
  let projectTouch;
  let suppressProjectClickUntil = 0;

  function projectNavigationLocked() {
    if (document.hidden || document.querySelector('dialog[open], #header.--menu-opened, #header-menu.--opened, [data-ea-live-editor="editing"], form[data-ea-submitting="true"]')) return true;
    return ['#video-overlay', '#input-blocker', '#transition-overlay', '#preloader'].some((selector) => {
      const overlay = document.querySelector(selector);
      if (!overlay || overlay.hidden) return false;
      const style = getComputedStyle(overlay);
      const rect = overlay.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && style.pointerEvents !== 'none' && rect.width > 0 && rect.height > 0;
    });
  }

  function navigateProjects() {
    if (!projects || projectNavigating || projectNavigationLocked()) return false;
    projectNavigating = true;
    resetProjectProgress();
    window.location.assign(projects.href);
    return true;
  }

  function atProjectsEnd() {
    if (!projects || projectNavigationLocked()) return false;
    if (desktop.matches) return activeIndex === panels.length - 1 &&
      Math.abs(track.scrollLeft - offsets[activeIndex]) < 2;
    const rect = projects.getBoundingClientRect();
    const height = window.visualViewport?.height || window.innerHeight;
    return rect.top >= 0 && rect.bottom <= height + 2 && rect.bottom >= height / 2;
  }

  function resetProjectProgress() {
    cancelAnimationFrame(projectFrame);
    clearTimeout(projectNavigation);
    projectFrame = 0;
    projectProgress = 0;
    projectNavigation = 0;
    projects?.style.removeProperty('--largo-project-progress');
  }

  function drawProjectProgress(time) {
    if (!atProjectsEnd()) {
      resetProjectProgress();
      return;
    }
    const elapsed = projectTouch?.ready ? 0 : Math.max(0, (time - Math.max(projectLastTick, projectHoldUntil)) / 1000);
    projectLastTick = time;
    projectProgress = Math.max(0, projectProgress - elapsed * .2);
    projects.style.setProperty('--largo-project-progress', projectProgress);
    projectFrame = projectProgress > 0 ? requestAnimationFrame(drawProjectProgress) : 0;
  }

  function advanceProjectProgress(delta, deltaMode, commit = true) {
    if (projectNavigation) return;
    const unit = deltaMode === 1 ? 16 : deltaMode === 2 ? track.clientWidth : 1;
    // Match the site's next-page scroll distance and require more than one wheel tick.
    projectProgress = Math.min(1, projectProgress + Math.min(delta * unit, 100) / 240);
    projects.style.setProperty('--largo-project-progress', projectProgress);
    if (projectProgress === 1 && commit) {
      cancelAnimationFrame(projectFrame);
      projectFrame = 0;
      projectNavigation = window.setTimeout(() => {
        if (atProjectsEnd()) navigateProjects();
        else resetProjectProgress();
      }, reducedMotion.matches ? 0 : 160);
      return;
    }
    const now = performance.now();
    projectHoldUntil = now + 300;
    if (projectFrame) return;
    projectLastTick = now;
    projectFrame = requestAnimationFrame(drawProjectProgress);
  }

  projects?.addEventListener('click', (event) => {
    if (!event.detail || performance.now() >= suppressProjectClickUntil) return;
    event.preventDefault();
    event.stopPropagation();
  });

  projects?.addEventListener('touchstart', (event) => {
    projectTouch = undefined;
    if (desktop.matches) return;
    if (event.touches.length !== 1 || projectNavigationLocked()) {
      resetProjectProgress();
      return;
    }
    suppressProjectClickUntil = 0;
    const touch = event.touches[0];
    projectTouch = { id: touch.identifier, x: touch.clientX, y: touch.clientY, lastY: touch.clientY, minimumY: touch.clientY, ready: atProjectsEnd(), dragged: false };
  }, { passive: true });

  projects?.addEventListener('touchmove', (event) => {
    const state = projectTouch;
    if (!state) return;
    const touch = Array.from(event.touches).find((item) => item.identifier === state.id);
    if (event.touches.length !== 1 || !touch || desktop.matches || projectNavigationLocked()) {
      projectTouch = undefined;
      resetProjectProgress();
      return;
    }
    const dx = touch.clientX - state.x;
    const dy = state.y - touch.clientY;
    const delta = state.lastY - touch.clientY;
    state.lastY = touch.clientY;
    state.minimumY = Math.min(state.minimumY, touch.clientY);
    if (Math.hypot(dx, dy) > 12) {
      state.dragged = true;
      suppressProjectClickUntil = performance.now() + 700;
    }
    if (!state.ready) return;
    if (Math.abs(dx) > Math.max(24, Math.abs(dy) * .75) || touch.clientY - state.minimumY > 12 || !atProjectsEnd()) {
      state.ready = false;
      resetProjectProgress();
      return;
    }
    if (dy < 24 || delta <= 0) return;
    if (event.cancelable) event.preventDefault();
    advanceProjectProgress(delta, 0, false);
  }, { passive: false });

  projects?.addEventListener('touchend', (event) => {
    const state = projectTouch;
    if (!state || !Array.from(event.changedTouches).some((touch) => touch.identifier === state.id)) return;
    projectTouch = undefined;
    if (state.dragged) suppressProjectClickUntil = performance.now() + 700;
    if (event.touches.length !== 0) {
      resetProjectProgress();
      return;
    }
    if (state.ready && state.dragged && projectProgress === 1 && atProjectsEnd()) advanceProjectProgress(0, 0);
  }, { passive: true });

  // A second finger can start outside the panel; it cancels only our pending gesture.
  document.addEventListener('touchstart', (event) => {
    if (projectTouch && event.touches.length !== 1) {
      projectTouch = undefined;
      resetProjectProgress();
    }
  }, { capture: true, passive: true });

  projects?.addEventListener('touchcancel', () => {
    projectTouch = undefined;
    resetProjectProgress();
  }, { passive: true });

  function updateArrows() {
    const index = commandIndex();
    if (index === arrowIndex) return;
    previous.setAttribute('aria-disabled', String(index === 0));
    next.setAttribute('aria-disabled', String(index === panels.length - 1));
    next.setAttribute('aria-label', projects && index === slides.length - 1 ? 'Show projects panel' : 'Next service');
    arrowIndex = index;
  }

  function render() {
    if (!desktop.matches) return;
    const left = track.scrollLeft;
    const index = offsets.reduce((nearest, offset, i) => (
      Math.abs(offset - left) < Math.abs(offsets[nearest] - left) ? i : nearest
    ), 0);
    if (activeIndex !== index) {
      pages[activeIndex]?.removeAttribute('aria-current');
      panels[activeIndex]?.removeAttribute('data-largo-service-active');
      pages[index]?.setAttribute('aria-current', 'true');
      panels[index].setAttribute('data-largo-service-active', '');
      activeIndex = index;
    }
    updateArrows();
  }

  function measure() {
    if (!desktop.matches) return;
    const left = track.getBoundingClientRect().left + track.clientLeft;
    const padding = parseFloat(getComputedStyle(track).scrollPaddingInlineStart) || 0;
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    offsets = panels.map((panel) => Math.max(0, Math.min(max, panel.getBoundingClientRect().left - left + track.scrollLeft - padding)));
    render();
  }

  function commandIndex() {
    return performance.now() < requestExpires ? requestedIndex : activeIndex;
  }

  function moveTo(index, focusCard = false) {
    if (!desktop.matches) return;
    requestedIndex = Math.max(0, Math.min(panels.length - 1, index));
    requestExpires = performance.now() + 750;
    if (requestedIndex < panels.length - 1) resetProjectProgress();
    if (focusCard) (cards[requestedIndex] ?? projects).focus({ preventScroll: true });
    track.scrollTo({ left: offsets[requestedIndex], behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    updateArrows();
  }

  track.addEventListener('scroll', () => {
    if (!frame) frame = requestAnimationFrame(() => {
      frame = 0;
      render();
    });
  }, { passive: true });
  track.addEventListener('scrollend', () => {
    requestExpires = 0;
    render();
  });
  track.addEventListener('pointerdown', () => { requestExpires = 0; });
  track.addEventListener('focusin', (event) => {
    const index = event.target === projects ? slides.length : cards.indexOf(event.target);
    if (!desktop.matches || index < 0 || index === commandIndex()) return;
    requestExpires = 0;
    track.scrollTo({ left: offsets[index], behavior: 'instant' });
    render();
  });

  carousel.addEventListener('keydown', (event) => {
    if (!desktop.matches || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.target.closest('.largo-services-description')) {
      event.stopPropagation();
      return;
    }
    let index = commandIndex();
    if (event.key === 'ArrowLeft') index -= 1;
    else if (event.key === 'ArrowRight') index += 1;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = panels.length - 1;
    else return;

    event.preventDefault();
    event.stopPropagation();
    moveTo(index, event.target.matches('a.project-item, [data-largo-service-request], .largo-services-projects'));
  });

  carousel.addEventListener('wheel', (event) => {
    if (!desktop.matches) return;

    // Keep desktop wheel gestures inside the service rail. The theme's
    // window handler would otherwise cancel native scrolling and move the page.
    event.stopPropagation();
    if (event.ctrlKey || event.metaKey) return;
    const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
    const delta = horizontal ? event.deltaX : event.deltaY;
    if (delta > 0 && atProjectsEnd()) {
      event.preventDefault();
      advanceProjectProgress(delta, event.deltaMode);
      return;
    }
    if (delta < 0 && projectProgress > 0) resetProjectProgress();
    if (horizontal) {
      requestExpires = 0;
      return;
    }

    const description = event.target.closest('.largo-services-description');
    if (description) {
      const canScroll = event.deltaY < 0 ? description.scrollTop > 0 : description.scrollTop + description.clientHeight < description.scrollHeight - 1;
      if (canScroll) return;
      const canShowProjects = projects && event.deltaY > 0 && commandIndex() === slides.length - 1;
      if (!canShowProjects) {
        event.preventDefault();
        return;
      }
    }

    event.preventDefault();
    if (!event.deltaY || event.target.closest('.project-item-excerpt')) return;

    const now = performance.now();
    const direction = Math.sign(event.deltaY);
    const locked = direction === wheelDirection && now < wheelLockUntil;
    const destination = commandIndex() + direction;
    if (locked || destination < 0 || destination >= panels.length) return;

    wheelDirection = direction;
    wheelLockUntil = now + 480;
    moveTo(destination);
  }, { passive: false });

  carousel.addEventListener('mousewheel', (event) => {
    if (desktop.matches) event.stopPropagation();
  }, { passive: true });

  function updateLayout() {
    controls.hidden = !desktop.matches || panels.length < 2;
    for (let index = 0; index < cards.length; index += 1) {
      if (!desktop.matches && supportsDialog && descriptions[index]) cards[index].setAttribute('aria-haspopup', 'dialog');
      else cards[index].removeAttribute('aria-haspopup');
    }
    requestExpires = 0;
    wheelLockUntil = 0;
    projectTouch = undefined;
    resetProjectProgress();
    if (desktop.matches) {
      if (dialog.open) dialog.close();
      if (panels.length > 1) track.tabIndex = 0;
      measure();
    } else {
      track.removeAttribute('tabindex');
      pages[activeIndex]?.removeAttribute('aria-current');
      panels[activeIndex]?.removeAttribute('data-largo-service-active');
      activeIndex = -1;
    }
  }

  updateLayout();
  function resetProjectInteraction() {
    projectTouch = undefined;
    projectNavigating = false;
    suppressProjectClickUntil = 0;
    resetProjectProgress();
  }
  window.addEventListener('pagehide', resetProjectInteraction);
  window.addEventListener('pageshow', resetProjectInteraction);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) resetProjectInteraction();
  });
  desktop.addEventListener('change', updateLayout);
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(track);
  else window.addEventListener('resize', measure);
})();
