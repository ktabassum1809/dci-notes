// For iterable values like arrays and strings we can use the "spread syntax" ...
// It allows us to expand them in places where multiple arguments are expected

const books = [ 'Silent Spring', 'Faust', 'Principia' ]
const moreBooks = [ 'Cosmos', 'Frankenstein']

// The spread syntax allows us to expand the array into individual elements
console.log("books spread: ", ...books)

//same as writing this:
console.log("books spread: ", books[0], books[1], books[2])

//it helps us make a copy of an array:
const booksCopy = [...books]

// The spread syntax can be used to combine arrays:
const allBooks = [...books, ...moreBooks]

console.log(allBooks)



// Some functions like Math.max() expect individual arguments
console.log(Math.max(1,2,3,999))

// We can use the spread syntax to pass an array as individual arguments
const numbersArr = [1,2,3,999.8,77,88,4,67,999.9]  //using the spread syntax ... we get only the content of it => 1,2,3,999.8,77,88,4,67,999.9

console.log(Math.max(...numbersArr))



