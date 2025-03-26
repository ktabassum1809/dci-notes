function sumEvenNumbers(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result += numbers[i];
    }
  }
  return result;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12;
console.log(sumEvenNumbers([100])); // 100;
console.log(sumEvenNumbers([100, 1, 3])); // 100;
console.log(sumEvenNumbers([-2, 4, 3])); // 2;
