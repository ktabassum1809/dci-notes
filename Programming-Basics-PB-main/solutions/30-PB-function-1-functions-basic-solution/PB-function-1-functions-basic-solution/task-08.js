/**
 * Task 08
 *
 * Fix the code below so that it prints the correct output
 * 
 * The function letterReplacer() takes 3 strings in input, and returns a new string
 * which will be the first string we pass where every occurrence of "target" is
 * replaced by "replaceWith"
 * 
 * For example
 * 
 * letterReplace("ooo", "o", "i") => iii
 * letterReplace("road", "r", "t") => toad
 * letterReplace("house", "h", "m") => mouse
 * 
 */

function letterReplacer(string, target, replaceWith) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === target) {
      newString += replaceWith;
    } else {
      newString += string[i];
    }
  }
  return newString;
}

console.log(letterReplacer("cat", "c", "b")); // bat
console.log(letterReplacer("legend", "e", "3")); // l3g3nd
console.log(letterReplacer("mouse", "m", "h")); // house
