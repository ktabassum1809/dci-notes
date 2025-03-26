/**
 * The myMap() function below takes a number and a function in input
 * 
 * Write the 3 functions and complete the calls to map() in order to get the expected output
 * 
 */

 function myMap(items, callback) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
        result.push(callback(items[i]));
    }
    return result;
  }
  

  console.log(myMap([1, 2, 3], (number) => number + 900 )); // expected output: [901, 902, 903]
  console.log(myMap([2, 4, 10], (number) => number / 2)); // expected output: [1, 2, 5] 
  console.log(myMap(["Rufus", "Lisa", "July"], (string) => string.split("").reverse().join(""))); // expected output: ["sufuR", "asiL", "yluJ"]
  