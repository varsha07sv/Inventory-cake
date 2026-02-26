import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart, FaCheck } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";
import { useState } from "react";
import "../../styles/categoryproduct.css";

const items = [
  { id:1, name:"Chocolate Cake",    image:"https://images.unsplash.com/photo-1606893995103-a431bce9c219?w=500&auto=format", description:"Decadent layers of rich dark chocolate sponge with silky ganache frosting." },
  { id:2, name:"Black Forest Cake", image:"https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&auto=format", description:"Classic German-inspired cake with cream, cherries and chocolate shavings." },
  { id:3, name:"Mango Cake",        image:"https://images.unsplash.com/photo-1627308595171-d1b5d671a41f?w=500&auto=format", description:"Light sponge layered with fresh Alphonso mango cream." },
  { id:4, name:"Red Velvet Cake",   image:"https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=500&auto=format", description:"Velvety red sponge paired with smooth cream cheese frosting." },
  { id:5, name:"Pineapple Cake",    image:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&auto=format", description:"Tropical pineapple-flavoured sponge with whipped cream." },
  { id:6, name:"Butterscotch Cake", image:"https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&auto=format", description:"Buttery caramel sponge topped with crunchy butterscotch praline." }
];

function Cakes() {
  const navigate = useNavigate();
  const { addToCart, totalItems } = useCart();
  const [added, setAdded] = useState({});

  const handleAdd = (item) => {
    addToCart({ ...item, category: "Cake", price: 699 });
    setAdded((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [item.id]: false })), 1500);
  };

  return (
    <div className="cp-page">

      {/* ── Top bar: back + cart only ── */}
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
                  <span className="cp-card-tag">Cake</span>
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

export default Cakes;