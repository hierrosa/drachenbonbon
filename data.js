// ============================================================
//  BONBONS FÜR DRACHEN — Spieldaten
//  Alles Inhaltliche liegt hier. Neue Drachen und Zutaten
//  dazuschreiben, ohne Spielcode anzufassen.
// ============================================================

// --- Achsen (für Spieler unsichtbar) ------------------------
// waerme:     -2 eisig | -1 kühl | 0 neutral | 1 warm | 2 glühend
// klang:      stumm | knistern | knirschen
// herkunft:   himmel | erde | wasser
// oberflaeche: glatt | rauh | pudrig   (wie es sich anfühlt)

export const BINDER = {
  karamell: {
    name: "Mondkaramell",
    bild: "karamell",
    beschreibung:
      "Zäh und blass wie ein bewölkter Mond. Riecht nach fast nichts, " +
      "und genau das macht es brauchbar: es lässt jeder Zutat ihren Willen.",
    // verändert nichts
    effekt: null,
  },
  sirup: {
    name: "Daunensirup",
    bild: "sirup",
    beschreibung:
      "Weich wie ein Daunenkissen und fast geräuschlos. Wer ihn " +
      "hinunterschluckt, hört für einen Moment sein eigenes Herz nicht mehr.",
    // dämpft alle Geräusche im Bonbon
    effekt: "daempft_klang",
  },
  frostharz: {
    name: "Frostharz",
    bild: "frostharz",
    beschreibung:
      "Kalt wie ein Winterast, noch bevor die Sonne ihn erreicht. Zieht " +
      "die Wärme aus allem, was hineingerührt wird.",
    // kühlt beide Zutaten um eine Stufe ab
    effekt: "kuehlt_ab",
  },
};

export const ZUTATEN = {
  gewitterzucker: {
    name: "Gewitterzucker",
    bild: "gewitterzucker",
    beschreibung:
      "Scharfkantige Kristalle, die auf der Zunge kleine Blitze schlagen. " +
      "Gesammelt in der Minute, bevor der Regen kommt.",
    waerme: 1,
    klang: "knistern",
    herkunft: "himmel",
    oberflaeche: "rauh",
  },
  funkenpollen: {
    name: "Funkenpollen",
    bild: "funkenpollen",
    beschreibung:
      "Aus Blüten, die nur auf Brandflächen wachsen. Feiner Staub, der " +
      "beim Öffnen des Glases aufwirbelt und nach heißem Blech riecht.",
    waerme: 2,
    klang: "knistern",
    herkunft: "himmel",
    oberflaeche: "pudrig",
  },
  aschenkirsche: {
    name: "Aschenkirsche",
    bild: "aschenkirsche",
    beschreibung:
      "Außen verkohlt, innen noch süß und glatt wie Wachs. Sie gibt keinen " +
      "Laut von sich, aber sie ist warm, wenn man sie zu lange hält.",
    waerme: 2,
    klang: "stumm",
    herkunft: "erde",
    oberflaeche: "glatt",
  },
  nebelbeere: {
    name: "Nebelbeere",
    bild: "nebelbeere",
    beschreibung:
      "Man sieht sie nur aus dem Augenwinkel. Kühl und glatt wie ein " +
      "Morgen am Wasser und vollkommen still.",
    waerme: -1,
    klang: "stumm",
    herkunft: "wasser",
    oberflaeche: "glatt",
  },
  eiszahnminze: {
    name: "Eiszahnminze",
    bild: "eiszahnminze",
    beschreibung:
      "Rauhe Eiskristalle, die die Zähne knacken lassen. Wächst nur dort, " +
      "wo das Wasser im Schatten steht und morgens eine Haut hat.",
    waerme: -2,
    klang: "knirschen",
    herkunft: "wasser",
    oberflaeche: "rauh",
  },
  wurzelholz: {
    name: "Wurzelholzsplitter",
    bild: "wurzelholz",
    beschreibung:
      "Schmeckt nach altem Keller. Rauh und splittrig zwischen den " +
      "Backenzähnen, und war noch nie in seinem Leben oben.",
    waerme: 0,
    klang: "knirschen",
    herkunft: "erde",
    oberflaeche: "rauh",
  },

  // --- Geschenke — erscheinen erst, wenn ein Drache sie dalässt ---
  sturmkraut: {
    name: "Sturmkraut",
    bild: "sturmkraut",
    beschreibung:
      "Ein Bündel silbriger Blätter, kopfüber an der Wand getrocknet. " +
      "Raschelt trocken zwischen den Pfoten, riecht nach aufziehendem Wind.",
    waerme: 0,
    klang: "knirschen",
    herkunft: "himmel",
    oberflaeche: "rauh",
    geheim: true,
  },
  schattenmelisse: {
    name: "Schattenmelisse",
    bild: "schattenmelisse",
    beschreibung:
      "Wächst nur dort, wo nie die Sonne hinkommt. Getrocknet zerfällt " +
      "sie fast zu Staub zwischen den Fingern, kühl und vollkommen still.",
    waerme: -1,
    klang: "stumm",
    herkunft: "erde",
    oberflaeche: "pudrig",
    geheim: true,
  },
  glutfenchel: {
    name: "Glutfenchel",
    bild: "glutfenchel",
    beschreibung:
      "Federige orangerote Blätter, die selbst getrocknet noch warm " +
      "wirken. Zwischen den Zähnen knistert er wie glimmende Asche.",
    waerme: 2,
    klang: "knistern",
    herkunft: "erde",
    oberflaeche: "rauh",
    geheim: true,
  },
  sonnentraenen: {
    name: "Sonnentränen",
    bild: "sonnentraenen",
    beschreibung:
      "Klare, glatte Tropfen, als hätte die Mittagssonne selbst geweint. " +
      "Warm und still, bis man näher hinhört — dann knistern sie leise.",
    waerme: 2,
    klang: "knistern",
    herkunft: "himmel",
    oberflaeche: "glatt",
    geheim: true,
  },
  wuestenglas: {
    name: "Wüstenglas",
    bild: "wuestenglas",
    beschreibung:
      "Sand, der einmal so heiß wurde, dass er schmolz und wieder " +
      "erstarrte. Glatt, warm und vollkommen lautlos.",
    waerme: 1,
    klang: "stumm",
    herkunft: "erde",
    oberflaeche: "glatt",
    geheim: true,
  },
  tannenharz: {
    name: "Tannenharz",
    bild: "tannenharz",
    beschreibung:
      "Zäh und kühl, aus der Rinde eines Baums getreten, der nie die " +
      "Sonne sah. Splittert rauh und leise zwischen den Zähnen.",
    waerme: -1,
    klang: "knirschen",
    herkunft: "erde",
    oberflaeche: "rauh",
    geheim: true,
  },
  sternenstaub: {
    name: "Sternenstaub",
    bild: "sternenstaub",
    beschreibung:
      "Niemand weiß, wo er herkommt, nur dass er manchmal am Astloch " +
      "liegt, nachdem etwas Seltenes vorbeigekommen ist. Glatt und kühl " +
      "in der Hand, und er knistert wie ferne Feuerwerke.",
    waerme: 1,
    klang: "knistern",
    herkunft: "himmel",
    oberflaeche: "glatt",
    geheim: true,
  },
  // Von der Schnecke auf dem Tisch abgestrichen (Klick auf die Schnecke).
  schneckenschleim: {
    name: "Schneckenschleim",
    bild: "schneckenschleim",
    beschreibung:
      "Frisch von der Tischschnecke abgestrichen. Kühl, glatt und " +
      "vollkommen lautlos — er dämpft jedes Geräusch im Bonbon.",
    waerme: 0,
    klang: "stumm",
    herkunft: "wasser",
    oberflaeche: "glatt",
    geheim: true,
  },
  // Der Schneckendrache lässt sie als Dank zurück.
  schneckenperle: {
    name: "Schneckenperle",
    bild: "schneckenperle",
    beschreibung:
      "Eine glatte, schimmernde Perle, die der Schneckendrache in " +
      "vielen stillen Jahren gerollt hat. Sie knistert kaum hörbar.",
    waerme: 0,
    klang: "knistern",
    herkunft: "wasser",
    oberflaeche: "glatt",
    geheim: true,
  },
};

