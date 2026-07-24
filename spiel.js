import { BINDER, ZUTATEN, DRACHEN, DRACHEN_ALT, DRACHEN_ABHAENGIG, BUCHWISSEN, EINHORN } from './data.js';
import { DRACHEN_SVG, EINHORN_SVG, kringel } from './drachen-grafik.js';
import { glasSVG, FARBEN } from './glaeser.js';
import { wandSVG, LOCH_PFAD } from './holz.js';
// ============================================================
//  Grafik — alles Vektor, nichts geladen
// ============================================================

// Das fertige Bonbon — Farbe aus den beiden Zutaten gemischt,
// Form nach dem Binder. Jede Kombination sieht anders aus.
function erzeugeBonbon(binderId, zutatIds) {
  const binder = BINDER[binderId];
  const [h1] = FARBEN[zutatIds[0]] || ['#c9a86c'];
  const [h2] = FARBEN[zutatIds[1]] || ['#a86cc9'];
  const zufall = Math.random().toString(36).slice(2, 8);
  const gid = `bonbon-${zufall}`;
  const cid = `bonbonclip-${zufall}`;
  const grad = `<linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${h1}"/>
      <stop offset="100%" stop-color="${h2}"/>
    </linearGradient>`;

  let umriss, glanz;
  if (binder.effekt === 'daempft_klang') {
    // Daunensirup — glasiger Tropfen
    umriss = `M0 -16 q14 14 14 26 a14 14 0 1 1 -28 0 q0 -12 14 -26z`;
    glanz = `<ellipse cx="-5" cy="6" rx="3" ry="7" fill="rgba(255,255,255,.4)"/>`;
  } else if (binder.effekt === 'kuehlt_ab') {
    // Frostharz — facettierter Kristall
    umriss = `M0 -16 L14 -4 L9 16 L-9 16 L-14 -4 Z`;
    glanz = `<path d="M0 -16 L0 16 M-14 -4 L14 -4" stroke="rgba(255,255,255,.3)" stroke-width="1.2"/>`;
  } else {
    // Mondmilchkaramell — rundes, eingedrehtes Bonbon
    umriss = `M0 -17 a17 17 0 1 0 .01 0z`;
    glanz = `<ellipse cx="-16" cy="0" rx="5" ry="9" fill="#e8dcc0" opacity=".85" transform="rotate(20)"/>
             <ellipse cx="16" cy="0" rx="5" ry="9" fill="#e8dcc0" opacity=".85" transform="rotate(-20)"/>`;
  }

  // Jedes Bonbon bekommt zufällig eines von drei Mustern — oder gar keins.
  const musterTyp = ['gestreift', 'gepunktet', 'gekringelt', 'einfarbig'][Math.floor(Math.random() * 4)];
  let muster = '';
  if (musterTyp === 'gestreift') {
    let streifen = '';
    for (let i = -24; i <= 24; i += 7) {
      streifen += `<rect x="${i}" y="-24" width="3.4" height="48" fill="#fff" opacity=".5"/>`;
    }
    muster = `<g clip-path="url(#${cid})" transform="rotate(${Math.floor(Math.random() * 60 - 30)})">${streifen}</g>`;
  } else if (musterTyp === 'gepunktet') {
    const positionen = [[-8, -8], [6, -6], [-4, 7], [8, 8], [0, 0], [-10, 4], [10, -3]];
    const punkte = positionen
      .map(([px, py]) => `<circle cx="${px}" cy="${py}" r="2.4" fill="#fff" opacity=".6"/>`)
      .join('');
    muster = `<g clip-path="url(#${cid})">${punkte}</g>`;
  } else if (musterTyp === 'gekringelt') {
    muster = `<g clip-path="url(#${cid})">${kringel(0, 0, 15, '#fff', 2.6)}</g>`;
  }

  const markup = `<g class="bonbon-figur">
    <defs>
      ${grad}
      <clipPath id="${cid}"><path d="${umriss}"/></clipPath>
    </defs>
    <path d="${umriss}" fill="url(#${gid})" stroke="#2c1c10" stroke-width="1.6"/>
    ${muster}
    ${glanz}
  </g>`;
  return { markup, h1, h2, musterTyp };
}

// Das aktuelle Bonbon wird einmal erzeugt und gemerkt — so trägt der Sud im
// Topf dieselben Farben/Textur wie das Bonbon, das später herauskommt.
// Wird zurückgesetzt, sobald sich der Schüsselinhalt ändert.
function getBonbon() {
  if (!state.bonbon) {
    state.bonbon = erzeugeBonbon(state.schale.binder, state.schale.zutat);
  }
  return state.bonbon;
}

// Für das Astloch: dasselbe Bonbon, nur groß und mittig platziert.
function bonbonSVG() {
  return `<g id="bonbon" transform="translate(300 125) scale(1.8)">${getBonbon().markup}</g>`;
}

// Sud-Textur im Topf: Farbverlauf des Bonbons plus ein Hauch seines Musters,
// beschnitten auf die Sud-Ellipse (cx80 cy68) im Topf-Koordinatensystem.
function topfTextur() {
  const b = getBonbon();
  const uid = 'topf-' + Math.random().toString(36).slice(2, 7);
  const gid = uid + 'g', cid = uid + 'c';

  let muster = '';
  if (b.musterTyp === 'gestreift') {
    let s = '';
    for (let i = 46; i <= 114; i += 6) {
      s += `<rect x="${i}" y="59" width="2.2" height="18" fill="#fff" opacity=".32"/>`;
    }
    muster = `<g clip-path="url(#${cid})" transform="rotate(12 80 68)">${s}</g>`;
  } else if (b.musterTyp === 'gepunktet') {
    const pts = [[68, 66], [80, 69], [92, 66], [74, 70], [86, 70], [62, 68], [98, 68]];
    muster = `<g clip-path="url(#${cid})">` +
      pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.5" fill="#fff" opacity=".4"/>`).join('') +
      `</g>`;
  } else if (b.musterTyp === 'gekringelt') {
    muster = `<g clip-path="url(#${cid})">${kringel(80, 68, 7, '#fff', 2.2)}</g>`;
  }

  return `<defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${b.h1}"/>
        <stop offset="100%" stop-color="${b.h2}"/>
      </linearGradient>
      <clipPath id="${cid}"><ellipse cx="80" cy="68" rx="36" ry="8"/></clipPath>
    </defs>
    <ellipse cx="80" cy="68" rx="36" ry="8" fill="url(#${gid})"/>
    ${muster}`;
}

// --- Maus, zwei Posen -------------------------------------
function bluete(x, y, r, farbe, mitte = '#f7e7b0') {
  let p = '';
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
    const px = (x + Math.cos(a) * r * 0.66).toFixed(1);
    const py = (y + Math.sin(a) * r * 0.66).toFixed(1);
    const dreh = (a * 180 / Math.PI + 90).toFixed(1);
    p += `<ellipse cx="${px}" cy="${py}" rx="${(r * 0.62).toFixed(1)}" ry="${(r * 0.48).toFixed(1)}" ` +
         `transform="rotate(${dreh} ${px} ${py})" fill="${farbe}"/>`;
  }
  return p + `<circle cx="${x}" cy="${y}" r="${(r * 0.3).toFixed(1)}" fill="${mitte}"/>`;
}

const GEWEIH_L = `
<g transform="translate(68 44) scale(.75) translate(-68 -44)">
<g fill="#c9a24a">
  <path d="M62 46
           C36 22, 16 -16, 20 -54
           C22 -70, 38 -78, 50 -72
           C40 -66, 32 -56, 34 -42
           C38 -8, 54 20, 74 46 Z"/>
</g>
<g fill="none" stroke="#8a6420" stroke-width="1.5" opacity=".65" stroke-linecap="round">
  <path d="M56 34 C40 16, 30 -6, 30 -26"/>
  <path d="M48 16 C36 2, 30 -14, 30 -30"/>
  <path d="M42 -6 C34 -16, 30 -28, 31 -40"/>
  <path d="M38 -26 C33 -34, 31 -44, 33 -52"/>
</g>
<path d="M60 40 C38 16, 24 -18, 27 -50" fill="none"
      stroke="#f0d488" stroke-width="2" opacity=".5" stroke-linecap="round"/>
</g>`;

const GEWEIH_R = `<g transform="translate(176 0) scale(-1 1)">${GEWEIH_L}</g>`;

const ZWEIGE = `
<g fill="none" stroke="#6b4a2a" stroke-width="2.2" stroke-linecap="round" opacity=".85">
  <path d="M4 62 Q30 34 62 44 Q90 20 118 42 Q148 30 172 58"/>
  <path d="M20 56 Q46 46 58 36" stroke-width="1.6"/>
  <path d="M96 30 Q108 44 100 56" stroke-width="1.6"/>
  <path d="M140 50 Q152 40 164 48" stroke-width="1.6"/>
</g>`;

const KRANZ = [
  bluete(30, 42, 11, '#f2a7bd'), bluete(48, 30, 9, '#f4c430'),
  bluete(64, 40, 13, '#e8873a'), bluete(84, 28, 12, '#b98ed1'),
  bluete(104, 38, 13, '#d9524a'), bluete(122, 29, 9, '#f4c430'),
  bluete(142, 43, 11, '#f8d3de'),
  bluete(18, 58, 9, '#e8873a'), bluete(158, 58, 9, '#b98ed1'),
  bluete(40, 54, 7, '#fff6e6'), bluete(136, 54, 7, '#d9524a'),
  bluete(96, 46, 8, '#f4c430'), bluete(74, 48, 7, '#fff6e6'),
  bluete(112, 52, 8, '#e8873a'), bluete(56, 44, 8, '#b98ed1'),
  bluete(10, 46, 7, '#d9524a'), bluete(166, 46, 7, '#f4c430'),
].join('');

