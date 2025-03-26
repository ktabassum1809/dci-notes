# Async - 01: Blocking & Promises

## last day:

- Modules
- NPM workflow

## today:

- Introduction to Asynchronous programming
- Blocking
- Promises

### resources:

- [`script` tag MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#notes)
- [Response `text()` method MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/text)

### exercises

- Ex1: [13-spa-asynchronous-programming-promises](https://classroom.github.com/a/OrkexfUr)
- Ex2: [14-spa-asynchronous-programming-fetch](https://classroom.github.com/a/c1uWCf8x)

## Theory

### Blocking parsing and rendering

- JavaScript runs in what's called an "event loop" (The details are **not** important)
- Some operations can stop this event loop
- Operations that stop the execution of JS until they are completed
- This kind of code is called blocking code

- Three examples: 
    - `alert(123)`
        - Stops the browser until you click okay
    - `for(i=3999999; --i;){};document.body.style.background='red'`
    - `<script src="script.js"></script>` on the head of the page
    - _Scripts without async, defer or type="module" attributes, as well as inline scripts without the type="module" attribute, are fetched and executed immediately before the browser continues to parse the page._

- Milliseconds are important, we want the browser to download concurrently
    - You can use `<script async src="script.js"></script>`
    - You can use `<script defer src="script.js"></script>`
        - `async`: Use when the script is independent and does not rely on other scripts or the DOM being fully parsed. It loads and executes as soon as possible, potentially out of order.
        - `defer`: Use when the script relies on the DOM being fully parsed or when the order of script execution matters. It loads asynchronously but executes in order after the HTML parsing is complete.

### Promises

- Let’s first check the following code:

```js
const p = fetch("file.txt")
console.log(p)
```

- Fetch makes a GET request for the file
- Fetch returns Promise object (and stores it in the variable p)

- Promises behave like in real life:
    - **I promise to water the plants**
        - Until I water the plants, my promise is **pending** 🤔 - initial state
        - If I water the plants, my promise is **resolved** 🙂
        - If I don't water the plants, my promise is **rejected** 😞
    - A promise has states: pending, resolved, rejected

#### Using promises in JavaScript
    - Unlike normal code, promises are asynchronous
        - Asynchronous code start to do something
        - But doesn't make the rest of the program to wait
        - It is non-blocking
        - It can move on to the next operation while waiting
        - This is why you see "Before", "After", "Data fetched"

```js
// One by one
console.log("Before")
const fetchPromise = fetch("file.txt")
const textPromise = fetchPromise.then(response => response.text())
textPromise.then(data => console.log("Data fetched: " + data))
console.log("After")
```

- Handling a promise: 
```js
promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
```

- You can chain promises together:
```js
fetch("file.txt")
    .then(response => response.text())
    .then(data => console.log("Chain Data fetched: " + data))
```