let x = 10; // this variable is defined in the global scope

if(x > 3) { // opens a new scope

    console.log("I can access the variable x", x)

    const scopeTest1 = "scopeTest1"
    let scopeTest2 = "scopeTest2"
    var scopeTest3 = "scopeTest3 - var is bad"

    if(x > 5){ //nested condition, opens a nested scope
        console.log(
            "I can access all:",
            x,
            scopeTest1,
            scopeTest2,
            scopeTest3
        )
    }
}

//console.log(scopeTest1) // Error! Not defined in this scope
//console.log(scopeTest2) // Error! Not defined in this scope
//console.log(scopeTest3) // will work but that's exactly why we don't use var

// We can even make a new block scope without using `if` just with { }