const result = 7 / 3;
console.log(result);
console.log(Math.round(result)); // Round out the result to nearest integer
console.log(Math.floor(result)); // Round DOWN the result to nearest integer
console.log(Math.ceil(result)); // Round UP the result to nearest integer

const x = Math.random();
console.log(x);

// If we want a random number between 0-10
const y = Math.random() * 10;
console.log(y);

// If we want a random integer between 0-10
const z = Math.floor(Math.random() * 11);
console.log(z);

// Let's make a 50/50 coinflip
const coinflip = Math.random() > 0.5
console.log(coinflip)

// Dice
let q = Math.floor(Math.random() * 6) + 1;
console.log(q)
