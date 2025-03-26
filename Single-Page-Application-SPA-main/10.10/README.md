# useRef hook

## last day:

- React forms

## today:

- `useRef` syntax
- `useRef`to access the DOM

### resources:

- [`useRef` react documentation](https://react.dev/reference/react/useRef#useref)
- [Manipulation the DOM with `useRef` react documentation](https://react.dev/learn/manipulating-the-dom-with-refs)

### exercises

- Ex1: [29-SPA-Component-AnimateWithUseRef](https://classroom.github.com/a/v_gG6mMt)
- Ex2: [30-SPA-Component-UseRefLogin](https://classroom.github.com/a/qyCoG9yI)

## Theory

### DOM access from React

- In some rare cases, you might want direct access to the DOM
- Usually this is for **styling** or for **managing focus**
- You can access the DOM using the `useRef` to create a reference to an element
- There are other use cases for `useRef` as well
    - If you have time and want to, feel free to investigate

### The `useRef` hook
- `useRef` is used to "remember" values between renders
- Modifying values through `useRef` do not trigger a re-render
- The `useRef` hook can creates a reference to a DOM element
- It returns an object with a `current` property

#### `useRef` Syntax

- `import {useRef} from "react"`
- const variableName = useRef(initial value)https://react.dev/learn/manipulating-the-dom-with-refs


#### Some DOM element methods:

- `focus()`
    - Focus on the specified element, if it can be focused.

- `blur()`
    - The opposite of focus()

- `scrollIntoView()`
- `style`
    ```js
        function handleClick() {
        inputRef.current.style.backgroundColor = "red"
        } 
    ```

- `setAttribute()`
```js
function handleClick() {
    inputRef.current.setAttribute("placeholder", "I'm a placeholder");
  }
```

- `removeAttribute()`
```js
    function removeAttribute() {
    inputRef.current.removeAttribute("disabled")
    }
```

- `classList`
    - add
    - remove
    - toggle

- We practiced many of those methods [here](./first-useRef/src/components/MyComponent.jsx)

**Wrap-up**
- The useRef hook gives us direct access to DOM elements
- The useRef hook can do other things as well
- You have to access the target of the reference with .current

**Self-study**
- Other uses useRef
- More about manipulating the DOM with ref (just read article from documentation - find it in resources)
