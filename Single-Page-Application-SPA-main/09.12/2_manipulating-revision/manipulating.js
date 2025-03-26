// * Manipulating the DOM - Revision

// As well as querying the DOM, we can also manipulate it!
// For example:
//  - Create a new element and insert it into the page
//  - Give extra information to one or more elements (e.g. a new class) or remove information
//  - Delete an element from the page

// ? Questions

// 1. How can I create a new "div" element?
const newDiv = document.createElement("div");

// 2. How can I give the the new div the inner text: "Live long and prosper!"?
newDiv.innerText = "Live long and prosper!";

// 3. How can I give the new div a class called "jsDiv"
// newDiv.className = "jsDiv";
newDiv.classList.add("jsDiv");

// 4. How can I give the new div two more classes ("class2" and "class3") with a single line of code?
newDiv.classList.add("class2", "class3");

// 5. How can I insert the new div into the body of the HTML page?
const body = document.querySelector("body");
body.append(newDiv);

// 6. How can I remove the "welcome" class from the page's original h1 element?
const h1 = document.querySelector("h1");
//h1.classList.remove("welcome");

// * Bonus - remove all classes!
h1.removeAttribute("class");

// ! 7. Remove the original h1 from the HTML page 
h1.remove();

// ! Alternative: do the same using removeChild
// body.removeChild(h1);