const MAUS_VORN = `<svg viewBox="-24 -78 224 320">
  ${GEWEIH_L}${GEWEIH_R}
  <!-- beide Ohren wackeln abwechselnd (phasenversetzt) -->
  <g class="maus-ohr-rechts">
    <g fill="#a08a6a">
      <ellipse cx="142" cy="64" rx="24" ry="26"/>
    </g>
    <ellipse cx="142" cy="64" rx="14" ry="16" fill="#e0a9a9"/>
  </g>
  <g class="maus-ohr-links">
    <g fill="#a08a6a">
      <ellipse cx="34" cy="64" rx="24" ry="26"/>
    </g>
    <ellipse cx="34" cy="64" rx="14" ry="16" fill="#e0a9a9"/>
  </g>
  <rect x="40" y="150" width="96" height="80" fill="#b19b7f"/>
  <path d="M40 178 q-8 -76 48 -76 q56 0 48 76 z" fill="#b19b7f"/>
  <!-- Rosa Latzhose mit sichtbaren Trägern, Ausschnitt bleibt tief -->
  <path d="M64 132 Q88 122 112 132 L120 180 H56 Z" fill="#f2a8c4"/>
  <path d="M64 132 L60 90 Q60 84 66 84 L74 84 Q78 84 76 90 L72 132 Z" fill="#f2a8c4"/>
  <path d="M112 132 L108 90 Q108 84 114 84 L106 84 Q100 84 102 90 L106 132 Z" fill="#f2a8c4"/>
  <rect x="70" y="146" width="36" height="24" rx="4" fill="#f6c9db"/>
  <g transform="translate(80 158)">
    <g fill="#ffffff"><ellipse cx="0" cy="-5" rx="2.2" ry="3.4"/><ellipse cx="0" cy="5" rx="2.2" ry="3.4"/><ellipse cx="-5" cy="0" rx="3.4" ry="2.2"/><ellipse cx="5" cy="0" rx="3.4" ry="2.2"/></g>
    <circle r="2" fill="#f4c430"/>
  </g>
  <g transform="translate(97 162) scale(.8)">
    <g fill="#ffffff"><ellipse cx="0" cy="-5" rx="2.2" ry="3.4"/><ellipse cx="0" cy="5" rx="2.2" ry="3.4"/><ellipse cx="-5" cy="0" rx="3.4" ry="2.2"/><ellipse cx="5" cy="0" rx="3.4" ry="2.2"/></g>
    <circle r="2" fill="#f4c430"/>
  </g>
  <ellipse cx="88" cy="80" rx="44" ry="40" fill="#c8b39a"/>
  ${ZWEIGE}${KRANZ}
  <g class="maus-augen">
    <ellipse cx="72" cy="80" rx="4.6" ry="5.4" fill="#241a10"/>
    <ellipse cx="104" cy="80" rx="4.6" ry="5.4" fill="#241a10"/>
  </g>
  <g class="maus-nase">
    <g class="maus-schnurrhaare" stroke="#4a3a29" stroke-width="1.6" stroke-linecap="round">
      <path d="M78 99 q-24 -5 -32 -12"/><path d="M78 103 q-24 2 -33 1"/>
      <path d="M98 99 q24 -5 32 -12"/><path d="M98 103 q24 2 33 1"/>
    </g>
    <!-- eigenständige Ellipse: fill-box-Mitte = exakt der Nasenpunkt -->
    <ellipse class="maus-naseknopf" cx="88" cy="97" rx="6" ry="4.6" fill="#d99191"/>
  </g>
  <!-- Beine (Hosenbeine der Latzhose) und Füße — im Stehen hinter dem Tisch verdeckt,
       nur sichtbar, wenn die Maus im Sessel sitzt -->
  <g>
    <path d="M62 178 q-5 26 -2 46 h24 q2 -24 -1 -48 z" fill="#f2a8c4"/>
    <path d="M114 178 q5 26 2 46 h-24 q-2 -24 1 -48 z" fill="#f2a8c4"/>
  </g>
  <ellipse cx="65" cy="226" rx="19" ry="10" fill="#d8c6ae"/>
  <ellipse cx="111" cy="226" rx="19" ry="10" fill="#d8c6ae"/>
  <g stroke="#4a3a29" stroke-width="1.2" opacity=".45" stroke-linecap="round">
    <path d="M55 228 v5 M65 229 v5 M75 228 v5 M101 228 v5 M111 229 v5 M121 228 v5"/>
  </g>
</svg>`;

// Der Wackelzahn des Jungdrachen — die Maus trägt ihn danach als Kette.
const ZAHNKETTE = `<g class="maus-zahnkette">
  <path d="M56 106 Q88 138 120 106" fill="none" stroke="#e7d7b0" stroke-width="2.6" opacity=".95"/>
  <path d="M88 120 l-7 18 h14 z" fill="#fbfbf5" stroke="#8a7350" stroke-width="1.3"/>
</g>`;

// Große Kette für die Zeremonie in der Bildmitte.
const ZAHNKETTE_GROSS = `<svg viewBox="0 0 120 92" width="120" height="92">
  <path d="M18 20 Q60 80 102 20" fill="none" stroke="#efdfb6" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M60 52 l-11 26 h22 z" fill="#fdfdf6" stroke="#8a7350" stroke-width="2.4"/>
</svg>`;

// Maus von vorn zeichnen — mit Zahnkette, sobald sie eine hat und die
// Zeremonie (Kette schrumpft auf den Hals) vorbei ist.
function mausVornZeichnen() {
  let svg = MAUS_VORN;
  if (state.mausHatZahn && !state.zahnZeremonieAusstehend) {
    svg = svg.replace('</svg>', ZAHNKETTE + '</svg>');
  }
  $('#maus').innerHTML = svg;
}

// Kette einmal groß in der Bildmitte zeigen, dann auf den Hals der Maus
// schrumpfen lassen — mit Glow, damit klar wird, was passiert.
function zahnZeremonie() {
  const alt = document.getElementById('zahn-zeremonie');
  if (alt) alt.remove();
  const el = document.createElement('div');
  el.id = 'zahn-zeremonie';
  el.innerHTML = ZAHNKETTE_GROSS;
  $('#buehne').appendChild(el);
  return new Promise((resolve) => {
    el.addEventListener('animationend', () => { el.remove(); resolve(); }, { once: true });
    requestAnimationFrame(() => el.classList.add('laeuft'));
    // Sicherheitsnetz, falls animationend nicht feuert
    setTimeout(() => { if (document.body.contains(el)) { el.remove(); resolve(); } }, 2200);
  });
}

const KRANZ_HINTEN = [
  bluete(34, 46, 10, '#c98498'), bluete(58, 36, 9, '#d9c2a8'),
  bluete(88, 32, 11, '#d0a8b6'), bluete(118, 36, 9, '#d9c2a8'),
  bluete(142, 46, 10, '#c98498'),
].join('');

const MAUS_HINTEN = `<svg viewBox="-24 -78 224 320">
  <g opacity=".82">${GEWEIH_L}${GEWEIH_R}</g>
  <g fill="#8d7a5c">
    <ellipse cx="34" cy="64" rx="23" ry="25"/>
    <ellipse cx="142" cy="64" rx="23" ry="25"/>
  </g>
  <rect x="40" y="150" width="96" height="80" fill="#a08a6d"/>
  <path d="M40 178 q-8 -76 48 -76 q56 0 48 76 z" fill="#a08a6d"/>
  <ellipse cx="88" cy="80" rx="44" ry="40" fill="#b7a289"/>
  ${KRANZ_HINTEN}
  <path d="M132 168 q42 -6 30 -44 q-10 -30 -34 -22" fill="none"
        stroke="#c8b39a" stroke-width="7" stroke-linecap="round"/>
</svg>`;


// ============================================================
//  Vogel & Käfig — der blaue Bote mit den gelben Flügeln
//
//  Vor dem Astloch, im linken Viertel, hängt ein Käfig mit offener
//  Tür. Der Vogel sitzt darin. Sobald die Maus ein Bonbon angerührt
//  hat, fliegt er mit seinem Körbchen zu ihr, sammelt das fertige
//  Bonbon ein und trägt es hinauf zum Drachen.
// ============================================================
const VOGELKAEFIG = `<svg viewBox="0 -59 120 219" preserveAspectRatio="xMidYMid meet">
  <defs>
    <!-- Kette faded nach oben aus (wegen des Drachentextes) und endet am Ring -->
    <linearGradient id="kaefigKette" gradientUnits="userSpaceOnUse" x1="60" y1="-59" x2="60" y2="14">
      <stop offset="0%"   stop-color="#2a1d10" stop-opacity="0"/>
      <stop offset="55%"  stop-color="#2a1d10" stop-opacity=".8"/>
      <stop offset="100%" stop-color="#2a1d10" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <!-- Aufhängekette: fadet oben aus, endet am Ring -->
  <path d="M60 -59 V14" stroke="url(#kaefigKette)" stroke-width="3"/>
  <circle cx="60" cy="19" r="6" fill="none" stroke="#9a7b45" stroke-width="3"/>
  <!-- Kuppel -->
  <path d="M24 66 Q24 27 60 27 Q96 27 96 66" fill="none" stroke="#9a7b45" stroke-width="3.6"/>
  <path d="M38 41 Q60 31 82 41" fill="none" stroke="#7a5f36" stroke-width="2" opacity=".8"/>
  <!-- obere und untere Reifen -->
  <path d="M22 66 H98" stroke="#9a7b45" stroke-width="3.6" stroke-linecap="round"/>
  <path d="M24 121 H96" stroke="#9a7b45" stroke-width="3.6" stroke-linecap="round"/>
  <!-- senkrechte Stäbe (rundum, keine Tür) -->
  <g stroke="#7a5f36" stroke-width="2.4" opacity=".9" stroke-linecap="round">
    <path d="M30 66 V121"/><path d="M42 66 V121"/><path d="M54 66 V121"/>
    <path d="M66 66 V121"/><path d="M78 66 V121"/><path d="M90 66 V121"/>
  </g>
  <!-- Boden -->
  <ellipse cx="60" cy="127" rx="40" ry="8" fill="#5a4327" stroke="#3a2a18" stroke-width="2.4"/>
  <path d="M28 127 Q60 138 92 127" fill="none" stroke="#3a2a18" stroke-width="2" opacity=".6"/>
</svg>`;

