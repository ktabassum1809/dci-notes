/**
 * Task 3
 * 
 */

const cartValue = 50;
const deliveryCost = 9.99;
let total = cartValue;

if (cartValue < 40) {
    total = cartValue + deliveryCost
}

console.log(`The total amount is: ${total}€`);
