/**
 * Task 3
 */

const savings = 7;
const pocketMoney = 5;
const birthdayPresent = 10;
const moneyTotal = savings + pocketMoney + birthdayPresent;

const videoGamePrice = 59;

console.log("I have a total of " + moneyTotal + "€");
console.log("The videogame costs " + videoGamePrice + "€");
console.log(
  "Can I afford to buy the videogame? ", moneyTotal >= videoGamePrice
);
