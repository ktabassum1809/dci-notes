import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState(["Initial message"]);

  function log(msg) {
    setMessages([...messages, msg]);
  }
  // For task 3: log("App is running")

  useEffect(() => {
    log("First render");

    setTimeout(() => {
      log("After 5 seconds");
    }, 5000);
  }, []);

  return (
    <main>
      <button onClick={() => log("Message from button")}>Log</button>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
