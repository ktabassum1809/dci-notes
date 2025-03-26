# TODAY - Time to work with Browser again!

## JavaScript in the Browser

    - add `script` element in `HTML`
    - log "hello world!" to the console, and
    - let's go live!
        - check `console` tab in the browser developer tool
    - we can also link an external js file in `script`
    - Window Object
            - The Window object is a global object, representing the browser window containing a DOM document and acting as the root of the document object model.
            (later, we'll learn 3 window methods: alert(), confirm(), prompt())
    - Document Object
            - As a property of the Window object, the Document object is the HTML document that appears in the browser window and serves as an interface for interacting with the webpage content

## DOM (Document Object Model)

[MDN DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

- how to approach `HTML` from JS point of view:

  - add `script`(s) to `HTML` & let's go live!
  - Window Object
    - The Window object is a global object, representing the browser window containing a DOM document and acting as the root of the document object model.
    - later, we'll learn 3 window methods: alert(), confirm(), prompt()
  - document object: welcome to `DOM` (Document Object Model)
    - in the DOM, everything is a `node`
      - element node, text node, attribute node ...

- DOM Querying & Manipulating with document methods
  Selecting element(s) - `document.querySelector(<selector>)` - `document.querySelectorAll(<selector>)` - `document.getElementById()`
  Creating element(s) - `document.createElement(<tagName>)`
  Adding an element to another element - `Element.append(<element>)`
  Class adding/removing/toggling - `Element.classList`
  Text adding/modifying - `Element.innerText` - `Element.innerHTML`
  Styling - `Element.style`
  Styling multiple properties - `Element.style.cssText`

## Window Object Methods

- window.alert() - shows a popup message in browser
- window.prompt() - ask for an input
- window.confirm() - ask to confirm (y/n, boolean)

## Exercises

[sumIt quiz game]

[querying styling]

[the book list]
