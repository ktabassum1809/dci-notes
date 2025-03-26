/*
Task 4

Write a function called `isFirstLetterUpperCase`.

The function takes a string in input.

It returns:

- `true`: if the first letter is upper case
- `false` otherwise.

Examples:
isFirstLetterUpperCase("hello"); // false
isFirstLetterUpperCase("Hello"); // true
isFirstLetterUpperCase("Bianca"); // true
isFirstLetterUpperCase("jim"); // false
isFirstLetterUpperCase(""); // false
isFirstLetterUpperCase("A"); // true
*/

function isFirstLetterUpperCase(string) {
  if (string === "") {
    return false;
  } else {
    return string[0] === string[0].toUpperCase();
  }
}

console.log(isFirstLetterUpperCase("hello")); // false
console.log(isFirstLetterUpperCase("Hello")); // true
console.log(isFirstLetterUpperCase("Bianca")); // true
console.log(isFirstLetterUpperCase("jim")); // false
console.log(isFirstLetterUpperCase("")); // false
console.log(isFirstLetterUpperCase("A")); // true
