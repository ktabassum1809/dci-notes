/*
Task 06
 
Rewrite the function below as an arrow function expression.

*/

const haveEqualLength = (string1, string2) => string1.length === string2.length;

console.log(haveEqualLength("cat", "dog")); // true
console.log(haveEqualLength("house", "bookshelf")); // false
console.log(haveEqualLength("JavaScript", "Python")); // false
console.log(haveEqualLength("hello", "mouse")); // true
