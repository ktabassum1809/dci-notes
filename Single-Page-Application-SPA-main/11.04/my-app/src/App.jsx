import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./Products";
import Users from "./Users";
import About from "./About";

// how the 'props' object of the 'Product' component looks like:
//  const props = {count: 0, greeting: "good morning" }

//  console.log(props.greeting)

function App() {
  const [count, setCount] = useState(0);
  const [showUsers, setShowUsers] = useState(false)
 
  return (
    <div className="comp-box">
      <div>
      <button onClick={()=> setShowUsers(!showUsers)} >toggle pages</button>

      <About greeting = {"good afternoon"} count = {count} />

      {showUsers? <Users/> : <Products count = {count}  greeting={"good morning"} />}

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
