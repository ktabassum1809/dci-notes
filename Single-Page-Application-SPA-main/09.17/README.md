# Event propagation

## last day:

- Recap
- Event listeners

## today:

- Event propagation and delegation
- Debugging

### resources:

- [Event Propagation Visualized](https://codepen.io/finfin/pen/zYrMBob)
- [Debugging JavaScript - Chrome DevTools 101 (Youtube)](https://www.youtube.com/watch?v=H0XScE08hy8)

### exercises

- Ex1: [07-spa-dom-click-to-remove](https://classroom.github.com/a/zKm6aaXn)
    - optional:
- Ex2: [08-spa-dom-todo-list](https://classroom.github.com/a/q_1pJscy)

## Theory

### Event propagation [code folder](./event-propagation/)

```js
<body>
	<main>
		<button>Click me</button>
	</main>
</body>
```

- **Capturing phase**
  When you click the button, the click event fires: - First of the document - And then the html - And then the body - And then the main - And then the button

- **Target phase**

  - The target phase is the second phase that begins immediately after the capturing phase ends.

- **Bubbling phase**

  - First for the button
  - And then the main
  - And then the body
  - And then the html
  - And finally the document

- Event propagation is important because it allows events to be handled at multiple levels within the DOM. For instance, if we attach the same event listener to a parent element, such as the section, we can handle the same event twice: once at the target and once at a parent element.

- Example with multiple event listeners:

```js
document.querySelector("section").addEventListener("click", function () {
	alert("Section clicked!")
})

document.querySelector("a").addEventListener("click", function () {
	alert("Anchor clicked!")
})
```

- Capturing vs. Bubbling Phase Event Listeners

By default, event listeners handle events during the bubbling phase. However, we can set them to handle events during the capturing phase by passing a third argument to `addEventListener`.

```js
document.querySelector("section").addEventListener(
	"click",
	function () {
		alert("Section clicked!")
	},
	true
)

document.querySelector("a").addEventListener("click", function () {
	alert("Anchor clicked!")
})
```

**Conclusion**
Event propagation, including capturing and bubbling phases, is a powerful concept that enables flexible and dynamic event handling in JavaScript. By understanding these phases, you can create more efficient and organized event-driven applications.


### Debugging [code folder](./debugging/)

- Sometimes when writing code it doesn't seem to be doing what you expect
    - Perhaps there's a bug 🐛

- Debugging is the process of finding bugs
    - Issues that prevent correct, expected operation

- We have already debugged HTML and CSS with devtools
- Also JS with console.log()
- With complex applications and logic, we need something more
- Let's learn about more traditional debugging

- It can walk you step by step into the triggering of an event and/or a function
- Recommended for bigger problems
