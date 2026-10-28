/* Hairline engine © Lucas Marques, MIT; illustrations © Edgar Largo Studio. */
(()=>{
/* hairline kernel sha256:346b48bdef2cdfafd5343eba01494255cf75f9c078e6fcd1aafc62bab62980a1 */
/*
 * HL: everything a figure may call. Read this index; the code under it is the
 * package's src/core, unchanged, and a figure should not need to read it.
 *
 * Every figure is drawn in a 400 × 320 viewBox. World space is x/y on the
 * ground and z up. Plates are filled with the ground colour and painted back
 * to front, so a nearer one covers a farther one: append in that order. At
 * the default camera, Cam(45, 0.5, S), +x runs down to the right and +y down
 * to the left, so the corner with the largest x and y is nearest the viewer:
 * append by ascending x + y, from the far corner (smallest x and y) to it.
 *
 * Camera
 *   Cam(azDeg, k, S)                       a camera: azimuth in degrees, k = sin(elevation) (0.5 is the 2:1 view), S = scale
 *   fit(C, points, cx, cy)                 centres the box of [x, y, z] points on (cx, cy); call it once, before proj
 *                                          it only centres, it never scales: choose S by trying values, with the most extreme pose in points.
 *                                          The six figures use S 1.42 to 2.12; the boxes they fit come out 230 to 310 wide and 180 to 245 tall
 *   proj(C)                                returns P(x, y, z), which gives [sx, sy]
 *   unproj(C, sx, sy, z)                   the world [x, y] under a screen point, on the plane at height z
 *   facing(C)                              returns front(sample): whether a ring sample faces the camera
 * Rounded solids
 *   rrect(u0, v0, u1, v1, r, n)            a rounded rectangle, as a ring of samples {u, v, nu, nv}
 *   circ(R, n)                             a circle, as a ring
 *   rings(x0, y0, x1, y1, r, b)            [ring, inner]: a rounded footprint and its crease ring, inset by b
 *                                          r, the corner radius, is cut to half the shorter side. b, the crease's inset in world units
 *                                          (0.6 to 2.2 in the figures), must stay under half the shorter side or the crease turns inside out
 *   prism(P, front, ring, inner, z0, z1)   {sil, crease}: a solid standing from z0 to z1, as two path strings
 *   ringAt(P, ring, z)                     the ring's points, projected at height z
 *   run(ring, keep)                        the one cyclic run of samples that pass keep
 *   hull(points)                           the convex hull of screen points
 *   extremes(P, ring)                      [left, right, nearest] samples: where dashed drops fall from
 *   fillet(points, radii, n)               rounds every vertex of a closed polygon; returns the new points
 *                                          radii is an array, one radius per vertex, each cut to half its shorter edge; a single number gives NaN.
 *                                          n is the steps round each corner, default 4: each vertex becomes n + 1 points
 *   ghost(P, front, ring, z0, depth)       a reflection's path {d, y0, y1}; reflect() draws it for you
 * Paths and numbers
 *   poly(points)                           a closed path string
 *   open(points)                           an open polyline string
 *   seg(a, b)                              one segment between two screen points [sx, sy], as its own subpath; project world points with P first
 *   clamp(v, a, b)
 *   lerp(a, b, t)
 *   rad(deg)
 *   r2(n)                                  two decimals
 * The continuous clock: one spring per moving number
 *   spring(x, opts)                        at rest on x; write .t to retarget; opts {k, c, m, eps}, default k 100, c 18, m 1
 *   stepS(sp, dt)                          advances by dt seconds; returns whether it is still moving
 * The discrete clock: a 700ms tween on (.32, .72, 0, 1)
 *   tween(v, dur)                          at rest on v; dur defaults to 700 (ms)
 *   tset(tw, to, now, delay)               retargets from where it is, after delay ms: the stagger
 *                                          the same target again does nothing, so calling it on every pointer move is safe
 *   tval(tw, now)                          its value at now
 *   tdone(tw, now)                         whether it has landed
 *   bezier(x1, y1, x2, y2)                 a CSS cubic-bezier, as a function of progress
 *   EASE_LIFT                              the lift curve itself
 *   reducedMotion()                        true when the reader asked for less motion; springs and tweens already land at once
 *   setReducedMotion(on)                   the loop's business, not a figure's
 * Drawing
 *   mk(tag, attrs, parent)                 one svg element: the only way a figure makes a node
 *   solid(parent)                          {g, sil, cr}: a group holding a silhouette path and a crease path
 *   put(solid, paths)                      writes prism()'s {sil, crease} into solid()'s {sil, cr}: sil into sil, crease into cr
 *   flatDot(parent, C, r, cls)             a dot lying on the ground plane; cls is "dot", "dot m" or "dot off"
 *   place(el, point)                       moves a dot or a circle to [sx, sy]
 *   reflect(svg, parent, P, front, ring, z0, depth)   a fading mirror under a solid
 *   fade(svg, y0, y1, a0)                  a vertical fade, as a mask; returns the value for a mask attribute
 * Life
 *   register(stage, tick)                  joins the one frame loop; tick(dt in seconds, now in ms) returns true to ask for another frame; gives {wake, unregister}
 *   pointer(stage, handlers)               {move(point), down(point), leave()}, points in viewBox units; returns its disposer
 *   disposer()                             {add, on, dispose}: collects tear-down, so destroy is bag.dispose
 * The bench's business, not a figure's
 *   css(lightDark)
 *   inject(root)
 *   tour(stage, stops, onStop)             an unseen pointer that walks the stops, [x, y] in viewBox units or null to leave, and gives way to a real one; onStop(i) on each arrival; returns {stop}
 *   LAP                                    the default stops: a diamond around the centre, then a leave
 *
 * Classes, on path, polygon, ellipse and line. They are the whole palette; a
 * figure sets no colour, width or fill of its own.
 *     (none)   filled with the ground colour, medium stroke
 *     sil      the silhouette's stroke        hi    the bright stroke: the only highlight
 *     lo       the dim stroke                 nf    no fill        fo   fill only, no stroke
 *     dash     a dashed guide
 *     dot      a bright dot                   dot m   a medium dot     dot off   a dim dot
 */
var HL = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/hairline/src/core/kernel.ts
  var kernel_exports = {};
  __export(kernel_exports, {
    Cam: () => Cam,
    EASE_LIFT: () => EASE_LIFT,
    LAP: () => LAP,
    bezier: () => bezier,
    circ: () => circ,
    clamp: () => clamp,
    css: () => css,
    disposer: () => disposer,
    extremes: () => extremes,
    facing: () => facing,
    fade: () => fade,
    fillet: () => fillet,
    fit: () => fit,
    flatDot: () => flatDot,
    ghost: () => ghost,
    hull: () => hull,
    inject: () => inject,
    lerp: () => lerp,
    mk: () => mk,
    open: () => open,
    place: () => place,
    pointer: () => pointer,
    poly: () => poly,
    prism: () => prism,
    proj: () => proj,
    put: () => put,
    r2: () => r2,
    rad: () => rad,
    reducedMotion: () => reducedMotion,
    reflect: () => reflect,
    register: () => register,
    ringAt: () => ringAt,
    rings: () => rings,
    rrect: () => rrect,
    run: () => run,
    seg: () => seg,
    setReducedMotion: () => setReducedMotion,
    solid: () => solid,
    spring: () => spring,
    stepS: () => stepS,
    tdone: () => tdone,
    tour: () => tour,
    tset: () => tset,
    tval: () => tval,
    tween: () => tween,
    unproj: () => unproj
  });

  // packages/hairline/src/core/iso.ts
  var clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  var lerp = (a, b, t) => a + (b - a) * t;
  var rad = (d) => d * Math.PI / 180;
  var r2 = (n) => Math.round(n * 100) / 100;
  var poly = (pts) => "M" + pts.map((p) => r2(p[0]) + " " + r2(p[1])).join("L") + "Z";
  var seg = (a, b) => `M${r2(a[0])} ${r2(a[1])}L${r2(b[0])} ${r2(b[1])}`;
  var open = (pts) => pts.length < 2 ? "" : "M" + pts.map((p) => r2(p[0]) + " " + r2(p[1])).join("L");
  var Cam = (azDeg, k, S) => ({ az: rad(azDeg), k, S, ox: 0, oy: 0 });
  function proj(C) {
    const c = Math.cos(C.az), s = Math.sin(C.az), zf = Math.sqrt(1 - C.k * C.k);
    return (x, y, z) => {
      const X = x * c - y * s, Y = x * s + y * c;
      return [C.ox + C.S * X, C.oy + C.S * (Y * C.k - z * zf)];
    };
  }
  function unproj(C, sx, sy, z) {
    const c = Math.cos(C.az), s = Math.sin(C.az), zf = Math.sqrt(1 - C.k * C.k);
    const X = (sx - C.ox) / C.S, Y = ((sy - C.oy) / C.S + z * zf) / C.k;
    return [X * c + Y * s, -X * s + Y * c];
  }
  function fit(C, pts, cx, cy) {
    C.ox = 0;
    C.oy = 0;
    const P = proj(C);
    let a = 1e9, b = -1e9, c = 1e9, d = -1e9;
    for (const p of pts) {
      const q = P(p[0], p[1], p[2]);
      a = Math.min(a, q[0]);
      b = Math.max(b, q[0]);
      c = Math.min(c, q[1]);
      d = Math.max(d, q[1]);
    }
    C.ox = cx - (a + b) / 2;
    C.oy = cy - (c + d) / 2;
  }
  function rrect(u0, v0, u1, v1, r, n = 4) {
    r = Math.max(0, Math.min(r, (u1 - u0) / 2, (v1 - v0) / 2));
    const out = [];
    for (const [cu, cv, a0] of [[u1 - r, v1 - r, 0], [u0 + r, v1 - r, 90], [u0 + r, v0 + r, 180], [u1 - r, v0 + r, 270]])
      for (let k = 0; k <= n; k++) {
        const a = rad(a0 + 90 * k / n), ca = Math.cos(a), sa = Math.sin(a);
        out.push({ u: cu + r * ca, v: cv + r * sa, nu: ca, nv: sa });
      }
    return out;
  }
  function circ(R, n = 96) {
    const out = [];
    for (let k = 0; k < n; k++) {
      const a = k / n * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
      out.push({ u: R * ca, v: R * sa, nu: ca, nv: sa });
    }
    return out;
  }
  function hull(input) {
    const pts = input.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const x = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lo = [], up = [];
    for (const p of pts) {
      while (lo.length > 1 && x(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop();
      lo.push(p);
    }
    for (let i = pts.length - 1; i >= 0; i--) {
      const p = pts[i];
      while (up.length > 1 && x(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop();
      up.push(p);
    }
    lo.pop();
    up.pop();
    return lo.concat(up);
  }
  var ringAt = (P, ring, z) => ring.map((q) => P(q.u, q.v, z));
  var facing = (C) => {
    const s = Math.sin(C.az), c = Math.cos(C.az);
    return (q) => q.nu * s + q.nv * c >= -1e-6;
  };
  function run(ring, keep) {
    const n = ring.length;
    let s = -1;
    for (let i = 0; i < n; i++) if (keep(ring[i]) && !keep(ring[(i + n - 1) % n])) {
      s = i;
      break;
    }
    if (s < 0) return keep(ring[0]) ? ring.slice() : [];
    const out = [];
    for (let k = 0; k < n && keep(ring[(s + k) % n]); k++) out.push(ring[(s + k) % n]);
    return out;
  }
  function prism(P, front, ring, inner, z0, z1) {
    return {
      sil: poly(hull(ringAt(P, ring, z1).concat(ringAt(P, ring, z0)))),
      crease: inner ? open(ringAt(P, run(inner, front), z1)) : ""
    };
  }
  var rings = (x0, y0, x1, y1, r, b) => [
    rrect(x0, y0, x1, y1, r),
    rrect(x0 + b, y0 + b, x1 - b, y1 - b, Math.max(0.3, r - b))
  ];
  function extremes(P, ring) {
    const pr = ring.map((q) => P(q.u, q.v, 0));
    let a = 0, b = 0, c = 0;
    pr.forEach((p, k) => {
      if (p[0] < pr[a][0]) a = k;
      if (p[0] > pr[b][0]) b = k;
      if (p[1] > pr[c][1]) c = k;
    });
    return [ring[a], ring[b], ring[c]];
  }
  function fillet(pts, rs, n = 4) {
    const m = pts.length, out = [];
    for (let i = 0; i < m; i++) {
      const a = pts[(i + m - 1) % m], p = pts[i], b = pts[(i + 1) % m];
      const la = Math.hypot(a[0] - p[0], a[1] - p[1]), lb = Math.hypot(b[0] - p[0], b[1] - p[1]);
      const t = Math.min(rs[i], la / 2, lb / 2);
      const p1 = [p[0] + (a[0] - p[0]) / la * t, p[1] + (a[1] - p[1]) / la * t];
      const p2 = [p[0] + (b[0] - p[0]) / lb * t, p[1] + (b[1] - p[1]) / lb * t];
      for (let k = 0; k <= n; k++) {
        const s = k / n, w = 1 - s;
        out.push([w * w * p1[0] + 2 * w * s * p[0] + s * s * p2[0], w * w * p1[1] + 2 * w * s * p[1] + s * s * p2[1]]);
      }
    }
    return out;
  }
  function ghost(P, front, ring, z0, depth) {
    const f = run(ring, front), lowP = ringAt(P, f, z0 - depth);
    return {
      d: open(lowP) + [f[0], f[f.length - 1]].map((q) => seg(P(q.u, q.v, z0), P(q.u, q.v, z0 - depth))).join(""),
      y0: Math.min(...ringAt(P, f, z0).map((p) => p[1])),
      y1: Math.max(...lowP.map((p) => p[1])) + 2
    };
  }

  // packages/hairline/src/core/motion.ts
  var reduced = false;
  var setReducedMotion = (on) => {
    reduced = on;
  };
  var reducedMotion = () => reduced;
  function spring(x, o = {}) {
    return { x, v: 0, t: x, k: o.k ?? 100, c: o.c ?? 18, m: o.m ?? 1, eps: o.eps ?? 0.01 };
  }
  function stepS(sp, dt) {
    if (reduced) {
      sp.x = sp.t;
      sp.v = 0;
      return false;
    }
    const n = Math.max(1, Math.ceil(dt * 240)), h = dt / n;
    for (let i = 0; i < n; i++) {
      const a = (-sp.k * (sp.x - sp.t) - sp.c * sp.v) / sp.m;
      sp.v += a * h;
      sp.x += sp.v * h;
    }
    if (Math.abs(sp.x - sp.t) < sp.eps && Math.abs(sp.v) < sp.eps * 10) {
      sp.x = sp.t;
      sp.v = 0;
      return false;
    }
    return true;
  }
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const X = (u) => ((ax * u + bx) * u + cx) * u;
    const Y = (u) => ((ay * u + by) * u + cy) * u;
    const dX = (u) => (3 * ax * u + 2 * bx) * u + cx;
    return (t) => {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      let u = t;
      for (let i = 0; i < 8; i++) {
        const e = X(u) - t;
        if (Math.abs(e) < 1e-5) break;
        const d = dX(u);
        if (Math.abs(d) < 1e-6) break;
        u -= e / d;
      }
      if (!(u >= 0 && u <= 1) || Math.abs(X(u) - t) > 1e-4) {
        let lo = 0, hi = 1;
        u = t;
        for (let i = 0; i < 24; i++) {
          if (X(u) < t) lo = u;
          else hi = u;
          u = (lo + hi) / 2;
        }
      }
      return Y(u);
    };
  }
  var EASE_LIFT = bezier(0.32, 0.72, 0, 1);
  var tween = (v, dur = 700) => ({ from: v, to: v, t0: -1e9, dur });
  var tval = (tw, now) => {
    const p = clamp((now - tw.t0) / tw.dur, 0, 1);
    return tw.from + (tw.to - tw.from) * (reduced ? 1 : EASE_LIFT(p));
  };
  var tset = (tw, to, now, delay) => {
    if (tw.to === to) return;
    tw.from = tval(tw, now);
    tw.to = to;
    tw.t0 = now + delay;
  };
  var tdone = (tw, now) => reduced || now >= tw.t0 + tw.dur;

  // packages/hairline/src/core/stage.ts
  var NS = "http://www.w3.org/2000/svg";
  function mk(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) e.setAttribute(k, String(attrs[k]));
    if (parent) parent.appendChild(e);
    return e;
  }
  function solid(parent) {
    const g = mk("g", {}, parent);
    return { g, sil: mk("path", { class: "sil" }, g), cr: mk("path", { class: "nf lo" }, g) };
  }
  var put = (el, s) => {
    el.sil.setAttribute("d", s.sil);
    el.cr.setAttribute("d", s.crease);
  };
  var flatDot = (parent, C, r, cls) => mk("ellipse", { rx: r2(r * C.S), ry: r2(r * C.S * C.k), class: cls }, parent);
  var place = (el, q) => {
    el.setAttribute("cx", String(r2(q[0])));
    el.setAttribute("cy", String(r2(q[1])));
  };
  var fid = 0;
  function fade(svg, y0, y1, a0 = 0.7) {
    const id = "hl-fd" + ++fid, defs = mk("defs", {}, svg);
    const lg = mk("linearGradient", { id: id + "g", gradientUnits: "userSpaceOnUse", x1: 0, y1: r2(y0), x2: 0, y2: r2(y1) }, defs);
    mk("stop", { offset: 0, "stop-color": "#fff", "stop-opacity": a0 }, lg);
    mk("stop", { offset: 1, "stop-color": "#fff", "stop-opacity": 0 }, lg);
    const m = mk("mask", { id, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 400, height: 320 }, defs);
    mk("rect", { x: 0, y: 0, width: 400, height: 320, fill: `url(#${id}g)` }, m);
    return `url(#${id})`;
  }
  function reflect(svg, parent, P, front, ring, z0, depth) {
    const r = ghost(P, front, ring, z0, depth);
    const gh = mk("g", { class: "ghost", mask: fade(svg, r.y0, r.y1) }, parent);
    mk("path", { d: r.d }, gh);
  }
  var boards = [];
  var byStage = /* @__PURE__ */ new Map();
  var raf = 0;
  var last = 0;
  var io = null;
  var rm = null;
  function frame() {
    const now = performance.now();
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1e3));
    last = now;
    let any = false;
    for (const b of boards.slice()) if (b.vis && b.awake) {
      try {
        b.awake = !!b.tick(dt, now);
      } catch (err) {
        b.awake = false;
        setTimeout(() => {
          throw err;
        });
      }
      any = any || b.awake;
    }
    raf = any ? requestAnimationFrame(frame) : 0;
  }
  function wake(b) {
    b.awake = true;
    if (!raf) {
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
  }
  var onMotion = () => {
    setReducedMotion(!!rm?.matches);
    boards.forEach(wake);
  };
  function start() {
    if (io) return;
    io = new IntersectionObserver((es) => {
      for (const e of es) {
        const set = byStage.get(e.target);
        if (!set) continue;
        for (const b of set) {
          b.vis = e.isIntersecting;
          if (b.vis) wake(b);
        }
      }
    }, { rootMargin: "80px" });
    rm = matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(rm.matches);
    rm.addEventListener("change", onMotion);
  }
  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    io?.disconnect();
    io = null;
    rm?.removeEventListener("change", onMotion);
    rm = null;
  }
  function register(stage, tick) {
    start();
    const b = { stage, tick, vis: false, awake: true };
    boards.push(b);
    const peers = byStage.get(stage);
    if (peers) {
      for (const p of peers) b.vis = p.vis;
      peers.add(b);
      if (b.vis) wake(b);
    } else {
      byStage.set(stage, /* @__PURE__ */ new Set([b]));
      io.observe(stage);
    }
    tick(0, performance.now());
    let gone = false;
    return {
      wake: () => {
        if (!gone) wake(b);
      },
      unregister: () => {
        if (gone) return;
        gone = true;
        boards = boards.filter((x) => x !== b);
        const set = byStage.get(stage);
        if (set) {
          set.delete(b);
          if (!set.size) {
            byStage.delete(stage);
            io?.unobserve(stage);
          }
        }
        if (!boards.length) stop();
      }
    };
  }
  var handlers = /* @__PURE__ */ new WeakMap();
  var touring = /* @__PURE__ */ new WeakMap();
  function pointer(stage, on) {
    handlers.set(stage, on);
    let tm = 0;
    const pt = (e) => {
      const r = stage.getBoundingClientRect();
      return [(e.clientX - r.left) / r.width * 400, (e.clientY - r.top) / r.height * 320];
    };
    const move = (e) => {
      clearTimeout(tm);
      touring.get(stage)?.hold();
      on.move(pt(e), e);
    };
    const down = (e) => {
      clearTimeout(tm);
      touring.get(stage)?.hold();
      if (e.pointerType !== "mouse") stage.releasePointerCapture?.(e.pointerId);
      if (on.down) on.down(pt(e), e);
      else on.move(pt(e), e);
    };
    const leave = (e) => {
      clearTimeout(tm);
      tm = window.setTimeout(() => {
        on.leave(e);
        touring.get(stage)?.release();
      }, e.pointerType === "mouse" ? 0 : 1400);
    };
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerdown", down);
    stage.addEventListener("pointerleave", leave);
    return () => {
      clearTimeout(tm);
      if (handlers.get(stage) === on) handlers.delete(stage);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerdown", down);
      stage.removeEventListener("pointerleave", leave);
    };
  }
  var LAP = [[128, 150], [200, 118], [272, 150], [200, 206], null];
  var TRAVEL = 900;
  var DWELL = 1200;
  var REST = 1800;
  var RESUME = 1200;
  var STAGGER = 450;
  var GHOST = { pointerType: "ghost" };
  var started = 0;
  function entry([x, y]) {
    const dx = x - 200, dy = y - 160;
    if (!dx && !dy) return [200, 320];
    const k = Math.min(dx ? (dx > 0 ? 200 : -200) / dx : Infinity, dy ? (dy > 0 ? 160 : -160) / dy : Infinity);
    return [200 + dx * k, 160 + dy * k];
  }
  function tour(stage, stops, onStop) {
    let i = 0;
    let wait = RESUME + STAGGER * (started++ % 4);
    let t = -1;
    let at = null;
    let origin = [200, 320];
    let hand = false, keys = stage.contains(stage.ownerDocument.activeElement);
    let gone = false;
    const leave = () => {
      at = null;
      t = -1;
      handlers.get(stage)?.leave(GHOST);
    };
    const tick = (dt) => {
      if (hand || keys || !stops.length) return false;
      if (reducedMotion()) {
        if (at) leave();
        return false;
      }
      if (wait > 0) {
        wait -= dt * 1e3;
        return true;
      }
      const stop2 = stops[i];
      if (stop2 === null) {
        if (at) leave();
        onStop?.(i);
        i = (i + 1) % stops.length;
        wait = REST;
        return true;
      }
      const h = handlers.get(stage);
      if (!h) return true;
      if (t < 0) {
        origin = at ?? entry(stop2);
        t = 0;
      }
      t = Math.min(TRAVEL, t + dt * 1e3);
      const k = EASE_LIFT(t / TRAVEL);
      at = [origin[0] + (stop2[0] - origin[0]) * k, origin[1] + (stop2[1] - origin[1]) * k];
      h.move(at, GHOST);
      if (t < TRAVEL) return true;
      onStop?.(i);
      i = (i + 1) % stops.length;
      t = -1;
      wait = DWELL;
      return true;
    };
    const take = () => {
      at = null;
      t = -1;
    };
    const give = () => {
      if (hand || keys) return;
      i = 0;
      t = -1;
      wait = RESUME;
      board.wake();
    };
    const me = {
      hold: () => {
        hand = true;
        take();
      },
      release: () => {
        if (!hand) return;
        hand = false;
        give();
      }
    };
    const focusIn = () => {
      keys = true;
      take();
    };
    const focusOut = (e) => {
      if (keys && !stage.contains(e.relatedTarget)) {
        keys = false;
        give();
      }
    };
    stage.addEventListener("focusin", focusIn);
    stage.addEventListener("focusout", focusOut);
    touring.set(stage, me);
    const board = register(stage, tick);
    return {
      stop: () => {
        if (gone) return;
        gone = true;
        board.unregister();
        stage.removeEventListener("focusin", focusIn);
        stage.removeEventListener("focusout", focusOut);
        if (touring.get(stage) === me) touring.delete(stage);
        if (at) leave();
      }
    };
  }
  function disposer() {
    let fns = [];
    return {
      add: (fn) => {
        fns.push(fn);
      },
      on: (target, type, fn, opts) => {
        const h = fn;
        target.addEventListener(type, h, opts);
        fns.push(() => target.removeEventListener(type, h, opts));
      },
      dispose: () => {
        const run2 = fns;
        fns = [];
        for (let i = run2.length - 1; i >= 0; i--) run2[i]();
      }
    };
  }

  // packages/hairline/src/core/styles.ts
  var LIGHT = { plate: "#ffffff", hi: "#232327", edge: "#a4a4ac", mid: "#c3c3c9", lo: "#e0e0e4" };
  var DARK = { plate: "#08090a", hi: "#d0d6e0", edge: "#5b5d64", mid: "#3e3e44", lo: "#29292d" };
  var KEYS = ["plate", "hi", "edge", "mid", "lo"];
  var vars = (p) => KEYS.map((k) => `--hl-${k}:var(--hairline-${k},${p[k]});`).join("");
  var EASE = "cubic-bezier(0.5,0,0.1,1)";
  var SVG = ":where([data-hairline]>svg)";
  function css(lightDark) {
    const both = Object.fromEntries(KEYS.map((k) => [k, `light-dark(${LIGHT[k]},${DARK[k]})`]));
    return [
      // the box, and the palette: light unless something below says otherwise
      `:where([data-hairline]){display:block;position:relative;aspect-ratio:5/4;touch-action:pan-y;user-select:none;-webkit-user-select:none;--hl-sw:var(--hairline-stroke,0.9);${vars(LIGHT)}}`,
      // the page's color-scheme
      lightDark ? `:where([data-hairline]){${vars(both)}}` : "",
      // an ancestor that says dark
      `:where(.dark,[data-theme="dark"]) :where([data-hairline]){${vars(DARK)}}`,
      // the figure's own theme option
      `:where([data-hairline][data-hairline-theme="light"]){${vars(LIGHT)}}`,
      `:where([data-hairline][data-hairline-theme="dark"]){${vars(DARK)}}`,
      `:where([data-hairline]:focus-visible){outline:1.5px solid var(--hl-hi);outline-offset:2px}`,
      `${SVG}{position:absolute;inset:0;width:100%;height:100%;display:block}`,
      // Riffle's live region: read, not seen
      `:where([data-hairline]>[data-hairline-live]){position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}`,
      // the drawing: plates are filled with the plate colour and painted back to front
      `${SVG} :where(path,polygon,ellipse,line){fill:var(--hl-plate);stroke:var(--hl-mid);stroke-width:var(--hl-sw);vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round;transition:stroke 260ms ${EASE}}`,
      `${SVG} :where(.nf){fill:none}`,
      `${SVG} :where(.fo){stroke:none}`,
      `${SVG} :where(.sil){stroke:var(--hl-edge)}`,
      `${SVG} :where(.hi){stroke:var(--hl-hi)}`,
      `${SVG} :where(.lo){stroke:var(--hl-lo)}`,
      `${SVG} :where(.dash){stroke-dasharray:1 3}`,
      `${SVG} :where(.dot){stroke:none;fill:var(--hl-hi);transition:fill 260ms ${EASE}}`,
      `${SVG} :where(.dot.m){fill:var(--hl-edge)}`,
      `${SVG} :where(.dot.off){fill:var(--hl-lo)}`,
      `${SVG} :where(.ghost path){fill:none;stroke:var(--hl-mid)}`
    ].join("");
  }
  var done = /* @__PURE__ */ new WeakSet();
  function inject(root) {
    if (done.has(root)) return;
    done.add(root);
    const doc = root.nodeType === 9 ? root : root.ownerDocument;
    const win = doc.defaultView;
    const text = css(!!win?.CSS?.supports?.("color", "light-dark(#000,#fff)"));
    if (win && "adoptedStyleSheets" in root) {
      try {
        const sheet = new win.CSSStyleSheet();
        sheet.replaceSync(text);
        root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
        return;
      } catch {
      }
    }
    const style = doc.createElement("style");
    style.setAttribute("data-hairline-style", "");
    style.textContent = text;
    (root.nodeType === 9 ? doc.head ?? doc.documentElement : root).appendChild(style);
  }
  return __toCommonJS(kernel_exports);
})();
/* /hairline kernel */

