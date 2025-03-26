# Strings basic

## Task 1

Modify the code below so that the first and last character of the string are printed to the console

```javascript
const string = "hello world";
const firstCharacter = string[1];
const lastCharacter = string[string.length];

// don't change this
console.log(firstCharacter + lastCharacter)
```

Expected output:
```plaintext
hd
```


## Task 2

Change the code below so that the `!` is printed to the console

```javascript
const string = "abc!def";

console.log(string[string.length]);
```

Expected output:
```plaintext
!
```

## Task 3

Change the code below so that the word "help" is printed to the console without any space between the letters

```javascript
const letter1 = "h";
const letter2 = "e";
const letter3 = "l";
const letter4 = "p";

console.log(letter1, letter2, letter3, letter4);
```

Expected output:
```plaintext
help
```


## Task 4

Modify the `poem` variable so that the poem appears on 4 separate lines

```javascript
const poem = "Roses are red Violets are blue I am a programmer And so are you!";

console.log(poem);
```

Expected output:

```plaintext
Roses are red
Violets are blue
I am a programmer
And so are you!
```


## Task 5

Modify the code inside the console to print the last letter of each sequence of letters.

```javascript
const sequence1 = "aslkfjdfsalfjeoih";
const sequence2 = "sfaif9aujfw04sldknfae";
const sequence3 = "dslakfhs28rhf***hflsdjfs04rl";
const sequence4 = "ffsla*°ljfsf2304rl";
const sequence5 = "gad9hldsaòldsaiflfslaho";

console.log(
  sequence1[0] + sequence2[0] + sequence3[0] + sequence4[0] + sequence5[0]
);
```

Expected output:
```plaintext
hello
```
