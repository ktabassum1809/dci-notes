/**
 * Task 05
 * 
 * Complete the code below:
 * 
 * - if the current length of the array is odd, we push just 1 "*"" 
 * - if the current length of the array is even, we push 2 "*""
 * 
 * In the end, the new length should always be an even number
 * 
 */

const array = ["*", "*", "*", "*", "*"];

let newArrayLength = !(array.length % 2 === 0) ? array.push("*") : array.push("*", "*");

console.log(newArrayLength.length);
