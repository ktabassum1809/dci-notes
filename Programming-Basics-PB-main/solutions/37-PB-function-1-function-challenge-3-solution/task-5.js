function cheaperThan(prices, max) {
  const result = [];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < max) {
      result.push(prices[i]);
    }
  }
  return result;
}
console.log(cheaperThan([19.99, 29.87, 12.99, 5, 2.9, 100], 20)); // [19.99, 12.99, 5, 2.9]
console.log(cheaperThan([19.99, 29.87, 12.99, 5, 2.9, 100], 90)); // [19.99, 29.87, 12.99, 5, 2.9]
console.log(cheaperThan([19.99, 29.87, 12.99, 5, 2.9, 100], 0)); // []
console.log(cheaperThan([19.99, 29.87, 12.99, 5, 2.9, 100], 5)); // [2.9]
