const numArr = [25, 7, 19]

// const firstNum = numArr[0]
// const secondNum = numArr[1]
// const thirdNum = numArr[2]

const [firstNum, secondNum, thirdNum] = numArr

console.log("first:", firstNum)
console.log("second:", secondNum)
console.log("third:", thirdNum)

//===================
const fruits = ['durian', 'jackfruit', 'lychee', 'mangosteen', 'rambutan']

const [first, second, third, ...rest] = fruits

console.log("first:", first)
console.log("second:", second)
console.log("third:", third)
console.log("the rest of the array:", rest)




