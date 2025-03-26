# Route theory day

## last day:

- Styling in CSS

## today:

- Introduction to react router 
- React Router v6

### resources:

- [History API MDN](https://developer.mozilla.org/en-US/docs/Web/API/History)
- [React router dom **official** documentation](https://reactrouter.com/)
- [React router dom **npm** documentation](npmjs.com/package/react-router-dom)

### exercises

- Ex1: [35-spa-router-v6-basics](https://classroom.github.com/a/LwgIPAPI)
- Ex2: [36-spa-router-band-landing-page](https://classroom.github.com/a/KDO_Pqdi)

## Theory

### Routing

- Reminder: what separates an SPA and a regular UIB-style website?

  - No page reloads
  - Single HTML
  - JS controls the elements of the page

- In regular webpages a nice, useful, feature is clicking the "back" button

  - In SPA the back button doesn't really work...
  - ...unless we make it work!

- The back and forward button are part of the History API
  - JavaScript has access to control the history
  - Also, partly you can control the address bar
  - You can't change evil-hacker.com to mybank.com
  - I can go from evil-hacker.com to evil-hacker.com/contact

#### Controlling the address bar & history

- Let's experiment controlling the history of page with JS
- Let’s have a proof of concept (POC) experimenting with devtools
  - What a POC (proof of concept) is?
    - Demonstration used to verify whether an idea, concept, or theory is doable. In software development, a POC often involves creating a prototype or a simplified version of a system to validate certain functionalities or technological aspects before full-scale development.
  - Let’s experiment in devtools

```js
console.log(history)
console.log(history.state)
history.pushState({ myState: "test" }, "")
console.log(history.state)
history.go(-1)
console.log(history.state)

// history.pushState(stateObject, title, url)
history.pushState("", "", "no-reload-URL-change.html")
history.go(-1)
history.back()
```

**A simple example**

- Go to https://www.iana.org
  - The Browser sends a GET request
  - A server processes the request and returns index.html
- Click on Domain Names, the URL changes to https://www.iana.org/domains

  - The Browser sends a GET request
  - A server processes the request and returns domains.html

- In React and SPAs in general you don't have pages
  - I would call them "views" instead
  - Home view
  - Products view
  - Users view
  - Etc.

#### The History API and React

- In React and SPAs in general, controlling the history is called routing

- In React, routing is not built into the core of React

  - One reason is because React is used in native mobile apps
  - Mobile apps don't have a URL or anything like that
  - The same core of React is used in react-native and React for the web
  - There are also multiple ways to do routing, it can be complex

- Routing takes care of going back/forward between views

  - From "Home" to "Contacts"
  - From "Contacts" to "Products" etc.

- Routing also takes care of loading a specific view based on URLs

  - If you visit https://www.example.com/products directly
  - React should directly show the products view

- A React router
  - Allows users to navigate from page to page without a full page load
  - It will appear faster as only the content is updated, not the entire page

### React router

- The router we will use is react-router-dom from npm

```js
function App() {
	const [showSettings, setShowSettings] = useState(false)
	return (
		<>
			<h1>Basic Example</h1>
			{showSettings ? <Weather /> : <Settings />}
			<button onClick={() => setShowSettings(!showSettings)}>
				Go to the other page
			</button>
		</>
	)
}

function Weather() {
	return <p>I am the weather</p>
}

function Settings() {
	return <p>Settings!</p>
}
```

- This is not great…
    - What if we add more views?
    - What if we want to link directly to Settings?
    - In /weather we just want the weather to show
    - In /settings we just want the settings panel to show

Let's use react router dom

`npm install react-router-dom`

- What is happening in [`main.jsx`](./routing-example/src/main.jsx)

```js
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```
    - We are importing `BrowserRouter` from "react-router-dom"
    - Wrapping the `App` component in `BrowserRouter`

- What is happening in [`App.jsx`](./routing-example/src/App.jsx)

```js
// App.jsx

import "./App.scss"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Weather from "./components/Weather"
import Settings from "./components/Settings"

function App() {
	return (
		<div>
			<h1>Basic Example</h1>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Weather />} />
					<Route path="weather" element={<Weather />} />
					<Route path="settings" element={<Settings />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
```

- import { Routes, Route } from "react-router-dom"
- Wrap all routes with <Routes> </Routes>
- Wrap routes inside of a <Route> </Route>
    - `path=”/”` => That will create a route for the root path (/).
    - `element={<Layout />}` => render the component that contains the formatting (Layout)

- Have all routes inside (self-closing tags).
    - The first one contains `index`, which means it will render that one by default (when the path is “/”)
    - When the path is “/weather” we will render `<Weather />`
    - When the path is “/settings” we will render `<Settings />`


- What is happening in [`Layout.jsx`](./routing-example/src/components/Layout.jsx)

```js
// Layout.jsx

import {NavLink, Outlet} from "react-router-dom"

export default function Layout() {
    return (
        <main>
            <ul>
                <li><NavLink to="/weather">Weather</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        
            <Outlet />
        </main>
    )
}
```

- import {NavLink, Outlet} from "react-router-dom"
- Create navegable links with `Navlink`
- `Navlink` is good target to styling
- `Outlet` acts as a placeholder (this is where the children routes will go)


**Wrap-up**
- JS has access to the History API to control back/forwards and the URL
- In an SPA you need Routing to make back/forwards and URL loading work
- We will use `react-router-dom`

**Self-study options**
- In addition to BrowserRouter react-router-dom has HashRouter - try it!
- There are other ways of using React Router
    - [React router tutorial](https://reactrouter.com/en/main/start/tutorial)