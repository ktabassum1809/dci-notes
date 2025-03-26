// Task 3

const product = {
    type: "hat",
    color: "green",
    brand: "Dolphin",
    price: 22,
    discountedPrice: 22,
};

// Apply a 50% discount to discountedPrice
// write your code here:

product.discountedPrice = product.price / 2;

console.log(`SALE: the ${product.color} ${product.brand} ${product.type} costs now only ${product.discountedPrice}€ instead of ${product.price}€!`);
