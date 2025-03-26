/**
 * Task 4
 *
 * Write a function that accepts a person object as an argument and
 * returns a string with the full name (first name + last name)
 * 
 * Inside the function, use the destructure assignment to get only the properties 
 * that you need
 *
 */

// solution 1
const fullName = ({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
};

// solution 2
const fullName1 = (person) => {
  const { firstName, lastName } = person;
  return `${firstName} ${lastName}`;
};

const person = {
  firstName: "Jim",
  lastName: "Saul",
  age: 34,
  profession: "lawyer",
};

console.log(fullName(person)); // Jim Saul
console.log(fullName1(person)); // Jim Saul