// --- Das Einhorn ----------------------------------------------
// Kein Rätsel, kein Drache. Es taucht selten zwischen den
// Besuchen auf, bleibt kurz und hinterlässt eine Kleinigkeit.
export const EINHORN = {
  name: "Ein Einhorn",
  stimme: "hell",
  // Beim allerersten Erscheinen erklärt es knapp, worum es geht —
  // auf zwei Karten verteilt.
  erklaerung: [
    "„Hallo Bonbonwaldmaus. Du machst die besten Drachenbonbons weit und breit.“",
    "„Drachen, die Hilfe brauchen, kommen zu dir, und du machst ihnen ein " +
    "Bonbon aus einem Binder und zwei Zutaten. Die Bücher hast du immer " +
    "parat, falls du mal was vergessen hast.“",
  ],
  auftritt:
    "Ein Schimmer im Astloch, der nichts mit Feuer zu tun hat. Etwas " +
    "Weißes, Falsches-hier-Wirkendes schiebt sich neugierig hindurch.",
  wunsch:
    "Es will nichts Bestimmtes. Es schaut sich einfach nur um — und " +
    "hinterlässt beim Gehen eine Kleinigkeit.",
  abschiedSelten:
    "Es schnaubt leise, lässt etwas Glänzendes am Rand des Lochs " +
    "zurück und ist verschwunden, bevor die Maus sich umdreht.",
  abschiedHaeufig:
    "Bevor es geht, streift es mit der Mähne über die Wand — irgendwo " +
    "im Holz bleibt etwas von seinem Glanz zurück.",

  // --- Kapitel-Übergänge: die Maus geht schlafen (zweimal) ---------
  schlafText: [
    "Die Maus hängt den letzten Kessel an den Haken. Draußen wird es " +
    "dunkel, die Sterne treten hervor, und sie kuschelt sich in den " +
    "Ohrensessel. Ein guter erster Tag.",
    "Wieder eine lange Reihe Drachen, wieder ein Bonbon nach dem anderen. " +
    "Müde und zufrieden schließt die Maus die Augen unter dem Sternenhimmel.",
  ],
  // Am Morgen schaut das Einhorn kurz vorbei — ohne etwas mitzubringen.
  morgenText: [
    "Guten Morgen! Heute kommen wieder ein paar Drachen vorbei. " +
    "Du schaffst das mit links.",
    "Fast geschafft, kleine Bonbonwaldmaus. Nur noch dieses letzte " +
    "Kapitel, dann hast du sie alle.",
  ],
  // Nach allen drei Kapiteln: Schlusswort und Abspann.
  schlusswort:
    "Alle Drachen im Wald sind versorgt. Keiner bekommt bessere " +
    "Drachenbonbons als von dir. Ruh dich jetzt aus — du hast es dir " +
    "verdient.",
  ende:
    "Die Maus klettert in den Ohrensessel, zieht die Decke bis zum Kinn " +
    "und schläft zufrieden ein. Der Vogel schlummert in seinem Käfig, " +
    "die Kerze flackert leise. Ende.",
};

