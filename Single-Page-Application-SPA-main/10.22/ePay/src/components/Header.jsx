import React from 'react'
import {NavLink} from "react-router-dom"

export default function Header() {
  return (
    <div>
    <NavLink to="/"> ePay </NavLink>


    <NavLink to={"/products"}> Products </NavLink>
    <NavLink to={"/contacts"}> contacts </NavLink>
    </div>
  )
}
