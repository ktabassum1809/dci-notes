/**
 * Task 10
 *
 * Fix the code below so that it returns the expected value
 *
 */

const onlyNumbers = function (array) {
  const arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      arrayResult.push(array[i]);
    }
  }

  return arrayResult;
};

console.log(onlyNumbers([1, 2, "a", "b", "c", 3])); // [1, 2, 3]