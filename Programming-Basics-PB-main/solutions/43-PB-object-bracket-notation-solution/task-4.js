const product = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"], 
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};

const keys = ["type", "brand", "id", "material", "details"];

// Solution 1

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  if (product[key]) {
    console.log(product[key]);
  } else {
    console.log(`The product doesn't have the "${key}" property`);
  }
}

// Solution 2

// for (let i = 0; i < keys.length; i++) {
//   const key = keys[i];
//   if (Object.hasOwn(product, key)) {
//     console.log(`${key}: ${product[key]}`);
//   } else {
//     console.log(`The product doesn't have the "${key}" property`);
//   }
// }


// Solution 3

// for (let i = 0; i < keys.length; i++) {
//   const key = keys[i];
//   if (product.hasOwnProperty(key)) {
//     console.log(`${key}: ${product[key]}`);
//   } else {
//     console.log(`The product doesn't have the "${key}" property`);
//   }
// }


for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  if (Object.hasOwn(product, key)) {
    console.log(`${key}: ${product[key]}`);
  } else {
    console.log(`The product doesn't have a "${key}" property`);
  }
}