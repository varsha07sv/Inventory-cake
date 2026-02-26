import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import "../../styles/categoryproduct.css";

const items = [
  { id:1, name:"Walnut Brownie",          image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format", description:"Classic fudgy brownie loaded with crunchy California walnuts." },
  { id:2, name:"Chocolate Fudge Brownie", image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format", description:"Extra-dense double-chocolate fudge brownie — for serious chocolate lovers." },
  { id:3, name:"Blondie",                 image:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format", description:"Vanilla-based brownie with a golden caramel crumb and chewy centre." }
];

function Brownie() {
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
          <span className="cp-hero-emoji">🍫</span>
          <h1 className="cp-hero-title">Brownies</h1>
          <p className="cp-hero-subtitle">Fudgy, gooey brownies baked fresh every day</p>
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
                  <span className="cp-card-tag">Brownie</span>
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

export default Brownie;
