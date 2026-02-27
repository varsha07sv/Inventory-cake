import React, { useState, useEffect } from "react";
import { 
  FaStar, 
  FaHeart, 
  FaCircle, 
  FaSquare, 
  FaShoppingCart,
  FaUpload,
  FaCheckCircle,
  FaRegCircle,
  FaCoffee,
  FaCrown,
  FaLeaf,
  FaApple,
  FaCookieBite,
  FaBirthdayCake,
  FaRegComment,
  FaRegStar,
  FaRegLemon,
  FaRegGrinStars,
  FaRegSmile,
  FaRegSun,
  FaRegMoon,
  FaSeedling,
  FaTree,
  FaFish,
  FaCarrot,
  FaPepperHot,
  FaMugHot,
  FaWineGlassAlt,
  FaBolt,
  FaFire,
  FaRegGem,
  FaRegSnowflake,
  FaRegClock,
  FaRegCalendarAlt,
  FaRegMoneyBillAlt,
  FaRegCreditCard,
  FaTruck,
  FaBox,
  FaGift,
  FaRibbon,
  FaCandyCane,
  FaCookie,
  FaIceCream,
  FaPizzaSlice,
  FaBreadSlice
} from "react-icons/fa";
import "../Styles/MakeYourOwn.css";

function MakeYourOwnCake() {
  const [selectedShape, setSelectedShape] = useState("circle");
  const [selectedFlavor, setSelectedFlavor] = useState("chocolate");
  const [selectedWeight, setSelectedWeight] = useState("1.0");
  const [cakeMessage, setCakeMessage] = useState("");
  const [pincode, setPincode] = useState("");
  const [isEggless, setIsEggless] = useState(false);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [toppingPositions, setToppingPositions] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [cakeColor, setCakeColor] = useState("#8B4513"); // Default chocolate color
  const [draggedTopping, setDraggedTopping] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Shapes array - using valid icons and emojis
  const shapes = [
    { id: "circle", name: "Circle", icon: <FaCircle />, image: "🔴", price: 0 },
    { id: "square", name: "Square", icon: <FaSquare />, image: "⬛", price: 0 },
    { id: "heart", name: "Heart", icon: <FaHeart />, image: "❤️", price: 100 },
    { id: "rectangle", name: "Rectangle", icon: "▭", image: "▭", price: 0 },
  ];

  // Flavors array - Using only Font Awesome icons
  const flavors = [
    { id: "chocolate", name: "Chocolate", icon: <FaCookieBite />, color: "#8B4513", price: 0 },
    { id: "vanilla", name: "Vanilla", icon: <FaIceCream />, color: "#F3E5AB", price: 0 },
    { id: "strawberry", name: "Strawberry", icon: <FaHeart />, color: "#FC5A8D", price: 50 },
    { id: "butterscotch", name: "Butterscotch", icon: <FaCrown />, color: "#DAA520", price: 50 },
    { id: "red-velvet", name: "Red Velvet", icon: <FaHeart />, color: "#C41E3A", price: 100 },
    { id: "black-forest", name: "Black Forest", icon: <FaTree />, color: "#3B2F2F", price: 100 },
    { id: "pineapple", name: "Pineapple", icon: <FaTree />, color: "#F0E68C", price: 50 },
    { id: "mango", name: "Mango", icon: <FaRegSun />, color: "#FFA500", price: 50 },
    { id: "lemon", name: "Lemon", icon: <FaRegLemon />, color: "#FFF44F", price: 50 },
    { id: "grape", name: "Grape", icon: <FaWineGlassAlt />, color: "#6F2DA8", price: 75 },
    { id: "cherry", name: "Cherry", icon: <FaHeart />, color: "#C41E3A", price: 75 },
    { id: "coconut", name: "Coconut", icon: <FaSeedling />, color: "#F5F5DC", price: 50 },
    { id: "honey", name: "Honey", icon: <FaBolt />, color: "#F0E68C", price: 75 },
    { id: "coffee", name: "Coffee", icon: <FaCoffee />, color: "#6F4E37", price: 75 },
    { id: "pista", name: "Pistachio", icon: <FaSeedling />, color: "#93C572", price: 100 },
    { id: "fruit", name: "Mixed Fruit", icon: <FaApple />, color: "#FF6B6B", price: 100 }
  ];

  // Weights array
  const weights = [
    { id: "0.5", label: "0.5 kg", price: 499, serves: "2-4 people" },
    { id: "1.0", label: "1.0 kg", price: 899, serves: "4-6 people" },
    { id: "1.5", label: "1.5 kg", price: 1299, serves: "6-8 people" },
    { id: "2.0", label: "2.0 kg", price: 1699, serves: "8-10 people" },
    { id: "2.5", label: "2.5 kg", price: 1999, serves: "10-12 people" },
    { id: "3.0", label: "3.0 kg", price: 2499, serves: "12-15 people" },
    { id: "4.0", label: "4.0 kg", price: 3199, serves: "15-20 people" },
    { id: "5.0", label: "5.0 kg", price: 3999, serves: "20-25 people" },
    { id: "7.5", label: "7.5 kg", price: 5499, serves: "25-35 people" },
    { id: "10.0", label: "10.0 kg", price: 6999, serves: "35-50 people" }
  ];

  // Toppings array - Using only emojis (no icon imports needed)
  const toppings = [
    // Sprinkles & Decorations
    { id: "sprinkles", name: "Rainbow Sprinkles", emoji: "✨", price: 50, category: "decorations" },
    { id: "chocolate-sprinkles", name: "Chocolate Sprinkles", emoji: "🍫", price: 60, category: "decorations" },
    { id: "gold-leaf", name: "Gold Leaf", emoji: "✨", price: 200, category: "decorations" },
    { id: "silver-leaf", name: "Silver Leaf", emoji: "✨", price: 200, category: "decorations" },
    { id: "edible-glitter", name: "Edible Glitter", emoji: "✨", price: 80, category: "decorations" },
    { id: "macarons", name: "Macarons", emoji: "🍪", price: 150, category: "decorations" },
    
    // Nuts
    { id: "almonds", name: "Almonds", emoji: "🥜", price: 80, category: "nuts" },
    { id: "walnuts", name: "Walnuts", emoji: "🥜", price: 80, category: "nuts" },
    { id: "pistachios", name: "Pistachios", emoji: "🥜", price: 100, category: "nuts" },
    { id: "peanuts", name: "Peanuts", emoji: "🥜", price: 60, category: "nuts" },
    { id: "cashews", name: "Cashews", emoji: "🥜", price: 90, category: "nuts" },
    
    // Chocolates
    { id: "chocolate-chips", name: "Chocolate Chips", emoji: "🍫", price: 70, category: "chocolate" },
    { id: "white-chips", name: "White Chips", emoji: "🍫", price: 70, category: "chocolate" },
    { id: "dark-chips", name: "Dark Chips", emoji: "🍫", price: 80, category: "chocolate" },
    { id: "chocolate-shavings", name: "Chocolate Shavings", emoji: "🍫", price: 80, category: "chocolate" },
    { id: "chocolate-drizzle", name: "Chocolate Drizzle", emoji: "🍫", price: 60, category: "chocolate" },
    { id: "caramel-drizzle", name: "Caramel Drizzle", emoji: "🍯", price: 60, category: "chocolate" },
    
    // Fruits
    { id: "fresh-strawberries", name: "Fresh Strawberries", emoji: "🍓", price: 120, category: "fruits" },
    { id: "fresh-blueberries", name: "Fresh Blueberries", emoji: "🫐", price: 120, category: "fruits" },
    { id: "fresh-raspberries", name: "Fresh Raspberries", emoji: "🍓", price: 130, category: "fruits" },
    { id: "mango-cubes", name: "Mango Cubes", emoji: "🥭", price: 100, category: "fruits" },
    { id: "kiwi-slices", name: "Kiwi Slices", emoji: "🥝", price: 100, category: "fruits" },
    { id: "orange-zest", name: "Orange Zest", emoji: "🍊", price: 60, category: "fruits" },
    
    // Candies
    { id: "candles", name: "Birthday Candles", emoji: "🕯️", price: 40, category: "candies" },
    { id: "numbered-candles", name: "Number Candles", emoji: "🕯️", price: 60, category: "candies" },
    { id: "sparklers", name: "Sparklers", emoji: "✨", price: 100, category: "candies" },
    { id: "mms", name: "M&Ms", emoji: "🍬", price: 80, category: "candies" },
    { id: "gummy-bears", name: "Gummy Bears", emoji: "🧸", price: 70, category: "candies" },
    { id: "candy-canes", name: "Candy Canes", emoji: "🍭", price: 60, category: "candies" },
    
    // Flowers
    { id: "edible-roses", name: "Edible Roses", emoji: "🌹", price: 150, category: "flowers" },
    { id: "edible-lavender", name: "Edible Lavender", emoji: "🌸", price: 120, category: "flowers" },
    { id: "sugar-flowers", name: "Sugar Flowers", emoji: "🌸", price: 100, category: "flowers" },
    { id: "fresh-flowers", name: "Fresh Flowers", emoji: "🌺", price: 200, category: "flowers" }
  ];

  // Group toppings by category
  const toppingsByCategory = toppings.reduce((acc, topping) => {
    if (!acc[topping.category]) {
      acc[topping.category] = [];
    }
    acc[topping.category].push(topping);
    return acc;
  }, {});

  // Calculate total price whenever selections change
  useEffect(() => {
    calculateTotalPrice();
  }, [selectedShape, selectedFlavor, selectedWeight, isEggless, selectedToppings, cakeMessage]);

  const calculateTotalPrice = () => {
    // Base price from weight
    const weightPrice = weights.find(w => w.id === selectedWeight)?.price || 0;
    
    // Shape price
    const shapePrice = shapes.find(s => s.id === selectedShape)?.price || 0;
    
    // Flavor price
    const flavorPrice = flavors.find(f => f.id === selectedFlavor)?.price || 0;
    
    // Toppings price
    const toppingsPrice = selectedToppings.reduce((total, toppingId) => {
      const topping = toppings.find(t => t.id === toppingId);
      return total + (topping?.price || 0);
    }, 0);
    
    // Eggless surcharge (10% extra)
    const egglessSurcharge = isEggless ? weightPrice * 0.1 : 0;
    
    // Message surcharge (if message length > 0)
    const messageSurcharge = cakeMessage.length > 0 ? 50 : 0;
    
    const total = weightPrice + shapePrice + flavorPrice + toppingsPrice + egglessSurcharge + messageSurcharge;
    
    setTotalPrice(Math.round(total));
  };

  const handleFlavorClick = (flavorId, color) => {
    setSelectedFlavor(flavorId);
    setCakeColor(color);
  };

  const handleToppingToggle = (toppingId) => {
    if (selectedToppings.includes(toppingId)) {
      // Remove topping
      setSelectedToppings(prev => prev.filter(id => id !== toppingId));
      // Remove its position
      const newPositions = { ...toppingPositions };
      delete newPositions[toppingId];
      setToppingPositions(newPositions);
    } else {
      // Add topping with default position (center of cake)
      setSelectedToppings(prev => [...prev, toppingId]);
      setToppingPositions(prev => ({
        ...prev,
        [toppingId]: { x: 50, y: 50 } // Default center position (percentage)
      }));
    }
  };

  // Drag and drop handlers
  const handleDragStart = (e, toppingId) => {
    const toppingElement = e.target;
    const rect = toppingElement.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    setDraggedTopping(toppingId);
    setDragOffset({ x: offsetX, y: offsetY });
    
    e.dataTransfer.setData("text/plain", toppingId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    
    if (!draggedTopping) return;
    
    // Get drop position relative to cake container
    const cakeContainer = e.currentTarget;
    const rect = cakeContainer.getBoundingClientRect();
    
    // Calculate position as percentage
    const x = ((e.clientX - rect.left - dragOffset.x) / rect.width) * 100;
    const y = ((e.clientY - rect.top - dragOffset.y) / rect.height) * 100;
    
    // Constrain to cake boundaries (0-100%)
    const constrainedX = Math.max(0, Math.min(100, x));
    const constrainedY = Math.max(0, Math.min(100, y));
    
    // Update topping position
    setToppingPositions(prev => ({
      ...prev,
      [draggedTopping]: { x: constrainedX, y: constrainedY }
    }));
    
    setDraggedTopping(null);
  };

  const handleDragEnd = () => {
    setDraggedTopping(null);
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    // Only allow letters, numbers, spaces, and -@ characters
    const regex = /^[a-zA-Z0-9\s\-@]*$/;
    if (value.length <= 70 && (regex.test(value) || value === "")) {
      setCakeMessage(value);
    }
  };

  const handlePincodeApply = () => {
    // Validate pincode
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      alert(`Delivery available at ${pincode}! Delivery charge: ₹50`);
    } else {
      alert("Please enter a valid 6-digit pincode");
    }
  };

  const handleBuyNow = () => {
    const orderDetails = {
      shape: shapes.find(s => s.id === selectedShape)?.name,
      flavor: flavors.find(f => f.id === selectedFlavor)?.name,
      weight: weights.find(w => w.id === selectedWeight)?.label,
      eggless: isEggless,
      message: cakeMessage,
      toppings: selectedToppings.map(id => ({
        name: toppings.find(t => t.id === id)?.name,
        position: toppingPositions[id] || { x: 50, y: 50 }
      })),
      pincode: pincode,
      totalPrice: `₹${totalPrice}`
    };
    console.log("Order placed:", orderDetails);
    alert(`Your custom cake has been added to cart! Total: ₹${totalPrice}`);
  };

  return (
    <div className="make-cake-container">
      {/* Hero Section */}
      <section className="cake-hero">
        <div className="cake-hero-content">
          <h1 className="cake-hero-title">
            Make your own <span className="highlight">custom cake</span>
          </h1>
          <p className="cake-hero-description">
            Drag, choose & customise every detail – watch your dream cake come alive in real time.
          </p>
        </div>
      </section>

      <div className="cake-main-content">
        {/* Left Column - Customization Form */}
        <div className="cake-customization">
          {/* Header with Live Price */}
          <div className="customization-header">
            <h2 className="customization-title">
              Your Own Cake <span className="reviews-badge">⭐ 1011 Reviews</span>
            </h2>
            <div className="header-actions">
              <div className="live-price">
                <FaRegMoneyBillAlt className="price-icon" />
                <span className="price-amount">₹{totalPrice}</span>
              </div>
              <button className="save-review-btn">
                <FaHeart /> SAVE & REVIEW
              </button>
              <span className="tax-info">Inclusive of all taxes</span>
            </div>
          </div>

          {/* Pincode Input */}
          <div className="pincode-section">
            <div className="pincode-input-group">
              <input
                type="text"
                placeholder="Enter Your Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                maxLength="6"
                className="pincode-input"
              />
              <button onClick={handlePincodeApply} className="apply-btn">
                Apply
              </button>
            </div>
          </div>

          {/* Shape Selection */}
          <div className="customization-section">
            <h3 className="section-subtitle">Choose Shape</h3>
            <div className="shape-grid">
              {shapes.map(shape => (
                <div
                  key={shape.id}
                  className={`shape-option ${selectedShape === shape.id ? 'selected' : ''}`}
                  onClick={() => setSelectedShape(shape.id)}
                >
                  <span className="shape-icon">{shape.icon}</span>
                  <span className="shape-name">{shape.name}</span>
                  {shape.price > 0 && (
                    <span className="shape-price">+₹{shape.price}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Flavor Selection */}
          <div className="customization-section">
            <h3 className="section-subtitle">Choose Flavor</h3>
            <div className="flavor-grid">
              {flavors.map(flavor => (
                <div
                  key={flavor.id}
                  className={`flavor-option ${selectedFlavor === flavor.id ? 'selected' : ''}`}
                  onClick={() => handleFlavorClick(flavor.id, flavor.color)}
                  style={{ borderColor: flavor.color }}
                >
                  <span className="flavor-icon" style={{ color: flavor.color }}>
                    {flavor.icon}
                  </span>
                  <span className="flavor-name">{flavor.name}</span>
                  {flavor.price > 0 && (
                    <span className="flavor-price">+₹{flavor.price}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Weight Selection */}
          <div className="customization-section">
            <div className="weight-header">
              <h3 className="section-subtitle">Choose Weight</h3>
              <label className="eggless-toggle">
                <input
                  type="checkbox"
                  checked={isEggless}
                  onChange={() => setIsEggless(!isEggless)}
                />
                <span className="toggle-label">Eggless (+10%)</span>
              </label>
            </div>
            <div className="weight-grid">
              {weights.map(weight => (
                <div
                  key={weight.id}
                  className={`weight-option ${selectedWeight === weight.id ? 'selected' : ''}`}
                  onClick={() => setSelectedWeight(weight.id)}
                >
                  <span className="weight-label">{weight.label}</span>
                  <span className="weight-serves">{weight.serves}</span>
                  <span className="weight-price">₹{weight.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Toppings Selection by Category */}
          <div className="customization-section">
            <h3 className="section-subtitle">Add Toppings (Optional)</h3>
            {Object.entries(toppingsByCategory).map(([category, categoryToppings]) => (
              <div key={category} className="topping-category">
                <h4 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <div className="toppings-grid">
                  {categoryToppings.map(topping => (
                    <div
                      key={topping.id}
                      className={`topping-option ${selectedToppings.includes(topping.id) ? 'selected' : ''}`}
                      onClick={() => handleToppingToggle(topping.id)}
                    >
                      <span className="topping-emoji">{topping.emoji}</span>
                      <span className="topping-name">{topping.name}</span>
                      <span className="topping-price">₹{topping.price}</span>
                      {selectedToppings.includes(topping.id) ? (
                        <FaCheckCircle className="check-icon" />
                      ) : (
                        <FaRegCircle className="check-icon" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {selectedToppings.length > 0 && (
              <div className="selected-toppings-total">
                Toppings Total: ₹{selectedToppings.reduce((total, id) => {
                  const topping = toppings.find(t => t.id === id);
                  return total + (topping?.price || 0);
                }, 0)}
              </div>
            )}
          </div>

          {/* Message on Cake */}
          <div className="customization-section">
            <h3 className="section-subtitle">Message On Cake</h3>
            <div className="message-section">
              <textarea
                value={cakeMessage}
                onChange={handleMessageChange}
                placeholder="Type your message here..."
                className="message-input"
                rows="3"
              />
              <p className="message-note">
                <FaRegComment /> Note: Special Characters Other Than '-@' Not Allowed. Only 70 characters Allowed.
                {cakeMessage.length > 0 && <span className="message-charge"> (+₹50)</span>}
              </p>
              <div className="character-count">
                {cakeMessage.length}/70 characters
              </div>
            </div>
          </div>

          {/* Buy Now Button with Total */}
          <div className="buy-now-section">
            <div className="total-price-display">
              <span>Total Amount:</span>
              <span className="final-price">₹{totalPrice}</span>
            </div>
            <button onClick={handleBuyNow} className="buy-now-btn">
              <FaShoppingCart /> Buy Now
            </button>
          </div>
        </div>

        {/* Right Column - Cake Preview & Instructions */}
        <div className="cake-preview">
          {/* 3D Cake Preview */}
          <div className="preview-card">
            <h3 className="preview-title">Your Cake Preview</h3>
            <div 
              className="cake-preview-container"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className={`cake-preview-shape ${selectedShape}`}>
                <div className="cake-base" style={{ background: cakeColor }}>
                  <div className="cake-layer layer-1" style={{ background: cakeColor }}></div>
                  <div className="cake-layer layer-2" style={{ background: cakeColor }}></div>
                  <div className="cake-layer layer-3" style={{ background: cakeColor }}></div>
                </div>
                
                {/* Draggable Toppings */}
                {selectedToppings.map(toppingId => {
                  const topping = toppings.find(t => t.id === toppingId);
                  const position = toppingPositions[toppingId] || { x: 50, y: 50 };
                  
                  return (
                    <div
                      key={toppingId}
                      className="draggable-topping"
                      style={{
                        position: 'absolute',
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: 'translate(-50%, -50%)',
                        cursor: 'grab',
                        fontSize: '24px',
                        zIndex: 10,
                        userSelect: 'none'
                      }}
                      draggable
                      onDragStart={(e) => handleDragStart(e, toppingId)}
                      onDragEnd={handleDragEnd}
                    >
                      {topping?.emoji}
                    </div>
                  );
                })}
                
                {cakeMessage && (
                  <div className="cake-message-preview">
                    {cakeMessage.length > 20 ? cakeMessage.substring(0, 20) + '...' : cakeMessage}
                  </div>
                )}
              </div>
            </div>
            <div className="preview-details">
              <div className="detail-item">
                <span className="detail-label">Shape:</span>
                <span className="detail-value">{shapes.find(s => s.id === selectedShape)?.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Flavor:</span>
                <span className="detail-value">{flavors.find(f => f.id === selectedFlavor)?.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Weight:</span>
                <span className="detail-value">{weights.find(w => w.id === selectedWeight)?.label}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Eggless:</span>
                <span className="detail-value">{isEggless ? 'Yes' : 'No'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Toppings:</span>
                <span className="detail-value">{selectedToppings.length} items (drag to position)</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="instructions-card">
            <h3 className="instructions-title">
              Craving a custom cake? <span className="highlight">It's super easy!</span>
            </h3>
            <ul className="instructions-list">
              <li>
                <span className="instruction-bullet">🎯</span>
                Pick your shape (circle, square, heart, star, number... you name it)
              </li>
              <li>
                <span className="instruction-bullet">🍰</span>
                Choose from 16+ delicious flavors
              </li>
              <li>
                <span className="instruction-bullet">✨</span>
                Add your favorite toppings and drag them anywhere on the cake
              </li>
              <li>
                <span className="instruction-bullet">✏️</span>
                Add a personal message
              </li>
              <li>
                <span className="instruction-bullet">✅</span>
                Hit submit & complete your order!
              </li>
            </ul>
            <p className="instructions-footer">
              Make every celebration sweeter—start creating your dream cake now!
            </p>
          </div>

          {/* Footer Note */}
          <div className="cake-footer-note">
            <h4 className="footer-note-title">
              Make Your Own Cake at ICB Delights: Custom Cakes Made Easy!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeYourOwnCake;