/*
Task 7

Write a function called getRandomLetter that returns a random
letter of the alphabet (from a to z) every time is called

For example:

getRandomLetter(); // f
getRandomLetter(); // z 
getRandomLetter(); // h 
getRandomLetter(); // d 

**HINT**
You can start by using a string with all the available letters:

```js
"abcdefghijklmnopqrstuvwxyz"
```

*/

function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const index = Math.floor(Math.random() * alphabet.length);
  return alphabet[index];
}

console.log(getRandomLetter());
