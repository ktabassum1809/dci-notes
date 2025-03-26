import readlineSync from "readline-sync";

let input = "";

while (input !== "STOP") {
  console.clear();
  input = readlineSync.question("\nEnter an animal: ");
  if (input === "dog") {
    console.log("Woof! Woof");
  } else if (input === "cat") {
    console.log("Meoooow");
  } else if (input === "fish") {
    console.log("Blub blub");
  } else if (input !== "STOP") {
    console.log("Don't know that one");
  }
}
