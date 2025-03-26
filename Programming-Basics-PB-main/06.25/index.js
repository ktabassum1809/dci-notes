// hi this is a comment

/* multiple
 lines
 comment
 For convenience, JS can automatically insert semicolons
Using them or not is up to code style
Some companies / projects require you use them
Some companies / projects require you DON'T use them

There are many details like this that are up to code style
 */

const greeting = "Hello World!"; // this variable is of type string, to check the type, we use the typeof() function like this:

console.log(typeof(greeting)) // will print: string
//============================================================
const hungry = true; // this variable is of type boolean
//============================================================
const myWallet = null; // this variable is of type null

// use-case example:
let username = null; // username is initially null

username = "John Doe"; // after the users enter their name it's reassigned to the new value
//============================================
const age = 55; // this variable is of type number//age = 66; // this will cause an error because we can't reassign constants, to do so, we use the key word 'let' for declaration instead of 'const'
//============================================================

let myName = "John";

console.log(myName);

myName = "Tareq";

//console.log(productName); // this will break the code because the variable 'productName' is not declared yet.

let productName;   // Variable declaration

console.log(productName);  

productName = "iPhone";  // Variable assignment

console.log(productName);

productName = "Samsung";  // Variable reassignment

console.log(productName);

//==================================================================================

const greeting2 = 'Hi everyone!'; // another way of writing strings with single quotes 

const greeting3 = `Good afternoon!`; // another way of writing strings with backticks 

console.log(greeting2);
console.log(age);
console.log(myName);
console.log(greeting);
console.log("Hello World!");

//==================================================
// this one is an old legacy way to declare variables that we should not use anymore
console.log(price)
var price = 500;
//==================================================
//JS data types:

//1-primitive data types: string, number, boolean, null, undefined, bigInt, symbol

//2-Object: includes: objects, arrays, functions, dates...

//========================================================================
console.log(typeof(hungry)) // we can write this line in 2 steps:

const whatIsTheType = typeof(hungry) // the same as: const whatIsTheType = "boolean"

console.log(whatIsTheType)
//=========================================================================
// we can print multiple values at once:

console.log(greeting, greeting2, greeting3)

console.log("hi",
true, 
false, 
null, 
hungry, 
age)


