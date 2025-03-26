/**
 * Task 5
 */

import readlineSync from "readline-sync";

let input = "";

while (input !== "yes" && input !== "no") {
    console.clear();
    input = readlineSync.question("Are you sure? (yes/no): ");
}
