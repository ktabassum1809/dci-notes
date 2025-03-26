# Functions day 1

## last day:

- `while` loop
- mini-game with `while` loop

## today:

- Functions

### resources:

- []()
- []()
- []()
- []()
- []()

### exercises

- Ex1: [30-PB-function-1-functions-basic](https://classroom.github.com/a/fJVEvgOy)
- Ex2: [31-PB-function-1-simple-functions](https://classroom.github.com/a/arh5Ezh1)
- Ex3: [32-PB-function-1-challenge-1](https://classroom.github.com/a/6hl2PtAg)

## Theory

### Review of functions called so far

- We have already seen a bunch of functions:

  - `Math.random`
  - `console.log`
  - `someArray.push`

- All of the above are functions someone else has written for us to use
- All of them contain some existing code
- Functions are kind of like independent mini programs

- We "call" functions using parentheses: `Math.random()`

  - `Math.random()` is a function call

- When we call a function it runs the code inside: it does something

  - Gives us a random number
  - Print something
  - Adds an item to an array

- Today we will start to make our own functions

### Why?

- Two key reasons to use functions:
  - You can stop code repetition by making reusable code
  - You can split your code into small logical pieces
    - You hide the complexity of an operation, this is called abstraction

```javascript
// You want three random colors
const colors = ["red", "yellow", "green", "blue", "orange", "pink"];

const color1 = colors[Math.floor(Math.random() * colors.length)];
const color2 = colors[Math.floor(Math.random() * colors.length)];
const color3 = colors[Math.floor(Math.random() * colors.length)];
```

If we create a function that does the same thing we can simply call it:

```javascript
const color1 = getRandomColor();
const color2 = getRandomColor();
const color3 = getRandomColor();
```

### How?

Some codes we tried in class -> [playground.js](playground.js)

- There's a few different ways of making functions
- The basic one is declaring a bit similar to variables:

```javascript
function printHello() {
  console.log("Hello world");
}

printHello();
```

- Above we can see three vital parts of a function

  - The `function` keyword
  - The name of the function: `printHello`
  - The body of the function
    - This one just contains one console.log statement

- You can then call the function with just `printHello()`

- However, we have two important parts of a function missing
  - A function can take inputs
  - A function can give output

**input/output**

- A function can take _multiple values_ as _inputs_
- A function can give _one value_ as an _output_

```javascript
function greet(person1, person2) {
  const text = `Hello ${person1} and ${person2}`;
  return text;
}

const outside = greet("Alexandra", "Jean");
console.log(outside);

console.log(greet("Max", "Flo"));
```

- The function above is called `greet

  - It takes two inputs: `person1` and `person2`
  - It gives one string as a return value
  - We call the `greet` function and save the output into a variable: `outside` (not completely necessary)

- Inputs are called "parameters" (the placeholders) or "arguments" (values to fill those placeholders)

```javascript
// A parameter is a variable listed as a part of the function definition
// In the next line "person1" and "person2" are parameters
function greet(person1, person2) {
  const text = `Hello ${person1} and ${person2}!`;
  return text;
}

// An argument is the value passed to the function when it's called
// In the next line "Alexandra" and "Jean" are arguments
const out = greet("Alexandra", "Jean");
```

- The terms "parameter" and "argument" are often used interchangeably
    - Very often the words "argument" and "parameter" are mixed up
    - This is not dangerous!
    - When reading an article or talking, just keep that in mind :)

Some codes that serve as examples of the theory -> [example.js](example.js)

We created a function to put all this: `colors[Math.floor(Math.random() * colors.length)]` and avoid repetition[creatingRandomColor.js](creatingRandomColor.js)


We tried more stuff with readline-sync with [user input](./readline-sync/userInputFunctions.js) and a game in case you want to check how to do it (or try to do it yourself) -> [guessingGame.js](./readline-sync/guessingGame.js)

**Wrap-up**
- Functions are like mini programs
- Functions prevents code repetition by making reusable code
- Functions can split your code into small logical pieces
- Functions can hide complexity, this is called abstraction
- Function declarations need a name and the function body
- Functions can take inputs as arguments
- Functions can return a single value