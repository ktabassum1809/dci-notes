//typical pure function:

function sum(a,b){
    return a+b
}

console.log(sum(3,5))
console.log(sum(3,5))
console.log(sum(3,5))
console.log(sum(3,5))

//typical example of impure function:

const usersArr = ["John Doe", "Bob","Jane"]

console.log(usersArr)

function addUsers(username){
    usersArr.push(username)
    console.log("now the array has: "+ usersArr.length + " items")
}

addUsers("timmy")

console.log(usersArr) //changing the usersArr is a side effect which makes this function impure

addUsers("timmy")

console.log(usersArr)
