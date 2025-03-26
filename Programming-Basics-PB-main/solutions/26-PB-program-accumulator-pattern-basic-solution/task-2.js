/*
Task 2

Fix the code below to calculate the sum of all numbers in the
array and print the result to the console

Expected output:
15
*/

const numbers = [1, 2, 3, 4, 5];

let result = 0;

for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
}

console.log(result);