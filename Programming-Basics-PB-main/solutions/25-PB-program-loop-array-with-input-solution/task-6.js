/* 
Task 6

- Pass a series of string arguments from the terminal
- output to the console only strings that are longer than 5 characters

For example:

> node task-5.js cat dinosaur giraffe horse dog
dinosaur
giraffe

 */

for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i].length >= 5) {
    console.log(process.argv[i]);
  }
}