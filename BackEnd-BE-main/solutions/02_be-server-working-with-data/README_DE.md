# Arbeiten mit Daten

Der Zweck dieser Übung ist es, grundlegende Datei I/O und Express Endpunkte zu üben.

## Was Du tun wirst

Deine Aufgabe ist es, einen einfachen Server zu erstellen, um Tierbeobachtungen zu notieren und aufzulisten.

## Aufgaben

### Aufgabe 1

- Füge die `express` Abhängigkeit hinzu
- Erstelle `.gitignore` und stelle sicher, dass node_modules nicht in git enthalten ist
- Erstelle `server.js` und füge einen einfachen Express-Server ohne Endpunkte hinzu, der auf Port 7771 hört

### Aufgabe 2

- Füge einen GET-Endpunkt hinzu, um den Inhalt von `sightings.txt` abzurufen
    - `GET http://localhost:7771/`
    - Lies den gesamten Text und antworte damit

### Aufgabe 3

- Füge einen POST-Endpunkt hinzu, der "species" aus der Anfrage erhält
    - `POST http://localhost:7771/`
    - Empfange im Body der POST-Anfrage eine Tierart
    - Füge das heutige Datum und die empfangene Art in `sightings.txt` ein

- *Hinweis:* Du kannst `new Date()` verwenden, um ein Datumsobjekt des aktuellen Datums zu erhalten
    - Das Formatieren von Daten kann komplex sein, vielleicht fragst Du Copilot oder ChatGPT?
    - Oder, natürlich, recherchiere auf MDN

