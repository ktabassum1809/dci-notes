/*
Task 1

You have 2 variables containing the birthdates of 2 persons

- extract the year from the 2 dates and save them into 2 new variables
- using the ternary operator on these 2 variables, print message to the console 
like "Fiona is older than Jacob" or * "Jacob is older than Fiona", depending 
on the comparison between the 2 years

*/

let jacobBirthdate = "20/06/1995";
let fionaBirthdate = "12/11/1992";

let jacobBirthYear = parseInt(jacobBirthdate.slice(6));
let fionaBirthYear = parseInt(fionaBirthdate.slice(6));

const message =
  fionaBirthYear > jacobBirthYear
    ? "Jacob is older than Fiona"
    : "Fiona is older than Jacob";

console.log(message);

/*
Task 1.1

Using the variables from Task 1, calculate the age difference between Jacob and Fiona

Print a message to the console, like:

Fiona is 3 years older than Jacob 

Use conditional statements and ternary operator where needed
*/

let ageDifference;

if (fionaBirthYear > jacobBirthYear) {
  ageDifference = fionaBirthYear - jacobBirthYear;
} else {
  ageDifference = jacobBirthYear - fionaBirthYear;
}

let message2 =
  fionaBirthYear < jacobBirthYear
    ? `Fiona is ${ageDifference} years older than Jacob`
    : `Jacob is ${ageDifference} years older than Fiona`;
console.log(message2);
