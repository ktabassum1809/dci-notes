const user1 = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
  hobbies: ["reading", "swimming"],
  isVerified: true,
};

// from object to array:
// - Option1: array of keys: ["firstName","lastName","age","hobbies","isVerified"] 
// - Option2: array of values: [ 'John', 'Doe', 33, [ 'reading', 'swimming' ], true ]
// - Option3: array of properties:[[ 'firstName', 'John' ],[ 'lastName', 'Doe' ],[ 'age', 33 ],[ 'hobbies', [ 'reading', 'swimming' ] ],[ 'isVerified', true ]]

const keysInUser1 = Object.keys(user1);
console.log(keysInUser1);
const valuesInUser1 = Object.values(user1);
console.log(valuesInUser1);
const propertiesOfUser1 = Object.entries(user1)
console.log(propertiesOfUser1)

// to check for a property in an object:
console.log("does user1 has 'isVerified' property? ",user1.hasOwnProperty("isVerified"))

const clone = { ...user1 };

console.log(clone);

// const badClone = user1
// console.log(badClone)

const template = {
  type: "Car",
  brand: "Toyota",
  model: "Corolla",
  features: ["ABS", "Airbags", "Power Steering"],
  manufacturing: {
    year: 2005,
    country: "Japan",
  },
};

const clone2 = structuredClone(template);

console.log(clone2);

user1.age = 100;

template.manufacturing.year = 2024;

console.log(clone);
console.log(clone2);

// console.log(badClone)

//=======================
// destructuring nested objects:

const {
  type,
  manufacturing: { year, country },
} = template;

console.log(type, year, country);

//==========================

function greeting() {
  return `Hi my name is ${this.firstName} and I'm ${this.age} years old`;
}

user1.greeting = greeting;

console.log(user1.greeting());



// const user1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 33,
//     hobbies: ["reading", "swimming"],
//     isVerified: true
//   };

// using this variable 'x' print out 'John':
const x = "firsName"

console.log(user1[x])  // same as: console.log(user1["firstName"])