// Task 3

let firstName = "jimmy";
let lastName = "cORRigAn";
let city = "LONDON";
let job = "painter";

firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
city = city[0].toUpperCase() + city.slice(1).toLowerCase();
job = job[0].toUpperCase() + job.slice(1).toLowerCase();

console.log("First name:", firstName);
console.log("Last name:", lastName);
console.log("City:", city);
console.log("Job:", job);