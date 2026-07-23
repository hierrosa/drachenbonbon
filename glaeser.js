// ============================================================
//  GLÄSER — jede Zutat hat eine eigene Silhouette.
//  Formen lesen sich schneller als Farben und funktionieren
//  auch noch, wenn der Lichtkegel gedimmt ist.
//  Zeichenfläche: 52 x 64
// ============================================================

export const FARBEN = {
  karamell:       ['#f0d79a', '#a8813c'],
  sirup:          ['#f8f7f2', '#c4bfb2'],
  gewitterzucker: ['#cfe4f8', '#4d79b4'],
  funkenpollen:   ['#ffd371', '#d1631a'],
  aschenkirsche:  ['#d1504c', '#3d1210'],
  nebelbeere:     ['#c6d2e0', '#55657a'],
  eiszahnminze:   ['#b6f2e6', '#2f807c'],
  wurzelholz:     ['#c09364', '#4e3117'],
  frostharz:      ['#d8f5f0', '#4f9c93'],
  sonnentraenen:  ['#ffe29a', '#e8a22e'],
  wuestenglas:    ['#f2d9a0', '#b5813c'],
  tannenharz:     ['#c9d9a0', '#5c6b34'],
  sternenstaub:   ['#eee0ff', '#9a7fd4'],
  sturmkraut:      ['#b8c9d6', '#4a5f6e'],
  schattenmelisse: ['#8a9a7a', '#3a4a30'],
  glutfenchel:     ['#f0935a', '#a8401c'],
  schneckenschleim:['#bfe89a', '#5a8a3a'],
  schneckenperle:  ['#f2e9f6', '#b6a6cc'],
};

const GLAS   = 'rgba(220,235,240,.15)';
const KANTE  = 'rgba(230,245,250,.42)';

