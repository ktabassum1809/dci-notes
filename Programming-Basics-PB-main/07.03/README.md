# Language (day 6)

## last day:

- Logical operators `&&` `||` `!`
- Ternary operator
- Switch statements

## today:

- Truthy and falsy values
- Unit conversion (to string, to number and to boolean)
- Assigning fallback value

### resources:

- [Falsy MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [Falsy from freecodecamp (only until the examples)](https://www.freecodecamp.org/news/what-are-falsey-values-in-javascript)
- [`String()` MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String)
- [`Number()` MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- [`Boolean()` MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)
- [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
- [What is parsing in JavaScript](https://www.altcademy.com/blog/what-is-parsing-in-javascript/#:~:text=When%20JavaScript%20parses%20code%2C%20it,Abstract%20Syntax%20Tree%20(AST).)
- [`parseInt()` MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [`parseFloat()` MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

### exercises

- Ex1: [16-PB-language-strings-and-numbers](https://classroom.github.com/a/cQsTXnmw)

<br> optional:

- Ex2: [17-PB-language-nan-interactive](https://classroom.github.com/a/VOF4AGEA)
- Ex3: [18-PB-program-readline-sync](https://classroom.github.com/a/zLLV4KKR)

## Theory

### Truthy and falsy values [Check if a value is truthy or falsy](./truthyFalsyMachine.js)

**Falsy values**

`false`, `0`, `""`, `null`, `undefined`, `NaN`, `-0`, `0n`

**Truthy values**

Any value that is not a falsy is a truthy.

### Fallback value [fallback.js](./readlineSync/fallback.js)

```javascript
let username = "" || "user"
```

A fallback value will allow us to have a default value in case the first value is not read. In the example, username has assigned the string "user"

### Unit conversion

**Converting to string** [unitConversionString.js](unitConversionString.js)

- `String(value)` - `String(-5.213)`

**Converting to number** [unitConversionNumber.js](unitConversionNumber.js)
- `Number(value)` - `Number("132")` - Number() will only convert number characters. Everything else will result into NaN

- `parseInt(value)` - `parseInt("132abc")` - parseInt() will convert numbers and ignore non-nummeric characters (the string, for example, should start with a number, if not, it will return NaN). It doesn't consider decimals.

- `parseFloat(value)` - `parseFloat("1.923")` - parseFloat() works like parseInt() but also considers decimals

**Converting to boolean** [unitConversionBoolean.js](unitConversionBoolean.js)
- `Boolean(value)`- `Boolean(9)` - Boolean() will turn truthy values into the boolean true and falsy values into false.

### Wrap-up

- There are 6 main falsy values, all the others, are truthy
- `String()` to convert into strings
- `Number()`, `parseInt()` and `parseFloat()` to convert into numbers
- `Boolean()` to convert into booleans
- `NaN` type is number
- We use `||` for fallback values
- Use strict equality `===`