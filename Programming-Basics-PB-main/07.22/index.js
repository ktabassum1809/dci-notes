console.log(typeof []);
console.log(typeof {});

// To check if a variable is an array,  use "Array.isArray(...)"
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false


const user1 = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
  hobbies: ["reading", "swimming"],
  isVerified: true,
};

console.log(user1);

// You can access the properties of an object using the "dot notation"
console.log(user1.firstName); // "John"
//same as:
// console.log(user1["firstName"]) // sometimes when the KEYs are strings, we use the [] instead of the dot

console.log(user1.hobbies[1]); // "swimming"

//===============================
// You can also edit properties in an object using the "dot notation"
user1.age = "hi";

console.log(user1);

//=======================
// You can also add properties to an object using the "dot notation"
user1.phone = "+49 199 5555 555";

console.log(user1);

//====================
// You can delete properties from an object using the "delete" keyword
delete user1.age;

console.log(user1);

// {
//     firstName: 'John',
//     lastName: 'Doe',
//     hobbies: [ 'reading', 'swimming' ],
//     isVerified: true,
//     phone: '+49 199 5555 555'
//   }


// You can also nest objects

const user2 = {
  id: 2233556,
  firstName: "Jane",
  lastName: "Smith",
  hobbies: ["sport", "piano"],
  isVerified: false,
  address: { city: "Berlin", street: "main-street", ZIP: 55287 },
  phone: null,
};

//practice example: adding user1 and user2 to a database (array)

user1.id = 2343454;
user1.address = { city: null, street: null, ZIP: null };

const database = [user1, user2];

console.log(database)
//starting from the variable database print out piano:
console.log(database[1].hobbies[1]) // piano

const userAddress = database[1].address;
//starting from the variable database print out Berlin:
console.log(userAddress.city, userAddress.street, userAddress.ZIP)

//=======================================

//example for dynamic KEYs which are coming from 'food' array as strings

const food = ["apples","eggs","milk","bread","xyz"]

const shoppingList = {
    //food: quantity
}

shoppingList[food[0]] = "2kg"; //similar to: shoppingList.apples = "2kg"; but dynamic
shoppingList[food[1]] = 12;
shoppingList[food[2]] = "1 bottle";
shoppingList[food[3]] = "2 loafs"
shoppingList[food[4]] = 55

console.log(shoppingList)

//same but with for loop:

const quantity = ["2kg",12,"1 bottle","2 loafs", 55]

const list2 = {}
for(let i=0; i < food.length; i++){
        list2[food[i]] = quantity[i]
}

console.log(list2)