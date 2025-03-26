/*
Task 4

Create some objects (at least 3) for different persons, specifying:

- `name`
- `age`
- `city`
- `profession`
*/

const person1 = {
  name: "Steve",
  age: 37,
  city: "Tokyo",
  profession: "UX Designer",
};

const person2 = {
  name: "Cindy",
  age: 26,
  city: "London",
  profession: "Software Engineer",
};

const person3 = {
  name: "Laura",
  age: 35,
  city: "New York",
  profession: "Game Designer",
};

/*
Task 5

Add a method `introduce` to each object that returns a string
with the person introducing themselves

For example:

console.log(person1.introduce()); // My name is Steve, I am 
37 years old. I live in Tokyo where I work as a UX Designer
*/

function introduce() {
  return `My name is ${this.name}, I am ${this.age} years old. I live in ${this.city} where I work as a ${this.profession}.`;
}

person1.introduce = introduce;
person2.introduce = introduce;
person3.introduce = introduce;

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

/*
Task 6

Add a method `greet` to the objects from task 5.

The method should take another person object in input and it 
should return a message of one person greeting the other.

For example:

// assuming that person2 is Cindy
console.log(person1.greet(person2)); // Hello Cindy, how are you?
*/

function greet(person) {
  return `Hello ${person.name}, how are you?`;
}

person1.greet = greet;
person2.greet = greet;
person3.greet = greet;

console.log(person1.greet(person2)); // Hello Cindy, how are you?
console.log(person1.greet(person3)); // Hello Cindy, how are you?
