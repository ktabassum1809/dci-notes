/*
 Task 6
 */

const fruits = ["banana", "apple", "kiwi", "mango", "strawberries"];

const salad = fruits.reduce((accumulator, currentValue) => {
    return accumulator + " - " + currentValue;
})

console.log(`Fruit salad: ${salad}`); // "Fruit salad: banana - apple - kiwi - mango - strawberries"