// --- Drachen ------------------------------------------------
// bedingungen: Liste von Prüfungen. Alle müssen erfüllt sein.
//   verbiete_waerme_ueber / verbiete_waerme_unter
//   verlange_klang / verbiete_klang
//   verlange_herkunft / verbiete_herkunft
// Jede Bedingung hat einen 'grund' — der taucht auf, wenn
// der Drache ablehnt, und ist die Rückmeldung im Misserfolg.

export const DRACHEN = {
  rauchdrachin: {
    name: "Die alte Rauchdrachin",
    bild: "rauchdrachin",
    farbe: "196,138,66",
    stimme: "dunkel",
    geschenk: "sturmkraut",
    auftritt:
      "Der Schlitz füllt sich mit einem einzigen gelben Auge. " +
      "Rauch legt sich auf die Tischplatte.",
    wunsch: "Gib mir etwas, das schmeckt wie kurz bevor es blitzt.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_der_luft"],
    bedingungen: [
      {
        typ: "verbiete_waerme_unter",
        wert: 0,
        grund: "Sie zischt. Von innen löscht sie so etwas.",
      },
      {
        typ: "verlange_klang",
        wert: "knistern",
        grund: "Sie legt den Kopf schief. Sie hat nichts gehört.",
      },
      {
        typ: "verlange_herkunft",
        wert: "himmel",
        grund: "Sie schnaubt. Das hier hat nie den Boden verlassen.",
      },
      {
        typ: "verbiete_oberflaeche",
        wert: "glatt",
        grund: "Zu glatt. Das rutscht ihr einfach von der Zunge.",
      },
    ],
    loesung: ["karamell", "gewitterzucker", "funkenpollen"],
    belohnung:
      "Sie schließt das Auge und lässt den Rauch langsam entweichen. " +
      "Ein Geräusch wie ein sehr zufriedener Ofen.",
  },

  schlaefer: {
    name: "Der Schläfer",
    bild: "schlaefer",
    farbe: "159,192,187",
    stimme: "dunkel",
    auftritt:
      "Kein Kopf. Nur ein geschlossenes Lid im Dunkeln und Nebel, " +
      "der über die Kante kriecht.",
    wunsch: "Ich schlafe seit vierzig Jahren. Weck mich nicht.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_des_wassers"],
    bedingungen: [
      {
        typ: "verbiete_waerme_ueber",
        wert: 0,
        grund: "Der Nebel dünnt aus. Etwas darin erlischt.",
      },
      {
        typ: "verlange_klang",
        wert: "stumm",
        grund: "Ein Knacken. Das Lid hebt sich einen Spalt.",
      },
      {
        typ: "verlange_herkunft",
        wert: "wasser",
        grund: "Der Nebel weicht zurück. Das hier hat nie im Wasser gestanden.",
      },
    ],
    loesung: ["sirup", "nebelbeere", "eiszahnminze"],
    belohnung:
      "Nichts passiert. Der Nebel wird dichter, das Lid bleibt zu. " +
      "Das ist alles, was er zu geben hat — und es ist genug.",
  },

  jungdrache: {
    name: "Der Jungdrache",
    bild: "jungdrache",
    farbe: "126,190,104",
    stimme: "dunkel",
    auftritt:
      "Zu klein für den Schlitz. Er klettert halb hinein, rutscht ab, " +
      "versucht es nochmal. Ein Zahn wackelt.",
    wunsch: "Ich will was zum Draufbeißen! Aber nichts, was geflogen ist.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_der_erde"],
    bedingungen: [
      {
        typ: "verlange_klang",
        wert: "knirschen",
        grund: "Er kaut zweimal und guckt enttäuscht. Es hat nicht geknackt.",
      },
      {
        typ: "verbiete_waerme_ueber",
        wert: 1,
        grund: "Er hustet und reibt sich den Bauch. Zu heiß für ihn.",
      },
      {
        typ: "verbiete_herkunft",
        wert: "himmel",
        grund: "Er schiebt es mit der Schnauze weg. Das kam von oben.",
      },
      {
        typ: "verlange_oberflaeche",
        wert: "rauh",
        grund: "Zu glatt. Da ist nichts zum Draufbeißen.",
      },
    ],
    loesung: ["karamell", "wurzelholz", "eiszahnminze"],
    belohnung:
      "Er beißt zu, das Knirschen hallt im Baum. Der Wackelzahn " +
      "landet auf der Tischplatte. Er merkt es nicht.",
  },

  sonnendrache: {
    name: "Der Sonnendrache",
    bild: "sonnendrache",
    farbe: "255,196,80",
    stimme: "dunkel",
    geschenk: "sonnentraenen",
    auftritt:
      "Ein Schlitz voller gleißendem Licht. Man kann kaum hinsehen, " +
      "so heiß glüht seine Haut von innen.",
    wunsch: "Gib mir etwas, das schmeckt wie Mittagslicht auf der Haut.",
    buecher: ["zutatenkunde", "binderkunde", "sonnendrachen"],
    bedingungen: [
      {
        typ: "verbiete_waerme_unter",
        wert: 2,
        grund: "Er schnaubt enttäuscht. Das war nur lauwarm.",
      },
      {
        typ: "verbiete_klang",
        wert: "knirschen",
        grund: "Es soll auf der Zunge schmelzen, nicht krachen.",
      },
      {
        typ: "verbiete_oberflaeche",
        wert: "rauh",
        grund: "Zu rauh. Das kratzt statt zu schmelzen.",
      },
    ],
    loesung: ["karamell", "funkenpollen", "aschenkirsche"],
    belohnung:
      "Seine Haut leuchtet einen Moment heller auf, dann wird das Licht " +
      "weich. Es ist, als würde die Mittagssonne kurz lächeln.",
  },

  staubdrache: {
    name: "Der Staubdrache",
    bild: "staubdrache",
    farbe: "168,150,120",
    stimme: "dunkel",
    geschenk: "wuestenglas",
    auftritt:
      "Feiner Staub rieselt aus dem Schlitz, bevor überhaupt ein Kopf " +
      "sichtbar wird. Er bewegt sich, als wäre er aus loser Erde gefügt.",
    wunsch: "Gib mir etwas, das nach kühlem, altem Boden schmeckt.",
    buecher: ["zutatenkunde", "binderkunde", "staubdrachen"],
    bedingungen: [
      {
        typ: "verbiete_waerme_ueber",
        wert: -1,
        grund: "Er zerfällt zu Sand. Das hier war ihm zu warm.",
      },
      {
        typ: "verbiete_klang",
        wert: "knistern",
        grund: "Ein Knistern wirbelt ihn auf. Er will es ruhig.",
      },
    ],
    loesung: ["frostharz", "wurzelholz", "nebelbeere"],
    belohnung:
      "Er sackt in sich zusammen wie eine Sanddüne im Wind — zufrieden, " +
      "nicht zerstört. Der Staub legt sich langsam wieder.",
  },

  walddrache: {
    name: "Der Walddrache",
    bild: "walddrache",
    farbe: "90,120,68",
    stimme: "dunkel",
    geschenk: "tannenharz",
    auftritt:
      "Moos wächst am Rand des Lochs. Zwischen den Zähnen hängen " +
      "Farnwedel, die er gar nicht zu bemerken scheint.",
    wunsch: "Gib mir etwas, das nach Erde nach dem Regen schmeckt. Leise, bitte.",
    buecher: ["zutatenkunde", "binderkunde", "walddrachen"],
    bedingungen: [
      {
        typ: "verbiete_herkunft",
        wert: "himmel",
        grund: "Er wittert es und schüttelt sich. Das kam nie unter Bäumen vor.",
      },
      {
        typ: "verlange_klang",
        wert: "stumm",
        grund: "Ein Geräusch, und die Vögel im Geäst stieben auseinander.",
      },
      {
        typ: "verlange_oberflaeche",
        wert: "glatt",
        grund: "Etwas Rauhes. Er schreckt zurück, als hätte es geknackt.",
      },
    ],
    loesung: ["karamell", "aschenkirsche", "nebelbeere"],
    belohnung:
      "Er sinkt zurück ins Moos, lautlos wie er kam. Nur ein Farnwedel " +
      "wippt noch nach.",
  },

  herzchendrache: {
    name: "Der Herzchendrache",
    bild: "herzchendrache",
    farbe: "232,120,150",
    stimme: "dunkel",
    voraussetzung: "wuestenglas",
    auftritt:
      "Aus dem Schlitz schlägt ein Herzschlag, viel zu laut für ein so " +
      "kleines Wesen. Kleine Wärmewolken pulsieren im Takt dazu.",
    wunsch: "Gib mir etwas durch und durch Warmes, das nie im Wasser lag.",
    buecher: ["zutatenkunde", "binderkunde", "herzchendrachen"],
    bedingungen: [
      {
        typ: "verbiete_waerme_unter",
        wert: 1,
        grund: "Es fühlt sich kalt an. Sein Herzschlag stockt kurz.",
      },
      {
        typ: "verbiete_herkunft",
        wert: "wasser",
        grund: "Es schmeckt nach Teich. Sein Herz mag nichts Nasses.",
      },
    ],
    loesung: ["karamell", "funkenpollen", "aschenkirsche"],
    belohnung:
      "Der Herzschlag wird ruhig und satt. Für einen Moment glüht der " +
      "ganze Schlitz rosig.",
  },

  rosendrache: {
    name: "Der Rosendrache",
    bild: "rosendrache",
    farbe: "214,90,120",
    stimme: "dunkel",
    voraussetzung: "sonnentraenen",
    auftritt:
      "Zwischen aufgeplatzten Knospen schiebt sich eine Schnauze ins " +
      "Licht. Der Duft kommt an, bevor er selbst zu sehen ist.",
    wunsch: "Gib mir etwas vollkommen Stilles und ganz Glattes — sanft wie ein Blütenblatt.",
    buecher: ["zutatenkunde", "binderkunde", "rosendrachen"],
    bedingungen: [
      {
        typ: "verlange_klang",
        wert: "stumm",
        grund: "Ein Geräusch, und die Blütenblätter fallen erschrocken ab.",
      },
      {
        typ: "verlange_oberflaeche",
        wert: "glatt",
        grund: "Etwas Rauhes kratzt über die Blüten. Er schaudert.",
      },
    ],
    loesung: ["sirup", "aschenkirsche", "nebelbeere"],
    belohnung:
      "Neue Knospen öffnen sich rund um den Schlitz, eine nach der " +
      "anderen. Er duftet zufrieden vor sich hin.",
  },

  schneckendrache: {
    name: "Der Schneckendrache",
    bild: "schneckendrache",
    farbe: "143,168,110",
    stimme: "dunkel",
    // Extra: gib ihm direkt Schneckenschleim (Knopf), dann lässt er eine
    // Schneckenperle da — dafür muss nichts gemischt werden.
    extraSchleim: "schneckenperle",
    auftritt:
      "Es dauert. Erst rutscht eine glänzende Spur über die Kante, " +
      "dann, viel später, der Rest von ihm.",
    wunsch: "Gib mir etwas Stilles, Kühles vom Wasser. Ich habe Zeit.",
    buecher: ["zutatenkunde", "binderkunde", "schneckendrachen"],
    bedingungen: [
      {
        typ: "verlange_klang",
        wert: "stumm",
        grund: "Ein Geräusch, und er zieht sich einen halben Tag lang zurück.",
      },
      {
        typ: "verlange_herkunft",
        wert: "wasser",
        grund: "Er weicht zurück. Das kam aus der Luft oder dem Boden, nicht vom Wasser.",
      },
      {
        typ: "verbiete_waerme_ueber",
        wert: 0,
        grund: "Zu warm. Er zieht die Fühler ein.",
      },
    ],
    loesung: ["sirup", "nebelbeere", "eiszahnminze"],
    belohnung:
      "Er zieht sich in aller Ruhe zurück, eine glänzende Spur bleibt " +
      "am Rand des Lochs zurück.",
  },

  monddrache: {
    name: "Der Monddrache",
    bild: "monddrache",
    farbe: "170,190,220",
    stimme: "dunkel",
    auftritt:
      "Blasses Licht sickert aus dem Schlitz, kühl und ohne Wärme. " +
      "Kleine Funken schweben darin wie Staub im Mondlicht.",
    wunsch: "Gib mir etwas Kühles, das nie den Boden berührt hat.",
    buecher: ["zutatenkunde", "binderkunde", "monddrachen"],
    bedingungen: [
      {
        typ: "verbiete_waerme_ueber",
        wert: 0,
        grund: "Es wärmt ihn. Das Licht in ihm flackert unruhig.",
      },
      {
        typ: "verbiete_herkunft",
        wert: "erde",
        grund: "Er zieht sich zurück. Das kam aus dem Boden.",
      },
    ],
    loesung: ["frostharz", "gewitterzucker", "eiszahnminze"],
    belohnung:
      "Das Licht im Schlitz wird ruhig und silbern. Für einen Moment " +
      "spiegelt sich der ganze Baum darin.",
  },

  feuerschlangendrache: {
    name: "Der Feuerschlangendrache",
    bild: "feuerschlangendrache",
    farbe: "200,64,31",
    stimme: "dunkel",
    geschenk: "glutfenchel",
    auftritt:
      "Ein dünner, glühender Faden windet sich durchs Astloch — winzig, " +
      "kaum größer als die Maus selbst, aber er riecht nach heißem Blech.",
    wunsch: "Gib mir etwas, das knistert wie ein Funke, der gerade erst springt.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_der_luft"],
    bedingungen: [
      {
        typ: "verbiete_waerme_unter",
        wert: 1,
        grund: "Zu lau. Er züngelt enttäuscht in die Luft.",
      },
      {
        typ: "verlange_klang",
        wert: "knistern",
        grund: "Es soll knistern, nicht schweigen.",
      },
    ],
    loesung: ["karamell", "gewitterzucker", "funkenpollen"],
    belohnung:
      "Er schnellt einmal kurz hoch, als hätte ihn selbst ein Funke " +
      "erwischt, und züngelt zufrieden zurück ins Dunkel.",
  },

  wasserschlangendrache: {
    name: "Der Wasserschlangendrache",
    bild: "wasserschlangendrache",
    farbe: "47,127,146",
    stimme: "dunkel",
    geschenk: "schattenmelisse",
    auftritt:
      "Ein schmaler, kühler Schatten gleitet lautlos durchs Astloch — " +
      "winzig wie sein feuriger Gegenpart, aber ganz still.",
    wunsch: "Gib mir etwas, das kühl und still ist wie Wasser im Schatten.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_des_wassers"],
    bedingungen: [
      {
        typ: "verbiete_waerme_ueber",
        wert: -1,
        grund: "Zu warm. Er zuckt zurück ins Dunkel.",
      },
      {
        typ: "verlange_herkunft",
        wert: "wasser",
        grund: "Das kam nicht aus dem Wasser. Er misstraut es.",
      },
    ],
    loesung: ["karamell", "nebelbeere", "eiszahnminze"],
    belohnung:
      "Er kringelt sich einmal zufrieden zusammen und gleitet dann " +
      "ebenso lautlos zurück, wie er kam.",
  },

  zweikopfdrache: {
    name: "Der Zweikopfdrache",
    bild: "zweikopfdrache",
    farbe: "94,66,114",
    stimme: "dunkel",
    auftritt:
      "Zwei Köpfe drängen sich durchs Astloch, einer knapp hinter dem " +
      "anderen, und beide mustern die Maus mit demselben Blick.",
    wunsch: "Wir wollen etwas Rauhes, das nicht vom Himmel kam. Wir beide.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_der_erde", "drachen_des_wassers"],
    bedingungen: [
      {
        typ: "verlange_oberflaeche",
        wert: "rauh",
        grund: "Zu glatt. Beide Köpfe schütteln sich gleichzeitig.",
      },
      {
        typ: "verbiete_herkunft",
        wert: "himmel",
        grund: "Das kam von oben. Keiner der beiden Köpfe traut dem Himmel.",
      },
    ],
    loesung: ["karamell", "wurzelholz", "eiszahnminze"],
    belohnung:
      "Beide Köpfe nicken, kurz versetzt, als könnten sie sich nicht " +
      "einmal beim Zufriedensein einigen — dann ziehen sie sich zurück.",
  },
};

