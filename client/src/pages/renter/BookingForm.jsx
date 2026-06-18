import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    moveInDate: "",
    message: "",
  });
  const location = useLocation();

const propertyName =
  location.state?.propertyName || "";

const ownerEmail =
  location.state?.ownerEmail || "";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(propertyName);
console.log(ownerEmail);

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];


    existingBookings.push({
  ...formData,
  propertyName,
  ownerEmail,
  status: "Pending",
});

    localStorage.setItem(
      "bookings",
      JSON.stringify(existingBookings)
    );

    alert("Booking Request Sent Successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      moveInDate: "",
      message: "",
    });
  };

  return (
    <div className="booking-container">
      <div className="booking-card">

        <h1>Booking Request</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="moveInDate"
            value={formData.moveInDate}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message to Owner"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">
            Submit Request
          </button>

        </form>

      </div>
    </div>
  );
}

export default BookingForm;