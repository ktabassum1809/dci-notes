# Fullstack-Authentifizierung

Erstelle eine Proof-of-Concept-Anwendung für Login und Registrierung.

## Aufgaben

### Aufgabe 1

- Untersuche das Frontend-Konzept im `frontend` Ordner
- Dies soll mit dem VS Code Live Server ausgeführt werden
- Erstelle eine einfache `register.html` Seite basierend auf `login.html`
- Frage nur nach Benutzername und Passwort

### Aufgabe 2

- Untersuche das Backend-Konzept im `backend` Ordner
- Erlaube Anfragen von überall (CORS)
- Verbinde dich mit MongoDB Atlas (Gib deine Zugangsdaten NICHT weiter!)
- Erstelle ein User-Schema und Modell mit einem einfachen `username` und `password`
- Erstelle die folgenden Endpunkte

    - `GET /users` <- gibt eine Liste aller Benutzer in der Datenbank zurück
    - `POST /login` <- erhält Benutzername und Passwort
    - `POST /register` <- erhält Benutzername und Passwort

### Aufgabe 3

- In `POST /login` 
    - Wenn der Login erfolgreich ist, gib das Geheimnis an das Frontend zurück
    - Wenn der Login fehlschlägt, gib HTTP 400 zurück

### Aufgabe 4

- In `login.html` speichere das Geheimnis in den Localstorage, nachdem der Login erfolgreich war
    - Dann aktualisiere die Seite
    - Überprüfe den Localstorage, wenn die Login-Seite geladen wird
    - Wenn der Localstorage das Geheimnis enthält, mache eine Anfrage an `GET /users`
        - Wenn die Anfrage erfolgreich ist, zeige eine Liste der Benutzer anstelle des Login-Bildschirms an

### Aufgabe 5

- In `GET /users` verlange das Geheimnis als Query-Parameter
    - Zum Beispiel `/users?secret=0cc175b9c0f1b6a831c399e269772661`
    - Wenn das Geheimnis korrekt ist, gib die Liste aller Benutzer zurück
    - Wenn das Geheimnis falsch ist, gib HTTP 401 zurück

- Was sind die Nachteile einer solchen Authentifizierung?
