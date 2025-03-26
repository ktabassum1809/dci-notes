# Accumulator pattern basic

## Task 1

## Task 1

Fix the code below so that all the letters in the array are concatenated inside result


```js
const letters = ["a", "b", "c"];

let result = "";

for (let i = 0; i < letters.length; i++) {
    result += letters;
}

console.log(result);
```


Expected output:
```plaintext
abc
```
## Task 2

Fix the code below to calculate the sum of all numbers in the array and print the result to the console

```js
const numbers = [1, 2, 3, 4, 5];

let result = 0;

for (let i = 0; i < ; i++) {
    result += numbers[i];
}

console.log(result);
```

Expected output:
```plaintext
15
```

## Task 3

Fix the code below so that `result` contains the sum of only the even numbers


```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let result = 0;

for (let i = 0; i < numbers.length; i++) {
    if () {
        result += numbers[i];
    }
}

console.log(result);
```

Expected output:
```plaintext
20
```

Task 4

Fix the code below so that `result` contains only animals that contain the letter "o"

```js
const animals = ["cat", "mouse", "dog", "giraffe", "koala"];

const result = [];

for (let i = 0; i < animals.length; i++) {
  if (animals[i].includes("o")) {
    result.push();
  }
}

console.log(result);
```

Expected output:
```plaintext
[ 'mouse', 'dog', 'koala' ]
```

## Task 5

Complete the code below so that `result` will contain the list of names with the first letter capitalised

```js
const people = ["sophia", "peter", "julia", "mike", "martha"];

const result = [];

for (let i = 0; i < people.length; i++) {
  const capitalisedName = people[i][0].toUpperCase() + people[i].slice(1);
}

console.log(result);
```

Expected output:
```plaintext
[ 'Sophia', 'Peter', 'Julia', 'Mike', 'Martha' ]
```