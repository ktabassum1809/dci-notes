# Forms in react

## last day:

- Lifecycle of components
- useEffect

## today:

- Forms in React
    - Handling complex forms

### resources:

- []()
- []()
- []()
- []()
- []()

### exercises

- Exercise we did together in class:
    - Ex1: [27-SPA-Component-FeedbackForm](https://classroom.github.com/a/K0QNKa1H)
- New exercise:
    - Ex2: [28-SPA-Component-FormRefactoring](https://classroom.github.com/a/Yuy04b7N)
- Extra with map in React: 
    - Ex3: [20-spa-react-map-transform-jsx](https://classroom.github.com/a/jZyQf77c)

## Theory

### Forms in React

- In a vanilla HTML forms, the value of inputs is managed by the DOM elements
- In React, the value of input elements is stored in state variables
    - This makes the input a "Controlled component"

- Controlled components
    - Form elements where the value is controlled by the component's state
    - A value prop on the form element sets the value based on state variable
    - An onChange event handler updates the state when the input changes
    - [Live coding](./forms-react/)

```js
const ControlledInput = () => {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <label>
                Controlled Input:
                <input
                    type="text"
                    value={inputValue} // Value controlled by component state
                    onChange={handleChange} // Handle input changes
                />
            </label>
            <p>Value: {inputValue}</p>
        </div>
    )
}
```

### Handling complex forms

- With large forms things get complex quickly
- You might want to keep the entire state of the form in one state object
- You might want to avoid tons of change handler functions
- Let's larger forms and complex states by making a more complex app
- [Exercise #27 together](./27-SPA-Component-FeedbackForm-main/)

- Extra example for self-study:

```js
import { useState } from 'react'
import './App.css'

// Custom GitHub search UI https://api.github.com/search/repositories?q=<query>%20user:<user>
function App() {
  const [searchParams, setSearchParams] = useState({ query: '', user: '' })
  const [results, setResults] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const { query, user } = searchParams
    fetch(`https://api.github.com/search/repositories?q=${query}%20user:${user}`)
      .then((res) => res.json())
      .then((data) => setResults(data?.items || []))
      .catch((err) => {
        alert("Error during fetch, check network tab")
        console.error(err)
      })
  }

  function handleChange(e) {
    /*
    We set the new value as a copy of the old values AND we override one value

    For example
         If the old state is { query: 'A', user: 'B' }
         If e.target.name is "query" and e.target.value is "Bx"

         This is like doing: { query: 'A', user: 'B', query: 'Bx' }

         The final value will be { user: 'B', query: 'Bx' }
         This is because the last query overrides the first one´
    */
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value })
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          {/* Example query: "e" */}
          <input
            type="text"
            name="query"
            placeholder="Search for a repo..."
            value={searchParams.query}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          {/* Example user: "Req" */}
          <input
            type="text"
            name="user"
            placeholder="...by a specific user"
            value={searchParams.user}
            onChange={handleChange}
            required
          />
        </label>
        <button>Search</button>
      </form>
      <Results results={results} />
    </main>
  )
}

function Results({ results }) {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id}>
          <a href={result.html_url}>{result.full_name}</a>
        </li>
      ))}
    </ul>
  )
}

export default App
```

**Wrap-up**
- React usually controls the values of inputs based on React state variables
- You can use objects as state variables
- You can use arrays as state variables
- You can handle multiple inputs with one change event handler function
- You can prevent the default form submit event and run your custom JS logic

