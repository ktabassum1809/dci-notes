/*
    Task 3:
    You also receive the report from the Comic Book department.
    Similar to Task 2, check that at least one of the three departments sold enough.

    - write an if...else statement that prints true if at least one of the 3 sales amount is in the range between 200 and 500, false otherwise
    - test with different values
*/

let rangeMin = 200;
let rangeMax = 500;
let sciFiDepartmentSales = 0;
let crimeDepartmentSales = 0;
let comicBookDepartmentSales = 0;

let areSciFiSalesInRange =
  sciFiDepartmentSales >= rangeMin && sciFiDepartmentSales <= rangeMax;
let areCrimeSalesInRange =
  crimeDepartmentSales >= rangeMin && crimeDepartmentSales <= rangeMax;
let areComicBooksSalesInRange =
  comicBookDepartmentSales >= rangeMin && comicBookDepartmentSales <= rangeMax;

if (areSciFiSalesInRange || areCrimSalesInRange || areComicBooksSalesInRange) {
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