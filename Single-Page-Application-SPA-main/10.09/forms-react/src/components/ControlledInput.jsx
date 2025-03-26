import {useState} from "react"


function ControlledInput() {
	
    const [inputName, setInputName] = useState("")
    const [inputLastName, setInputLastName] = useState("")

    const handleChangeName = event => {
        setInputName(event.target.value)
    }
    const handleChangeLastName = event => {
        setInputLastName(event.target.value)
    }
    

    return (
		<form>
			<label>
				First name:
				<input 
                type="text" 
                value={(inputName)} //the controlled by component state
                onChange={handleChangeName} // Handle input changes
                />
			</label>
            <label>
                Last name:
                <input 
                type="text" 
                value={inputLastName}
                onChange={handleChangeLastName}
                />

            </label>
            <p>Value: {inputName} {inputLastName}</p>
		</form>
	)
}

export default ControlledInput
