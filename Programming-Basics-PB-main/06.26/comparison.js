const age1 = 24
const age2 = 44
const age3 = 65

console.log(age1 <= age3) //expected output: true
console.log(age1 >= age3) //expected output: false

console.clear()

const ageVlad = 34
const favNum = "34"
const firstName = "Vlad"
const ageEloy = 32

// Strict equality
console.log(ageVlad === ageEloy) //expected output: false
console.log(ageVlad === favNum) //expected output: false
console.log(firstName !== favNum) //expected output: true

// Loose equality
console.log(ageVlad == ageEloy) //expected output: false
console.log(ageVlad == favNum) //expected output: true
console.log(ageVlad != favNum) //expected output: false