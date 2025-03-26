const person = {
  firstName: "Tim",
  age: 28,
}

// Your code here!
person.greet = function (greeting) {
  const capitalized = greeting[0].toUpperCase() + greeting.slice(1)
  return `${capitalized}, my name is ${this.firstName}`
}

console.log(person.greet("hi")) // Hi, my name is Tim
console.log(person.greet("hey")) // Hey, my name is Tim
console.log(person.greet("hello")) // Hello, my name is Tim
