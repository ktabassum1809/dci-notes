//call stack:
const layer1 = () => {
  console.log("from layer1 before");
  layer2();
  console.log("from layer1 after");
};

const layer2 = () => {
  console.log("from layer2");
  layer3();
  console.log("testing from layer2");
};

const layer3 = () => {
  console.trace("testing the trace"); //helps us to trace back the executed functions
  console.log("from layer3");
};

layer1();

//=============================
//example:
const subtraction = (a, b) => a - b;

const sum = (a, b) => a + b;

// const multiply = (a) => sum(3, 2) * a; // when a function only has one PARAMETER we can omit the () like: const multiply = a => sum(2, 3) * a

// making the 'multiply' functions more dynamic:
const multiply = (a, b, c, d, e) => subtraction(b, c) * sum(d, e) * a; 

console.log(sum(7, 7)); // output: 14

console.log(multiply(10, 5, 10, 3, 2)); // output: -250
