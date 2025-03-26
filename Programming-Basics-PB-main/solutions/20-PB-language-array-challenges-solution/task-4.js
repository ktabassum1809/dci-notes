/*
Task 4

You are going shopping.

As you buy stuff, you'll add each product as a string.
For example, if you buy a "Blue hat" you'll add a string "Blue hat"
to the array

Pay attention to capital letters to avoid issues

Follow the instructions in the comments below.
*/

const shoppingCart = [];

// add "Blue jeans" to the cart
shoppingCart.push("Blue jeans");

// add 3 "Pair of pink socks"
shoppingCart.push("Pair of pink socks");
shoppingCart.push("Pair of pink socks");
shoppingCart.push("Pair of pink socks");

// add a "Red t-shirt" to the cart
shoppingCart.push("Red t-shirt");

// add a "Grey hat" to the cart
shoppingCart.push("Grey hat");

// add 3 "Black t-shirt" to the cart
shoppingCart.push("Black t-shirt");
shoppingCart.push("Black t-shirt");
shoppingCart.push("Black t-shirt");

/* 
changing your mind, you don't want the 3 "Black t-shirt"
remove all 3 of them
*/
shoppingCart.pop();
shoppingCart.pop();
shoppingCart.pop();

// check how many items you have in the cart
console.log(`The cart contains ${shoppingCart.length} items.`);

/*
Check if there are "Sunglasses" in the cart

- if "Sunglasses" are already in the cart, print a message saying:
    - "There are already sunglasses in the cart"
- otherwise, add them
*/

if (shoppingCart.includes("Sunglasses")) {
  console.log("There are already sunglasses in the cart");
} else {
  shoppingCart.push("Sunglasses");
}

/*
The first item you added were the "Blue jeans"
Replace them with "Jogging pants"
*/
shoppingCart[0] = "Jogging pants";

/*
You don't remember the last items you added
- Save the last 3 items added to the array in a varible
- print the content of this variable to the console

NOTE: try to print the items as a string, with each item
separated by a comma

For example:
Last 3 items: Red t-shirt, Grey hat, Sunglasses
*/

const last3Items = shoppingCart.slice(-3);
console.log(`Last 3 items: ${last3Items.join(", ")}`);

/*
Check again how many items you have in the cart

- If there are less than 10 items, add a "Green hoodie" to the cart
- otherwise, print a message saying: 
    - "With *** items in your cart, you have enough stuff already."
    - replace the asterisks with the right value
*/

if (shoppingCart.length < 10) {
  shoppingCart.push("Green hoodie");
} else {
  console.log(
    `With ${shoppingCart.length} items in your cart, you have enough stuff already.`
  );
}

/*
Print a list of everything that you are buying.

- avoid printing the array directly
- print each item separated by a comma or a new line

For example:

Cart:

Jogging pants
Pair of pink socks
Pair of pink socks
Pair of pink socks
Red t-shirt
Grey hat
Sunglasses
Green hoodie
*/

console.log("\nCart:\n");
console.log(shoppingCart.join("\n"));
