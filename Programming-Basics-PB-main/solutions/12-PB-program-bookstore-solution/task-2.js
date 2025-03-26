/*
    Task 2:
    You receive a report with the sales from the Sci-fi department and the Crime department.
    You want to check that the sales of at least one of the two departments are within a certain range, otherwise it's bad news for the store 

    - write an if...else statement that prints true if at least one of the 2 sales amount is in the range between 200 and 500, false otherwise
    - test with different values
    */

let sciFiDepartmentSales = 300;
let crimeDepartmentSales = 0;

if (
  (sciFiDepartmentSales >= 200 && sciFiDepartmentSales <= 500) ||
  (crimeDepartmentSales >= 200 && crimeDepartmentSales <= 500)
) {
  console.log(
    "Did at least one department between Sci-Fi and Crime sell between 200 and 500 books?",
    true
  );
} else {
  console.log(
    "Did at least one department between Sci-Fi and Crime sell between 200 and 500 books?",
    false
  );
}

// Alternative cleaner solution

let rangeMin = 200;
let rangeMax = 500;
let areSciFiSalesInRange =
  sciFiDepartmentSales >= rangeMin && sciFiDepartmentSales <= rangeMax;
let areCrimeSalesInRange =
  crimeDepartmentSales >= rangeMin && crimeDepartmentSales <= rangeMax;

if (areSciFiSalesInRange || areCrimeSalesInRange) {
  console.log(
    "Did at least one department between Sci-Fi and Crime sell between 200 and 500 books?",
    true
  );
} else {
  console.log(
    "Did at least one department between Sci-Fi and Crime sell between 200 and 500 books?",
    false
  );
}
