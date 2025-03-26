const x = false;

if(x){
    console.log("good morning")
} else {
    console.log("good afternoon")
}

//same example but with ternary operator:

x ? console.log("good morning") : console.log("good afternoon")

//======================================
//example 2:

const username = "John"

const greeting = username === "John" ?    "Hello John"    :  "Hi there" 


console.log(greeting)

