/*
    Task 8:
    The marketing team is running a promotion on weekends.

    - write an if...else statement to apply a 50% discount to the price of books 
    if the day is Saturday or Sunday

*/

let day = "Saturday";
let bookPrice = 16;

if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend promotion: 50% discount on books!");
  bookPrice = bookPrice / 2;
}

console.log(`The book price is ${bookPrice}`);