const figures={};const hairline=f=>figures[f.name]=f;

(()=>{
// crafted-websites: original illustration for Edgar Largo Studio.
const PARTS=[{"kind":"base","name":"base","x":-58,"y":-35,"z":0,"w":116,"h":80,"fixed":true,"thick":4},{"kind":"screen","name":"screen","x":-48,"y":-28,"z":20,"w":91,"h":59,"upright":true},{"kind":"screen","name":"screen","x":16,"y":14,"z":8,"w":47,"h":34,"upright":true},{"kind":"phone","name":"screen","x":-51,"y":24,"z":5,"w":23,"h":40,"upright":true}];
const FOCUS=1;
const {Cam,fit,proj,facing,rings,prism,solid,put,mk,rrect,ringAt,poly,open,seg,circ,rad,clamp,tween,tset,tval,tdone,pointer,register,disposer}=HL;
function mount({stage,svg,read},value){
  const bag=disposer(), C=Cam(45,.5,PARTS[0].kind==='swatch'?3:2.05);
  const bounds=[];
  PARTS.forEach(p=>{const a=rad(p.angle||0);for(const u of[0,p.w])for(const v of[0,p.h]){
    const x=u*Math.cos(a)-v*Math.sin(a),y=u*Math.sin(a)+v*Math.cos(a);
    for(const z of[0,20])bounds.push(p.upright?[p.x+x,p.y,p.z+p.h-y+z]:[p.x+x,p.y+y,p.z+z]);
  }});fit(C,bounds,200,166);
  const P=proj(C), front=facing(C), g=mk('g',{},svg);
  let strength=value, active=-1;
  const items=PARTS.map((p,i)=>{
    const group=mk('g',{},g), body=solid(group), detail=mk('path',{class:'nf'},group), fine=mk('path',{class:'nf lo'},group);
    return {p,group,body,detail,fine,lift:tween(0),turn:tween(0),last:'',anchor:P(p.x,p.y,p.z+(p.upright?p.h/2:0))};
  });
  function draw(o,i,lift,turn){
    const p=o.p,w=p.w,h=p.h,angle=rad((p.angle||0)+turn),co=Math.cos(angle),si=Math.sin(angle);
    // Local rounded plates become upright screens, cards or flat desk objects.
    const Q=(u,v,z=0)=>{let a=u*co-v*si,b=u*si+v*co;return p.upright?P(p.x+a,p.y+z,p.z+h-b+lift):P(p.x+a,p.y+b,p.z+z+lift);};
    let ring,inner;
    if(p.kind==='dial'){ring=circ(w/2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));inner=circ(w/2-2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));}
    else [ring,inner]=rings(0,0,w,h,p.kind==='phone'?5:3,1.3);
    const paths=prism(Q,front,ring,inner,0,p.thick||2);
    put(o.body,paths);o.body.sil.classList.toggle('hi',i===(active<0?FOCUS:active));
    const z=(p.thick||2)+.1, R=(x,y,ww,hh,r=1)=>poly(ringAt(Q,rrect(x,y,x+ww,y+hh,r,8),z));
    const S=(x,y,x2,y2)=>seg(Q(x,y,z),Q(x2,y2,z));
    let d='',f='';
    if(['screen','phone','page','shop'].includes(p.kind)){
      d+=R(4,5,w-8,h-10,2);f+=S(4,12,w-4,12);
      for(let k=0;k<3;k++)f+=R(7+k*3,8,1,1,.5);
      if(p.kind==='shop'){
        for(let k=0;k<3;k++){d+=R(8+k*(w-16)/3,19,(w-23)/3,h*.35,1);f+=S(8+k*(w-16)/3,h-12,17+k*(w-16)/3,h-12);}
      }else{
        d+=R(8,17,w-16,h*.3,1);f+=S(8,h*.64,w*.7,h*.64)+S(8,h*.73,w*.84,h*.73);
        d+=R(8,h-15,Math.min(19,w-16),4,2);
      }
      if(p.kind==='phone')f+=S(w*.4,3,w*.6,3);
    }else if(p.kind==='file'){
      d+=R(6,6,w*.36,6,2)+R(6,18,w-12,h*.34,2);
      for(let k=0;k<3;k++)f+=S(6,h*.64+k*5,w-7-k*5,h*.64+k*5);
    }else if(p.kind==='swatch'){
      d+=R(5,5,w-10,h*.62,2);f+=S(6,h-12,w-6,h-12)+S(6,h-8,w*.6,h-8);
      d+=poly(ringAt(Q,circ(1.5,12).map(q=>({...q,u:q.u+w/2,v:q.v+h-4})),z));
    }else if(p.kind==='film'){
      d+=R(7,8,w-14,h-16,1);
      for(let k=0;k<5;k++){f+=R(2,4+k*(h-9)/5,2,3,.5)+R(w-4,4+k*(h-9)/5,2,3,.5);}
      const yy=h*.52+Math.sin(i)*6;d+=poly(ringAt(Q,circ(6+i*2,30).map(q=>({...q,u:q.u+w*.52,v:q.v+yy})),z));
    }else if(p.kind==='map'){
      const pts=[[5,h*.7],[w*.27,h*.6],[w*.48,h*.67],[w*.7,h*.32],[w-5,h*.25]];
      d+=open(pts.map(q=>Q(q[0],q[1],z)));f+=S(w/3,3,w/3,h-3)+S(w*2/3,3,w*2/3,h-3);
      for(const [u,v]of [pts[0],pts[2],pts[4]])d+=poly(ringAt(Q,circ(2,18).map(q=>({...q,u:q.u+u,v:q.v+v})),z));
    }else if(p.kind==='dial'){
      for(let k=0;k<13;k++){const a=rad(135+k*22.5),rr=w*.38;f+=S(w/2+Math.cos(a)*rr,h/2+Math.sin(a)*rr,w/2+Math.cos(a)*(rr-4),h/2+Math.sin(a)*(rr-4));}
      const a=rad(225+lift*5);d+=S(w/2,h/2,w/2+Math.cos(a)*w*.29,h/2+Math.sin(a)*h*.29);
      d+=poly(ringAt(Q,circ(2.5,20).map(q=>({...q,u:q.u+w/2,v:q.v+h/2})),z));
    }else if(p.kind==='server'){
      d+=R(6,5,w-12,h-10,2)+R(w-17,h/2-2,9,4,1);
      for(let k=0;k<5;k++)f+=S(10+k*3,8,10+k*3,h-8);
    }else if(p.kind==='bag'){
      d+=open([Q(w*.28,10,z),Q(w*.28,3,z),Q(w*.72,3,z),Q(w*.72,10,z)]);f+=S(4,h-6,w-4,h-6);
    }else if(p.kind==='key'){d+=R(5,4,w-10,h-8,2);}
    else if(p.kind==='base'){f+=S(5,h-4,w-5,h-4);}
    o.detail.setAttribute('d',d);o.fine.setAttribute('d',f);
  }
  const loop=register(stage,(_dt,now)=>{
    let moving=false;
    items.forEach((o,i)=>{const v=tval(o.lift,now),a=tval(o.turn,now),key=v.toFixed(3)+','+a.toFixed(3)+','+active;
      if(key!==o.last){draw(o,i,v,a);o.last=key;}
      if(!tdone(o.lift,now)||!tdone(o.turn,now))moving=true;
    });return moving;
  });bag.add(loop.unregister);
  function select(a){
    if(a===active)return;const from=a<0?active:a,now=performance.now();active=a;
    items.forEach((o,i)=>{const distance=Math.abs(i-from),v=a<0||o.p.fixed?0:strength*Math.max(0,1-distance*.27);
      tset(o.lift,v,now,distance*45);tset(o.turn,a<0||o.p.fixed?0:(i-from)*2.2,now,distance*45);
    });read.textContent=a<0?'rest':items[a].p.name;loop.wake();
  }
  bag.add(pointer(stage,{move:([x,y])=>{
    if(x<35||x>365||y<45||y>285){select(-1);return;}
    let best=-1,dist=Infinity;items.forEach((o,i)=>{if(o.p.fixed)return;const d=(x-o.anchor[0])**2+(y-o.anchor[1])**2;if(d<dist){dist=d;best=i;}});select(best);
  },leave:()=>select(-1)}));
  items.forEach((o,i)=>draw(o,i,0,0));read.textContent='rest';bag.add(()=>svg.replaceChildren());
  return {set(v){strength=v;const old=active;active=-2;select(old);},destroy:bag.dispose};
}

