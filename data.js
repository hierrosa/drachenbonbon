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
      "Zähflüssig und blass. Riecht und schmeckt nach fast nichts, " +
      "die perfekte neutrale Basis.",
    // verändert nichts
    effekt: null,
  },
  sirup: {
    name: "Daunensirup",
    bild: "sirup",
    beschreibung:
      "Weich auf der Zunge und komplett geräuschlos. Wer ihn " +
      "hinunterschluckt, hört für einen kurzen Moment nur noch den " +
      "eigenen Herzschlag.",
    // dämpft alle Geräusche im Bonbon
    effekt: "daempft_klang",
  },
  frostharz: {
    name: "Eiszapfenharz",
    bild: "frostharz",
    beschreibung:
      "Kälter als Wassereis. Zieht die Wärme aus allem, womit man es mischt.",
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
      "Geerntet kurz bevor der Regen fällt.",
    waerme: 1,
    klang: "knistern",
    herkunft: "himmel",
    oberflaeche: "rauh",
  },
  funkenpollen: {
    name: "Funkenrollis",
    bild: "funkenpollen",
    beschreibung:
      "Große Pollen von Blüten, die ausschließlich auf Brandflächen " +
      "wachsen. Feiner Staub, der nach heißem Blech riecht.",
    waerme: 2,
    klang: "knistern",
    herkunft: "himmel",
    oberflaeche: "pudrig",
  },
  aschenkirsche: {
    name: "Aschenkirsche",
    bild: "aschenkirsche",
    beschreibung:
      "Außen glatt und hart verkohlt. Innen aber noch süß und warm. " +
      "Sie gibt keinen Laut von sich.",
    waerme: 2,
    klang: "stumm",
    herkunft: "erde",
    oberflaeche: "glatt",
  },
  nebelbeere: {
    name: "Nebelbeere",
    bild: "nebelbeere",
    beschreibung:
      "Kühl und glatt wie ein Morgen am Wasser und vollkommen still. " +
      "Sehr schwer zu finden.",
    waerme: -1,
    klang: "stumm",
    herkunft: "wasser",
    oberflaeche: "glatt",
  },
  eiszahnminze: {
    name: "Eiszahnminze",
    bild: "eiszahnminze",
    beschreibung:
      "Voller rauher Eiskristalle, die zwischen den Zähne knirschen. " +
      "Wächst nur dort, wo Wasser dauerhaft im Schatten liegt.",
    waerme: -2,
    klang: "knirschen",
    herkunft: "wasser",
    oberflaeche: "rauh",
  },
  wurzelholz: {
    name: "Wurzelholzsplitter",
    bild: "wurzelholz",
    beschreibung:
      "Schmecken nach altem Keller. Hinterlassen ein rauhes und " +
      "splittriges Gefühl auf den Zähnen.",
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
      "Ein Bündel silbriger Blätter, kopfüber getrocknet. Sie rascheln " +
      "trocken zwischen den Pfoten und riechen nach aufziehendem Wind.",
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
      "Wächst nur, wo die Sonne nie scheint. Getrocknet zerfällt sie " +
      "schnell zu Staub. Dabei bleibt sie kühl und ganz leise.",
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
      "Gefiederte orangerote Blätter, die selbst getrocknet noch warm " +
      "wirken. Zwischen den Zähnen knistern sie wie glimmende Kohle.",
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
      "Schimmernde, glatte Tropfen. Warm und still aber wenn man näher " +
      "hinhört knistern sie doch leise.",
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
      "Sand, der einmal so heiß wurde, dass er flüssig wurde und wieder " +
      "erstarrte. Glatt, warm und ohne jedes Geräusch.",
    waerme: 1,
    klang: "stumm",
    herkunft: "erde",
    oberflaeche: "glatt",
    geheim: true,
  },
  tannenharz: {
    name: "Harzhannes",
    bild: "tannenharz",
    beschreibung:
      "Spröde und immer kühl. Aus der Rinde eines Baums gewonnen, der im " +
      "Schnee gewachsen ist. Splittert rauh und leise zwischen den Zähnen.",
    waerme: -1,
    klang: "knirschen",
    herkunft: "erde",
    oberflaeche: "rauh",
    geheim: true,
  },
  sternenstaub: {
    name: "Einhornkacke",
    bild: "sternenstaub",
    beschreibung:
      "Niemand weiß, wo sie genau herkommt, nur dass sie manchmal am " +
      "Astloch liegt, nachdem das Einhorn vorbeigekommen ist. Sanft und " +
      "kühl in der Hand, und knattert wie ferne Püpse.",
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
      "Frisch von der Tischschnecke. Ziemlich kalt, glitschig glatt und " +
      "unglaublich leise. Er dämpft jedes Geräusch im Bonbon.",
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
      "irmeliger Arbeit gerollt hat. Sie raschelt kaum hörbar.",
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
    "„Hallo Bonbonwaldmaus. Du machst einfach die besten Drachenbonbons weit und breit.“",
    "„Drachen, die Hilfe brauchen, kommen zu dir, und du machst ihnen ein " +
    "Bonbon aus einem Binder und zwei Zutaten. Die Bücher hast du " +
    "immer parat, falls du mal was vergessen hast.“",
  ],
  wunsch:
    "Das Einhorn will nichts Bestimmtes. Es schaut sich einfach nur um und " +
    "lässt dir eine kleine Erinnerung da.",
  abschiedSelten:
    "Es schnaubt frech, lässt etwas am Baumloch zurück und ist verschwunden, " +
    "bevor die Maus sich umdreht.",
  abschiedHaeufig:
    "Bevor es geht, streift es mit der Mähne über das Baumloch und irgendwo " +
    "im Holz bleibt etwas von seinem Glanz zurück.",

  // --- Kapitel-Übergänge: die Maus geht schlafen (zweimal) ---------
  schlafText: [
    "Die Maus macht noch kurz die Schüssel sauber. Draußen ist es schon " +
    "dunkel, noch dunkler als sowieso. Die Sterne leuchten und sie kuschelt " +
    "sich in ihren alten Ohrensessel. Ein guter erster Tag.",
    "Wieder viele Drachen heute, ein Bonbon nach dem anderen. Müde schließt " +
    "die Maus die Augen und sinkt in ihren geliebten Sessel.",
  ],
  // Am Morgen schaut das Einhorn kurz vorbei — ohne etwas mitzubringen.
  morgenText: [
    "„Guten Morgen Maus wie geht's dir? Ich habe schon die ersten Drachen " +
    "im Anflug gesehen. Hab einen schönen Tag!“",
    "„Fast geschafft, kleine Bonbonwaldmaus. Wenn du heute alle Drachen " +
    "versorgst, kannst du erstmal Urlaub machen!“",
  ],
  // Nach allen drei Kapiteln: Schlusswort und Abspann.
  schlusswort:
    "„Alle Drachen sind für's erste versorgt. Ruh dich jetzt aus, du hast es " +
    "dir echt verdient.“",
  ende:
    "Die Maus schnuffelt sich in den Ohrensessel und zieht die Decke bis zum " +
    "Kinn. Wie es wohl den Drachen dort draußen gerade geht? Über diesem " +
    "Gedanken schläft sie zufrieden ein.",
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
    wunsch: "Gib mir ein Bonbon, das schmeckt wie es kurz vor dem Gewitter riecht.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_der_luft"],
    bedingungen: [
      {
        typ: "verbiete_waerme_unter",
        wert: 0,
        grund: "Sie zischt. Sie will nicht durch Kaltes gelöscht werden.",
      },
      {
        typ: "verlange_klang",
        wert: "knistern",
        grund: "Sie legt den Kopf schief. War da überhaupt ein Geräusch?",
      },
      {
        typ: "verlange_herkunft",
        wert: "himmel",
        grund: "Sie schnaubt. Das hier hat den Boden geküsst.",
      },
      {
        typ: "verbiete_oberflaeche",
        wert: "glatt",
        grund: "So glatt. Das rutscht ihr einfach von der Zunge.",
      },
    ],
    loesung: ["karamell", "gewitterzucker", "funkenpollen"],
    belohnung:
      "Die Rauchdrachin schließt die Augen und lässt Rauch entweichen. " +
      "Ein Geräusch wie ein zufriedener Ofen.",
  },

  schlaefer: {
    name: "Der Schläfer",
    bild: "schlaefer",
    farbe: "159,192,187",
    stimme: "dunkel",
    wunsch: "Ich schlafe schon seit vierzig Jahren durch, also weck mich nicht auf.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_des_wassers"],
    bedingungen: [
      {
        typ: "verbiete_waerme_ueber",
        wert: 0,
        grund: "Der Nebel kühlt ab und dünnt aus.",
      },
      {
        typ: "verlange_klang",
        wert: "stumm",
        grund: "Ein Knacken ist zu hören. Das Lid hebt sich einen Spalt.",
      },
      {
        typ: "verlange_herkunft",
        wert: "wasser",
        grund: "Der Nebel bebt. Das hier war nie im Wasser.",
      },
    ],
    loesung: ["sirup", "nebelbeere", "eiszahnminze"],
    belohnung:
      "Nichts passiert aber der Nebel wird etwas dichter. Das ist alles, was " +
      "der Schläfer zu geben hat und es reicht.",
  },

  jungdrache: {
    name: "Die Jungdrachin",
    bild: "jungdrache",
    farbe: "126,190,104",
    stimme: "dunkel",
    wunsch: "Ich brauch' was zum Draufbeißen! Aber bloß nichts, was geflogen ist.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_der_erde"],
    bedingungen: [
      {
        typ: "verlange_klang",
        wert: "knirschen",
        grund: "Sie kaut zweimal und guckt enttäuscht. Nichts hat geknackt.",
      },
      {
        typ: "verbiete_waerme_ueber",
        wert: 1,
        grund: "Sie hustet laut. Das war zu heiß für sie.",
      },
      {
        typ: "verbiete_herkunft",
        wert: "himmel",
        grund: "Sie spuckt es aus. Das kam ja wohl von weit oben.",
      },
      {
        typ: "verlange_oberflaeche",
        wert: "rauh",
        grund: "Zu rutschig. Da gibt's nichts zum Draufbeißen.",
      },
    ],
    loesung: ["karamell", "wurzelholz", "eiszahnminze"],
    belohnung:
      "Sie beißt zu, das Knirschen hallt im Baum. Ein Wackelzahn landet auf " +
      "der Tischplatte. Eine zufriedene Jungdrachin.",
  },

  sonnendrache: {
    name: "Der Sonnendrache",
    bild: "sonnendrache",
    farbe: "255,196,80",
    stimme: "dunkel",
    geschenk: "sonnentraenen",
    wunsch: "Ich mag was, das schmeckt wie Mittagslicht auf der Haut.",
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
        grund: "Zu rauh. Das kratzt mich im Hals.",
      },
    ],
    loesung: ["karamell", "funkenpollen", "aschenkirsche"],
    belohnung:
      "Die Haut des Sonnendrachen leuchtet einen Moment hell auf. Es ist, " +
      "als würde die Mittagssonne dir zulächeln.",
  },

  staubdrache: {
    name: "Der Staubdrache",
    bild: "staubdrache",
    farbe: "168,150,120",
    stimme: "dunkel",
    geschenk: "wuestenglas",
    wunsch: "Ich brauche etwas, das nach kühlem, altem Boden schmeckt.",
    buecher: ["zutatenkunde", "binderkunde", "staubdrachen"],
    bedingungen: [
      {
        typ: "verbiete_waerme_ueber",
        wert: -1,
        grund: "Er scheint zu zerbröseln. Das war ihm zu warm.",
      },
      {
        typ: "verbiete_klang",
        wert: "knistern",
        grund: "Ein Knistern wirbelt ihn zu sehr auf.",
      },
    ],
    loesung: ["frostharz", "wurzelholz", "nebelbeere"],
    belohnung:
      "Der Staubdrache sackt leicht in sich zusammen. Zufrieden und gesetzt.",
  },

  walddrache: {
    name: "Der Walddrache",
    bild: "walddrache",
    farbe: "90,120,68",
    stimme: "dunkel",
    geschenk: "tannenharz",
    wunsch: "Gib mir etwas, das wie Erde nach dem Regen schmeckt. Aber leise, bitte.",
    buecher: ["zutatenkunde", "binderkunde", "walddrachen"],
    bedingungen: [
      {
        typ: "verbiete_herkunft",
        wert: "himmel",
        grund: "Nein, das kam nicht von der Erde.",
      },
      {
        typ: "verlange_klang",
        wert: "stumm",
        grund: "Ein Geräusch, fast wäre er davongerannt.",
      },
      {
        typ: "verlange_oberflaeche",
        wert: "glatt",
        grund: "So rauh! Er weicht zurück.",
      },
    ],
    loesung: ["karamell", "aschenkirsche", "nebelbeere"],
    belohnung:
      "Der Walddrache entspannt sich. Er verschwindet so lautlos wie er kam, " +
      "nur ein paar Blätter wirbeln noch.",
  },

  herzchendrache: {
    name: "Der Herzchendrache",
    bild: "herzchendrache",
    farbe: "232,120,150",
    stimme: "dunkel",
    voraussetzung: "wuestenglas",
    wunsch: "Gib mir etwas ganz und gar Warmes, das sicher nie im Wasser lag.",
    buecher: ["zutatenkunde", "binderkunde", "herzchendrachen"],
    bedingungen: [
      {
        typ: "verbiete_waerme_unter",
        wert: 1,
        grund: "Es fühlt sich kalt an. Sein Herzschlag setzt kurz aus.",
      },
      {
        typ: "verbiete_herkunft",
        wert: "wasser",
        grund: "Es schmeckt nach Teich. Sein Herz mag nichts Nasses.",
      },
    ],
    loesung: ["karamell", "funkenpollen", "aschenkirsche"],
    belohnung:
      "Der Herzdrache ist ruhig und zufrieden. Für einen Moment glüht der " +
      "ganze Schlitz in warmem Licht.",
  },

  rosendrache: {
    name: "Die Rosendrachin",
    bild: "rosendrache",
    farbe: "214,90,120",
    stimme: "dunkel",
    voraussetzung: "sonnentraenen",
    wunsch: "Gib mir etwas vollkommen Stilles und Glattes, so zart wie ein junges Blütenblatt.",
    buecher: ["zutatenkunde", "binderkunde", "rosendrachen"],
    bedingungen: [
      {
        typ: "verlange_klang",
        wert: "stumm",
        grund: "Ein Geräusch, die Blütenblätter zittern.",
      },
      {
        typ: "verlange_oberflaeche",
        wert: "glatt",
        grund: "Etwas kratzt an den Rosen. Sie schaudert.",
      },
    ],
    loesung: ["sirup", "aschenkirsche", "nebelbeere"],
    belohnung:
      "Neue Knospen öffnen sich an der Krone der Rosendrachin und sie duftet " +
      "ganz wunderbar.",
  },

  schneckendrache: {
    name: "Der Schneckendrache",
    bild: "schneckendrache",
    farbe: "143,168,110",
    stimme: "dunkel",
    // Extra: gib ihm direkt Schneckenschleim (Knopf), dann lässt er eine
    // Schneckenperle da — dafür muss nichts gemischt werden.
    extraSchleim: "schneckenperle",
    wunsch: "Gib mir etwas Stilles, Kühles vom Wasser. Und lass dir ruhig Zeit.",
    buecher: ["zutatenkunde", "binderkunde", "schneckendrachen"],
    bedingungen: [
      {
        typ: "verlange_klang",
        wert: "stumm",
        grund: "Ein Geräusch, und er zieht sich kurz zurück.",
      },
      {
        typ: "verlange_herkunft",
        wert: "wasser",
        grund: "Er weicht zurück. Das kam doch aus der Luft oder dem Boden, oder? Jedenfalls nicht vom Wasser.",
      },
      {
        typ: "verbiete_waerme_ueber",
        wert: 0,
        grund: "Zu warm. Da trocknet er zu schnell aus.",
      },
    ],
    loesung: ["sirup", "nebelbeere", "eiszahnminze"],
    belohnung:
      "Er zieht in aller Ruhe weiter, eine glänzende Spur hinter sich herziehend.",
  },

  monddrache: {
    name: "Die Monddrachin",
    bild: "monddrache",
    farbe: "170,190,220",
    stimme: "dunkel",
    wunsch: "Ich möchte etwas Kühles, das nie den Boden berührt hat.",
    buecher: ["zutatenkunde", "binderkunde", "monddrachen"],
    bedingungen: [
      {
        typ: "verbiete_waerme_ueber",
        wert: 0,
        grund: "Es wärmt sie. Das mag sie nicht.",
      },
      {
        typ: "verbiete_herkunft",
        wert: "erde",
        grund: "Sie schüttelt sich. Das kam vom Boden.",
      },
    ],
    loesung: ["frostharz", "gewitterzucker", "eiszahnminze"],
    belohnung:
      "Das Licht im Schlitz wird ruhig und ganz silbern. Für einen Moment " +
      "ist der ganze Raum davon erfüllt.",
  },

  feuerschlangendrache: {
    name: "Die Feuerdrachin",
    bild: "feuerschlangendrache",
    farbe: "200,64,31",
    stimme: "dunkel",
    geschenk: "glutfenchel",
    wunsch: "Gib mir etwas, das knistert wie ein frischer Funke.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_der_luft"],
    bedingungen: [
      {
        typ: "verbiete_waerme_unter",
        wert: 1,
        grund: "Zu lau. Sie züngelt enttäuscht.",
      },
      {
        typ: "verlange_klang",
        wert: "knistern",
        grund: "Es soll knistern, nicht leise sein.",
      },
    ],
    loesung: ["karamell", "gewitterzucker", "funkenpollen"],
    belohnung:
      "Sie schnellt einmal kurz hoch, als hätte sie selbst ein Funke " +
      "erwischt, und schlängelt sich zufrieden zurück ins Dunkel.",
  },

  wasserschlangendrache: {
    name: "Der Wasserschlangendrache",
    bild: "wasserschlangendrache",
    farbe: "47,127,146",
    stimme: "dunkel",
    geschenk: "schattenmelisse",
    wunsch: "Gib mir ein Bonbon, das kühl und still ist wie Wasser im Schatten.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_des_wassers"],
    bedingungen: [
      {
        typ: "verbiete_waerme_ueber",
        wert: -1,
        grund: "Zu warm. Er zuckt zurück.",
      },
      {
        typ: "verlange_herkunft",
        wert: "wasser",
        grund: "Das kam nicht aus dem Wasser.",
      },
    ],
    loesung: ["karamell", "nebelbeere", "eiszahnminze"],
    belohnung:
      "Er kringelt sich einmal zufrieden zusammen und gleitet dann lautlos davon.",
  },

  zweikopfdrache: {
    name: "Der Zweikopfdrache",
    bild: "zweikopfdrache",
    farbe: "94,66,114",
    stimme: "dunkel",
    wunsch: "Wir wollen beide etwas Rauhes, das nicht von oben kommt.",
    buecher: ["zutatenkunde", "binderkunde", "drachen_der_erde", "drachen_des_wassers"],
    bedingungen: [
      {
        typ: "verlange_oberflaeche",
        wert: "rauh",
        grund: "Zu glatt. Beide Köpfe schütteln sich.",
      },
      {
        typ: "verbiete_herkunft",
        wert: "himmel",
        grund: "Das kam doch eindeutig von oben.",
      },
    ],
    loesung: ["karamell", "wurzelholz", "eiszahnminze"],
    belohnung:
      "Beide Köpfe nicken wohlwollend, dann ziehen sie weiter.",
  },
};

