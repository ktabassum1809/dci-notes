/*
Task 1

Fix the code below so that all the letters in the array are
concatenated inside result

Expected output:
abc
*/

const letters = ["a", "b", "c"];

let result = "";

for (let i = 0; i < letters.length; i++) {
    result += letters[i];
}

console.log(result);