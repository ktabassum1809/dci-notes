import { useState } from "react"

export default function Form() {
	// const [inputTitle, setInputTitle] = useState("")
	// const [inputEmail, setInputEmail] = useState("")
	// const [inputMessage, setInputMessage] = useState("")

    const [data, setData] = useState({title: "", firstName:"", email: "", message: ""})

    function onChangeData(e) {
        setData({...data, 
            [e.target.name]: e.target.value
        })
    } 
	
    
    
    
    const [submitted, setSubmitted] = useState(false)

    console.log(data)



	// const handleChangeTitle = (event) => {
	// 	setInputTitle(event.target.value)
	// }
	// const handleChangeEmail = (event) => {
	// 	setInputEmail(event.target.value)
	// }
	// const handleChangeMessage = (event) => {
	// 	setInputMessage(event.target.value)
	// }


	return submitted ? (
		<div>
			<p>Thank you for your data</p>
            <p>Title: {data.title}</p>
            <p>Email: {data.email}</p>
            <p>Message: {data.message}</p>
		</div>
	) : (
		<form>
			<label>
				Title
				<input name="title" type="text" value={data.title} onChange={onChangeData} />
			</label>
			<br />
            <label>
				First name
				<input name="firstName" type="text" value={data.firstName} onChange={onChangeData} />
			</label>
			<br />
			<label>
				Email
				<input name="email" type="email" value={data.email} onChange={onChangeData} />
			</label>
			<br />
			<label>
				Message
				<textarea
                    name="message"
					value={data.message}
					rows={5}
					cols={33}
					onChange={onChangeData}
				/>
			</label>

			<button
				type="submit"
				onClick={(e) => {
					e.preventDefault()
					setSubmitted(!submitted)
				}}
			>
				Send
			</button>
		</form>
	)
}
