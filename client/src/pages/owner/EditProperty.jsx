import "./EditProperty.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditProperty() {

  const { id } = useParams();
  const navigate = useNavigate();

  const properties =
    JSON.parse(localStorage.getItem("properties")) || [];

  const property = properties.find(
    (p) => p.id === Number(id)
  );

  const [title, setTitle] = useState(property?.title || "");
  const [location, setLocation] = useState(property?.location || "");
  const [price, setPrice] = useState(property?.price || "");
  const [type, setType] = useState(property?.type || "");
  const [description, setDescription] = useState(
    property?.description || ""
  );

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedProperties = properties.map((p) =>
      p.id === Number(id)
        ? {
            ...p,
            title,
            location,
            price,
            type,
            description,
          }
        : p
    );

    localStorage.setItem(
      "properties",
      JSON.stringify(updatedProperties)
    );

    alert("Property Updated Successfully");

    navigate("/my-properties");
  };

  return (
    <div className="edit-property-container">

      <div className="edit-property-card">

        <h1>Edit Property</h1>

        <form onSubmit={handleUpdate}>

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            type="text"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
          />

          <input
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />

          <input
            type="text"
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
          />

          <textarea
            rows="5"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <button type="submit">
            Update Property
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProperty;