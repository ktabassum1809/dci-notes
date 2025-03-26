/*
Task 3

Create a function called `isDivisibleBy`.

The function takes 2 numbers in input and returns:
- `true`: if the first number is divisible by the second
- `false`: if the first number is NOT divisible by the second

For example:

// is 9 divisible by 3?
isDivisibleBy(9, 3); // true

// is 10 divisible by 2?
isDivisibleBy(10, 2); // true

// is 15 divisible by 7?
isDivisibleBy(15, 7); // false
*/

function isDivisibleBy(a, b) {
  return a % b === 0;
}

console.log(isDivisibleBy(10, 2));
console.log(isDivisibleBy(9, 3));
console.log(isDivisibleBy(25, 5));
console.log(isDivisibleBy(18, 7));
