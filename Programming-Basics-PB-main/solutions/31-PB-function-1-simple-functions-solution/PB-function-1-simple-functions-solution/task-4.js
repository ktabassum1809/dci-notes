/*
Task 4

Write a function called `startsWithCapitalLetter` that takes
a string in input and returns:

- `true`: if the first character is an uppercase letter
- `false`: if the first character is NOT an uppercase letter

For example:

startsWithCapitalLetter("Hello"); // true
startsWithCapitalLetter("javascript"); // false
startsWithCapitalLetter("Python"); // true

**HINT**:
How to check if a letter is uppercase?

let letter = "x";
letter === letter.toUpperCase(); // false

let capitalLetter = "Q";
capitalLetter === capitalLetter.toUpperCase(); // true
*/

function startsWithCapitalLetter(string) {
    return string[0] === string[0].toUpperCase();
}

console.log(startsWithCapitalLetter("Hello"));
console.log(startsWithCapitalLetter("javascript"));
console.log(startsWithCapitalLetter("Python"));
