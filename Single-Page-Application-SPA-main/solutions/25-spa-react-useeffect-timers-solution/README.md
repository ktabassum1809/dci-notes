# React's useEffect hook with timers

With this exercise you can practice using the useEffect hook!

## Tasks

Work directly in [src/App.jsx](./src/App.jsx)

### Task 1

- Add the string "Initial message" into the array in the initial state of the `useState` hook

### Task 2

- Add a `useEffect` to call `log("First render")` for the first time the application renders
- Add a 5 second timer that calls `log("After 5 seconds")`. This must execute only once.

### Task 3

Add your answers directly here into the README:

- Q: Why is running this line of code bad:
  `useEffect(() => log("Messages changed!"), [messages])`
- A: The `log` functions alters the messages state variable, causing the effect to run again, triggering the `log` function again, causing an infinite loop.

- Q: Why would removing the comment and running this line of code, found in `App.jsx` be a bad idea?
  `// For task 3: log("App is running")`
- A: The `log` functions alters the messages state variable, causing a re-render of the component, triggering the `log` function again, causing an infinite loop.

- Q: If the above line of code is bad, why is it OK to have `log("Message from button")` in the button `onClick`?
- A: The `onClick` adds an event handler, it does not run the the function automatically during rendering.

- Q: When you refresh the page, you see two messages: `Initial message` and `First render`. After 5 seconds, you don't get a third message, but rather the second message changes. If you click the button to add messages _before_ the 5 second timer, those messages disappear after the timer runs out. What is happening?
- A: When the function for `setTimeout` is created during the initial render, the messages array contains only Initial message. After the timeout when the function for `setTimeout` runs, it uses and old version of the log function that uses this old version of the messages array, adding "After 5 seconds" to the initial value and replacing the current messages array, whatever it contains.

- Q: If you wanted to know when and how many times `App` re-renders, how would you do that?
- A: I would use `console.log()` instead of rendering the output, causing a re-render.
