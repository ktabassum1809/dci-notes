# Event listeners

## last day:

- Traversing the DOM

## today:

- Recap first two days
- Event listeners

### resources:

- [`append`](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- [Element vs Node in the DOM article](https://medium.com/front-end-weekly/what-is-the-difference-between-element-and-node-in-dom-56182fce7af1)
- [Stackoverflow question](https://stackoverflow.com/questions/9979172/difference-between-node-object-and-element-object)
- [MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events)

### exercises

- Ex1: [05-spa-dom-events-basic](https://classroom.github.com/a/k8hKdGOY)
- Ex2: [06-spa-dom-walking-mario](https://classroom.github.com/a/XqmGHVrr)

## Recap

[recap day 1](./recap-day-1/)
**Select elements:**

- `document.getElementById(id)`
- `document.getElementByClassName(className)`
- `document.getElementsByTagName(tagName)`
- `document.querySelector(selector)`
- `document.querySelectorAll(selector)`


**Modify elements:** 

- Changing inline css with `HTMLElement.style` property
- Manipulating classes: `Element.classList` methods
- Changing element text: The `HTMLElement.innerText` property
- Changing element HTML: The `Element.innerHTML` property
- Creating Elements: `document.createElement(<tagName>)`
- Adding elements to the page: `Element.append(<element>)`
- Changing element attributes with JS



### Node vs element 
[recap day 2](./recap-day-2/)

- Let's examine `<p>Something</p>`
    - Here the paragraph is an element
    - In the DOM it's the the [HTMLParagraphElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement)
    - The text inside: Something is a Text Node
    - All elements are Nodes
    - HTML comments and pieces of text are Nodes
    - If your variable is a Node, it has certain methods
    - If your variable is an Element, it has some more methods

- Comparing `Node.previousSibling` and `Element.previousElementSibling`
- Getting an element's closest parent: `Element.closest(<selector>)`
- Testing an element against a selector: `Element.matches(<selector>)`
- Getting all children of an element: `ParentNode.children`
- Selecting specific children: `ParentNode.querySelector(<selector>)`


### Events

- On websites, most things are reactive

- Something happens, that dispatches an event
    - Also called firing off an event
    - Also called triggering an event

- There are two main kinds of events
    - User reactive Events
    - Events that happen automatically

- User events
    - Something happens after you press a button
    - Something happens after you submit a form
    - Something happens when you move your mouse
    - Something happens when you resize your browser window

- Browser events
    - Something happens when page content is done loading
    - Something happens when a javascript error occurs
    - Your code can listen for events and react to those events

- [Button example](firstButton.html) 
    - When the function myButtonWasClicked runs, it receives an event object
        - This is an object that describes the event that happened
        - Different events cause different event objects
        - Mouse events might have the exact coordinates where the mouse was on screen
        - Keyboard events might have the key that was pressed

- Lots of different kinds of event types [examples events](examplesEvents.html)
    - Mouse/Pointer events: `click`, `mouseenter`, `mouseleave`
    - Keyboard Events: `keydown`, `keyup`


**The event object (common properties)**

- `type`: The type of event (e.g., 'click', 'keyup').
- `target`: The element that triggered the event.
- `currentTarget`: The element to which the event listener is attached.
- `preventDefault()`: Cancels the event if it is cancelable.