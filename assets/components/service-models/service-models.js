const desktop = matchMedia('(min-width: 992px)');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const modelKeys = new Set(['busto', 'nose', 'heart', 'fire', 'cream', 'cat', 'queen', 'king']);

// The same OBJ triangles serve the flat-shaded artwork and the wireframe.
function readGeometry(THREE, source) {
  const vertices = [];
  const triangles = [];

  for (const line of source.split('\n')) {
    const [kind, ...values] = line.split('#', 1)[0].trim().split(/\s+/);
    if (kind === 'v') {
      vertices.push(values.slice(0, 3).map(Number));
    } else if (kind === 'f') {
      const face = values.map((value) => {
        const index = parseInt(value.split('/', 1)[0], 10);
        return vertices[index < 0 ? vertices.length + index : index - 1];
      });
      if (face.some((vertex) => !vertex || vertex.length !== 3 || !vertex.every(Number.isFinite))) continue;
      for (let index = 1; index + 1 < face.length; index += 1) {
        triangles.push(...face[0], ...face[index], ...face[index + 1]);
      }
    }
  }

  if (!triangles.length) throw new Error('Service model has no faces');
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(triangles, 3));
  geometry.computeBoundingBox();
  const size = geometry.boundingBox.getSize(new THREE.Vector3());
  const center = geometry.boundingBox.getCenter(new THREE.Vector3());
  const scale = 2 / Math.max(size.x, size.y, size.z);
  geometry.translate(-center.x, -center.y, -center.z);
  geometry.scale(scale, scale, scale);
  geometry.computeVertexNormals();
  return { geometry, width: size.x * scale, height: size.y * scale };
}

