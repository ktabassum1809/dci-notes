import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const loginData = {
    username: "react",
    password: "r3@ct",
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (
      formData.get("userName") === loginData.username &&
      formData.get("password") === loginData.password
    ) {
      navigate("/");
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        {error ? <p className="error">There was an error logging in</p> : null}
        <label>
          <span>Username</span>
          <input name="userName" type="text" />
        </label>
        <label>
          <span>Password</span>
          <input name="password" type="password" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
