/*
    Task 4:
    This year, two departments have gone pretty well in your store: cooking books and drawing books.
    You want to check if both of them managed to sell more than 300 units each.

    - write an if...else statement that prints true if the 2 sales amounts are both greater than 300, false otherwise
    - test with different values
*/

let cookingDepartmentSales = 250;
let drawingDepartmentSales = 375;

if (cookingDepartmentSales > 300 && drawingDepartmentSales > 300) {
  console.log(
    "The cooking and drawing department sold more than 300 copies each", true
  );
} else {
  console.log(
    "The cooking and drawing department sold more than 300 copies each", false
  );
}
