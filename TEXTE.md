# Alle Texte — „Bonbons für Drachen"

Diese Liste enthält sämtliche im Spiel sichtbaren Texte. Bearbeite sie hier;
die Überschriften nennen jeweils den Ort (Datei + Schlüssel), damit ich die
Änderungen zurück in `data.js` übertragen kann.

Konvention: Sprüche in „…" spricht ein Wesen (Serif-Schrift), alles andere
ist Erzähltext (verspielte, serifenlose Schrift).

---

## Binder (`data.js` → `BINDER`)

**Mondkaramell** (`karamell.name` / `.beschreibung`)
> Zähflüssig und blass. Riecht und schmeckt nach fast nichts, die perfekte neutrale Basis.

**Daunensirup** (`sirup`)
> Weich auf der Zunge und komplett geräuschlos. Wer ihn hinunterschluckt, hört für einen kurzen Moment nur noch den eigenen Herzschlag.

**Eiszapfenharz** (`frostharz`)
> Kälter als Wassereis. Zieht die Wärme aus allem, womit man es mischt.

---

## Zutaten (`data.js` → `ZUTATEN`)

**Gewitterzucker** (`gewitterzucker`)
> Scharfkantige Kristalle, die auf der Zunge kleine Blitze schlagen. Geerntet kurz bevor der Regen fällt.

**Funkenrollis** (`funkenpollen`)
> Große Pollen von Blüten, die ausschließlich auf Brandflächen wachsen. Feiner Staub, der nach heißem Blech riecht.

**Aschenkirsche** (`aschenkirsche`)
> Außen glatt und hart verkohlt. Innen aber noch süß und warm. Sie gibt keinen Laut von sich.

**Nebelbeere** (`nebelbeere`)
> Kühl und glatt wie ein Morgen am Wasser und vollkommen still. Sehr schwer zu finden.

**Eiszahnminze** (`eiszahnminze`)
> Voller rauher Eiskristalle, die zwischen den Zähne knirschen. Wächst nur dort, wo Wasser dauerhaft im Schatten liegt.

**Wurzelholzsplitter** (`wurzelholz`)
> Schmecken nach altem Keller. Hinterlassen ein rauhes und splittriges Gefühl auf den Zähnen.

### Geschenk-Zutaten (erscheinen erst, wenn ein Drache/das Einhorn sie dalässt)

**Sturmkraut** (`sturmkraut`)
> Ein Bündel silbriger Blätter, kopfüber getrocknet. Sie rascheln trocken zwischen den Pfoten und riechen nach aufziehendem Wind.

**Schattenmelisse** (`schattenmelisse`)
> Wächst nur, wo die Sonne nie scheint. Getrocknet zerfällt sie schnell zu Staub. Dabei bleibt sie kühl und ganz leise.

**Glutfenchel** (`glutfenchel`)
> Gefiederte orangerote Blätter, die selbst getrocknet noch warm wirken. Zwischen den Zähnen knistern sie wie glimmende Kohle.

**Sonnentränen** (`sonnentraenen`)
> Schimmernde, glatte Tropfen. Warm und still aber wenn man näher hinhört knistern sie doch leise.

**Wüstenglas** (`wuestenglas`)
> Sand, der einmal so heiß wurde, dass er flüssig wurde und wieder erstarrte. Glatt, warm und ohne jedes Geräusch.

**Harzhannes** (`tannenharz`)
> Spröde und immer kühl. Aus der Rinde eines Baums gewonnen, der im Schnee gewachsen ist. Splittert rauh und leise zwischen den Zähnen.

**Einhornkacke** (`sternenstaub`)
> Niemand weiß, wo sie genau herkommt, nur dass sie manchmal am Astloch liegt, nachdem das Einhorn vorbeigekommen ist. Sanft und kühl in der Hand, und knattert wie ferne Püpse.

**Schneckenschleim** (`schneckenschleim`)
> Frisch von der Tischschnecke. Ziemlich kalt, glitschig glatt und unglaublich leise. Er dämpft jedes Geräusch im Bonbon.

**Schneckenperle** (`schneckenperle`)
> Eine glatte, schimmernde Perle, die der Schneckendrache in irmeliger Arbeit gerollt hat. Sie raschelt kaum hörbar.

---

## Einhorn (`data.js` → `EINHORN`)

