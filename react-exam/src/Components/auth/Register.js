import { useState } from "react";
import { useNavigate , Link} from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const navigate = useNavigate();

  function Registeruser() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!username || !email || !password || !confirmpassword) {
      alert("Fill all fields");
      return;
    }

    if (password !== confirmpassword) {
      alert("Password not matching");
      return;
    }

    if (users.find((u) => u.email === email)) {
      alert("User already exists");
      return;
    }

    users.push({ username, email, password, bookmarks: [] });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");
    navigate("/login");
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Register</h3>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={Registeruser}>
          Register
        </button>
        <p className="text-center mt-3">
         Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