hairline({name:"devices",means:"Three responsive screens rise in sequence as your hand moves between them.",rules:[1,2,4,5,7,8,9,10],range:[3,12,20],tour:[[130,150],[260,155],[200,205],null],mount});

})();

(()=>{
// website-redesign: original illustration for Edgar Largo Studio.
const PARTS=[{"kind":"base","name":"base","x":-58,"y":-35,"z":0,"w":116,"h":80,"fixed":true,"thick":4},{"kind":"page","name":"screen","x":-45,"y":-28,"z":12,"w":87,"h":61,"upright":true},{"kind":"page","name":"screen","x":-37,"y":-9,"z":11,"w":72,"h":52,"upright":true},{"kind":"page","name":"screen","x":-27,"y":13,"z":10,"w":58,"h":41,"upright":true}];
const FOCUS=2;
const {Cam,fit,proj,facing,rings,prism,solid,put,mk,rrect,ringAt,poly,open,seg,circ,rad,clamp,tween,tset,tval,tdone,pointer,register,disposer}=HL;
function mount({stage,svg,read},value){
  const bag=disposer(), C=Cam(45,.5,PARTS[0].kind==='swatch'?3:2.05);
  const bounds=[];
  PARTS.forEach(p=>{const a=rad(p.angle||0);for(const u of[0,p.w])for(const v of[0,p.h]){
    const x=u*Math.cos(a)-v*Math.sin(a),y=u*Math.sin(a)+v*Math.cos(a);
    for(const z of[0,20])bounds.push(p.upright?[p.x+x,p.y,p.z+p.h-y+z]:[p.x+x,p.y+y,p.z+z]);
  }});fit(C,bounds,200,166);
  const P=proj(C), front=facing(C), g=mk('g',{},svg);
  let strength=value, active=-1;
  const items=PARTS.map((p,i)=>{
    const group=mk('g',{},g), body=solid(group), detail=mk('path',{class:'nf'},group), fine=mk('path',{class:'nf lo'},group);
    return {p,group,body,detail,fine,lift:tween(0),turn:tween(0),last:'',anchor:P(p.x,p.y,p.z+(p.upright?p.h/2:0))};
  });
  function draw(o,i,lift,turn){
    const p=o.p,w=p.w,h=p.h,angle=rad((p.angle||0)+turn),co=Math.cos(angle),si=Math.sin(angle);
    // Local rounded plates become upright screens, cards or flat desk objects.
    const Q=(u,v,z=0)=>{let a=u*co-v*si,b=u*si+v*co;return p.upright?P(p.x+a,p.y+z,p.z+h-b+lift):P(p.x+a,p.y+b,p.z+z+lift);};
    let ring,inner;
    if(p.kind==='dial'){ring=circ(w/2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));inner=circ(w/2-2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));}
    else [ring,inner]=rings(0,0,w,h,p.kind==='phone'?5:3,1.3);
    const paths=prism(Q,front,ring,inner,0,p.thick||2);
    put(o.body,paths);o.body.sil.classList.toggle('hi',i===(active<0?FOCUS:active));
    const z=(p.thick||2)+.1, R=(x,y,ww,hh,r=1)=>poly(ringAt(Q,rrect(x,y,x+ww,y+hh,r,8),z));
    const S=(x,y,x2,y2)=>seg(Q(x,y,z),Q(x2,y2,z));
    let d='',f='';
    if(['screen','phone','page','shop'].includes(p.kind)){
      d+=R(4,5,w-8,h-10,2);f+=S(4,12,w-4,12);
      for(let k=0;k<3;k++)f+=R(7+k*3,8,1,1,.5);
      if(p.kind==='shop'){
        for(let k=0;k<3;k++){d+=R(8+k*(w-16)/3,19,(w-23)/3,h*.35,1);f+=S(8+k*(w-16)/3,h-12,17+k*(w-16)/3,h-12);}
      }else{
        d+=R(8,17,w-16,h*.3,1);f+=S(8,h*.64,w*.7,h*.64)+S(8,h*.73,w*.84,h*.73);
        d+=R(8,h-15,Math.min(19,w-16),4,2);
      }
      if(p.kind==='phone')f+=S(w*.4,3,w*.6,3);
    }else if(p.kind==='file'){
      d+=R(6,6,w*.36,6,2)+R(6,18,w-12,h*.34,2);
      for(let k=0;k<3;k++)f+=S(6,h*.64+k*5,w-7-k*5,h*.64+k*5);
    }else if(p.kind==='swatch'){
      d+=R(5,5,w-10,h*.62,2);f+=S(6,h-12,w-6,h-12)+S(6,h-8,w*.6,h-8);
      d+=poly(ringAt(Q,circ(1.5,12).map(q=>({...q,u:q.u+w/2,v:q.v+h-4})),z));
    }else if(p.kind==='film'){
      d+=R(7,8,w-14,h-16,1);
      for(let k=0;k<5;k++){f+=R(2,4+k*(h-9)/5,2,3,.5)+R(w-4,4+k*(h-9)/5,2,3,.5);}
      const yy=h*.52+Math.sin(i)*6;d+=poly(ringAt(Q,circ(6+i*2,30).map(q=>({...q,u:q.u+w*.52,v:q.v+yy})),z));
    }else if(p.kind==='map'){
      const pts=[[5,h*.7],[w*.27,h*.6],[w*.48,h*.67],[w*.7,h*.32],[w-5,h*.25]];
      d+=open(pts.map(q=>Q(q[0],q[1],z)));f+=S(w/3,3,w/3,h-3)+S(w*2/3,3,w*2/3,h-3);
      for(const [u,v]of [pts[0],pts[2],pts[4]])d+=poly(ringAt(Q,circ(2,18).map(q=>({...q,u:q.u+u,v:q.v+v})),z));
    }else if(p.kind==='dial'){
      for(let k=0;k<13;k++){const a=rad(135+k*22.5),rr=w*.38;f+=S(w/2+Math.cos(a)*rr,h/2+Math.sin(a)*rr,w/2+Math.cos(a)*(rr-4),h/2+Math.sin(a)*(rr-4));}
      const a=rad(225+lift*5);d+=S(w/2,h/2,w/2+Math.cos(a)*w*.29,h/2+Math.sin(a)*h*.29);
      d+=poly(ringAt(Q,circ(2.5,20).map(q=>({...q,u:q.u+w/2,v:q.v+h/2})),z));
    }else if(p.kind==='server'){
      d+=R(6,5,w-12,h-10,2)+R(w-17,h/2-2,9,4,1);
      for(let k=0;k<5;k++)f+=S(10+k*3,8,10+k*3,h-8);
    }else if(p.kind==='bag'){
      d+=open([Q(w*.28,10,z),Q(w*.28,3,z),Q(w*.72,3,z),Q(w*.72,10,z)]);f+=S(4,h-6,w-4,h-6);
    }else if(p.kind==='key'){d+=R(5,4,w-10,h-8,2);}
    else if(p.kind==='base'){f+=S(5,h-4,w-5,h-4);}
    o.detail.setAttribute('d',d);o.fine.setAttribute('d',f);
  }
  const loop=register(stage,(_dt,now)=>{
    let moving=false;
    items.forEach((o,i)=>{const v=tval(o.lift,now),a=tval(o.turn,now),key=v.toFixed(3)+','+a.toFixed(3)+','+active;
      if(key!==o.last){draw(o,i,v,a);o.last=key;}
      if(!tdone(o.lift,now)||!tdone(o.turn,now))moving=true;
    });return moving;
  });bag.add(loop.unregister);
  function select(a){
    if(a===active)return;const from=a<0?active:a,now=performance.now();active=a;
    items.forEach((o,i)=>{const distance=Math.abs(i-from),v=a<0||o.p.fixed?0:strength*Math.max(0,1-distance*.27);
      tset(o.lift,v,now,distance*45);tset(o.turn,a<0||o.p.fixed?0:(i-from)*2.2,now,distance*45);
    });read.textContent=a<0?'rest':items[a].p.name;loop.wake();
  }
  bag.add(pointer(stage,{move:([x,y])=>{
    if(x<35||x>365||y<45||y>285){select(-1);return;}
    let best=-1,dist=Infinity;items.forEach((o,i)=>{if(o.p.fixed)return;const d=(x-o.anchor[0])**2+(y-o.anchor[1])**2;if(d<dist){dist=d;best=i;}});select(best);
  },leave:()=>select(-1)}));
  items.forEach((o,i)=>draw(o,i,0,0));read.textContent='rest';bag.add(()=>svg.replaceChildren());
  return {set(v){strength=v;const old=active;active=-2;select(old);},destroy:bag.dispose};
}

