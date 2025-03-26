const product = {
    type: "t-shirt",
    color: "green",
    brand: "Awesome Tees",
    price: 19.99,
  };
  
  const keys = ["type", "color", "brand", "price"];

  for (let i = 0; i < keys.length; i++){
    console.log(`${keys[i]}: ${product[keys[i]]}`)
  }

// for (let key in product) {
//     console.log(key + ": " + product[key])
// }