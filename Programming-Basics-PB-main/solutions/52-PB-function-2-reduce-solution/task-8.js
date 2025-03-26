/*
 Task 8
 */

const users = [
  {name: "Jake Smith", age: 20, city: "New York"},
  {name: "Anne Annson", age: 24, city: "London"},
  {name: "Pete Peterson", age: 31, city: "New York"},
  {name: "Martha Marty", age: 38, city: "New York"},
  {name: "Renato Romolo", age: 36, city: "Rome"},
  {name: "Philip Flip", age: 36, city: "London"},
];

const groupedByCity = users.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.city]) {
    accumulator[currentValue.city] = [];
  }
  accumulator[currentValue.city].push(currentValue);
  return accumulator;
}, {})

console.log(groupedByCity);