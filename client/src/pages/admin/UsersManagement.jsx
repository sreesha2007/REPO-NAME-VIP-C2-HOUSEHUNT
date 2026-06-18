import "./AdminDashboard.css";

function UsersManagement() {

  const users = [
    {
      name: "Ramesh",
      email: "ramesh@gmail.com",
      role: "Owner"
    },
    {
      name: "Anjali",
      email: "anjali@gmail.com",
      role: "Owner"
    },
    {
      name: "Srinivas",
      email: "srinivas@gmail.com",
      role: "Owner"
    },
    {
      name: "Sridhar",
      email: "sridhar@gmail.com",
      role: "Owner"
    }
  ];

  return (
    <div className="management-page">
      <h1>Users Management</h1>

      <table className="management-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersManagement;