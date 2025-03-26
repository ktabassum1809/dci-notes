import {useEffect} from "react"
import {useNavigate} from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate()

    useEffect(()=> {
        setTimeout(() => navigate("/"), 5000)
    }, [navigate])
    
    
    return <p>Sorry, 404, we'll send you back to the home page in 5 seconds</p>
}