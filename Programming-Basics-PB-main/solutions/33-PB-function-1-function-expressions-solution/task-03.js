/* 
Task 03

Rewrite the function below as a function expression.
*/

const getNumbersUntil = function(number) {
    const result = [];
    for (let i = 0; i < number; i++) {
        result.push(i);
    }
    return result;
}

const list1 = getNumbersUntil(10);
const list2 = getNumbersUntil(8);
const list3 = getNumbersUntil(20);

console.log(list1); // [0, 1, 2, 3, ..., 9]
console.log(list2); // [0, 1, 2, 3, ..., 7]
console.log(list3); // [0, 1, 2, 3, ..., 19]