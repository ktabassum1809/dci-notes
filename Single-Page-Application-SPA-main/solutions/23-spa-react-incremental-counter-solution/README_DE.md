# Olivenzähler

Das Ziel dieser App ist es, den Umgang mit Zuständen, das Übergeben von Props und die bedingte Darstellung zu üben.

Diese App sollte einen Text basierend auf einer Zustandsvariable und einen Button rendern. Wenn der Button geklickt wird, sollte er einen Zähler erhöhen. Der Zähler sollte bei Null starten und mit dem `useState` Hook gehandhabt werden.

## Beispiel

![](example.gif)

## Aufgaben

### Aufgabe 1

- Lies `index.css`, verwende `.backgroundOlive` in dieser Aufgabe
- Implementiere die `Text` Komponente
   - Diese Komponente sollte nur ein `p` Element rendern
   - Diese Komponente sollte eine Prop akzeptieren: `count`
   - Wenn `count` größer als 5 ist, sollte der Absatz eine olivgrüne Hintergrundfarbe haben
   - Wenn `count` kleiner als 10 ist, sollte der Zählerstand im Absatz dargestellt werden

        > 'Der aktuelle Zählerstand ist: 3'

    - Wenn `count` größer als 10 ist, sollte der folgende Satz gerendert werden

        > 'Zählerstand ist größer als 10'

### Aufgabe 2

- Implementiere die `App` Komponente
    - Füge ein `useState` hinzu, um den Wert des Klickzählers zu speichern
    - Importiere die `Text` Komponente in `App` und rendere sie
    - Unter `Text` füge einen Button hinzu
        - Wenn dieser Button geklickt wird, erhöhe den `count` Zustand
