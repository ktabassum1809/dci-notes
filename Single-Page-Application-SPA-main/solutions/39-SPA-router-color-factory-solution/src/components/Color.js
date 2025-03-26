import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Color.css"

const Color = ({ colors }) => {
    const { color } = useParams()
    const navigate = useNavigate()
    const colorValue = colors[color]

    useEffect(() => {
        if (!colorValue) {
            navigate("/colors")
        }
    }, [navigate, colorValue])

    return (
        <div className="Color" style={{ backgroundColor: colorValue }}>
            <p>this is {color}.</p>
            <p>Isn't it beautiful?</p>
            <p><Link to="/colors">Go back</Link></p>
        </div>
    )
};

export default Color;