// Task 5

const person = {
    firstName: "Sylvia",
    lastName: "Sun",
    city: "london"
};

// Capitalise the value of the property `city`

person.city = person.city[0].toUpperCase() + person.city.slice(1);

console.log(person);
