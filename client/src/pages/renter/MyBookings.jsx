import "./MyBookings.css";

function MyBookings() {
  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const currentUser =
    localStorage.getItem("currentUser");

  const myBookings = bookings.filter(
    (booking) => booking.email === currentUser
  );

  return (
    <div className="my-bookings-container">
      <h1 className="my-bookings-title">
        My Bookings
      </h1>

      <div className="bookings-grid">
        {myBookings.length === 0 ? (
          <h2
  style={{
    color: "yellow",
    textAlign: "center",
    marginTop: "100px",
    fontSize: "40px",
    fontWeight: "bold",
  }}
>
  🏠 No Bookings Yet
</h2>
        ) : (
          myBookings.map((booking, index) => (
            <div
              key={index}
              className="booking-card"
            >
              <h3>{booking.propertyName}</h3>

              <p>
                <strong>Owner:</strong>{" "}
                {booking.ownerEmail}
              </p>

              <p>
                <strong>Name:</strong>{" "}
                {booking.name}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {booking.email}
              </p>

              <p>
                <strong>Move In Date:</strong>{" "}
                {booking.moveInDate}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`status-${booking.status.toLowerCase()}`}
                >
                  {booking.status}
                </span>
              </p>
              {booking.status === "Accepted" && (
  <p className="accepted-msg">
    Your booking request has been accepted. You may come and visit the house.
  </p>
)}

{booking.status === "Rejected" && (
  <p className="rejected-msg">
    This property is currently unavailable or has been booked by another renter.
  </p>
)}

{booking.status === "Pending" && (
  <p className="pending-msg">
    Your request is awaiting for owner approval.
  </p>
)}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyBookings;