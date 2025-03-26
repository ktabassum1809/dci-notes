# Review task ReactJs

To begin development after cloning this repo locally:

1. install the packages with `npm install`
2. for development run: `npm run dev`

## Task 1

Passing props from parent component to child components

1. In `App.jsx` create an object with an user basic information
2. Create a separate component is a new file `DisplayUser.jsx`
3. Use this new component in `App.jsx` and pass the object as a prop
4. Retrive the user object prop and display the information to the screen

## Task 2

Managing form data

1. Create a new component `ContactForm.jsx` and and use it inside of App
2. The form should have tree fields for name, email and textarea plus a submit button
3. Manage the state inside of the component itself
4. If all the field are filled, display a success message upon submission
5. Log the data itself in the console. remember to clear the field at this stage

## Task 3

Create new Routes.

The two newly created components are currently being display one on top of the other.

1. `DisplayUser` is to be displayed directly at the homepage
2. `ContactForm` should have its own new route `/contact/`
3. Non exiting routes should display an error message. For that create a new file `NotFound.jsx`
4. Create a layout page with a navigation to be shared across pages
    - Use `Link` component from react-router-dom

## Task 4

create a context for the user information.

1. create a new context for holding the user information currently in `App.jsx`
2. create a Provider to pass this information
3. Consume the state in `DisplayUser` component
4. Add a functionality such as a form that allows to change the user name.

## Task 5

Fetch data from an API

1. Create a new page `friends` and create and use the componets `FriendsList.jsx`
2. Make a fetch OR axios request to `https://jsonplaceholder.typicode.com/users`
3. Save the data to a state managed inside to the component itself
4. The request is made upon a page mount. Use `useEffect` for this
5. Using an Array map function to loop through the data and display the list of friends

Bonus:

-   Manage the state from `ContactForm` with a useReducer
