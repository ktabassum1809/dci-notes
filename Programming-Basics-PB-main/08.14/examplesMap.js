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
function getTitle(book) {
    return book.title
}

// This is the higher-order function
const titles = bookshelf.map(getTitle)

console.log(titles)
console.log(bookshelf) // the original array has not been modified

console.clear()

const authors = bookshelf.map(function(book) {
    return book.author
})

console.log(authors)

console.clear()

// Create a new array of genres from the bookshelf array

const genres = bookshelf.map((x) => x.genre)

console.log(genres)

