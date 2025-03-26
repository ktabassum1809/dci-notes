import { useParams } from "react-router-dom"
import Dog from "./Dog"
import Nav from "./Nav"

export default function Dogs({ dogs }) {
  // Get the current dog name form the route (current address in browser)
  const { name } = useParams()

  return (
    <div>
      <Nav dogs={dogs} currentDog={name} />

      {/* If a dog is selected, then show info for that dog */}
      {name && <Dog dogs={dogs} currentDog={name} />}
    </div>
  )
}
