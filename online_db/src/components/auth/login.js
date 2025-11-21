import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authslice";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function attemptLogin() {
        axios.post("https://worksheet-product.mashupstack.com/login", {
            email: email,
            password: password
        })
        .then(response => {
            const user = {
                email: email,
                token: response.data.token
            };

            dispatch(setUser(user));
            navigate("/products");
        })
        .catch(() => {
            setErrorMessage("Invalid email or password");
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Login</h1>

                {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                )}

                <label>Email:</label>
                <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  // FIXED
                />

                <label>Password:</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  // FIXED
                />

                <button className="btn btn-primary mt-3" onClick={attemptLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
