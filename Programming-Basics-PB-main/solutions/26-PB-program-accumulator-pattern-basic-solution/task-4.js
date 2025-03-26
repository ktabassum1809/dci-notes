/*
Task 4

Fix the code below so that `result` contains only animals
that contain the letter "o"

Expected output:
[ 'mouse', 'dog', 'koala' ]
*/

const animals = ["cat", "mouse", "dog", "giraffe", "koala"];

const result = [];

for (let i = 0; i < animals.length; i++) {
  if (animals[i].includes("o")) {
    result.push(animals[i]);
  }
}

console.log(result);
