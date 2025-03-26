/**
 * Task 10
 * 
 * Use a loop that goes from 0 to 10 and adds, multiplies every number by 2 and
 * adds the result in an array. Print the array tot he console
 *
 *
 * Expected output:
 * [ 0,  2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]
 */

let result = [];

for (let i = 0; i <= 10; i++) {
  result.push(i * 2);
}

console.log(result);
