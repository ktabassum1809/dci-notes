const person = {
  firstName: "James",
  lastName: "Ensor",
  age: 13,
};

const addFullName = (person) => {
  const personCopy = { ...person };
  personCopy.fullName = personCopy.firstName + " " + personCopy.lastName;
  return personCopy;
};

console.log(addFullName(person));
console.log(person);
