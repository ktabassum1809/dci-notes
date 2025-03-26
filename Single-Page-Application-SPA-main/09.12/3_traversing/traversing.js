// * Extra DOM Theory

// In the DOM...
//  - The "document" object represents the HTML document itself
//  - The "document" object contains nodes, representing each individual part of the HTML page
//  - All nodes can have parents and/or children
//  - An Element is a node that represents a HTML element - i.e. anything you can write using a tag (e.g. <body>...</body>)

// -------------------------

// * Traversing

// "traversing" means "moving around"
// We don't have to use the "document" object to select elements!
// We can use methods and properties belonging to OTHER ELEMENTS to find the element(s) we want
// This gives us extra flexibility

// * 1. Find siblings

const pizza = document.querySelector(".pizza");
console.log(pizza);

// "previousSibling" gives the previous sibling which is a node
console.log(pizza.previousSibling); // #text "\n 

// "previousElementSibling" gives the previous sibling which is a element
console.log(pizza.previousElementSibling);

// -------------------------

// * 2. Find parent/children

const starters = document.querySelector(".starter-food-category");

// ? Find the children

// 9 nodes found
console.log(starters.childNodes) // NodeList(9)

// 4 elements found
console.log(starters.children) // HTMLCollection (4 elements)

// ? What is a HTMLCollection?
// A collection of Elements
// No forEach method
// To loop, you could use a traditional "for" loop
// Or you could create a new array and copy the contents of the HTMLCollection

const startersChildElements = starters.children; // A HTMLCollection
const startersArray = [...startersChildElements]; // An array

// ? Find the parent
console.log(starters.parentElement); // <main>

// -------------------------

// * 3. Selecting from an element's descendants

// ? E.g. Find all the ".food-item" elements which are starters - no mains or desserts 

// Elements have their own querySelector() and querySelectorAll() methods
// This lets us be much more specific when choosing where in the document we want to search

// ? "I want only the '.food-item' elements which are descendants of the 'starters' ul"
// ? Analogy: We can search for our lost cat inside our whole apartment (document.querySelector), or only in the room we know it's in (Element.querySelector)

const starterFoodItems = starters.querySelectorAll(".food-item");
console.log(starterFoodItems); // NodeList(3) [ li.food-item, li.food-item, li.food-item ]

// Style only the starter food items
starterFoodItems.forEach(({ style }) => style.fontSize = "2rem");

// -------------------------

// * 4. Get element's closest ancestor ("closest")

// With the "closest" method, we can traverse through an element's ancestors (parent, grandparent etc.)
// Until the first ancestor matching the selector is found

// <ul class="allergies">...</ul>
const allergies = document.querySelector(".allergies");

// ? Find the closest ancestor of the allergies ul which is a <section> element

console.log(allergies.closest("section")); // <section class="allergy-warning">

// -------------------------

// * 5. Testing an element against a selector (matches)

// With the matches() method, we can try to find only the elements which MATCH what we're looking for

const allergyListItems = allergies.querySelectorAll("li"); // NodeList(6)

// ? Let's loop through all the elements inside the NodeList...
// 1. If the current element has the id "milk", style it one way
// 2. Else if the current element has the class ".changeme", style it another way
// 3. Else, style it a third way

allergyListItems.forEach(li => {
  if (li.matches("#milk")) {
    li.style.color = "red";
  } else if (li.matches(".changeme")) {
    li.style.color = "green";
    li.style.fontFamily = "Arial";
    li.style.fontStyle = "italic";
  } else {
    li.style.backgroundColor = "yellow";
  }
})