import { useContext } from "react"
import { MyContext } from "../context/ExampleContext"

export default function BoxC() {

    const {count} = useContext(MyContext)

  return (
    <div>
    BoxC
    count is: {count}
    </div>
  )
}
