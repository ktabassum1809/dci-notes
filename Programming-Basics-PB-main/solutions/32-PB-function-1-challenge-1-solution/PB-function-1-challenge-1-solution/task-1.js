/**
 * 
 * Create a function that takes a string in input and returns a new 
 * string with the first and last character from the input string.
 * 
 * If the input string is an empty string, it returns an empty string
 */

function firstAndLastCharacter(string) {
    if (string === "") {
        return "";
    } else {
        return string[0] + string[string.length - 1];
    }
}

console.log(firstAndLastCharacter("")); // ""
console.log(firstAndLastCharacter("table")); // te
console.log(firstAndLastCharacter("cat")); // ct
console.log(firstAndLastCharacter("js")); // js