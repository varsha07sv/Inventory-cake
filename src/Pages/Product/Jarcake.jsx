import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart, FaCheck } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";
import { useState } from "react";
import "../../styles/categoryproduct.css";

const items = [
  { id:1, name:"Chocolate Jar Cake",  image:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format", description:"Layers of chocolate sponge, ganache and cream in a portable jar." },
  { id:2, name:"Strawberry Jar Cake", image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format", description:"Fresh strawberry puree and whipped cream layered with vanilla sponge." },
  { id:3, name:"Oreo Jar Cake",       image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format", description:"Crushed Oreo cookies, cream cheese and chocolate ganache in a jar." }
];

function Jarcake() {
  const navigate = useNavigate();
  const { addToCart, totalItems } = useCart();
  const [added, setAdded] = useState({});

  const handleAdd = (item) => {
    addToCart({ ...item, category: "Jar Cake", price: 199 });
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
          <span className="cp-hero-emoji">🫙</span>
          <h1 className="cp-hero-title">Jar Cakes</h1>
          <p className="cp-hero-subtitle">Layered cake delights served in cute glass jars</p>
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
                  <span className="cp-card-tag">Jar Cake</span>
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

export default Jarcake;
