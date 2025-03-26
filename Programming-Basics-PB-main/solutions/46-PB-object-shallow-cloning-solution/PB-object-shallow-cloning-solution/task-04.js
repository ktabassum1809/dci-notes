const products = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
  {
    type: "shirt",
    price: 32,
    color: "white",
  },
  {
    type: "jacket",
    price: 25,
    color: "grey",
  },
  {
    type: "shorts",
    price: 19,
    color: "yellow",
  },
  {
    type: "skirt",
    price: 18,
    color: "brown",
  },
  {
    type: "t-shirt",
    price: 5,
    color: "red",
  },
  {
    type: "jeans",
    price: 29,
    color: "black",
  },
];

const applyDiscount = (products, discount) => {
//1- make the result as an empty array
  const discountedProducts = [];

//2- loop the products array
  for (const product of products) {
  // a. clone the current object
    const productCopy = { ...product };
  // b. edit the price in the current object
    productCopy.price =
      productCopy.price - (productCopy.price * discount / 100);
  // c. add the current object to the result array
      discountedProducts.push(productCopy);
  }
//3- return the result array
  return discountedProducts;
};

console.log(applyDiscount(products, 10));
console.log(products);