hairline({name:"rebuild",means:"Three browser layers lift apart to reveal a new page composition.",rules:[1,2,4,5,7,8,9,10],range:[3,12,20],tour:[[130,150],[260,155],[200,205],null],mount});

})();

(()=>{
// ecommerce-website-design: original illustration for Edgar Largo Studio.
const PARTS=[{"kind":"base","name":"base","x":-58,"y":-35,"z":0,"w":116,"h":80,"fixed":true,"thick":4},{"kind":"shop","name":"screen","x":-48,"y":-30,"z":14,"w":96,"h":65,"upright":true},{"kind":"bag","name":"screen","x":-33,"y":24,"z":6,"w":29,"h":34,"upright":true},{"kind":"key","name":"key","x":12,"y":20,"z":6,"w":35,"h":24}];
const FOCUS=1;
const {Cam,fit,proj,facing,rings,prism,solid,put,mk,rrect,ringAt,poly,open,seg,circ,rad,clamp,tween,tset,tval,tdone,pointer,register,disposer}=HL;
function mount({stage,svg,read},value){
  const bag=disposer(), C=Cam(45,.5,PARTS[0].kind==='swatch'?3:2.05);
  const bounds=[];
  PARTS.forEach(p=>{const a=rad(p.angle||0);for(const u of[0,p.w])for(const v of[0,p.h]){
    const x=u*Math.cos(a)-v*Math.sin(a),y=u*Math.sin(a)+v*Math.cos(a);
    for(const z of[0,20])bounds.push(p.upright?[p.x+x,p.y,p.z+p.h-y+z]:[p.x+x,p.y+y,p.z+z]);
  }});fit(C,bounds,200,166);
  const P=proj(C), front=facing(C), g=mk('g',{},svg);
  let strength=value, active=-1;
  const items=PARTS.map((p,i)=>{
    const group=mk('g',{},g), body=solid(group), detail=mk('path',{class:'nf'},group), fine=mk('path',{class:'nf lo'},group);
    return {p,group,body,detail,fine,lift:tween(0),turn:tween(0),last:'',anchor:P(p.x,p.y,p.z+(p.upright?p.h/2:0))};
  });
  function draw(o,i,lift,turn){
    const p=o.p,w=p.w,h=p.h,angle=rad((p.angle||0)+turn),co=Math.cos(angle),si=Math.sin(angle);
    // Local rounded plates become upright screens, cards or flat desk objects.
    const Q=(u,v,z=0)=>{let a=u*co-v*si,b=u*si+v*co;return p.upright?P(p.x+a,p.y+z,p.z+h-b+lift):P(p.x+a,p.y+b,p.z+z+lift);};
    let ring,inner;
    if(p.kind==='dial'){ring=circ(w/2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));inner=circ(w/2-2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));}
    else [ring,inner]=rings(0,0,w,h,p.kind==='phone'?5:3,1.3);
    const paths=prism(Q,front,ring,inner,0,p.thick||2);
    put(o.body,paths);o.body.sil.classList.toggle('hi',i===(active<0?FOCUS:active));
    const z=(p.thick||2)+.1, R=(x,y,ww,hh,r=1)=>poly(ringAt(Q,rrect(x,y,x+ww,y+hh,r,8),z));
    const S=(x,y,x2,y2)=>seg(Q(x,y,z),Q(x2,y2,z));
    let d='',f='';
    if(['screen','phone','page','shop'].includes(p.kind)){
      d+=R(4,5,w-8,h-10,2);f+=S(4,12,w-4,12);
      for(let k=0;k<3;k++)f+=R(7+k*3,8,1,1,.5);
      if(p.kind==='shop'){
        for(let k=0;k<3;k++){d+=R(8+k*(w-16)/3,19,(w-23)/3,h*.35,1);f+=S(8+k*(w-16)/3,h-12,17+k*(w-16)/3,h-12);}
      }else{
        d+=R(8,17,w-16,h*.3,1);f+=S(8,h*.64,w*.7,h*.64)+S(8,h*.73,w*.84,h*.73);
        d+=R(8,h-15,Math.min(19,w-16),4,2);
      }
      if(p.kind==='phone')f+=S(w*.4,3,w*.6,3);
    }else if(p.kind==='file'){
      d+=R(6,6,w*.36,6,2)+R(6,18,w-12,h*.34,2);
      for(let k=0;k<3;k++)f+=S(6,h*.64+k*5,w-7-k*5,h*.64+k*5);
    }else if(p.kind==='swatch'){
      d+=R(5,5,w-10,h*.62,2);f+=S(6,h-12,w-6,h-12)+S(6,h-8,w*.6,h-8);
      d+=poly(ringAt(Q,circ(1.5,12).map(q=>({...q,u:q.u+w/2,v:q.v+h-4})),z));
    }else if(p.kind==='film'){
      d+=R(7,8,w-14,h-16,1);
      for(let k=0;k<5;k++){f+=R(2,4+k*(h-9)/5,2,3,.5)+R(w-4,4+k*(h-9)/5,2,3,.5);}
      const yy=h*.52+Math.sin(i)*6;d+=poly(ringAt(Q,circ(6+i*2,30).map(q=>({...q,u:q.u+w*.52,v:q.v+yy})),z));
    }else if(p.kind==='map'){
      const pts=[[5,h*.7],[w*.27,h*.6],[w*.48,h*.67],[w*.7,h*.32],[w-5,h*.25]];
      d+=open(pts.map(q=>Q(q[0],q[1],z)));f+=S(w/3,3,w/3,h-3)+S(w*2/3,3,w*2/3,h-3);
      for(const [u,v]of [pts[0],pts[2],pts[4]])d+=poly(ringAt(Q,circ(2,18).map(q=>({...q,u:q.u+u,v:q.v+v})),z));
    }else if(p.kind==='dial'){
      for(let k=0;k<13;k++){const a=rad(135+k*22.5),rr=w*.38;f+=S(w/2+Math.cos(a)*rr,h/2+Math.sin(a)*rr,w/2+Math.cos(a)*(rr-4),h/2+Math.sin(a)*(rr-4));}
      const a=rad(225+lift*5);d+=S(w/2,h/2,w/2+Math.cos(a)*w*.29,h/2+Math.sin(a)*h*.29);
      d+=poly(ringAt(Q,circ(2.5,20).map(q=>({...q,u:q.u+w/2,v:q.v+h/2})),z));
    }else if(p.kind==='server'){
      d+=R(6,5,w-12,h-10,2)+R(w-17,h/2-2,9,4,1);
      for(let k=0;k<5;k++)f+=S(10+k*3,8,10+k*3,h-8);
    }else if(p.kind==='bag'){
      d+=open([Q(w*.28,10,z),Q(w*.28,3,z),Q(w*.72,3,z),Q(w*.72,10,z)]);f+=S(4,h-6,w-4,h-6);
    }else if(p.kind==='key'){d+=R(5,4,w-10,h-8,2);}
    else if(p.kind==='base'){f+=S(5,h-4,w-5,h-4);}
    o.detail.setAttribute('d',d);o.fine.setAttribute('d',f);
  }
  const loop=register(stage,(_dt,now)=>{
    let moving=false;
    items.forEach((o,i)=>{const v=tval(o.lift,now),a=tval(o.turn,now),key=v.toFixed(3)+','+a.toFixed(3)+','+active;
      if(key!==o.last){draw(o,i,v,a);o.last=key;}
      if(!tdone(o.lift,now)||!tdone(o.turn,now))moving=true;
    });return moving;
  });bag.add(loop.unregister);
  function select(a){
    if(a===active)return;const from=a<0?active:a,now=performance.now();active=a;
    items.forEach((o,i)=>{const distance=Math.abs(i-from),v=a<0||o.p.fixed?0:strength*Math.max(0,1-distance*.27);
      tset(o.lift,v,now,distance*45);tset(o.turn,a<0||o.p.fixed?0:(i-from)*2.2,now,distance*45);
    });read.textContent=a<0?'rest':items[a].p.name;loop.wake();
  }
  bag.add(pointer(stage,{move:([x,y])=>{
    if(x<35||x>365||y<45||y>285){select(-1);return;}
    let best=-1,dist=Infinity;items.forEach((o,i)=>{if(o.p.fixed)return;const d=(x-o.anchor[0])**2+(y-o.anchor[1])**2;if(d<dist){dist=d;best=i;}});select(best);
  },leave:()=>select(-1)}));
  items.forEach((o,i)=>draw(o,i,0,0));read.textContent='rest';bag.add(()=>svg.replaceChildren());
  return {set(v){strength=v;const old=active;active=-2;select(old);},destroy:bag.dispose};
}

hairline({name:"storefront",means:"A shop window, a bag and a payment key make a small counter that responds to your hand.",rules:[1,2,4,5,7,8,9,10],range:[3,12,20],tour:[[130,150],[260,155],[200,205],null],mount});

})();

(()=>{
// cms-and-dynamic-websites: original illustration for Edgar Largo Studio.
const PARTS=[{"kind":"base","name":"base","x":-58,"y":-35,"z":0,"w":116,"h":80,"fixed":true,"thick":4},{"kind":"file","name":"screen","x":-42,"y":-29,"z":8,"w":74,"h":61,"upright":true},{"kind":"file","name":"screen","x":-38,"y":-11,"z":8,"w":74,"h":58,"upright":true},{"kind":"file","name":"screen","x":-34,"y":7,"z":8,"w":74,"h":55,"upright":true},{"kind":"file","name":"screen","x":-30,"y":25,"z":8,"w":74,"h":52,"upright":true}];
const FOCUS=2;
const {Cam,fit,proj,facing,rings,prism,solid,put,mk,rrect,ringAt,poly,open,seg,circ,rad,clamp,tween,tset,tval,tdone,pointer,register,disposer}=HL;
function mount({stage,svg,read},value){
  const bag=disposer(), C=Cam(45,.5,PARTS[0].kind==='swatch'?3:2.05);
  const bounds=[];
  PARTS.forEach(p=>{const a=rad(p.angle||0);for(const u of[0,p.w])for(const v of[0,p.h]){
    const x=u*Math.cos(a)-v*Math.sin(a),y=u*Math.sin(a)+v*Math.cos(a);
    for(const z of[0,20])bounds.push(p.upright?[p.x+x,p.y,p.z+p.h-y+z]:[p.x+x,p.y+y,p.z+z]);
  }});fit(C,bounds,200,166);
  const P=proj(C), front=facing(C), g=mk('g',{},svg);
  let strength=value, active=-1;
  const items=PARTS.map((p,i)=>{
    const group=mk('g',{},g), body=solid(group), detail=mk('path',{class:'nf'},group), fine=mk('path',{class:'nf lo'},group);
    return {p,group,body,detail,fine,lift:tween(0),turn:tween(0),last:'',anchor:P(p.x,p.y,p.z+(p.upright?p.h/2:0))};
  });
  function draw(o,i,lift,turn){
    const p=o.p,w=p.w,h=p.h,angle=rad((p.angle||0)+turn),co=Math.cos(angle),si=Math.sin(angle);
    // Local rounded plates become upright screens, cards or flat desk objects.
    const Q=(u,v,z=0)=>{let a=u*co-v*si,b=u*si+v*co;return p.upright?P(p.x+a,p.y+z,p.z+h-b+lift):P(p.x+a,p.y+b,p.z+z+lift);};
    let ring,inner;
    if(p.kind==='dial'){ring=circ(w/2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));inner=circ(w/2-2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));}
    else [ring,inner]=rings(0,0,w,h,p.kind==='phone'?5:3,1.3);
    const paths=prism(Q,front,ring,inner,0,p.thick||2);
    put(o.body,paths);o.body.sil.classList.toggle('hi',i===(active<0?FOCUS:active));
    const z=(p.thick||2)+.1, R=(x,y,ww,hh,r=1)=>poly(ringAt(Q,rrect(x,y,x+ww,y+hh,r,8),z));
    const S=(x,y,x2,y2)=>seg(Q(x,y,z),Q(x2,y2,z));
    let d='',f='';
    if(['screen','phone','page','shop'].includes(p.kind)){
      d+=R(4,5,w-8,h-10,2);f+=S(4,12,w-4,12);
      for(let k=0;k<3;k++)f+=R(7+k*3,8,1,1,.5);
      if(p.kind==='shop'){
        for(let k=0;k<3;k++){d+=R(8+k*(w-16)/3,19,(w-23)/3,h*.35,1);f+=S(8+k*(w-16)/3,h-12,17+k*(w-16)/3,h-12);}
      }else{
        d+=R(8,17,w-16,h*.3,1);f+=S(8,h*.64,w*.7,h*.64)+S(8,h*.73,w*.84,h*.73);
        d+=R(8,h-15,Math.min(19,w-16),4,2);
      }
      if(p.kind==='phone')f+=S(w*.4,3,w*.6,3);
    }else if(p.kind==='file'){
      d+=R(6,6,w*.36,6,2)+R(6,18,w-12,h*.34,2);
      for(let k=0;k<3;k++)f+=S(6,h*.64+k*5,w-7-k*5,h*.64+k*5);
    }else if(p.kind==='swatch'){
      d+=R(5,5,w-10,h*.62,2);f+=S(6,h-12,w-6,h-12)+S(6,h-8,w*.6,h-8);
      d+=poly(ringAt(Q,circ(1.5,12).map(q=>({...q,u:q.u+w/2,v:q.v+h-4})),z));
    }else if(p.kind==='film'){
      d+=R(7,8,w-14,h-16,1);
      for(let k=0;k<5;k++){f+=R(2,4+k*(h-9)/5,2,3,.5)+R(w-4,4+k*(h-9)/5,2,3,.5);}
      const yy=h*.52+Math.sin(i)*6;d+=poly(ringAt(Q,circ(6+i*2,30).map(q=>({...q,u:q.u+w*.52,v:q.v+yy})),z));
    }else if(p.kind==='map'){
      const pts=[[5,h*.7],[w*.27,h*.6],[w*.48,h*.67],[w*.7,h*.32],[w-5,h*.25]];
      d+=open(pts.map(q=>Q(q[0],q[1],z)));f+=S(w/3,3,w/3,h-3)+S(w*2/3,3,w*2/3,h-3);
      for(const [u,v]of [pts[0],pts[2],pts[4]])d+=poly(ringAt(Q,circ(2,18).map(q=>({...q,u:q.u+u,v:q.v+v})),z));
    }else if(p.kind==='dial'){
      for(let k=0;k<13;k++){const a=rad(135+k*22.5),rr=w*.38;f+=S(w/2+Math.cos(a)*rr,h/2+Math.sin(a)*rr,w/2+Math.cos(a)*(rr-4),h/2+Math.sin(a)*(rr-4));}
      const a=rad(225+lift*5);d+=S(w/2,h/2,w/2+Math.cos(a)*w*.29,h/2+Math.sin(a)*h*.29);
      d+=poly(ringAt(Q,circ(2.5,20).map(q=>({...q,u:q.u+w/2,v:q.v+h/2})),z));
    }else if(p.kind==='server'){
      d+=R(6,5,w-12,h-10,2)+R(w-17,h/2-2,9,4,1);
      for(let k=0;k<5;k++)f+=S(10+k*3,8,10+k*3,h-8);
    }else if(p.kind==='bag'){
      d+=open([Q(w*.28,10,z),Q(w*.28,3,z),Q(w*.72,3,z),Q(w*.72,10,z)]);f+=S(4,h-6,w-4,h-6);
    }else if(p.kind==='key'){d+=R(5,4,w-10,h-8,2);}
    else if(p.kind==='base'){f+=S(5,h-4,w-5,h-4);}
    o.detail.setAttribute('d',d);o.fine.setAttribute('d',f);
  }
  const loop=register(stage,(_dt,now)=>{
    let moving=false;
    items.forEach((o,i)=>{const v=tval(o.lift,now),a=tval(o.turn,now),key=v.toFixed(3)+','+a.toFixed(3)+','+active;
      if(key!==o.last){draw(o,i,v,a);o.last=key;}
      if(!tdone(o.lift,now)||!tdone(o.turn,now))moving=true;
    });return moving;
  });bag.add(loop.unregister);
  function select(a){
    if(a===active)return;const from=a<0?active:a,now=performance.now();active=a;
    items.forEach((o,i)=>{const distance=Math.abs(i-from),v=a<0||o.p.fixed?0:strength*Math.max(0,1-distance*.27);
      tset(o.lift,v,now,distance*45);tset(o.turn,a<0||o.p.fixed?0:(i-from)*2.2,now,distance*45);
    });read.textContent=a<0?'rest':items[a].p.name;loop.wake();
  }
  bag.add(pointer(stage,{move:([x,y])=>{
    if(x<35||x>365||y<45||y>285){select(-1);return;}
    let best=-1,dist=Infinity;items.forEach((o,i)=>{if(o.p.fixed)return;const d=(x-o.anchor[0])**2+(y-o.anchor[1])**2;if(d<dist){dist=d;best=i;}});select(best);
  },leave:()=>select(-1)}));
  items.forEach((o,i)=>draw(o,i,0,0));read.textContent='rest';bag.add(()=>svg.replaceChildren());
  return {set(v){strength=v;const old=active;active=-2;select(old);},destroy:bag.dispose};
}

