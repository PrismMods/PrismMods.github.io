// Checks the prism projection in index.html. The claim under test is that
// turning the solid actually changes its shape, rather than skewing a flat
// drawing. Run: node test-prism.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const HX = 124, HY = 122, HZ = 78;
const CX = 300, CY = 200;
const FOCAL = 1600;
const PITCH = 0.2;

// These are copied from the page, so make sure they still match it.
const page = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
for (const [name, value] of Object.entries({ FOCAL, PITCH, CX, CY, HX, HY, HZ })) {
  assert.match(page, new RegExp(`${name}\\s*=\\s*${value}\\b`), `${name} drifted from index.html`);
}
assert.match(page, /const YAW = 0\.16\b/, 'YAW drifted from index.html');

const V = [
  [0, -HY, -HZ], [-HX, HY, -HZ], [HX, HY, -HZ],
  [0, -HY, HZ], [-HX, HY, HZ], [HX, HY, HZ],
];
const FRONT = [0, 1, 2], BACK = [3, 5, 4];
const LEFT = [0, 3, 4, 1], RIGHT = [0, 2, 5, 3], BASE = [1, 4, 5, 2];

function projectPoint([vx, vy, vz], yaw, lift = 0) {
  const cy = Math.cos(yaw), sy = Math.sin(yaw);
  const cp = Math.cos(PITCH), sp = Math.sin(PITCH);
  const x = vx * cy + vz * sy;
  let z = vz * cy - vx * sy;
  const y = vy * cp - z * sp;
  z = vy * sp + z * cp;
  const s = FOCAL / (FOCAL + z);
  return { x: CX + x * s, y: CY + lift + y * s, z };
}

const project = (yaw, lift = 0) => V.map((v) => projectPoint(v, yaw, lift));

const cross = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);

// Convex hull of the projected solid — its silhouette. The front triangle alone
// is not the boundary: the receding slope face extends past it.
const hull = (pts) => {
  const p = [...pts].sort((a, b) => a.x - b.x || a.y - b.y);
  const half = (src) => {
    const out = [];
    for (const q of src) {
      while (out.length > 1 && cross(out[out.length - 2], out[out.length - 1], q) <= 0) out.pop();
      out.push(q);
    }
    return out;
  };
  return [...half(p).slice(0, -1), ...half([...p].reverse()).slice(0, -1)];
};

const inside = (poly, q) => {
  let neg = false, pos = false;
  for (let i = 0; i < poly.length; i++) {
    const d = cross(poly[i], poly[(i + 1) % poly.length], q);
    if (d < -1e-9) neg = true;
    if (d > 1e-9) pos = true;
  }
  return !(neg && pos);
};

const area = (cam, f) => {
  let a = 0;
  for (let i = 0; i < f.length; i++) {
    const p = cam[f[i]], q = cam[f[(i + 1) % f.length]];
    a += p.x * q.y - q.x * p.y;
  }
  return a;
};

const head = project(0);
const FRONT_SIGN = Math.sign(area(head, FRONT));
const facing = (cam, f) => Math.sign(area(cam, f)) === FRONT_SIGN;

// Head-on: we see the front, not the back, and not the base from above.
assert.ok(facing(head, FRONT), 'front face must be visible head-on');
assert.ok(!facing(head, BACK), 'back face must be hidden head-on');
assert.ok(!facing(head, BASE), 'base must be hidden from a camera above it');

// The camera is above the base, so the far end sits higher on screen.
assert.ok(head[3].y < head[0].y, 'back apex should project above the front apex');

// Head-on the two slopes are mirror images.
assert.ok(
  Math.abs(Math.abs(area(head, LEFT)) - Math.abs(area(head, RIGHT))) < 1e-6,
  'slopes must be symmetric at yaw 0',
);

// The real test: turning must change the silhouette, not just shear a flat
// drawing. Head-on both slopes are edge-on, so only the front triangle shows.
// Turning has to open exactly one slope, and the opposite one each way.
const YAW = 0.16;
const openness = (cam, f) => Math.abs(area(cam, f));

for (const f of [LEFT, RIGHT]) {
  assert.ok(
    openness(head, f) < openness(head, FRONT) * 0.1,
    'slopes must be near edge-on head-on',
  );
}

const right = project(YAW);
const left = project(-YAW);

assert.ok(facing(right, RIGHT) !== facing(right, LEFT), 'exactly one slope faces us');
assert.ok(
  facing(right, RIGHT) === !facing(left, RIGHT),
  'the slope in view must swap when the turn reverses',
);

// Stated as a trend rather than a magic ratio, so retuning the amplitude does
// not invalidate the check: the more it turns, the more of that slope shows and
// the less of the front. A sheared flat drawing would not do this.
const opened = facing(right, RIGHT) ? RIGHT : LEFT;
const hidden = opened === RIGHT ? LEFT : RIGHT;

