// solution 1: using slice()
function wordsThatEndWithIng(words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].slice(-3) === "ing") {
      result.push(words[i]);
    }
  }
  return result;
}

// solution 2: using endsWith()
// function wordsThatEndWithIng(words) {
//   const result = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].endsWith("ing")) {
//       result.push(words[i]);
//     }
//   }
//   return result;
// }

console.log(wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"])); // ["working", "ping"]
console.log(wordsThatEndWithIng(["table", "jeans", "small"])); // []
console.log(wordsThatEndWithIng(["walking", "ing"])); // ["walking", "ing"]
