# React Router v6 Basics

In this exercise, you'll create a simple website with a navigation bar, and learn how to define and render nested routes using **React Router v6**.

## Tasks

Before starting, have a look at the router map:

![Router Map](/router-map.png)

- In the `Parent` route, we will display a navigation bar. This needs to be always shown.
- We have 5 routes nested under the `Parent` route:
  - `Home` - an index page, no path is given
  - `ChildOne`, `ChildTwo`, `LastChild` - rendered when the full path matches
  - `PageNotFound` - a "catch all" - captures all paths when there's no matching route is found

> 🐶 For this exercise, the [CSS](./src/App.css) has already been prepared for you.

### Expected Result

Follow the link to try a [Live Demo](https://dci-webdev.github.io/spa-router-v6-basics/) of the result.

### Task 1

Install the [react-router-dom](https://www.npmjs.com/package/react-router-dom) npm package.

### Task 2

In the [src](./src/) folder, create a `components` folder and create the following components with some mock JSX;

- `Parent`
- `Home`
- `PageNotFound`
- `ChildOne`
- `ChildTwo`
- `LastChild`

### Task 3

In [App.jsx](/src/App.jsx),

1. Import and correctly render in the JSX, the **BrowserRouter**, **Routes**, **Route** components from `react-router-dom`
2. Import all the components you created in Task 2
3. Set up the routes according to the [Router Map](/router-map.png)

- 5 child routes are nested under `Parent`
- For `Parent`, a path is set as `/`
- For the default page `Home`, give an attribute `index` instead of defining a path. When `Home` is selected, the path remains `/`.
- `PageNotFound` should be rendered when for all paths that don't have matching routes. Use `*` for the path.
- For each child route, a unique path is required, e.g, `/one`, `/two`, `/three`

### Task 4

Because all routes are nested under `Parent`, content in the `Parent` will always be rendered. This is useful for example, when we want a navigation bar to always appear on the page.

In `Parent.jsx`;

1. Import the `Link` and `Outlet` components from `react-router-dom`
2. Use `Link` to navigate the user to the `Home`, `ChildOne`, `ChildTwo`, `LastChild` routes
3. Finally, render the `Outlet` component - this renders the current route selected
