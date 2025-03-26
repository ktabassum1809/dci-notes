/*
    Task 5:
    You also want to know which one between the cooking books and drawing books sold more.

    - write an if...else statement that prints the value of the largest number and the name of that department

    example: 
        - input: cookingDepartmentSales = 400, drawingDepartmentSales = 500 
        - output: "Drawing Department", 500 
    - test with different values
*/

let cookingDepartmentSales = 400;
let drawingDepartmentSales = 500;

if (cookingDepartmentSales > drawingDepartmentSales) {
  console.log("Cooking Department", cookingDepartmentSales);
} else if (drawingDepartmentSales > cookingDepartmentSales) {
  console.log("Drawing Department", drawingDepartmentSales);
} else {
  console.log("Drawing and Cooking department sold the same", drawingDepartmentSales);
}
