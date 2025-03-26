// Let's make a simple math game

// The goal is to reach the number 513
// The player starts at 0
// The player can add one to their number
// The player can substract one from their number
// The player can double their number
// The player can halve their number

/*
Pseudocode:

Print game instructions
Set the goal number to 513
Set the current number to 0

While the game is running:
    Print the current number
    Print the goal number

    Ask the player which operation they want to perform
    Perform the operation

    If the current number is equal to the goal number:
        Print "You reached the goal!"
        End the game
*/


import readlineSync from "readline-sync"

// Print game instructions
console.clear()
console.log("Welcome to the math game!")
console.log("To stop playing, type 'stop'")
console.log("To add one, type 'add'")
console.log("To substract one, type 'sub'")
console.log("To double your number, type 'double'")
console.log("To halve your number, type 'halve'")

// Ask the player which operation they want to perform
// This function does not take in any arguments
// This function returns a string
function askOperation() {
    let input = readlineSync.question("What would you like to do?").toLowerCase()

    const operations = ["stop", "add", "sub", "double", "halve"]
    while (!operations.includes(input)) {
        console.log("Invalid operation. Allowed: ", operations.join(", "))
        input = readlineSync.question("What would you like to do?").toLowerCase()
    }

    return input
}

// Perform the operation
// This function takes in two arguments
// This function returns a number OR stops the program
function perform(operation, number) {
    switch (operation) {
        case "add":
            return number + 1
        case "sub":
            return number - 1
        case "double":
            return number * 2
        case "halve":
            return Math.round(number / 2) // Let's avoid decimals
        case "stop":
            console.log("Thanks for playing!")
            process.exit()
    }
}


// Main game loop
const goal = 513
let current = 0
let guesses = 0
while (true) {
    console.clear(`\n`)
    console.log(`Your current number is ${current}`)
    console.log(`The goal number is ${goal}`)

    const operation = askOperation()

    current = perform(operation, current)

    if (current === goal) {
        console.log(`You reached the goal with ${guesses} guesses!`)
        process.exit()
    }

    guesses++
}

// See how clean the main game loop is?
// All the logic is abstracted away into functions