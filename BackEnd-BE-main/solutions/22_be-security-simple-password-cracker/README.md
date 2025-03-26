# Simple password cracker

This is a demonstration of a very simple password cracking tool. It makes a slow (but easy to understand) brute force attack against an obsolete weak hashing algorithm, making it not feasible for real world use.

## Tasks

Answer the provided questions directly in this file.

### Task 1

Examine the program found in [main.js](./main.js) and [recursiveCrack.js](./recursiveCrack.js).

1. What is the "target" password in plaintext?
2. What hashing algorithm is used?
3. How long does it take to crack the "target" password using Node?
4. How long does it take to crack the "target" password using Node if it checks for uppercase characters too?

### Task 2

There is an included user database in [users.json](./users.json)

1. What are the plaintext passwords of the users?
2. How would you crack the passwords if there were 50,000 users instead of 5?

## Bonus tasks

### Bonus 1

- How long does it take to crack the "target" password using Node?

### Bonus 2

Try installing `bun` - https://bun.sh/

1. How long does the same program take to run with Bun?
2. How long does it take to figure out the password by pasting the "target" hash into Google?
