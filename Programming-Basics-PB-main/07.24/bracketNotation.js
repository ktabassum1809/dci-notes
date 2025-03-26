// Property names with spaces or special characters

const data = {
    id: 5,
    type: "couch potato",
    "first name": "Arturo",
    "last name": "Velvetfur",
    "pet-type": "Chinchilla",
    "@age": 9
}

console.log(data.id)
console.log(data["id"])
console.log(data["first name"])
console.log(data["pet-type"])
console.log(data["@age"])

// Property names that are numbers:

console.clear()
const numbers = {
    1: "one",
    2: "two",
    "3a": "three a",
    b3: "b three" // this one works also with dot notation
}

console.log(numbers["1"])
console.log(numbers["2"])
console.log(numbers["3a"])
console.log(numbers.b3)
console.log(numbers["b3"])

// Accessing a property based on a variable name
const data2 = {
    id: 5,
    type: "couch potato",
    "first name": "Arturo",
    "last name": "Velvetfur",
    "pet-type": "Chinchilla",
    "@age": 9
}

const targetProperty = "type"

// console.log(data2.type)
// console.log(data2["type"])

console.log(data2[targetProperty]) // should print "couch potato"
