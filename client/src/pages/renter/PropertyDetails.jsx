
import { useParams } from "react-router-dom";
import "./PropertyDetails.css";
import { useNavigate } from "react-router-dom";

function PropertyDetails() {
   const navigate = useNavigate();
  const properties = {
    1: {
      title: "Luxury Villa",
      location: "Kondapur, Hyderabad",
      address: "Plot No. 45, Botanical Garden Road, Kondapur, Hyderabad - 500084",
      type: "3 BHK Villa",
      rent: "₹50,000/month",
      bedrooms: 3,
      bathrooms: 3,
      parking: "Available",
      furnishing: "Semi-Furnished",
      description:
        "Spacious villa located in Kondapur with modern interiors and peaceful surroundings.",
        owner: "Ramesh",
      contact: "9876543210", 
      ownerEmail: "ramesh@gmail.com",
    },

    2: {
      title: "Modern Apartment",
      location: "Hitech City, Hyderabad",
      address: "Tower B, Cyber Heights, Hitech City, Hyderabad - 500081",
      type: "2 BHK Apartment",
      rent: "₹32,000/month",
      bedrooms: 2,
      bathrooms: 2,
      parking: "Available",
      furnishing: "Fully Furnished",
      description:
        "Modern apartment close to IT hubs with excellent connectivity and amenities.",
      owner: "Ramesh",
      contact: "9876543210",  
      ownerEmail: "ramesh@gmail.com",
    },

    3: {
      title: "Cozy Independent House",
      location: "Miyapur, Hyderabad",
      address: "Street No. 3, Miyapur Main Road, Hyderabad - 500049",
      type: "1 BHK Independent House",
      rent: "₹15,000/month",
      bedrooms: 1,
      bathrooms: 1,
      parking: "Available",
      furnishing: "Unfurnished",
      description:
        "Comfortable independent house suitable for bachelors or small families.",
        owner: "Anjali",
      contact: "9483743210", 
      ownerEmail: "anjali@gmail.com",
    },

    4: {
      title: "Family Independent House",
      location: "Gachibowli, Hyderabad",
      address: "Near DLF Junction, Gachibowli, Hyderabad - 500032",
      type: "2 BHK Independent House",
      rent: "₹28,000/month",
      bedrooms: 2,
      bathrooms: 2,
      parking: "Available",
      furnishing: "Semi-Furnished",
      description:
        "Family-friendly house located near offices, schools, and shopping areas.",
        owner: "Srinivas",
      contact: "9009543210", 
      ownerEmail: "srinivas@gmail.com",
    },

    5: {
      title: "Premium Independent House",
      location: "Madhapur, Hyderabad",
      address: "Ayyappa Society Road, Madhapur, Hyderabad - 500081",
      type: "2 BHK Independent House",
      rent: "₹20,000/month",
      bedrooms: 2,
      bathrooms: 2,
      parking: "Available",
      furnishing: "Fully Furnished",
      description:
        "Premium independent house offering comfort and convenience in Madhapur.",
        owner: "Sridhar",
      contact: "7388213467", 
      ownerEmail: "sridhar@gmail.com",
    },
  };

  const { id } = useParams();
  const property = properties[id];

  if (!property) {
    return <h2>Property not found</h2>;
  }
  const handleBooking = () => {
  const renterName = prompt("Enter Your Name");

  if (!renterName) return;

  const booking = {
    renterName,
    propertyName: property.title,
    location: property.location,
    rent: property.rent,
  };

  const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  existingBookings.push(booking);

  localStorage.setItem(
    "bookings",
    JSON.stringify(existingBookings)
  );

  alert("Booking Request Sent Successfully!");
};
  return (
    <div className="details-container">
      <h1>{property.title}</h1>

      <p className="detail-item">
        📍 <strong>Location:</strong> {property.location}
      </p>

      <p className="detail-item">
        🏡 <strong>Address:</strong> {property.address}
      </p>

      <p className="detail-item">
        🏠 <strong>Type:</strong> {property.type}
      </p>

      <p className="detail-item">
        💰 <strong>Rent:</strong> {property.rent}
      </p>

      <p className="detail-item">
        🛏 <strong>Bedrooms:</strong> {property.bedrooms}
      </p>

      <p className="detail-item">
        🚿 <strong>Bathrooms:</strong> {property.bathrooms}
      </p>

      <p className="detail-item">
        🚗 <strong>Parking:</strong> {property.parking}
      </p>

      <p className="detail-item">
        🛋 <strong>Furnishing:</strong> {property.furnishing}
      </p>
      <h3>Owner Information</h3>

<p className="detail-item">
    👤 Owner Name: {property.owner}
</p>

<p className="detail-item">
    📞 Contact: {property.contact}
</p>


      <div className="description">
        <strong>Description:</strong>
        <p>{property.description}</p>
      </div>

      <div className="button-group">
        <button
  className="book-btn"
  onClick={() =>
    navigate("/booking-form", {
      state: {
        propertyName: property.title,
        ownerEmail: property.ownerEmail,
      },
    })
  }
>
  Book Now
</button>

        <button className="chat-btn">
          Chat with Owner
        </button>
      </div>
    </div>
  );
}

export default PropertyDetails;