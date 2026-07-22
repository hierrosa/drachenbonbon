// ============================================================
//  HOLZ — Wand und Astloch
//
//  Die Maserung fließt prozedural um Astknoten und um das Loch
//  herum. Alles aus einem Seed: gleicher Seed = gleicher Baum.
//
//  Der Lochumriss ist bewusst NICHT prozedural, sondern gezeichnet
//  — er bestimmt den Bildausschnitt, in dem der Drache erscheint.
// ============================================================

const SEED = 20260718;

// Deterministischer Zufall (mulberry32) — kein Flackern beim Neuladen
function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ------------------------------------------------------------
//  Maße
// ------------------------------------------------------------
export const BUEHNE = { b: 1280, h: 720 };

// Astloch: Position auf der Bühne und Größe des Elements
export const LOCH = { x: 260, y: 0, b: 760, h: 356 };

// ------------------------------------------------------------
//  Lochumriss im lokalen System des Loch-Elements (0..760, 0..356)
//  Links eine lange auslaufende Spitze, oben ein geschlossener Bogen,
//  der bei etwa y 76 seinen Scheitel hat. Unten eine weiche Kante.
// ------------------------------------------------------------
export const LOCH_PFAD = `
M14 260
C18 222, 40 186, 78 174
C112 156, 146 129, 210 95
C340 78, 500 76, 636 91
C686 97, 720 152, 744 208
C757 231, 748 256, 726 274
C700 296, 656 310, 604 316
C528 326, 452 332, 376 328
C304 324, 236 316, 176 304
C120 293, 62 284, 30 272
C19 268, 13 265, 14 260
Z`.replace(/\s+/g, ' ').trim();

// ------------------------------------------------------------
//  Astknoten — Störstellen, um die die Maserung fließt
// ------------------------------------------------------------
const KNOTEN = [
  { x: 148, y: 542, r: 34, kraft: 1.0 },
  { x: 1148, y: 300, r: 26, kraft: 0.9 },
  { x: 432, y: 618, r: 20, kraft: 0.7 },
  { x: 1006, y: 654, r: 30, kraft: 0.85 },
  { x: 82, y: 168, r: 22, kraft: 0.75 },
  { x: 1220, y: 546, r: 18, kraft: 0.6 },
];

// ------------------------------------------------------------
//  Maserung
// ------------------------------------------------------------
function ablenkung(x, y) {
  let dy = 0;

  for (const k of KNOTEN) {
    const R = k.r * 5.2;
    const dx = x - k.x, dyk = y - k.y;
    const dist = Math.hypot(dx, dyk * 1.35);
    if (dist < R) {
      const t = 1 - dist / R;
      dy += Math.sign(dyk || 1) * k.kraft * k.r * 1.15 * t * t;
    }
  }

  // Das Loch drückt am stärksten
  const lx = LOCH.x + LOCH.b / 2;
  const ly = LOCH.y + LOCH.h / 2;
  const nx = (x - lx) / (LOCH.b / 2);
  const ny = (y - ly) / (LOCH.h / 2);
  const dl = Math.hypot(nx, ny);
  if (dl < 2.2) {
    const t = 1 - dl / 2.2;
    dy += Math.sign(ny || 1) * 112 * t * t;
  }

  return dy;
}

function maserLinie(y0, zufall, schritt = 26) {
  const wobbelA = 4 + zufall() * 7;
  const wobbelF = 0.006 + zufall() * 0.005;
  const phase = zufall() * Math.PI * 2;

  let d = '';
  for (let x = -40; x <= BUEHNE.b + 40; x += schritt) {
    const y =
      y0 +
      ablenkung(x, y0) +
      Math.sin(x * wobbelF + phase) * wobbelA +
      Math.sin(x * wobbelF * 2.7 + phase * 1.6) * wobbelA * 0.35;
    d += (d ? ' L' : 'M') + x.toFixed(0) + ' ' + y.toFixed(1);
  }
  return d;
}

function maserung() {
  const z = rng(SEED);
  let out = '';
  let y = -30;
  while (y < BUEHNE.h + 40) {
    const abstand = 9 + z() * 15;
    const dick = 0.7 + z() * 2.1;
    const hell = z() > 0.72;
    const alpha = hell ? 0.05 + z() * 0.05 : 0.11 + z() * 0.14;
    const farbe = hell ? '#e8c489' : '#0f0904';
    out += `<path d="${maserLinie(y, z)}" fill="none" stroke="${farbe}" ` +
           `stroke-width="${dick.toFixed(2)}" opacity="${alpha.toFixed(3)}" ` +
           `stroke-linecap="round"/>`;
    y += abstand;
  }
  return out;
}

