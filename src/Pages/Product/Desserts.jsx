import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import "../../styles/categoryproduct.css";

const items = [
  { id:1, name:"Tiramisu",    image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format", description:"Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream." },
  { id:2, name:"Cheesecake",  image:"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format", description:"Creamy New York-style cheesecake on a buttery biscuit base." },
  { id:3, name:"Mousse",      image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format", description:"Light and airy dark chocolate mousse with a hint of orange zest." }
];

function Desserts() {
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
          <span className="cp-hero-emoji">🍮</span>
          <h1 className="cp-hero-title">Desserts</h1>
          <p className="cp-hero-subtitle">Premium assorted desserts made with love</p>
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
                  <span className="cp-card-tag">Dessert</span>
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

export default Desserts;
