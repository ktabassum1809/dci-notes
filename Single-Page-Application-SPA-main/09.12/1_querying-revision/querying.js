// * Querying - Revision

// DOM is short for "Document Object Model"
// The DOM is a tree-structure that represents the HTML of the page
// The DOM is a "programming interface" (MDN) so that JavaScript can interact with the HTML document
// This lets us use JS to select elements and change them!

// ? Questions

// 1. How can I select the "body" element?
const body = document.querySelector("body");
console.log(body);

// * document.querySelector
// A simple way of selecting a HTML element using the "document" object
// Define the selector inside the parentheses ()
// This will return the FIRST element within the document that matches the selector

// 2. How can I change the font family of the body element to Arial?
// Note: camelCase
body.style.fontFamily = "Arial";

// 3. How can I select all elements with class "myParagraph"?
const myParagraphs = document.querySelectorAll(".myParagraph");
// Return value is of type NodeList
console.log(myParagraphs); // NodeList(3) [ p.myParagraph, p.myParagraph, p.myParagraph ]

// ? Revision: What is a NodeList?

// A NodeList is a collection of document nodes
// It works like an array, but doesn't have access to most array methods
// We can however use a "forEach" loop to loop through the NodeList

// 4. Now we have access to the 3 paragraph elements, let's style them using a forEach loop!
// 4A. All even paragraphs (2) should have red text
// 4B. All odd paragraphs (1 & 3) should have a font size of 4rem, an italic font style and a solid, 2px wide, blue border

// myParagraphs.forEach((paragraph, index) => {
//   if (index % 2 !== 0) {
//     paragraph.style.color = "red";
//   } else {
//     // paragraph.style.fontSize = "4rem";
//     // paragraph.style.fontStyle = "italic";
//     // paragraph.style.border = "2px solid blue";

//     paragraph.style = "font-size: 4rem; font-style: italic; border: 2px solid blue";
//   }
// })

// * Alternatively, if we want to save more time, we can destructure each element's style property!

myParagraphs.forEach(({ style }, index) => {
  if (index % 2 !== 0) {
    style.color = "red";
  } else {
    style.fontSize = "4rem";
    style.fontStyle = "italic";
    style.border = "2px solid blue";
  }
})