// Der Vogel: blauer Körper, gelbe Flügel, ein Körbchen an den Füßen.
// Er schaut nach rechts — zur Maus und zum Drachen. Das leere Feld
// `.vogel-bonbon` füllt sich, sobald er ein Bonbon eingesammelt hat.
const VOGEL = `<svg viewBox="0 0 78 84" preserveAspectRatio="xMidYMid meet">
  <!-- Beine (kurz, unter dem Körper) -->
  <path d="M28 44 v8 M34 44 v8" stroke="#e0a53a" stroke-width="2" stroke-linecap="round"/>
  <!-- Schwanz -->
  <path d="M8 32 l-6 -5 l4 8 z" fill="#2f6fce"/>
  <!-- Körper -->
  <ellipse cx="30" cy="34" rx="18" ry="15" fill="#3f83e0"/>
  <!-- Flügel (gelb) -->
  <g class="vogel-fluegel">
    <path d="M30 30 q-15 -7 -23 6 q9 8 23 3 z" fill="#f4c430"/>
    <path d="M12 33 q6 3 14 1" fill="none" stroke="#c99a20" stroke-width="1" opacity=".7"/>
  </g>
  <!-- Kopf samt Schnabel und dem daran hängenden Körbchen — wackelt im Sitzen -->
  <g class="vogel-kopf">
    <circle cx="46" cy="24" r="10" fill="#3f83e0"/>
    <path d="M41 30 q-1 6 5 6 q-3 -4 -1 -7 z" fill="#f4c430" opacity=".85"/>
    <path d="M55 23 l9 -1 l-9 5 z" fill="#f0a028"/>
    <circle cx="49" cy="22" r="2.3" fill="#14243a"/>
    <circle cx="49.8" cy="21.2" r=".8" fill="#fff"/>
    <!-- Körbchen direkt am Schnabel (5px nach rechts, 30% größer um den Schnabelanker).
         Das Bonbon liegt HINTER dem Korbkörper und schaut oben >50% heraus. -->
    <g transform="translate(5 0) translate(54 33) scale(1.3) translate(-54 -33)">
      <!-- Henkel — beide Füße sitzen auf dem Korbrand (y=35) -->
      <path d="M44 35 Q53 23 61 35" fill="none" stroke="#7a5326" stroke-width="1.8"/>
      <!-- Bonbon liegt im offenen Gitterkorb (Gitter davor) -->
      <g class="vogel-bonbon"></g>
      <!-- Umriss des Korbs — keine Füllfläche, nur Rand -->
      <path d="M41 35 h22 l-3 20 h-16 z" fill="none" stroke="#7a5326" stroke-width="1.6" stroke-linejoin="round"/>
      <!-- oberer Rand -->
      <path d="M39 35 h26" stroke="#7a5326" stroke-width="2.6" stroke-linecap="round"/>
      <!-- breitmaschiges Gitter -->
      <g stroke="#7a5326" stroke-width="1.3" opacity=".85">
        <path d="M43 42 h18 M44 49 h16"/>
        <path d="M47 36 v18 M52 36 v19 M57 36 v18"/>
      </g>
    </g>
  </g>
</svg>`;

// Zielpunkte des Vogels als Transform (Ausgangspunkt = Käfigtür).
const VOGEL_WEG = {
  heim:   'translate(0px, 0px)',
  topf:   'translate(276px, 345px)',   // hinunter zur Maus / zum Topf
  drache: 'translate(276px, 65px)',    // hinauf, mittig unter das Bonbon
};
let vogelPos = VOGEL_WEG.heim;

// Der Käfig schwingt kurz, wenn der Vogel losfliegt oder zurückkommt.
function kaefigSchwingen() {
  const k = $('#vogelkaefig');
  k.classList.remove('schwingt');
  void k.offsetWidth;
  k.classList.add('schwingt');
}

// Ein Flugabschnitt: von der aktuellen Position zum Ziel. Der Basiszustand
// wird sofort auf das Ziel gesetzt, damit der Vogel nach der Animation
// (die ohne fill läuft) dort ruht — kein Zurückschnappen. `flip` dreht ihn
// für den Rückweg nach links.
function vogelLeg(nach, dauer, flip = false) {
  const v = $('#vogel');
  const zielT = flip ? nach + ' scaleX(-1)' : nach;
  const vonT = vogelPos;
  vogelPos = zielT;
  v.style.transform = zielT;
  const reduziert = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduziert || !v.animate) return Promise.resolve();
  return v.animate(
    [{ transform: vonT }, { transform: zielT }],
    { duration: dauer, easing: 'cubic-bezier(.35,.1,.3,1)' }
  ).finished.catch(() => {});
}

function vogelBonbonZeigen() {
  const ziel = $('#vogel .vogel-bonbon');
  // Bonbon (Ursprung 0,0, Radius ~17) mittig über den Korbrand (y≈35) legen,
  // sodass die obere Hälfte herausschaut. scale ~0.75 → passt in den Korb.
  if (ziel) ziel.innerHTML = `<g transform="translate(52 38) scale(.75)">${getBonbon().markup}</g>`;
}
function vogelBonbonVerstecken() {
  const ziel = $('#vogel .vogel-bonbon');
  if (ziel) ziel.innerHTML = '';
}

// Vogel fliegt aus dem Käfig zur Maus und sammelt das fertige Bonbon ein.
async function vogelHolt() {
  $('#vogel').classList.add('fliegt');
  kaefigSchwingen();                    // der leere Käfig schwingt nach
  await vogelLeg(VOGEL_WEG.topf, 1300);
  await warte(420);   // kurz beim Topf verweilen (das Bonbon erscheint später oben)
}
// Vogel trägt das Bonbon hinauf zum Drachen.
async function vogelBringt() {
  await vogelLeg(VOGEL_WEG.drache, 1200);
  await warte(180);
}
// Vogel fliegt zurück in seinen Käfig (nach links gewandt) und setzt sich.
async function vogelHeim() {
  const v = $('#vogel');
  vogelBonbonVerstecken();
  await vogelLeg(VOGEL_WEG.heim, 1300, true);
  v.style.transform = VOGEL_WEG.heim;   // im Käfig wieder nach rechts gewandt
  vogelPos = VOGEL_WEG.heim;
  v.classList.remove('fliegt');
  kaefigSchwingen();                    // der zurückkehrende Vogel bringt den Käfig zum Schwingen
}

// ============================================================
//  Zustand
// ============================================================

const state = {
  drache: null,
  schale: { binder: null, zutat: [null, null] },
  bonbon: null,            // gemerktes Bonbon-Markup (Vorschau == Ergebnis)
  mausHatZahn: false,      // trägt die Maus den Wackelzahn des Jungdrachen?
  zahnZeremonieAusstehend: false,  // Kette-Einblendung läuft noch
  gesehen: new Set(),      // schon untersuchte Zutaten
  // Drei Kapitel (10 + 10 + 9 = 29 Auftritte) — flache Sequenz, siehe kapitelBauen.
  sequenz: [],
  kapitelGrenzen: [10, 20], // vor diesen Indizes geht die Maus schlafen
  auftritte: {},           // wie oft jeder Drache schon dran war → Variantenwahl
  aktVariante: null,       // { wunsch, bedingungen, belohnung } des aktuellen Auftritts
  index: 0,
  wartet: false,
  freigeschaltet: new Set(),   // Zutaten, die Drachen schon dagelassen haben
};

