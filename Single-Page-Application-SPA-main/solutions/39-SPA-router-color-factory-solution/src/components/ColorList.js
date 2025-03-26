import { Link } from "react-router-dom";
import "./ColorList.css"

const ColorList = ({ colors }) => {
    return (
        <div className="ColorList">
            <header className="ColorList-header">
                <h1 className="ColorList-title">Welcome to the color factory.</h1>
                <h1>
                    <Link to="/colors/new">Add a color</Link>
                </h1>
            </header>
            <div className="ColorList-intro">
                <p>Please select a color.</p>
                <ul>
                    {colors && Object.keys(colors).map(color => (
                        <li key={color}>
                            <Link to={`/colors/${color}`}>{color}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ColorList;
