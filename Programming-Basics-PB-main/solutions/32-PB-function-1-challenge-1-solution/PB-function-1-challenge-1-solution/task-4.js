/**
 * Task 4
 * 
 * Create a function that takes 2 parameters:
 * 
 * - length: a number
 * - character: a string
 * 
 * The function returns an array with a length equal to the first parameter, containing
 * only "character" as its items
 * 
 * For example:
 * 
 * fillArray(3, "*") => ["*", "*", "*"]
 * 
 */

function fillArray(length, character) {
    const array = [];

    for (let i = 0; i < length; i++) {
        array.push(character);
    }

    return array;
}

console.log(fillArray(3, "*")); // [ '*', '*', '*' ]
console.log(fillArray(5, "a")); // [ 'a', 'a', 'a', 'a', 'a' ]
console.log(fillArray(0, "+")); // [] 
console.log(fillArray(10, "-")); // [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ]