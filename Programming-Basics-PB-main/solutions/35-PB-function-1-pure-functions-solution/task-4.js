/*
Task 4

The function below is relying on the global scope.

Transform it into a pure function so that the console.log()
at the bottom give the correct result
*/


function add(a, b) {
    return a + b;
}

let sum = add(4, 6);

console.log(sum); // 10
console.log(add(1, 2)); // 3
console.log(add(5, 3)); // 8
console.log(add(8, 1)); // 9