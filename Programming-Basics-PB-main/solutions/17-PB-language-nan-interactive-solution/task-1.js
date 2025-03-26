import readlineSync from "readline-sync";

const inputAge = readlineSync.question("Enter your age:\n> ");
const inputCurrentYear = readlineSync.question("Enter the current year:\n> ");

const age = Number(inputAge);
const currentYear = Number(inputCurrentYear);

if (Number.isNaN(age) || Number.isNaN(currentYear)) {
	console.log("Error");
} else {
	console.log(`You were born in the year ${currentYear - age}`);
}
