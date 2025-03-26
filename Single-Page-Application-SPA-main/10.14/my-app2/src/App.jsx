import {box1,box2,box3} from "./App.module.css";


function App() {
  return (
    <main>
      <div id={box1}>hello from div 1</div>
      <div id={box2}>hello from div 2</div>
      <div className={box3}>hello from div 3</div>
    </main>
  );
}

export default App;
