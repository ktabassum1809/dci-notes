/*
    Task 7:
    You want to check if the sales of sci-fi, crime and comic books all together surpassed the sales 
    of the same period last year and if they reached the set goal for this year.

    - calculate the sum of the 3 department sales
    - write an if...else statement that prints:
        - a sad face, if sales are less than the ones from last year
        - "good, but we can do better", if sales are greater than the sales from last year, but less than the goal
        - "YEEEEEEESSSS!", if sales are greater than the goal

*/

let sciFiDepartmentSales = 100;
let crimeDepartmentSales = 200;
let comicBookDepartmentSales = 800;

let totalSales = sciFiDepartmentSales + crimeDepartmentSales + comicBookDepartmentSales;

let totalSalesLastYear = 500;
let totalSalesGoal = 1000;

if (totalSales < totalSalesLastYear) {
    console.log(":(");
} else if (totalSales < totalSalesGoal) {
    console.log("Good, but we can do better.")
} else {
    console.log("YEEEEEEEEEEESSSS!");
} 