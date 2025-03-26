/*
Task 3

Fix the code below so that `result` contains the sum of only
the even numbers

Expected output:
20
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let result = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        result += numbers[i];
    }
}

console.log(result);