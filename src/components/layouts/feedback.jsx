import React, { useEffect, useState } from "react";
import axios from "axios";
import gif34 from '../../images/gif34.gif';


const Feedback = ()=>{

const [feeds , setFeeds] = useState([]);
const [loading , setLoading] = useState(true);

useEffect(()=>{
    const fetchFeeds = async()=>{
        try {
      const response = await axios.get('http://localhost:5000/api/feed');
      setFeeds(response.data.myfeed); 
    //   console.log(response.data.myfeed);   
        } catch (error) {
            console.error(`Error fetching feedbacks / check internet `, error);
            
        }finally{
            setLoading(false);
        }
    };
    fetchFeeds();
},[]);

  // ✅ Delete feedback function
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      try {
        await axios.delete(`http://localhost:5000/api/feed/${id}`);
        alert("Feedback deleted successfully!");
        // Update the state to remove the deleted item
        setFeeds((prevFeeds) => prevFeeds.filter((feed) => feed._id !== id));
      } catch (error) {
        console.error("Error deleting feedback:", error);
        alert("Failed to delete. Please try again.");
      }
    }
  };

    return(
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">FeedBack Panel</h1>
  
        {loading ? (
          <div className="text-center">
            <img
              src={gif34}
              alt="Loading..."
              className="mx-auto"
              width="500"
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
                  <th className="py-2 px-4 border-b">Feedback</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {feeds.length > 0 ? (
                  feeds.map((feed) => (
                    <tr key={feed._id} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">{feed.name}</td>
                      <td className="py-2 px-4 border-b">{feed.email}</td>
                      <td className="py-2 px-4 border-b">{feed.feedback}</td>
                      <td className="py-2 px-4 border-b">
                        {/* <button
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                          onClick={() => alert('Edit ' + feed._id)}
                        >
                          Edit
                        </button> */}
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded "
                          onClick={() => handleDelete(feed._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-600">
                      No feedback fetch .
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
    
export default Feedback;