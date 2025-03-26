# Title

## last day:

- Introduction to JavaScript
- Declaration of variables
- Assignation of variables
- `const/let`
- Data types

## today:

- Expressions
- Operators
- Math

### resources:

- [Remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operatior](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Math.ceil()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
- [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [toFixed() - extra](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

### exercises

- Ex1: [04-PB-language-operators-basic](https://classroom.github.com/a/kWiuWqgg)
- Ex2: [05-PB-language-operators](https://classroom.github.com/a/zwDxteg3)

## Theory

### JavaScript Expressions

"Expression" is a common term, is any unit of code that resolves to a value. It can be…
- A literal value (literal expressions)<br>
`2`, `"Hello World"`, `true`
`const msg = "Hello"` - Here "Hello" is an expression

- An operation that produces a value<br>
`const result = 1+1` - Here "1+1" is an expression

We can create strings with single quotes, double quotes, backticks [🔗strings.js](strings.js)

```js
const hi1 = "Hello World";

const hi2 = "Hello World";

const hi3 = `Hello World`;
```

**String interpolation:** Template literal strings
Backticks give you more options, allowing you to embed expressions inside.

```js
const hi1 = "Hello World";
console.log(`I just wanted to say ${hi1}`);
```

### Operators [🔗operatorsLiveCoding.js](operatorsLiveCoding.js)
**Arithmetic operators:**<br>
`4 + 8` //addition<br>
`4 - 8` //subtraction<br>
`4 * 8` //multiplication<br>
`4 / 8` //division<br>
`4 % 8` //remainder<br>
`4 ** 8` //exponentiation

- Remainder
Returns the remainder left over after you've divided the left number into a number of integer portions equal to the right number.

- Exponent
Raises a base number to the exponent power, that is, the base number multiplied by itself, exponent times.
    5 ** 2 (returns 25, which is the same as 5 * 5)

**Shorthand increment and decrement operators, `++`, `--`** [🔗incrementDecrement.js](incrementDecrement.js)

```javascript
let x = 34;
let y = ++x;
```

**Comparison operators:** [🔗comparison.js](comparison.js)<br>
`result = x < y` //compare if x is less than y<br>
`result = x <= y` //compare if x is less or equal to y<br>
`result = x > y` //compare if x is greater than y<br>
`result = x >= y` //compare if x is greater than or equal to y


Strict equality: `===`, `!==` (recommended)

```javascript
console.log(3 === 3)
console.log(3 === 4)
```

Loose equality: `==`, `!=` (not recommended)

```javascript
console.log(3 == 3)
console.log(3 == "3")
```

## Math [🔗mathMethods.js](./mathMethods.js)

**Math.ceil()**
Round out the result to nearest integer

**Math.floor()**
Round DOWN the result to nearest integer

**Math.round()**
Round UP the result to nearest integer

**Math.random()**
Gives us a number from 0 to <1 (and then we can modify that output)

Randomness is used in many many different ways. From creating visual effects to generating data


### Wrap-up

- There are many many operators

- Strict equality checking with === is recommended

- An expression is any unit of code that resolves to a value

- `7 * 14` is an expression

- `Math.floor(Math.random() * 6) + 1` is an expression

- Randomness is actually super super useful

**Self-study** 
Shorthand addition and subtraction assignment operators: `+=`, `-=`