import React from "react";
import { NavLink } from 'react-router-dom';

export default function Navbar(){
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/project">
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  )
}