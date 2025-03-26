/**
 * Task 2
 */

let pin = "65";

while (pin.length < 6) {
    // This will generate a random number between 0 and 9
    // This is not that important for the task
    // The focus should be on the while loop rather than the RNG
    const randomDigit = Math.ceil(Math.random() * 10) - 1;
    pin += randomDigit;
}

console.log(pin);