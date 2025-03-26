import { useState } from "react"
import "./CounterUseState.css"

export default function CounterUseState() {
	const [count, setCount] = useState(0)

	function increment() {
		setCount(count + 1)
	}

    function decrement() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

	return (
		<div className="CounterUseState">
			<div>CounterUseState</div>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
			<button onClick={reset}>reset</button>
            <p>{count}</p>
		</div>
	)
}
