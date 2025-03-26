import { useRef } from "react"
import "./MyComponent.css"

export default function MyComponent() {
	const inputRef = useRef(null)
	function handleClick() {
		inputRef.current.focus()
	}

	const buttonRef = useRef(null)
	function handleFocusButton() {
		buttonRef.current.focus()
	}

	function scrollView() {
		inputRef.current.scrollIntoView()
	}

    function changeStyleInput() {
        inputRef.current.style.backgroundColor = "red"
        // inputRef.current.style.color = "white"
    }

    function addAttribute() {
        inputRef.current.setAttribute("placeholder", "I'm a placeholder")
        inputRef.current.setAttribute("disabled", true)
    }

    function removeAttribute() {
        inputRef.current.removeAttribute("disabled")
        inputRef.current.removeAttribute("placeholder")
    }

    console.log(inputRef)

	return (
		<>
			<div className="big-margin">
				<input ref={inputRef}/>
				<button onClick={handleClick} ref={buttonRef}>
					Focus the input
				</button>
				<button onClick={handleFocusButton}>Focus on the button</button>
                <button onClick={changeStyleInput}>Change style of the input</button>
                <button onClick={addAttribute}>Add attribute</button>
                <button onClick={removeAttribute}>Remove attribute</button>
			</div>
			<div>
				<button onClick={scrollView}>Scroll to input</button>
			</div>
		</>
	)
}
