# Reduce

## Task 1

Given an array of numbers, use the reduce method to calculate the sum of only the even numbers in the array

Complete the code below

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven() {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}

const evenNumbersSum = numbers.reduce(sumIfEven, 0);

console.log(evenNumbersSum); // 30
```

## Task 2

Given an array of numbers, use the reduce method to calculate the sum of only the even numbers in the array

Complete and fix the code below

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven() {
  if (currentValue % 2 === 0) {
    return accumulator;
  } else {
    return ;
  }
}

const evenNumbersSum = numbers.reduce(sumIfEven, 100);

console.log(evenNumbersSum); // 30
```

## Task 3

Given an array of letters in input, use the reduce method to concatenate them all into a string

Fix the code below to get the right result

```js
const letters = ["a", "b", "c"];

const result = letters.reduce((accumulator, currentValue) => {}, 0);

console.log(result); // "abc"
```

## Task 4

Given an array of objects where every object represents an order with 2 properties:

- `id`: a unique numerical identifier
- `amount`: a quantity

```javascript
const orders = [
  {
    id: 1,
    amount: 250
  },
  {
    id: 2,
    amount: 400
  },
  {
    id: 3,
    amount: 100
  },
  {
    id: 4,
    amount: 325
  }
];
```

Use `reduce()` to get the total amount of all orders.


## Task 5

Given a string:

```javascript
const string = "read the friendly manual";
```

Use the `reduce()` method to get a new string containing only the initials of each word, capitalized

Expected output:

```javascript
RTFM
```

## Task 6

Given an array with strings:

```javascript
const fruit = ["banana", "apple", "kiwi", "mango", "strawberries"];
```

Use the `reduce()` method to combine the strings together and get an output like this:

```plaintext
Fruit salad: banana - apple - kiwi - mango - strawberries
```

## Task 7

Given an array of prices:

```javascript
const prices = ["19€", "109€", "60€", "12€"];
```

Use the `reduce()` method to calculate the sum of all the numbers in the array

Expected result:
```javascript
200
```

## Task 8

Given an array with person objects:

```javascript
const users = [
  {name: "Jake Smith", age: 20, city: "New York"},
  {name: "Anne Annson", age: 24, city: "London"},
  {name: "Pete Peterson", age: 31, city: "New York"},
  {name: "Martha Marty", age: 38, city: "New York"},
  {name: "Renato Romolo", age: 36, city: "Rome"},
  {name: "Philip Flip", age: 36, city: "London"},
];
```

Use the `reduce()` method to create a new object where users are grouped by city

Expected output:
```javascript

{
  "New York": [
    {name: "Jake Smith", age: 20, city: "New York"},
    {name: "Pete Peterson", age: 31, city: "New York"},
    {name: "Martha Marty", age: 38, city: "New York" },
  ],
  "London": [
    {name: "Anne Annson", age: 24, city: "London"},
    {name: "Philip Flip", age: 36, city: "London"},
  ],
  "Rome": [
    {name: "Renato Romolo", age: 36, city: "Rome"},
  ],
}
```
