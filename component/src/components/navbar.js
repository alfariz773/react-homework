import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav p-3 bg-light justify-content-center">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </nav>
  );
}

export default Navbar;
