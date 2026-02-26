import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart, FaCheck } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";
import { useState } from "react";
import "../../styles/categoryproduct.css";

const items = [
  { id:1, name:"Chocolate Bento",      image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format", description:"Mini chocolate sponge with creamy ganache in a charming gift box." },
  { id:2, name:"Strawberry Bento",     image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format", description:"Fresh strawberry-flavoured mini cake with a sweet fruity frosting." },
  { id:3, name:"Custom Message Bento", image:"https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&auto=format", description:"Personalized bento cake with your own message — perfect for gifting." }
];

function Bentocakes() {
  const navigate = useNavigate();
  const { addToCart, totalItems } = useCart();
  const [added, setAdded] = useState({});

  const handleAdd = (item) => {
    addToCart({ ...item, category: "Bento", price: 349 });
    setAdded((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [item.id]: false })), 1500);
  };

  return (
    <div className="cp-page">
      <div className="cp-hero">
        <div className="cp-hero-inner">
          <div className="cp-hero-top-row">
            <button className="cp-back-btn" onClick={() => navigate(-1)}>
              <FaArrowLeft /> Back
            </button>
            <button className="cp-cart-nav-btn" onClick={() => navigate("/cart")}>
              <FaShoppingCart />
              {totalItems > 0 && <span className="cp-cart-nav-count">{totalItems}</span>}
              Cart
            </button>
          </div>
          <span className="cp-hero-emoji">🍱</span>
          <h1 className="cp-hero-title">Bento Cakes</h1>
          <p className="cp-hero-subtitle">Adorable single-serve mini cakes packed in a cute box</p>
        </div>
      </div>

      <div className="cp-content">
        <p className="cp-section-label">Our Selection</p>
        <h2 className="cp-section-title">Choose Your Favourite</h2>

        <div className="cp-grid">
          {items.map((item) => (
            <div key={item.id} className="cp-card">
              <div className="cp-card-img-wrap">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="cp-card-overlay">
                  <span>View Details ➜</span>
                </div>
              </div>
              <div className="cp-card-body">
                <h3 className="cp-card-title">{item.name}</h3>
                <p className="cp-card-desc">{item.description}</p>
                <div className="cp-card-footer">
                  <span className="cp-card-tag">Bento</span>
                  <button
                    className={`cp-cart-btn ${added[item.id] ? "cp-cart-btn-added" : ""}`}
                    onClick={() => handleAdd(item)}
                  >
                    {added[item.id] ? (
                      <><FaCheck /> Added!</>
                    ) : (
                      <><FaShoppingCart /> Add to Cart</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bentocakes;
