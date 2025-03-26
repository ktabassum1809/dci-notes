import readlineSync from "readline-sync"

const firstName = readlineSync.question("What's your name?")
console.log(`Welcome ${firstName}`)