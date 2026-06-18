import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("renter");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        name,
        email,
        password,
        role,
      })
    );

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>
        <p>Join HouseHunt today</p>

        <form className="register-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="role-section">
            <label>Register As:</label>

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
            </div>
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>

          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;