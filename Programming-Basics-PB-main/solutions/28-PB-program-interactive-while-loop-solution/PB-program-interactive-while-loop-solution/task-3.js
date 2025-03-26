import readlineSync from "readline-sync";

const greetings = ["hi", "hello", "hola"];
let input;

while (input !== "STOP") {
  input = readlineSync.question("Enter a name: ");
  if (input !== "STOP") {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    const greeting = greetings[randomIndex];
    console.log(`${greeting}, ${input}`);
  }
}
