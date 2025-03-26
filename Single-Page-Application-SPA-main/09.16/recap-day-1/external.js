console.log("hello from the external js")

// Query element
const span = document.querySelector("span")
console.log(span)

// Manipulate element
span.innerText = "Sweet potato"
span.innerHTML = "<b>Beethoven</b>"

span.classList.add("highlight")

// Query and manipulate multiple elements

const paragraphs = document.querySelectorAll("p")

paragraphs.forEach(p => {
    p.style.borderBottom = "1px solid red"
})

// Create an element

const inline = document.createElement("span")

inline.innerText = "I'm a span!"

const p = document.querySelector("p")
p.append(inline)

document.body.append(inline)
