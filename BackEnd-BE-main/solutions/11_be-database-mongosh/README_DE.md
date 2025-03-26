# Einige Übungen mit mongosh

Die MongoDB `mongosh` Shell ist sehr ähnlich wie die Node REPL. Dies ist eine Reihe von Mini-Übungen, um dir beim Lernen zu helfen.

## Aufgaben

Diese Aufgaben verwenden eine Datenbank namens "catsanctuary". Um zu starten, führe einfach `use catsanctuary` in mongosh aus.

Füge deine Antworten direkt hier in die README.md ein

### Aufgabe 1

- Was macht das Folgende, wenn du es ausführst?

    ```js
    const names = ["Missy", "Kissy", "Purr", "Snuffle", "Boog", "Maul", "Gorthalax Bonechewer"]
    names.forEach(name => {
        cats.insert({name, age: Math.ceil(Math.random()*20})
    })
    ```

    - Überlege, was der Code versuchen könnte zu tun
    - Behebe die Probleme mit dem obigen Code und führe ihn aus
    - HINWEIS: Nach dem Ausführen des Codes sollte `db.cats.countDocuments()` 7 zurückgeben

### Aufgabe 2

- Wie kannst du eine Liste aller Katzen ausdrucken?
- Was ist die ObjectID von Boog?
- Was gibt das zurück, wenn du es ausführst?

    ```js
    const oneCat = db.cats.findOne()
    oneCat._id.getTimestamp()
    ```

- Erkläre, was hier passiert

    ```js
    db.cats.find().map(x=>x.name)
    ```

- Angesichts der obigen Ergebnisse, wie würdest du den Namen und die Einfügezeit in die Datenbank aller Katzen ausdrucken?
- Wie würdest du das Durchschnittsalter aller Katzen berechnen?