// ============================================================
//  Kapitel bauen — 3 × 5 Drachen, zufällig ausgewählt
// ============================================================
function mischeArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Baut drei Kapitel (10 + 10 + 9 = 29 Auftritte) als flache Liste von
// Einträgen { id, dep }. Jeder Drache tritt mit seinem Grund- UND seinem
// Zweitwunsch (DRACHEN_ALT) auf; die drei Story-Drachen zusätzlich mit ihrem
// Geschenk-Anliegen (dep → DRACHEN_ABHAENGIG). Reihenfolge je Drache:
//   Grundwunsch < (Story: Geschenk-Anliegen <) Zweitwunsch.
// Kein Drache erscheint zweimal im selben Kapitel, damit die Variantenwahl
// (über den Auftritts-Zähler) sauber Grund→Geschenk→Zweit durchläuft.
// Abhängigkeiten: die Geber (Sonnen-/Staub-/Walddrache) treten mit Grundwunsch
// in Kapitel 1 auf — also vor dem Geschenk-Anliegen ihrer abhängigen
// Story-Drachen in Kapitel 2.
function kapitelBauen() {
  const story = ['herzchendrache', 'rosendrache', 'zweikopfdrache'];
  const geber = ['sonnendrache', 'staubdrache', 'walddrache'];
  const regulaerRest = mischeArray(
    Object.keys(DRACHEN).filter((id) => !story.includes(id) && !geber.includes(id)),
  );                                   // 7 „gewöhnliche“ Drachen
  const frueh = regulaerRest.slice(0, 4);   // Grundwunsch in Kap 1, Zweit in Kap 2
  const spaet = regulaerRest.slice(4);      // Grundwunsch in Kap 2, Zweit in Kap 3 (3 Stück)

  const grund = (id) => ({ id, dep: false });
  const zweit = (id) => ({ id, dep: false });   // Zweitwunsch = Auftritt Nr. 2/3
  const gabe  = (id) => ({ id, dep: true });    // Geschenk-Anliegen der Story-Drachen

  // Kapitel 1 (10): Grundwünsche der Geber, Story-Drachen und vier weiterer.
  const kap1 = mischeArray([
    ...geber.map(grund),
    ...story.map(grund),
    ...frueh.map(grund),
  ]);
  // Kapitel 2 (10): Grundwünsche der drei „späten“ Drachen, die Geschenk-
  // Anliegen der Story-Drachen (Geber sind aus Kap 1 versorgt) und die
  // Zweitwünsche der vier frühen Drachen.
  const kap2 = mischeArray([
    ...spaet.map(grund),
    ...story.map(gabe),
    ...frueh.map(zweit),
  ]);
  // Kapitel 3 (9): die verbleibenden Zweitwünsche — Geber, späte, Story.
  const kap3 = mischeArray([
    ...geber.map(zweit),
    ...spaet.map(zweit),
    ...story.map(zweit),
  ]);

  return [...kap1, ...kap2, ...kap3];
}

// Welchen Satz / welche Anforderung sagt der Drache bei diesem Auftritt?
// dep-Auftritte nutzen die Story-Variante (verlangt die Geschenk-Zutat).
function drachenVariante(entry) {
  const id = entry.id;
  if (entry.dep && DRACHEN_ABHAENGIG[id]) {
    const v = DRACHEN_ABHAENGIG[id];
    return { wunsch: v.wunsch, bedingungen: v.bedingungen, belohnung: v.belohnung };
  }
  const d = DRACHEN[id];
  const n = state.auftritte[id] || 0;        // 0 = erster Auftritt
  const alt = DRACHEN_ALT[id];
  if (n > 0 && alt && alt.length) {
    const v = alt[(n - 1) % alt.length];
    return { wunsch: v.wunsch, bedingungen: v.bedingungen, belohnung: v.belohnung };
  }
  return { wunsch: d.wunsch, bedingungen: d.bedingungen, belohnung: d.belohnung };
}

const $ = (s) => document.querySelector(s);
const buehne = $('#buehne');

// ============================================================
//  Skalierung — Bühne füllt das Fenster ohne Verzerrung
// ============================================================
function skalieren() {
  const s = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
  const x = (window.innerWidth  - 1280 * s) / 2;
  const y = (window.innerHeight -  720 * s) / 2;
  buehne.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
}
window.addEventListener('resize', skalieren);
skalieren();

// ============================================================
//  Regal aufbauen
// ============================================================
const ZUTATEN_PRO_REGAL = 6; // max. 3 nebeneinander, 2 Reihen

function regalBauen() {
  const bB = $('#brett-binder');
  for (const [id, b] of Object.entries(BINDER)) {
    bB.appendChild(glasElement(id, b, 'binder'));
  }

  const bZLinks = $('#brett-zutaten-links');
  const bZRechts = $('#brett-zutaten-rechts');
  // Geschenk-Zutaten (geheim:true) stehen noch nicht im Regal —
  // die kommen erst, wenn ein Drache sie dalässt.
  const zutatEintraege = Object.entries(ZUTATEN).filter(([, z]) => !z.geheim);

  // füllt links zuerst, rechts erst danach — beide Regale bleiben sichtbar
  zutatEintraege.forEach(([id, z], i) => {
    const ziel = i < ZUTATEN_PRO_REGAL ? bZLinks : bZRechts;
    ziel.appendChild(glasElement(id, z, 'zutat'));
  });
}

// Story-Pflichtzutaten: die verlangt ein späterer Drache zwingend. Sie dürfen
// nie am 6er-Limit des rechten Regals scheitern — sonst wäre ein Rätsel
// unlösbar. (Alle anderen Geschenke sind reine Sammelstücke.)
const PFLICHT_ZUTATEN = new Set(
  Object.values(DRACHEN_ABHAENGIG).map((d) => d.braucht),
);

// Ein Drache lässt beim Verschwinden eine seltene Zutat da.
// Gibt true zurück, wenn sie tatsächlich ins Regal wandert. Das rechte Regal
// fasst höchstens sechs Zutaten; darüber hinaus kommen nur noch Pflichtzutaten
// dazu. Kommt nichts ins Regal, soll auch keine „dagelassen“-Karte erscheinen.
function zutatFreischalten(id) {
  const z = ZUTATEN[id];
  if (!z) return false;
  const bZLinks = $('#brett-zutaten-links');
  const bZRechts = $('#brett-zutaten-rechts');
  const ziel = bZLinks.children.length < ZUTATEN_PRO_REGAL ? bZLinks : bZRechts;
  if (ziel === bZRechts
      && bZRechts.children.length >= ZUTATEN_PRO_REGAL
      && !PFLICHT_ZUTATEN.has(id)) {
    return false;   // rechtes Regal voll — Sammelstück fällt aus
  }
  const fach = glasElement(id, z, 'zutat');
  fach.classList.add('neu');
  ziel.appendChild(fach);
  setTimeout(() => fach.classList.remove('neu'), 4000);
  return true;
}


// Kleine Wanddekorationen, die das Einhorn dalässt.
// Manche schimmern (deko-schimmer), funkeln (deko-funkel) oder
// spielen in Regenbogenfarben (deko-regenbogen) — nicht alle.
const DEKOS = [
  // Sternenpaar — funkelt
  (x, y) => `<g class="deko-funkel" transform="translate(${x} ${y}) scale(2)" fill="#ffe9a8" opacity=".9">
    <path d="M0 -14 l3 9 l9 0 l-7 6 l3 9 l-8 -6 l-8 6 l3 -9 l-7 -6 l9 0z"/>
    <path d="M-26 6 l2 5 l5 0 l-4 4 l2 5 l-5 -3 l-5 3 l2 -5 l-4 -4 l5 0z" opacity=".7"/>
  </g>`,
  // Einhorngesicht-Stempel — spielt in Regenbogenfarben
  (x, y) => `<g class="deko-regenbogen" transform="translate(${x} ${y}) scale(2)">
    <path d="M-9 -7 L-13 -19 L-3 -11 Z" fill="#fbeaf2" stroke="#c98bb0" stroke-width="1"/>
    <path d="M9 -7 L13 -19 L3 -11 Z" fill="#fbeaf2" stroke="#c98bb0" stroke-width="1"/>
    <ellipse cx="0" cy="1" rx="12" ry="13" fill="#fff6fb" stroke="#c98bb0" stroke-width="1.2"/>
    <path d="M-3 -12 L0 -27 L3 -12 Z" fill="#f4c430" stroke="#c9962a" stroke-width=".9"/>
    <path d="M-4 -12 Q-1 -6 2 -12" fill="none" stroke="#f2748c" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M2 -12 Q5 -7 8 -11" fill="none" stroke="#7fc4ef" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M-8 0 Q-5 4 -2 0" fill="none" stroke="#3a2c4a" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M8 0 Q5 4 2 0" fill="none" stroke="#3a2c4a" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="-7" cy="5" r="2" fill="#f5b6cd" opacity=".7"/>
    <circle cx="7" cy="5" r="2" fill="#f5b6cd" opacity=".7"/>
    <ellipse cx="0" cy="9" rx="2.6" ry="1.8" fill="#e79bb6" opacity=".7"/>
  </g>`,
  // Mondsichel — schimmert
  (x, y) => `<g class="deko-schimmer" transform="translate(${x} ${y}) scale(2)">
    <path d="M0 -16 A16 16 0 1 0 0 16 A11 11 0 1 1 0 -16z" fill="#dce8f5" opacity=".8"/>
  </g>`,
  // Blüte — volle Blüte mit Blütenblättern rundherum, schimmert leise
  (x, y) => {
    let blaetter = '';
    const n = 8;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const px = (Math.cos(a) * 13).toFixed(1);
      const py = (Math.sin(a) * 13).toFixed(1);
      const dreh = (a * 180 / Math.PI + 90).toFixed(1);
      blaetter += `<ellipse cx="${px}" cy="${py}" rx="6.5" ry="10.5" ` +
                  `transform="rotate(${dreh} ${px} ${py})" fill="#f2a7bd" ` +
                  `stroke="#d9758f" stroke-width=".8"/>`;
    }
    return `<g class="deko-schimmer" transform="translate(${x} ${y}) scale(1.5)">
      ${blaetter}
      <circle r="7.5" fill="#f4c430"/>
      <circle r="3.6" fill="#e8873a"/>
    </g>`;
  },
];

// Deko schmückt zwei gemütliche Wandflächen: über dem Ohrensessel (unten
// links) und rechts vom Blumenstrauß (unten rechts). Beide klar frei von
// Möbeln. (Ohrensessel x24–234 ab y490, Vase x775–940.)
// Zwei kleine, garantiert freie Felder. (Vase x775–940 unten rechts,
// Ohrensessel x24–234 ab y490.)
const DEKO_ZONEN = [
  // 15 px rechts neben dem Blumenstrauß, dann 40 px nach rechts/oben/unten
  { x0: 955, x1: 995, y0: 503, y1: 583 },
  // oberhalb des Ohrensessels, 15 px Abstand, 40×40-Feld
  { x0: 109, x1: 149, y0: 435, y1: 475 },
];

