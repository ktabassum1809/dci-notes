# Advanced array methods 1

## last day:

- function map from scratch
- function filter from scratch

## today:

- `Array.prototype.forEach()`
- `Array.prototype.map()`
- `Array.prototype.filter()`

### resources:

- [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### exercises

- Ex1: [50-PB-function-2-filter-general](https://classroom.github.com/a/rHHDDsU8)
- Ex2: [51-PB-function-2-map-general](https://classroom.github.com/a/B5f7nHTM)

## Theory

- Advanced array methods don't actually include any new techniques
- They are incredibly useful and common tools built into JavaScript itself

### forEach()

```javascript
// It's VERY common to actually use an anonymous function as the callback
bookshelf.forEach(function(book) {
    console.log(`I have ${book.title} by ${book.author}`)
})

// It's also VERY common to use an arrow function as the callback
bookshelf.forEach((book)=> {
    console.log(`${book.title} by ${book.author} is a ${book.genre} book`)
})

// Arrow functions can be tiny, so you can write them like this
bookshelf.forEach(book => console.log(`The book "${book.title}" is a ${book.genre} book`))
```
- [live coding](examplesForEach.js)

### map()

- The map function is a higher-order function
- It takes a callback function as an argument
- It returns a new array with the results of calling the callback
- on each element in the array
- It converts an array to another array without modifying the original
- [live coding](examplesMap.js)

### filter()

- It creates a new array with those items that meet our condition (for example: numbers bigger than 10 or books that have a specific genre)
- It creates a shallow copy of the original array
- [live coding](examplesFilter.js)

**Wrap-up**
- Iterating over arrays: Array.prototype.forEach(<function>)
- Converting an array to a different array: Array.prototype.map(<function>)
- Getting a subset of an array: Array.prototype.filter(<function>)