hairline({name:"cardfile",means:"An organised file of content cards opens one layer at a time.",rules:[1,2,4,5,7,8,9,10],range:[3,12,20],tour:[[130,150],[260,155],[200,205],null],mount});

})();

(()=>{
// landing-pages-and-microsites: original illustration for Edgar Largo Studio.
const PARTS=[{"kind":"base","name":"base","x":-58,"y":-35,"z":0,"w":116,"h":80,"fixed":true,"thick":4},{"kind":"page","name":"screen","x":-45,"y":-28,"z":11,"w":85,"h":70,"upright":true},{"kind":"key","name":"key","x":-27,"y":25,"z":7,"w":57,"h":22,"angle":-6}];
const FOCUS=1;
const {Cam,fit,proj,facing,rings,prism,solid,put,mk,rrect,ringAt,poly,open,seg,circ,rad,clamp,tween,tset,tval,tdone,pointer,register,disposer}=HL;
function mount({stage,svg,read},value){
  const bag=disposer(), C=Cam(45,.5,PARTS[0].kind==='swatch'?3:2.05);
  const bounds=[];
  PARTS.forEach(p=>{const a=rad(p.angle||0);for(const u of[0,p.w])for(const v of[0,p.h]){
    const x=u*Math.cos(a)-v*Math.sin(a),y=u*Math.sin(a)+v*Math.cos(a);
    for(const z of[0,20])bounds.push(p.upright?[p.x+x,p.y,p.z+p.h-y+z]:[p.x+x,p.y+y,p.z+z]);
  }});fit(C,bounds,200,166);
  const P=proj(C), front=facing(C), g=mk('g',{},svg);
  let strength=value, active=-1;
  const items=PARTS.map((p,i)=>{
    const group=mk('g',{},g), body=solid(group), detail=mk('path',{class:'nf'},group), fine=mk('path',{class:'nf lo'},group);
    return {p,group,body,detail,fine,lift:tween(0),turn:tween(0),last:'',anchor:P(p.x,p.y,p.z+(p.upright?p.h/2:0))};
  });
  function draw(o,i,lift,turn){
    const p=o.p,w=p.w,h=p.h,angle=rad((p.angle||0)+turn),co=Math.cos(angle),si=Math.sin(angle);
    // Local rounded plates become upright screens, cards or flat desk objects.
    const Q=(u,v,z=0)=>{let a=u*co-v*si,b=u*si+v*co;return p.upright?P(p.x+a,p.y+z,p.z+h-b+lift):P(p.x+a,p.y+b,p.z+z+lift);};
    let ring,inner;
    if(p.kind==='dial'){ring=circ(w/2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));inner=circ(w/2-2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));}
    else [ring,inner]=rings(0,0,w,h,p.kind==='phone'?5:3,1.3);
    const paths=prism(Q,front,ring,inner,0,p.thick||2);
    put(o.body,paths);o.body.sil.classList.toggle('hi',i===(active<0?FOCUS:active));
    const z=(p.thick||2)+.1, R=(x,y,ww,hh,r=1)=>poly(ringAt(Q,rrect(x,y,x+ww,y+hh,r,8),z));
    const S=(x,y,x2,y2)=>seg(Q(x,y,z),Q(x2,y2,z));
    let d='',f='';
    if(['screen','phone','page','shop'].includes(p.kind)){
      d+=R(4,5,w-8,h-10,2);f+=S(4,12,w-4,12);
      for(let k=0;k<3;k++)f+=R(7+k*3,8,1,1,.5);
      if(p.kind==='shop'){
        for(let k=0;k<3;k++){d+=R(8+k*(w-16)/3,19,(w-23)/3,h*.35,1);f+=S(8+k*(w-16)/3,h-12,17+k*(w-16)/3,h-12);}
      }else{
        d+=R(8,17,w-16,h*.3,1);f+=S(8,h*.64,w*.7,h*.64)+S(8,h*.73,w*.84,h*.73);
        d+=R(8,h-15,Math.min(19,w-16),4,2);
      }
      if(p.kind==='phone')f+=S(w*.4,3,w*.6,3);
    }else if(p.kind==='file'){
      d+=R(6,6,w*.36,6,2)+R(6,18,w-12,h*.34,2);
      for(let k=0;k<3;k++)f+=S(6,h*.64+k*5,w-7-k*5,h*.64+k*5);
    }else if(p.kind==='swatch'){
      d+=R(5,5,w-10,h*.62,2);f+=S(6,h-12,w-6,h-12)+S(6,h-8,w*.6,h-8);
      d+=poly(ringAt(Q,circ(1.5,12).map(q=>({...q,u:q.u+w/2,v:q.v+h-4})),z));
    }else if(p.kind==='film'){
      d+=R(7,8,w-14,h-16,1);
      for(let k=0;k<5;k++){f+=R(2,4+k*(h-9)/5,2,3,.5)+R(w-4,4+k*(h-9)/5,2,3,.5);}
      const yy=h*.52+Math.sin(i)*6;d+=poly(ringAt(Q,circ(6+i*2,30).map(q=>({...q,u:q.u+w*.52,v:q.v+yy})),z));
    }else if(p.kind==='map'){
      const pts=[[5,h*.7],[w*.27,h*.6],[w*.48,h*.67],[w*.7,h*.32],[w-5,h*.25]];
      d+=open(pts.map(q=>Q(q[0],q[1],z)));f+=S(w/3,3,w/3,h-3)+S(w*2/3,3,w*2/3,h-3);
      for(const [u,v]of [pts[0],pts[2],pts[4]])d+=poly(ringAt(Q,circ(2,18).map(q=>({...q,u:q.u+u,v:q.v+v})),z));
    }else if(p.kind==='dial'){
      for(let k=0;k<13;k++){const a=rad(135+k*22.5),rr=w*.38;f+=S(w/2+Math.cos(a)*rr,h/2+Math.sin(a)*rr,w/2+Math.cos(a)*(rr-4),h/2+Math.sin(a)*(rr-4));}
      const a=rad(225+lift*5);d+=S(w/2,h/2,w/2+Math.cos(a)*w*.29,h/2+Math.sin(a)*h*.29);
      d+=poly(ringAt(Q,circ(2.5,20).map(q=>({...q,u:q.u+w/2,v:q.v+h/2})),z));
    }else if(p.kind==='server'){
      d+=R(6,5,w-12,h-10,2)+R(w-17,h/2-2,9,4,1);
      for(let k=0;k<5;k++)f+=S(10+k*3,8,10+k*3,h-8);
    }else if(p.kind==='bag'){
      d+=open([Q(w*.28,10,z),Q(w*.28,3,z),Q(w*.72,3,z),Q(w*.72,10,z)]);f+=S(4,h-6,w-4,h-6);
    }else if(p.kind==='key'){d+=R(5,4,w-10,h-8,2);}
    else if(p.kind==='base'){f+=S(5,h-4,w-5,h-4);}
    o.detail.setAttribute('d',d);o.fine.setAttribute('d',f);
  }
  const loop=register(stage,(_dt,now)=>{
    let moving=false;
    items.forEach((o,i)=>{const v=tval(o.lift,now),a=tval(o.turn,now),key=v.toFixed(3)+','+a.toFixed(3)+','+active;
      if(key!==o.last){draw(o,i,v,a);o.last=key;}
      if(!tdone(o.lift,now)||!tdone(o.turn,now))moving=true;
    });return moving;
  });bag.add(loop.unregister);
  function select(a){
    if(a===active)return;const from=a<0?active:a,now=performance.now();active=a;
    items.forEach((o,i)=>{const distance=Math.abs(i-from),v=a<0||o.p.fixed?0:strength*Math.max(0,1-distance*.27);
      tset(o.lift,v,now,distance*45);tset(o.turn,a<0||o.p.fixed?0:(i-from)*2.2,now,distance*45);
    });read.textContent=a<0?'rest':items[a].p.name;loop.wake();
  }
  bag.add(pointer(stage,{move:([x,y])=>{
    if(x<35||x>365||y<45||y>285){select(-1);return;}
    let best=-1,dist=Infinity;items.forEach((o,i)=>{if(o.p.fixed)return;const d=(x-o.anchor[0])**2+(y-o.anchor[1])**2;if(d<dist){dist=d;best=i;}});select(best);
  },leave:()=>select(-1)}));
  items.forEach((o,i)=>draw(o,i,0,0));read.textContent='rest';bag.add(()=>svg.replaceChildren());
  return {set(v){strength=v;const old=active;active=-2;select(old);},destroy:bag.dispose};
}

hairline({name:"launchpad",means:"One focused page and its raised action key come forward together.",rules:[1,2,4,5,7,8,9,10],range:[3,12,20],tour:[[130,150],[260,155],[200,205],null],mount});

})();

