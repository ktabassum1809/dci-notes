/* 
Task 1

- Pass a series of arguments from the command line
- use a loop to output them all to the console

For example:
```plaintext
> node task-1.js one two three

// Output:
one
two
three

> node task-1.js one two three four five

// Output:
one
two
three
four
five
``` */

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}