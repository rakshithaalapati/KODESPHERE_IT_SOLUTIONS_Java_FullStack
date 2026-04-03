// Login.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row shadow" style={{ width: "800px" }}>

        {/* Login */}
        <div className="col-md-6 p-4">
          <h3>Login</h3>
          <input className="form-control mb-2" placeholder="Email" />
          <input className="form-control mb-2" type="password" placeholder="Password" />
          <button className="btn btn-primary w-100" onClick={() => navigate("/home")}>
            Login
          </button>
        </div>

        {/* Signup */}
        <div className="col-md-6 p-4 bg-light">
          <h3>Signup</h3>
          <input className="form-control mb-2" placeholder="Full Name" />
          <input className="form-control mb-2" placeholder="Email" />
          <input className="form-control mb-2" type="password" placeholder="Password" />
          <a className="btn btn-success w-100" href="/signup">
            Signup
          </a>
        </div>

      </div>
    </div>
  );
}

export default Login;