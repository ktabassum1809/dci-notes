console.log("Before")

fetch("./data.json").then((response)=>console.log(response))

fetch("./data.json")
.then(()=>console.log("2 file dowloaded"))
.then(()=>console.log("this comes after downloading"))

console.log("After")

