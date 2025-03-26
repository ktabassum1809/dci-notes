console.log(window);
console.log(this); // window object, in node: globalThis
console.log(document); // you can omit window to locate the document
console.log(document.head);
console.log(document.body);
console.log(document.body.childNodes); // shows all the child nodes inside the body as an array-like collection (you can loop, use indexing, can't use array methods)

/* 
Let's use document methods to select an element
* syntax: document.method()
*/

// by tag name
// change the body bg to light blue
const body = document.querySelector("body");
console.log(body); // body tag is selected!
body.style.backgroundColor = "lightblue";

// by class name
const container1 = document.querySelector(".container");
container1.style.border = "1px solid green";

// by attribute
const a1 = document.querySelector("[href]"); // if we have multiple a-tags, it would select the 1st a tag and stop search
console.log(a1);

// by id
const a2 = document.querySelector("#link");
console.log(a2);

// when selecting by id, we can also use getElementById()
const a3 = document.getElementById("link");

// NOW, select ALL elements with the class name "li" with document.querySelectorAll()
const allLis = document.querySelectorAll(".li");
console.log(allLis);

//? center h1
const h1 = document.querySelector("h1");
h1.style.textAlign = "center";

//* create a div with ul nested with 3 lis
// 1. create a div
const container2 = document.createElement("div");
// 2. attach the div into the body
body.append(container2);
// 3. add a class name "container" to container2
//? container2.className = "container"; - assign one class only
// classList.add: "container" (or multiple elements in an array)
container2.classList.add("container"); // we can add multiple classes
container2.classList.add(...["test1", "none"]); // use spread operator for an array
// classList.remove: "test1"
container2.classList.remove("test1");
// classList.toggle: if the class name "none" exists, remove it. if it doesn't, add it
container2.classList.toggle("none");
console.log(container2);

// 4. create ul and attach it to container2
const ul2 = document.createElement("ul");
container2.append(ul2);

//5. create 3 lis and attach it to ul2
for (let i = 0; i < 3; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = `list ${i + 1}`;
  ul2.append(newLi);
}

//6. give both container1 & container2 a border 1px solid pink
// select all elements with a class name "container"
const allContainers = document.querySelectorAll(".container");
console.log(allContainers);

//! allContainers.style.border = "1px solid pink"; // not working, for it's an array-like nodeList!

// iterate each container and apply the style
allContainers.forEach(container => {
    // container.style.border = "1px solid hotpink";

    //? what if we want to change border & bg color together?
    container.style = "border: 1px solid hotpink; background-color: white;" // keep CSS syntax
})

