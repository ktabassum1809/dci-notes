import { useContext } from "react";
import { MyContext } from "../context/ExampleContext";

export default function Box2() {
const {setCount} = useContext(MyContext)

  return (
    <div>
      Box2
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        increase count
      </button>
    </div>
  );
}
