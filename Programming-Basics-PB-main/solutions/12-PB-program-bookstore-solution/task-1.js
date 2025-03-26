/*
    Task 1
    You want to check that the total sales are within a certain range.

    - complete the if...else statement so that the result is true if sales are 
    greater than or equal to 70 and less than or equal to 99 
*/

let sales = 80;


if (sales >= 70 && sales <= 99) {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", true);
} else {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", false);
}

// Alternative solution:

let areSalesInRange = sales >= 70 && sales <= 99;

if (areSalesInRange) {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", true);
} else {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", false);
}