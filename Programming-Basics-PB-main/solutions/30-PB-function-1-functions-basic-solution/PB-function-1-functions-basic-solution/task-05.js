/**
 * Task 05
 * 
 * Fix the code below so that it prints the correct values
 *
 */

function capitalize (string) {
  return string[0].toUpperCase() + string.slice(1);
};

console.log(capitalize("table")); // Table
console.log(capitalize("cat")); // Cat
console.log(capitalize("hello")); // Hello