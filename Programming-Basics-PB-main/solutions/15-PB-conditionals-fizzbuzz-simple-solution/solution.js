const myNum = 15;

if ((myNum % 3 === 0) && (myNum % 5 === 0)) {
    console.log("FizzBuzz");
} else if (myNum % 3 === 0) {
    console.log("Fizz");
} else if (myNum % 5 === 0) {
    console.log("Buzz")
} else {
    if (typeof myNum === 'number') console.log(myNum);
    else console.log("What fresh hell is this?") 
    // this is good if the input is, despite all instructions, not a number.
}