// --- Bücherwissen -------------------------------------------
// Steht im Regal rechts. Die harten Regeln, aus denen der
// Spieler den poetischen Wunsch übersetzt.

export const BUCHWISSEN = {
  zutatenkunde: {
    buch: "Von Zutaten und ihrer Art",
    text:
      "Gewitterzucker und Funkenpollen fielen beide aus dem Himmel und " +
      "knistern auf der Zunge — der Zucker ist bloß warm, der Pollen glüht. " +
      "Aschenkirsche kam aus der Erde und glüht ebenso, bleibt dabei aber " +
      "stumm. Nebelbeere und Eiszahnminze stammen aus dem Wasser: die Beere " +
      "ist kühl und schweigt, die Minze ist eisig und knirscht. Wurzelholz " +
      "kam von der Erde, ist mild und knirscht wie die Minze. " +
      "Achte auch darauf, wie sich eine Zutat anfühlt: manches ist glatt " +
      "wie Wachs, manches rauh und splittrig, manches pudrig wie Staub. " +
      "Aschenkirsche und Nebelbeere sind glatt; Gewitterzucker, Eiszahn­minze " +
      "und Wurzelholz sind rauh; Funkenpollen ist pudrig. Selteneres, das " +
      "Drachen und Einhorn dalassen, hat oft eine ganz eigene, glatte Art.",
  },
  binderkunde: {
    buch: "Von Bindern und ihrer Wirkung",
    text:
      "Mondkaramell verändert nichts — es lässt jeder Zutat ihren " +
      "eigenen Klang und ihre eigene Wärme. Daunensirup dämpft " +
      "jedes Geräusch zu Stille, ganz gleich was darin steckt. Frostharz " +
      "zieht die Wärme heraus: aus Glut wird Wärme, aus Wärme wird Kühle.",
  },
  drachen_der_luft: {
    buch: "Von den Drachen der Luft",
    text:
      "Rauchdrachen tragen ihr Feuer offen. Alles Kalte löscht sie von " +
      "innen, und sie verzeihen es nicht. Auch hören sie schlecht: was sie " +
      "nicht knistern hören, halten sie für Betrug.",
  },
  drachen_des_wassers: {
    buch: "Von den Drachen des Wassers",
    text:
      "Nebeldrachen sind kaum mehr als feuchte Luft mit einer Meinung. " +
      "Hitze löst sie auf, und sie nehmen nur, was aus dem Wasser kommt — " +
      "alles andere fällt durch sie hindurch, als wäre es nie dagewesen. " +
      "Wer einen schlafenden Drachen weckt, wird kein zweites Mal an sein " +
      "Astloch gebeten.",
  },
  drachen_der_erde: {
    buch: "Vom Wachsen der Drachen",
    text:
      "Die Feuerkammer bildet sich erst im dritten Jahrzehnt. Bis dahin " +
      "verbrennt Glühendes sie von innen. Junge Wurzeldrachen misstrauen " +
      "zudem allem, was geflogen ist — sie sagen, es habe den Boden " +
      "vergessen.",
  },
  sonnendrachen: {
    buch: "Von den Drachen der Sonne",
    text:
      "Sonnendrachen kennen keine halben Sachen. Was ihnen vorgesetzt " +
      "wird, muss durch und durch glühen — alles andere schmeckt ihnen " +
      "nach Asche. Ein Krachen zwischen den Zähnen stört das Licht.",
  },
  staubdrachen: {
    buch: "Von den Drachen des Staubs",
    text:
      "Staubdrachen sind alt und trocken wie vergessene Wege. Wärme " +
      "lässt sie zerfallen, darum nehmen sie nur, was kühl geblieben ist. " +
      "Ein Knistern versetzt sie in helle Aufregung — das mögen sie nicht.",
  },
  walddrachen: {
    buch: "Von den Drachen des Waldes",
    text:
      "Walddrachen trauen nichts, was je den Himmel gesehen hat. Sie " +
      "leben von der Stille zwischen den Bäumen und wittern jedes " +
      "Geräusch, das nicht dorthin gehört.",
  },
  herzchendrachen: {
    buch: "Von den Drachen des Herzens",
    text:
      "Herzchendrachen brauchen Wärme wie andere Luft; alles Kalte lässt " +
      "ihren Herzschlag stocken. Sie mögen nur, was aus der Erde kommt, und " +
      "es muss glatt sein — das kleinste Kratzen tut ihnen weh. Reine " +
      "Erdzutaten, die warm und glatt zugleich sind, sind selten; es lohnt " +
      "sich, das aufzuheben, was die Drachen dalassen.",
  },
  rosendrachen: {
    buch: "Von den Drachen der Rosen",
    text:
      "Rosendrachen sind empfindlich wie ihre Knospen. Ein Geräusch lässt " +
      "sie erschauern, darum muss ihr Bonbon vollkommen still sein — ein " +
      "dämpfender Binder hilft. Alles aus bloßer Erde weisen sie zurück, und " +
      "es muss glatt sein wie ein Blütenblatt. Nur wenig, das aus Himmel " +
      "oder Wasser kommt, ist glatt genug; das Glatte, das die Sonne " +
      "dalässt, ist ihnen am liebsten.",
  },
  schneckendrachen: {
    buch: "Von den Drachen der Schnecke",
    text:
      "Schneckendrachen haben es nie eilig. Ihr Bonbon muss still, kühl " +
      "und vom Wasser sein — ein Geräusch schickt sie für Stunden zurück. " +
      "Und wer die kleine Schnecke auf dem Tisch kennt: ihren Schleim " +
      "kann man dem Drachen einfach so reichen, ganz ohne zu mischen. " +
      "Zum Dank lässt er dann etwas Schimmerndes zurück.",
  },
  monddrachen: {
    buch: "Von den Drachen des Mondes",
    text:
      "Monddrachen tragen kein Feuer in sich, nur Licht. Wärme lässt es " +
      "flackern, und alles, was aus dem Boden kam, ist ihnen zu schwer " +
      "für die Nacht.",
  },
};

