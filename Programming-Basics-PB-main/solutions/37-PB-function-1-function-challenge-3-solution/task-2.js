function endsWithIng(string) {
    const stringEnd = string.slice(-3).toLowerCase();
    return stringEnd === "ing";
}

console.log(endsWithIng("hello")); // false
console.log(endsWithIng("going")); // true
console.log(endsWithIng("ALAN TURING")); // true
console.log(endsWithIng("ding ding")); // true
console.log(endsWithIng("making of")); // false