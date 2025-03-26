const myObj = {
  key1: "value1",
  key2: "value2",
  argv: ["item1", "item2", "item3"],
  greeting: function () {
    return "hello world";
  },
  myKey: 123,
};

const testObj = {
  myKey: "hi",
};

//it's okay to use the same property 'key' in different objects (name spacing)
console.log(myObj.myKey);
console.log(testObj.myKey);

//functions inside objects are called 'methods' like the following ones:
console.log(myObj.greeting());
console.log(Math.random());

//============================
//examples:
const pet1 = {
  name: "Astra",
  species: "dog",
  age: 3,
  color: "black & white",
  speak: function () {
    return `Hi I am ${this.name} the ${this.species} I'm ${this.age} years old, wanna go a walk?! woof woof`;
  },
};

const pet2 = {
  name: "Gimli",
  species: "cat",
  age: 1.5,
  color: "silver",
  speak: function () {
    return `Hi I am ${this.name} the ${this.species} I'm ${this.age} years old, where's the food!! mew`;
  },
};

console.log(pet1.speak());
console.log(pet2.speak());

//====================================
//more complex example:
const phone1 = {
  brand: "Samsung",
  model: "S24-Ultra",
  color: "silver",
  accessories: ["charger", "earphones", "battery", "cover"],
  storage: 64,
  price: 599.99,
  used: true,
};

console.log(phone1);

phone1.memory = 16;

console.log(phone1);

//we can also make the function outside the object first and then add it to the object:
function printDetails() {
  let accessoriesMsg = "";
  if (this.accessories.length > 0) {
    accessoriesMsg += " that comes with: ";
  }
  for (i = 0; i < this.accessories.length; i++) {
    if (i === this.accessories.length - 1) {
      accessoriesMsg += " and " + anOra(this.accessories[i]) + ",";
    } else {
      accessoriesMsg += anOra(this.accessories[i]) + ", ";
    }
  }
  return `a ${this.used ? "mint condition" : "brand new"} ${this.color} ${
    this.brand
  } phone, of the model: ${this.model},${accessoriesMsg} it has a ${
    this.storage
  } Gigabytes storage for the cheap price of ${this.price}€`;
}

//adding the function to the object 'phone1':
phone1.printPhoneDetails = printDetails;

//a function to add the 'a' or 'an' part to the accessories message
function anOra(string) {
  const vowels = "aeiouAEIOU";

  if (string[string.length - 1] === "s") {
    return string;
  } else if (vowels.includes(string[0])) {
    return "an " + string;
  } else {
    return "a " + string;
  }
}

console.log(phone1.printPhoneDetails());
