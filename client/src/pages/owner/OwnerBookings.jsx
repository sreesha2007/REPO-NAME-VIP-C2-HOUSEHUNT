import "./OwnerBookings.css";

function OwnerBookings() {

  const currentOwner =
  localStorage.getItem("currentUser");

const requests = (
  JSON.parse(localStorage.getItem("bookings")) || []
).filter(
  (booking) =>
    booking.ownerEmail === currentOwner
);

  const updateStatus = (email, newStatus) => {

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const updatedBookings = bookings.map((booking) =>
    booking.email === email
      ? { ...booking, status: newStatus }
      : booking
  );

  localStorage.setItem(
    "bookings",
    JSON.stringify(updatedBookings)
  );

  window.location.reload();
};
  

  return (
    <div className="owner-bookings">

      <h1>Booking Requests</h1>

      <div className="booking-container">

        {requests.length === 0 ? (

          <p style={{ color: "white" }}>
            No Booking Requests Yet
          </p>

        ) : (

          requests.map((req, index) => (

            <div
              key={index}
              className="booking-card"
            >

              <h2>Booking #{index + 1}</h2>
              <p>
  <strong>Property:</strong> {req.propertyName}
</p>

              <p>
                <strong>Name:</strong> {req.name}
              </p>

              <p>
                <strong>Phone:</strong> {req.phone}
              </p>

              <p>
                <strong>Email:</strong> {req.email}
              </p>

              <p>
                <strong>Move In Date:</strong> {req.moveInDate}
              </p>

              <p>
                <strong>Message:</strong> {req.message}
              </p>

              <p>
                <strong>Status:</strong> {req.status}
              </p>

              <div className="booking-buttons">

                <button
                  className="approve-btn"
                  onClick={() =>
                    updateStatus(
                      req.email,
                      "Accepted"
                    )
                  }
                >
                  Accept
                </button>

                <button
                  className="reject-btn"
                  onClick={() =>
                    updateStatus(
                      req.email,
                      "Rejected"
                    )
                  }
                >
                  Reject
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default OwnerBookings;