for (let i = 1; i <= 6; i++) {
  const a = project(YAW * (i - 1) / 6);
  const b = project(YAW * i / 6);
  assert.ok(openness(b, opened) > openness(a, opened), 'the visible slope must keep opening');
  assert.ok(openness(b, FRONT) < openness(a, FRONT), 'the front face must keep foreshortening');
}

assert.ok(
  openness(right, opened) > openness(right, hidden) * 2,
  'the slope in view must dominate the one turning away',
);

// Nothing may leave the 640x420 viewBox at any point in the sweep.
for (let i = 0; i <= 40; i++) {
  const yaw = Math.sin((i / 40) * 2 * Math.PI) * YAW;
  for (const lift of [-4, 4]) {
    for (const p of project(yaw, lift)) {
      assert.ok(p.x > 0 && p.x < 640, `x out of viewBox: ${p.x}`);
      assert.ok(p.y > 0 && p.y < 420, `y out of viewBox: ${p.y}`);
    }
  }
}

// The beams terminate inside the glass so no motion can open a seam. Each must
// stay within the solid's horizontal span at its own height.
const ENDS = [
  { label: 'incoming beam end', x: 250, y: 236 },
  { label: 'exit beam start', x: 352, y: 202 },
];
for (let i = 0; i <= 40; i++) {
  const yaw = Math.sin((i / 40) * 2 * Math.PI) * YAW;
  for (const lift of [-4, 4]) {
    const shell = hull(project(yaw, lift));
    for (const end of ENDS) {
      assert.ok(
        inside(shell, { x: end.x, y: end.y }),
        `${end.label} exposed at yaw ${yaw.toFixed(3)}, lift ${lift}`,
      );
    }
  }
}

// The interior beam is a slab cut off by the slope faces. Its ends must sit on
// those faces, and the whole volume must stay inside the glass as it turns.
const ENTRY_Y = 36, EXIT_Y = 2, BEAM_HALF = 6, BEAM_DEPTH = 46, CORE_HALF = 2;
const onSlope = (y, side) => side * HX * (y + HY) / (2 * HY);
const SECTION = [
  [onSlope(ENTRY_Y - BEAM_HALF, -1), ENTRY_Y - BEAM_HALF],
  [onSlope(ENTRY_Y + BEAM_HALF, -1), ENTRY_Y + BEAM_HALF],
  [onSlope(EXIT_Y + BEAM_HALF, 1), EXIT_Y + BEAM_HALF],
  [onSlope(EXIT_Y - BEAM_HALF, 1), EXIT_Y - BEAM_HALF],
];
const SLAB = [
  ...SECTION.map(([x, y]) => [x, y, -BEAM_DEPTH]),
  ...SECTION.map(([x, y]) => [x, y, BEAM_DEPTH]),
  [onSlope(ENTRY_Y - CORE_HALF, -1), ENTRY_Y - CORE_HALF, 0],
  [onSlope(ENTRY_Y + CORE_HALF, -1), ENTRY_Y + CORE_HALF, 0],
  [onSlope(EXIT_Y + CORE_HALF, 1), EXIT_Y + CORE_HALF, 0],
  [onSlope(EXIT_Y - CORE_HALF, 1), EXIT_Y - CORE_HALF, 0],
];

for (const [name, value] of Object.entries({ ENTRY_Y, EXIT_Y, BEAM_HALF, BEAM_DEPTH, CORE_HALF })) {
  assert.match(page, new RegExp(`${name}\\s*=\\s*${value}\\b`), `${name} drifted from index.html`);
}
assert.ok(BEAM_DEPTH < HZ, 'the beam must be narrower than the glass is deep');
assert.ok(CORE_HALF < BEAM_HALF, 'the core thread must sit inside the slab');
for (const [x, y] of SECTION) {
  assert.ok(Math.abs(Math.abs(x) - HX * (y + HY) / (2 * HY)) < 1e-9, 'slab end must lie on a slope');
}

for (let i = 0; i <= 40; i++) {
  const yaw = Math.sin((i / 40) * 2 * Math.PI) * YAW;
  for (const lift of [-4, 4]) {
    const shell = hull(project(yaw, lift));
    for (const v of SLAB) {
      const p = projectPoint(v, yaw, lift);
      assert.ok(inside(shell, p), `beam slab escapes the glass at yaw ${yaw.toFixed(3)}`);
    }
  }
}

console.log('prism projection ok');

// ---------------------------------------------------------------------------
// Smoke test. The maths above is a reimplementation, so it cannot catch the
// page's own script failing to run — a temporal dead zone throw once left the
// prism frozen on its static fallback with every later fix silently inert.
// This boots the real script against a stub DOM and checks it draws.
// ---------------------------------------------------------------------------
import vm from 'node:vm';

const script = [...page.matchAll(/<script>([\s\S]*?)<\/script>/g)][1][1];

