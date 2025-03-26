// write a JavaScript function that takes a string as a parameter and returns an array of words sorted from the most recurring to the least:
// example: myFunc("This is a test this test is only a test") //returns: [ 'test', 'this', 'is', 'a', 'only' ]

//solution ninja-code style (chaining methods without making variables - for practice only!!)
console.log(
  Object.entries("This is a test this test is only a test"
    .toLowerCase() // "this is a test this test is only a test"
    .split(" ") // ['this', 'is', 'a', 'test', 'this', 'test', 'is', 'only', 'a', 'test']
    .reduce((acc, item) => {
      acc[item] = (acc[item] || 0) +1;
    return acc;
    }, {})// { this: 2, is: 2, a: 2, test: 3, only: 1 }
    ) // [[ 'this', 2 ],[ 'is', 2 ],[ 'a', 2 ],[ 'test', 3 ],[ 'only', 1 ]]
    .sort((a,b)=> b[1] - a[1] ) // [[ 'test', 3 ],[ 'this', 2 ],[ 'is', 2 ],[ 'a', 2 ],[ 'only', 1 ]]
    .map((item)=> item[0])
);

//solution with clean code:

function myFun(string) {
    let stringLow = string.toLowerCase();
    let stringArray = stringLow.split(" ");
    let reducedArray = stringArray.reduce((acc, item) => {
      acc[item] ? acc[item]++ : acc[item] = 1;
      return acc;}, {});
      let entriesArray = Object.entries(reducedArray);
      let sortedArray = entriesArray.sort((a,b)=> b[1] - a[1]);
      let mappedArray = sortedArray.map((item)=> item[0])
  
      return mappedArray
  }
  
  console.log(myFun("This is a test this test is only a test"));
