import AnimalList from "./components/AnimalList.jsx";
import animals from "./data.js";

function App() {
  return (
    <main>
      <h1>The best animals</h1>
      <AnimalList animals={animals} />
    </main>
  );
}

export default App;
