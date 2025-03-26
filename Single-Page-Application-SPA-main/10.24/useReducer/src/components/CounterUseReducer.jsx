import { useReducer } from "react"
import "./CounterUseReducer.css"

export default function CounterUseReducer() {
	const initialArg = 0

	function reducer(state, action) {
		switch (action.type) {
			case "increment":
				return state + 1

			case "decrement":
				return state - 1

			case "reset":
				return 0

			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducer, initialArg)

	// state -> current state
	// dispatch -> update the state and trigger the re-render

	// useReducer() -> calling the hook
	// reducer -> function that specifies how the state gets updated
	// initialArg -> usually an object. Value of initial state

	return (
		<div className="CounterUseReducer">
			<div>CounterUseReducer</div>
			<button onClick={()=> dispatch({type: "increment"})}>+</button>
			<button onClick={()=> dispatch({type: "decrement"})}>-</button>
			<button onClick={()=> dispatch({type: "reset"})}>reset</button>
            <p>{state}</p>
		</div>
	)
}
