# useReducer

## last two days:

- `useContext()`
- Practice day

## today:

- useReducer() hook

### resources:

- [Web Dev Simplified `useReducer()` YouTube video](https://www.youtube.com/watch?v=kK_Wqx3RnHk)
- [Web Dev Simplified `useReducer()` blog post](https://blog.webdevsimplified.com/2020-06/use-reducer/)
- [UseReducer from documentation](https://react.dev/reference/react/useReducer)

### exercises

- Ex1: [44-SPA-store-useReducerSpeedometer](https://classroom.github.com/a/2a7_89Xr)

## Theory

### State management

- There are actually multiple approaches to managing state
- There are even NPM libraries for managing state

  - One very famous one is called Redux
  - Another one is called MobX

- We won't learn a completely separate state management library
  - But it is very good to know at least this one common strategy

### The useReducer hook

- First off, this is like a very distant cousin of `Array.prototype.reduce()`
- This hook is based on the concepts introduced by Redux

  - Learning useReducer() empowers you to learn Redux quickly if you need to

- useReducer() is an alternative to useState()

  - It's best suited for complex state updates
  - Works in a different way than useState()

- useState() still is great for simple states

  - It's still the main, basic way of doing single state variables
  - You can do complex states too, but Reducer might be better

- Complex state examples
  - Shopping basket
  - Complex forms
  - User profiles

```js
// useState
const setStateInitial = 0
const [state, setState] = useState(setStateInitial)

// useReducer
const initialState = { counter: 0 } //commonly, the initial state is an object
const [state, dispatch] = useReducer(reducer, initialState)
```

- useReducer(reducer, initialState) takes in 2 arguments

  - A `reducer` function
  - An initial state

- useReducer returns an array of 2 elements

  - The current: `state`
  - A dispatch function: `dispatch`

- With `useState` you update the state directly via `setState`
- With `useReducer` you "dispatch an action"

  - This means you call the dispatch function
  - You give it an "action" object as an argument

- You have to define the "actions" yourself
- For example, if our `useReducer` is for a shopping cart, our actions could be

  - Add product to shopping cart
  - Remove product from shopping cart
  - Clear shopping cart

- Actions are dispatched as objects

  - `{ type: "add_product", product: {id:1, price:42, name:"laptop"} }`
  - `{ type: "remove_product", productId: 1 }`
  - `{ type: "clear_cart" }`

- So your JSX could have something like

```js
<button onClick={() => dispatch({ type: "clear_cart" })}>Empty cart</button>
```

- Or you could have product listing where people can add products to the cart

```js
<div className="product-cards">
    {products.map(prod => (
        <div className="product-card">
            <h2>{prod.name}</h2>
            <p>{prod.description}</p>
            <p>{prod.price}
            <button onClick={() => dispatch({ type: "add_product", product: prod })}>
                Add to cart
            </button>
        </div>
    ))}
</div>
```

- The dispatch function then calls the reducer function

  - You actually define the reducer function yourself!

- Your reducer function takes in your action object and the current state
  - It can then change the state based on the action
  - And it returns the new state

```js
function reducer(state, action) {
	if (action.type === "add_product") {
		return {
			...state,
			items: [...state.items, action.item],
		}
	}

	if (action.type === "remove_product") {
		return {
			...state,
			items: state.items.filter((item) => item.id !== action.id),
		}
	}

	if (action.type === "clear_cart") {
		return {
			...state,
			items: [],
		}
	}

	console.error("Unknown action", action)

	return state
}
```

**Wrap-up**

- The useReducer hook is an alternative to useState
- It's used for complex states
- const [state, dispatch] = useReducer(reducer, initialState)
  - State: current state
  - Dispatch: function that can be used to dispatch actions
  - Reducer: function that takes care of dispatched actions
  - Action: object that instructs the reducer what to do to the state