# The while loop

## last day:

- `break` / `continue`
- Algorithms - Pseudocode
- More practice with Loops (`for` loop)
- `process.argv`

## today:

- `while` loop
- Live coding a minigame
- Live code an exercise

### resources:

- [`while` MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

### exercises

- Ex1: [27-PB-program-while-loop](https://classroom.github.com/a/RL3OSAFd)
- Ex2: [28-PB-program-interactive-while-loop](https://classroom.github.com/a/99ppvFi5)
- Ex3: [29-PB-program-guess-the-number](https://classroom.github.com/a/ItxjEoa9)

## Theory

### While loop statement

- We have been basing our loops on the count till x or each item in an array.
- Use `while` when you don't know in advance the number of iterations needed.

It can be similar to a `for` loop: 

```javascript
let counter = 0  // initializer
while (counter < 10) { // exit condition
    console.log(counter)
    counter++ // progress step
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}
```

But also do things that the `for` loop can’t:

```javascript
let counter = 1
let n = Math.random()
while (n > 0.01) {
    counter++
    n = Math.random()
}
console.log(`It took ${counter} attempts to get a number < 0.01`)
console.log(`The final number is ${n}`)
```

- The loop above will keep running until a condition is met
- We have no way of knowing how many times it will run
- We could get "lucky" and get it right away
- We could have to try 9000 times until we get it
- You can use `break` inside it

## Practice with readline-sync

[Finding daughter example](./readline-examples/findingDaughter.js)

We created a [simple roulette](./readline-examples/rouletteGame.js) and a more [advanced roulette](./readline-examples/rouletteGamePro.js).