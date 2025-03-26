const isItemInArray = function(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;
}
console.log(isItemInArray(["apple", "pear", "banana"], "kiwi")); // false
console.log(isItemInArray(["apple", "pear", "banana"], 10)); // false
console.log(isItemInArray(["apple", "pear", "banana"], "apple")); // true
