import "./AdminDashboard.css";

function PropertiesManagement() {

  const properties = [
    {
      name: "3BHK Villa",
      location: "Kondapur",
      rent: "₹50,000"
    },
    {
      name: "2BHK Apartment",
      location: "Hitech City",
      rent: "₹32,000"
    },
    {
      name: "Independent House",
      location: "Miyapur",
      rent: "₹15,000"
    },
    {
      name: "Family House",
      location: "Gachibowli",
      rent: "₹28,000"
    }
  ];

  return (
    <div className="management-page">
      <h1>Properties Management</h1>

      <table className="management-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Location</th>
            <th>Rent</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((property, index) => (
            <tr key={index}>
              <td>{property.name}</td>
              <td>{property.location}</td>
              <td>{property.rent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertiesManagement;