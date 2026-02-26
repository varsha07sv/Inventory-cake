import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart, FaCheck } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";
import { useState } from "react";
import "../../styles/categoryproduct.css";

const items = [
  { id:1, name:"Chocolate Cupcakes",  image:"https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&auto=format", description:"Moist chocolate sponge topped with a swirl of rich chocolate buttercream." },
  { id:2, name:"Vanilla Cupcakes",    image:"https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500&auto=format", description:"Classic vanilla cupcake with fluffy vanilla bean buttercream frosting." },
  { id:3, name:"Red Velvet Cupcakes", image:"https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500&auto=format", description:"Beautiful red velvet cupcakes with tangy cream cheese frosting." },
  { id:4, name:"Lemon Cupcakes",      image:"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format", description:"Zesty lemon sponge with a light lemon curd buttercream topping." }
];

function Cupcakes() {
  const navigate = useNavigate();
  const { addToCart, totalItems } = useCart();
  const [added, setAdded] = useState({});

  const handleAdd = (item) => {
    addToCart({ ...item, category: "Cupcake", price: 249 });
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
          <span className="cp-hero-emoji">🧁</span>
          <h1 className="cp-hero-title">Cup Cakes</h1>
          <p className="cp-hero-subtitle">Perfectly portioned cupcakes for every mood</p>
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
                  <span className="cp-card-tag">Cupcake</span>
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

export default Cupcakes;