(()=>{
// consistent-identity: original illustration for Edgar Largo Studio.
const PARTS=[{"kind":"swatch","name":"swatch","x":-38,"y":-28,"z":5,"w":36,"h":73,"angle":-25},{"kind":"swatch","name":"swatch","x":-25,"y":-22,"z":8,"w":36,"h":73,"angle":-13},{"kind":"swatch","name":"swatch","x":-12,"y":-16,"z":11,"w":36,"h":73,"angle":-1},{"kind":"swatch","name":"swatch","x":1,"y":-10,"z":14,"w":36,"h":73,"angle":11},{"kind":"swatch","name":"swatch","x":14,"y":-4,"z":17,"w":36,"h":73,"angle":23}];
const FOCUS=2;
const {Cam,fit,proj,facing,rings,prism,solid,put,mk,rrect,ringAt,poly,open,seg,circ,rad,clamp,tween,tset,tval,tdone,pointer,register,disposer}=HL;
function mount({stage,svg,read},value){
  const bag=disposer(), C=Cam(45,.5,PARTS[0].kind==='swatch'?3:2.05);
  const bounds=[];
  PARTS.forEach(p=>{const a=rad(p.angle||0);for(const u of[0,p.w])for(const v of[0,p.h]){
    const x=u*Math.cos(a)-v*Math.sin(a),y=u*Math.sin(a)+v*Math.cos(a);
    for(const z of[0,20])bounds.push(p.upright?[p.x+x,p.y,p.z+p.h-y+z]:[p.x+x,p.y+y,p.z+z]);
  }});fit(C,bounds,200,166);
  const P=proj(C), front=facing(C), g=mk('g',{},svg);
  let strength=value, active=-1;
  const items=PARTS.map((p,i)=>{
    const group=mk('g',{},g), body=solid(group), detail=mk('path',{class:'nf'},group), fine=mk('path',{class:'nf lo'},group);
    return {p,group,body,detail,fine,lift:tween(0),turn:tween(0),last:'',anchor:P(p.x,p.y,p.z+(p.upright?p.h/2:0))};
  });
  function draw(o,i,lift,turn){
    const p=o.p,w=p.w,h=p.h,angle=rad((p.angle||0)+turn),co=Math.cos(angle),si=Math.sin(angle);
    // Local rounded plates become upright screens, cards or flat desk objects.
    const Q=(u,v,z=0)=>{let a=u*co-v*si,b=u*si+v*co;return p.upright?P(p.x+a,p.y+z,p.z+h-b+lift):P(p.x+a,p.y+b,p.z+z+lift);};
    let ring,inner;
    if(p.kind==='dial'){ring=circ(w/2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));inner=circ(w/2-2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));}
    else [ring,inner]=rings(0,0,w,h,p.kind==='phone'?5:3,1.3);
    const paths=prism(Q,front,ring,inner,0,p.thick||2);
    put(o.body,paths);o.body.sil.classList.toggle('hi',i===(active<0?FOCUS:active));
    const z=(p.thick||2)+.1, R=(x,y,ww,hh,r=1)=>poly(ringAt(Q,rrect(x,y,x+ww,y+hh,r,8),z));
    const S=(x,y,x2,y2)=>seg(Q(x,y,z),Q(x2,y2,z));
    let d='',f='';
    if(['screen','phone','page','shop'].includes(p.kind)){
      d+=R(4,5,w-8,h-10,2);f+=S(4,12,w-4,12);
      for(let k=0;k<3;k++)f+=R(7+k*3,8,1,1,.5);
      if(p.kind==='shop'){
        for(let k=0;k<3;k++){d+=R(8+k*(w-16)/3,19,(w-23)/3,h*.35,1);f+=S(8+k*(w-16)/3,h-12,17+k*(w-16)/3,h-12);}
      }else{
        d+=R(8,17,w-16,h*.3,1);f+=S(8,h*.64,w*.7,h*.64)+S(8,h*.73,w*.84,h*.73);
        d+=R(8,h-15,Math.min(19,w-16),4,2);
      }
      if(p.kind==='phone')f+=S(w*.4,3,w*.6,3);
    }else if(p.kind==='file'){
      d+=R(6,6,w*.36,6,2)+R(6,18,w-12,h*.34,2);
      for(let k=0;k<3;k++)f+=S(6,h*.64+k*5,w-7-k*5,h*.64+k*5);
    }else if(p.kind==='swatch'){
      d+=R(5,5,w-10,h*.62,2);f+=S(6,h-12,w-6,h-12)+S(6,h-8,w*.6,h-8);
      d+=poly(ringAt(Q,circ(1.5,12).map(q=>({...q,u:q.u+w/2,v:q.v+h-4})),z));
    }else if(p.kind==='film'){
      d+=R(7,8,w-14,h-16,1);
      for(let k=0;k<5;k++){f+=R(2,4+k*(h-9)/5,2,3,.5)+R(w-4,4+k*(h-9)/5,2,3,.5);}
      const yy=h*.52+Math.sin(i)*6;d+=poly(ringAt(Q,circ(6+i*2,30).map(q=>({...q,u:q.u+w*.52,v:q.v+yy})),z));
    }else if(p.kind==='map'){
      const pts=[[5,h*.7],[w*.27,h*.6],[w*.48,h*.67],[w*.7,h*.32],[w-5,h*.25]];
      d+=open(pts.map(q=>Q(q[0],q[1],z)));f+=S(w/3,3,w/3,h-3)+S(w*2/3,3,w*2/3,h-3);
      for(const [u,v]of [pts[0],pts[2],pts[4]])d+=poly(ringAt(Q,circ(2,18).map(q=>({...q,u:q.u+u,v:q.v+v})),z));
    }else if(p.kind==='dial'){
      for(let k=0;k<13;k++){const a=rad(135+k*22.5),rr=w*.38;f+=S(w/2+Math.cos(a)*rr,h/2+Math.sin(a)*rr,w/2+Math.cos(a)*(rr-4),h/2+Math.sin(a)*(rr-4));}
      const a=rad(225+lift*5);d+=S(w/2,h/2,w/2+Math.cos(a)*w*.29,h/2+Math.sin(a)*h*.29);
      d+=poly(ringAt(Q,circ(2.5,20).map(q=>({...q,u:q.u+w/2,v:q.v+h/2})),z));
    }else if(p.kind==='server'){
      d+=R(6,5,w-12,h-10,2)+R(w-17,h/2-2,9,4,1);
      for(let k=0;k<5;k++)f+=S(10+k*3,8,10+k*3,h-8);
    }else if(p.kind==='bag'){
      d+=open([Q(w*.28,10,z),Q(w*.28,3,z),Q(w*.72,3,z),Q(w*.72,10,z)]);f+=S(4,h-6,w-4,h-6);
    }else if(p.kind==='key'){d+=R(5,4,w-10,h-8,2);}
    else if(p.kind==='base'){f+=S(5,h-4,w-5,h-4);}
    o.detail.setAttribute('d',d);o.fine.setAttribute('d',f);
  }
  const loop=register(stage,(_dt,now)=>{
    let moving=false;
    items.forEach((o,i)=>{const v=tval(o.lift,now),a=tval(o.turn,now),key=v.toFixed(3)+','+a.toFixed(3)+','+active;
      if(key!==o.last){draw(o,i,v,a);o.last=key;}
      if(!tdone(o.lift,now)||!tdone(o.turn,now))moving=true;
    });return moving;
  });bag.add(loop.unregister);
  function select(a){
    if(a===active)return;const from=a<0?active:a,now=performance.now();active=a;
    items.forEach((o,i)=>{const distance=Math.abs(i-from),v=a<0||o.p.fixed?0:strength*Math.max(0,1-distance*.27);
      tset(o.lift,v,now,distance*45);tset(o.turn,a<0||o.p.fixed?0:(i-from)*2.2,now,distance*45);
    });read.textContent=a<0?'rest':items[a].p.name;loop.wake();
  }
  bag.add(pointer(stage,{move:([x,y])=>{
    if(x<35||x>365||y<45||y>285){select(-1);return;}
    let best=-1,dist=Infinity;items.forEach((o,i)=>{if(o.p.fixed)return;const d=(x-o.anchor[0])**2+(y-o.anchor[1])**2;if(d<dist){dist=d;best=i;}});select(best);
  },leave:()=>select(-1)}));
  items.forEach((o,i)=>draw(o,i,0,0));read.textContent='rest';bag.add(()=>svg.replaceChildren());
  return {set(v){strength=v;const old=active;active=-2;select(old);},destroy:bag.dispose};
}

hairline({name:"swatches",means:"A fan of sample cards lifts from a single palette, keeping a consistent visual rhythm.",rules:[1,2,4,5,7,8,9,10],range:[3,12,20],tour:[[130,150],[260,155],[200,205],null],mount});

})();

(()=>{
// motion-and-interaction-design: original illustration for Edgar Largo Studio.
const PARTS=[{"kind":"base","name":"base","x":-58,"y":-35,"z":0,"w":116,"h":80,"fixed":true,"thick":4},{"kind":"film","name":"screen","x":-51,"y":-18,"z":12,"w":32,"h":52,"upright":true},{"kind":"film","name":"screen","x":-14,"y":-9,"z":17,"w":32,"h":52,"upright":true},{"kind":"film","name":"screen","x":23,"y":0,"z":22,"w":32,"h":52,"upright":true}];
const FOCUS=1;
const {Cam,fit,proj,facing,rings,prism,solid,put,mk,rrect,ringAt,poly,open,seg,circ,rad,clamp,tween,tset,tval,tdone,pointer,register,disposer}=HL;
function mount({stage,svg,read},value){
  const bag=disposer(), C=Cam(45,.5,PARTS[0].kind==='swatch'?3:2.05);
  const bounds=[];
  PARTS.forEach(p=>{const a=rad(p.angle||0);for(const u of[0,p.w])for(const v of[0,p.h]){
    const x=u*Math.cos(a)-v*Math.sin(a),y=u*Math.sin(a)+v*Math.cos(a);
    for(const z of[0,20])bounds.push(p.upright?[p.x+x,p.y,p.z+p.h-y+z]:[p.x+x,p.y+y,p.z+z]);
  }});fit(C,bounds,200,166);
  const P=proj(C), front=facing(C), g=mk('g',{},svg);
  let strength=value, active=-1;
  const items=PARTS.map((p,i)=>{
    const group=mk('g',{},g), body=solid(group), detail=mk('path',{class:'nf'},group), fine=mk('path',{class:'nf lo'},group);
    return {p,group,body,detail,fine,lift:tween(0),turn:tween(0),last:'',anchor:P(p.x,p.y,p.z+(p.upright?p.h/2:0))};
  });
  function draw(o,i,lift,turn){
    const p=o.p,w=p.w,h=p.h,angle=rad((p.angle||0)+turn),co=Math.cos(angle),si=Math.sin(angle);
    // Local rounded plates become upright screens, cards or flat desk objects.
    const Q=(u,v,z=0)=>{let a=u*co-v*si,b=u*si+v*co;return p.upright?P(p.x+a,p.y+z,p.z+h-b+lift):P(p.x+a,p.y+b,p.z+z+lift);};
    let ring,inner;
    if(p.kind==='dial'){ring=circ(w/2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));inner=circ(w/2-2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));}
    else [ring,inner]=rings(0,0,w,h,p.kind==='phone'?5:3,1.3);
    const paths=prism(Q,front,ring,inner,0,p.thick||2);
    put(o.body,paths);o.body.sil.classList.toggle('hi',i===(active<0?FOCUS:active));
    const z=(p.thick||2)+.1, R=(x,y,ww,hh,r=1)=>poly(ringAt(Q,rrect(x,y,x+ww,y+hh,r,8),z));
    const S=(x,y,x2,y2)=>seg(Q(x,y,z),Q(x2,y2,z));
    let d='',f='';
    if(['screen','phone','page','shop'].includes(p.kind)){
      d+=R(4,5,w-8,h-10,2);f+=S(4,12,w-4,12);
      for(let k=0;k<3;k++)f+=R(7+k*3,8,1,1,.5);
      if(p.kind==='shop'){
        for(let k=0;k<3;k++){d+=R(8+k*(w-16)/3,19,(w-23)/3,h*.35,1);f+=S(8+k*(w-16)/3,h-12,17+k*(w-16)/3,h-12);}
      }else{
        d+=R(8,17,w-16,h*.3,1);f+=S(8,h*.64,w*.7,h*.64)+S(8,h*.73,w*.84,h*.73);
        d+=R(8,h-15,Math.min(19,w-16),4,2);
      }
      if(p.kind==='phone')f+=S(w*.4,3,w*.6,3);
    }else if(p.kind==='file'){
      d+=R(6,6,w*.36,6,2)+R(6,18,w-12,h*.34,2);
      for(let k=0;k<3;k++)f+=S(6,h*.64+k*5,w-7-k*5,h*.64+k*5);
    }else if(p.kind==='swatch'){
      d+=R(5,5,w-10,h*.62,2);f+=S(6,h-12,w-6,h-12)+S(6,h-8,w*.6,h-8);
      d+=poly(ringAt(Q,circ(1.5,12).map(q=>({...q,u:q.u+w/2,v:q.v+h-4})),z));
    }else if(p.kind==='film'){
      d+=R(7,8,w-14,h-16,1);
      for(let k=0;k<5;k++){f+=R(2,4+k*(h-9)/5,2,3,.5)+R(w-4,4+k*(h-9)/5,2,3,.5);}
      const yy=h*.52+Math.sin(i)*6;d+=poly(ringAt(Q,circ(6+i*2,30).map(q=>({...q,u:q.u+w*.52,v:q.v+yy})),z));
    }else if(p.kind==='map'){
      const pts=[[5,h*.7],[w*.27,h*.6],[w*.48,h*.67],[w*.7,h*.32],[w-5,h*.25]];
      d+=open(pts.map(q=>Q(q[0],q[1],z)));f+=S(w/3,3,w/3,h-3)+S(w*2/3,3,w*2/3,h-3);
      for(const [u,v]of [pts[0],pts[2],pts[4]])d+=poly(ringAt(Q,circ(2,18).map(q=>({...q,u:q.u+u,v:q.v+v})),z));
    }else if(p.kind==='dial'){
      for(let k=0;k<13;k++){const a=rad(135+k*22.5),rr=w*.38;f+=S(w/2+Math.cos(a)*rr,h/2+Math.sin(a)*rr,w/2+Math.cos(a)*(rr-4),h/2+Math.sin(a)*(rr-4));}
      const a=rad(225+lift*5);d+=S(w/2,h/2,w/2+Math.cos(a)*w*.29,h/2+Math.sin(a)*h*.29);
      d+=poly(ringAt(Q,circ(2.5,20).map(q=>({...q,u:q.u+w/2,v:q.v+h/2})),z));
    }else if(p.kind==='server'){
      d+=R(6,5,w-12,h-10,2)+R(w-17,h/2-2,9,4,1);
      for(let k=0;k<5;k++)f+=S(10+k*3,8,10+k*3,h-8);
    }else if(p.kind==='bag'){
      d+=open([Q(w*.28,10,z),Q(w*.28,3,z),Q(w*.72,3,z),Q(w*.72,10,z)]);f+=S(4,h-6,w-4,h-6);
    }else if(p.kind==='key'){d+=R(5,4,w-10,h-8,2);}
    else if(p.kind==='base'){f+=S(5,h-4,w-5,h-4);}
    o.detail.setAttribute('d',d);o.fine.setAttribute('d',f);
  }
  const loop=register(stage,(_dt,now)=>{
    let moving=false;
    items.forEach((o,i)=>{const v=tval(o.lift,now),a=tval(o.turn,now),key=v.toFixed(3)+','+a.toFixed(3)+','+active;
      if(key!==o.last){draw(o,i,v,a);o.last=key;}
      if(!tdone(o.lift,now)||!tdone(o.turn,now))moving=true;
    });return moving;
  });bag.add(loop.unregister);
  function select(a){
    if(a===active)return;const from=a<0?active:a,now=performance.now();active=a;
    items.forEach((o,i)=>{const distance=Math.abs(i-from),v=a<0||o.p.fixed?0:strength*Math.max(0,1-distance*.27);
      tset(o.lift,v,now,distance*45);tset(o.turn,a<0||o.p.fixed?0:(i-from)*2.2,now,distance*45);
    });read.textContent=a<0?'rest':items[a].p.name;loop.wake();
  }
  bag.add(pointer(stage,{move:([x,y])=>{
    if(x<35||x>365||y<45||y>285){select(-1);return;}
    let best=-1,dist=Infinity;items.forEach((o,i)=>{if(o.p.fixed)return;const d=(x-o.anchor[0])**2+(y-o.anchor[1])**2;if(d<dist){dist=d;best=i;}});select(best);
  },leave:()=>select(-1)}));
  items.forEach((o,i)=>draw(o,i,0,0));read.textContent='rest';bag.add(()=>svg.replaceChildren());
  return {set(v){strength=v;const old=active;active=-2;select(old);},destroy:bag.dispose};
}

hairline({name:"frames",means:"Three film frames rise with a stagger, making timing visible.",rules:[1,2,4,5,7,8,9,10],range:[3,12,20],tour:[[130,150],[260,155],[200,205],null],mount});

})();

