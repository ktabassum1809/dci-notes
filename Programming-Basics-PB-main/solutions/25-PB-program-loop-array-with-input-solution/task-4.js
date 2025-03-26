/* 
Task 4

- Pass a series of string arguments from the terminal
- print only the initial for each one of them

For example:

> node task-4.js hammock elf lemon lost orange
hello

> node task-4.js list onion lock
lol

 */

let output = "";
for (let i = 2; i < process.argv.length; i++) {
    output += process.argv[i][0];
}

console.log(output);
