# MongoDB Atlas CRUD-Test

Die Übung konzentriert sich auf (CRUD) Operationen in MongoDB Atlas

- Verbinde dich mit MongoDB mit Compass
- Erstelle eine Datenbank mit dem Namen dci
- Wähle die dci-Datenbank aus

### ***ERSTELLEN***

- Erstelle die Sammlung "faculty" in der "dci"-Datenbank.
- Füge ein Fakultätsmitglied in die Sammlung "faculty" ein

```json
{
    "name": "Krish",
    "age": 35,"gender": "M",
    "exp": 10,
    "subjects": ["DS","C","OS"],
    "type": "Full Time",
    "qualification": "M.Tech"
},
```

- Füge viele Fakultätsmitglieder in die Sammlung "faculty" ein

```json
{
    "name": "Manoj",
    "age": 38,"gender": "M",
    "exp": 12,
    "subjects": ["JAVA","DBMS"],
    "type": "Full Time",
    "qualification": "Ph.D"
},
{
    "name": "Anush",
    "age": 32,
    "gender": "F",
    "exp": 8,
    "subjects": ["C","CPP"],
    "type": "Part Time",
    "qualification": "M.Tech"
},
{
    "name": "Suresh",
    "age": 40,
    "gender": "M",
    "exp": 9,
    "subjects": ["JAVA","DBMS","NETWORKING"],
    "type": "Full Time",
    "qualification": "Ph.D"
},
{
    "name": "Rajesh",
    "age": 35,
    "gender": "M",
    "exp": 7,
    "subjects": ["DS","C","OS"],
    "type": "Full Time",
    "qualification": "M.Tech"
},
{
    "name": "Mani",
    "age": 38,
    "gender": "F",
    "exp": 10,
    "subjects": ["JAVA","DBMS","OS"],
    "type": "Part Time",
    "qualification": "Ph.D"
},
{
    "name": "Sivani",
    "age": 33,
    "gender": "F",
    "exp": 8,
    "subjects": ["C","CPP","MATHS"],
    "type": "Part Time",
    "qualification": "M.Tech"
},
{
    "name": "Nagesh",
    "age": 39,
    "gender": "M",
    "exp": 11,
    "subjects": ["JAVA","DBMS","NETWORKING"],
    "type": "Full Time",
    "qualification": "Ph.D"
},
{
    "name": "Nagesh",
    "age": 35,
    "gender": "M",
    "exp": 9,
    "subjects": ["JAVA",".Net","NETWORKING"],
    "type": "Full Time",
    "qualification": "Ph.D"
},
{
    "name": "Latha",
    "age": 40,
    "gender": "F",
    "exp": 13,
    "subjects": ["MATHS"],
    "type": "Full Time",
    "qualification": "Ph.D"
},
{
    "name": "Suresh Babu",
    "age": 55,
    "gender": "M",
    "exp": 25,
    "subjects": ["MATHS","DE"],
    "type": "Full Time",
    "qualification": "Ph.D"
},
{
    "name": "Suresh Babu",
    "age": 55,
    "gender": "M",
    "exp": 25,
    "subjects": ["MATHS","DE"],
    "type": "Full Time",
    "qualification": "Ph.D"
}
```

### ***LESEN***

1. `Get` die Details aller Fakultätsmitglieder.
2. `Get` die Anzahl aller Fakultätsmitglieder.
3. `Get` alle Fakultätsmitglieder, deren Qualifikation "Ph.D" ist.
4. `Get` alle Fakultätsmitglieder, deren Erfahrung zwischen 8 und 12 Jahren liegt.
5. `Get` alle Fakultätsmitglieder, die "MATHS" oder "NETWORKING" unterrichten.
6. `Get` alle Fakultätsmitglieder, die "MATHS" unterrichten und deren Alter über 30 Jahre ist und deren Qualifikation "Ph.D" sein muss.
7. `Get` alle Fakultätsmitglieder, die Teilzeit arbeiten oder "JAVA" unterrichten.
8. `Get` nur den Namen und die Qualifikation aller Fakultätsmitglieder.
9. `Get` den Namen, die Qualifikation und die Erfahrung aller Fakultätsmitglieder und zeige diese in aufsteigender Reihenfolge der Erfahrung an.

### ***AKTUALISIEREN***

1. `Update` die Daten aller Fakultätsmitglieder, indem du ihr Alter und ihre Erfahrung um ein Jahr erhöhst.
2. `Update` das Fakultätsmitglied "Sivani" mit den folgenden Daten: aktualisiere die Qualifikation auf "Ph.D" und den Typ auf "Full Time".
3. `Update` alle Fakultätsmitglieder, die "MATHS" unterrichten, so dass sie nun auch "PSK" unterrichten sollten.

### ***LÖSCHEN***

1. `Delete` alle Fakultätsmitglieder, deren Alter über 55 Jahre ist.
2. `Delete` das Fakultätsmitglied, dessen Alter 33 ist.
3. `Delete` das Fakultätsmitglied, dessen Erfahrung weniger als 10 Jahre beträgt und dessen Typ Teilzeit ist.

Wer ist zu diesem Zeitpunkt noch übrig?