(()=>{
// ux-centric-strategy: original illustration for Edgar Largo Studio.
const PARTS=[{"kind":"map","name":"map","x":-56,"y":-32,"z":4,"w":107,"h":70,"angle":-4},{"kind":"file","name":"screen","x":-32,"y":-35,"z":11,"w":62,"h":58,"upright":true},{"kind":"key","name":"key","x":20,"y":19,"z":9,"w":29,"h":20}];
const FOCUS=1;
const {Cam,fit,proj,facing,rings,prism,solid,put,mk,rrect,ringAt,poly,open,seg,circ,rad,clamp,tween,tset,tval,tdone,pointer,register,disposer}=HL;
function mount({stage,svg,read},value){
  const bag=disposer(), C=Cam(45,.5,PARTS[0].kind==='swatch'?3:2.05);
  const bounds=[];
  PARTS.forEach(p=>{const a=rad(p.angle||0);for(const u of[0,p.w])for(const v of[0,p.h]){
    const x=u*Math.cos(a)-v*Math.sin(a),y=u*Math.sin(a)+v*Math.cos(a);
    for(const z of[0,20])bounds.push(p.upright?[p.x+x,p.y,p.z+p.h-y+z]:[p.x+x,p.y+y,p.z+z]);
  }});fit(C,bounds,200,166);
  const P=proj(C), front=facing(C), g=mk('g',{},svg);
  let strength=value, active=-1;
  const items=PARTS.map((p,i)=>{
    const group=mk('g',{},g), body=solid(group), detail=mk('path',{class:'nf'},group), fine=mk('path',{class:'nf lo'},group);
    return {p,group,body,detail,fine,lift:tween(0),turn:tween(0),last:'',anchor:P(p.x,p.y,p.z+(p.upright?p.h/2:0))};
  });
  function draw(o,i,lift,turn){
    const p=o.p,w=p.w,h=p.h,angle=rad((p.angle||0)+turn),co=Math.cos(angle),si=Math.sin(angle);
    // Local rounded plates become upright screens, cards or flat desk objects.
    const Q=(u,v,z=0)=>{let a=u*co-v*si,b=u*si+v*co;return p.upright?P(p.x+a,p.y+z,p.z+h-b+lift):P(p.x+a,p.y+b,p.z+z+lift);};
    let ring,inner;
    if(p.kind==='dial'){ring=circ(w/2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));inner=circ(w/2-2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));}
    else [ring,inner]=rings(0,0,w,h,p.kind==='phone'?5:3,1.3);
    const paths=prism(Q,front,ring,inner,0,p.thick||2);
    put(o.body,paths);o.body.sil.classList.toggle('hi',i===(active<0?FOCUS:active));
    const z=(p.thick||2)+.1, R=(x,y,ww,hh,r=1)=>poly(ringAt(Q,rrect(x,y,x+ww,y+hh,r,8),z));
    const S=(x,y,x2,y2)=>seg(Q(x,y,z),Q(x2,y2,z));
    let d='',f='';
    if(['screen','phone','page','shop'].includes(p.kind)){
      d+=R(4,5,w-8,h-10,2);f+=S(4,12,w-4,12);
      for(let k=0;k<3;k++)f+=R(7+k*3,8,1,1,.5);
      if(p.kind==='shop'){
        for(let k=0;k<3;k++){d+=R(8+k*(w-16)/3,19,(w-23)/3,h*.35,1);f+=S(8+k*(w-16)/3,h-12,17+k*(w-16)/3,h-12);}
      }else{
        d+=R(8,17,w-16,h*.3,1);f+=S(8,h*.64,w*.7,h*.64)+S(8,h*.73,w*.84,h*.73);
        d+=R(8,h-15,Math.min(19,w-16),4,2);
      }
      if(p.kind==='phone')f+=S(w*.4,3,w*.6,3);
    }else if(p.kind==='file'){
      d+=R(6,6,w*.36,6,2)+R(6,18,w-12,h*.34,2);
      for(let k=0;k<3;k++)f+=S(6,h*.64+k*5,w-7-k*5,h*.64+k*5);
    }else if(p.kind==='swatch'){
      d+=R(5,5,w-10,h*.62,2);f+=S(6,h-12,w-6,h-12)+S(6,h-8,w*.6,h-8);
      d+=poly(ringAt(Q,circ(1.5,12).map(q=>({...q,u:q.u+w/2,v:q.v+h-4})),z));
    }else if(p.kind==='film'){
      d+=R(7,8,w-14,h-16,1);
      for(let k=0;k<5;k++){f+=R(2,4+k*(h-9)/5,2,3,.5)+R(w-4,4+k*(h-9)/5,2,3,.5);}
      const yy=h*.52+Math.sin(i)*6;d+=poly(ringAt(Q,circ(6+i*2,30).map(q=>({...q,u:q.u+w*.52,v:q.v+yy})),z));
    }else if(p.kind==='map'){
      const pts=[[5,h*.7],[w*.27,h*.6],[w*.48,h*.67],[w*.7,h*.32],[w-5,h*.25]];
      d+=open(pts.map(q=>Q(q[0],q[1],z)));f+=S(w/3,3,w/3,h-3)+S(w*2/3,3,w*2/3,h-3);
      for(const [u,v]of [pts[0],pts[2],pts[4]])d+=poly(ringAt(Q,circ(2,18).map(q=>({...q,u:q.u+u,v:q.v+v})),z));
    }else if(p.kind==='dial'){
      for(let k=0;k<13;k++){const a=rad(135+k*22.5),rr=w*.38;f+=S(w/2+Math.cos(a)*rr,h/2+Math.sin(a)*rr,w/2+Math.cos(a)*(rr-4),h/2+Math.sin(a)*(rr-4));}
      const a=rad(225+lift*5);d+=S(w/2,h/2,w/2+Math.cos(a)*w*.29,h/2+Math.sin(a)*h*.29);
      d+=poly(ringAt(Q,circ(2.5,20).map(q=>({...q,u:q.u+w/2,v:q.v+h/2})),z));
    }else if(p.kind==='server'){
      d+=R(6,5,w-12,h-10,2)+R(w-17,h/2-2,9,4,1);
      for(let k=0;k<5;k++)f+=S(10+k*3,8,10+k*3,h-8);
    }else if(p.kind==='bag'){
      d+=open([Q(w*.28,10,z),Q(w*.28,3,z),Q(w*.72,3,z),Q(w*.72,10,z)]);f+=S(4,h-6,w-4,h-6);
    }else if(p.kind==='key'){d+=R(5,4,w-10,h-8,2);}
    else if(p.kind==='base'){f+=S(5,h-4,w-5,h-4);}
    o.detail.setAttribute('d',d);o.fine.setAttribute('d',f);
  }
  const loop=register(stage,(_dt,now)=>{
    let moving=false;
    items.forEach((o,i)=>{const v=tval(o.lift,now),a=tval(o.turn,now),key=v.toFixed(3)+','+a.toFixed(3)+','+active;
      if(key!==o.last){draw(o,i,v,a);o.last=key;}
      if(!tdone(o.lift,now)||!tdone(o.turn,now))moving=true;
    });return moving;
  });bag.add(loop.unregister);
  function select(a){
    if(a===active)return;const from=a<0?active:a,now=performance.now();active=a;
    items.forEach((o,i)=>{const distance=Math.abs(i-from),v=a<0||o.p.fixed?0:strength*Math.max(0,1-distance*.27);
      tset(o.lift,v,now,distance*45);tset(o.turn,a<0||o.p.fixed?0:(i-from)*2.2,now,distance*45);
    });read.textContent=a<0?'rest':items[a].p.name;loop.wake();
  }
  bag.add(pointer(stage,{move:([x,y])=>{
    if(x<35||x>365||y<45||y>285){select(-1);return;}
    let best=-1,dist=Infinity;items.forEach((o,i)=>{if(o.p.fixed)return;const d=(x-o.anchor[0])**2+(y-o.anchor[1])**2;if(d<dist){dist=d;best=i;}});select(best);
  },leave:()=>select(-1)}));
  items.forEach((o,i)=>draw(o,i,0,0));read.textContent='rest';bag.add(()=>svg.replaceChildren());
  return {set(v){strength=v;const old=active;active=-2;select(old);},destroy:bag.dispose};
}

hairline({name:"fieldnotes",means:"A folded route map and a field notebook lift to reveal the route through an experience.",rules:[1,2,4,5,7,8,9,10],range:[3,12,20],tour:[[130,150],[260,155],[200,205],null],mount});

})();

(()=>{
// performance-optimization: original illustration for Edgar Largo Studio.
const PARTS=[{"kind":"base","name":"base","x":-35,"y":-23,"z":0,"w":70,"h":52,"fixed":true,"thick":6},{"kind":"dial","name":"dial","x":-40,"y":-26,"z":8,"w":80,"h":80,"upright":true,"thick":5},{"kind":"key","name":"key","x":-8,"y":-28,"z":89,"w":16,"h":8,"fixed":true}];
const FOCUS=1;
const {Cam,fit,proj,facing,rings,prism,solid,put,mk,rrect,ringAt,poly,open,seg,circ,rad,clamp,tween,tset,tval,tdone,pointer,register,disposer}=HL;
function mount({stage,svg,read},value){
  const bag=disposer(), C=Cam(45,.5,PARTS[0].kind==='swatch'?3:2.05);
  const bounds=[];
  PARTS.forEach(p=>{const a=rad(p.angle||0);for(const u of[0,p.w])for(const v of[0,p.h]){
    const x=u*Math.cos(a)-v*Math.sin(a),y=u*Math.sin(a)+v*Math.cos(a);
    for(const z of[0,20])bounds.push(p.upright?[p.x+x,p.y,p.z+p.h-y+z]:[p.x+x,p.y+y,p.z+z]);
  }});fit(C,bounds,200,166);
  const P=proj(C), front=facing(C), g=mk('g',{},svg);
  let strength=value, active=-1;
  const items=PARTS.map((p,i)=>{
    const group=mk('g',{},g), body=solid(group), detail=mk('path',{class:'nf'},group), fine=mk('path',{class:'nf lo'},group);
    return {p,group,body,detail,fine,lift:tween(0),turn:tween(0),last:'',anchor:P(p.x,p.y,p.z+(p.upright?p.h/2:0))};
  });
  function draw(o,i,lift,turn){
    const p=o.p,w=p.w,h=p.h,angle=rad((p.angle||0)+turn),co=Math.cos(angle),si=Math.sin(angle);
    // Local rounded plates become upright screens, cards or flat desk objects.
    const Q=(u,v,z=0)=>{let a=u*co-v*si,b=u*si+v*co;return p.upright?P(p.x+a,p.y+z,p.z+h-b+lift):P(p.x+a,p.y+b,p.z+z+lift);};
    let ring,inner;
    if(p.kind==='dial'){ring=circ(w/2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));inner=circ(w/2-2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));}
    else [ring,inner]=rings(0,0,w,h,p.kind==='phone'?5:3,1.3);
    const paths=prism(Q,front,ring,inner,0,p.thick||2);
    put(o.body,paths);o.body.sil.classList.toggle('hi',i===(active<0?FOCUS:active));
    const z=(p.thick||2)+.1, R=(x,y,ww,hh,r=1)=>poly(ringAt(Q,rrect(x,y,x+ww,y+hh,r,8),z));
    const S=(x,y,x2,y2)=>seg(Q(x,y,z),Q(x2,y2,z));
    let d='',f='';
    if(['screen','phone','page','shop'].includes(p.kind)){
      d+=R(4,5,w-8,h-10,2);f+=S(4,12,w-4,12);
      for(let k=0;k<3;k++)f+=R(7+k*3,8,1,1,.5);
      if(p.kind==='shop'){
        for(let k=0;k<3;k++){d+=R(8+k*(w-16)/3,19,(w-23)/3,h*.35,1);f+=S(8+k*(w-16)/3,h-12,17+k*(w-16)/3,h-12);}
      }else{
        d+=R(8,17,w-16,h*.3,1);f+=S(8,h*.64,w*.7,h*.64)+S(8,h*.73,w*.84,h*.73);
        d+=R(8,h-15,Math.min(19,w-16),4,2);
      }
      if(p.kind==='phone')f+=S(w*.4,3,w*.6,3);
    }else if(p.kind==='file'){
      d+=R(6,6,w*.36,6,2)+R(6,18,w-12,h*.34,2);
      for(let k=0;k<3;k++)f+=S(6,h*.64+k*5,w-7-k*5,h*.64+k*5);
    }else if(p.kind==='swatch'){
      d+=R(5,5,w-10,h*.62,2);f+=S(6,h-12,w-6,h-12)+S(6,h-8,w*.6,h-8);
      d+=poly(ringAt(Q,circ(1.5,12).map(q=>({...q,u:q.u+w/2,v:q.v+h-4})),z));
    }else if(p.kind==='film'){
      d+=R(7,8,w-14,h-16,1);
      for(let k=0;k<5;k++){f+=R(2,4+k*(h-9)/5,2,3,.5)+R(w-4,4+k*(h-9)/5,2,3,.5);}
      const yy=h*.52+Math.sin(i)*6;d+=poly(ringAt(Q,circ(6+i*2,30).map(q=>({...q,u:q.u+w*.52,v:q.v+yy})),z));
    }else if(p.kind==='map'){
      const pts=[[5,h*.7],[w*.27,h*.6],[w*.48,h*.67],[w*.7,h*.32],[w-5,h*.25]];
      d+=open(pts.map(q=>Q(q[0],q[1],z)));f+=S(w/3,3,w/3,h-3)+S(w*2/3,3,w*2/3,h-3);
      for(const [u,v]of [pts[0],pts[2],pts[4]])d+=poly(ringAt(Q,circ(2,18).map(q=>({...q,u:q.u+u,v:q.v+v})),z));
    }else if(p.kind==='dial'){
      for(let k=0;k<13;k++){const a=rad(135+k*22.5),rr=w*.38;f+=S(w/2+Math.cos(a)*rr,h/2+Math.sin(a)*rr,w/2+Math.cos(a)*(rr-4),h/2+Math.sin(a)*(rr-4));}
      const a=rad(225+lift*5);d+=S(w/2,h/2,w/2+Math.cos(a)*w*.29,h/2+Math.sin(a)*h*.29);
      d+=poly(ringAt(Q,circ(2.5,20).map(q=>({...q,u:q.u+w/2,v:q.v+h/2})),z));
    }else if(p.kind==='server'){
      d+=R(6,5,w-12,h-10,2)+R(w-17,h/2-2,9,4,1);
      for(let k=0;k<5;k++)f+=S(10+k*3,8,10+k*3,h-8);
    }else if(p.kind==='bag'){
      d+=open([Q(w*.28,10,z),Q(w*.28,3,z),Q(w*.72,3,z),Q(w*.72,10,z)]);f+=S(4,h-6,w-4,h-6);
    }else if(p.kind==='key'){d+=R(5,4,w-10,h-8,2);}
    else if(p.kind==='base'){f+=S(5,h-4,w-5,h-4);}
    o.detail.setAttribute('d',d);o.fine.setAttribute('d',f);
  }
  const loop=register(stage,(_dt,now)=>{
    let moving=false;
    items.forEach((o,i)=>{const v=tval(o.lift,now),a=tval(o.turn,now),key=v.toFixed(3)+','+a.toFixed(3)+','+active;
      if(key!==o.last){draw(o,i,v,a);o.last=key;}
      if(!tdone(o.lift,now)||!tdone(o.turn,now))moving=true;
    });return moving;
  });bag.add(loop.unregister);
  function select(a){
    if(a===active)return;const from=a<0?active:a,now=performance.now();active=a;
    items.forEach((o,i)=>{const distance=Math.abs(i-from),v=a<0||o.p.fixed?0:strength*Math.max(0,1-distance*.27);
      tset(o.lift,v,now,distance*45);tset(o.turn,a<0||o.p.fixed?0:(i-from)*2.2,now,distance*45);
    });read.textContent=a<0?'rest':items[a].p.name;loop.wake();
  }
  bag.add(pointer(stage,{move:([x,y])=>{
    if(x<35||x>365||y<45||y>285){select(-1);return;}
    let best=-1,dist=Infinity;items.forEach((o,i)=>{if(o.p.fixed)return;const d=(x-o.anchor[0])**2+(y-o.anchor[1])**2;if(d<dist){dist=d;best=i;}});select(best);
  },leave:()=>select(-1)}));
  items.forEach((o,i)=>draw(o,i,0,0));read.textContent='rest';bag.add(()=>svg.replaceChildren());
  return {set(v){strength=v;const old=active;active=-2;select(old);},destroy:bag.dispose};
}