**Erklärung beim ersten Besuch** (`erklaerung[0]`, `[1]`)
> „Hallo Bonbonwaldmaus. Du machst die besten Drachenbonbons weit und breit."

> „Drachen, die Hilfe brauchen, kommen zu dir, und du machst ihnen ein Bonbon aus einem Binder und zwei Zutaten. Deine schlauen Bücher hast du immer parat, falls du mal was vergessen hast."

**Auftritt** (`auftritt`)
> Ein Schimmer im Astloch. Etwas Elegantes, strahlend weißes schiebt sich neugierig heran.

**Wunsch** (`wunsch`)
> Das Einhorn will nichts Bestimmtes. Es schaut sich einfach nur um und lässt dir eine kleine Erinnerung da.

**Abschied (selten, mit Geschenk)** (`abschiedSelten`)
> Es schnaubt frech, lässt etwas am Baumloch zurück und ist verschwunden, bevor die Maus sich umdreht.

**Abschied (häufig, mit Deko)** (`abschiedHaeufig`)
> Bevor es geht, streift es mit der Mähne über das Baumloch und irgendwo im Holz bleibt etwas von seinem Glanz zurück.

**Schlaf-Übergänge** (`schlafText[0]`, `[1]`)
> Die Maus hängt macht noch kurz die Schüssel sauber. Draußen ist es schon dunkel, noch dunkler als sowieso. Die Sterne leuchten und sie kuschelt sich in ihren alten Ohrensessel. Ein guter erster Tag.

> Wieder viele Drachen heute, ein Bonbon nach dem anderen. Müde schließt die Maus die Augen und sinkt in ihren geliebten Sessel.

**Morgengruß** (`morgenText[0]`, `[1]`) — wird als „…" gesprochen
> Guten Morgen Maus wie geht's dir? Ich habe schon die ersten Drachen im Anflug gesehen. Hab einen schönen Tag!

> Fast geschafft, kleine Bonbonwaldmaus. Wenn du heute alle Drachen versorgst, kannst du erstmal Urlaub machen!

**Schlusswort** (`schlusswort`) — wird als „…" gesprochen
> Alle Drachen sind für's erste versorgt. Ruh dich jetzt aus, du hast es dir echt verdient.

**Abspann** (`ende`)
> Die Maus schnuffelt sich in den Ohrensessel und zieht die Decke bis zum Kinn. Wie es wohl den Drachen dort draußen gerade geht? Über diesem Gedanken schläft sie zufrieden ein. 

---

## Drachen (`data.js` → `DRACHEN`)

