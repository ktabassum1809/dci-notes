// Task 5

let word = "fridge";
let lowerCaseWord = word.toLowerCase();

console.log(`Does the word ${word} contain the letter "q"?`, lowerCaseWord.includes("q"));

console.log(`Does the word ${word} contain the string "id"?`, lowerCaseWord.includes("id"));

console.log(`Does the word ${word} start with a vowel?`, "aeiou".includes(lowerCaseWord[0]));
