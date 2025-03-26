//if no value was passed for username, the value "player1" will be used (default parameter value)
function greeting(username = "player1"){
    return `Hello ${username}`
}

console.log(greeting("Jane"))  //hello Jane
console.log(greeting())  //hello player1

const sum = (a = 0,b = 0)=> a+b

console.log(sum()) // output: 0
console.log(sum(5)) //output: 5
console.log(sum(3,4)) //output: 7

//==================================================
// using the spread syntax ... (rest parameter syntax) allows a function to accept an unknown number of arguments as an array
function accounting(...numbers){
let total = 0;

for(let i=0; i < numbers.length; i++){
    total += numbers[i]  
}
return total;
}

console.log(accounting())
console.log(accounting(9))
console.log(accounting(10,3))
console.log(accounting(10,3,4))
console.log(accounting(10,3,77,983))

// If we have multiple parameters, the rest parameter must be the last parameter

function joinFun(character, ...words) {
    console.log(words.length)
    return words.join(character)
}
console.log(joinFun('-', 'apple', 'banana', 'cherry'))

