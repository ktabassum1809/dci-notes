import rls from 'readline-sync'

let daughter = ""
let counter = 0

while (daughter !== "Jody" && counter < 5) {
    
    daughter = rls.question("Shout this name in the public speakers of the supermarket: ")
    console.log(`The name shouted was ${daughter}`)
    counter++
}

if (daughter === "Jody") {
    console.log("we found Jody in", counter, "attempts")
} else {
    console.log(`We tried finding Jody for ${counter} attempts, please report to the police`)
}
