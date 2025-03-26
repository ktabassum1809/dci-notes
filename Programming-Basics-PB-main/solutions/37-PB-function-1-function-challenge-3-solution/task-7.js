function numbersDivisibleBy3(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [3, 6, 9]
console.log(numbersDivisibleBy3([2, 4, 8])); // []
console.log(numbersDivisibleBy3([9])); // [9]
