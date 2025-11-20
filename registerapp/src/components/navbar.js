import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="p-3 d-flex justify-content-center"
      style={{
        backgroundColor: "#222",
        gap: "20px",
      }}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-style active-style" : "nav-style"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? "nav-style active-style" : "nav-style"
        }
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "nav-style active-style" : "nav-style"
        }
      >
        Login
      </NavLink>
    </nav>
  );
}

export default Navbar;

