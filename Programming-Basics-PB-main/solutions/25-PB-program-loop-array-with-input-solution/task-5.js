/* 
Task 5

- Pass a series of numerical arguments from the terminal
- output to the console only numbers that are greater than or equal to 6

For example:

> node task-5.js 8 2 4 8 6 10
8
8
6
10

 */

for (let i = 2; i < process.argv.length; i++) {
  if (parseFloat(process.argv[i]) >= 6) {
    console.log(process.argv[i]);
  }
}