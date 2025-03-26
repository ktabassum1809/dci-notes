import { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Fragment>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer/>

    </Fragment>
  );
}
