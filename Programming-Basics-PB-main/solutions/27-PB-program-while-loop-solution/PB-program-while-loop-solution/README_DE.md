# While-Schleife

## Aufgabe 1
  
Gegeben ist ein Array mit einer bestimmten Anzahl von Strings. Verwende eine While-Schleife, um das letzte Element aus der Liste zu entfernen, bis nur noch 3 Elemente übrig sind.
 
- Jedes Mal, wenn ein Element entfernt wird, gib eine Nachricht aus, um zu spezifizieren, welches Element entfernt wurde
- Gib eine Nachricht mit der Liste der verbleibenden Elemente aus
 
Funktioniert das Programm immer noch, wenn die ursprüngliche Liste weniger als 3 Elemente hat?

Eingabe:
```js
const items = ["pen", "chair", "cup", "laptop", "glass", "book"];
```

Erwartete Ausgabe:

```plaintext
Das Element book wurde aus der Liste entfernt.
Das Element glass wurde aus der Liste entfernt.
Das Element laptop wurde aus der Liste entfernt.

Verbleibende Elemente: [ 'pen', 'chair', 'cup' ]
```

## Aufgabe 2

Gegeben ist ein String, der einen numerischen PIN-Code mit einer anfänglichen Länge von weniger als oder gleich 6 darstellt. Verwende eine `while`-Schleife, um die fehlenden Ziffern hinzuzufügen, so dass der PIN-Code 6 Ziffern lang ist.

Jede hinzugefügte Ziffer sollte eine Zufallszahl zwischen `0` und `9` sein.

Beispiele:

```js
let pin = "56";

// mögliche Ausgabe
"568944"
```

```js
let pin = "811";

// mögliche Ausgabe
"811356"
```

```js
let pin = "";

// mögliche Ausgabe
"982362"
```

## Aufgabe 3

Verwende eine `while`-Schleife, um einen numerischen PIN-Code mit 4 zufälligen Ziffern zu erstellen.

Der PIN-Code sollte keine wiederholte Zahl enthalten.

Mögliche Ausgabe:

```plaintext
8746
```

## Aufgabe 4

Gegeben ist ein String `characters`, der das Alphabet und einige Sonderzeichen enthält. Erstelle ein Passwort der Länge 6, das nur Zeichen aus dem oben genannten String enthält.

Stelle sicher, dass jedes Zeichen im Passwort nur einmal vorkommt.

```javascript
let characters = "abcdefghijklmnopqrstuvwxyz!+?*";
```

Mögliche Ausgabe:

```plaintext
!dyljm
```

## Aufgabe 5

Schreibe ein Programm, das den Benutzer eine Frage stellt, die eine `yes` oder `no` Antwort akzeptiert.

Wenn die Antwort nicht `yes` oder `no` ist, wiederholt das Programm die gleiche Frage.

Zum Beispiel:

```plaintext
Bist du sicher? (yes/no): bla

Bist du sicher? (yes/no): ja

Bist du sicher? (yes/no): asd

Bist du sicher? (yes/no): no
```
