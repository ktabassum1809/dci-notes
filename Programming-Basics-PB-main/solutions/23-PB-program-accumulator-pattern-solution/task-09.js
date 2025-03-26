/**
 * Task 9
 * 
 * Use a loop to create a string containing all numbers from 0 to 10, separated
 * by a dash `-`
 * 
 * 
 * Expected output:
 * 0-1-2-3-4-5-6-7-8-9-10
 * 
 */

let result = "";

for (let i = 0; i <= 10; i++) {
    if (i !== 10) {
        result += i + "-";
    } else {
        result += i;
    }
}

console.log(result);