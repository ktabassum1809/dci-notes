// Short example with array of names

const array1 = ["Juan", "James", "Jane"]

array1.forEach(element => console.log("good morning " + element))

// Example with books (array of objects)

const bookshelf = [
    { title: 'The Silent Spring', author: 'Rachel Carson', genre: 'Science' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
    { title: '1984', author: 'George Orwell', genre: 'Fiction' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Fiction' },
    { title: 'Faust', author: 'Johann Wolfgang von Goethe', genre: 'Drama' },
  ]
  

// bookshelf.forEach(book => console.log(book.title))

/*function printTitle(book) {
    console.log(book.title)
} */

const printTitle = book => console.log(book.title)

bookshelf.forEach(printTitle)

// The forEach function is a higher-order function
// It takes a callback function as an argument
// The callback function is called for each element in the array