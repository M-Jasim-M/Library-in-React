import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="nav">
<div className="logo">Online Library</div>
<div className="links">
  <NavLink to="/dash/book1">
    <li>Home</li>
    </NavLink>
    <NavLink to="/about">
    <li>About</li>
    </NavLink>
    <NavLink to="/contact">
    <li>Contact</li>
    </NavLink>
    <NavLink to="/services">
    <li>Services</li>
    </NavLink>
    <NavLink to="/dash/fav">
    <li>Favorites</li>
    </NavLink>
    <NavLink to="/form">
    <li>Add Your Book</li>
    </NavLink>
</div>

<div className="logout">Logout</div>

    </div>

    </>
  )
}

export default Navbar