import readlineSync from "readline-sync";


const name = readlineSync.question("What is your name? ");
const birthYearString = readlineSync.question("In which year were you born? ");
const birthPlace = readlineSync.question("In which city were you born? ");
const place = readlineSync.question("Where do you live now? ");
const currentYearString = readlineSync.question("What's the current year? ");

const nameCapitalised = name[0].toUpperCase() + name.slice(1).toLowerCase();
const birthPlaceCapitalised = birthPlace[0].toUpperCase() + birthPlace.slice(1).toLowerCase();
const placeCapitalised = place[0].toUpperCase() + place.slice(1).toLowerCase();
const currentYear = parseInt(currentYearString);
const birthYear = parseInt(birthYearString);

const introduction = `Hello! My name is ${nameCapitalised}. I was born ${
  currentYear - birthYear
} years ago in ${birthPlaceCapitalised}. Now I live in ${placeCapitalised}.`;

console.log("\n", introduction);
