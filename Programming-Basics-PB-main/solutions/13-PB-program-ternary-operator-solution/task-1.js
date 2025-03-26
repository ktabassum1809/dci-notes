/**
 * Task 1
 *
 * Create a variable `isMarried` and assign to it a `boolean` value
 *
 * Create another variable `message` which should containd one of the following
 * strings depending on the value of the boolean:
 *
 * - if `isMarried` is `true`, `message` should be equal to: John is happily married
 * - if `isMarried` is `false`, `message` should be equal to: John is not married
 *
 * Use the ternary operator to assign the correct string dynamically
 *
 * Print the message to the console
 *
 */

let isMarried = false;

let message = `John is ${isMarried ? "happily" : "not"} married`;

console.log(message);