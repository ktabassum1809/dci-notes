const x = false;

console.log(false === 0); // false
console.log(false == 0); // true

console.log(22 === "22"); //false
console.log(22 == "22"); //true

if (x) {
  console.log("Hello World!");
}

//===========================================
// logical operators:
// the rules:
// && (AND operator): will return the first falsy value, if no falsy values exist, it will return the last truthy value
// || (OR operator): will return the first truthy value, if no truthy values exist, it will return the last falsy value
// examples:

const a = true;
const b = null;
const c = true;

if (a && b && c) {  
  console.log("AND: good morning");
}
// in the previous example, the sequence (a && b && c) will short circuit into: b because it's the first falsy value (null)
// and the condition will then be:
// if(b){
// console.log("AND: good morning");
//} which will not run because the condition is not true (null is a falsy value)

//======================

if (a || b || c) { 
  console.log("OR: good afternoon");
}
// in the previous example, the sequence (a || b || c) will short circuit into: a because it's the first truthy value (true)
// and the condition will then be:
// if(a){
// console.log("OR: good afternoon");
//}

//===========================
// more examples of short circuit evaluation:
console.log(1 && 2 && 3 && 55) // output: 55 the last truthy value
console.log(1 && 0 && 3 && 55 && null) //output: 0 the first falsy value

console.log(false || "" || 0 || null) //output: null the last falsy value
console.log(false || 1 || 0 || null || true) //output: 1 the first truthy value
//============================




