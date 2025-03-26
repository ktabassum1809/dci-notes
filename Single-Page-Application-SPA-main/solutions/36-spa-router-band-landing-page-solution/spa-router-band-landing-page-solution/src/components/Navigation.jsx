import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt={logo}></img>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/vocals">VOCALS</NavLink>
          </li>
          <li>
            <NavLink to="/guitar">GUITAR</NavLink>
          </li>
          <li>
            <NavLink to="/bass">BASS</NavLink>
          </li>
          <li>
            <NavLink to="/drums">DRUMS</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
