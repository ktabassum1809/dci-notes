/*
Task 07

The function leadingZero takes in input a single a number and returns a string:

- if the number in input is less than or equal to 9, it will return it putting 
a 0 in front it
- otherwise it will return the same number

Rewrite it as a function expression.
*/

const leadingZero = function (n) {
  return n <= 9 ? `0${n}` : `${n}`;
};

console.log(leadingZero(8)); // 08
console.log(leadingZero(0)); // 00
console.log(leadingZero(10)); // 10
console.log(leadingZero(107)); // 107
console.log(leadingZero(2)); // 02
