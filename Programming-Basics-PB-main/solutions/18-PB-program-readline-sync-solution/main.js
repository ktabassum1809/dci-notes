import readlineSync from "readline-sync";

const name = readlineSync.question("What is your name? ");
const birthYearString = readlineSync.question("In which year were you born? ");
const birthPlace = readlineSync.question("In which city were you born? ");
const place = readlineSync.question("Where do you live now? ");
const currentYearString = readlineSync.question("What's the current year? ");
const currentYear = parseInt(currentYearString);
const birthYear = parseInt(birthYearString);

const introduction = `Hello! My name is ${name}. I was born ${
  currentYear - birthYear
} years ago in ${birthPlace}. Now I live in ${place}.`;

console.log("\n", introduction);
