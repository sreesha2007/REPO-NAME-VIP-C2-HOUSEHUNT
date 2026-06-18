import "./OwnerDashboard.css";
import { useNavigate } from "react-router-dom";

function OwnerDashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
  localStorage.removeItem("currentUser");
  alert("Logged Out Successfully");
  navigate("/login");
};
  return (
    <div className="owner-dashboard">
      <div className="dashboard-header">
  <h1>Owner Dashboard</h1>

  <button
    className="logout-btn"
    onClick={handleLogout}
  >
    Logout
  </button>
</div>
<p className="welcome-text">
  Manage your properties and bookings efficiently
</p>

      <div className="dashboard-cards">
        <div className="card">
          <h2>Add Property</h2>
          <p>Add new houses, flats or rooms.</p>
          <button onClick={() => navigate("/add-property")}>
  Add Property
</button>
        </div>

        <div className="card">
          <h2>My Properties</h2>
          <p>View all listed properties.</p>
          <button onClick={() => navigate("/my-properties")}>
  View Properties
</button>
        </div>

        <div className="card">
          <h2>Booking Requests</h2>
          <p>Check renter booking requests.</p>
          <button onClick={() => navigate("/owner-bookings")}>
  View Requests
</button>
        </div>

        <div className="card">
          <h2>Profile</h2>
          <p>Manage owner profile.</p>
          <button>Open Profile</button>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;