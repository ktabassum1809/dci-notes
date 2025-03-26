const removeVowels = (string) => {
    const vowels = "aeiou";
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (!vowels.includes(string[i].toLowerCase())) {
            result += string[i];
        }
    }
    return result;
}
console.log(removeVowels("table")); // "tbl"
console.log(removeVowels("JavaScript")); // "JvScrpt"
console.log(removeVowels("AEIOU")); // ""
console.log(removeVowels("ABCDe")); // "BCD"