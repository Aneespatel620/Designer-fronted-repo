

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/user');
//         setUsers(response.data.myUsers); // "myUsers" key se array nikalna hoga
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h2 className="text-3xl font-bold mb-4">All Users</h2>
//       <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
//         <ul>
//           {users.length === 0 ? (
//             <p>Loading users...</p>
//           ) : (
//             users.map((user) => (
//               <li key={user._id} className="border-b py-2">
//                 <strong>Name:</strong> {user.name} | <strong>Email:</strong> {user.email} | <strong>DOB:</strong> {user.dob} | <strong>Admin:</strong> {user.isAdmin ? 'Yes' : 'No'}
//               </li>
//             ))
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Dashboard.css";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user');
        setUsers(response.data.myUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  //  // ✅ Delete User function

  const handleDelete = async(id)=>{
    if(window.confirm(" Are You sure you want to delete this User")){
      try {
        await axios.delete(`http://localhost:5000/api/deletUser/${id}`);
        alert(' User Delet Successfully !!');
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id));

      } catch (error) {
        console.log("Error deleting users :", error);
        alert("Failed to delete . Please Try again.");
      }
    }
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Users Panel</h1>

      {loading ? (
        <div className="text-center">
          <img
            src="https://i.gifer.com/ZZ5H.gif"
            alt="Loading..."
            className="mx-auto"
            width="100"
          />
          <p className="mt-2 text-gray-600">Loading users...</p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">DOB</th>
                <th className="py-2 px-4 border-b">Admin</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">{user.dob}</td>
                    <td className="py-2 px-4 border-b">{user.isAdmin ? 'Yes' : 'No'}</td>
                    <td className="py-2 px-4 border-b">
                      {/* <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                        onClick={() => alert('Edit ' + user._id)}
                      >
                        Edit
                      </button> */}
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded "
                        onClick={() => handleDelete( user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-600">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
