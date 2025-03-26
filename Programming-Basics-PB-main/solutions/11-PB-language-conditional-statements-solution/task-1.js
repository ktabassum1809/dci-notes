/**
 * Task 1
 *
 * Declare a variable `username` that contains a string
 *
 * Write an if...else statement to check the value of the variable `username`
 * - if it's an empty string, print the message `Hello, guest!`
 * - otherwise print the message `Welcome back, <username>!`
 *
 * In the second message, replace `<username>` with the value of the variable
 */

const username = "";

if (username === "") {
  console.log(`Hello, guest!`);
} else {
  console.log(`Welcome back, ${username}`);
}
