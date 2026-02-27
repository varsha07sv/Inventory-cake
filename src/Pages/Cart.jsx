import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaTrash, FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import "../styles/cart.css";



function Cart() {
  const { 
    cart, 
    removeFromCart, 
    updateQty, 
    cartSummary,
    closeCart 
  } = useCart();
  
  const navigate = useNavigate();


  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-content">
          <FaShoppingCart className="empty-cart-icon" />
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <button onClick={() => navigate("/")} className="continue-shopping-btn">
            <FaArrowLeft /> Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <FaArrowLeft /> Back
        </button>
        <h1>Your Cart ({cart.length} items)</h1>
        <button onClick={closeCart} className="close-btn">×</button>
      </div>

      <div className="cart-content">
        
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img 
                src={item.image || "https://via.placeholder.com/100"} 
                alt={item.name} 
                className="cart-item-image" 
              />
              
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">₹{item.price}</p>
                
               
                {item.flavor && <p className="item-detail">Flavor: {item.flavor}</p>}
                {item.shape && <p className="item-detail">Shape: {item.shape}</p>}
                {item.weight && <p className="item-detail">Weight: {item.weight}</p>}
                {item.message && <p className="item-message">"{item.message}"</p>}
                
                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button 
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      disabled={item.qty <= 1}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <span className="qty-value">{item.qty}</span>
                    <button 
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
              
              <div className="cart-item-total">
                ₹{item.price * item.qty}
              </div>
            </div>
          ))}
        </div>

     
        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{cartSummary.subtotal}</span>
          </div>
          
          <div className="summary-row">
            <span>Tax (5%):</span>
            <span>₹{cartSummary.tax}</span>
          </div>
          
          <div className="summary-row">
            <span>Shipping:</span>
            <span>{cartSummary.shipping === 0 ? 'Free' : `₹${cartSummary.shipping}`}</span>
          </div>
          
          <div className="summary-divider"></div>
          
          <div className="summary-row total">
            <span>Total:</span>
            <span>₹{cartSummary.grandTotal}</span>
          </div>

          <button className="checkout-btn">
            <FaWhatsapp /> Checkout via WhatsApp
          </button>
          
          <button 
            onClick={() => navigate("/")} 
            className="continue-shopping-btn"
          >
            <FaShoppingCart /> Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;