// Streuung aus kleinen Punkten — für Pulver und Splitter statt einer
// glatten Flüssigkeitsfläche.
function koernung(punkte, farbe = 'rgba(255,255,255,.5)') {
  return punkte.map(([x, y, r]) =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${farbe}"/>`).join('');
}

// Ein aufgehängtes Kräuterbündel statt eines Glases — Schlaufe, Knoten,
// Stängel, die nach unten fächern, mit Blattpaaren dran.
function kraeuterSVG(id, dunkel) {
  const blatt = (x, y, rot, groesse = 1) => `
    <g transform="translate(${x} ${y}) rotate(${rot}) scale(${groesse})">
      <path d="M0 0 C-6 -4,-7 -11,0 -15 C7 -11,6 -4,0 0 Z" fill="url(#f-${id})" stroke="${dunkel}" stroke-width=".6"/>
      <path d="M0 -1 L0 -13" stroke="${dunkel}" stroke-width=".7" opacity=".55"/>
    </g>`;
  return `
    <path d="M23 2 Q26 -2 29 2 L29 10 L23 10 Z" fill="none" stroke="#8a7a5c" stroke-width="1.4"/>
    <rect x="20" y="9" width="12" height="6" rx="2" fill="#6b5636"/>
    <path d="M22 15 Q20 34 18 58 M26 15 L26 60 M30 15 Q32 34 34 58"
          fill="none" stroke="#5c4a2e" stroke-width="1.1" opacity=".8"/>
    ${blatt(19, 24, -35, .8)}${blatt(33, 22, 35, .85)}
    ${blatt(16, 34, -50, .9)}${blatt(36, 32, 48, .95)}
    ${blatt(14, 44, -30, 1)}${blatt(38, 42, 32, 1)}
    ${blatt(19, 53, -20, .85)}${blatt(33, 51, 22, .9)}
    ${blatt(26, 60, 0, .8)}
  `;
}

// Jede Form: koerper = Umriss des Glases, inhalt = gefüllte Fläche,
// deckel = was oben draufsitzt, glanz = Lichtkante/Textur.
// typ: "fluessig" (glatter Spiegel) | "pulver" (schütter, kein Spiegel)
//    | "kraeuter" (hängendes Bündel, kein Glas)
// leuchten: Glutfarbe für ein leises Pulsieren, oder null
const FORMEN = {

  // Mondmilchkaramell — breiter Topf, Korken mit Wachssiegel
  karamell: {
    typ: 'fluessig',
    deckel: `<rect x="17" y="3" width="18" height="10" rx="2.5" fill="#8a6134"/>
             <rect x="15" y="11" width="22" height="5" rx="2" fill="#65451f"/>
             <path d="M15 11 q11 6 22 0 q-2 5 -11 5 q-9 0 -11 -5z" fill="#a8813c" opacity=".55"/>`,
    koerper: `M11 20 q0 -4 5 -4 h20 q5 0 5 4 v30 q0 10 -10 10 h-10 q-10 0 -10 -10 z`,
    inhalt:  `M11.5 33 h29 v17 q0 9 -9 9 h-11 q-9 0 -9 -9 z`,
    spiegel: `M11.5 33 q14 5 29 0`,
    glanz:   `<rect x="16" y="24" width="3.4" height="26" rx="1.7" fill="rgba(255,255,255,.3)"/>`,
    leuchten: null,
  },

  // Daunensirup — bauchig, Tuch über den Ausguss gebunden
  sirup: {
    typ: 'fluessig',
    deckel: `<path d="M14 6 q12 -8 24 0 q-2 6 -12 6 q-10 0 -12 -6z" fill="#e6dcc4" stroke="#9a8a63" stroke-width="1.2"/>
             <path d="M22 6 l-4 8 M30 6 l4 8" stroke="#9a8a63" stroke-width="1.4" fill="none" stroke-linecap="round"/>
             <ellipse cx="26" cy="12" rx="5" ry="2.4" fill="#65451f"/>`,
    koerper: `M14 22 q-1 -6 5 -7 h14 q6 1 5 7 q7 8 7 19 q0 15 -19 15 q-19 0 -19 -15 q0 -11 7 -19 z`,
    inhalt:  `M8 38 q4 -4 18 -4 q14 0 18 4 q0 21 -18 21 q-18 0 -18 -21 z`,
    spiegel: `M8 38 q4 -4 18 -4 q14 0 18 4`,
    glanz:   `<path d="M15 30 q-3 8 -2 16" stroke="rgba(255,255,255,.32)" stroke-width="3.4"
                    fill="none" stroke-linecap="round" class="zutat-schimmer"/>`,
    leuchten: null,
  },

  // Gewitterzucker — facettiert, Kristallstopfen, körnig, funkt leise
  gewitterzucker: {
    typ: 'pulver',
    deckel: `<path d="M26 1 l7 6 l-3 6 h-8 l-3 -6z" fill="#dfeeff" stroke="#7a9fc4" stroke-width="1.2"/>
             <path d="M20 13 h12 l-2 4 h-8z" fill="#4d79b4"/>`,
    koerper: `M13 22 l6 -5 h14 l6 5 l-2 24 l-6 13 h-10 l-6 -13 z`,
    inhalt:  `M12.4 34 h27.2 l-1.6 12 l-6 13 h-12 l-6 -13 z`,
    spiegel: `M13 33 l4 -3 l4 2 l4 -3 l4 2 l4 -3 l3.2 3`,
    glanz:   koernung([[18, 38, 1.1], [24, 41, .9], [30, 37, 1.2], [21, 47, .9], [27, 50, 1.1], [33, 45, .8]]),
    leuchten: '#9fd0ff',
  },

  // Funkenpollen — Tellerrand, Fliegengaze-Deckel, feiner Staub, glüht
  funkenpollen: {
    typ: 'pulver',
    deckel: `<ellipse cx="26" cy="9" rx="13" ry="3.5" fill="#8a6134"/>
             <ellipse cx="26" cy="9" rx="10" ry="2.2" fill="#3a2a12" opacity=".5"/>
             <rect x="20" y="9" width="12" height="6" rx="1.5" fill="#65451f"/>`,
    koerper: `M20 16 h12 v14 q10 6 10 18 q0 12 -16 12 q-16 0 -16 -12 q0 -12 10 -18 z`,
    inhalt:  `M11 41 q4 -6 15 -6 q11 0 15 6 q1 18 -15 18 q-16 0 -15 -18 z`,
    spiegel: `M11 41 q3 -4 8 -4 l3 3 l4 -4 l4 4 l3 -3 q5 0 8 4`,
    glanz:   koernung([[19, 46, 1.2], [24, 49, .9], [29, 45, 1], [22, 53, .9], [27, 56, 1.1]], 'rgba(255,255,255,.6)'),
    leuchten: '#ffb347',
  },

  // Aschenkirsche — Deckel mit Knauf, dunkles Bindenband
  aschenkirsche: {
    typ: 'fluessig',
    deckel: `<circle cx="26" cy="5" r="3" fill="#5d4530"/>
             <path d="M13 14 q0 -7 13 -7 q13 0 13 7 z" fill="#4a3524"/>
             <rect x="11" y="13" width="30" height="5" rx="2" fill="#5d4530"/>
             <rect x="11" y="16" width="30" height="2" fill="#2e2013" opacity=".6"/>`,
    koerper: `M13 20 h26 v26 q0 14 -13 14 q-13 0 -13 -14 z`,
    inhalt:  `M13.5 30 h25 v16 q0 13 -12.5 13 q-12.5 0 -12.5 -13 z`,
    spiegel: `M13.5 30 h25`,
    glanz:   `<rect x="17" y="24" width="3" height="22" rx="1.5" fill="rgba(255,255,255,.2)" class="zutat-schimmer"/>`,
    leuchten: '#ff8a5c',
  },

  // Nebelbeere — Kugelkolben, loser Wollfaden statt Korken
  nebelbeere: {
    typ: 'fluessig',
    deckel: `<rect x="21" y="3" width="10" height="8" rx="2" fill="#8a6134"/>
             <rect x="19.5" y="10" width="13" height="4" rx="1.5" fill="#65451f"/>
             <path d="M18 8 q-4 2 -3 7 M34 8 q4 2 3 7" stroke="#c6d2e0" stroke-width="1.3" fill="none" opacity=".6"/>`,
    koerper: `M22 16 h8 v10 a16 16 0 1 1 -8 0 z`,
    inhalt:  `M12 42 a14 14 0 0 0 28 0 q-14 6 -28 0 z`,
    spiegel: `M12 42 q14 6 28 0`,
    glanz:   `<ellipse cx="19" cy="36" rx="4" ry="6" fill="rgba(255,255,255,.28)" transform="rotate(-24 19 36)" class="zutat-schimmer"/>`,
    leuchten: null,
  },

  // Eiszahnminze — spitz zulaufend, vereister Metalldeckel, körnig-eisig
  eiszahnminze: {
    typ: 'pulver',
    deckel: `<rect x="21" y="2" width="10" height="6" rx="1" fill="#9fc7c2"/>
             <rect x="19" y="7" width="14" height="4" rx="1" fill="#5c8985"/>
             <path d="M22 2 l1 -3 M26 2 l0 -3 M30 2 l-1 -3" stroke="#cdeee9" stroke-width="1" opacity=".8"/>`,
    koerper: `M20 15 h12 v33 q0 12 -6 13 q-6 -1 -6 -13 z`,
    inhalt:  `M20.4 28 h11.2 v20 q0 11 -5.6 12 q-5.6 -1 -5.6 -12 z`,
    spiegel: `M20.4 28 l3 -2 l2.6 2 l2.6 -2 l3 2`,
    glanz:   koernung([[23, 33, 1], [28, 36, 1.2], [25, 41, .9], [27, 46, 1], [24, 50, .8]], 'rgba(255,255,255,.65)'),
    leuchten: '#9fe8f0',
  },

  // Wurzelholzsplitter — Holzdeckel, grobe Splitter statt Flüssigkeit
  wurzelholz: {
    typ: 'pulver',
    deckel: `<rect x="9" y="12" width="34" height="7" rx="2" fill="#6b4a24"/>
             <path d="M12 12 q14 -5 28 0z" fill="#57391a"/>
             <rect x="23" y="6" width="6" height="7" rx="2" fill="#65451f"/>`,
    koerper: `M10 22 h32 v26 q0 12 -16 12 q-16 0 -16 -12 z`,
    inhalt:  `M10.5 32 h31 v16 q0 11 -15.5 11 q-15.5 0 -15.5 -11 z`,
    spiegel: `M11 31 l5 -3 l5 2 l5 -3 l5 2 l5 -3 l4.2 3`,
    glanz:   koernung([[17, 37, 1.4], [24, 40, 1.1], [31, 36, 1.5], [20, 46, 1.1], [28, 49, 1.3]], 'rgba(255,255,255,.35)'),
    leuchten: null,
  },

  // Frostharz — spitz facettiert wie ein Eiszapfen, glimmt kalt
  frostharz: {
    typ: 'fest',
    deckel: `<path d="M18 2 h16 l4 9 h-24z" fill="#bcefe8"/>
             <path d="M15 11 h22 l-2 5 h-18z" fill="#8fd6ce"/>`,
    koerper: `M12 21 l8 -6 h12 l8 6 l-3 27 q-1 11 -11 11 q-10 0 -11 -11 z`,
    inhalt:  `M11.6 33 h28.8 l-2 15 q-1 10 -12.4 10 q-11.4 0 -12.4 -10 z`,
    spiegel: `M11.6 33 h28.8`,
    glanz:   `<path d="M18 26 l-2 24" stroke="rgba(255,255,255,.4)" stroke-width="3" fill="none" class="zutat-schimmer"/>
              <path d="M33 24 l1 20" stroke="rgba(255,255,255,.2)" stroke-width="2" fill="none"/>`,
    leuchten: '#a8ecff',
  },

  // Sonnentränen — schmale Tropfenphiole, wachsversiegelt, strahlt warm
  sonnentraenen: {
    typ: 'fluessig',
    deckel: `<rect x="20" y="2" width="12" height="9" rx="2" fill="#8a6134"/>
             <rect x="18" y="9" width="16" height="4" rx="1.5" fill="#65451f"/>
             <path d="M18 9 q8 5 16 0 q-1 4 -8 4 q-7 0 -8 -4z" fill="#e8a22e" opacity=".7"/>`,
    koerper: `M20 13 h12 v14 q12 8 10 26 q-2 15 -16 15 q-14 0 -16 -15 q-2 -18 10 -26 z`,
    inhalt:  `M11 40 q0 15 15 15 q15 0 15 -15 q0 -4 -1 -8 h-28 q-1 4 -1 8 z`,
    spiegel: `M11.4 40 h29.2`,
    glanz:   `<ellipse cx="20" cy="46" rx="2.6" ry="6" fill="rgba(255,255,255,.55)" class="zutat-schimmer"/>`,
    leuchten: '#ffd97a',
  },

  // Wüstenglas — geschmolzen, tropfenförmig verlaufen, Sandkorken
  wuestenglas: {
    typ: 'fest',
    deckel: `<ellipse cx="26" cy="8" rx="12" ry="4" fill="#c9a877"/>
             <rect x="19" y="8" width="14" height="6" rx="1.5" fill="#a5835a"/>
             ${koernung([[22, 9, .8], [26, 7, .9], [30, 10, .7]], '#e4cfa2')}`,
    koerper: `M15 16 h22 q4 10 -2 18 q6 8 3 20 q-3 12 -12 12 q-9 0 -12 -12 q-3 -12 3 -20 q-6 -8 -2 -18z`,
    inhalt:  `M10.6 40 q-1 14 15.4 14 q16.4 0 15.4 -14 q-.6 -6 -2 -10 h-26.8 q-1.4 4 -2 10 z`,
    spiegel: `M11 39 h30`,
    glanz:   `<path d="M18 32 q-2 12 1 22" stroke="rgba(255,255,255,.3)" stroke-width="3" fill="none" stroke-linecap="round" class="zutat-schimmer"/>`,
    leuchten: '#ffcf8a',
  },

  // Tannenharz — zäh, in einem flachen Klumpen erstarrt, Rindendeckel
  tannenharz: {
    typ: 'fest',
    deckel: `<rect x="17" y="4" width="18" height="8" rx="2" fill="#57391a"/>
             <rect x="15" y="11" width="22" height="5" rx="1.5" fill="#3f2a12"/>
             <path d="M18 5 l3 6 M23 4 l2 7 M28 4 l2 7 M33 5 l-3 6" stroke="#2e1f0e" stroke-width="1" opacity=".6"/>`,
    koerper: `M13 19 q-3 8 0 14 q-4 6 0 12 q3 9 13 9 q10 0 13 -9 q4 -6 0 -12 q3 -6 0 -14 q-13 -6 -26 0z`,
    inhalt:  `M10.4 35 q-3 6 0 10 q3 8 15.6 8 q12.6 0 15.6 -8 q3 -4 0 -10 z`,
    spiegel: `M10.6 35 q15.4 5 30.8 0`,
    glanz:   `<ellipse cx="19" cy="42" rx="4" ry="7" fill="rgba(255,255,255,.22)" class="zutat-schimmer"/>`,
    leuchten: null,
  },

  // Sternenstaub — winziges Phiolenglas, Metallkappe, funkelnder Staub
  sternenstaub: {
    typ: 'pulver',
    deckel: `<rect x="19" y="2" width="14" height="7" rx="2" fill="#8a7fae"/>
             <rect x="17" y="8" width="18" height="4" rx="1.5" fill="#5e5480"/>`,
    koerper: `M17 15 h18 v10 q6 4 6 15 q0 17 -15 17 q-15 0 -15 -17 q0 -11 6 -15z`,
    inhalt:  `M9.5 41 q0 14 16.5 14 q16.5 0 16.5 -14 q0 -3 -.6 -6 h-31.8 q-.6 3 -.6 6 z`,
    spiegel: `M10 38 l4 -2 l4 2 l4 -2 l4 2 l4 -2 l4 2 l3.4 -1`,
    glanz:   koernung([[19, 42, 1], [26, 45, .8], [33, 41, 1.1], [22, 50, .9], [29, 53, 1], [17, 48, .7]], '#ffffff'),
    leuchten: '#d9c2ff',
  },

  // Sturmkraut — hängendes Bündel, silbrig-graue Blätter
  sturmkraut: { typ: 'kraeuter', leuchten: null },

  // Schattenmelisse — hängendes Bündel, mattgrüne, staubige Blätter
  schattenmelisse: { typ: 'kraeuter', leuchten: null },

  // Glutfenchel — hängendes Bündel, orangerote Blätter, glimmt schwach
  glutfenchel: { typ: 'kraeuter', leuchten: '#ffb04a' },

  // Schneckenschleim — bauchiges Glas mit Schneckenhaus-Korken, glänzend
  schneckenschleim: {
    typ: 'fluessig',
    deckel: `<path d="M18 12 a8 8 0 1 1 16 0 a5 5 0 1 1 -10 0 a2.4 2.4 0 1 1 5 0"
                    fill="none" stroke="#6b5636" stroke-width="2.2"/>
             <rect x="19" y="12" width="14" height="5" rx="2" fill="#65451f"/>`,
    koerper: `M14 22 q-1 -6 5 -7 h14 q6 1 5 7 q7 8 7 19 q0 15 -19 15 q-19 0 -19 -15 q0 -11 7 -19 z`,
    inhalt:  `M8 38 q4 -4 18 -4 q14 0 18 4 q0 21 -18 21 q-18 0 -18 -21 z`,
    spiegel: `M8 38 q4 -4 18 -4 q14 0 18 4`,
    glanz:   `<path d="M15 30 q-3 8 -2 16" stroke="rgba(255,255,255,.4)" stroke-width="3.4"
                    fill="none" stroke-linecap="round" class="zutat-schimmer"/>`,
    leuchten: null,
  },

  // Schneckenperle — kleines Glas mit einer schimmernden Perle darin
  schneckenperle: {
    typ: 'fest',
    deckel: `<rect x="20" y="3" width="12" height="7" rx="2" fill="#8a7fae"/>
             <rect x="18" y="9" width="16" height="4" rx="1.5" fill="#5e5480"/>`,
    koerper: `M18 15 h16 v10 q6 4 6 15 q0 16 -14 16 q-14 0 -14 -16 q0 -11 6 -15z`,
    inhalt:  `M11 41 q0 13 15 13 q15 0 15 -13 q0 -4 -1 -7 h-28 q-1 3 -1 7 z`,
    spiegel: `M11 40 h30`,
    glanz:   `<circle cx="26" cy="46" r="8" fill="#f7f0fa"/>
              <circle cx="23" cy="43" r="2.6" fill="#ffffff" opacity=".9"/>`,
    leuchten: '#e6d8f4',
  },
};

export function glasSVG(id) {
  const [hell, dunkel] = FARBEN[id] || ['#999', '#555'];
  const f = FORMEN[id];
  if (!f) return `<svg viewBox="0 0 52 64"><rect x="12" y="16" width="28" height="44"
                  rx="4" fill="${hell}"/></svg>`;

  const leuchtenAttr = f.leuchten
    ? ` class="zutat-leuchtet" style="--zutatglut:${f.leuchten}"`
    : '';

  if (f.typ === 'kraeuter') {
    return `<svg viewBox="0 0 52 64"${leuchtenAttr}>
  <defs>
    <linearGradient id="f-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="${hell}"/>
      <stop offset="100%" stop-color="${dunkel}"/>
    </linearGradient>
  </defs>
  ${kraeuterSVG(id, dunkel)}
</svg>`;
  }

  return `<svg viewBox="0 0 52 64"${leuchtenAttr}>
  <defs>
    <linearGradient id="f-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="${hell}"/>
      <stop offset="100%" stop-color="${dunkel}"/>
    </linearGradient>
    <clipPath id="c-${id}"><path d="${f.koerper}"/></clipPath>
  </defs>
  ${f.deckel}
  <path d="${f.koerper}" fill="${GLAS}" stroke="${KANTE}" stroke-width="1.4"
        stroke-linejoin="round"/>
  <g clip-path="url(#c-${id})">
    <path d="${f.inhalt}" fill="url(#f-${id})"/>
    <path d="${f.spiegel}" fill="none" stroke="${hell}" stroke-width="${f.typ === 'pulver' ? 1.6 : 2.6}" opacity=".8"/>
    ${f.glanz}
  </g>
</svg>`;
}
