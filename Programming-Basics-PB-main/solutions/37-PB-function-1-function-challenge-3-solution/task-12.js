function reverseWords(words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const reversedWord = words[i].split("").reverse().join("");
    result.push(reversedWord);
  }
  return result;
}
console.log(reverseWords(["cat", "shoe", "one", "sos", "hello"])); // ["tac", "eohs", "eno", "sos", "olleh"]
