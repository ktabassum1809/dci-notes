const reverseString = (string) => {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

console.log(reverseString("table")); // "elbat"
console.log(reverseString("blabla")); // "albalb"
console.log(reverseString("")); // ""
console.log(reverseString("tomato")); // "otamot"
console.log(reverseString("cat")); // "tac"