function createStage(THREE, carousel, track, slots) {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  const canvas = renderer.domElement;
  canvas.className = 'largo-service-model-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  carousel.prepend(canvas);
  renderer.autoClear = false;
  renderer.setClearColor(0, 0);
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, .1, 30);
  const brandPurple = getComputedStyle(document.documentElement).getPropertyValue('--color-blue').trim() || '#784DFF';
  const solidMaterial = new THREE.MeshPhongMaterial({ color: brandPurple, flatShading: true, shininess: 8 });
  const wireMaterial = new THREE.LineBasicMaterial({ color: brandPurple, transparent: true, opacity: .34 });
  scene.add(new THREE.HemisphereLight(0xf1eaff, 0x645281, .68));

  for (const [color, intensity, x, y, z] of [
    [0xffffff, 1.05, 0, 4.5, 3.5],
    [0xd0bdff, .55, -6, 3.5, 3.5],
    [0x9777e8, .42, 2, -4.5, 3],
  ]) {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z);
    scene.add(light);
  }

  const requests = new Map();
  const fetches = new AbortController();
  const listeners = new AbortController();
  const target = { x: 0, y: 0 };
  const tilt = { x: 0, y: 0 };
  let activeSlide;
  let spinStart = -Infinity;
  let width = 0;
  let height = 0;
  let canvasOffset = 0;
  let frame = 0;
  let visible = false;
  let lost = false;

  function drawSoon() {
    if (!frame && visible && !lost && !document.hidden) frame = requestAnimationFrame(draw);
  }

  function modelFor(key) {
    if (requests.has(key)) return requests.get(key);
    requests.set(key, null);
    fetch(new URL(`${key}.obj`, import.meta.url), { signal: fetches.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Service model returned ${response.status}`);
        return response.text();
      })
      .then((source) => {
        if (fetches.signal.aborted) return;
        const { geometry, width: modelWidth, height: modelHeight } = readGeometry(THREE, source);
        const solid = new THREE.Mesh(geometry, solidMaterial);
        requests.set(key, { solid, wire: null, modelWidth, modelHeight });
        drawSoon();
      })
      .catch(() => {}); // The original artwork remains visible if this model fails.
    return null;
  }

  function clearReady() {
    for (const { slide } of slots) slide.removeAttribute('data-largo-service-model-ready');
  }

  function draw(time) {
    frame = 0;
    try {
      renderFrame(time);
    } catch {
      lost = true;
      canvas.style.visibility = 'hidden';
      clearReady();
    }
  }

  function renderFrame(time) {
    const mobile = !desktop.matches;
    const viewport = window.visualViewport;
    const viewportTop = viewport?.offsetTop ?? 0;
    const viewportBottom = viewportTop + (viewport?.height ?? innerHeight);
    // The imported mobile scroller translates the page. Keep one viewport-sized
    // canvas within the carousel and move it with the visible slice of the list.
    const offset = mobile ? Math.max(0, viewportTop - carousel.getBoundingClientRect().top) : 0;
    if (offset !== canvasOffset) {
      canvasOffset = offset;
      canvas.style.transform = offset ? `translateY(${offset}px)` : '';
    }
    const canvasRect = canvas.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    if (!canvasRect.width || !canvasRect.height) return;
    if (canvasRect.width !== width || canvasRect.height !== height) {
      width = canvasRect.width;
      height = canvasRect.height;
      renderer.setSize(width, height, false);
    }

    const current = track.querySelector('[data-largo-service-active]');
    if (current !== activeSlide) {
      if (activeSlide && time - spinStart >= 950) spinStart = time;
      activeSlide = current;
    }

    const still = mobile || reducedMotion.matches;
    tilt.x += (target.x - tilt.x) * .15;
    tilt.y += (target.y - tilt.y) * .15;
    const progress = still ? 1 : Math.min(1, (time - spinStart) / 950);
    const rotation = -Math.PI * 2 * Math.pow(1 - progress, 3);
    const ready = new Set();

    renderer.setScissorTest(false);
    renderer.clear();
    renderer.setScissorTest(true);

    for (const { slide, art, key } of slots) {
      const rect = art.getBoundingClientRect();
      const left = Math.max(rect.left, trackRect.left, canvasRect.left);
      const right = Math.min(rect.right, trackRect.right, canvasRect.right);
      const top = Math.max(rect.top, trackRect.top, canvasRect.top, mobile ? viewportTop : -Infinity);
      const bottom = Math.min(rect.bottom, trackRect.bottom, canvasRect.bottom, mobile ? viewportBottom : Infinity);
      if (right <= left || bottom <= top) continue;

      const model = modelFor(key);
      if (!model) continue;
      const active = slide === current;
      let mesh = model.solid;
      if (!mobile && !active) {
        model.wire ??= new THREE.LineSegments(new THREE.WireframeGeometry(model.solid.geometry), wireMaterial);
        mesh = model.wire;
      }
      camera.aspect = rect.width / rect.height;
      const viewHeight = mobile
        ? Math.max(2.25, model.modelHeight / .86, model.modelWidth / (camera.aspect * .9))
        : Math.max(2.45, model.modelHeight / .69, model.modelWidth / (camera.aspect * .76));
      camera.position.z = viewHeight / (2 * Math.tan(Math.PI / 12));
      camera.updateProjectionMatrix();
      mesh.rotation.x = active && !still ? tilt.x : 0;
      mesh.rotation.y = rotation + (active && !still ? tilt.y : 0);

      renderer.setViewport(rect.left - canvasRect.left, canvasRect.bottom - rect.bottom, rect.width, rect.height);
      renderer.setScissor(left - canvasRect.left, canvasRect.bottom - bottom, right - left, bottom - top);
      renderer.clearDepth();
      scene.add(mesh);
      renderer.render(scene, camera);
      scene.remove(mesh);
      ready.add(slide);
    }

    for (const { slide } of slots) slide.toggleAttribute('data-largo-service-model-ready', ready.has(slide));
    if (!still && (progress < 1 || Math.abs(target.x - tilt.x) + Math.abs(target.y - tilt.y) > .002)) drawSoon();
  }

  function listen(node, type, action) {
    node.addEventListener(type, action, { passive: true, signal: listeners.signal });
  }

  listen(track, 'scroll', drawSoon);
  listen(window, 'scroll', drawSoon);
  listen(window, 'resize', drawSoon);
  listen(desktop, 'change', drawSoon);
  if (window.visualViewport) {
    listen(window.visualViewport, 'scroll', drawSoon);
    listen(window.visualViewport, 'resize', drawSoon);
  }
  listen(carousel, 'pointermove', (event) => {
    if (!desktop.matches || reducedMotion.matches || event.pointerType === 'touch') return;
    const rect = track.getBoundingClientRect();
    target.x = ((event.clientY - rect.top) / rect.height - .5) * .2;
    target.y = ((event.clientX - rect.left) / rect.width - .5) * .25;
    drawSoon();
  });
  listen(carousel, 'pointerleave', () => {
    target.x = target.y = 0;
    drawSoon();
  });
  listen(document, 'visibilitychange', drawSoon);
  listen(reducedMotion, 'change', drawSoon);
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    lost = true;
    cancelAnimationFrame(frame);
    frame = 0;
    canvas.style.visibility = 'hidden';
    clearReady();
  }, { signal: listeners.signal });
  listen(canvas, 'webglcontextrestored', () => {
    lost = false;
    canvas.style.removeProperty('visibility');
    drawSoon();
  });

  const sizes = new ResizeObserver(drawSoon);
  sizes.observe(carousel);
  sizes.observe(track);
  sizes.observe(canvas);
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) drawSoon();
    else {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  });
  intersection.observe(track);
  const state = new MutationObserver(drawSoon);
  state.observe(track, { subtree: true, attributes: true, attributeFilter: ['data-largo-service-active'] });
  // Virtual scrolling does not dispatch a DOM scroll event.
  const page = track.closest('#page-container');
  let pageTransform = page?.style.transform;
  const pageScroll = new MutationObserver(() => {
    const transform = page.style.transform;
    if (transform === pageTransform) return;
    pageTransform = transform;
    if (!desktop.matches) drawSoon();
  });
  if (page) pageScroll.observe(page, { attributes: true, attributeFilter: ['style'] });
  drawSoon();

  return () => {
    listeners.abort();
    fetches.abort();
    cancelAnimationFrame(frame);
    sizes.disconnect();
    intersection.disconnect();
    state.disconnect();
    pageScroll.disconnect();
    clearReady();
    for (const model of requests.values()) {
      model?.solid.geometry.dispose();
      model?.wire?.geometry.dispose();
    }
    solidMaterial.dispose();
    wireMaterial.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    canvas.remove();
  };
}

function setup() {
  const track = document.querySelector('#projects-main [data-largo-service-carousel]');
  const carousel = track?.closest('.largo-services-carousel');
  if (!carousel || !window.ResizeObserver || !window.IntersectionObserver) return;
  const slots = Array.from(track.querySelectorAll('.largo-services-slide[data-largo-service-model]'), (slide) => ({
    slide,
    art: slide.querySelector('.project-item-main'),
    key: slide.dataset.largoServiceModel,
  })).filter(({ art, key }) => art && modelKeys.has(key));
  if (!slots.length) return;

  let dispose;
  let starting = false;
  let pageVisible = true;
  async function syncViewport() {
    if (!pageVisible) {
      dispose?.();
      dispose = undefined;
      return;
    }
    if (dispose || starting) return;

    starting = true;
    try {
      const THREE = await import('../../../scene/three.module.js');
      if (pageVisible) dispose = createStage(THREE, carousel, track, slots);
    } catch {
      // Browsers without WebGL keep the existing service artwork and controls.
    } finally {
      starting = false;
    }
  }

  window.addEventListener('pagehide', () => { pageVisible = false; syncViewport(); });
  window.addEventListener('pageshow', () => { pageVisible = true; syncViewport(); });
  syncViewport();
}

if (document.readyState === 'complete') setup();
else document.addEventListener('DOMContentLoaded', setup, { once: true });
