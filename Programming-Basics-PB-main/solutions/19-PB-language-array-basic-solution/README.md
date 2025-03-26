# Array


## Task 01

Fix the code below so that the array animals is printed to the console


```js
const animals = "giraffe", "cat", "dog", "mouse", "koala";

console.log(animals);
```


## Task 02

Complete the code below so that:

- the output of the first `console.log()` is Julia
- the output of the second `console.log()` is Tom
- the output of the third `console.log()` is Gina


```js
const people = [];

console.log(people[0]); // Julia
console.log(people[1]); // Tom
console.log(people[2]); // Gina
```


## Task 03

Complete the code below so that:

- the first `console.log()` outputs London
- the second `console.log()` outputs Berlin


```js
const cities = ["Berlin", "Leipzig", "London", "Rome", "Tokyo"];


console.log(); // London
console.log(); // Berlin 
```


## Task 04

Complete the code so that the console.log() outputs always the last item in the array, _without mutating the original array_, no matter how long is the array.

For example:

```js
["a", "b", "c", "d", "e"] => "e"
["a", "b", "c", "d", "e", "f"] => "f"
["a", "b", "c", "d", "e", "f", "g", "h", "i"] => "i"
```
The console.log() should be only one and work for every array


```js
const letters = ["a", "b", "c", "d", "e"];

console.log(letters[]);
```


## Task 05

Complete the code below:

- if the current length of the array is odd, we push just 1 "*"" 
- if the current length of the array is even, we push 2 "*""

In the end, the new array should always have an even number of items


```js
const array = ["*", "*", "*", "*", "*"];

let newArrayLength = ? array.push("*"): array.push("*", "*");

console.log(newArrayLength);
```


## Task 06

Complete the code below so that the variable `someDinosaurs` will contain a new array with only "triceratops" and "stegosaurus"

Expected output:

```plaintext
["triceratops", "stegosaurus"]
```


```js
const dinosaurs = [
  "t-rex",
  "brontosaurus",
  "triceratops",
  "stegosaurus",
  "brachiosaurus",
];

const someDinosaurs = ;

console.log(someDinosaurs);
```

## Task 7

Complete the code below so that `negativeNumbers` is an array containing only the last 4 elements from the array `numbers`.

Expected output:

```[-1, -2, -3, -4]```


```js
// don't touch this line
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4];

const negativeNumbers = numbers;

console.log(negativeNumbers);
```


## Task 08

Complete the code below so that the output in the console will be a string like the one below:

```plaintext
1-2-3-4-5
```


```js
const array = [1, 2, 3, 4, 5];

console.log(array);
```


## Task 09

Complete the code below so that the output in the console is an array like below:

```plaintext
["12", "35", "05"]
```


```js
let time = "12:35:05";

console.log();
```

## Task 10

Complete the code below so that the last item of the array is printed to the console

Expected output:
```plaintext
My favourite color is green
```

```javascript
const colors = ["red", "blue", "yellow", "brown", "green"];
const favouriteColor = colors[];

console.log(`My favourite color is ${favouriteColor}`)
```
