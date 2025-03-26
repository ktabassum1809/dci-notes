/**
 * Task 7
 * 
 * You are feeling particularly generous and decide to first divide the biscuits 
 * equally among your friends. 
 * After doing that, you will get the remaining biscuits.

 * Fix the code below to calculate how many biscuits you and your friends can eat each.
 * 
 * Expected output:
 * Each friend can eat 8 biscuits
 * The biscuits left for me are: 2
 */
const biscuits = 34;
const friends = 4;

const biscuitsForFriends = Math.floor(biscuits / friends);
const biscuitsForMe = biscuits % friends;

// don't change this
console.log(`Each friend can eat ${biscuitsForFriends} biscuits`);
console.log(`The biscuits left for me are: ${biscuitsForMe}`);