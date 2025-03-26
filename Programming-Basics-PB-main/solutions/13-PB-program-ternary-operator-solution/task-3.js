/**
 * Task 3
 * 
 * You want to show a different greeting message for users that have a username
 * and for user that don't.
 * 
 * - If the username is empty, output "Hello, dear guest!" to the console
 * - otherwise, assuming a username is "Unicorn123", output 
 *  "Welcome back, Unicorn123!"
 * 
 * Create a variable for the username and one for the welcome message.
 * 
 * Use the ternary operator to assign the right message
 * 
 */

let username = "Unicorn123";
let welcomeMessage = username !== "" ? `Welcome back, ${username}` : "Hello, dear guest";

console.log(welcomeMessage);