function printHello() {
  console.log("Hello world");
}

printHello();


console.clear();

// A parameter is a variable listed as a part of the function definition
// In the next line "person1" and "person2" are parameters
function greet(person1, person2) {
  const text = `Hello ${person1} and ${person2}`;
  return text;
}

 // An argument is the value passed to the function when it's called
// In the next line "Alexandra" and "Jean" are arguments
const outside = greet("Alexandra", "Jean");
console.log(outside);

console.log(greet("Flo", "Max"));

console.clear();


function complicatedOp(a, b) {
    
    const sum1 = a + b
    const div = sum1 / a
    const sum2 = div + b

    const result = sum2

    return result
    //return (a + b) / a + b
}

console.log(complicatedOp(4, 23));

//sum
//div
//sum

console.clear()

const num1 = 4
const num2 = 6

function simpleSum (a, b){
  return a + b
}

console.log(simpleSum(num1, num2))