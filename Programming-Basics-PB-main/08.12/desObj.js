const user1 = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
    hobbies: ["reading", "swimming"],
    isVerified: true,
  };

// const firstName = user1.firstName;
// const lastName = user1.lastName;

const { age, isVerified, ...rest } = user1

console.log(age, isVerified, rest)