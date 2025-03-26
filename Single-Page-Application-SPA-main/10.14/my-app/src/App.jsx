import Header from "./components/Header.jsx"; //our custom component
import "./App.css"; //importing the css
import "./App.scss"; //importing the scss
import Button from "react-bootstrap/Button"; //react-bootstrap custom component

function App() {
  return (
    <main>
      <Header />
      <div
        className="box1"
        style={
          //inline styling
          { backgroundColor: "lightgreen", fontSize: "40px" }}
      >
        hello world
        <p className="my-text">a paragraph inside div 1</p>
      </div>
      {
        //                  classes from bootstrap
      }
      <div className="box2 text-danger">hello again</div>
      <div className="box3">
      hello from div 3
      </div>
      <div className="box4"> hello from div 4 <p> nested in div 4 </p> </div>
      {
        //using the react-bootstrap component
      }
      <Button variant="success">click here</Button>
      <button>normal html</button>
      
    </main>
  );
}

export default App;
