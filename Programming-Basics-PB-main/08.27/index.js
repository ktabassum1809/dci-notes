const myArr = [250, 60, 320, 91, 52]


const overFifty = myArr.filter((item)=> item > 50)

console.log(overFifty)


// find()  // myArr.find() === myArr.filter()[0]
const overFiftyFind = myArr.find((item)=> item > 50) 

console.log(overFiftyFind)

//some: 

console.log(myArr.some((item)=> item > 50))

//example:
const invited = ["John","James","Thong","Jane"]

if(invited.some((item)=> item==="Thong")){
    console.log("welcome sir, enjoy your time")
} else {
    console.log("sorry you're not invited")
}

//every:

console.log(myArr.every((item)=> item > 50))

//toReversed - a new method from ES2023

const myArrReversed = myArr.toReversed()

console.log(myArr)
console.log(myArrReversed)

//flat:

const bigArr = [[1,2],[3,4],[5,6]];

const newArr = bigArr.flat();

console.log(newArr)