/*
    Task 6:
    You also want to know which one between the sci-fi, crime and comic books sold more.

    To keep things a bit simpler, you can assume that the the 3 values are never the same.

    - write an if...else statement that prints the value of the largest number and the name of that department
    - test with different values
*/

let cookingDepartmentSales = 600;
let drawingDepartmentSales = 700;
let comicBooksDepartmentSales = 900;

if (
  sciFiDepartmentSales >= crimeDepartmentSales &&
  sciFiDepartmentSales >= comicBookDepartmentSales
) {
  console.log(
    `Sci-fi department sold the most with ${sciFiDepartmentSales} sales`
  );
} else if (
  crimeDepartmentSales >= sciFiDepartmentSales &&
  crimeDepartmentSales >= comicBookDepartmentSales
) {
  console.log(
    `Crime department sold the most with ${crimeDepartmentSales} sales`
  );
} else {
  console.log(
    `Comic book department sold the most with ${comicBookDepartmentSales} sales`
  );
}

// Alternative cleaner solution

let max = sciFiDepartmentSales;
let bestSellingDepartment = "Sci-fi";

if (crimeDepartmentSales > max) {
  max = crimeDepartmentSales;
  bestSellingDepartment = "Crime";
} 

if (comicBookDepartmentSales > max) {
  max = comicBookDepartmentSales;
  bestSellingDepartment = "Comic books";
}

console.log(`${bestSellingDepartment} department sold the most with ${max} sales`);


