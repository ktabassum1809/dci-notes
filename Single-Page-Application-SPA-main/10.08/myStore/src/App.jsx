import { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //setTimeout to add a delay to the response
    const id = setTimeout(() => {
      //fetching the data:
      //         base URL             /endpoint
      fetch("https://fakestoreapi.com/products") //returns a promise
      .then((res) => res.json()) //resolving the promise with .then and translating the response from json to js
      .then((data) => setProducts(data)); //saving the already translated response in our state (products)
    }, 1000 * 7);
   return ()=> clearTimeout(id)
  }, []); // we add an empty array as a second argument when we want to run the code only once when the component is mounted

  return (
    <div>
      <h1>our Products:</h1>
      <div className="container">
        {products.map((item) => 
          //passing the product object 'item' to 'ProductCard' as a prop
          (<ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
