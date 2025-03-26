console.log("good morning peeps!");
console.log("good morning peeps!");
console.log("good morning peeps!");
console.log("good morning peeps!");

// Now the same thing but with for loop:

// loop counter must loop 4 times (iterations)
let loopCounter;

//   initialization ; exit condition ; progress step
for (loopCounter = 0; loopCounter < 4; loopCounter = loopCounter + 1) {
  /* do this */

  console.log(`iteration number ${loopCounter}: good morning peeps!`);
}

console.log(loopCounter);

//==========================
// Let's count from 100 to 200
// It's traditional to use "i" as the loop counter

for (let i = 100; i <= 200; i++) {
  console.log(i);
}

//=========================================
// Let's count from 10 to 20, but two by two

for (let i = 10; i <= 20; i += 2) {
  console.log(i);
}

// We can reuse "let i" again because `for` creates a new scope
// console.log(i) // ReferenceError: i is not defined
// `i` is not accessible outside the loop

//========================================
// Let's count again, but now we have to go backwards

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//========================================
// Let's add the numbers from 0 to 5 to the sum variable
let sum = 2345;

for (let i = 1; i <= 5; i++) {
  console.log(`adding ${i} to ${sum}`);
  sum += i;
}

console.log(`final value of sum is: ${sum}`);

//==========================================
// Let's create a string of dots, but every fifth is a star like: "....*....*....*....*"
let result = "";

for (let i = 0; i <= 50; i++) {
  if (i % 5 === 0) {
    result += "*";
  } else {
    result += ".";
  }
}

console.log(result);

//=========================================================
// nested loops:
// Let's create a whole sky of dots and random stars using nested loops:
let result2 = "";

for (let i = 0; i <= 10; i++) {
  result2 = i + " ";

   // For loop in a for loop -- nesting!
  for (let j = 0; j <= 50; j++) {
    if (Math.random() < 0.1) {
      result2 += "*";
    } else {
      result2 += ".";
    }
  }
  console.log(result2);
}

//=====================================================
//looping over items in an array:
const foods = ["Potato", "SaLad", "AppLe", "tOmaTo"];

const foodsResult = [];

for (let i = 0; i < foods.length; i++) {
  let item = foods[i].toLowerCase();

  foodsResult.push(item);
}

console.log(foodsResult);



