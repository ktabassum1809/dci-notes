/**
 * Task 7
 *
 * Use a loop to calculate the sum of the odd numbers between 0 and 100 (including 100),
 * the print the result to the console
 * 
 * Expected output:
 * 2500
 *
 */

 let sum = 0;

 for (let i = 0; i <= 100; i++) {
   if (i % 2 === 1) {
     sum += i;
   }
 }
 
 console.log(`The sum of the odd numbers between 0 and 100 is ${sum}`);
 