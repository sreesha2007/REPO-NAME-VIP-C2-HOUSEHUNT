import "./AddProperty.css";
import { useState } from "react";

function AddProperty() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProperty = {
      id: Date.now(),
      title,
      location,
      price,
      type,
      description,
      image: "demoProperty",
    };

    const existingProperties =
      JSON.parse(localStorage.getItem("properties")) || [];

    existingProperties.push(newProperty);

    localStorage.setItem(
      "properties",
      JSON.stringify(existingProperties)
    );

    alert("Property Added Successfully");

    setTitle("");
    setLocation("");
    setPrice("");
    setType("");
    setDescription("");
  };

  return (
    <div className="add-property-container">
      <div className="property-form-card">
        <h1>Add New Property</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Property Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            type="number"
            placeholder="Rent Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            placeholder="Property Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />

          <textarea
            placeholder="Property Description"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button type="submit">
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;