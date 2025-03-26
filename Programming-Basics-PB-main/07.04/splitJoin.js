const lotrQuote = "It began with the forging of the Great Rings."

const lotrArray = lotrQuote.split(" ")

console.log(lotrArray) // ['It', 'began', 'with', 'the','forging', 'of', 'the', 'Great','Rings.']

const newLotrQuote = lotrArray.join("/")
console.log(newLotrQuote)

// Splitting a date string into parts

const date = "2022/10/24"
const dateParts = date.split("/")
console.log(dateParts) // [ '2022', '10', '24' ]

const prettyDate = dateParts.join(".")
console.log(prettyDate) // 2022.10.24