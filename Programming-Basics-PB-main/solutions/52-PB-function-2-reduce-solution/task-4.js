/*
 Task 4
 */

const orders = [
  {
    id: 1,
    amount: 250
  },
  {
    id: 2,
    amount: 400
  },
  {
    id: 3,
    amount: 100 
  },
  {
    id: 4,
    amount: 325 
  }
];

function sumAmount(accumulator, currentValue) {
  return accumulator + currentValue.amount;
}

const totalAmount = orders.reduce(sumAmount, 0);
console.log(totalAmount); // 1075