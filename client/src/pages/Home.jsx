import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import house1 from "../images/house1.jpg";
import house2 from "../images/house2.jpg";
import house3 from "../images/house3.jpg";

function Home() {
    const images = [house1, house2, house3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="home-container">

      <nav className="navbar">
        <h2 className="logo">HouseHunt</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      <div className="hero">

        <div className="slider">
            <div className="hero-image-container">
    <img
        src={images[currentImage]}
        alt="Rental Home"
        className="hero-image"
    />

    <div className="slider-dots">
    {images.map((_, index) => (
        <span
            key={index}
            className={index === currentImage ? "dot active-dot" : "dot"}
        ></span>
    ))}
</div>
</div>
          
        </div>

        <div className="hero-content">
          <h1>Find Your Dream Rental Property</h1>

          <p>
            Comfort, convenience and trust — all in one place.
          </p>

          <Link to="/register">
            <button>Get Started</button>
          </Link>
        </div>

      </div>

      <section className="features">

        <div className="feature-card">
          🏠
          <h3>Browse Properties</h3>
          <p>Explore homes posted by verified owners.</p>
        </div>

        <div className="feature-card">
          📅
          <h3>Easy Booking</h3>
          <p>Reserve rental homes quickly and securely.</p>
        </div>

        <div className="feature-card">
          💬
          <h3>Owner Chat</h3>
          <p>Connect with property owners instantly.</p>
        </div>

        <div className="feature-card">
          ⭐
          <h3>Reviews</h3>
          <p>Read and share rental experiences.</p>
        </div>

        <div className="feature-card">
          👨‍💼
          <h3>Owner Dashboard</h3>
          <p>Manage properties and bookings efficiently.</p>
        </div>

        <div className="feature-card">
          🛡️
          <h3>Admin Control</h3>
          <p>Monitor users, listings and platform activity.</p>
        </div>

      </section>
     <footer className="footer">
    <p>© 2026 HouseHunt. Find your perfect home.</p>
</footer>
    </div>
  );
}

export default Home;