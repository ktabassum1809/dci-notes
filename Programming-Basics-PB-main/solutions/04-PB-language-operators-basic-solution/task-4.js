/**
 * Task 1
 *
 * Four friends go to a cafe and order several things to eat and drink.
 * They decide to equally divide the total.
 * 
 * Fix the formula to calculate the amount each person should pay
 * 
 * Expected output:
 * Each person should pay 14.5€
 */

let coffeesTotal = 15;
let juicesTotal = 10;
let cakesTotal = 25;
let iceCreamTotal = 8;

let numberOfPeople = 4;

// change the code here
let totalPerPerson =
  (coffeesTotal + cakesTotal + juicesTotal + iceCreamTotal) / numberOfPeople;

  console.log(`Each person should pay ${totalPerPerson}€`);
