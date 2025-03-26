/*
Task 3

The function below is relying on the global scope.

Transform it into a pure function so that the console.log()
at the bottom give the correct result
*/

function addDot(string) {
    return string + ".";
}

console.log(addDot('Well well well')); // Well well well.
console.log(addDot('yes')); // yes.
console.log(addDot('No')); // No.