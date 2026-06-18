import "./MyProperties.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import image1 from "../../images/property1.jpg";
import image2 from "../../images/property2.jpg";
import demoProperty from "../../images/demoProperty.jpg";

function MyProperties() {
  const defaultProperties = [
    {
      id: 1,
      title: "3BHK Villa",
      location: "Kondapur",
      price: 50000,
      description: "Luxury Villa",
      image: image1,
    },
    {
      id: 2,
      title: "2BHK Apartment",
      location: "Hitech City",
      price: 32000,
      description: "Modern Apartment",
      image: image2,
    },
  ];

  const [properties, setProperties] = useState([
    ...defaultProperties,
    ...(JSON.parse(localStorage.getItem("properties")) || []),
  ]);

  const deleteProperty = (id) => {
    const updatedProperties = properties.filter(
      (property) => property.id !== id
    );

    setProperties(updatedProperties);

    localStorage.setItem(
      "properties",
      JSON.stringify(
        updatedProperties.filter((property) => property.id > 2)
      )
    );

    alert("Property Deleted Successfully");
  };
  const editProperty = (id) => {

  const updatedProperties = properties.map((property) => {

    if (property.id === id) {

      const newTitle = prompt(
        "Enter New Property Title",
        property.title
      );

      return {
        ...property,
        title: newTitle || property.title,
      };
    }

    return property;
  });

  setProperties(updatedProperties);

  localStorage.setItem(
    "properties",
    JSON.stringify(
      updatedProperties.filter(
        (property) => property.id > 2
      )
    )
  );

  alert("Property Updated Successfully");
};

  return (
    <div className="my-properties-page">
      <h1>My Properties</h1>

      <div className="property-grid">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <img
              src={
                property.image === "demoProperty"
                  ? demoProperty
                  : property.image
              }
              alt={property.title}
              className="property-image"
            />

            <h2>{property.title}</h2>

            <p>📍 {property.location}</p>

            <p>💰 ₹{property.price}/month</p>

            <p>{property.description}</p>

            <div className="buttons">
              <Link to={`/edit-property/${property.id}`}>
  <button>Edit</button>
</Link>

              <button
                className="delete-btn"
                onClick={() => deleteProperty(property.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProperties;