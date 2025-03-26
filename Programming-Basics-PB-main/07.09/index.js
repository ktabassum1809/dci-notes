// Problem1: find the first number in an array of numbers
// that is divisible by 5 and log it to the console
// Not a super realistic problem, but it's a good example

let numbers = [12, 16, 22, 20, 33, 40];

/*
pseudocode

for (each number in numbers array){
    if (the current number is divisible by 5){
        console.log(the current number)
        stop the loop
    }
}
*/

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    console.log(numbers[i]);
    break;
  }
}

//==========================================
// Problem2: looking at an array of numbers (scores), print out the
// difference between the current number and the previous one.
// If a score number is zero, don't print anything for that OR the next number after zero as well.

const scores = [2, 5, 0, 4, 5, 0, 7, 8, 7, 7, 6, 9];
/*
pseudocode:

for (each number in scores array){
    
    if(the current number is zero or previous number is zero){
        skip this iteration
    }

     console.log(current number - previous number)
    
}
*/
for (let i = 1; i < scores.length; i++) {
  if (scores[i] === 0 || scores[i - 1] === 0) {
    console.log("i'm going to skip this number: ", scores[i], " my index is:", i)
    continue; // stop the current iteration and continue to the next one
  } 

console.log(scores[i] - scores[i - 1]);
  
}
