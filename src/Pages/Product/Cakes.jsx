import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import "../../styles/categoryproduct.css";

const items = [
  { id:1, name:"Chocolate Cake",     image:"https://images.unsplash.com/photo-1606893995103-a431bce9c219?w=500&auto=format", description:"Decadent layers of rich dark chocolate sponge with silky ganache frosting." },
  { id:2, name:"Black Forest Cake",  image:"https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&auto=format", description:"Classic German-inspired cake with cream, cherries and chocolate shavings." },
  { id:3, name:"Mango Cake",         image:"https://images.unsplash.com/photo-1627308595171-d1b5d671a41f?w=500&auto=format", description:"Light sponge layered with fresh Alphonso mango cream — a tropical delight." },
  { id:4, name:"Red Velvet Cake",    image:"https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=500&auto=format", description:"Velvety red sponge paired with smooth cream cheese frosting." },
  { id:5, name:"Pineapple Cake",     image:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&auto=format", description:"Tropical pineapple-flavoured sponge with whipped cream and pineapple chunks." },
  { id:6, name:"Butterscotch Cake",  image:"https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&auto=format", description:"Buttery caramel sponge topped with crunchy butterscotch praline pieces." }
];

function Cakes() {
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
          <span className="cp-hero-emoji">🎂</span>
          <h1 className="cp-hero-title">Our Cakes</h1>
          <p className="cp-hero-subtitle">Rich, moist cakes for every special occasion</p>
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
                  <span className="cp-card-tag">Cake</span>
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

export default Cakes;
