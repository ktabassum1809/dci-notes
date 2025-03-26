/*
 Task 5
 */

const string = "read the friendly manual";

function capitalizeFirstLetter(accumulator, currentValue) {
    return accumulator + currentValue.charAt(0).toUpperCase();
}

const acronym = string.split(' ').reduce(capitalizeFirstLetter, '');
console.log(acronym); // RTFM
