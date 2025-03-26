import readlineSync from "readline-sync";

let username = "" || "user";

console.log(username);

const username1 = readlineSync.question("Your username?") || "Guest";
console.log(`Hi ${username1}!`);
