import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { FaArrowLeft, FaTrash, FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import "../styles/cart.css";

function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQty, clearCart, totalItems, totalPrice } = useCart();

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    const lines = cart
      .map((i) => `• ${i.name} x${i.qty} — ₹${i.price * i.qty}`)
      .join("\n");
    const msg = encodeURIComponent(
      `Hi! I'd like to place an order from ICB Delights:\n\n${lines}\n\nTotal: ₹${totalPrice}`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
  };

  return (
    <div className="cart-page">
      {/* Header */}
      <div className="cart-header">
        <div className="cart-header-inner">
          <button className="cart-back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Continue Shopping
          </button>
          <div className="cart-header-title">
            <FaShoppingCart />
            <h1>Your Cart</h1>
            {totalItems > 0 && <span className="cart-count-badge">{totalItems}</span>}
          </div>
        </div>
      </div>

      <div className="cart-body">
        {cart.length === 0 ? (
          /* Empty state */
          <div className="cart-empty">
            <span className="cart-empty-icon">🛒</span>
            <h2>Your cart is empty</h2>
            <p>Add some delicious items from our menu!</p>
            <button className="cart-shop-btn" onClick={() => navigate("/")}>
              Browse Products
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Items list */}
            <div className="cart-items">
              <div className="cart-items-header">
                <h2>Order Items ({totalItems})</h2>
                <button className="cart-clear-btn" onClick={clearCart}>
                  <FaTrash /> Clear All
                </button>
              </div>

              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <p className="cart-item-category">{item.category}</p>
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">₹{item.price} each</p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="qty-control">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <p className="cart-item-subtotal">₹{item.price * item.qty}</p>
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="cart-summary-rows">
                {cart.map((item) => (
                  <div key={item.id} className="summary-row">
                    <span>{item.name} × {item.qty}</span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>
              <div className="cart-summary-divider" />
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
              <button className="cart-whatsapp-btn" onClick={handleWhatsAppOrder}>
                <FaWhatsapp /> Order via WhatsApp
              </button>
              <p className="cart-note">
                We'll confirm your order and delivery details on WhatsApp
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
