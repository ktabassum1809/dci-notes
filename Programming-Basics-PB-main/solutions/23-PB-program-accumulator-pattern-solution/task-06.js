/**
 * Task 6
 *
 * Use a loop to calculate the sum of the even numbers between 0 and 100 (including 100),
 * the print the result to the console
 * 
 * Expected output:
 * 2550
 *
 */

let sum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(`The sum of the even numbers between 0 and 100 is ${sum}`);
