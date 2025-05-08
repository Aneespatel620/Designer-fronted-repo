

import { Link, Outlet } from "react-router-dom";
import './admin.css';

const Adminpanel = () => {
  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Admin Panel </h2>
        <ul className="admin-nav">
        <li><Link to="/admin">Home</Link></li>
          <li><Link to="users">Users</Link></li>
          <li><Link to="feedback">Feedback</Link></li>
        
        </ul>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Adminpanel;
