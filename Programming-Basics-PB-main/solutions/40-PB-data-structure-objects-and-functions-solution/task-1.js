// Task 1

const user1 = {
    firstName: "Mark",
    lastName: "Maxwell",
    age: 32,
    email: "mark@email.com"
};

const user2 = {
    firstName: "Sally",
    lastName: "Samson",
    age: 24,
    email: "sally@email.com"
};

const user3 = {
    firstName: "Jenny",
    lastName: "Jay",
    age: 38,
    email: "jenny@email.com"
};

console.log(user1);
console.log(user2);
console.log(user3);

// Task 1.1

user1.city = "New York";
user2.city = "Berlin";
user3.city = "Barcelona";

// Task 1.2

function describe(user) {
    return `${user.firstName} ${user.lastName} is ${user.age} years old and lives in ${user.city}`;
}

console.log(describe(user1));
console.log(describe(user2));
console.log(describe(user3));

// Task 1.3

user1.job = "dentist";
user2.job = "web developer";

function showJob(user) {
    if (user.job) {
        return `${user.firstName} ${user.lastName} works as a ${user.job}`;
    } else {
        return `${user.firstName} ${user.lastName} is currently unemployed`;
    }
}

console.log(showJob(user1));
console.log(showJob(user2));
console.log(showJob(user3));
