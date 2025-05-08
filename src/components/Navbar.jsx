
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./Navbar.css"; // Optional for styling
import tie from '../images/Tieremove.png';
import { useAuth } from "../store/store_auth.jsx";
const Navbar = () => {
  const location = useLocation(); // Get current path
    const {logout , user } = useAuth();

  return (
    <header>
      <div className="navbar">
        <div className="logobrand">
          <img src={tie} alt="Project" />
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
            </li>
            <li>
              <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
            </li>
            <li>
              <Link to="/footer" className={location.pathname === "/footer" ? "active" : ""}>Connect</Link>
            </li>
              {/* ✅ Show Sign In if not logged in, else Logout */}
              {user ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/login"><button>Sign In</button></Link>
            )}
            
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
