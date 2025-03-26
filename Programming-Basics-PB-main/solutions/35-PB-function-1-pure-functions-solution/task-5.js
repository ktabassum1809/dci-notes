/*
Task 5

The function below is relying on the global scope.

Transform it into a pure function so that the console.log()
at the bottom give the correct result
*/

function sumNumbers(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

console.log(sumNumbers([1, 2, 3])); // 6
console.log(sumNumbers([4, 5, 6])); // 15
console.log(sumNumbers([1, 1, 1])); // 3