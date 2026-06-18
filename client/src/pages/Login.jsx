import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("renter");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("currentUser", email);

    if (role === "admin") {
      navigate("/admin-dashboard");
    } else if (role === "owner") {
      navigate("/owner-dashboard");
    } else {
      navigate("/properties");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Login to HouseHunt</p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
          />

          <div className="role-section">
            <label>Login As:</label>

            <div className="roles">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="renter"
                  checked={role === "renter"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Renter
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="owner"
                  checked={role === "owner"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Owner
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={role === "admin"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Admin
              </label>
            </div>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="forgot-text">
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;