


import { useEffect, useState } from "react";
import { useAuth } from "../../store/store_auth";
import loadingGif from "../../assets/gif34.gif"; // Make sure gif is present

const Users = () => {
  const { AuthorizationToken } = useAuth();
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  const getAllUsersData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/see", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      const data = await response.json();
      console.log("Fetched data =>", data);

      if (data && Array.isArray(data.msg)) {
        setAllUsers(data.msg);

        // 🔁 If no users found, try again ONCE after short delay
        if (data.msg.length === 0 && retryCount < 1) {
          console.log("No users found, retrying...");
          setRetryCount((prev) => prev + 1);

          // Retry after 2 seconds
          setTimeout(() => {
            getAllUsersData();
          }, 2000);
        }
      }
    } catch (error) {
      console.log("Error fetching users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <div className="container">
      <h1>Users Panel</h1>

      {loading ? (
        <div style={{ textAlign: "center" }}>
          <img src={loadingGif} alt="Loading..." width="100" />
          <p>Loading users...</p>
        </div>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.length > 0 ? (
              allUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                  <td>
                    <button onClick={() => alert("Edit " + user._id)}>Edit</button>
                    <button onClick={() => alert("Delete " + user._id)} style={{ marginLeft: "10px" }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
