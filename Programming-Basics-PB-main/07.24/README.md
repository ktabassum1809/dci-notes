# Title

## last day:

- Object methods
    - Methods we already used before
    - Creating methods
- `this` keyword

[recap live coding with Pikachu](recapObjectsPikachu.js)

## today:

- Bracket notation with objects
- Convert objects into arrays
- Iterate through objects
- `for...in`

### resources:

- [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

### exercises

- Ex1: [43-PB-object-bracket-notation](https://classroom.github.com/a/c8_Sy7Dm)
- Ex2: [44-PB-object-nested-object-album](https://classroom.github.com/a/XG92nM1f)
- Ex3: [45-PB-object-nested-people](https://classroom.github.com/a/L3ofS4q9)

Optional
- [extraExercise.js](extraExercise.js)

## Theory

**Bracket notation with objects**

[bracketNotation.js](bracketNotation.js)

### Conversion and iterations

- Property names to array: `Object.keys(<object>)`

- Property values to array: `Object.values(<object>)`

- Property names and values to array: `Object.entries(<object>)`

[Live coding previous three methods](conversionIteration.js)
[Extra example about object conversion](extraExampleObjectConversion.js)

**`for...in`**

```js
//syntax:
for (let key in object) {
  //code to be executed
}

//example:
for (let key in pokedex1) {
  console.log(key + " " + pokedex1[key])
}
```

Example: [forIn.js](forIn.js)


Final example to [access nested objects](accessingNestedObjects.js)