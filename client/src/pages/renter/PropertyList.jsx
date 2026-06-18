import property1 from "../../images/property1.jpg";
import property2 from "../../images/property2.jpg";
import property3 from "../../images/property3.jpg";
import property4 from "../../images/property4.jpg";
import property5 from "../../images/property5.jpg";
import demoProperty from "../../images/demoProperty.jpg";
import "./PropertyList.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function PropertyList() {

    const defaultProperties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Kondapur, Hyderabad",
    type: "3 BHK Villa",
    rent: "₹50,000/month",
    image: property1,
    ownerEmail: "ramesh@gmail.com",
  },

  {
    id: 2,
    title: "Modern Apartment",
    location: "Hitech City, Hyderabad",
    type: "2 BHK Apartment",
    rent: "₹32,000/month",
    image: property2,
    ownerEmail: "ramesh@gmail.com",
  },

  {
    id: 3,
    title: "Cozy Independent House",
    location: "Miyapur, Hyderabad",
    type: "1 BHK Independent House",
    rent: "₹15,000/month",
    image: property3,
    ownerEmail: "anjali@gmail.com",
  },

  {
    id: 4,
    title: "Family Independent House",
    location: "Gachibowli, Hyderabad",
    type: "2 BHK Independent House",
    rent: "₹28,000/month",
    image: property4,
    ownerEmail: "srinivas@gmail.com",
  },

  {
    id: 5,
    title: "Premium Independent House",
    location: "Madhapur, Hyderabad",
    type: "2 BHK Independent House",
    rent: "₹20,000/month",
    image: property5,
    ownerEmail: "sridhar@gmail.com",
  },
];
const addedProperties =
  JSON.parse(localStorage.getItem("properties")) || [];

const properties = [
  ...defaultProperties,

  ...addedProperties.map((property) => ({
    ...property,
    image: demoProperty,
    rent: `₹${property.price}/month`,
    type: "Owner Added Property",
  })),
];
    const [searchTerm, setSearchTerm] = useState("");
const [locationFilter, setLocationFilter] = useState("");
const [typeFilter, setTypeFilter] = useState("");
const [rentFilter, setRentFilter] = useState("");
const filteredProperties = properties.filter((property) => {

    const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
        !locationFilter ||
        property.location.includes(locationFilter);

    const matchesType =
        !typeFilter ||
        property.type.includes(typeFilter);

    const rentValue = parseInt(
        property.rent.replace(/[₹,]/g, "")
    );

    const matchesRent =
        !rentFilter ||
        (rentFilter === "low" && rentValue < 20000) ||
        (rentFilter === "medium" &&
            rentValue >= 20000 &&
            rentValue <= 40000) ||
        (rentFilter === "high" && rentValue > 40000);

    return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesRent
    );
});

   return (
    <div className="property-list-container">
        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  }}
>
  <h1 className="property-list-title">
    Available Properties
  </h1>

  <Link to="/my-bookings">
    <button className="details-btn">
      My Bookings
    </button>
  </Link>
</div>
        <div className="filters-container">

    <input
        type="text"
        placeholder="🔍 Search properties..."
        value={searchTerm}
        onChange={(e) =>
            setSearchTerm(e.target.value)
        }
        className="search-input"
    />

    <select
        value={locationFilter}
        onChange={(e) =>
            setLocationFilter(e.target.value)
        }
        className="filter-select"
    >
        <option value="">All Locations</option>
        <option value="Kondapur">Kondapur</option>
        <option value="Hitech City">Hitech City</option>
        <option value="Miyapur">Miyapur</option>
        <option value="Gachibowli">Gachibowli</option>
        <option value="Madhapur">Madhapur</option>
    </select>

    <select
        value={typeFilter}
        onChange={(e) =>
            setTypeFilter(e.target.value)
        }
        className="filter-select"
    >
        <option value="">All Types</option>
        <option value="Villa">Villa</option>
        <option value="Apartment">Apartment</option>
        <option value="Independent House">
            Independent House
        </option>
    </select>

    <select
        value={rentFilter}
        onChange={(e) =>
            setRentFilter(e.target.value)
        }
        className="filter-select"
    >
        <option value="">All Budgets</option>
        <option value="low">
            Below ₹20,000
        </option>
        <option value="medium">
            ₹20,000 - ₹40,000
        </option>
        <option value="high">
            Above ₹40,000
        </option>
    </select>
<button
  className="reset-btn"
  onClick={() => {
    setSearchTerm("");
    setLocationFilter("");
    setTypeFilter("");
    setRentFilter("");
  }}
>
  Reset Filters
</button>
</div>

        <div className="properties-grid">
            {filteredProperties.map((property) => (
                <div className="property-card" key={property.id}>

                    <img
                        src={property.image}
                        alt={property.name}
                        className="property-image"
                    />

                    <div className="property-info">

                        <h2 className="property-name">
                            {property.title}
                        </h2>

                        <p>📍 {property.location}</p>

                        <p>
                            🏠 {property.type}
                        </p>

                        <p>
                            💰 {property.rent}
                        </p>

                        <Link to={`/property-details/${property.id}`}>
    <button className="details-btn">
        View Details
    </button>
</Link>

                    </div>

                </div>
            ))}
        </div>
    </div>
);
}

export default PropertyList;