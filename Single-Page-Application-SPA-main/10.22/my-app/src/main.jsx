import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyContextProvider from "./context/ExampleContext.jsx";

createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
