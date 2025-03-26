/**
 * Task 3
 * 
 * Create a function that takes a string in input 
 * and returns the same string with the first and last character capitalised
 * 
 * If the input string is an empty string, it returns an empty string
 */

function capitaliseFirstAndLast(string) {
  if (string === "") {
    return "";
  }
  const start = string[0].toUpperCase();
  const middle = string.slice(1, string.length - 1);
  const end = string[string.length - 1].toUpperCase();

  return `${start}${middle}${end}`;
}

console.log(capitaliseFirstAndLast("table")); // TablE
console.log(capitaliseFirstAndLast("cat")); // CaT
console.log(capitaliseFirstAndLast("js")); // JS
console.log(capitaliseFirstAndLast("")); // ""