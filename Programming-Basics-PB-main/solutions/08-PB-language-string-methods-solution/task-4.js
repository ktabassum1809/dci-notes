// Task 4

let word = "JavaScript";

let firstLetter = word[0].toLowerCase();
let lastLetter = word[word.length - 1].toLowerCase();
let firstPart = word.slice(0, 4).toLowerCase();
let last5Letters = word.slice(-5).toLowerCase();


console.log(`Does the word ${word} start with the letter "c"?`, firstLetter === "c");
console.log(`Does the word ${word} start with the letter "j"?`, firstLetter === "j");

console.log(`Does the word ${word} end with the letter "y"?`, lastLetter === "y");
console.log(`Does the word ${word} end with the letter "t"?`, lastLetter === "t");

console.log(`Are the first 4 letters in the word ${word} equal to "abcd"?`, firstPart === "abcd");
console.log(`Are the first 4 letters in the word ${word} equal to "java"?`, firstPart === "java");

console.log(`Are the last 5 letters in the word ${word} equal to "cript"?`, last5Letters === "cript")