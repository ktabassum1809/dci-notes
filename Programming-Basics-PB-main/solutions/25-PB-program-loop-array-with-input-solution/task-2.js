/* 
Task 2

- Pass a series of numberical arguments to the script
- print the sum of the arguments you passed

For example:

> node task-2.js 1 2 3
6

> node task-2.js 10
10

> node task-2.js -1 -2 -3
-6

> node task-2.js 10 20 45
75
 */

let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
  sum += parseFloat(process.argv[i]);
}

console.log(sum);
