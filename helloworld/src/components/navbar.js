import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav p-3 bg-light justify-content-center">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/curd" className="nav-link">Contact</NavLink>
      <NavLink  to={"/register"} className={ 'nav-link '+  (status => status.isActive ? 'active' : '') }>  Register </NavLink>
      <NavLink  to={"/login"} className={ 'nav-link '+  (status => status.isActive ? 'active' : '') }>  Login </NavLink>
    </nav>
    
  );
}

export default Navbar;
    