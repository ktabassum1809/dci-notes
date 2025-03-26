//! First, a simple function
// This does not take in arguments and does not return anything
function greet() {
    console.log("Hello!")
}

greet()
greet()
greet()


//! Second, a function that takes in arguments
console.clear()
function greetPerson(name) {
    console.log(`Hello, ${name}!`)
}

greetPerson("Alice")
greetPerson("Bob")
greetPerson("Beebelbrox")

//! Third, a function that returns a value
console.clear()
function makeGreeting(name) {
    return `Hello, ${name}!`
}

const greeting = makeGreeting("Xi") // The return value is stored in a variable
console.log(greeting)

console.log(makeGreeting("Juju")) // The return value is used directly


//! Fourth, a function that takes in arguments and returns a value
console.clear()
function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1))
}

console.log(randomNumber(10))
console.log(randomNumber(100))
console.log(randomNumber(1000))
console.log(randomNumber(10000))
console.log(randomNumber(100000))