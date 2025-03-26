/**
 * Task 2 
 * 
 * Fix the code below so that you know how many biscuit each of your friends can eat
 * 
 * Expected output:
 * Each friend can eat 8 biscuits
 */

const biscuits = 33;
const friends = 4;

const biscuitsPerPerson = Math.floor(biscuits / friends);

// don't change this
console.log(`Each person can eat ${biscuitsPerPerson} biscuits`);