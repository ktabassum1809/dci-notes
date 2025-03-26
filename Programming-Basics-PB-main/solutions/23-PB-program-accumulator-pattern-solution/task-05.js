/**
 * Task 5
 * 
 * Use a loop to create an array containing the even numbers between 0 to 100, 
 * then print the whole array to the console
 * 
 * Expected output:
 * [0, 2, 4, 6, 8, 10, 12, ..., 96, 98, 100]
 *
 */

const evenNumbers = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

console.log(evenNumbers);
