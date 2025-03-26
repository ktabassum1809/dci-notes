function greeting() {
  console.log("Hello World");
}

greeting();

//============================
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(4, 3, 2));

// console.log(Math.random());

//==========================

function coffeeMachine(a, b) {
  console.log("----function start");

  if (a === "coffee beans" && b === "water") {
    console.log("the condition is true");
    return "cup of coffee----";
    console.log("this will never run"); // no code will run after return
  } else {
    console.log("condition is false");
    return "not the right ingredients----";
    console.log("this will never run"); // no code will run after return
  }
  console.log("this will never run"); // no code will run after return
}

console.log(coffeeMachine("coffee beans", "water"));




