import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewColorForm.css"

const NewColorForm = ({ addColor }) => {
    const initState = {
        name: "",
        hex: "#FFFFFF", // Default white color
    };

    const [color, setColor] = useState(initState);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ [color.name]: color.hex });
        navigate("/colors");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setColor((prevColor) => ({
            ...prevColor,
            [name]: value,
        }));
    };

    return (
        <div className="NewColor">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter a name for the color"
                        onChange={handleChange}
                        value={color.name}
                    />
                </div>
                <div>
                    <label htmlFor="hex">Color value</label>
                    <input
                        type="color"
                        name="hex"
                        id="hex"
                        onChange={handleChange}
                        value={color.hex}
                    />
                </div>
                <input type="submit" value="Add this color" />
            </form>
        </div>
    );
};

export default NewColorForm;