console.log("this is line 1", greeting("John Doe")); // when a function is made with function declaration, it is possible to use it before it was created
//Function declaration:
function greeting(username) {
  return `Hello ${username}`;
}

console.log("this is line 7", greeting("John Doe"));

//==========================
//Function expression:
//console.log(sum(2,3)) // this will break the code because we can't use a function before initialization WHEN it's created with function expressions

const sum = function (a, b) {
  return a + b;
};

console.log(sum(2, 3));

//=======================
//the arrow function (another function expression):

//console.log(multiply(3,10)) // this will break the code because we can't use a function before initialization WHEN it's created with function expressions

const multiply = (a, b) => {
    console.log("start of multiply function")
  return a * b;
};

console.log(multiply(3, 10));

//when the function is only one line we can even shorten it like:

const division = (a,b) => a/b

console.log(division(40, 4))

// we can do similar thing with the if statements when they are made of one line like:
if (true) console.log("hi");


// when a function only has one PARAMETER we can shorten it even more like:

const veryShortFunc = username => `Good afternoon ${username}`

console.log(veryShortFunc("John"))