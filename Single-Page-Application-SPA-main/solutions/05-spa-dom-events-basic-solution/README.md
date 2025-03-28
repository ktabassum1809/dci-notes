# Interacting with JavaScript Event Listeners

In this assignment, you will get hands-on practice with JavaScript event listeners. You will create a web page with interactive elements that respond to user actions. For example, you will be creating event handlers to listen to and handle mouse and browser events.

## Tasks

- The [HTML](./index.html) has already been prepared for you. Do not edit this file.
- Complete the tasks below by writing your JavaScript code in the [script.js](./script.js) file

### Task 1 - Adding Event Listeners

For the `<button>` with the id `#clickMe`;

- Attach an event listener to listen for the `click` event
- Use `console.log()` to print a message to the console when it is clicked

### Task 2 - Mouse Events

- Attach 2 more event listeners to this button;
  1. For the `mouseenter` event
  2. For the `mouseleave` event
- Use `console.log()` to print a message when each event is triggered

### Task 3 - Removing Event Listeners

For the `<button>` with the id `#clickMeOnce`;

- Attach an event listener to listen for the `click` event
- When this it is clicked;
  - use `console.log()` to print a message to the console
  - use the `removeEventListener()` method to remove the `click` event listener

> By removing the event listener, it should not be possible to activate the button a second time

### Task 4 - Listening to Browser Events

For the `document` object;

- Attach a `DOMContentLoaded` event listener
- Use `console.log()` to print a message when this event is triggered