// --- Bücherwissen -------------------------------------------
// Steht im Regal rechts. Die harten Regeln, aus denen der
// Spieler den poetischen Wunsch übersetzt.

// text darf HTML enthalten: <p> für Absätze, <strong> für Schlüsselbegriffe.
export const BUCHWISSEN = {
  zutatenkunde: {
    buch: "Von Zutaten und ihrer Art",
    text:
      "<p><strong>Gewitterzucker</strong> und <strong>Funkenrollis</strong> " +
      "fielen beide aus dem <strong>Himmel</strong> und <strong>knistern</strong> " +
      "auf der Zunge — der Zucker ist bloß <strong>warm</strong>, die Rollis " +
      "<strong>glühen</strong> richtig. <strong>Aschenkirsche</strong> kam aus " +
      "der <strong>Erde</strong> und glüht auch, bleibt dabei aber " +
      "<strong>leise</strong>.</p>" +
      "<p><strong>Nebelbeere</strong> und <strong>Eiszahnminze</strong> stammen " +
      "aus dem <strong>Wasser</strong>: die Beere ist <strong>kühl</strong> und " +
      "schweigt, die Minze ist <strong>eisig</strong> und " +
      "<strong>knirscht</strong>. <strong>Wurzelholz</strong> kam von der " +
      "<strong>Erde</strong>, ist mild und knirscht wie die Minze.</p>" +
      "<p>Achte auch darauf, wie sich eine Zutat anfühlt: manches ist " +
      "<strong>glatt</strong> wie eine Perle, manches <strong>rauh</strong> und " +
      "splittrig, manches <strong>pudrig</strong> wie Staub. Aschenkirsche und " +
      "Nebelbeere sind glatt; Gewitterzucker, Eiszahn­minze und Wurzelholz sind " +
      "rauh; Funkenrollis sind pudrig. Selteneres, das Drachen und Einhorn " +
      "dalassen, hat oft eine ganz eigene, glatte Art.</p>",
  },
  binderkunde: {
    buch: "Von Bindern und ihrer Wirkung",
    text:
      "<p><strong>Mondkaramell</strong> verändert nichts — es lässt jeder " +
      "Zutat ihren eigenen Klang und ihre eigene Temperatur.</p>" +
      "<p><strong>Daunensirup</strong> dämpft jedes Geräusch zu " +
      "<strong>Stille</strong>.</p>" +
      "<p><strong>Eiszapfenharz</strong> entzieht die <strong>Wärme</strong>: " +
      "aus Glut wird Wärme, aus Wärme wird Kühle.</p>",
  },
  drachen_der_luft: {
    buch: "Von den Drachen der Luft",
    text:
      "<p>Rauchdrachen tragen Feuer in sich. Alles <strong>Kalte</strong> " +
      "löscht sie von innen, das mögen sie nicht.</p>" +
      "<p>Auch hören sie schlecht: was sie nicht <strong>knistern</strong> " +
      "hören, halten sie für Betrug.</p>",
  },
  drachen_des_wassers: {
    buch: "Von den Drachen des Wassers",
    text:
      "<p>Nebeldrachen sind kaum mehr als feuchte Luft, auch wenn sie das wohl " +
      "anders sehen. <strong>Hitze</strong> löst sie auf und sie nehmen nur an, " +
      "was aus dem <strong>Wasser</strong> kommt.</p>" +
      "<p>Wer einen schlafenden Nebeldrachen <strong>weckt</strong>, wird sein " +
      "blaues Wunder erleben, also Vorsicht!</p>",
  },
  drachen_der_erde: {
    buch: "Von den Drachen der Erde",
    text:
      "<p>Die Feuerkammer bildet sich bei ihnen erst im dritten Jahrzehnt. Bis " +
      "dahin verbrennt <strong>Glühendes</strong> sie von innen.</p>" +
      "<p>Junge Wurzeldrachen misstrauen zudem allem, was " +
      "<strong>geflogen</strong> ist — sie sagen, es habe den Boden " +
      "betrogen.</p>",
  },
  sonnendrachen: {
    buch: "Von den Drachen der Sonne",
    text:
      "<p>Sonnendrachen kennen keine halben Sachen. Was ihnen vorgesetzt " +
      "wird, muss durch und durch <strong>glühen</strong> — alles andere " +
      "schmeckt ihnen zu fad.</p>" +
      "<p>Ein <strong>Krachen</strong> zwischen den Zähnen stört allerdings " +
      "das Licht.</p>",
  },
  staubdrachen: {
    buch: "Von den Drachen des Staubs",
    text:
      "<p>Staubdrachen sind alt und etwas spröde aber sehr gutmütig. " +
      "<strong>Wärme</strong> lässt sie zerfallen, darum nehmen sie nur, " +
      "was <strong>kühl</strong> ist.</p>" +
      "<p>Ein <strong>Knistern</strong> versetzt sie in helle Aufregung und " +
      "das mögen sie nicht.</p>",
  },
  walddrachen: {
    buch: "Von den Drachen des Waldes",
    text:
      "<p>Walddrachen trauen nichts, was aus der <strong>Luft</strong> " +
      "kommt.</p>" +
      "<p>Sie lieben die <strong>Stille</strong> zwischen den Bäumen und " +
      "reagieren auf jedes <strong>Geräusch</strong> extrem sensibel.</p>",
  },
  herzchendrachen: {
    buch: "Von den Drachen des Herzens",
    text:
      "<p>Herzchendrachen brauchen <strong>Wärme</strong> wie andere die Luft " +
      "zum Atmen; alles Kalte lässt ihren Herzschlag kurz aussetzen.</p>" +
      "<p>Sie mögen nur, was aus der <strong>Erde</strong> kommt, und es muss " +
      "unbedingt <strong>glatt</strong> sein — das kleinste Kratzen kann ihr " +
      "Herz leicht verletzen.</p>" +
      "<p>Reine Erdzutaten, die warm und glatt zugleich sind, sind selten; es " +
      "lohnt sich also aufzuheben, was die Drachen <strong>dalassen</strong>.</p>",
  },
  rosendrachen: {
    buch: "Von den Drachinnen der Rosen",
    text:
      "<p>Rosendrachinnen sind empfindlich wie ihre Knospen. Ein " +
      "<strong>Geräusch</strong> lässt sie erschauern, darum muss ihr Bonbon " +
      "vollkommen <strong>still</strong> sein — ein dämpfender Binder wirkt da " +
      "Wunder.</p>" +
      "<p>Alles aus dem <strong>Boden</strong> weisen sie zurück, und es muss " +
      "<strong>glatt</strong> und sanft sein wie ein Blütenblatt.</p>" +
      "<p>Nur wenig, das aus Himmel oder Wasser kommt, ist glatt genug für " +
      "sie; das Glatte, das die <strong>Sonne</strong> hinterlässt, ist ihnen " +
      "am liebsten.</p>",
  },
  schneckendrachen: {
    buch: "Von den Drachen der Schnecke",
    text:
      "<p>Schneckendrachen haben es niemals eilig. Ihr Bonbon muss " +
      "<strong>still</strong>, <strong>kühl</strong> und aus dem " +
      "<strong>Wasser</strong> sein — ein <strong>Geräusch</strong> lässt sie " +
      "zurückweichen.</p>" +
      "<p>Und wer die kleine <strong>Schnecke</strong> auf dem Tisch schon " +
      "kennt: ihren Schleim kann man dem Drachen einfach so reichen, ganz ohne " +
      "zu mischen. Zum Dank lässt er dann vielleicht etwas zurück.</p>",
  },
  monddrachen: {
    buch: "Von den Drachen des Mondes",
    text:
      "<p>Monddrachen tragen kein Feuer in sich, nur blasses, reines Licht. " +
      "<strong>Wärme</strong> lässt es flackern, und alles, was aus dem " +
      "<strong>Boden</strong> kam, ist ihnen zu schwer für die klare Nacht.</p>",
  },
};

