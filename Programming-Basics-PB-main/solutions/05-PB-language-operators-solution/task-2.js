/*
Task 2

*/

// This is the total that you'll calculate at the end
let total = 0;

// Create 3 variables and assign them to the price of each product

let pencilPrice = 1;
let penPrice = 2;
let paperPrice = 0.5;

// Create 3 variables for the quantity of each product and set them to 0

let pencilQuantity = 0;
let penQuantity = 0;
let paperQuantity = 0;

// You decide to buy 2 pencils and 1 pen.
// Increase the quantity accordingly.

pencilQuantity += 2;
penQuantity += 1;

// After some thought, you realise you need 3 more pens.
// Increment the current quantity by 3
penQuantity += 3;

// You also decide to buy 50 sheets of paper.
// Increase the value of the variable accordingly

paperQuantity += 50;

// On a second thought, you probably don't need so many pens
// Remove 2 from the current quantity
penQuantity -= 2;

// And probably you need one more pencil
// Increase the quantity by 1
pencilQuantity++;

// 50 sheets of paper are too many
// Reduce the quantity by half
paperQuantity = paperQuantity / 2;

// It's time to calculate the total:
// Using the price and quantity for each product, calculate how much you're going to spend

total = penPrice * penQuantity + pencilPrice * pencilQuantity + paperPrice * paperQuantity;

// Print the result to the console
console.log("The total is: " + total + "€");
