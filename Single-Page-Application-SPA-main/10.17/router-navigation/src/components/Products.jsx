import {useNavigate} from "react-router-dom"


export default function Products() {
	
	
	const navigate = useNavigate()
	
	
	return (
		<>
			<p>Our products are great!</p>
			<button onClick={()=> navigate("/contact")}>
				Click here to contact us
			</button>
		</>
	)
}
