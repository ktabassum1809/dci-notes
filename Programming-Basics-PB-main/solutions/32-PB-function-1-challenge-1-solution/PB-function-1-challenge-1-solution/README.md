# Function challenges 1

## Task 1

Create a function that takes a string in input and returns a new string with the first and last character from the input string.

If the input string is an empty string, it returns an empty string


```javascript
function firstAndLastCharacter() { }

console.log(firstAndLastCharacter("")); // ""
console.log(firstAndLastCharacter("table")); // te
console.log(firstAndLastCharacter("cat")); // ct
console.log(firstAndLastCharacter("js")); // js
```

## Task 2

Create a function that takes 2 numbers in input and returns the largest of the 2.

If the numbers are equal, it returns the first one. 


```javascript
function largestOf2() { }

console.log(largestOf2(2, 5)); // 5
console.log(largestOf2(6, 3)); // 6
console.log(largestOf2(10, 10)); // 10
console.log(largestOf2(-1, -5)); // -1
```

## Task 3

Create a function that takes a string in input and returns the same string with the first and last character capitalised

If the input string is an empty string, it returns an empty string


```javascript
function capitaliseFirstAndLast() { }

console.log(capitaliseFirstAndLast("table")); // TablE
console.log(capitaliseFirstAndLast("cat")); // CaT
console.log(capitaliseFirstAndLast("js")); // JS
console.log(capitaliseFirstAndLast("")); // ""
```

## Task 4
 
 Create a function that takes 2 parameters:
 
 - `length`: a number
 - `character`: a string
 
 The function returns an array with a length equal to the first parameter, containing only `character` as its items
 
 For example:
 
 ```plaintext
 fillArray(3, "*") => ["*", "*", "*"]
 ```
 
 

```javascript
function fillArray() { }

console.log(fillArray(3, "*")); // [ '*', '*', '*' ]
console.log(fillArray(5, "a")); // [ 'a', 'a', 'a', 'a', 'a' ]
console.log(fillArray(0, "+")); // [] 
console.log(fillArray(10, "-")); // [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ]
```