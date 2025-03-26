/**
 * Task 4
 *
 * Depending on the weather forecast you want to display a suggestion for something
 * to do.
 *
 * - if it's raining, display the message "Stay at home."
 * - if it's not raining, display the message "Go out!"
 *
 * Create a boolean to check if it's raining or not.
 *
 * Create another variable for the suggestion and assign to it the right string
 * depending on the valur of the boolean you just created
 *
 * Use the ternary operator and output the message to the console
 */

let isRaining = true;

let message = isRaining ? "Stay at home." : "Go out!";

console.log(message);