// ------------------------------------------------------------
//  Astknoten zeichnen
// ------------------------------------------------------------
function knoten() {
  const z = rng(SEED + 3);
  let out = '';
  for (const k of KNOTEN) {
    const dreh = (z() - 0.5) * 50;
    let ringe = '';
    for (let i = 6; i >= 1; i--) {
      const f = i / 6;
      ringe += `<ellipse cx="0" cy="0" rx="${(k.r * f).toFixed(1)}" ` +
               `ry="${(k.r * f * 0.62).toFixed(1)}" fill="none" ` +
               `stroke="#0b0603" stroke-width="${(1 + f * 1.6).toFixed(2)}" ` +
               `opacity="${(0.10 + f * 0.28).toFixed(3)}"/>`;
    }
    out += `<g transform="translate(${k.x} ${k.y}) rotate(${dreh.toFixed(1)})">
      <ellipse cx="0" cy="0" rx="${(k.r * 1.15).toFixed(1)}" ry="${(k.r * 0.74).toFixed(1)}"
               fill="#160d05" opacity=".42"/>
      ${ringe}
      <ellipse cx="0" cy="0" rx="${(k.r * 0.2).toFixed(1)}" ry="${(k.r * 0.13).toFixed(1)}"
               fill="#050301" opacity=".8"/>
    </g>`;
  }
  return out;
}

// ------------------------------------------------------------
//  Längsrisse
// ------------------------------------------------------------
function risse() {
  const z = rng(SEED + 11);
  let out = '';
  for (let i = 0; i < 9; i++) {
    const x0 = 40 + z() * (BUEHNE.b - 80);
    const y0 = z() * BUEHNE.h;
    const laenge = 60 + z() * 240;
    let d = `M${x0.toFixed(0)} ${y0.toFixed(0)}`;
    let x = x0, y = y0;
    const schritte = 5 + Math.floor(z() * 5);
    for (let s = 0; s < schritte; s++) {
      x += (z() - 0.5) * 26;
      y += laenge / schritte;
      d += ` L${x.toFixed(0)} ${y.toFixed(0)}`;
    }
    out += `<path d="${d}" fill="none" stroke="#080502" stroke-width="${(0.8 + z() * 1.4).toFixed(2)}"
            opacity="${(0.18 + z() * 0.22).toFixed(3)}" stroke-linecap="round"/>`;
  }
  return out;
}

// ------------------------------------------------------------
//  Die fertige Wand
// ------------------------------------------------------------
export function wandSVG() {
  const cx = LOCH.b / 2;
  const cy = LOCH.h / 2;

  return `
<defs>
  <radialGradient id="stammlicht" cx="50%" cy="88%" r="76%">
    <stop offset="0%"   stop-color="#5c3d1d"/>
    <stop offset="46%"  stop-color="#33210f"/>
    <stop offset="100%" stop-color="#160e06"/>
  </radialGradient>
  <radialGradient id="wulstlicht" cx="50%" cy="16%" r="74%">
    <stop offset="0%"   stop-color="#8a6431"/>
    <stop offset="68%"  stop-color="#3b2610"/>
    <stop offset="100%" stop-color="#1d1207"/>
  </radialGradient>

  <!-- Maske: alles sichtbar außer dem Loch -->
  <mask id="lochMaske">
    <rect width="${BUEHNE.b}" height="${BUEHNE.h}" fill="#ffffff"/>
    <g transform="translate(${LOCH.x} ${LOCH.y})">
      <path d="${LOCH_PFAD}" fill="#000000"/>
    </g>
  </mask>
</defs>

<rect width="${BUEHNE.b}" height="${BUEHNE.h}" fill="url(#stammlicht)"/>

<!-- aufgeworfene Rinde: derselbe Umriss, etwas größer -->
<g transform="translate(${LOCH.x} ${LOCH.y})">
  <g transform="translate(${cx} ${cy}) scale(1.085) translate(${-cx} ${-cy})">
    <path d="${LOCH_PFAD}" fill="url(#wulstlicht)" opacity=".92"/>
  </g>
</g>

<g mask="url(#lochMaske)">
  ${maserung()}
  ${knoten()}
  ${risse()}
</g>

<!-- innere Kante des Lochs -->
<g transform="translate(${LOCH.x} ${LOCH.y})">
  <path d="${LOCH_PFAD}" fill="none" stroke="#0a0603" stroke-width="10" opacity=".88"/>
  <path d="${LOCH_PFAD}" fill="none" stroke="#8a6330" stroke-width="2" opacity=".32"
        transform="translate(0 -2.5)"/>
</g>
`;
}
