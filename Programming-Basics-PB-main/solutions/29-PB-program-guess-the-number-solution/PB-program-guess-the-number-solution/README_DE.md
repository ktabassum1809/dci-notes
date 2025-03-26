# Errate die Zahl

Erstelle ein Programm, das den Spieler herausfordert, eine Zahl zwischen 1 und 100 zu erraten.

## Anweisungen

- Das Programm generiert jedes Mal, wenn es ausgeführt wird, eine neue Zufallszahl und fordert den Spieler auf, diese zu erraten
- Wenn der Spieler die Zahl errät, gibt das Programm eine Glückwunsch-Nachricht aus und beendet die Ausführung
- Wenn die Vermutung falsch ist, teilt das Programm dem Spieler mit, ob die Vermutung höher oder kleiner als die Zufallszahl ist und bittet den Spieler, es weiter zu versuchen

## Zu verwendende Befehle

- `console.clear()`: löscht alles, was in der Konsole vorhanden ist
- `readline.question()`: Mit dem `readline-sync` Paket kannst du eine Eingabe von der Konsole erhalten und speichern
- `console.log()`: wie immer, benutze es, um jede Art von Nachricht an die Konsole auszugeben

## Bonus

Füge eine Funktion hinzu, um die Anzahl der verfügbaren Vermutungen zu begrenzen und sie auf dem Bildschirm auszudrucken

## Screenshots

### Start
![](assets/start.png)

### Falsche Vermutung
![](assets/lower-guess.png)

![](assets/higher-guess.png)

### Gewinn

![](assets/correct-guess.png)