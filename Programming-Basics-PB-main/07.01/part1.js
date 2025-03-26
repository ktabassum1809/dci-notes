console.log("good morning peeps!");

//    //The condition can be a boolean or any expression that evaluates to a boolean
// if ( /*the condition (boolean only) */ ) {
//     /* the code you want to run when the condition is true */
// }

if (true) {
  console.log("This will always run")
}
if (1===1) {
  console.log("This will always run")
}
if (false) {
  console.log("This will never run")
}
if (1===5) {
  console.log("This will never run")
}

//=============================================================
// We can also include an "else" statement

const loggedIn = false;

if (!loggedIn) {
  console.log("user is logged in");
} else {
  console.log("please log in");
}

//=======================================================

let myMoney = 10;

let breadPrice = 8;

console.log("from line 40", myMoney); //output: 10

if (myMoney >= breadPrice) {
    myMoney -= breadPrice; // short for: myMoney = myMoney - BreadPrice
  console.log("I can buy some bread");
} 
else {
  console.log("I don't have enough money");
}

console.log(myVar)
console.log( "from line 52", myMoney) //output: 2

//=========================================================

//clean coding by separating the steps:
const msg = "Hello World";
const msgCaps = msg.toUpperCase();
const checkMsg = msgCaps.includes("HELLO");

//this is equal to: "Hello World".toUpperCase().includes("HELLO") 
//we call that chaining string methods and it can get out of hand so be careful with it!

if (checkMsg) {
  console.log("this is a greeting msg");
}
//==============================

//we can have multiple checks

const msg2 = "Warning something went wrong!";

if (msg2.includes("Hello")) {
  console.log("It's a greeting msg");
} else if (msg2.includes("Error")) {
  console.log("It's an error msg");
} else if (msg2.includes("Warning")) {
  console.log("It's a warning msg");
} else {
  console.log("It's a normal msg");
}


//=============================================

const age = 91;

if (age >= 18) {
  console.log("would you like juice or beer or soda or vodka");
} else {
  console.log("would you like juice or soda");
}

//=================================================
//nested conditions:
const country = "Spain";

if (age === 32) {
  if (country === "Spain") {
    console.log("are you Eloy?");
  } 
  else {
    console.log("you are the same age as Eloy");
  }
} 

//==================================================
//multiple conditions:

if (age > 90) {
    console.log("Impressive age!")
} 
else if (age > 70) {
    console.log("Retired or still working?")
} else if (age > 50) {
    console.log("I'm catching up to your age soon")
} else if (age > 25) {
    console.log("I choose to call these the golden years")
} else if (age > 18) {
    console.log("Party hard")
} else if (age > 3) {
    console.log("Play hard")
} else {
    console.log("Ga ga gu gu?")
}

