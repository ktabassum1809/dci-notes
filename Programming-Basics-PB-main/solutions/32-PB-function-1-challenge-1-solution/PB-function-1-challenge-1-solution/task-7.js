/*
Task 7

Write a function called `containsNumber` 

The function takes a string in input and returns:

- `true`: if any of the characters in the string is a valid number
- `false`: if there are no numbers in the string

Examples:
```plaintext
containsNumber("123"); // true
containsNumber("abc"); // false
containsNumber("a2c"); // true
containsNumber("100px"); // true
containsNumber("1"); // true
containsNumber("0"); // true
containsNumber("$23.00"); // true
containsNumber("T-shirts x2"); // true
*/

function containsNumber(string) {
  for (let i = 0; i < string.length; i++) {
    const number = Number(string[i]);
    if (!Number.isNaN(number)) {
      return true;
    }
  }
  return false;
}

console.log(containsNumber("123")); // true
console.log(containsNumber("abc")); // false
console.log(containsNumber("a2c")); // true
console.log(containsNumber("100px")); // true
console.log(containsNumber("1")); // true
console.log(containsNumber("0")); // true
console.log(containsNumber("$23.00")); // true
console.log(containsNumber("T-shirts x2")); // true
