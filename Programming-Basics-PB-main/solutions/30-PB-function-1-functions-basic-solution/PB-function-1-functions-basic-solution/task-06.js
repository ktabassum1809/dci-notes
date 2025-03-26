/**
 * Task 06
 *
 * Fix the code below so that it prints the right values to the console
 */

function haveEqualLength(string1, string2) {
  return string1.length === string2.length;
}

console.log(haveEqualLength("cat", "dog")); // true
console.log(haveEqualLength("house", "bookshelf")); // false
console.log(haveEqualLength("JavaScript", "Python")); // false
console.log(haveEqualLength("hello", "mouse")); // true
