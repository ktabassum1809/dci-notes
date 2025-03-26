/*
Task 2

Create 3 functions called:

- isDivisbleBy3: it takes a number in input and returns:
    - `true`: if the number is divisible by 3
    - `false`: if the number is not divisible by 3
- isDivisbleBy5: same, with number 5
- isDivisbleBy7: same, with number 7

Call the functions with different values and output the result
to the console


For example:
isDivisbleBy3(9);  // true
isDivisbleBy3(8);  // false

isDivisbleBy5(9);  // false
isDivisbleBy5(10);  // true

isDivisbleBy7(21);  // true
isDivisbleBy7(10);  // false

**NOTE**: to know if a number is divisible by another number,
you have to check if the remainder of the division is equal to 0
*/

function isDivisbleBy3(n) {
  return n % 3 === 0;
}

function isDivisbleBy5(n) {
  return n % 5 === 0;
}

function isDivisbleBy7(n) {
  return n % 7 === 0;
}

console.log(isDivisbleBy3(9));
console.log(isDivisbleBy3(8));
console.log(isDivisbleBy5(10));
console.log(isDivisbleBy5(9));
console.log(isDivisbleBy7(21));
console.log(isDivisbleBy7(11));
