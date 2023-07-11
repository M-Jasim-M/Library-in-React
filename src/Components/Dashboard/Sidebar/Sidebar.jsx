import React from 'react'
import './Sidebar.css'
import { NavLink} from 'react-router-dom'

function Sidebar() {
  return (
    <>
    <div className="smain">
      <NavLink to="book1">
      <span>Poetry Books</span>
      </NavLink>
      <NavLink to="book2">
      <span>hacking Books</span>
      </NavLink>
      <NavLink to="book3">
      <span>Botany Books</span>
      </NavLink>
      <NavLink to="book4">
      <span>Comput Books</span>
      </NavLink>
      <NavLink to="book5">
      <span>Soci Eng Books</span>
      </NavLink>
      <NavLink to="book6">
      <span>Islamayat Books</span>
      </NavLink>
      <NavLink to="book7">
      <span>Urdu Books</span>
      </NavLink>
      <NavLink to="book8">
      <span>Stories Books</span>
      </NavLink>
      <NavLink to="book9">
      <span>Cartoons Books</span>
      </NavLink>
      <NavLink to="fav">
      <span>Added Books</span>
      </NavLink>
    
       </div>
    </>
  )
}

export default Sidebar