# Zufallszahlen

Diese Übung handelt von der Verwendung von Array-Zustandsvariablen.

Beachte, dass die Übung nicht mit Vite erstellt wurde; untersuche die `package.json`, um herauszufinden, wie du das Projekt starten kannst.

## Aufgaben

### Aufgabe 1

- Erstelle eine Komponente `RandomList` in `src/RandomList.js`, die eine Liste von Zufallszahlen speichert
- Speichere das Array der Zahlen mit `useState`
- Der Anfangszustand sollte ein leeres Array sein
- RandomList sollte auch ein Button-Element rendern

### Aufgabe 2

- Wenn du auf den Button klickst, füge eine weitere Zufallszahl zur Liste hinzu
- Experimentiere, indem du eine Zahl in das Array der Zustandsvariablen wie folgt einfügst:

  ```js
  numbers.push(Math.random());
  setNumbers(numbers);
  ```

Das wird nicht funktionieren, weil das Hinzufügen zu einem Array das ursprüngliche Array nicht ersetzt, und React wird nicht neu gerendert, es sei denn, der Zustandswert sieht neu aus. Das ist der gleiche Grund, warum du mit `push()` in ein Array einfügen kannst, das mit `const` als Konstante deklariert ist. Korrigiere den Code, damit `setNumbers` tatsächlich funktioniert.
