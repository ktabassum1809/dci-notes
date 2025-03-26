# React Intro

## last day:

- We finished the first part of the module 💪

## today:

- Intro to SPA
- Quickstart with Vite
- Component basics

### resources:

- [`vite` docs](https://vitejs.dev/)

### exercises

- Ex1: [17-spa-react-vite](https://classroom.github.com/a/PQQygiE8)
- Ex2: [18-spa-react-jsx-data-binding](https://classroom.github.com/a/r-yU7QAB)


## Theory

### Single page application - SPA
- An SPA is a web page that usually is a single HTML document
    - The contents of it are dynamically reloaded
    - The whole page doesn't need to reload when something changes
    - Navigating from one "page" to another doesn't need a full reload
    - You have the same footer, header on every page

- Think of Instagram or Facebook for example
    - Opening an instant message should not reload the whole page
    - Writing a comment on a post should not reload the whole page

- Single page applications are one way of making websites
    - Not everything has to be an SPA
    - We are learning it because it's a great example of one approach
    - Learning SPAs makes it easy to learn other approaches later

### React
- React is a massively popular tool to create SPAs
    - React is a JavaScript library
    - Instead of writing HTML and adding JS
    - You write JS and add HTML (kind of... you'll see)

- Why React?
    - We are learning React as an example of frontend libraries
    - It's extremely popular
    - It's great at learning fundamental concepts
    - It has strong backing; React is developed by Meta

- Other alternatives are for example
    - AngularJS
    - VueJS
    - Once you know one of them well, you can learn others fast

- React has a large ecosystem
    - There are many libraries and frameworks built around React
    - React -> The core library of React
    - React Native -> for creating native mobile applications for Android&iOS
    - Gatsby static site generator for generating incredibly fast websites
    - Next.js framework for building server-rendered applications

### How does React work?
- React recreates the DOM in JavaScript

- This is called a virtual DOM

- You still have the real DOM as well

- But you don't need to access and change the real DOM directly

- You change variables, React changes the DOM

- To define the structure of the page, you will write `JSX`
    - JSX is very similar to HTML

- You don't really need to know the details how it works

- React "reacts" to changes in your page
    - Opening the comment box for a post
        - Maybe the change is to an `isCommentBoxOpen`
    - Opening a private message chat
        - Maybe the change is to a `privateChats` array

- Let's say `privateChats` changes
    - React then updates the virtual DOM
    - Based on that React updates the parts of the page that need to change
    - Maybe making a new private chat div, if it needs to
    - The other parts of the page don't get affected

### JSX
- JSX is the language for defining the HTML structure of a page
    - It's basically HTML elements in JavaScript!
    - `Vite` translates your JSX into pure JavaScript

- JSX is kind of between HTML and JS

- You have to learn some differences, for example
    - Each element must have a closing tag or have a self-closing slash
    - `className` instead of `class`
    - Or `htmlFor` instead of `for`

```js
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name" />
```

- Embedding expressions in JSX

```js
const name = "John Doe";
const element = <h1>Hello, {name}</h1>;
```

- JSX comments

```js
return (
  <div>
    {/* This is a comment in JSX */}
    <h1>Hello, World!</h1>
  </div>
);
```

### Starting a React project with Vite

- We will use `vite` for working with React
    - Vite is a build tool and development server
    - It's modern and VERY fast
    - The build tool contains similar features as WebPack and Babel
    - The development server replaces `Live Server` for us

- To create a new React project with the name "project-name" - that can be any other name

`npm create vite@latest project-name`
-> react
    -> JavaScript
        -> cd my-react-app
            -> npm install
                -> npm run dev

### Component basics

- Entry Point: App.js, the boilerplate App component
- Including styles: import <path to css>
- Importing images: import <image name> from <path to image>
- Using images: <img src={imageName} alt=""..."" />

```js
import React from "react";
import logo from "./logo.png"; // Importing the image

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" /> // Using the imported image
    </div>
  );
}

export default App;
```

### Conditional rendering

- It's very common to see it done with ternaries

```js
const isLoggedIn = true

return(
    <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign me up</h1>}</div>
)




```