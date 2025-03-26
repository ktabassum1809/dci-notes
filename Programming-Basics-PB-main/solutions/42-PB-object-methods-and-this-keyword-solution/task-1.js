// Target array
const people = []

// Source data
const firstNames = ["Mark", "Sandra", "Dina", "Mikoel"]
const lastNames = ["Shark", "Mellow", "Saur", "Boomex"]
const ages = [18, 27, 31, 44]
const cities = ["New York", "Berlin", "Barcelona", "Windhoek"]

for (let i = 0; i < firstNames.length; i++) {
  const person = {};
  person.firstName = firstNames[i];
  person.lastName = lastNames[i];
  person.age = ages[i];
  person.city = cities[i];
  person.fullName = firstNames[i] + " " + lastNames[i];
  person.introduce = function introduce() {
    return `Hello, my name is ${this.fullName}, I live in ${this.city} and I am ${this.age} years old`;
  };
  people.push(person)
}

console.log(people)
