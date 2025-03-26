import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} width={100} height={100} />
      <p> {product.title} </p>
      <h4> {product.price}€ </h4>
    </div>
  );
}
