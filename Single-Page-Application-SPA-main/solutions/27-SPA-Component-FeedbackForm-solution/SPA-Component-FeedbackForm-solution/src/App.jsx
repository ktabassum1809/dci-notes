import { useState } from 'react'
import './App.css'
import Input from './Input'

function App() {
  const [data, setData] = useState({ title: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function onChange(event) {
    const newData = {
      ...data,
      [event.target.name]: event.target.value
    }
    setData(newData)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <h1>Feedback form</h1>
      {submitted ?
        <p>Thank you for your feedback!</p>
      :
        <form onSubmit={handleSubmit}>
          <Input name="title" type="text" value={data.title} onChange={onChange} />
          <Input name="email" type="text" value={data.email} onChange={onChange} />
          <Input name="message" type="textarea" value={data.message} onChange={onChange} />
          <button>Send</button>
        </form>
      }
    </main>
  )
}

export default App