// Füllt das Nacht-Overlay einmalig mit Mond und einem Feld funkelnder Sterne.
function nachthimmelBauen() {
  let s = '<div class="mond"></div>';
  for (let i = 0; i < 80; i++) {
    const x = Math.random() * 1280;
    const y = Math.random() * 520;
    const tw = (2 + Math.random() * 3).toFixed(1);
    const gr = (Math.random() < 0.3 ? 3 : 2);
    s += `<span class="stern" style="left:${x.toFixed(0)}px;top:${y.toFixed(0)}px;` +
         `width:${gr}px;height:${gr}px;--tw:${tw}s"></span>`;
  }
  $('#nacht').innerHTML = s;
}

// Setzt eine zufällige Deko in eine der freien Zonen der Wand.
function zufaelligeDeko() {
  const gen = DEKOS[Math.floor(Math.random() * DEKOS.length)];
  const z = DEKO_ZONEN[Math.floor(Math.random() * DEKO_ZONEN.length)];
  const x = z.x0 + Math.random() * (z.x1 - z.x0);
  const y = z.y0 + Math.random() * (z.y1 - z.y0);
  $('#deko-schicht').insertAdjacentHTML('beforeend', gen(x, y));
}

// Das Einhorn taucht am Astloch auf und schwebt dabei leise (schweb-1).
function einhornErscheint() {
  const svg = $('#drache-svg');
  svg.innerHTML = `<g class="dr-schweben schweb-1">${EINHORN_SVG}</g>`;
  partikelFreistellen(svg);
  svg.classList.remove('kommt');
  void svg.offsetWidth;
  svg.classList.add('kommt');
  $('#schlitz').style.setProperty('--drachenfarbe', '214,180,230');
  $('#loch-glut').style.setProperty('--drachenfarbe', '214,180,230');
  $('#schlitz').classList.add('aktiv');
  $('#loch-glut').classList.add('aktiv');
}
async function einhornZiehtWeiter() {
  const svg = $('#drache-svg');
  svg.classList.add('geht');
  $('#schlitz').classList.add('geht');
  $('#loch-glut').classList.add('geht');
  await warte(850);
  svg.classList.remove('geht');
  $('#schlitz').classList.remove('geht');
  $('#loch-glut').classList.remove('geht');
  svg.innerHTML = '';
  $('#schlitz').classList.remove('aktiv');
  $('#loch-glut').classList.remove('aktiv');
  $('#rede').classList.remove('da');
}

// Kurzer Einhorn-Auftritt mit einem Satz — für den Morgengruß und das
// Schlusswort. Bringt nichts mit.
async function einhornKurz(text, cta = 'Klick zum Weitermachen') {
  einhornErscheint();
  await zeigeKarteKlick(`„${text}“`, cta, true);
  await einhornZiehtWeiter();
}

// Kapitelwechsel: die Maus geht in den Ohrensessel schlafen, der
// Sternenhimmel legt sich über die Szene, ein Text erscheint. Am Morgen
// schaut das Einhorn kurz vorbei (ohne etwas mitzubringen).
async function schlafenGehen(kapNr) {
  const maus = $('#maus');
  maus.classList.add('geht-sessel', 'sitzt');   // ab in den Sessel
  await warte(900);
  const nacht = $('#nacht');
  nacht.classList.add('da');
  await warte(1500);
  await zeigeKarteKlick(EINHORN.schlafText[kapNr], 'Klick, um weiterzuträumen', true);
  await warte(500);
  nacht.classList.remove('da');                 // der Morgen dämmert
  await warte(1300);
  maus.classList.add('geht-sessel');
  maus.classList.remove('sitzt');               // die Maus steht auf
  setTimeout(() => maus.classList.remove('geht-sessel'), 1600);
  await einhornKurz(EINHORN.morgenText[kapNr], 'Klick, um in den Tag zu starten');
  await warte(400);
}

// Nach allen drei Kapiteln: Einhorn-Schlusswort, dann setzt sich die Maus
// in den Ohrensessel und schläft ein.
async function spielEnde() {
  await warte(500);
  await einhornKurz(EINHORN.schlusswort, 'Klick zum Weitermachen');
  const maus = $('#maus');
  maus.classList.add('geht-sessel', 'sitzt');
  await warte(1700);
  await zeigeKarteKlick(EINHORN.ende, 'Ende');
}

// Das Einhorn erscheint am Astloch wie ein Drache, aber ohne Rätsel —
// Klick irgendwo auf die Bühne lässt es ziehen. Was es dalässt, bleibt
// sichtbar im Raum (Regal oder Wand), kein Zwischenfenster nötig.
let einhornErstesMal = true;

async function einhornBesuch() {
  const ersterBesuch = einhornErstesMal;   // beim ersten Mal nie eine Zutat dalassen
  einhornErscheint();

  // Text des Einhorns läuft jetzt über dieselbe Karte wie alles andere.
  // Karte tief und ohne Abdunklung, damit das Einhorn oben sichtbar bleibt.
  if (einhornErstesMal) {
    // Beim allerersten Mal erklärt das Einhorn knapp das Spiel — auf zwei Karten.
    const teile = [].concat(EINHORN.erklaerung);
    for (let i = 0; i < teile.length; i++) {
      const letzte = i === teile.length - 1;
      await zeigeKarteKlick(teile[i], letzte ? 'Klick zum Weitermachen' : 'Weiter', true);
    }
  } else {
    await zeigeKarteKlick(`„${EINHORN.wunsch}“`, 'Klick, um es ziehen zu lassen', true);
  }
  einhornErstesMal = false;

  await einhornZiehtWeiter();   // Abflug — wie bei den Drachen

  const geheimeZutaten = Object.keys(ZUTATEN)
    .filter((id) => ZUTATEN[id].geheim && !state.freigeschaltet.has(id));
  const seltenerFund = !ersterBesuch && Math.random() < 0.12 && geheimeZutaten.length > 0;

  let text;
  const fundId = seltenerFund
    ? geheimeZutaten[Math.floor(Math.random() * geheimeZutaten.length)]
    : null;
  // zutatFreischalten liefert false, wenn das rechte Regal (6) voll ist —
  // dann keinen Fund vorgaukeln, sondern normal Deko dalassen.
  if (fundId && zutatFreischalten(fundId)) {
    state.freigeschaltet.add(fundId);
    await zeigeGeschenk(fundId, 'Das Einhorn');
    text = EINHORN.abschiedSelten;
  } else {
    zufaelligeDeko();
    text = EINHORN.abschiedHaeufig;
  }
  // Bleibt stehen, bis geklickt wird — der Text soll lange genug zu sehen sein.
  await zeigeKarteKlick(text);
}

function glasElement(id, daten, typ) {
  const fach = document.createElement('div');
  fach.className = 'fach';
  fach.dataset.id = id;
  fach.dataset.typ = typ;

  const el = document.createElement('div');
  el.className = 'glas';
  el.innerHTML = glasSVG(id);

  const name = document.createElement('span');
  name.className = 'glas-name';
  name.textContent = daten.name;

  fach.appendChild(el);
  fach.appendChild(name);

  let langKlick = null;
  fach.addEventListener('pointerdown', (e) => {
    if (e.button === 2) return;
    langKlick = setTimeout(() => { langKlick = 'lang'; untersuchen(id, typ); }, 260);
  });
  fach.addEventListener('pointerup', (e) => {
    if (e.button === 2) return;
    if (langKlick === 'lang') { langKlick = null; return; }
    clearTimeout(langKlick);
    inSchale(id, typ);
  });
  fach.addEventListener('pointerleave', () => clearTimeout(langKlick));
  fach.addEventListener('contextmenu', (e) => { e.preventDefault(); untersuchen(id, typ); });

  return fach;
}

// ============================================================
//  Untersuchen — Klick halten oder Rechtsklick
// ============================================================
function untersuchen(id, typ) {
  const d = typ === 'binder' ? BINDER[id] : ZUTATEN[id];
  state.gesehen.add(id);
  karteZeigen(`
    <div class="grossglas">${glasSVG(id)}</div>
    <h2>${d.name}</h2>
    <div class="quelle">${typ === 'binder' ? 'Binder' : 'Zutat'}</div>
    <p>${d.beschreibung}</p>
    <div class="weiter">Klick zum Zurücklegen</div>
  `);
}

// --- Buch -------------------------------------------------
let buchSeiten = [];   // Schlüssel der gerade verfügbaren Einträge
let buchIndex = 0;

function buchOeffnen(schluessel) {
  buchSeiten = (DRACHEN[state.drache]?.buecher || []).slice();
  if (!buchSeiten.length) buchSeiten = [schluessel];
  const i = buchSeiten.indexOf(schluessel);
  buchIndex = i >= 0 ? i : 0;
  buchZeichnen();
  $('#buch-overlay').classList.add('offen');
}

function buchZeichnen() {
  const b = BUCHWISSEN[buchSeiten[buchIndex]];
  if (!b) return;
  $('#buch .buch-reihe').textContent = 'Aus der Sammlung';
  $('#buch .buch-titel').textContent = b.buch;
  $('#buch .buch-text').innerHTML = b.text;   // Absätze + fette Begriffe
  const reinerText = b.text.replace(/<[^>]+>/g, '');
  $('#buch').classList.toggle('lang', reinerText.length > 300);
  $('#buch .buch-fuss').textContent =
    `Blatt ${buchIndex + 1} von ${buchSeiten.length}`;
  $('#buch .blaettern.zurueck').disabled = buchIndex === 0;
  $('#buch .blaettern.vor').disabled = buchIndex >= buchSeiten.length - 1;
}

