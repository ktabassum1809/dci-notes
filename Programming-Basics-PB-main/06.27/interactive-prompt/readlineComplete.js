import readlineSync from "readline-sync"

const firstName = readlineSync.question("What's your name? ")
const lastName = readlineSync.question("What's your last name? ")
console.log(`Welcome ${firstName} ${lastName}!`)

console.log(`\n\n${firstName}, type a word and I'll tell you its first letter`)
const word = readlineSync.question("Enter a word: ")
console.log(`The word you typed starts with the letter ${word[0]}`)

console.log("\n\nType another word, I'll calculate the middle letter")
const word2 = readlineSync.question("Enter a word: ")

const middleIndex = Math.floor(word2.length / 2)
console.log(`The middle letter of ${word2} is ${word2[middleIndex]}`)