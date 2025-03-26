function countConsonants(string) {
  let result = 0;
  const consonants = "bcdfghjklmnpqrstvwxyz";
  for (let i = 0; i < string.length; i++) {
    if (consonants.includes(string[i].toLowerCase())) {
      result++;
    }
  }
  return result;
}
console.log(countConsonants("hello")); // 3
console.log(countConsonants("aeiou")); // 0
console.log(countConsonants("be right back")); // 8
console.log(countConsonants("JavaScript")); // 7