hairline({name:"chronograph",means:"A precision dial rises and its hand advances as you explore the instrument.",rules:[1,2,4,5,7,8,9,10],range:[3,12,20],tour:[[130,150],[260,155],[200,205],null],mount});

})();

(()=>{
// maintenance-and-ongoing-support: original illustration for Edgar Largo Studio.
const PARTS=[{"kind":"base","name":"base","x":-58,"y":-35,"z":0,"w":116,"h":80,"fixed":true,"thick":4},{"kind":"server","name":"screen","x":-43,"y":-14,"z":10,"w":86,"h":16,"upright":true,"thick":32},{"kind":"server","name":"screen","x":-43,"y":-14,"z":29,"w":86,"h":16,"upright":true,"thick":32},{"kind":"server","name":"screen","x":-43,"y":-14,"z":48,"w":86,"h":16,"upright":true,"thick":32},{"kind":"server","name":"screen","x":-43,"y":-14,"z":67,"w":86,"h":16,"upright":true,"thick":32}];
const FOCUS=2;
const {Cam,fit,proj,facing,rings,prism,solid,put,mk,rrect,ringAt,poly,open,seg,circ,rad,clamp,tween,tset,tval,tdone,pointer,register,disposer}=HL;
function mount({stage,svg,read},value){
  const bag=disposer(), C=Cam(45,.5,PARTS[0].kind==='swatch'?3:2.05);
  const bounds=[];
  PARTS.forEach(p=>{const a=rad(p.angle||0);for(const u of[0,p.w])for(const v of[0,p.h]){
    const x=u*Math.cos(a)-v*Math.sin(a),y=u*Math.sin(a)+v*Math.cos(a);
    for(const z of[0,20])bounds.push(p.upright?[p.x+x,p.y,p.z+p.h-y+z]:[p.x+x,p.y+y,p.z+z]);
  }});fit(C,bounds,200,166);
  const P=proj(C), front=facing(C), g=mk('g',{},svg);
  let strength=value, active=-1;
  const items=PARTS.map((p,i)=>{
    const group=mk('g',{},g), body=solid(group), detail=mk('path',{class:'nf'},group), fine=mk('path',{class:'nf lo'},group);
    return {p,group,body,detail,fine,lift:tween(0),turn:tween(0),last:'',anchor:P(p.x,p.y,p.z+(p.upright?p.h/2:0))};
  });
  function draw(o,i,lift,turn){
    const p=o.p,w=p.w,h=p.h,angle=rad((p.angle||0)+turn),co=Math.cos(angle),si=Math.sin(angle);
    // Local rounded plates become upright screens, cards or flat desk objects.
    const Q=(u,v,z=0)=>{let a=u*co-v*si,b=u*si+v*co;return p.upright?P(p.x+a,p.y+z,p.z+h-b+lift):P(p.x+a,p.y+b,p.z+z+lift);};
    let ring,inner;
    if(p.kind==='dial'){ring=circ(w/2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));inner=circ(w/2-2,64).map(q=>({...q,u:q.u+w/2,v:q.v+h/2}));}
    else [ring,inner]=rings(0,0,w,h,p.kind==='phone'?5:3,1.3);
    const paths=prism(Q,front,ring,inner,0,p.thick||2);
    put(o.body,paths);o.body.sil.classList.toggle('hi',i===(active<0?FOCUS:active));
    const z=(p.thick||2)+.1, R=(x,y,ww,hh,r=1)=>poly(ringAt(Q,rrect(x,y,x+ww,y+hh,r,8),z));
    const S=(x,y,x2,y2)=>seg(Q(x,y,z),Q(x2,y2,z));
    let d='',f='';
    if(['screen','phone','page','shop'].includes(p.kind)){
      d+=R(4,5,w-8,h-10,2);f+=S(4,12,w-4,12);
      for(let k=0;k<3;k++)f+=R(7+k*3,8,1,1,.5);
      if(p.kind==='shop'){
        for(let k=0;k<3;k++){d+=R(8+k*(w-16)/3,19,(w-23)/3,h*.35,1);f+=S(8+k*(w-16)/3,h-12,17+k*(w-16)/3,h-12);}
      }else{
        d+=R(8,17,w-16,h*.3,1);f+=S(8,h*.64,w*.7,h*.64)+S(8,h*.73,w*.84,h*.73);
        d+=R(8,h-15,Math.min(19,w-16),4,2);
      }
      if(p.kind==='phone')f+=S(w*.4,3,w*.6,3);
    }else if(p.kind==='file'){
      d+=R(6,6,w*.36,6,2)+R(6,18,w-12,h*.34,2);
      for(let k=0;k<3;k++)f+=S(6,h*.64+k*5,w-7-k*5,h*.64+k*5);
    }else if(p.kind==='swatch'){
      d+=R(5,5,w-10,h*.62,2);f+=S(6,h-12,w-6,h-12)+S(6,h-8,w*.6,h-8);
      d+=poly(ringAt(Q,circ(1.5,12).map(q=>({...q,u:q.u+w/2,v:q.v+h-4})),z));
    }else if(p.kind==='film'){
      d+=R(7,8,w-14,h-16,1);
      for(let k=0;k<5;k++){f+=R(2,4+k*(h-9)/5,2,3,.5)+R(w-4,4+k*(h-9)/5,2,3,.5);}
      const yy=h*.52+Math.sin(i)*6;d+=poly(ringAt(Q,circ(6+i*2,30).map(q=>({...q,u:q.u+w*.52,v:q.v+yy})),z));
    }else if(p.kind==='map'){
      const pts=[[5,h*.7],[w*.27,h*.6],[w*.48,h*.67],[w*.7,h*.32],[w-5,h*.25]];
      d+=open(pts.map(q=>Q(q[0],q[1],z)));f+=S(w/3,3,w/3,h-3)+S(w*2/3,3,w*2/3,h-3);
      for(const [u,v]of [pts[0],pts[2],pts[4]])d+=poly(ringAt(Q,circ(2,18).map(q=>({...q,u:q.u+u,v:q.v+v})),z));
    }else if(p.kind==='dial'){
      for(let k=0;k<13;k++){const a=rad(135+k*22.5),rr=w*.38;f+=S(w/2+Math.cos(a)*rr,h/2+Math.sin(a)*rr,w/2+Math.cos(a)*(rr-4),h/2+Math.sin(a)*(rr-4));}
      const a=rad(225+lift*5);d+=S(w/2,h/2,w/2+Math.cos(a)*w*.29,h/2+Math.sin(a)*h*.29);
      d+=poly(ringAt(Q,circ(2.5,20).map(q=>({...q,u:q.u+w/2,v:q.v+h/2})),z));
    }else if(p.kind==='server'){
      d+=R(6,5,w-12,h-10,2)+R(w-17,h/2-2,9,4,1);
      for(let k=0;k<5;k++)f+=S(10+k*3,8,10+k*3,h-8);
    }else if(p.kind==='bag'){
      d+=open([Q(w*.28,10,z),Q(w*.28,3,z),Q(w*.72,3,z),Q(w*.72,10,z)]);f+=S(4,h-6,w-4,h-6);
    }else if(p.kind==='key'){d+=R(5,4,w-10,h-8,2);}
    else if(p.kind==='base'){f+=S(5,h-4,w-5,h-4);}
    o.detail.setAttribute('d',d);o.fine.setAttribute('d',f);
  }
  const loop=register(stage,(_dt,now)=>{
    let moving=false;
    items.forEach((o,i)=>{const v=tval(o.lift,now),a=tval(o.turn,now),key=v.toFixed(3)+','+a.toFixed(3)+','+active;
      if(key!==o.last){draw(o,i,v,a);o.last=key;}
      if(!tdone(o.lift,now)||!tdone(o.turn,now))moving=true;
    });return moving;
  });bag.add(loop.unregister);
  function select(a){
    if(a===active)return;const from=a<0?active:a,now=performance.now();active=a;
    items.forEach((o,i)=>{const distance=Math.abs(i-from),v=a<0||o.p.fixed?0:strength*Math.max(0,1-distance*.27);
      tset(o.lift,v,now,distance*45);tset(o.turn,a<0||o.p.fixed?0:(i-from)*2.2,now,distance*45);
    });read.textContent=a<0?'rest':items[a].p.name;loop.wake();
  }
  bag.add(pointer(stage,{move:([x,y])=>{
    if(x<35||x>365||y<45||y>285){select(-1);return;}
    let best=-1,dist=Infinity;items.forEach((o,i)=>{if(o.p.fixed)return;const d=(x-o.anchor[0])**2+(y-o.anchor[1])**2;if(d<dist){dist=d;best=i;}});select(best);
  },leave:()=>select(-1)}));
  items.forEach((o,i)=>draw(o,i,0,0));read.textContent='rest';bag.add(()=>svg.replaceChildren());
  return {set(v){strength=v;const old=active;active=-2;select(old);},destroy:bag.dispose};
}

hairline({name:"service-rack",means:"A service rack opens its drawers in sequence to expose each maintained layer.",rules:[1,2,4,5,7,8,9,10],range:[3,12,20],tour:[[130,150],[260,155],[200,205],null],mount});

})();

const SERVICE_FIGURES={"crafted-websites":"devices","website-redesign":"rebuild","ecommerce-website-design":"storefront","cms-and-dynamic-websites":"cardfile","landing-pages-and-microsites":"launchpad","consistent-identity":"swatches","motion-and-interaction-design":"frames","ux-centric-strategy":"fieldnotes","performance-optimization":"chronograph","maintenance-and-ongoing-support":"service-rack"};
const style=document.createElement('style');style.textContent="/* Client artwork only. Theme layout, labels and navigation retain their styles. */\n.largo-hairline-cover {\n  position:absolute; inset:0; overflow:hidden; border-radius:15px;\n  background:#08090a; z-index:1; isolation:isolate;\n  --hairline-hi:#f4f3ff; --hairline-edge:#92929f;\n  --hairline-mid:#666674; --hairline-lo:#41414c; --hairline-stroke:1.15;\n}\n.largo-hairline-cover [data-hairline] {\n  position:absolute; width:100%; height:100%; inset:0; aspect-ratio:auto;\n  background:#08090a; touch-action:pan-y;\n}\n.largo-hairline-cover svg { transition:opacity .65s ease,translate .7s cubic-bezier(.32,.72,0,1); }\n.largo-hairline-cover[data-visible=\"false\"] svg {opacity:0;translate:0 14px;}\n@media(prefers-reduced-motion:reduce){\n  .largo-hairline-cover svg {transition:none;translate:none!important;opacity:1!important;}\n}\n";document.head.append(style);
// Loaded once on every entry page so a theme navigation into Services works too.
if (!window.__largoServiceHairlines) {
  window.__largoServiceHairlines=true;
  HL.inject(document);
  const mounted=new Map(), reduced=matchMedia('(prefers-reduced-motion: reduce)'), mobile=matchMedia('(max-width: 767px), (pointer: coarse)');
  const slugOf=card=>{try{const u=new URL(card.getAttribute('href'),location.href);return u.searchParams.get('id')||u.pathname.split('/').filter(Boolean).at(-1);}catch{return '';}};
  function play(item){
    const run=item.visible&&!document.hidden&&!reduced.matches&&(mobile.matches||item.focused);
    if(run&&!item.tour)item.tour=HL.tour(item.stage,item.figure.tour);
    if(!run&&item.tour){item.tour.stop();item.tour=null;}
    item.cover.dataset.playing=String(run);
  }
  const visibility=new IntersectionObserver(entries=>entries.forEach(e=>{
    const item=mounted.get(e.target);if(!item)return;
    item.visible=e.isIntersecting;item.cover.dataset.visible=String(e.isIntersecting);play(item);
  }),{threshold:.1});
  function scan(){
    for(const [cover,item]of mounted)if(!cover.isConnected){visibility.unobserve(cover);item.tour?.stop();item.handle.destroy();item.card.removeEventListener('focus',item.focus);item.card.removeEventListener('blur',item.blur);mounted.delete(cover);}
    document.querySelectorAll('[data-ea-project-collection="services"] .project-item').forEach(card=>{
      const figure=figures[SERVICE_FIGURES[slugOf(card)]],main=card.querySelector('.project-item-main');
      if(!figure||!main||main.querySelector('.largo-hairline-cover'))return;
      const cover=document.createElement('div'),stage=document.createElement('div');
      cover.className='largo-hairline-cover';cover.dataset.visible='false';cover.setAttribute('aria-hidden','true');
      stage.dataset.hairline=figure.name;stage.dataset.hairlineTheme='dark';cover.append(stage);main.append(cover);
      const svg=HL.mk('svg',{viewBox:'0 0 400 320','aria-hidden':'true'},stage),read={textContent:''};
      const item={cover,stage,figure,card,visible:false,focused:false,tour:null,handle:figure.mount({stage,svg,read},12)};
      item.focus=()=>{item.focused=true;play(item);};item.blur=()=>{item.focused=false;play(item);};
      card.addEventListener('focus',item.focus);card.addEventListener('blur',item.blur);
      mounted.set(cover,item);visibility.observe(cover);
    });
  }
  const update=()=>mounted.forEach(play);
  reduced.addEventListener('change',update);mobile.addEventListener('change',update);document.addEventListener('visibilitychange',update);
  let queued=false;
  new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;scan();});}).observe(document.body,{childList:true,subtree:true});
  scan();
}

})();
