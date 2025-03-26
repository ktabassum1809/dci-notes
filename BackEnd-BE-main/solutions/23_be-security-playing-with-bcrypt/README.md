# Security with bcrypt 🔒🔑

This exercise will allow you to play around with the `bcrypt` package by building a CLI application.

## Tasks

You will be working with `bcrypt` directly using just the CLI (no server required!).

You will be expected to write your solution in 2 files;

1. `register.js` - will generate a password hash
2. `login.js` - will compare a password hash with the hash from the user

### Task 1

Install the [bcrypt](https://www.npmjs.com/package/bcrypt) npm package

### Task 2 - Learning how to use bcrypt

Read the bcrypt [documentation](https://github.com/kelektiv/node.bcrypt.js/#usage)

Answer the following questions;

1. Which method should you use to create a hash from a password?
2. Which method should you use to compare a password with a hash?
3. What does are "salt rounds"?

### Task 3 - Writing a hashing helper function (register.js)

Open the file [register.js](./register.js)

1. Import `bcrypt`

2. Write a function which;

   - takes a **string** parameter
   - uses the `bcrypt` hashing method to hash the string
   - returns the result

3. Run your function with the `password` variable as a parameter. This variable can be populated from your terminal, for example:

   ```bash
   node register.js kittens
   ```

4. Use `console.log()` to display the output of your function

### Task 4 - Store the hash in the filesystem

The file [lib.js](./lib.js) contains the function `writeToFileSystem()`

- Import and use `writeToFileSystem()` to write your hash to the filesystem

### Task 5 - Playing with salt

Play around with the salt rounds value. Use small and large numbers.

- How long does the program take to run?
- What would an ideal number for the salt rounds be?

### Task 6 - Writing a compare helper function (login.js)

Open the file [login.js](./login.js)

1. Import `bcrypt`

2. Write a function which receives a **password** parameter from the user

3. The file [helpers.js](./helpers.js) contains the function `readFromFileSystem()`

   - Import and use `readFromFileSystem()` to read the **hash** from the filesystem

4. Use the `bcrypt` compare method to compare the `password` variable with the **hash**. If the password;

   - **matches**, display a message to the user stating that the passwords match
   - **does not match**, display a message to the user stating that the passwords do not match

### Task 7 - Testing

Test your code.

1. Run `node register.js {password}` where `{password}` is the password you would like to register with

2. Run `node login.js {password}` where `{password}` is the password you wish to test against the hash

3. Try using different passwords, and logging in with the wrong password to see different results
