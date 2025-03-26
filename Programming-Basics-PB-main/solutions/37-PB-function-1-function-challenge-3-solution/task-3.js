function startsWithThe(string) {
    const stringStart = string.slice(0, 3).toLowerCase();
    return stringStart === "the";
}

console.log(startsWithThe("hello")); // false
console.log(startsWithThe("theremin")); // true
console.log(startsWithThe("The Clash")); // true
console.log(startsWithThe("ding ding")); // false 
console.log(startsWithThe("making of")); // false