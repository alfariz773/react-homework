import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("currentUser");

  function logout() {
    localStorage.removeItem("currentUser");
    alert("Logged out");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">

      <div className="navbar-brand d-flex align-items-center">
        <h4 className="mb-0">Bookmark Saver:</h4>

        {user && (
          <span className="text-light ms-2">
            {user}
          </span>
        )}
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <NavLink to="/list" className="nav-link">Bookmarks</NavLink>
          </li>

          {!user && (
            <>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">Register</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <li className="nav-item">
                <NavLink to="/create" className="nav-link">Add</NavLink>
              </li>

              <li className="nav-item">
                <span className="nav-link" style={{ cursor: "pointer" }} onClick={logout}>
                  Logout
                </span>
              </li>
            </>
          )}

        </ul>
      </div>
    </nav>
  );
}
