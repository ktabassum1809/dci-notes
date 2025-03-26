# React Router and useNavigate

This small exercise will help you setup and use `useNavigate` React hook.

## Tasks

> 🧸 Examine the existing files and familiarize yourself with the codebase before starting!

### Task 1

Working in the [App.jsx](./src/App.jsx) file;

- Add a new `<Route />` which routes the user to the `Login` page when the `path` matches `login`
- Add a new `<Link>` to the `<nav>` element so the user can navigate to the `Login` page

### Task 2

Working in the [components/Login.jsx](./src/components/Login.jsx) file;

- Add a submit `<button>` to the page

- Write a handler so that when the `<button>` is clicked, the `userName` and `password` credentials are validate against the `loginData` object

  - If the credentials are correct, redirect the user to the `Home` page with the `useNavigate` hook
  - If the credentials are incorrect, display an error message on the page
  - For the error message;
    - use a `<p>` tag with `error` for the `className`
    - the error should disappear after 3 seconds

> 🤖 Hint: For the error, you will have to use the `useState` hook

> 🐴 Hint: To make the error disappear after a few seconds, use the `setTimeout` function
