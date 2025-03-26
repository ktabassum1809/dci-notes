import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// a small nested component used inside App component for learning purposes (to practice props):
function Greeting({ username, countNumber }) {
  console.log(countNumber);
  return <div> hello {username} </div>;
}


//App component:
function App() {
  //local state(local to App component):
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");

  //event handlers:
  const handleChange = (e) => setUsername(e.target.value);
  const handleClick = () => setCount((previousCount) => previousCount + 1);

  return (
    <>
      <div>
        <h2> {username} </h2>
        <input type="text" onChange={handleChange} />
        {/* using the Greeting component from before and passing 2 props to it: */}
         {username && <Greeting username={username} countNumber={count} />}
      </div>
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