function buchBlaettern(richtung) {
  const neu = buchIndex + richtung;
  if (neu < 0 || neu >= buchSeiten.length) return;
  buchIndex = neu;
  buchZeichnen();
}

$('#buch .blaettern.zurueck').addEventListener('click', (e) => {
  e.stopPropagation(); buchBlaettern(-1);
});
$('#buch .blaettern.vor').addEventListener('click', (e) => {
  e.stopPropagation(); buchBlaettern(1);
});
$('#buch').addEventListener('click', (e) => e.stopPropagation());
$('#buch-overlay').addEventListener('click', () => {
  $('#buch-overlay').classList.remove('offen');
});

function karteZeigen(html, extra = '', klar = false) {
  const karte = $('#karte');
  karte.className = 'karte' + (extra ? ' ' + extra : '');   // Sonderklassen zurücksetzen
  karte.innerHTML = html;
  const overlay = $('#overlay');
  overlay.classList.toggle('klar', klar);   // nicht abdunkeln, Karte tiefer (Einhorn)
  overlay.classList.add('offen');
}
$('#overlay').addEventListener('click', () => $('#overlay').classList.remove('offen'));
document.addEventListener('keydown', (e) => {
  const buchOffen = $('#buch-overlay').classList.contains('offen');
  if (e.key === 'Escape') {
    $('#overlay').classList.remove('offen');
    $('#buch-overlay').classList.remove('offen');
  }
  if (buchOffen && e.key === 'ArrowLeft')  buchBlaettern(-1);
  if (buchOffen && e.key === 'ArrowRight') buchBlaettern(1);
});

// Wartet auf einen Klick auf `el` (oder Escape), dann läuft `aufhebbar` —
// zum Schließen einer Einblendung, die stehen bleiben soll, bis man klickt.
function naechsterKlick(el, aufhebbar) {
  return new Promise((resolve) => {
    const weiter = () => {
      el.removeEventListener('click', weiter);
      document.removeEventListener('keydown', aufEsc);
      if (aufhebbar) aufhebbar();
      resolve();
    };
    const aufEsc = (e) => { if (e.key === 'Escape') weiter(); };
    el.addEventListener('click', weiter, { once: true });
    document.addEventListener('keydown', aufEsc);
  });
}

// Der Abschied eines zufriedenen Drachen — bleibt stehen, bis geklickt wird.
function zeigeAbschied(text) {
  karteZeigen(`
    <p class="abschied-text">${text}</p>
    <div class="weiter">Klick zum Weitermachen</div>
  `);
  const overlay = $('#overlay');
  return naechsterKlick(overlay, () => overlay.classList.remove('offen'));
}

// Beliebiger Text auf der Karte, bleibt bis zum Klick — mit eigenem Hinweis.
function zeigeKarteKlick(html, cta = 'Klick zum Weitermachen', klar = false) {
  karteZeigen(`
    <p class="abschied-text">${html}</p>
    <div class="weiter">${cta}</div>
  `, '', klar);
  const overlay = $('#overlay');
  return naechsterKlick(overlay, () => overlay.classList.remove('offen'));
}

// Ein missglücktes Bonbon — dieselbe Karte, nur rot. Bleibt bis zum Klick.
function zeigeFehlschlag(text) {
  karteZeigen(`
    <p class="abschied-text">${text}</p>
    <div class="weiter">Klick zum Weitermachen</div>
  `, 'fehl');
  const overlay = $('#overlay');
  return naechsterKlick(overlay, () => overlay.classList.remove('offen'));
}

// Meldet, welche Zutat gerade dagelassen wurde und was sie ist —
// bleibt stehen, bis geklickt wird.
function zeigeGeschenk(zutatId, wer) {
  const z = ZUTATEN[zutatId];
  karteZeigen(`
    <p class="geschenk-titel">${wer} hat <strong>${z.name}</strong> für dich dagelassen.</p>
    <p>${z.beschreibung}</p>
    <div class="weiter">Klick zum Weitermachen</div>
  `);
  const overlay = $('#overlay');
  return naechsterKlick(overlay, () => overlay.classList.remove('offen'));
}

// ============================================================
//  Schale befüllen
// ============================================================
function inSchale(id, typ) {
  if (state.wartet) return;

  if (typ === 'binder') {
    state.schale.binder = id;
  } else {
    const frei = state.schale.zutat.indexOf(null);
    if (frei === -1) return;                       // beide Mulden voll
    if (state.schale.zutat.includes(id)) return;   // nicht doppelt
    state.schale.zutat[frei] = id;
  }
  state.bonbon = null;                    // Schüsselinhalt geändert → Bonbon neu
  if (typ !== 'binder') zahnOrakel(id);   // die Drachenzahn-Kette „spürt" die Zutat
  schaleZeichnen();
}

// Die Drachenzahn-Kette (nach dem Jungdrachen) leuchtet manchmal grün oder
// rot — je nachdem, ob die gerade gelegte Zutat zum Drachen passt. Nicht
// immer, damit es nicht zu einfach wird, und sie lügt nie: Rot heißt echter
// Verstoß, Grün heißt aktiv erfüllte Forderung.
function zahnOrakel(zutatId) {
  if (!state.mausHatZahn) return;
  if (!state.aktVariante || !state.aktVariante.bedingungen) return;
  if (Math.random() > 0.45) return;            // reagiert nur manchmal
  const z = ZUTATEN[zutatId];
  if (!z) return;

  let rot = false, gruen = false;
  for (const b of state.aktVariante.bedingungen) {
    switch (b.typ) {
      case 'verbiete_waerme_ueber': if (z.waerme >  b.wert) rot = true; break;
      case 'verbiete_waerme_unter': if (z.waerme <  b.wert) rot = true; break;
      case 'verlange_klang':        (z.klang !== b.wert) ? rot = true : gruen = true; break;
      case 'verbiete_klang':        if (z.klang === b.wert) rot = true; break;
      case 'verlange_herkunft':     (z.herkunft !== b.wert) ? rot = true : gruen = true; break;
      case 'verbiete_herkunft':     if (z.herkunft === b.wert) rot = true; break;
      case 'verlange_oberflaeche':  (z.oberflaeche !== b.wert) ? rot = true : gruen = true; break;
      case 'verbiete_oberflaeche':  if (z.oberflaeche === b.wert) rot = true; break;
    }
  }
  const klasse = rot ? 'zahn-rot' : (gruen ? 'zahn-gruen' : null);
  if (!klasse) return;
  const m = $('#maus');
  m.classList.remove('zahn-gruen', 'zahn-rot');
  void m.offsetWidth;
  m.classList.add(klasse);
  clearTimeout(m._zahnTimer);
  m._zahnTimer = setTimeout(() => m.classList.remove('zahn-gruen', 'zahn-rot'), 1400);
}

function ausSchale(slot) {
  if (state.wartet) return;
  if (slot === 'binder') state.schale.binder = null;
  else state.schale.zutat[slot] = null;
  state.bonbon = null;                    // Schüsselinhalt geändert → Bonbon neu
  schaleZeichnen();
}

function schaleZeichnen() {
  const mulden = document.querySelectorAll('.mulde');
  let zi = 0;
  mulden.forEach((m) => {
    const typ = m.dataset.typ;
    let id = null, slot;
    if (typ === 'binder') { id = state.schale.binder; slot = 'binder'; }
    else { slot = zi; id = state.schale.zutat[zi]; zi++; }

    if (id) {
      m.innerHTML = `<div class="glas">${glasSVG(id)}</div>`;
      m.onclick = () => ausSchale(slot);
    } else {
      m.innerHTML = `<span class="platzhalter">${typ === 'binder' ? 'Binder' : 'Zutat'}</span>`;
      m.onclick = null;
    }
  });

  // Gläser im Regal ausgrauen, die schon in der Schale liegen
  const drin = [state.schale.binder, ...state.schale.zutat].filter(Boolean);
  document.querySelectorAll('.fach').forEach((g) => {
    g.classList.toggle('leer', drin.includes(g.dataset.id));
  });

  const fertig = state.schale.binder && state.schale.zutat.every(Boolean);
  $('#mischen').disabled = !fertig || state.wartet;
  document.querySelectorAll('.mulde').forEach((m) => m.classList.toggle('bereit', fertig));

  // Der Sud im Topf bekommt Farbe und Textur des fertigen Bonbons.
  const topf = $('#topf');
  if (fertig) {
    $('#topf-inhalt').innerHTML = topfTextur();
    topf.classList.add('gefuellt');
  } else {
    $('#topf-inhalt').innerHTML = '';
    topf.classList.remove('gefuellt');
  }
}

// ============================================================
//  Drache auftreten lassen
// ============================================================
// Bücher rechts: nur die, die dieser Drache braucht — steht unabhängig
// vom Auftritt, damit es schon vor dem allerersten Drachen (während des
// Einhorn-Besuchs) im Regal steht.
function buecherBauen(d) {
  const brett = $('#brett-buecher');
  brett.innerHTML = '';
  // Immer nur drei Rücken: Zutaten, Binder, Drachen. Der Drachen-Rücken
  // öffnet das drachenspezifische Buch (Blättern zeigt ggf. weitere).
  const drachenBuch = d.buecher.find((k) => k !== 'zutatenkunde' && k !== 'binderkunde');
  const ruecken = [
    { label: 'ZUTATEN', key: 'zutatenkunde' },
    { label: 'BINDER',  key: 'binderkunde' },
    { label: 'DRACHEN', key: drachenBuch },
  ].filter((r) => r.key && BUCHWISSEN[r.key]);

  ruecken.forEach(({ label, key }) => {
    const el = document.createElement('div');
    el.className = 'buch neu';
    el.dataset.kurz = label;
    el.onclick = () => { el.classList.remove('neu'); buchOeffnen(key); };
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      el.classList.remove('neu');
      buchOeffnen(key);
    });
    brett.appendChild(el);
  });
}

