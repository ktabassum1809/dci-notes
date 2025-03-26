import "./Header.css";
import img from "/vite.svg";
import burger from "/burger.svg";

export default () => {
  return (
    <header>
      <div className="logo">
        <img src={img} alt="Company Logo" />
      </div>
      <nav>
        <a href="#foo">Home</a>
        <a href="#bar">Products</a>
        <a href="#baz">Careers</a>
        <a href="#qux">Contact</a>
      </nav>
      <img
        id="burger"
        src={burger}
        alt="Menu icon"
        onClick={() => alert("Beep boop")}
      />
    </header>
  );
};
