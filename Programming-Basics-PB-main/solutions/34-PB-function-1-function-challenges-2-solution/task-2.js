const getIndexOf = function(array, item) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return index;
}

console.log(getIndexOf(["apple", "pear", "banana"], "kiwi")); // -1
console.log(getIndexOf(["apple", "pear", "banana"], 10)); // -1
console.log(getIndexOf(["apple", "pear", "banana"], "apple")); // 0
