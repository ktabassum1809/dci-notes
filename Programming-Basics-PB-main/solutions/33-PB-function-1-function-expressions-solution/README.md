# Function expressions


## Task 01

Rewrite the function declaration below as a one line arrow function expression.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));
console.log(add(6, 3));
console.log(add(4, 10));
```


## Task 02

Rewrite the function declaration below as a one line arrow function expression


```javascript
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(2)); // true
console.log(isEven(9)); // false
console.log(isEven(20)); // true
```
 
## Task 03

Rewrite the function below as a function expression.

```javascript
function getNumbersUntil(number) {
    const result = [];
    for (let i = 0; i < number; i++) {
        result.push(i);
    }
    return result;
}

const list1 = getNumbersUntil(10);
const list2 = getNumbersUntil(8);
const list3 = getNumbersUntil(20);

console.log(list1); // [0, 1, 2, 3, ..., 9]
console.log(list2); // [0, 1, 2, 3, ..., 7]
console.log(list3); // [0, 1, 2, 3, ..., 19]
```

## Task 04

Rewrite the arrow function below as a standard function declaration


```javascript
const double = number => number2 * 2;

console.log(double(9)); // 18
```

## Task 05

Rewrite the function declaration below as a function expression

```javascript
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
};

console.log(capitalize("table")); // Table
console.log(capitalize("cat")); // Cat
console.log(capitalize("hello")); // Hello
```


## Task 06

Rewrite the function below as an arrow function expression.


```javascript
function haveEqualLength(string1, string2) {
  return string1.length === string2.length;
}

console.log(haveEqualLength("cat", "dog")); // true
console.log(haveEqualLength("house", "bookshelf")); // false
console.log(haveEqualLength("JavaScript", "Python")); // false
console.log(haveEqualLength("hello", "mouse")); // true
```

## Task 07

The function leadingZero takes in input a single a number and returns a string:

- if the number in input is less than or equal to 9, it will return it putting a 0 in front it
- otherwise it will return the same number

Rewrite it as a function expression.

```javascript
const leadingZero = n => n <= 9 ? `0${n}` : `${n}`;

console.log(leadingZero(8)); // 08
console.log(leadingZero(0)); // 00
console.log(leadingZero(10)); // 10
console.log(leadingZero(107)); // 107
console.log(leadingZero(2)); // 02
```
