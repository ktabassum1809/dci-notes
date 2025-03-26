import rls from "readline-sync"

const firstName = rls.question("give me a name: ")
const lastName = rls.question("give me a surname: ")

function greetFullName(string1, string2){
    return `Good morning, ${string1} ${string2}`
}

console.log(greetFullName(firstName, lastName))



const num1 = rls.questionInt("give me a number: ")
const num2 = rls.questionInt("give me another number: ")

function sum(number1, number2){
    return number1 + number2
}

console.log(sum(num1, num2))