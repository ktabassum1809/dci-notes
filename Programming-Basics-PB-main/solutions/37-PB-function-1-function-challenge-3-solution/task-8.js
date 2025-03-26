function onlyLongWords(string) {
  const split = string.split(" ");
  const result = [];
  for (let i = 0; i < split.length; i++) {
    if (split[i].length >= 5) {
      result.push(split[i]);
    }
  }
  return result.join(" ");
}

console.log(onlyLongWords(
  "Welcome to Wikipedia the free encyclopedia that anyone can edit"
)); // "Welcome Wikipedia encyclopedia anyone"
console.log(onlyLongWords("The cat is on the table")); // "table"
console.log(onlyLongWords("not many long ones here")); // ""
