const argvArr = process.argv // is an array 
console.log(argvArr)

// the first 2 items in that array are from the program (node path and file path) 
// the rest are coming from the terminal (i.e. node fileName.js item3 item4...)
// we are not interested in the first 2 items so we slice the array starting from index 2

console.log(argvArr.slice(2))