// Manche Drachen bringen ihr Wetter immer mit.
const WETTER_FEST = {
  schlaefer: 'nebel',              // Nebeldrache: immer Nebel
  wasserschlangendrache: 'regen',  // Wasserdrache: immer Regen
};

// Manchmal zieht draußen Wetter auf, während ein Drache da ist —
// zufällig, selten, nur einer der drei Effekte auf einmal. Feste Drachen
// bringen ihr Wetter dagegen jedes Mal mit.
function wetterZeigen() {
  const wetter = $('#wetter');
  wetter.className = '';
  clearInterval(wetter._blitzTimer);

  const fest = WETTER_FEST[state.drache];
  if (fest === 'nebel') { wetter.classList.add('aktiv', 'nebel'); return; }
  if (fest === 'regen') { wetter.classList.add('aktiv', 'regen'); return; }   // Regen ohne Blitz

  const wahl = Math.random();
  if (wahl < 0.14) {
    // Gewitter: Regen und Blitz immer zusammen
    wetter.classList.add('aktiv', 'regen');
    const schlag = () => { wetter.classList.remove('blitz'); void wetter.offsetWidth; wetter.classList.add('blitz'); };
    schlag();
    wetter._blitzTimer = setInterval(() => { if (Math.random() < 0.3) schlag(); }, 3200);
  } else if (wahl < 0.24) {
    wetter.classList.add('aktiv', 'nebel');
  }
}
function wetterVerstecken() {
  const wetter = $('#wetter');
  clearInterval(wetter._blitzTimer);
  wetter.className = '';
}

// Kann dem aktuellen Drachen gerade Schneckenschleim direkt gereicht werden?
// (Er nimmt Schleim, der Spieler hat welchen, und der Drache hat sein
//  Dankgeschenk noch nicht dagelassen.)
function kannSchleimGeben() {
  const d = state.drache && DRACHEN[state.drache];
  return !!(d && d.extraSchleim
    && state.freigeschaltet.has('schneckenschleim')
    && !state.freigeschaltet.has(d.extraSchleim)
    && !state.wartet);
}

// Hint: die Tischschnecke leuchtet grünlich, sobald man dem Drachen ihren
// Schleim reichen könnte — ohne Knopf, ohne Text.
function schneckenHintAktualisieren() {
  $('#schnecke').classList.toggle('hint', kannSchleimGeben());
}

// Feinjustierung einzelner Drachen: Größe (scale, um die Loch-Mitte 380|178)
// und Verschiebung (dx/dy in Loch-Koordinaten). Alles andere bleibt 1:1.
const DRACHEN_ANPASSUNG = {
  schlaefer:       { scale: 0.70 },
  walddrache:      { scale: 0.85, dy: 20 },
  herzchendrache:  { scale: 1.30, dy: -15 },
  rosendrache:     { scale: 1.30 },
  monddrache:      { scale: 0.80 },
  jungdrache:      { scale: 0.90 },
  sonnendrache:    { scale: 0.85 },
  rauchdrachin:    { dy: 20 },
  schneckendrache: { dy: -5 },
};

// Hebt die Partikel (Schwaden, Teilchen, Staub) aus der schwebenden Gruppe
// zu ihrem Elternteil — so behalten sie ihre Anpassung (Skalierung/Position),
// bewegen sich aber NICHT mit dem sanften Schweben des Kopfes mit.
function partikelFreistellen(svg) {
  const float = svg.querySelector('.dr-schweben');
  if (!float) return;
  const elternteil = float.parentNode;
  float.querySelectorAll('.dr-schwaden, .dr-teilchen, .dr-partikel, .staubteilchen')
    .forEach((el) => elternteil.appendChild(el));
}

function drachenAuftritt(eintrag) {
  const entry = typeof eintrag === 'string' ? { id: eintrag, dep: false } : eintrag;
  const id = entry.id;
  state.drache = id;
  const d = DRACHEN[id];
  state.aktVariante = drachenVariante(entry);       // Satz + Anforderung dieses Auftritts
  state.auftritte[id] = (state.auftritte[id] || 0) + 1;

  const svg = $('#drache-svg');
  const a = DRACHEN_ANPASSUNG[id] || {};
  const k = a.scale || 1, dx = a.dx || 0, dy = a.dy || 0;
  // Ganz subtiles Schweben — Variante deterministisch aus dem Namen, damit
  // jeder Drache immer dieselbe, zu ihm passende Bewegung hat. Die Schwebe-
  // Gruppe liegt INNEN, damit die Partikel danach freigestellt werden können.
  const schwebIndex = [...id].reduce((s, c) => s + c.charCodeAt(0), 0) % 3;
  const kern = `<g class="dr-schweben schweb-${schwebIndex}">${DRACHEN_SVG[id]}</g>`;
  svg.innerHTML =
    (k !== 1 || dx || dy)
      ? `<g transform="translate(${380 + dx} ${178 + dy}) scale(${k}) translate(-380 -178)">${kern}</g>`
      : kern;
  partikelFreistellen(svg);
  svg.classList.remove('kommt');
  svg.classList.toggle('ohne-partikel', id === 'schlaefer');   // Nebeldrache: keine Schwaden-Partikel
  void svg.offsetWidth;
  svg.classList.add('kommt');
  $('#schlitz').style.setProperty('--drachenfarbe', d.farbe || '110,160,155');
  $('#loch-glut').style.setProperty('--drachenfarbe', d.farbe || '110,160,155');
  $('#schlitz').classList.add('aktiv');
  $('#loch-glut').classList.add('aktiv');
  wetterZeigen();

  const rede = $('#rede');
  rede.classList.remove('da');
  $('#wunsch').innerHTML = `„${state.aktVariante.wunsch}“`;
  rede.classList.toggle('hell', d.stimme === 'hell');
  rede.classList.toggle('mitte', d.stimme === 'hell');
  requestAnimationFrame(() => rede.classList.add('da'));

  buecherBauen(d);
  schneckenHintAktualisieren();
}

// ============================================================
//  Prüfen
// ============================================================
function bonbonEigenschaften() {
  const binder = BINDER[state.schale.binder];
  const zutaten = state.schale.zutat.map((z) => ZUTATEN[z]);
  const daempft = binder.effekt === 'daempft_klang';
  const kuehlt = binder.effekt === 'kuehlt_ab';

  return zutaten.map((z) => ({
    name: z.name,
    waerme: kuehlt ? Math.max(-2, z.waerme - 1) : z.waerme,
    klang: daempft ? 'stumm' : z.klang,
    herkunft: z.herkunft,
    oberflaeche: z.oberflaeche,
  }));
}

function pruefen() {
  const teile = bonbonEigenschaften();

  for (const b of state.aktVariante.bedingungen) {
    let ok = true;
    switch (b.typ) {
      case 'verbiete_waerme_ueber':  ok = teile.every((t) => t.waerme <= b.wert); break;
      case 'verbiete_waerme_unter':  ok = teile.every((t) => t.waerme >= b.wert); break;
      case 'verlange_klang':         ok = teile.every((t) => t.klang === b.wert); break;
      case 'verbiete_klang':         ok = teile.every((t) => t.klang !== b.wert); break;
      case 'verlange_herkunft':      ok = teile.every((t) => t.herkunft === b.wert); break;
      case 'verbiete_herkunft':      ok = teile.every((t) => t.herkunft !== b.wert); break;
      case 'verlange_oberflaeche':   ok = teile.every((t) => t.oberflaeche === b.wert); break;
      case 'verbiete_oberflaeche':   ok = teile.every((t) => t.oberflaeche !== b.wert); break;
    }
    if (!ok) return { erfolg: false, text: b.grund };
  }
  return { erfolg: true, text: state.aktVariante.belohnung };
}

// ============================================================
//  Übergabe — die Maus dreht sich um
// ============================================================
// Schnecke auf dem Tisch: Leuchtet sie grün (Hint), reicht ein Klick ihren
// Schleim direkt dem Schneckendrachen — ganz ohne Text. Sonst streift der
// erste Klick einmalig Schneckenschleim ab (mit kurzer Erklärung).
$('#schnecke').addEventListener('click', (e) => {
  e.stopPropagation();
  if (state.wartet) return;

  if (kannSchleimGeben()) {                       // Schleim dem Drachen reichen — kein Text
    const d = DRACHEN[state.drache];
    if (zutatFreischalten(d.extraSchleim)) state.freigeschaltet.add(d.extraSchleim);
    schneckenHintAktualisieren();
    return;
  }

  if (state.freigeschaltet.has('schneckenschleim')) return;   // schon abgestrichen
  if (!zutatFreischalten('schneckenschleim')) return;          // rechtes Regal voll
  state.freigeschaltet.add('schneckenschleim');
  zeigeGeschenk('schneckenschleim', 'Die Schnecke');
  schneckenHintAktualisieren();
});

