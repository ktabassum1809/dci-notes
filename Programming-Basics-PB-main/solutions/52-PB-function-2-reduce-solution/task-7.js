/*
 Task 7
 */

const prices = ["19€", "109€", "60€", "12€"];

const sum = prices.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.slice(0, -1));
}, 0)

console.log(sum); // 200