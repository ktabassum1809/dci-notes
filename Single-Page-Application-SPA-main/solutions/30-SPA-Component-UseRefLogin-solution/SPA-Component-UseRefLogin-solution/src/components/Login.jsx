import { useEffect, useRef, useState } from "react"
import "./Login.css"

export default function Login({ setUser }) {
  const unameRef = useRef(null)
  const passRef = useRef(null)
  const [error, setError] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (error === "Wrong password")
      return passRef.current.focus()

    if (error === "Wrong username")
      return unameRef.current.focus()

    if (error)
      return passRef.current.focus()
  }, [error])

  function checkLogin() {
    if (username !== "root") { return setError("Wrong username") }
    if (password === "1234") { return setError("That's the old password") }
    if (password !== "toor") { return setError("Wrong password") }

    setUser(username)
  }

  return (
    <>
      <p className="error">{error}</p>

      <label>
        User
        <input
          type="text"
          value={username}
          onChange={e=>setUsername(e.target.value)}
          ref={unameRef}
        />
      </label>

      <label>
        Pass
        <input
          type="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          ref={passRef}
        />
      </label>

      <button onClick={checkLogin}>
        Login
      </button>

      <p className="error">{error}</p>
    </>
  )

}