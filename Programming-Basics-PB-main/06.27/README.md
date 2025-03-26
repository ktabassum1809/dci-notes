# Title

## last day:

- Expressions
- Operators
- Math

## today:

- Working with strings
- Basic string methods
- Using NPM to make an interactive prompt

### resources:

- [`String.prototype.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [`String.prototype.toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [`String.prototype.toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [`String.prototype.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [`String.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- [`String.prototype.trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [readline-sync documentation](https://www.npmjs.com/package/readline-sync)

### exercises

- Ex1: [06-PB-language-strings-basic](https://classroom.github.com/a/G2aAISJo)
- Ex2: [07-PB-language-strings](https://classroom.github.com/a/DF3YBqST)
- Ex3: [08-PB-language-string-methods](https://classroom.github.com/a/5m9JWg6g)<br>
  Optional:
- Ex4: [09-PB-language-adventure-game-character-1](https://classroom.github.com/a/vxPyP6Q3)

## Theory

### Working with strings

Escaping special chars: `\'`, `\""`, `\n` [escapingSpecialChars.js](escapingSpecialChars.js)

Getting the length of a string: `String.prototype.length` [stringLength.js](escapingSpecialChars.js)

Getting a character in a string: bracket notation `[]` [bracketNotation.js](bracketNotation.js)

- We can access each character of a string using "bracket notation"
- We start counting from zero `[0]`

Basic String Methods -> [basicStringMethods.js](basicStringMethods.js)

## Wrap-up

- We can access specific characters in a string with bracket notation
- Character at index 0 is the first character
- We can get the length of a string with `String.prototype.length`
- We can escaping special chars in strings like this: `\'`, `\"`, `\n`
- The method `String.prototype.toUpperCase()` makes a string capitalized
- The method `String.prototype.toLowerCase()` makes a string lowercased
- The method `String.prototype.slice()` extracts a part of the string
- The method `String.prototype.includes()` returns a boolean answering if the string includes those specific characters
- The method `String.prototype.trim()` takes the empty spaces at the beginning and end of the string
- The readline-sync installed with NPM allows us to ask for user input strings [little example](./interactive-prompt/readline.js) + [more complete example](./interactive-prompt/readlineComplete.js). Remember using `npm install readline-sync` and addding `"type": "module", to the package.json`