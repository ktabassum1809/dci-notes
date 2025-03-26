function greeting(name) { //greeting is a higher-order function because it returns a function
  return function () {
    return `Hello ${name}`;
  };
}

const func1 = greeting("Ben");

console.log(func1())

const func2 = greeting("John")

console.log(func2())

//=======================

function repeat(n, callback){ //repeat is a higher-order function because it takes a function (callback) as a parameter
    for(let i = 1; i<=n; i++){
        callback(i)
    }
}

function logNumber(num){
    console.log(`- ${num}`)
}

function multiplyBy10(num){
    console.log(num*10)
}

repeat(7, logNumber) //here logNumber is a callback function because it's passed to 'repeat' as an argument
repeat(4, multiplyBy10) //here multiplyBy10 is a callback function because it's passed to 'repeat' as an argument

// here logNumber and multiplyBy10 are used outside 'repeat' function therefor they're not callback functions
logNumber(15) //- 15
multiplyBy10(10) // 100