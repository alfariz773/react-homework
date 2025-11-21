import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    function registerUser() {

        axios.post(
            "https://worksheet-product.mashupstack.com/register", 
            {
                name: name,
                email: email,
                password: password
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then(() => {
            alert("User registered successfully. Please login.");
            navigate("/login");
        })
        .catch((error) => {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrorMessage(Object.values(error.response.data.errors).join(" "));
            } else {
                setErrorMessage("Failed to connect to API");
            }
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container">

                <h1>Register</h1>

                {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                )}

                <label>Name</label>
                <input
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Email</label>
                <input
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-primary mt-3" onClick={registerUser}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Register;
