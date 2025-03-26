import bcrypt from "bcrypt";
import { readFromFileSystem } from "./lib.js";

const userInput = process.argv[2];

console.log(process.argv[2]);

async function login(password) {
  const hashedPassword = readFromFileSystem();
  const checkPassword = await bcrypt.compare(password, hashedPassword);

  if (checkPassword) {
    console.log("Password is correct, you are logged in!");
  } else {
    console.log("Wrong password, try again!");
  }
}

if (!userInput) {
  console.log("Please provide a password");
} else {
  login(userInput);
}