// --- Mausreaktionen -----------------------------------------
// Konsistent, aber NICHT an die Lösung gekoppelt. Die Maus
// hat eigene Vorlieben und liegt manchmal daneben.

export const MAUSREAKTIONEN = {
  zutat: {
    funkenpollen: { pose: "niesen", text: "Sie niest. Jedes Mal." },
    eiszahnminze: { pose: "vorsichtig", text: "Sie fasst das Glas nur am Rand an." },
    nebelbeere: { pose: "suchen", text: "Sie greift zweimal daneben." },
    wurzelholz: { pose: "schnuppern", text: "Sie riecht daran und zuckt mit den Ohren." },
    aschenkirsche: { pose: "begeistert", text: "Sie nickt heftig. Sie liebt die einfach." },
    gewitterzucker: { pose: "neugierig", text: "Sie hält sich das Glas ans Ohr." },
  },
  // Nur noch Posen — die Maus zeigt ihre Reaktion, statt sie zu beschreiben.
  drache: {
    rauchdrachin: { pose: "zittern" },
    schlaefer: { pose: "leise" },
    jungdrache: { pose: "entspannt" },
    sonnendrache: { pose: "strahlt" },
    staubdrache: { pose: "duckt" },
    walddrache: { pose: "schnuppert" },
    herzchendrache: { pose: "kuschelt" },
    rosendrache: { pose: "knickst" },
    schneckendrache: { pose: "wartet" },
    monddrache: { pose: "staunt" },
  },
};

