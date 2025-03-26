// Using Number() to convert into numbers

const numString = Number("1")
console.log(numString) // 1
console.log(typeof numString) // number

const numString2 = Number("1abc")
console.log(numString2) // NaN
console.log(typeof numString2) // number

// Parsing strings into numbers

// parseInt()

const numParseInt = parseInt("1abc")
const numParseIntDecimals = parseInt("1.90878")
const numParseIntStartingWithZero = parseInt("007")
const numParseIntStartingWithString = parseInt("abc123")
const numParseIntBoolean = parseInt(false)

console.clear()
console.log(numParseInt) // 1
console.log(numParseIntDecimals) // 1
console.log(numParseIntStartingWithZero) // 7
console.log(numParseIntStartingWithString) // NaN
console.log(numParseIntBoolean) // NaN

// parseFloat()

const numParseFloat = parseFloat("1abc")
const numParseFloatDecimals = parseFloat("1.90878")
const numParseFloatStartingWithZero = parseFloat("007")
const numParseFloatStartingWithString = parseFloat("abc123")
const numParseFloatBoolean = parseFloat(false)

console.clear()
console.log(numParseFloat) // 1
console.log(numParseFloatDecimals) // 1.90878
console.log(numParseFloatStartingWithZero) // 7
console.log(numParseFloatStartingWithString) // NaN
console.log(numParseFloatBoolean) // NaN


// practical example: extracting the numbers of a Spanish ID

const fullId = "45183369U"
const numId = Number(fullId)
console.log(numId) 