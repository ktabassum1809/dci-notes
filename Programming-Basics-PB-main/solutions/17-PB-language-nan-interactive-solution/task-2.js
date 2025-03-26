import readlineSync from "readline-sync";

const inputPin = readlineSync.question(
  "Please, choose a numerical PIN of 4 digits (0-9):\n"
);
const pin = Number(inputPin);

if (Number.isNaN(pin) || inputPin.length !== 4) {
	console.log("ERROR: the pin you entered is not valid.");
} else {
	console.log("Thank you. The pin you chose was saved correctly.");
}

// Stricter solution
if (
	Number.isNaN(pin) ||
	inputPin.length !== 4 ||
	inputPin.includes("-") ||
	inputPin.includes("+") ||
	inputPin.includes(".")
) {
	console.log("ERROR: the pin you entered is not valid.");
} else {
	console.log("Thank you. The pin you chose was saved correctly.");
}
//=============================
//same but with &&:

if (!Number.isNaN(pin) && inputPin.length === 4) {
  console.log("Thank you. The pin you chose was saved correctly.");
} else {
  console.log("ERROR: the pin you entered is not valid.");
}

// Stricter solution
if (
  !Number.isNaN(pin) &&
  inputPin.length === 4 &&
  !inputPin.includes("-") &&
  !inputPin.includes("+") &&
  !inputPin.includes(".")
) {
  console.log("Thank you. The pin you chose was saved correctly.");
} else {
  console.log("ERROR: the pin you entered is not valid.");
}
