import readlineSync from "readline-sync";

let result = 0;
let input = 0;

console.log(
  "Enter positive numbers to add to a total.\nType a negative number to stop the program and get the result."
);

while (input >= 0) {
  input = readlineSync.question("Type any number to add: ");
  input = Number(input);
  if (input >= 0) {
    result += input;
  }
}

console.log(result);
