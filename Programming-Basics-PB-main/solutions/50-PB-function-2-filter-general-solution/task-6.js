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
Use filter() so that the variable `sProducts` contains only 
products where the `type` starts with the letter `s`
*/

const sProducts = products.filter((product) => product.type[0].toLowerCase() === "s");
console.log("Products with s:", sProducts);