// Task 1 - Adding Event Listerns
const button = document.querySelector("#clickMe");
button.addEventListener("click", function () {
  console.log("Button 1 was clicked!");
});

// Task 2 - Mouse Events
button.addEventListener("mouseenter", function () {
  console.log("Mouse has entered button 1!");
});
button.addEventListener("mouseleave", function () {
  console.log("Mouse has left button 1!");
});

// Task 3 - Removing Event Listners
const button2 = document.querySelector("#clickMeOnce");
const handleClick = function () {
  console.log("Button 2 was clicked!");
  button2.removeEventListener("click", handleClick);
};

button2.addEventListener("click", handleClick);

// Task 4 - Listening to Browser Events
document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM is fully loaded and parsed!");
});
