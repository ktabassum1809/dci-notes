let x = 34
let y = ++x //the increment happens first and the assignation after

let q = 34
let z = q++ //the increment happens after the assignation

console.log(x); //expected output: 35
console.log(y); //expected output: 35
console.log(q) //expected output: 35
console.log(z) //expected output: 34

