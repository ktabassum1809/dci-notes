const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const keys = ["type", "color", "brand", "price"];

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(`${key}: ${product[key]}`);
}