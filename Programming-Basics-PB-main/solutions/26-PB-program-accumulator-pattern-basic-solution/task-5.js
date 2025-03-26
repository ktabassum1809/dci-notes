/*
Task 5

Complete the code below so that `result` will contain the list
of names with the first letter capitalised

Expected output:
[ 'Sophia', 'Peter', 'Julia', 'Mike', 'Martha' ]
*/

const people = ["sophia", "peter", "julia", "mike", "martha"];

const result = [];

for (let i = 0; i < people.length; i++) {
  const capitalisedName = people[i][0].toUpperCase() + people[i].slice(1);
  result.push(capitalisedName);
}

console.log(result);
