import readline from "readline-sync";

console.clear();
console.log("Try to guess a number between 1 and 100!");

const number = Math.ceil(Math.random() * 100);
let guess = null;

while (guess !== number) {
  const userInput = readline.question("\nEnter a number between 1 and 100:\n");
  console.clear();
  guess = parseInt(userInput);
  console.log(`Your guess: ${guess}`);

  if (guess === number) {
    console.log("Congratulations, you won!");
  } else if (guess > number) {
    console.log("Wrong! Try with a lower number");
  } else {
    console.log("Wrong! Try with a higher number");
  }
}
