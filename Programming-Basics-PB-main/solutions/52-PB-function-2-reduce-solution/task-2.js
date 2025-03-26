/*
 Task 2
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven(accumulator, currentValue) {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}

const evenNumbersSum = numbers.reduce(sumIfEven,0);

console.log(evenNumbersSum); // 30
