# React Router und useNavigate

Diese kleine Übung wird dir helfen, den React Hook `useNavigate` einzurichten und zu verwenden.

## Aufgaben

> 🧸 Sieh dir die vorhandenen Dateien an und mach dich mit dem Quellcode vertraut, bevor du anfängst!

### Aufgabe 1

Arbeite in der Datei [App.jsx](./src/App.jsx);

- Füge eine neue `<Route />` hinzu, die den Benutzer zur `Login`-Seite weiterleitet, wenn der `path` `login` entspricht
- Füge einen neuen `<Link>` zum `<nav>`-Element hinzu, damit der Benutzer zur `Login`-Seite navigieren kann

### Aufgabe 2

Arbeite in der Datei [components/Login.jsx](./src/components/Login.jsx);

- Füge einen Absende-`<button>` zur Seite hinzu
- Importiere und verwende den `useNavigate` Hook in [components/Login.jsx](./src/components/Login.jsx)
- Verwende den `useNavigate` Hook, um eine Logik zu schreiben, die den Benutzer beim Klicken auf den `<button>` zur `Home`-Seite weiterleitet
