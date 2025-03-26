import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(UserContext);

  const handleLogin = () => {
    const fakeUser = {
      id: 555,
      email: email,
      password: password,
      username: "John Doe",
    };
    if (email && password) {
      dispatch({ type: "LOGIN", payload: fakeUser });
    }
  };

  return (
    <div>
      Login:
      <br />
      <label htmlFor="email">email:</label>
      <br />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
      />
      <br />
      <label htmlFor="password">password:</label>
      <br />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        id="password"
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
