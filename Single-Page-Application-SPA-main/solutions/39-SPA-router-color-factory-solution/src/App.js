import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./components/ColorList.js";
import Color from "./components/Color.js";
import NewColorForm from "./components/NewColorForm.js";

const defaultColors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF" };

function App() {
    const [colors, setColors] = useState(() => {
        const storedColors = localStorage.getItem("colors");
        return storedColors ? JSON.parse(storedColors) : defaultColors;
    });

    const addColor = (newColor) => {
        setColors((prevColors) => {
            const updatedColors = { ...prevColors, ...newColor };
            localStorage.setItem("colors", JSON.stringify(updatedColors));
            return updatedColors;
        });
    };

    return (
        <Routes>
            <Route path="colors" element={<ColorList colors={colors} />} />
            <Route
                path="colors/new"
                element={<NewColorForm addColor={addColor} colors={colors} />}
            />
            <Route path="colors/:color" element={<Color colors={colors} />} />
            <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
    );
}

export default App;
