import { Link } from "react-router-dom";
import { FaHome, FaUser, FaPhone } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { GiCakeSlice } from "react-icons/gi";
import { useCart } from "../Context/CartContext";
import "../styles/Navbar.css";

function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar">
      <h2 className="logo">
        ICB Delights <span className="logo-icon"></span>
      </h2>

      <div className="nav-links">
        <Link to="/">
          <FaHome className="nav-icon" />
          <span>Home</span>
        </Link>

        <Link to="/make-your-own" className="make-cake-link">
          <GiCakeSlice className="nav-icon make-cake-icon" />
          <span>Make Your Own</span>
        </Link>

        <Link to="/cart" className="cart-link">
          <BsCart3 className="nav-icon cart-icon" />
          <span>Cart</span>
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>

        <Link to="/contact">
          <FaPhone className="nav-icon" />
          <span>Contact Us</span>
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