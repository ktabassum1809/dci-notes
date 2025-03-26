/**
 * Task 07
 *
 * Fix the code below so that it prints to the console the expected output
 *
 * The function leadingZero takes in input a single a number and returns a string:
 *
 * - if the number in input is less than or equal to 9, it will return it putting
 * a 0 in front it
 * - otherwise it will return the same number
 *
 */

function leadingZero(number) {
  return number <= 9 ? `0${number}` : `${number}`;
}

console.log(leadingZero(8)); // 08
console.log(leadingZero(0)); // 00
console.log(leadingZero(10)); // 10
console.log(leadingZero(7)); // 07
console.log(leadingZero(2)); // 02
