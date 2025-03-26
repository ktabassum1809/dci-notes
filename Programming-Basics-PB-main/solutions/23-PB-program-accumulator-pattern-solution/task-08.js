/**
 * Task 8
 * 
 * Create an empty string and a loop that goes from 0 to 50.
 * Inside the loop, check if the current index is divisible by 2, 3 or 5:
 * - if it's divisible by 2, add a 2 to the string
 * - if it's divisible by 3, add a 3 to the string
 * - if it's divisible by 5, add a 5 to the string
 * - otherwise, add an underscore `_` to the string 
 * 
 * At the end, print the string to the console
 * 
 * Expected output:
 * 2_23252_232_2_232_2_232_25232_2_23252_232_2_232_2_2
 */

let result = "";

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        result += 2;
    } else if (i % 3 === 0) {
        result += 3;
    } else if (i % 5 === 0) {
        result += 5;
    } else {
        result += "_";
    }
}

console.log(result);