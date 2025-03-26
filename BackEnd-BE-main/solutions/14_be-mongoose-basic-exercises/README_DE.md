# Mongoose Übungen

Diese Übung handelt davon, wie man grundlegende Operationen auf einer MongoDB-Datenbank mit Mongoose durchführt.

## Aufgaben

### Aufgabe 1

- Installiere die Abhängigkeiten mit `npm i`
- Erstelle `db.js`, um deine Datenbankkonfiguration und -verbindung zu speichern
- Exportiere aus `db.js` eine asynchrone Funktion namens `connect`
- `connect` sollte sich mit MongoDB verbinden und Verbindungsnachrichten einrichten

- Erstelle `models.js`, um dein Schema und Modell zu speichern
- Richte in `models.js` Schema und Modell für die folgenden Daten ein
- Untersuche die Daten und erfinde passende Namen für das Schema und Modell

- Datenbeispiel
    ```js
    // Beispiel 1
    {
        title: "t90official versus TaToH",
        winner: "TaToH",
        type: "play all five",
        loserScore: 1,
        winnerScore: 4
    }

    // Beispiel 2
    {
        title: "Villese versus Hera",
        winner: "Villese",
        type: "play all five",
        loserScore: 2,
        winnerScore: 3
    }

    // Beispiel 3
    {
        title: "t90official versus Viper",
        winner: "t90official",
        type: "play all five",
        loserScore: 0,
        winnerScore: 5
    }
    ```

### Aufgabe 2

- Erstelle `write.js`
- Importiere und rufe in `write.js` `connect` auf
- Importiere in `write.js` das Modell
- Füge mit dem Modell 900 Dokumente in die Datenbank ein
    - Tipp: erstelle einige Startdaten, wie zum Beispiel ein Array von Namen
    - Tipp1: verwende eine Funktion, um Objekte mit den Startdaten zu generieren

### Aufgabe 3

- Erstelle `read.js`
- Importiere und rufe in `read.js` `connect` auf
- Importiere in `read.js` das Modell
- Gib mit dem Modell die folgenden Daten mit `console.log` aus
    - wie viele Dokumente gibt es insgesamt
    - wie viele Dokumente hat t90official als Gewinner
    - wie viele Dokumente haben das Ergebnis 5-0
    - wie viele Dokumente haben das Ergebnis 4-1
    - wie viele Dokumente haben das Ergebnis 3-2
    - wie viele Dokumente hat t90official als Verlierer
