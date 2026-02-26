import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import "../../styles/categoryproduct.css";

const items = [
  { id:1, name:"Chocolate Chip Cookies", image:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format", description:"Buttery golden cookies packed with premium chocolate chips." },
  { id:2, name:"Oatmeal Cookies",        image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format", description:"Wholesome oat cookies with plump raisins and a hint of cinnamon." },
  { id:3, name:"Sugar Cookies",          image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format", description:"Melt-in-your-mouth buttery sugar cookies, lightly dusted with icing sugar." }
];

function Cookies() {
  const navigate = useNavigate();

  const orderOnWhatsApp = (itemName) => {
    const msg = encodeURIComponent(`Hi! I'd like to order: ${itemName} from ICB Delights.`);
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
  };

  return (
    <div className="cp-page">
      <div className="cp-hero">
        <div className="cp-hero-inner">
          <button className="cp-back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
          </button>
          <span className="cp-hero-emoji">🍪</span>
          <h1 className="cp-hero-title">Cookies</h1>
          <p className="cp-hero-subtitle">Freshly baked cookies — crispy outside, chewy inside</p>
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
                  <span>Order Now ➜</span>
                </div>
              </div>
              <div className="cp-card-body">
                <h3 className="cp-card-title">{item.name}</h3>
                <p className="cp-card-desc">{item.description}</p>
                <div className="cp-card-footer">
                  <span className="cp-card-tag">Cookie</span>
                  <button
                    className="cp-order-btn"
                    onClick={() => orderOnWhatsApp(item.name)}
                  >
                    <FaWhatsapp /> Order
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

export default Cookies;
