import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { state, dispatch } = useContext(UserContext);
  const [newName, setNewName] = useState(state.user.username);

  return (
    <div>
      <header>
        hello {state.user.username}
        <button onClick={() => dispatch({ type: "LOGOUT" })}> Logout </button>
      </header>
      Profile:
      <br />
      <label htmlFor="email">email</label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        value={state.user.email}
        disabled
      />
      <br />
      <label htmlFor="password">password</label>
      <br />
      <input
        type="text"
        name="password"
        id="password"
        value={state.user.password}
        disabled
      />
      <br />
      <label htmlFor="username">username</label>
      <br />
      <input
        type="text"
        name="username"
        id="username"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <br />
      <button onClick={() => dispatch({ type: "UPDATE", payload: newName })}>
        update username
      </button>
    </div>
  );
}