class El {
  constructor() {
    this.attrs = {};
    this.children = [];
    this.classList = { add() {} };
    this.dataset = {};
    this.style = { setProperty() {} };
  }
  setAttribute(k, v) { this.attrs[k] = String(v); }
  getAttribute(k) { return this.attrs[k]; }
  addEventListener() {}
  getBoundingClientRect() { return { left: 0, top: 0, width: 640, height: 420 }; }
  appendChild(c) {
    this.children = this.children.filter((x) => x !== c);
    this.children.push(c);
    return c;
  }
  replaceChildren(...c) { this.children = c; }
}

const nodes = new Map();
const named = (sel) => nodes.get(sel) ?? nodes.set(sel, new El()).get(sel);

// Every key the markup asks for, so the swap runs against the real key set.
const usedKeys = [...page.matchAll(/data-i18n="([A-Z0-9_]+)"/g)].map((m) => m[1]);
const i18nNodes = usedKeys.map((k) => Object.assign(new El(), { dataset: { i18n: k } }));

let frames = 0;
const sandbox = {
  document: {
    documentElement: new El(),
    getElementById: named,
    querySelector: named,
    querySelectorAll: (sel) => (sel === '[data-i18n]' ? i18nNodes : []),
    createElement: () => new El(),
    createElementNS: () => new El(),
    head: { append() {} },
  },
  getComputedStyle: () => ({ getPropertyValue: () => '' }),
  matchMedia: () => ({ matches: false, addEventListener() {} }),
  localStorage: { getItem: () => null, setItem() {} },
  IntersectionObserver: class {
    constructor(cb) { this.cb = cb; }
    observe(t) { this.cb([{ isIntersecting: true, target: t }], this); }
    unobserve() {}
  },
  requestAnimationFrame: (cb) => { if (frames++ < 2) cb(frames * 16); return frames; },
  cancelAnimationFrame() {},
  window: { innerWidth: 1280 },
};

vm.createContext(sandbox);
// Throws on any runtime error in the page script, which is the whole point.
new vm.Script(script).runInContext(sandbox);

const drawn = named('.glass').children;
assert.ok(frames > 0, 'the prism never started drawing');

const byClass = (c) => drawn.filter((n) => (n.attrs.class ?? '').split(' ').includes(c));
assert.equal(byClass('pane').length, 5, 'expected five glass faces');
assert.equal(byClass('slab').length, 6, 'expected six slab faces');
assert.equal(byClass('slab-core').length, 1, 'expected one core thread');
assert.equal(byClass('edge').length, 9, 'expected nine edges');

// The bug that made the slab invisible: paint referenced from CSS, where a
// fragment URL resolves against the stylesheet rather than the document.
for (const n of [...byClass('slab'), ...byClass('slab-core')]) {
  assert.equal(n.attrs.fill, 'url(#interior)', 'slab paint must be set as an attribute');
  const pts = n.attrs.points.split(' ').map((p) => p.split(',').map(Number));
  assert.ok(pts.length >= 4, 'slab face must have been projected');
  for (const [x, y] of pts) {
    assert.ok(Number.isFinite(x) && Number.isFinite(y), 'projected point must be finite');
    assert.ok(x > 0 && x < 640 && y > 0 && y < 420, 'slab drawn outside the viewBox');
  }
}

console.log('page script ok');

// ---------------------------------------------------------------------------
// Localisation. A key present in the markup but missing from a dictionary is
// silent in the browser — the element just goes blank — so check it here.
// ---------------------------------------------------------------------------
const dicts = sandbox.STRINGS ?? new vm.Script('STRINGS').runInContext(sandbox);
const locales = Object.keys(dicts);

assert.deepEqual(locales, ['en-US', 'ko-KR'], 'expected the two Quartz-i18n locale codes');

const base = Object.keys(dicts['en-US']).sort();
for (const loc of locales) {
  assert.deepEqual(Object.keys(dicts[loc]).sort(), base, `${loc} key set differs from en-US`);
  for (const [k, v] of Object.entries(dicts[loc])) {
    assert.ok(typeof v === 'string' && v.trim(), `${loc}.${k} is empty`);
  }
}

for (const key of new Set(usedKeys)) {
  assert.ok(base.includes(key), `markup uses data-i18n="${key}" with no entry in the dictionaries`);
}

// Korean must actually differ, or a key was copied across untranslated.
const shared = base.filter((k) => dicts['en-US'][k] === dicts['ko-KR'][k]);
assert.deepEqual(shared, [], `untranslated in ko-KR: ${shared.join(', ')}`);

// The swap ran over the real markup keys and left no element blank.
for (const node of i18nNodes) {
  assert.ok(node.textContent, `applyLang left ${node.dataset.i18n} empty`);
}

console.log(`i18n ok (${locales.join(', ')}, ${base.length} keys)`);
