import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import "../../styles/categoryproduct.css";

const items = [
  { id:1, name:"Dark Chocolate",      image:"https://images.unsplash.com/photo-1606312619071-d5b523a1fdbd?w=500&auto=format", description:"Intense 70% single-origin dark chocolate with a rich, velvety finish." },
  { id:2, name:"Milk Chocolate",      image:"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&auto=format", description:"Smooth, creamy milk chocolate that melts perfectly on the tongue." },
  { id:3, name:"Assorted Chocolates", image:"https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&auto=format", description:"A curated gift box of dark, milk and white artisan chocolate bonbons." }
];

function Chocolates() {
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
          <span className="cp-hero-emoji">🍬</span>
          <h1 className="cp-hero-title">Chocolates</h1>
          <p className="cp-hero-subtitle">Handcrafted artisan chocolates made in-house</p>
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
                  <span className="cp-card-tag">Chocolate</span>
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

export default Chocolates;
