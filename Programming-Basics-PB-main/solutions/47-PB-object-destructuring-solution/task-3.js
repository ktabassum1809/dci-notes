/**
 * Task 3
 * 
 * You have an array containing the basic ingredients for a pizza, together with
 * some optional toppings.
 * 
 * Using destructuring assignment, save the first 3 main ingredients into separate
 * variables.
 * 
 * Save the toppings (from mushrooms to eggplant) into an array called toppings.
 * 
 * Log the toppings to the console
 * 
 * Expected output:
 * 
 * Toppings: [ 'mushrooms', 'onion', 'pepper', 'eggplant' ]
 */
const ingredients = [
  "pizza dough",
  "tomatoes",
  "mozzarella",
  "mushrooms",
  "onion",
  "pepper",
  "eggplant",
];

const [ingredient1, ingredient2, ingredient3, ...toppings] = ingredients;

console.log("Toppings:", toppings);