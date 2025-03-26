const products = [
  {
    type: "t-shirt",
    color: "white",
    price: 19.99,
  },
  {
    type: "jeans",
    color: "blue",
    price: 39,
  },
  {
    type: "hat",
    color: "red",
    price: 9,
  },
  {
    type: "t-shirt",
    color: "yellow",
    price: 19,
  },
  {
    type: "t-shirt",
    color: "red",
    price: 29,
  },
  {
    type: "jeans",
    color: "blue",
    price: 19,
  },
  {
    type: "shirt",
    color: "yellow",
    price: 19,
  },
  {
    type: "shoes",
    color: "green",
    price: 49,
  },
  {
    type: "sandals",
    color: "brown",
    price: 12,
  },
  {
    type: "jeans",
    color: "grey",
    price: 22,
  },
  {
    type: "hat",
    color: "red",
    price: 19,
  },
];

/*
Task 1 

Use the `reduce()` method to get the total price of all the
products in the array
*/

let totalPrice = products.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log("Total price:", totalPrice);

/*
Task 2 

Use the `reduce()` method to get the total price of all the 
`red` products in the array 
*/

const redProductsPrice = products.reduce((acc, product) => {
  if (product.color !== "red") {
    return acc
  }
  return acc + product.price;
}, 0);

console.log("Red products total price:", redProductsPrice);

/*
Task 3 

Use the `reduce()` method to count how many `jeans` are in 
the products array
*/

const jeansProductsCount = products.reduce((acc, product) => {
  if (product.type === "jeans") {
    return acc + 1
  }
  return acc;
}, 0);

console.log("Jeans products count:", jeansProductsCount);

/*
Task 4 

Use the `reduce()` method to count how many products that 
cost more than 15 there are
*/

const expensiveProductsCount = products.reduce((acc, product) => {
  if (product.price > 15) {
    acc++;
  }
  return acc;
}, 0);

console.log("Products that cost more than 15€:", expensiveProductsCount);
