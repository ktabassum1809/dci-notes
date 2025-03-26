# Lifecycle-Timer-Protokoll

Diese Übung handelt von der Praxis der React-Komponenten-Lebenszyklen.

## Aufgaben

### Aufgabe 1

- Arbeite in `App.jsx`
- Füge den String "Initial message" in das Standard-Array des useState in Zeile 4 ein

### Aufgabe 2

- Füge ein `useEffect` hinzu, um `log("First render")` nur beim ersten Mal zu rufen, wenn die Anwendung rendert
- Füge einen 5-Sekunden-Timer hinzu, der `log("After 5 seconds")` aufruft - dies muss nur einmal geschehen

### Aufgabe 3

Füge deine Antworten direkt hier in die README ein:

F: Warum ist dieser Code eine schlechte Idee: `useEffect(() => log("Messages changed!"), [messages])`
A: ???

F: Warum ist Zeile 9 eine schlechte Idee?
A: ???

F: Wenn Zeile 9 eine schlechte Idee ist, warum ist es dann in Ordnung, `log("Message from button")` im Button onClick zu haben?
A: ???

F: Wenn du die Seite aktualisierst, siehst du zwei Nachrichten: `Initial message` und `First render`. Nach 5 Sekunden bekommst du keine dritte Nachricht, sondern die zweite Nachricht ändert sich. Wenn du den Button zum Hinzufügen von Nachrichten _vor_ dem 5-Sekunden-Timer anklickst, verschwinden diese Nachrichten, nachdem der Timer abgelaufen ist. Was passiert hier?
A: ???

F: Wenn du wissen wolltest, wann und wie oft `App` neu rendert, wie würdest du das machen?
A: ???
