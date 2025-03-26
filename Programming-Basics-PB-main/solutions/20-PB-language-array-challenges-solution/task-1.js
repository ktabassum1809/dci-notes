/*
Task 1

Given a string with a date, use a method to:

- separate the day, month and year
- save them in 3 variables called `day`, `month`, `year`
- print them to the console

Expected output:

Day: 21
Month: 07
Year: 1993

*/

let date = "21/07/1993";
const dateSplit = date.split("/");

let day = dateSplit[0];
let month = dateSplit[1];
let year = dateSplit[2];

console.log("Day:", day);
console.log("Month:", month);
console.log("Year:", year);