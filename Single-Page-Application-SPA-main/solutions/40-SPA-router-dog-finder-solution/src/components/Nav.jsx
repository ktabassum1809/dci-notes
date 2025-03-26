import { NavLink } from "react-router-dom"

export default function Nav({ dogs, currentDog }) {
    return (
      <nav>
        {dogs.map(dog =>
          <NavLink className={currentDog? "" : "active"} key={dog.id} to={"/dogs/" + dog.name}>
            <img src={dog.image} alt="" />
            {dog.name}
          </NavLink>
        )}
      </nav>
    )
  }