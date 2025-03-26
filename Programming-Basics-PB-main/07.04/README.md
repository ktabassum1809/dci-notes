# Arrays day 1

## last day:

- Truthy and falsy values
- Unit conversion
- Fallback value with `||`

## today:

- Array
  - Basic array methods
  - Array to string, string to array

### resources:

- [`Array.prototype.at()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [`Array.prototype.indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [`Array.prototype.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

### exercises

- Ex1: [19-PB-language-array-basic](https://classroom.github.com/a/6Nlb_3Qg)
- Ex2: [20-PB-language-array-challenges](https://classroom.github.com/a/cUFVjtO6)

## Theory

### Array

The Array object enables storing a collection of multiple items under a single variable name

- If variables are like labelled boxes, arrays are like a line of boxes
- Examples:

```js
const usernames = ["Nausica123", "Simon134", "Viktor3", "Ashwini456"];
// First value: "Nausica123"
// Second value: "Simon134"
// Third value: "Viktor3"
// Fourth value: "Ashwini456"
```

```js
const numbers = [1, 99, 2000, 5];

const productInfos = ["iPhone", 13, "Good condition", 400, true];
```

- Similarities between strings and arrays:
    - A string is kind of like an array of characters
    - As with strings, you can access array items with bracket notation
    - As with strings, each item in an array has an index
    - As with strings, the first index is 0

[using bracket notation in arrays](bracketNotationArrays.js)

### Basic array methods [arrayMethods.js](arrayMethods.js)

**Adding items: `Array.prototype.push()`, `Array.prototype.unshift()`**

    - `push()` - add elements to the end of an array
    - `unshift()` - add elements to the beginning of an array


**Removing items: `Array.prototype.pop()`, `Array.prototype.shift()`**

    - pop() - removes the last element from an array
    - shift() - removes the first element from an array


**Array.prototype.slice()**

    - slice() - creates a shallow copy of the original array.
        - A shallow copy is a copy (in this case) of the original array that depends on it until the moment the copy is created. Is not "live depending" on it.

**Array.prototype.includes()**
    
    - includes() - determines whether an array includes a certain value among its entries


### String to Array, Array to String [splitJoin.js](splitJoin.js)

`Split()`
Turn a string into array by splitting in a selected part of the string (example: after every space)

`Join()`
Turn an array into a string with a specific thing in between items (example: a space)


**Self-study**

- Finding Items: `Array.prototype.indexOf(<item>)`
- Manipulating arrays: `Array.prototype.reverse()`
- Manipulating arrays: `Array.prototype.splice()`

