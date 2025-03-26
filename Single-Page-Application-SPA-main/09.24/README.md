# Async - 02: JSON & Fetch

## last day:

- Blocking code & asynchronous code
- Promises

## today:

- JSON
- Continue with fetching
- `localStorage`

### resources:

- [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [`Storage` MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

### exercises

- Ex1: [15-spa-asynchronous-programming-pokemon-cards](https://classroom.github.com/a/LYhv6ZYU)

## Theory

### JSON

- JavaScript Object Notation
- A file format based on JavaScript data types
- Often used for data storage and data transfer
- Basically like JavaScript, but still a bit different
- Commonly you move JSON around as a string:
```js
const data = '{ "id": 1, "name": "Angela Merkel", "born":"17.07.1954" }'
```
- Some differences to regular JS objects
    - You need the quotes around property names
    - Trailing commas are not allowed (commas after the last item)
    - Limited value types: can't have functions or Dates for example
        - Only supports strings, numbers, objects, arrays, booleans, and null.
    
- It's important to know how to convert from String to JSON and back
    - `JSON.parse()` -> constructing the JSON string into a JavaScript value
    - `JSON.stringify()` -> converts a JavaScript value to a JSON string

```js
const data = '{ "id": 1, "name": "Angela Merkel", "born":"17.07.1954" }'
const chancellor = JSON.parse(data)
chancellor.name = "Olaf Scholz"
chancellor.born = "14.06.1958"
```

### Fetch

- What did fetch() do again?
    - fetch() makes a request
    - fetch() returns a promise
    - fetch() is part of the The Fetch API
    - The Fetch API allows browsers to send requests asynchronously to servers

- Let's GET some JSON data and examine the process

```js
const url = 'https://jsonplaceholder.typicode.com/todos'
fetch(url)
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(json => console.log(json))
```

- Notes about the code right up
    - The original fetch returns a promise that resolves into a Response
    - The Response contains information about the Response
        - Such as was the request successful
    - The Response has methods for grabbing either JSON (like `.json()`) or Text ( like`.text()`) contents
    - These methods also return a promise

- What about errors?
    - It happens all the time
    - There are two kinds of errors we have to check
    - Errors that cause the fetch Promise to reject
    - Errors that don't cause the fetch Promise to reject

- Errors that cause the fetch Promise to reject
    - You will learn about this, but a Rejection "throws" an Error
    - We need to catch it so we can examine and react to it!
    - This will be explained way more in depth in the backend module

```js

const url = 'https://glorpborgdorkhorp.org/'
fetch(url)
    .then(response => {
        console.log(response)
        console.log(response.ok)
        return response.json()
    })
    .then(json => console.log(json))
    .catch((error) => {
        console.log(error)
        alert("Failed to contact glorpborgdorkhorp.org")
    })
```

### Storing data in the browser

- We might want to store the resulting data of a successful request
- If we use a variable, what happens when the page is refreshed?
    - Then the data needs to be fetched again!

- Maybe you want to make a game and store the game state in the browser
    - So that the browser remembers the game state between page refreshes

- You can store data using the Web Storage API
    - Specifically, we will look at `localStorage`