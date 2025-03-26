function sumEvenOdd(numbers) {
  const result = [0, 0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result[0] += numbers[i];
    } else {
      result[1] += numbers[i];
    }
  }
  return result;
}
console.log(sumEvenOdd([1, 2, 3, 4, 5, 6])); // [12, 9]
console.log(sumEvenOdd([0, -2, 11])); // [-2, 11]
console.log(sumEvenOdd([1, 3, 15])); // [0, 19]
