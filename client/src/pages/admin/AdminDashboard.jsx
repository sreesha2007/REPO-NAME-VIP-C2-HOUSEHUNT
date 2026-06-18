import "./AdminDashboard.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate=useNavigate();
const handleLogout = () => {
  localStorage.removeItem("currentUser");
  alert("Logged Out Successfully");
  navigate("/login");
};
  const properties =
    JSON.parse(localStorage.getItem("properties")) || [];

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];
    

  return (
    <div className="admin-dashboard">

  <div className="dashboard-header">
    <h1>Admin Dashboard</h1>

    <button
      className="logout-btn"
      onClick={handleLogout}
    >
      Logout
    </button>
  </div>

      <div className="stats-container">

        <div className="stat-card">
          <h2>{properties.length + 2}</h2>
          <p>Total Properties</p>
        </div>

        <div className="stat-card">
          <h2>{users.length}</h2>
          <p>Total Users</p>
        </div>

        <div className="stat-card">
          <h2>{bookings.length}</h2>
          <p>Total Bookings</p>

        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>Total Owners</p>
        </div>

      </div>

      <div className="dashboard-sections">

        <div className="dashboard-card">
          <h2>Recent Activities</h2>

          <ul>
            <li>✅ New Property Added</li>
            <li>✅ User Registered</li>
            <li>✅ Booking Confirmed</li>
            <li>✅ Property Deleted</li>
          </ul>
        </div>

        <div className="dashboard-card">
          <h2>Quick Actions</h2>

          <Link to="/owner-dashboard">
  <button>Add Property</button>
</Link>

<Link to="/users-management">
  <button>View Users</button>
</Link>

<button>View Bookings</button>

<Link to="/properties-management">
  <button>Manage Properties</button>
</Link>
        </div>

        <div className="dashboard-card">
          <h2>System Status</h2>

          <p>🟢 Server Running</p>
          <p>🟢 Database Connected</p>
          <p>🟢 Application Active</p>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;