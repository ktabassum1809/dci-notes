# While statement

Each task requires the use of the `while` loop. Each task also has their own javascript file prepared for you to work in. Good luck, have fun!

## Task 1

Given an array with a certain number of strings, use a while loop to remove the last item from the list until there are only 3 items left.

- Each time an item is removed, print a message to specify which item was removed
- print a message with the list of the remaining items

Does the program still work if the original list has less than 3 items?

Input:
```js
const items = ["pen", "chair", "cup", "laptop", "glass", "book"];
```

Expected output:

```plaintext
The item book was removed from the list.
The item glass was removed from the list.
The item laptop was removed from the list.

Remaining items: [ 'pen', 'chair', 'cup' ]
```

## Task 2

Given a string representing a numeric pin code with an initial length less than or equal to 6, use a `while` loop to add the remaining digits so that the pin code is 6 digits long.

Each digit added should be a random number between `0` and `9`.

Examples:

```js
let pin = "56";

// possible output
"568944"
```

```js
let pin = "811";

// possible output
"811356"
```

```js
let pin = "";

// possible output
"982362"
```

## Task 3

Use a `while` loop to create a numerical pin code with 4 random digits.

The pin code shouldn't contain any repeated number.

Possible output:

```plaintext
8746
```

## Task 4

Given a string `characters` containing the alphabet and a few special symbols, create a password of length 6 containing only characters from the string above.

Make sure that each character in the password appears only once.

```javascript
let characters = "abcdefghijklmnopqrstuvwxyz!+?*";
```

Possible output:

```plaintext
!dyljm
```

## Task 5

Write a program that asks the user a question that accepts a `yes` or `no` answer.

If the answer is not `yes` or `no`, the program keeps repeating the same question.

For example:

```plaintext
Are you sure? (yes/no): bla

Are you sure? (yes/no): ja

Are you sure? (yes/no): asd

Are you sure? (yes/no): no
```
