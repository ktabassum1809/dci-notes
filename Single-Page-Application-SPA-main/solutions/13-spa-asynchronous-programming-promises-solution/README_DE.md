# JavaScript mit Promises

Promises sind Objekte, die das endgültige Ergebnis einer asynchronen Operation darstellen. Wir können sie nutzen, um nicht-blockierendes Verhalten zu handhaben.

## Aufgaben

### Aufgabe 1

Schreibe den folgenden Code in der angegebenen Reihenfolge:

1. Verwende `console.log()`, um den Text "Before" auszudrucken.
2. Verwende `fetch`, um die lokale Datei [data.json](./data.json) in deine Anwendung zu laden.
3. Verwende `console.log()`, um den Text "After" auszudrucken.

### Aufgabe 2 - Erstellen und Verwenden von Promises

1. Hänge eine `then()`-Methode an deine `fetch`-Anweisung an.
2. Schreibe innerhalb der `then()`-Methode eine `console.log()`-Anweisung, um den Text "Datei heruntergeladen" auszudrucken.
3. Führe deinen Code im Browser mit VS Live Server aus.
4. Sieh dir die **Konsole** in den Entwicklertools des Browsers an.

> Die Reihenfolge deiner `console.log()`-Anweisungen könnte dich überraschen!

### Aufgabe 3 - Überprüfen von Anfragen

1. Öffne den **Netzwerk**-Tab

![Netzwerk-Tab](./reference-1.png)

2. Wähle die Datei `data.json` aus der Liste der Anfragen aus (du musst möglicherweise die Seite neu laden, um sie zu sehen)

![data.json](./reference-2.png)

3. Ein zusätzliches Untermenü erscheint, in dem du weitere Details über die Anfrage einsehen kannst

![Details](./reference-3.png)

### Aufgabe 4

Durch die Überprüfung der zusätzlichen Details über die Anfrage, beantworte die folgende Frage:

- Wie lange hat der Browser gebraucht, um die Datei [data.json](./data.json) zu laden?
