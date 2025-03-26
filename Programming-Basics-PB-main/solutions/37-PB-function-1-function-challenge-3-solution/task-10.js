function cutStrings(strings, max) {
  const result = [];
  for (let i = 0; i < strings.length; i++) {
    result.push(strings[i].slice(0, max) + "...");
  }

  return result;
}
console.log(
  cutStrings(
    [
      "Hello my name is Max",
      "Today is quite sunny outside",
      "Cats are the best",
      "This movie is boring",
    ],
    10
  )
); // ["Hello my n...", "Today is q...", "Cats are t...", "This movie..."];

console.log(
  cutStrings(
    [
      "Hello my name is Max",
      "Today is quite sunny outside",
      "Cats are the best",
      "This movie is boring",
    ],
    2
  )
); // ["He...", "To...", "Ca...", "Th..."];
