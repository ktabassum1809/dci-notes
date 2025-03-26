import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./components/views/Products";
import SingleProduct from "./components/views/SingleProduct";
import "./App.css";
import Layout from "./components/Layout";
import Contacts from "./components/views/Contacts";
import Home from "./components/views/Home";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="contacts" element={<Contacts/>} />
          <Route path="products" element={<Products />} />
          <Route path="itm/:id" element={<SingleProduct />} />
          <Route path="*" element={<Navigate to="products" />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
