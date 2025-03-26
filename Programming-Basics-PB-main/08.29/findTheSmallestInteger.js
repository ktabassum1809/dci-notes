// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/javascript

function findSmallestInt(arr) {
	return arr.sort((a, b) => a - b)[0]
}

const findSmallestInt2 = (arr) => arr.sort((a, b) => a - b)[0]


function findSmallestIntMathMin(arr) {
    return Math.min(...arr)
}

console.log(findSmallestIntMathMin([78, 56, 232, 12, 18])) //12, `findSmallestInt([78,56,232,12,18])`);
console.log(findSmallestIntMathMin([78, 56, 232, 412, 228])) //56, `findSmallestInt([78,56,232,412,228])`);
console.log(findSmallestIntMathMin([78, 56, 232, 12, 8])) //8, `findSmallestInt([78,56,232,12,8])`);
console.log(findSmallestIntMathMin([78, 56, 232, 12, 0])) //0, `findSmallestInt([78,56,232,12,0])`);
console.log(findSmallestIntMathMin([1, 56, 232, 12, 8])) //1, `findSmallestInt([1,56,232,12,8])`);