// Ohrensessel: Klick lässt die Maus sich hinsetzen, erneuter Klick auf.
$('#ohrensessel').addEventListener('click', (e) => {
  e.stopPropagation();
  if (state.wartet) return;
  const m = $('#maus');
  m.classList.add('geht-sessel');          // langsame Transition — auch für den Rückweg
  m.classList.toggle('sitzt');
  clearTimeout(m._sesselTimer);
  m._sesselTimer = setTimeout(() => m.classList.remove('geht-sessel'), 1550);
});

$('#mischen').addEventListener('click', async () => {
  if (state.wartet) return;
  state.wartet = true;
  $('#mischen').disabled = true;
  buehne.classList.add('wartet');
  $('#maus').classList.remove('sitzt');   // falls sie im Sessel saß: aufstehen
  schneckenHintAktualisieren();           // Hint aus, solange gemischt wird

  // 0. Rühren — kein Arm, nur der Topf vor ihr dampft und glitzert
  $('#maus').classList.add('ruehrt');
  $('#topf').classList.add('aktiv');
  await warte(1100);
  $('#maus').classList.remove('ruehrt');
  // Der Topf bleibt vor der Maus stehen, bis der Vogel bei ihr war.

  // 0b. Der Vogel fliegt aus dem Käfig zur Maus und sammelt das Bonbon ein —
  // es liegt ab jetzt sichtbar in seinem Körbchen und reist so mit.
  await vogelHolt();
  vogelBonbonZeigen();

  // 1. Umdrehen — die Maus dreht sich um und schaut dem Boten nach
  $('#maus').innerHTML = MAUS_HINTEN;
  $('#maus').classList.add('gedreht');
  await warte(700);

  // 1b. Der Vogel fliegt mit dem Bonbon los — die Schale ist jetzt leer
  // und rückt zur Seite, während er hinauf zum Drachen trägt.
  $('#topf-inhalt').innerHTML = '';
  $('#topf').classList.remove('gefuellt');
  const bringt = vogelBringt();
  await warte(250);
  $('#topf').classList.remove('aktiv');   // leer → zurück an die Seite
  await bringt;

  // 2. Übergabe: das Bonbon glüht im Körbchen vor dem Drachen auf
  $('#vogel').classList.add('uebergabe');
  await warte(1500);   // Bonbon glüht einen Moment, bevor das Urteil kommt
  $('#vogel').classList.remove('uebergabe');

  // 3. Urteil
  const e = pruefen();
  if (e.erfolg) {
    vogelBonbonVerstecken();          // der Drache nimmt das Bonbon an
    // Beim Jungdrachen fällt der Wackelzahn auf die Platte — die Maus
    // hebt ihn danach auf und trägt ihn als Kette.
    let fallZahn = null;
    if (state.drache === 'jungdrache' && !state.mausHatZahn) {
      fallZahn = await zahnFaellt();
      state.mausHatZahn = true;
      state.zahnZeremonieAusstehend = true;   // Kette kommt gleich groß in die Bildmitte
    }
    await zeigeAbschied(e.text);
    if (fallZahn) fallZahn.remove();   // die Maus nimmt ihn an sich
  } else {
    rueckschlag();
    vogelBonbonVerstecken();          // Bonbon weg, bevor der Text kommt
    await warte(500);   // kurz die Wucht des Rucks spüren lassen
    await zeigeFehlschlag(e.text);              // rote Karte, gleiche Machart wie der Abschied
  }

  // 4. Aufräumen
  vogelHeim();                        // der Vogel fliegt zurück in seinen Käfig
  mausVornZeichnen();                 // Maus dreht sich um (Kette folgt gleich)
  $('#maus').classList.remove('gedreht');

  // Freude bei Erfolg — außer beim Jungdrachen, da kommt gleich die Kette.
  if (e.erfolg && !state.zahnZeremonieAusstehend) {
    nochmal($('#maus'), 'jubelt');
    setTimeout(() => $('#maus').classList.remove('jubelt'), 1000);
  }

  // Zahnkette-Zeremonie: einmal groß in der Bildmitte, dann klein auf die Maus.
  if (state.zahnZeremonieAusstehend) {
    state.zahnZeremonieAusstehend = false;
    await warte(300);
    await zahnZeremonie();            // große Kette schrumpft auf den Hals
    mausVornZeichnen();               // ab jetzt trägt die Maus die Kette
    $('#maus').classList.add('zahn-neu');
    setTimeout(() => $('#maus').classList.remove('zahn-neu'), 1600);
  }

  buehne.classList.remove('wartet');
  state.schale = { binder: null, zutat: [null, null] };
  state.bonbon = null;
  schaleZeichnen();
  versteckeErgebnis();
  state.wartet = false;

  if (e.erfolg) {
    const geschenk = DRACHEN[state.drache].geschenk;
    if (geschenk && !state.freigeschaltet.has(geschenk) && zutatFreischalten(geschenk)) {
      state.freigeschaltet.add(geschenk);
      await zeigeGeschenk(geschenk, DRACHEN[state.drache].name);
    }
    state.index++;
    if (state.index === 3) $('#schnecke').classList.add('da');
    await warte(600);
    // Abflug — der Kopf gleitet weg, der Schwanz wedelt noch kurz hinterher
    $('#drache-svg').classList.add('geht');
    $('#schlitz').classList.add('geht');
    $('#loch-glut').classList.add('geht');
    await warte(850);
    $('#drache-svg').classList.remove('geht');
    $('#schlitz').classList.remove('geht');
    $('#loch-glut').classList.remove('geht');
    $('#drache-svg').innerHTML = '';
    $('#schlitz').classList.remove('aktiv');
    $('#loch-glut').classList.remove('aktiv');
    $('#rede').classList.remove('da');
    wetterVerstecken();
    $('#schnecke').classList.remove('hint');

    if (state.index < state.sequenz.length) {
      await warte(500);
      // Kapitelwechsel: die Maus geht schlafen, morgens schaut das Einhorn vorbei.
      const kapNr = state.kapitelGrenzen.indexOf(state.index);
      if (kapNr !== -1) await schlafenGehen(kapNr);
      drachenAuftritt(state.sequenz[state.index]);
    } else {
      // Alle drei Kapitel geschafft — Schlusswort und Abspann.
      await spielEnde();
    }
  }
  schaleZeichnen();
});

function zeigeErgebnis(t, erfolg = true) {
  const el = $('#ergebnis');
  el.innerHTML = t;
  el.classList.toggle('fehl', !erfolg);
  el.classList.add('sichtbar');
}

// Animation neu starten: Klasse weg, Reflow erzwingen, Klasse wieder dran.
function nochmal(el, klasse) {
  el.classList.remove(klasse);
  void el.offsetWidth;
  el.classList.add(klasse);
}

function rueckschlag() {
  nochmal($('#rahmen'), 'ruck');
  nochmal($('#schreck'), 'blitz');
  nochmal($('#maus'), 'zuckt');

  const schlitz = $('#schlitz');
  schlitz.classList.add('zurueck');
  setTimeout(() => schlitz.classList.remove('zurueck'), 950);
}

function versteckeErgebnis() {
  $('#ergebnis').classList.remove('sichtbar');
}
const warte = (ms) => new Promise((r) => setTimeout(r, ms));

// Der Wackelzahn fällt dem Jungdrachen aus dem Maul auf die Tischplatte.
// Liefert das Element zurück, damit es später wieder entfernt werden kann.
async function zahnFaellt() {
  const alt = document.getElementById('fall-zahn');
  if (alt) alt.remove();
  const zahn = document.createElement('div');
  zahn.id = 'fall-zahn';
  $('#buehne').appendChild(zahn);
  requestAnimationFrame(() => zahn.classList.add('faellt'));
  await warte(1200);
  return zahn;
}

// ============================================================
//  Start
// ============================================================
mausVornZeichnen();

// Der Vogel sitzt von Anfang an im Käfig vor dem Astloch.
$('#vogelkaefig').innerHTML = VOGELKAEFIG;
$('#vogel').innerHTML = VOGEL;

// Holzwand zeichnen und das Loch in seine gewachsene Form bringen
$('#wand').innerHTML = wandSVG();
$('#schlitz').style.clipPath = `path("${LOCH_PFAD}")`;
$('#loch-glut').innerHTML =
  `<path d="${LOCH_PFAD}" fill="none" stroke="rgba(255,255,255,.10)" stroke-width="3"/>`;

// Drei Kapitel (10 + 10 + 9 = 29 Auftritte) — alle Drachen mit Grund- und
// Zweitwunsch, Story-Drachen zusätzlich mit Geschenk-Anliegen; siehe kapitelBauen.
state.sequenz = kapitelBauen();

// Sternenhimmel für die Schlaf-Übergänge vorbereiten.
nachthimmelBauen();

regalBauen();
schaleZeichnen();

// Die Bücher des ersten Drachen stehen schon im Regal, bevor überhaupt
// irgendwer am Astloch erscheint — auch während des Einhorn-Besuchs.
buecherBauen(DRACHEN[state.sequenz[0].id]);

// Das Einhorn schaut immer als Erstes vorbei und erklärt das Spiel.
let testModusBereit = false;
(async () => {
  await einhornBesuch();
  drachenAuftritt(state.sequenz[0]);
  testModusBereit = true;
})();

// Testmodus: Taste "t" schaltet frei durch alle Drachen, unabhängig
// vom eigentlichen Spielfortschritt — nur zum Ausprobieren der Grafiken.
let testDracheIndex = -1;
const testDrachenListe = Object.keys(DRACHEN_SVG);
window.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() !== 't' || !testModusBereit) return;
  testDracheIndex = (testDracheIndex + 1) % testDrachenListe.length;
  drachenAuftritt(testDrachenListe[testDracheIndex]);
});