// --- Weitere Auftritte -------------------------------------------
// Kommt ein Drache in einem späteren Kapitel noch einmal, sagt er einen
// anderen Satz und verlangt etwas anderes. Jeder Eintrag überschreibt nur
// wunsch/bedingungen/belohnung; alles andere bleibt vom Drachen selbst.
// Alle Lösungen sind mit den sechs Grundzutaten + Bindern machbar.
export const DRACHEN_ALT = {
  rauchdrachin: [{
    wunsch: "Diesmal etwas, das durch und durch glüht — und nicht zwischen den Zähnen knirscht.",
    bedingungen: [
      { typ: "verbiete_waerme_unter", wert: 2, grund: "Nur lauwarm. Sie faucht enttäuscht." },
      { typ: "verbiete_klang", wert: "knirschen", grund: "Es knirscht. Das mag sie heute nicht." },
    ],
    belohnung: "Sie lässt eine heiße Rauchwolke steigen — endlich glühend genug.",
  }],
  schlaefer: [{
    wunsch: "Etwas Stilles und Kühles, ganz gleich woher.",
    bedingungen: [
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm. Der Nebel dünnt aus." },
      { typ: "verlange_klang", wert: "stumm", grund: "Ein Laut. Das Lid zuckt kurz." },
    ],
    belohnung: "Der Nebel legt sich dichter über die Kante. Er schläft weiter.",
  }],
  jungdrache: [{
    wunsch: "Diesmal was richtig Eisiges zum Knacken!",
    bedingungen: [
      { typ: "verlange_klang", wert: "knirschen", grund: "Es hat nicht geknackt. Er guckt enttäuscht." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm. Er will es eiskalt." },
    ],
    belohnung: "Es knackt eisig zwischen seinen Zähnen. Er quietscht vor Freude.",
  }],
  sonnendrache: [{
    wunsch: "Heute etwas Heißes, das vom Himmel zu mir kam.",
    bedingungen: [
      { typ: "verlange_herkunft", wert: "himmel", grund: "Das hat nie den Himmel gesehen." },
      { typ: "verbiete_waerme_unter", wert: 1, grund: "Zu kühl fürs Mittagslicht." },
    ],
    belohnung: "Sein Licht flammt kurz auf und wird dann sanft und satt.",
  }],
  staubdrache: [{
    wunsch: "Gib mir etwas Rauhes und Kühles — wie trockener Boden im Schatten.",
    bedingungen: [
      { typ: "verlange_oberflaeche", wert: "rauh", grund: "Zu glatt. Es rieselt ihm davon." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm. Er zerfällt zu Sand." },
    ],
    belohnung: "Der Staub legt sich zufrieden. Ein trockenes, altes Seufzen.",
  }],
  walddrache: [{
    wunsch: "Diesmal etwas Stilles und Kühles, das nie den Himmel sah.",
    bedingungen: [
      { typ: "verbiete_herkunft", wert: "himmel", grund: "Das kam von oben. Er schüttelt sich." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm zwischen den Bäumen." },
      { typ: "verlange_klang", wert: "stumm", grund: "Ein Geräusch — die Vögel stieben auf." },
    ],
    belohnung: "Moos wächst zufrieden über die Kante. Ganz still.",
  }],
  herzchendrache: [{
    wunsch: "Etwas Warmes, das aus dem Himmel zu mir fiel.",
    bedingungen: [
      { typ: "verbiete_waerme_unter", wert: 1, grund: "Zu kalt. Sein Herz stockt." },
      { typ: "verlange_herkunft", wert: "himmel", grund: "Das kam nicht von oben." },
    ],
    belohnung: "Der ganze Schlitz glüht warm und rosig auf.",
  }],
  rosendrache: [{
    wunsch: "Etwas ganz Glattes, das nicht vom Himmel kam.",
    bedingungen: [
      { typ: "verlange_oberflaeche", wert: "glatt", grund: "Etwas Rauhes kratzt die Blüten." },
      { typ: "verbiete_herkunft", wert: "himmel", grund: "Zu luftig. Er wendet sich ab." },
    ],
    belohnung: "Neue Knospen öffnen sich rund um den Schlitz, eine nach der anderen.",
  }],
  schneckendrache: [{
    wunsch: "Etwas Kühles vom Wasser. Der Klang ist mir diesmal gleich.",
    bedingungen: [
      { typ: "verlange_herkunft", wert: "wasser", grund: "Das kam nicht vom Wasser." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm. Er zieht die Fühler ein." },
    ],
    belohnung: "Er zieht sich gemächlich zurück, eine glänzende Spur bleibt.",
  }],
  monddrache: [{
    wunsch: "Etwas Kühles und Stilles, das den Boden nie berührt hat.",
    bedingungen: [
      { typ: "verbiete_herkunft", wert: "erde", grund: "Das kam aus dem Boden." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm. Sein Licht flackert." },
      { typ: "verlange_klang", wert: "stumm", grund: "Ein Laut stört das Mondlicht." },
    ],
    belohnung: "Das Licht im Schlitz wird ruhig und silbern.",
  }],
  feuerschlangendrache: [{
    wunsch: "Etwas vom Himmel, das nicht schweigt.",
    bedingungen: [
      { typ: "verlange_herkunft", wert: "himmel", grund: "Das kam nicht von oben." },
      { typ: "verbiete_klang", wert: "stumm", grund: "Es schweigt. Er will es zischen hören." },
    ],
    belohnung: "Er züngelt zufrieden und verschwindet zurück ins Dunkel.",
  }],
  wasserschlangendrache: [{
    wunsch: "Etwas ganz Stilles und Kaltes.",
    bedingungen: [
      { typ: "verlange_klang", wert: "stumm", grund: "Ein Geräusch. Er zuckt zurück." },
      { typ: "verbiete_waerme_ueber", wert: -1, grund: "Zu warm. Er weicht ins Dunkel." },
    ],
    belohnung: "Er kringelt sich zufrieden und gleitet lautlos davon.",
  }],
  zweikopfdrache: [{
    wunsch: "Diesmal etwas Stilles und Kühles. Wir beide, wie immer.",
    bedingungen: [
      { typ: "verlange_klang", wert: "stumm", grund: "Beide Köpfe zucken beim Geräusch." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm. Beide schütteln sich." },
    ],
    belohnung: "Beide Köpfe nicken, kurz versetzt, und ziehen sich zurück.",
  }],
};

// --- Story-Abhängigkeiten ----------------------------------------
// Drei Drachen in späteren Kapiteln verlangen etwas, das sich nur mit einer
// Zutat lösen lässt, die ein früherer Drache dagelassen hat. Der Kapitel-
// Aufbau sorgt dafür, dass der Geber immer im ersten Kapitel erscheint —
// und da man einen Drachen nur mit Erfolg abschließt, ist die Zutat dann da.
//   Herzchendrache  braucht  Wüstenglas    (vom Staubdrachen)
//   Rosendrache     braucht  Sonnentränen  (vom Sonnendrachen)
//   Zweikopfdrache  braucht  Tannenharz    (vom Walddrachen)
export const DRACHEN_ABHAENGIG = {
  herzchendrache: {
    braucht: "wuestenglas",
    wunsch: "Gib mir etwas Warmes und Glattes vom Boden — wie ein Stein, der noch die Sonne hält.",
    bedingungen: [
      { typ: "verbiete_waerme_unter", wert: 1, grund: "Es fühlt sich kalt an. Sein Herzschlag stockt kurz." },
      { typ: "verlange_herkunft", wert: "erde", grund: "Es schmeckt nach Himmel oder Teich. Es will Bodenständiges." },
      { typ: "verlange_oberflaeche", wert: "glatt", grund: "Etwas kratzt. Es presst das Herz zusammen." },
    ],
    belohnung: "Der Herzschlag wird ruhig und satt. Für einen Moment glüht der ganze Schlitz rosig.",
  },
  rosendrache: {
    braucht: "sonnentraenen",
    wunsch: "Gib mir etwas Stilles und Glattes, das nie den Boden berührt hat — sanft wie ein Blütenblatt.",
    bedingungen: [
      { typ: "verlange_klang", wert: "stumm", grund: "Ein Geräusch, und die Blütenblätter fallen erschrocken ab." },
      { typ: "verbiete_herkunft", wert: "erde", grund: "Es riecht nach Erde, nicht nach Blüte. Er wendet sich ab." },
      { typ: "verlange_oberflaeche", wert: "glatt", grund: "Etwas Rauhes kratzt über die Blüten. Er schaudert." },
    ],
    belohnung: "Neue Knospen öffnen sich rund um den Schlitz, eine nach der anderen.",
  },
  zweikopfdrache: {
    braucht: "tannenharz",
    wunsch: "Wir wollen etwas Rauhes und Kaltes, das nicht vom Himmel kam. Wir beide.",
    bedingungen: [
      { typ: "verlange_oberflaeche", wert: "rauh", grund: "Zu glatt. Beide Köpfe schütteln sich gleichzeitig." },
      { typ: "verbiete_herkunft", wert: "himmel", grund: "Das kam von oben. Keiner der beiden traut dem Himmel." },
      { typ: "verbiete_waerme_ueber", wert: -1, grund: "Zu warm. Beide ziehen sich zurück." },
    ],
    belohnung: "Beide Köpfe nicken zufrieden, kurz versetzt, und ziehen sich dann zurück.",
  },
};
