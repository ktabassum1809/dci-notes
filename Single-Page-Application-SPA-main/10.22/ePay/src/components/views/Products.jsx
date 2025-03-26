import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../ProductCard";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((x, i) => (
        <NavLink to={`/itm/${x.id}`} key={i}>
          <ProductCard product={x} />
        </NavLink>
      ))}
    </div>
  );
}
