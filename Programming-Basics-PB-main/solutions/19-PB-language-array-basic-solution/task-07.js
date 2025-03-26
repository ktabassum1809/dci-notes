/**
 * Task 7
 * 
 * Complete the code below so that `negativeNumbers` is 
 * an array containing only the last 4 elements from the array 
 * `numbers`.
 * 
 * Expected output:
 * 
 * [-1, -2, -3, -4]
 */

// don't touch this line
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4];

const negativeNumbers = numbers.slice(-4);

console.log(negativeNumbers);
