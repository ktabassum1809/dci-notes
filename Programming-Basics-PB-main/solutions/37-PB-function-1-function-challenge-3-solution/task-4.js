function isFirstLetterLowerCase(string) {
  if (string === "") {
    return false;
  } else {
    return string[0] === string[0].toLowerCase();
  }
}
console.log(isFirstLetterLowerCase("hello")); // true
console.log(isFirstLetterLowerCase("Hello")); // false
console.log(isFirstLetterLowerCase("Bianca")); // false
console.log(isFirstLetterLowerCase("jim")); // true
console.log(isFirstLetterLowerCase("")); // false
console.log(isFirstLetterLowerCase("A")); // false
