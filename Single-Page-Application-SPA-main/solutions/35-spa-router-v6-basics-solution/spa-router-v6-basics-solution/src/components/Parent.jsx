import { Link, Outlet } from "react-router-dom";

function Parent() {
  return (
    <>
      <div className="parent-div">
        <nav className="parent-nav">
          <Link className="parent-link home-link" to="/">
            Home
          </Link>
          <Link className="parent-link" to="/one">
            Child One
          </Link>
          <Link className="parent-link" to="/two">
            Child Two
          </Link>
          <Link className="parent-link" to="/three">
            Last Child
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Parent;
