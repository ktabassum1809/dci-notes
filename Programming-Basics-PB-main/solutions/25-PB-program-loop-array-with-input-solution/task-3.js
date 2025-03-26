/* 
Task 3

- Pass a series of string arguments from the terminal 
- concatenate them together to print a message like: `Things to buy: tomatoes, cheese, oil`

For example:

> node task-3.js tomatoes cheese oil
Things to buy: tomatoes, cheese, oil

> node task-3.js apples bananas
Things to buy: apples, bananas

 */

let output = "Things to buy: ";
for (let i = 2; i < process.argv.length; i++) {
  if (i !== process.argv.length - 1) {
    output += process.argv[i] + ", ";
  } else {
    output += process.argv[i];
  }
}

console.log(output);
