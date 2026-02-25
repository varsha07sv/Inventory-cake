import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag, FaUser, FaUserShield } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        ICB Delight <span className="logo-icon"></span>
      </h2>

      <div className="nav-links">
        <Link to="/">
          <FaHome className="nav-icon" />
          <span>Home</span>
        </Link>
        <Link to="/products">
          <FaShoppingBag className="nav-icon" />
          <span>Products</span>
        </Link>
        <Link to="/login">
          <FaUser className="nav-icon" />
          <span>Login</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;