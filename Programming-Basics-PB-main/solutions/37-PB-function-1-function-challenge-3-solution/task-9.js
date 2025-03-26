function addLeadingZero(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const stringToPush = numbers[i] > 9 ? `${numbers[i]}` : `0${numbers[i]}`;
    result.push(stringToPush);
  }
  return result;
}
console.log(addLeadingZero([0, 1, 2, 3, 10, 11, 12])); // ["00", "01", "02", "03", "10", "11", "12"];
console.log(addLeadingZero([1, 100])); // ["01", "100"];
console.log(addLeadingZero([1, 2, 3])); // ["01", "02", "03"];
