import { Fragment, useContext } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { UserContext } from "./context/UserContext";

function App() {
  const { state } = useContext(UserContext);

  console.log(state.user);
  return (
    <Fragment>
      App
      {state.user ? <Profile /> : <Login />}
    </Fragment>
  );
}

export default App;
