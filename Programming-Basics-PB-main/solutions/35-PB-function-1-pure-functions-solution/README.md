# Pure functions

## Task 1

The function below is relying on the global scope.

Transform it into a pure function so that the `console.log()` at the bottom give the correct result

```js
let n = 8;

function square() {
    return Math.pow(n, 2);
}

console.log(square(4)); // Expected output: 16
console.log(square(5)); // Expected output: 25
console.log(square(3)); // Expected output: 9
```

## Task 2

The function below is relying on the global scope.

Transform it into a pure function so that the `console.log()` at the bottom give the correct result

```js
let string = "hello";

function convertToUpperCase() {
    return string.toUpperCase();
} 

console.log(convertToUpperCase("hi")); // Expected output: "HI"
console.log(convertToUpperCase("javascript")); // Expected output: 'JAVASCRIPT'
console.log(convertToUpperCase("yo!")); // Expected output: 'YO!'
```

## Task 3

The function below is relying on the global scope.

Transform it into a pure function so that the `console.log()` at the bottom give the correct result

```js
let string = "hey";

function addDot() {
    return string + ".";
}

console.log(addDot('Well well well')); // Well well well.
console.log(addDot('yes')); // yes.
console.log(addDot('No')); // No.
```

## Task 4

The function below is relying on the global scope.

Transform it into a pure function so that the `console.log()` at the bottom give the correct result

```js
let sum = 0;

function add(a, b) {
    sum = a + b;
}

console.log(sum); // 10
console.log(add(1, 2)); // 3
console.log(add(5, 3)); // 8
console.log(add(8, 1)); // 9
```

## Task 5

The function below is relying on the global scope.

Transform it into a pure function so that the `console.log()` at the bottom give the correct result

```js
const numbers = [1, 2, 3, 4, 5];
let result = 0;

function sumNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
}

console.log(sumNumbers([1, 2, 3])); // 6
console.log(sumNumbers([4, 5, 6])); // 15
console.log(sumNumbers([1, 1, 1])); // 3
```