import bcrypt from "bcrypt";
import { writeToFileSystem } from "./lib.js";

const userInput = process.argv[2];

async function register(password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Your hashed password : ", hashedPassword);

  writeToFileSystem(hashedPassword);
}

if (!userInput) {
  console.log("Please provide a password");
} else {
  register(userInput);
}

console.log(process.argv[2]);
