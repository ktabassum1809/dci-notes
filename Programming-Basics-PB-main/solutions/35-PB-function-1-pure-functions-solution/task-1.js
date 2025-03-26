/*
Task 1

The function below is relying on the global scope.

Transform it into a pure function so that the console.log()
at the bottom give the correct result
*/

function square(n) {
    return Math.pow(n, 2);
}

console.log(square(4)); // Expected output: 16
console.log(square(5)); // Expected output: 25
console.log(square(3)); // Expected output: 9