import { useState } from "react";
import Text from "./components/Text";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Text count={count} />
      <button onClick={handleIncrement}>Increment count</button>
    </div>
  );
}

export default App;
