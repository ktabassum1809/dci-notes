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

// callback function
function bookIsFiction(book) {
    return book.genre === "Fiction"
}

// This is the higher-order function
const fictionBooks = bookshelf.filter(bookIsFiction)

console.log(fictionBooks)

const notFiction = bookshelf.filter(book => book.genre !== "Fiction")
console.log(notFiction)