import { useData } from "./useData";

export default function Products(props) {
  const products = useData("https://fakestoreapi.com/products");

  console.log(products);

  return (
    <div className="comp-box">
      Products:
      <h2> count is: {props.count} </h2>
      <h3> {props.greeting} </h3>
      {products ? (
        products.map((x) => <h5 key={x.id}> {x.title} </h5>)
      ) : (
        <h1> Loading... </h1>
      )}
    </div>
  );
}
