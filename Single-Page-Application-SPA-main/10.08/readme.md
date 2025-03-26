# SPA - React - 04: Lifeycle & useEffect


**Yesterday**
- State
- Event handlers in React

**TODAY**
- The lifecycle of a component
- Fetching data in a component

## The lifecycle of a component

- The life of a react component lifecycle can be divided into three main phases:

    - Mounting: The first time a component function runs
    - Updating: Something like a state change causes a component function to rerun
    - Unmounting: A component is removed from a page


- One of the main `useEffect` is for fetching data

- Think of the lifecycle
    - When `User` renders, it starts a `fetch`
    - When the fetch is done, a state variable is changed
    - This causes a re-render
    - This re-render causes the `fetch` to start _again_
    - When the fetch is done, a state variable is changed
    - This causes a re-render again
    - ...infinite render loop...

- A `useEffect` can be made to run only on the first render 
    - No infinite loop!

- The second argument is an array of dependencies
- This makes the execution of the effect dependent on variables


## Wrap-up

- Each component has a lifecycle
- Initial render/mount, rerender, unmount
- With useEffect you can execute code lifecycle moments
- With useEffect you can execute code on state or props change
- UseEffect is often used when fetching data

## APIs to practice fetch:

- https://jsonplaceholder.typicode.com/
- https://fakestoreapi.com/
- https://restcountries.com/#endpoints-latest-added-enpoint

### Exercises:

- [25-spa-react-useeffect-timers](https://classroom.github.com/a/VsQsxcW-)
- [26-spa-react-github-organization-viewer](https://classroom.github.com/a/bQcQZD8l)