// --- Weitere Auftritte -------------------------------------------
// Kommt ein Drache in einem späteren Kapitel noch einmal, sagt er einen
// anderen Satz und verlangt etwas anderes. Jeder Eintrag überschreibt nur
// wunsch/bedingungen/belohnung; alles andere bleibt vom Drachen selbst.
// Alle Lösungen sind mit den sechs Grundzutaten + Bindern machbar.
export const DRACHEN_ALT = {
  rauchdrachin: [{
    wunsch: "Diesmal etwas, das durch und durch glüht aber nicht zwischen den Zähnen knirscht.",
    bedingungen: [
      { typ: "verbiete_waerme_unter", wert: 2, grund: "Nur lauwarm. Sie faucht." },
      { typ: "verbiete_klang", wert: "knirschen", grund: "Es knirscht. Das mag sie heute einfach nicht." },
    ],
    belohnung: "Sie lässt eine heiße, dankbare Rauchwolke steigen.",
  }],
  schlaefer: [{
    wunsch: "Etwas Stilles und Kühles, ganz gleich woher.",
    bedingungen: [
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Warm mag er nicht, der Nebel dünnt dann aus." },
      { typ: "verlange_klang", wert: "stumm", grund: "Ein Laut? Seine Lider zucken." },
    ],
    belohnung: "Der Nebel schwallt über die Kante. Er schläft und schwebt weiter.",
  }],
  jungdrache: [{
    wunsch: "Diesmal was richtig Eisiges mit großem Knall!",
    bedingungen: [
      { typ: "verlange_klang", wert: "knirschen", grund: "Es hat nicht geknackt. Sie guckt enttäuscht." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm. Sie will es wirklich eiskalt." },
    ],
    belohnung: "Es knackt eisig zwischen ihren Zähnen. Sie quietscht vor Freude.",
  }],
  sonnendrache: [{
    wunsch: "Heute bitte etwas Heißes, das vom Himmel kam.",
    bedingungen: [
      { typ: "verlange_herkunft", wert: "himmel", grund: "Das hat nie den Himmel gesehen." },
      { typ: "verbiete_waerme_unter", wert: 1, grund: "Zu kühl für die Mittagssonne." },
    ],
    belohnung: "Sein Licht strahlt und wärmt deine Mausenase bevor er weiterzieht.",
  }],
  staubdrache: [{
    wunsch: "Gib mir heute etwas Rauhes und Kühles, so wie sich trockener Boden im Schatten anfühlt.",
    bedingungen: [
      { typ: "verlange_oberflaeche", wert: "rauh", grund: "Zu glatt. Es rutscht ihm davon." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm. Er löst sich davon auf." },
    ],
    belohnung: "Der Staub sammelt sich zufrieden und mit frischer Energie.",
  }],
  walddrache: [{
    wunsch: "Diesmal etwas Stilles und Kühles, das den Boden nie verlassen hat.",
    bedingungen: [
      { typ: "verbiete_herkunft", wert: "himmel", grund: "Das ist nicht vom Boden. Er schüttelt sich." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm ist nicht gut für den Wald." },
      { typ: "verlange_klang", wert: "stumm", grund: "Ein Geräusch, Waldtiere mögen das nicht." },
    ],
    belohnung: "Moos wächst um sein Geweih. Neues Grün überall.",
  }],
  herzchendrache: [{
    wunsch: "Etwas Warmes, das aus dem Himmel in mein Herz kam.",
    bedingungen: [
      { typ: "verbiete_waerme_unter", wert: 1, grund: "Zu kalt. Sein Herz setzt aus." },
      { typ: "verlange_herkunft", wert: "himmel", grund: "Das kam nicht aus dem Himmel." },
    ],
    belohnung: "Herzen fliegen und große Freude macht sich breit.",
  }],
  rosendrache: [{
    wunsch: "Etwas ganz Glattes, das nicht aus dem Himmel kam.",
    bedingungen: [
      { typ: "verlange_oberflaeche", wert: "glatt", grund: "Das Rauhe macht die Blüten kaputt." },
      { typ: "verbiete_herkunft", wert: "himmel", grund: "Zu luftig. Sie wendet sich ab." },
    ],
    belohnung: "Neue Knospen öffnen sich an ihrer Krone, sie seufzt zufrieden.",
  }],
  schneckendrache: [{
    wunsch: "Etwas Kühles vom Wasser. Der Klang ist mir diesmal gleich.",
    bedingungen: [
      { typ: "verlange_herkunft", wert: "wasser", grund: "Das kam nicht vom Wasser." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm. Das verträgt er nicht." },
    ],
    belohnung: "Er zieht sich entspannt und gemächlich zurück.",
  }],
  monddrache: [{
    wunsch: "Etwas Kühles und Stilles, das die Luft gut kennt.",
    bedingungen: [
      { typ: "verbiete_herkunft", wert: "erde", grund: "Das kam vom Boden." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm. Ihr Schein schwächt sich ab." },
      { typ: "verlange_klang", wert: "stumm", grund: "Ein Laut stört das Mondlicht beim Scheinen." },
    ],
    belohnung: "Das Licht im Schlitz wird ruhig, silbern und zufrieden.",
  }],
  feuerschlangendrache: [{
    wunsch: "Etwas aus dem Himmel, das man hört.",
    bedingungen: [
      { typ: "verlange_herkunft", wert: "himmel", grund: "Das kam nicht von oben." },
      { typ: "verbiete_klang", wert: "stumm", grund: "Es schweigt. Sie will es zischen hören." },
    ],
    belohnung: "Sie züngelt zufrieden und verschwindet zurück ins Dunkel.",
  }],
  wasserschlangendrache: [{
    wunsch: "Etwas ganz Stilles und Kaltes.",
    bedingungen: [
      { typ: "verlange_klang", wert: "stumm", grund: "Ein Geräusch. Er zuckt zurück." },
      { typ: "verbiete_waerme_ueber", wert: -1, grund: "Zu warm." },
    ],
    belohnung: "Er kringelt sich zufrieden ein und gleitet davon.",
  }],
  zweikopfdrache: [{
    wunsch: "Diesmal etwas Stilles und Kühles. Für uns beide, wie immer.",
    bedingungen: [
      { typ: "verlange_klang", wert: "stumm", grund: "Beide Köpfe zucken bei dem Geräusch." },
      { typ: "verbiete_waerme_ueber", wert: 0, grund: "Zu warm. Beide schütteln sich." },
    ],
    belohnung: "Beide Köpfe nicken anerkennend und ziehen sich schnell zurück.",
  }],
};

// --- Story-Abhängigkeiten ----------------------------------------
// Drei Drachen in späteren Kapiteln verlangen etwas, das sich nur mit einer
// Zutat lösen lässt, die ein früherer Drache dagelassen hat. Der Kapitel-
// Aufbau sorgt dafür, dass der Geber immer im ersten Kapitel erscheint —
// und da man einen Drachen nur mit Erfolg abschließt, ist die Zutat dann da.
//   Herzchendrache  braucht  Wüstenglas    (vom Staubdrachen)
//   Rosendrachin    braucht  Sonnentränen  (vom Sonnendrachen)
//   Zweikopfdrache  braucht  Harzhannes    (vom Walddrachen)
export const DRACHEN_ABHAENGIG = {
  herzchendrache: {
    braucht: "wuestenglas",
    wunsch: "Gib mir etwas Warmes und Glattes vom Boden — wie ein Stein, der noch die Sonne hält.",
    bedingungen: [
      { typ: "verbiete_waerme_unter", wert: 1, grund: "Es fühlt sich kalt an. Sein Herzschlag stockt kurz." },
      { typ: "verlange_herkunft", wert: "erde", grund: "Es schmeckt nach Wolken oder Wasser." },
      { typ: "verlange_oberflaeche", wert: "glatt", grund: "Etwas kratzt. Sein Herzmuskel spannt sich an." },
    ],
    belohnung: "Der Herzdrache wird ruhig. Für einen Augenblick glüht der ganze Baum rosig.",
  },
  rosendrache: {
    braucht: "sonnentraenen",
    wunsch: "Gib mir etwas, das lautlos und glatt ist und nie den Boden berührt hat — so wie ein frisches Blütenblatt.",
    bedingungen: [
      { typ: "verlange_klang", wert: "stumm", grund: "Ein Geräusch, ihre Blütenblätter zittern." },
      { typ: "verbiete_herkunft", wert: "erde", grund: "Es riecht nach Erde, nicht nach Blüte. Sie wendet sich ab." },
      { typ: "verlange_oberflaeche", wert: "glatt", grund: "Etwas Rauhes kratzt über die Blüten. Sie schaudert." },
    ],
    belohnung: "Neue Knospen öffnen sich rund um den Schlitz, eine nach der anderen.",
  },
  zweikopfdrache: {
    braucht: "tannenharz",
    wunsch: "Wir wollen etwas Rauhes und Kaltes, das nicht vom Himmel kam. Wir beide.",
    bedingungen: [
      { typ: "verlange_oberflaeche", wert: "rauh", grund: "Zu glatt. Beide Köpfe schütteln sich." },
      { typ: "verbiete_herkunft", wert: "himmel", grund: "Das kam von weit oben. Keiner der beiden mag den Himmel." },
      { typ: "verbiete_waerme_ueber", wert: -1, grund: "Zu warm. Beide verziehen ihr Gesicht." },
    ],
    belohnung: "Beide Köpfe nicken zufrieden und ziehen sich dann zurück.",
  },
};
