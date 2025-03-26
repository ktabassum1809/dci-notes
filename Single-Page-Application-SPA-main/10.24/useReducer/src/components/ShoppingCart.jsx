import { useReducer } from "react"

const products = [
	{ id: 1, name: "Cat food", price: 2 },
	{ id: 2, name: "Cat toy", price: 5 },
	{ id: 3, name: "Cat bed", price: 20 },
	{ id: 4, name: "Cat toilet", price: 30 },
	{ id: 5, name: "Cat tree", price: 50 },
	{ id: 6, name: "Cat brush", price: 10 },
]

const initialState = {
	basket: [],
	total: 0,
}

function reducer(state, action) {
	switch (action.type) {
		case "add":
			return {
				basket: [...state.basket, action.product],
				total: state.total + action.product.price,
			}

		case "remove": {
			const index = state.basket.findIndex((x) => x.id === action.product.id)
			if (index === -1) return state // If the product is not found, return the current state

			const newBasket = [...state.basket]
			newBasket.splice(index, 1) // Remove one instance of the product

			return {
				basket: newBasket,
				total: state.total - action.product.price,
			}
		}

		case "clear":
			return {
				basket: [],
				total: 0,
			}

		default:
			console.error("Unknown action", action)
			return state
	}
}

export default function ShoppingCart() {
	const [state, dispatch] = useReducer(reducer, initialState)
	console.log(state)
	return (
		<>
			<header>
				<h1>Cat stuff</h1>
				<p>
					🧺 {state.basket.length} items, {state.total.toFixed(2)} €
					<br />
					<button onClick={() => dispatch({ type: "clear" })}>Clear</button>
				</p>
			</header>

			<main>
				{products.map((product) => (
					<div key={product.id}>
						<h2>{product.name}</h2>
						<p>{product.price} €</p>
						<button onClick={() => dispatch({ type: "add", product })}>
							Add to basket
						</button>
						<button onClick={() => dispatch({ type: "remove", product })}>
							Remove from basket
						</button>
					</div>
				))}
			</main>
		</>
	)
}
