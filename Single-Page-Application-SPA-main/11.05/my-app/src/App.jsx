import { useState } from "react";
import "./App.css";
import Products from "./Products";

function App() {
  const [users, setUsers] = useState([]);
  const [toggle, setToggle] = useState(true);

  // fetching users data on click:
  const handleClick = () => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data)); //saving the data in state 'users'
  };

  return (
    <div>
      App:
      <button onClick={() => setToggle(!toggle)}>
        Show Products Component
      </button>
      <button onClick={handleClick}> get users </button>
      {//mapping the users array:
        users.map((x) => (
        <h5 key={x.id}> {x.username} </h5>
      ))}
      {//showing or hiding <Products/> based on the boolean state 'toggle':
        toggle && <Products />}
    </div>
  );
}

export default App;
