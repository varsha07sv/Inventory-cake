import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart, FaCheck } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";
import { useState } from "react";
import "../../styles/categoryproduct.css";

const items = [
  { id:1, name:"Dark Chocolate",      image:"https://images.unsplash.com/photo-1606312619071-d5b523a1fdbd?w=500&auto=format", description:"Intense 70% single-origin dark chocolate with a rich, velvety finish." },
  { id:2, name:"Milk Chocolate",      image:"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&auto=format", description:"Smooth, creamy milk chocolate that melts perfectly on the tongue." },
  { id:3, name:"Assorted Chocolates", image:"https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&auto=format", description:"A curated gift box of dark, milk and white artisan chocolate bonbons." }
];

function Chocolates() {
  const navigate = useNavigate();
  const { addToCart, totalItems } = useCart();
  const [added, setAdded] = useState({});

  const handleAdd = (item) => {
    addToCart({ ...item, category: "Chocolate", price: 299 });
    setAdded((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [item.id]: false })), 1500);
  };

  return (
    <div className="cp-page">

      {/*── Top bar: back + cart only── */}
      <div className="cp-topbar">
        <button className="cp-back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>
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
                  <span className="cp-card-tag">Chocolate</span>
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

export default Chocolates;
