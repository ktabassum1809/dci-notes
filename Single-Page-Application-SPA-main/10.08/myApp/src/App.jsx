import {useState, useEffect, Fragment} from "react";
import "./App.css";

function Counter({ test }) {
  const [count, setCount] = useState(0);
  console.log("Counter is rendered");

  useEffect(() => {
    //write your code here

    console.log(">>>>>> counter useEffect <<<<<<<");

    return () => console.log("!!!!!!! Counter will unmount !!!!!!!!");
  }, [count]);

  return (
    <Fragment>
      <div className="counter-box">
        {console.log("counter jsx")}
        hello from Counter
        <p style={{ cursor: "pointer" }} onClick={() => setCount(count + 1)}>
          {count} clicks
        </p>
      </div>
    </Fragment>
  );
}

function App() {
  const [showCounter, setShowCounter] = useState(false);
  console.log("App is rendered");
  return (
    <div className="app-box">
      hello from App
      <br />
      <button onClick={() => setShowCounter(!showCounter)}>show counter</button>
      {showCounter ? <Counter test="hi" /> : <p>- - - - -</p>}
    </div>
  );
}

export default App;