Für jeden Drachen: Name, Auftritts-Beschreibung, Wunsch (wird als „…" gesprochen),
die Ablehnungs-Gründe je Bedingung, und die Belohnung bei Erfolg.

### Die alte Rauchdrachin (`rauchdrachin`)
- **Auftritt:** Der Schlitz füllt sich mit einem großen Maul und einem gelben Auge. Rauch legt sich auf die Tischplatte.
- **Wunsch:** „Gib mir ein Bonbon, das schmeckt wie es kurz vor dem Gewitter riecht."
- **Grund (nicht kalt):** Sie zischt. Sie will nicht durch Kaltes gelöscht werden.
- **Grund (knistern):** Sie legt den Kopf schief. War da überhaupt ein Geräusch?.
- **Grund (Himmel):** Sie schnaubt. Das hier hat den Boden geküsst.
- **Grund (nicht glatt):** So glatt. Das rutscht ihr einfach von der Zunge.
- **Belohnung:** Die Rauchdrachin schließt die Augen und lässt Rauch entweichen. Ein Geräusch wie ein zufriedener Ofen.

### Der Schläfer (`schlaefer`)
- **Auftritt:** Ein halbgeschlossenes Augenlid im Nebel.
- **Wunsch:** „Ich schlafe schon seit vierzig Jahren durch, also weck mich nicht auf."
- **Grund (nicht warm):** Der Nebel kühlt ab und dünnt aus..
- **Grund (stumm):** Ein Knacken ist zu hören. Das Lid hebt sich einen Spalt.
- **Grund (Wasser):** Der Nebel bebt. Das hier war nie im Wasser.
- **Belohnung:** Nichts passiert aber der Nebel wird etwas dichter. Das ist alles, was der Schäfer zu geben hat und es reicht.

### Der Jungdrache (`jungdrache`)
- **Auftritt:** Zu klein für den Schlitz. Er klettert halb hinein, rutscht ab, versucht es nochmal. Ein Zahn wackelt.
- **Wunsch:** „Ich brauch' was zum Draufbeißen! Aber bloß nichts, was geflogen ist."
- **Grund (knirschen):** Er kaut zweimal und guckt enttäuscht. Nichts hat geknackt.
- **Grund (nicht zu heiß):** Er hustet laut. Das war zu heiß für ihn.
- **Grund (nicht Himmel):** Er spuckt es aus. Das kam ja wohl von weit oben.
- **Grund (rauh):** Zu rutschig. Da gibt's nichts zum Draufbeißen.
- **Belohnung:** Er beißt zu, das Knirschen hallt im Baum. Ein Wackelzahn landet auf der Tischplatte. Ein zufriedener Jungdrache.

### Der Sonnendrache (`sonnendrache`)
- **Auftritt:** Ein Schlitz voll gleißendem Licht. Man kann kaum hinsehen, so hell glüht seine Haut.
- **Wunsch:** „Ich mag was, das schmeckt wie Mittagslicht auf der Haut."
- **Grund (glühend):** Er schnaubt enttäuscht. Das war nur lauwarm.
- **Grund (nicht knirschen):** Es soll auf der Zunge schmelzen, nicht krachen.
- **Grund (nicht rauh):** Zu rauh. Das kratzt mich im Hals.
- **Belohnung:** Die Haut des Sonnendrachen leuchtet einen Moment hell auf. Es ist, als würde die Mittagssonne dir zulächeln.

### Der Staubdrache (`staubdrache`)
- **Auftritt:** Feiner Staub rieselt aus dem Schlitz, bevor überhaupt ein Kopf sichtbar wird. Er bewegt sich, als wäre er aus loser Erde gefügt.
- **Wunsch:** „Ich brauche etwas, das nach kühlem, altem Boden schmeckt."
- **Grund (kühl):** Er scheint zu zerbröseln. Das war ihm zu warm.
- **Grund (nicht knistern):** Ein Knistern wirbelt ihn zu sehr auf.
- **Belohnung:** Der Staubdrache sackt leicht in sich zusammen. Zufrieden und gesetzt.

### Der Walddrache (`walddrache`)
- **Auftritt:** Moos wächst am Rand des Lochs. Zwischen den Zähnen hängen Farnwedel, die er gar nicht zu bemerken scheint.
- **Wunsch:** „Gib mir etwas, das wie Erde nach dem Regen schmeckt. Aber leise, bitte."
- **Grund (nicht Himmel):** Nein, das kam nicht von der Erde.
- **Grund (stumm):** Ein Geräusch, fast wäre er davongerannt.
- **Grund (glatt):** So rauh! Er weicht zurück.
- **Belohnung:** Der Walddrache entspannt sich. Er verschwindet so lautlos wie er kam, nur ein paar Blätter wirbeln noch.

### Der Herzchendrache (`herzchendrache`) — Grundvariante
- **Auftritt:** Aus dem Schlitz schlägt ein Herzschlag, viel zu laut für ein so kleines Wesen. Kleine Wärmewolken pulsieren im Takt dazu.
- **Wunsch:** „Gib mir etwas ganz und gar Warmes, das sicher nie im Wasser lag."
- **Grund (nicht kalt):** Es fühlt sich kalt an. Sein Herzschlag setzt kurz aus.
- **Grund (nicht Wasser):** Es schmeckt nach Teich. Sein Herz mag nichts Nasses.
- **Belohnung:** Der Herzdrache ist ruhig und zufrieden. Für einen Moment glüht der ganze Schlitz in warmem Licht.

### Die Rosendrachin (`rosendrache`) — Grundvariante
- **Auftritt:** Zwischen aufgeplatzten Knospen schiebt sich eine Schnauze ins Licht. Der Duft kommt an, bevor er selbst zu sehen ist.
- **Wunsch:** „Gib mir etwas vollkommen Stilles und Glattes, so zart wie ein junges Blütenblatt."
- **Grund (stumm):** Ein Geräusch, die Blütenblätter zittern.
- **Grund (glatt):** Etwas kratzt an den Rosen. Sie schaudert.
- **Belohnung:** Neue Knospen öffnen sich an der Krone der Rosendrachin und sie duftet ganz wunderbar.

### Der Schneckendrache (`schneckendrache`)
- **Auftritt:** Es dauert. Erst rutscht eine glänzende Spur über die Kante, dann, viel später, der Rest von ihm.
- **Wunsch:** „Gib mir etwas Stilles, Kühles vom Wasser. Und lass dir ruhig Zeit."
- **Grund (stumm):** Ein Geräusch, und er zieht sich kurz zurück.
- **Grund (Wasser):** Er weicht zurück. Das kam doch aus der Luft oder dem Boden, oder? Jedenfalls nicht vom Wasser.
- **Grund (nicht warm):** Zu warm. Da trocknet er zu schnell aus.
- **Belohnung:** Er zieht in aller Ruhe weiter, eine glänzende Spur hinter sich herziehend.
- **Extra:** Reicht man ihm direkt Schneckenschleim (grün leuchtende Schnecke anklicken), lässt er eine Schneckenperle da.

### Der Monddrache (`monddrache`)
- **Auftritt:** Blasses Licht am Baumloch, kühl und ohne Wärme. Kleine Funken schweben darin wie Staub im Mondlicht.
- **Wunsch:** Ich möchte etwas Kühles, das nie den Boden berührt hat."
- **Grund (nicht warm):** Es wärmt ihn. Das mag er nicht.
- **Grund (nicht Erde):** Er schüttelt sich. Das kam vom Boden.
- **Belohnung:** Das Licht im Schlitz wird ruhig und ganz silbern. Für einen Moment ist der ganze Raum davon erfüllt.

### Der Feuerschlangendrache (`feuerschlangendrache`)
- **Auftritt:** Ein dünner, glühender Faden windet sich durchs Astloch — winzig, kaum größer als die Maus selbst, aber er riecht nach heißem Blech.
- **Wunsch:** „Gib mir etwas, das knistert wie ein frischer Funke."
- **Grund (warm):** Zu lau. Er züngelt enttäuscht.
- **Grund (knistern):** Es soll knistern, nicht leise sein.
- **Belohnung:** Er schnellt einmal kurz hoch, als hätte ihn selbst ein Funke erwischt, und schlängelt sich zufrieden zurück ins Dunkel.

### Der Wasserschlangendrache (`wasserschlangendrache`)
- **Auftritt:** Ein schmaler, kühler Schatten gleitet lautlos durchs Astloch — winzig wie sein feuriger Gegenpart, aber ganz still.
- **Wunsch:** „Gib mir ein Bonbon, das kühl und still ist wie Wasser im Schatten."
- **Grund (kühl):** Zu warm. Er zuckt zurück.
- **Grund (Wasser):** Das kam nicht aus dem Wasser.
- **Belohnung:** Er kringelt sich einmal zufrieden zusammen und gleitet dann lautlos davon.

### Der Zweikopfdrache (`zweikopfdrache`) — Grundvariante
- **Auftritt:** Zwei Köpfe drängen sich ans Astloch, einer knapp hinter dem anderen, und beide mustern die Maus mit demselben Blick.
- **Wunsch:** „Wir wollen beide etwas Rauhes, das nicht von oben kommt."
- **Grund (rauh):** Zu glatt. Beide Köpfe schütteln sich.
- **Grund (nicht Himmel):** Das kam doch eindeutig von oben.
- **Belohnung:** Beide Köpfe nicken wohlwollend, dann ziehen sie weiter.

---

## Drachen — zweiter Auftritt (`data.js` → `DRACHEN_ALT`)

Kommt ein Drache in einem späteren Kapitel noch einmal, sagt er etwas anderes.

### Rauchdrachin
- **Wunsch:** „Diesmal etwas, das durch und durch glüht aber nicht zwischen den Zähnen knirscht."
- **Grund (glühend):** Nur lauwarm. Sie faucht.
- **Grund (nicht knirschen):** Es knirscht. Das mag sie heute einfach nicht.
- **Belohnung:** Sie lässt eine heiße, dankbare Rauchwolke steigen.

### Schläfer
- **Wunsch:** „Etwas Stilles und Kühles, ganz gleich woher."
- **Grund (nicht warm):** Warm mag er nicht, der Nebel dünnt dann aus.
- **Grund (stumm):** Ein Laut? Seine Lider zucken.
- **Belohnung:** Der Nebel schwallt über die Kante. Er schläft und schwebt weiter.

### Jungdrache
- **Wunsch:** „Diesmal was richtig Eisiges mit großem Knall!"
- **Grund (knirschen):** Es hat nicht geknackt. Er guckt enttäuscht.
- **Grund (nicht warm):** Zu warm. Er will es wirklich eiskalt.
- **Belohnung:** Es knackt eisig zwischen seinen Zähnen. Er quietscht vor Freude.

### Sonnendrache
- **Wunsch:** „Heute bitte etwas Heißes, das vom Himmel kam."
- **Grund (Himmel):** Das hat nie den Himmel gesehen.
- **Grund (warm):** Zu kühl für die Mittagssonne.
- **Belohnung:** Sein Licht strahlt und wärmt deine Mausenase bevor er weiterzieht.

### Staubdrache
- **Wunsch:** „Gib mir heute etwas Rauhes und Kühles, so wie sich trockener Boden im Schatten anfühlt."
- **Grund (rauh):** Zu glatt. Es rutscht ihm davon.
- **Grund (kühl):** Zu warm. Er löst sich davon auf.
- **Belohnung:** Der Staub sammelt sich zufrieden und mit frischer Energie.

### Walddrache
- **Wunsch:** „Diesmal etwas Stilles und Kühles, das den Boden nie verlassen hat."
- **Grund (nicht Himmel):** Das ist nicht vom Boden. Er schüttelt sich.
- **Grund (nicht warm):** Zu warm ist nicht gut für den Wald .
- **Grund (stumm):** Ein Geräusch, Waldtiere mögen das nicht.
- **Belohnung:** Moos wächst um sein Geweih. Neues Grün überall.

### Herzchendrache
- **Wunsch:** „Etwas Warmes, das aus dem Himmel in mein Herz kam."
- **Grund (warm):** Zu kalt. Sein Herz setzt aus.
- **Grund (Himmel):** Das kam nicht aus dem Himmel.
- **Belohnung:** Herzen fliegen und große Freude macht sich breit.

### Rosendrachin
- **Wunsch:** „Etwas ganz Glattes, das nicht aus dem Himmel kam."
- **Grund (glatt):** Das Rauhe macht die Blüten kaputt.
- **Grund (nicht Himmel):** Zu luftig. Sie wendet sich ab.
- **Belohnung:** Neue Knospen öffnen sich an ihrer Krone, sie seufzt zufrieden.

### Schneckendrache
- **Wunsch:** „Etwas Kühles vom Wasser. Der Klang ist mir diesmal gleich."
- **Grund (Wasser):** Das kam nicht vom Wasser.
- **Grund (nicht warm):** Zu warm. Das verträgt er nicht.
- **Belohnung:** Er zieht sich entspannt und gemächlich zurück.

### Monddrache
- **Wunsch:** „Etwas Kühles und Stilles, das die Luft gut kennt."
- **Grund (nicht Erde):** Das kam vom Boden.
- **Grund (nicht warm):** Zu warm. Sein Schein schwächt sich ab.
- **Grund (stumm):** Ein Laut stört das Mondlicht beim Scheinen.
- **Belohnung:** Das Licht im Schlitz wird ruhig, silbern und zufrieden.

### Feuerschlangendrache
- **Wunsch:** „Etwas aus dem Himmel, das man hört."
- **Grund (Himmel):** Das kam nicht von oben.
- **Grund (nicht stumm):** Es schweigt. Er will es zischen hören.
- **Belohnung:** Er züngelt zufrieden und verschwindet zurück ins Dunkel.

### Wasserschlangendrache
- **Wunsch:** „Etwas ganz Stilles und Kaltes."
- **Grund (stumm):** Ein Geräusch. Er zuckt zurück.
- **Grund (kalt):** Zu warm. 
- **Belohnung:** Er kringelt sich zufrieden ein und gleitet davon.

### Zweikopfdrache
- **Wunsch:** „Diesmal etwas Stilles und Kühles. Für uns beide, wie immer."
- **Grund (stumm):** Beide Köpfe zucken bei dem Geräusch.
- **Grund (nicht warm):** Zu warm. Beide schütteln sich.
- **Belohnung:** Beide Köpfe nicken anerkennend und ziehen sich schnell zurück.

---

## Drachen — Story-Auftritt mit Geschenk-Zutat (`data.js` → `DRACHEN_ABHAENGIG`)

Diese drei Auftritte brauchen eine Zutat, die ein früherer Drache dagelassen hat.

### Herzchendrache — braucht Wüstenglas (vom Staubdrachen)
- **Wunsch:** „Gib mir etwas Warmes und Glattes vom Boden — wie ein Stein, der noch die Sonne hält."
- **Grund (nicht kalt):** Es fühlt sich kalt an. Sein Herzschlag stockt kurz.
- **Grund (Erde):** Es schmeckt nach Wolken oder Wasser. 
- **Grund (glatt):** Etwas kratzt. Sein Herzmuskel spannt sich an.
- **Belohnung:** Der Herzdrache wird ruhig. Für einen Augenblick glüht der ganze Baum rosig.

### Rosendrachin — braucht Sonnentränen (vom Sonnendrachen)
- **Wunsch:** „Gib mir etwas, das lautlos und glatt ist und nie den Boden berührt hat — so wie ein frisches Blütenblatt."
- **Grund (stumm):** Ein Geräusch, ihre Blütenblätter zittern.
- **Grund (nicht Erde):** Es riecht nach Erde, nicht nach Blüte. Sie wendet sich ab.
- **Grund (glatt):** Etwas Rauhes kratzt über die Blüten. Er schaudert.
- **Belohnung:** Neue Knospen öffnen sich rund um den Schlitz, eine nach der anderen.

### Zweikopfdrache — braucht Tannenharz (vom Walddrachen)
- **Wunsch:** „Wir wollen etwas Rauhes und Kaltes, das nicht vom Himmel kam. Wir beide."
- **Grund (rauh):** Zu glatt. Beide Köpfe schütteln sich.
- **Grund (nicht Himmel):** Das kam von weit oben. Keiner der beiden mag den Himmel.
- **Grund (kalt):** Zu warm. Beide verziehen ihr Gesicht.
- **Belohnung:** Beide Köpfe nicken zufrieden und ziehen sich dann zurück.

---

## Bücher (`data.js` → `BUCHWISSEN`)

**Von Zutaten und ihrer Art** (`zutatenkunde`)
> Gewitterzucker und Funkenpollen fielen beide aus dem Himmel und knistern auf der Zunge — der Zucker ist bloß warm, der Pollen glüht richtig. Aschenkirsche kam aus der Erde und glüht auch, bleibt dabei aber leise. Nebelbeere und Eiszahnminze stammen aus dem Wasser: die Beere ist kühl und schweigt, die Minze ist eisig und knirscht. Wurzelholz kam von der Erde, ist mild und knirscht wie die Minze. Achte auch darauf, wie sich eine Zutat anfühlt: manches ist glatt wie eine Perle, manches rauh und splittrig, manches pudrig wie Staub. Aschenkirsche und Nebelbeere sind glatt; Gewitterzucker, Eiszahnminze und Wurzelholz sind rauh; Funkenpollen ist pudrig. Selteneres, das Drachen und Einhorn dalassen, hat oft eine ganz eigene, glatte Art.

**Von Bindern und ihrer Wirkung** (`binderkunde`)
> Mondkaramell verändert nichts — es lässt jeder Zutat ihren eigenen Klang und ihre eigene Temperatur. Daunensirup dämpft jedes Geräusch. Frostharz entzieht die Wärme: aus Glut wird Wärme, aus Wärme wird Kühle.

**Von den Drachen der Luft** (`drachen_der_luft`)
> Rauchdrachen tragen Feuer in sich. Alles Kalte löscht sie von innen, das mögen sie nicht. Auch hören sie schlecht: was sie nicht knistern hören, halten sie für Betrug.

**Von den Drachen des Wassers** (`drachen_des_wassers`)
> Nebeldrachen sind kaum mehr als feuchte Luft, auch wenn sie das wohl anders sehen. Hitze löst sie auf und sie nehmen nur an, was aus dem Wasser kommt. Wer einen schlafenden Nebeldrachen weckt, wird sein blaues Wunder erleben, also Vorsicht!

**Von den Drachen der Erde** (`drachen_der_erde`)
> Die Feuerkammer bildet sich bei ihnen erst im dritten Jahrzehnt. Bis dahin verbrennt Glühendes sie von innen. Junge Wurzeldrachen misstrauen zudem allem, was geflogen ist — sie sagen, es habe den Boden betrogen.

**Von den Drachen der Sonne** (`sonnendrachen`)
> Sonnendrachen kennen keine halben Sachen. Was ihnen vorgesetzt wird, muss durch und durch glühen — alles andere schmeckt ihnen zu fad. Ein Krachen zwischen den Zähnen stört allerdings das Licht.

**Von den Drachen des Staubs** (`staubdrachen`)
> Staubdrachen sind alt und etwas spröde aber sehr gutmütig. Wärme lässt sie zerfallen, darum nehmen sie nur, was kühl ist. Ein Knistern versetzt sie in helle Aufregung und das mögen sie nicht.

**Von den Drachen des Waldes** (`walddrachen`)
> Walddrachen trauen nichts, was aus der Luft kommt. Sie lieben die Stille zwischen den Bäumen und reagieren auf jedes Geräusch extrem sensibel.

**Von den Drachinnen des Herzens** (`herzchendrachen`)
> Herzchendrachinnen brauchen Wärme wie andere die Luft zum atmen; alles Kalte lässt ihren Herzschlag kurz aussetzen. Sie mögen nur, was aus der Erde kommt, und es muss unbedingt glatt sein — das kleinste Kratzen kann ihr Herz leicht verletzen. Reine Erdzutaten, die warm und glatt zugleich sind, sind selten; es lohnt sich also aufzuheben, was die Drachen dalassen.

**Von den Drachinnen der Rosen** (`rosendrachen`)
> Rosendrachinnen sind empfindlich wie ihre Knospen. Ein Geräusch lässt sie erschauern, darum muss ihr Bonbon vollkommen still sein — ein dämpfender Binder wirkt da Wunder. Alles aus dem Boden weisen sie zurück, und es muss glatt und sanft sein wie ein Blütenblatt. Nur wenig, das aus Himmel oder Wasser kommt, ist glatt genug für sie; das Glatte, das die Sonne hinterlässt, ist ihnen am liebsten.

**Von den Drachen der Schnecke** (`schneckendrachen`)
> Schneckendrachen haben es niemals eilig. Ihr Bonbon muss still, kühl und aus dem Wasser sein — ein Geräusch lässt sie zurückweichen. Und wer die kleine Schnecke auf dem Tisch schon kennt: ihren Schleim kann man dem Drachen einfach so reichen, ganz ohne zu mischen. Zum Dank lässt er dann vielleicht etwas zurück.

**Von den Drachen des Mondes** (`monddrachen`)
> Monddrachen tragen kein Feuer in sich, nur blasses, reines Licht. Wärme lässt es flackern, und alles, was aus dem Boden kam, ist ihnen zu schwer für die klare Nacht.

---

## Mausreaktionen (`data.js` → `MAUSREAKTIONEN.zutat`)

Kurze Notizen, die die Maus zeigt, wenn man eine Zutat untersucht/legt.

- **Funkenpollen:** Sie niest. Jedes Mal.
- **Eiszahnminze:** Sie fasst das Glas nur am Rand an.
- **Nebelbeere:** Sie greift zweimal daneben.
- **Wurzelholzsplitter:** Sie riecht daran und zuckt mit den Ohren.
- **Aschenkirsche:** Sie nickt heftig. Sie liebt die einfach.
- **Gewitterzucker:** Sie hält sich das Glas ans Ohr.

---

## Sonstige UI-Texte (`index.html` / `spiel.js`)

- Titel (Browser-Tab): **Bonbons für Drachen**
- Regal-Überschriften: **Binder**, **Zutaten**, **Wissen**
- Buchrücken-Kürzel: **ZUTATEN**, **BINDER**, **DRACHEN**
- Buch-Kopfzeile: **Aus der Sammlung**, Fußzeile: „Blatt X von Y"
- Untersuchen-Karte: Label **Binder** / **Zutat**, Hinweis „Klick zum Zurücklegen"
- Misch-Knopf: **Mischen**
- Mulden-Platzhalter: **Binder**, **Zutat**
- Klick-Hinweise auf Karten: „Klick zum Weitermachen", „Weiter", „Klick, um es ziehen zu lassen", „Klick, um weiterzuträumen", „Klick, um in den Tag zu starten", „Ende"
- Geschenk-Karte: „**[Wer]** hat **[Zutat]** für dich dagelassen."
