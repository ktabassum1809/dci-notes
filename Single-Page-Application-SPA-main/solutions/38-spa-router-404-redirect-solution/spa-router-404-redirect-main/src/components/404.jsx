import {useEffect} from "react"
import {useNavigate} from "react-router-dom"

export default function NotFound() {
	
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => navigate("/"), 3000)
    }, [])
    
    return (
		<>
			<h1>404</h1>
			<p>Sorry, this page doesn't exist! Redirecting you to the homepage...</p>
		</>
	)
}
