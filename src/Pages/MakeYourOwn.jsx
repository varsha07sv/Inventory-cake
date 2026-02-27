import React, { useState, useEffect } from "react";
import { 
  FaShoppingCart, 
  FaCheckCircle, 
  FaRegCircle,
  FaHeart,
  FaStar,
  FaLeaf,
  FaApple,
  FaCoffee,
  FaCrown,
  FaTree,
  FaSeedling,
  FaRegSun,
  FaRegLemon,
  FaCookieBite,
  FaIceCream
} from "react-icons/fa";
import "../Styles/MakeYourOwn.css";

function MakeYourOwnCake() {
  const [selectedShape, setSelectedShape] = useState("square");
  const [selectedFlavor, setSelectedFlavor] = useState("chocolate");
  const [hasCream, setHasCream] = useState(false);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [cakeMessage, setCakeMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(499);
  const [showSlice, setShowSlice] = useState(false);

  // Shapes with more options
  const shapes = [
    { id: "square", name: "Square", icon: "⬛", price: 0 },
    { id: "circle", name: "Round", icon: "⚪", price: 0 },
    { id: "heart", name: "Heart", icon: "❤️", price: 100 },
    { id: "rectangle", name: "Rectangle", icon: "▭", price: 50 },
    { id: "star", name: "Star", icon: "⭐", price: 150 },
    { id: "number", name: "Number", icon: "🔢", price: 200 }
  ];

  // 25+ Flavors with colors and icons
  const flavors = [
    // Chocolate Based (5)
    { id: "chocolate", name: "Rich Chocolate", icon: <FaCookieBite />, color: "#3B2F2F", price: 0, description: "Dark chocolate cake" },
    { id: "dark-chocolate", name: "Dark Chocolate", icon: <FaCookieBite />, color: "#2D1F1F", price: 50, description: "Intense dark chocolate" },
    { id: "milk-chocolate", name: "Milk Chocolate", icon: <FaCookieBite />, color: "#6B4E3A", price: 40, description: "Smooth milk chocolate" },
    { id: "white-chocolate", name: "White Chocolate", icon: <FaIceCream />, color: "#FFF5E6", price: 50, description: "Creamy white chocolate" },
    { id: "chocolate-fudge", name: "Chocolate Fudge", icon: <FaCookieBite />, color: "#4A2C1A", price: 80, description: "Rich fudge cake" },
    
    // Vanilla Based (4)
    { id: "vanilla", name: "Classic Vanilla", icon: <FaIceCream />, color: "#F3E5AB", price: 0, description: "Traditional vanilla" },
    { id: "french-vanilla", name: "French Vanilla", icon: <FaIceCream />, color: "#FFE68F", price: 40, description: "Premium french vanilla" },
    { id: "vanilla-bean", name: "Vanilla Bean", icon: <FaIceCream />, color: "#FFF0C0", price: 60, description: "Real vanilla bean" },
    { id: "butter-vanilla", name: "Butter Vanilla", icon: <FaCrown />, color: "#FFD700", price: 50, description: "Rich butter vanilla" },
    
    // Fruit Based (8)
    { id: "strawberry", name: "Fresh Strawberry", icon: <FaHeart />, color: "#FC5A8D", price: 70, description: "Real strawberry puree" },
    { id: "blueberry", name: "Blueberry", icon: <FaStar />, color: "#4B0082", price: 80, description: "Fresh blueberry" },
    { id: "raspberry", name: "Raspberry", icon: <FaHeart />, color: "#DC143C", price: 90, description: "Tangy raspberry" },
    { id: "mango", name: "Alphonso Mango", icon: <FaRegSun />, color: "#FFA500", price: 100, description: "Sweet alphonso mango" },
    { id: "pineapple", name: "Pineapple", icon: <FaTree />, color: "#F0E68C", price: 60, description: "Tropical pineapple" },
    { id: "lemon", name: "Zesty Lemon", icon: <FaRegLemon />, color: "#FFF44F", price: 50, description: "Fresh lemon zest" },
    { id: "orange", name: "Orange", icon: <FaRegSun />, color: "#FF8C00", price: 60, description: "Citrus orange" },
    { id: "cherry", name: "Black Cherry", icon: <FaHeart />, color: "#B22222", price: 90, description: "Juicy black cherry" },
    
    // Premium (5)
    { id: "red-velvet", name: "Red Velvet", icon: <FaHeart />, color: "#C41E3A", price: 120, description: "Classic red velvet" },
    { id: "black-forest", name: "Black Forest", icon: <FaTree />, color: "#3B2F2F", price: 130, description: "Cherry chocolate" },
    { id: "tiramisu", name: "Tiramisu", icon: <FaCoffee />, color: "#8B4513", price: 150, description: "Coffee mascarpone" },
    { id: "pistachio", name: "Pistachio", icon: <FaSeedling />, color: "#93C572", price: 120, description: "Crunchy pistachio" },
    { id: "hazelnut", name: "Hazelnut", icon: <FaSeedling />, color: "#DAA520", price: 130, description: "Roasted hazelnut" },
    
    // Exotic (5)
    { id: "coconut", name: "Coconut", icon: <FaLeaf />, color: "#F5F5DC", price: 80, description: "Tender coconut" },
    { id: "banana", name: "Banana", icon: <FaApple />, color: "#FFE135", price: 60, description: "Ripe banana" },
    { id: "carrot", name: "Carrot Cake", icon: <FaSeedling />, color: "#FF8C42", price: 90, description: "Spiced carrot" },
    { id: "coffee", name: "Coffee", icon: <FaCoffee />, color: "#6F4E37", price: 100, description: "Espresso infused" },
    { id: "chai", name: "Masala Chai", icon: <FaCoffee />, color: "#C19A6B", price: 110, description: "Spiced tea cake" }
  ];

  // 40+ Toppings with emojis and categories
  const toppings = [
    // Nuts (8)
    { id: "almonds", name: "Roasted Almonds", emoji: "🌰", price: 80, category: "nuts", count: 15 },
    { id: "walnuts", name: "Crushed Walnuts", emoji: "🥜", price: 80, category: "nuts", count: 12 },
    { id: "pistachios", name: "Pistachios", emoji: "🟢", price: 100, category: "nuts", count: 18 },
    { id: "cashews", name: "Cashew Pieces", emoji: "🥜", price: 90, category: "nuts", count: 14 },
    { id: "pecans", name: "Pecans", emoji: "🌰", price: 110, category: "nuts", count: 12 },
    { id: "hazelnuts", name: "Hazelnuts", emoji: "🌰", price: 120, category: "nuts", count: 12 },
    { id: "macadamia", name: "Macadamia", emoji: "🌰", price: 150, category: "nuts", count: 10 },
    { id: "peanuts", name: "Peanuts", emoji: "🥜", price: 60, category: "nuts", count: 20 },

    // Fresh Fruits (12)
    { id: "strawberries", name: "Fresh Strawberries", emoji: "🍓", price: 120, category: "fruits", count: 8 },
    { id: "blueberries", name: "Fresh Blueberries", emoji: "🫐", price: 130, category: "fruits", count: 20 },
    { id: "raspberries", name: "Raspberries", emoji: "🍓", price: 140, category: "fruits", count: 16 },
    { id: "blackberries", name: "Blackberries", emoji: "🍇", price: 140, category: "fruits", count: 15 },
    { id: "mango-cubes", name: "Mango Cubes", emoji: "🥭", price: 110, category: "fruits", count: 12 },
    { id: "kiwi", name: "Kiwi Slices", emoji: "🥝", price: 100, category: "fruits", count: 12 },
    { id: "banana-slices", name: "Banana Slices", emoji: "🍌", price: 80, category: "fruits", count: 15 },
    { id: "pineapple", name: "Pineapple Chunks", emoji: "🍍", price: 90, category: "fruits", count: 12 },
    { id: "orange-zest", name: "Orange Zest", emoji: "🍊", price: 70, category: "fruits", count: 25 },
    { id: "lemon-zest", name: "Lemon Zest", emoji: "🍋", price: 70, category: "fruits", count: 25 },
    { id: "cherries", name: "Glazed Cherries", emoji: "🍒", price: 110, category: "fruits", count: 10 },
    { id: "grapes", name: "Fresh Grapes", emoji: "🍇", price: 90, category: "fruits", count: 15 },

    // Chocolates (8)
    { id: "chocolate-chips", name: "Chocolate Chips", emoji: "🍫", price: 80, category: "chocolates", count: 30 },
    { id: "white-chips", name: "White Chips", emoji: "🍫", price: 80, category: "chocolates", count: 30 },
    { id: "dark-chips", name: "Dark Chips", emoji: "🍫", price: 90, category: "chocolates", count: 30 },
    { id: "chocolate-shavings", name: "Chocolate Shavings", emoji: "🍫", price: 90, category: "chocolates", count: 40 },
    { id: "chocolate-drizzle", name: "Chocolate Drizzle", emoji: "🍫", price: 70, category: "chocolates", count: 8 },
    { id: "caramel-drizzle", name: "Caramel Drizzle", emoji: "🍯", price: 80, category: "chocolates", count: 8 },
    { id: "chocolate-balls", name: "Chocolate Balls", emoji: "⚫", price: 100, category: "chocolates", count: 15 },
    { id: "chocolate-curls", name: "Chocolate Curls", emoji: "🍫", price: 110, category: "chocolates", count: 20 },

    // Candies & Sweets (8)
    { id: "sprinkles", name: "Rainbow Sprinkles", emoji: "✨", price: 60, category: "candies", count: 50 },
    { id: "chocolate-sprinkles", name: "Chocolate Sprinkles", emoji: "🍫", price: 70, category: "candies", count: 50 },
    { id: "candy-canes", name: "Candy Canes", emoji: "🍭", price: 90, category: "candies", count: 8 },
    { id: "gummy-bears", name: "Gummy Bears", emoji: "🧸", price: 100, category: "candies", count: 15 },
    { id: "mms", name: "M&Ms", emoji: "🔴", price: 90, category: "candies", count: 25 },
    { id: "skittles", name: "Skittles", emoji: "🌈", price: 100, category: "candies", count: 25 },
    { id: "marshmallows", name: "Marshmallows", emoji: "☁️", price: 80, category: "candies", count: 15 },
    { id: "caramel-cubes", name: "Caramel Cubes", emoji: "🟫", price: 100, category: "candies", count: 12 },

    // Premium Decorations (8)
    { id: "gold-leaf", name: "Gold Leaf", emoji: "✨", price: 250, category: "premium", count: 5 },
    { id: "silver-leaf", name: "Silver Leaf", emoji: "✨", price: 200, category: "premium", count: 5 },
    { id: "edible-roses", name: "Edible Roses", emoji: "🌹", price: 180, category: "premium", count: 6 },
    { id: "edible-flowers", name: "Edible Flowers", emoji: "🌸", price: 150, category: "premium", count: 8 },
    { id: "macarons", name: "French Macarons", emoji: "🍪", price: 200, category: "premium", count: 5 },
    { id: "meringues", name: "Meringues", emoji: "☁️", price: 120, category: "premium", count: 8 },
    { id: "chocolate-lace", name: "Chocolate Lace", emoji: "🎀", price: 150, category: "premium", count: 4 },
    { id: "sugar-pearls", name: "Sugar Pearls", emoji: "⚪", price: 100, category: "premium", count: 40 },

    // Traditional Indian (5)
    { id: "rose-petals", name: "Rose Petals", emoji: "🌹", price: 80, category: "traditional", count: 20 },
    { id: "saffron", name: "Saffron Strands", emoji: "🔴", price: 200, category: "traditional", count: 15 },
    { id: "pista-crushed", name: "Crushed Pista", emoji: "🟢", price: 100, category: "traditional", count: 25 },
    { id: "badam", name: "Badam Slivers", emoji: "🌰", price: 110, category: "traditional", count: 20 },
    { id: "kaju", name: "Kaju Pieces", emoji: "🥜", price: 120, category: "traditional", count: 18 }
  ];

  // Group toppings by category
  const toppingsByCategory = toppings.reduce((acc, topping) => {
    if (!acc[topping.category]) acc[topping.category] = [];
    acc[topping.category].push(topping);
    return acc;
  }, {});

  // Calculate total price
  useEffect(() => {
    let price = 499; // Base price
    
    // Add shape price
    const shapePrice = shapes.find(s => s.id === selectedShape)?.price || 0;
    price += shapePrice;
    
    // Add flavor price
    const flavorPrice = flavors.find(f => f.id === selectedFlavor)?.price || 0;
    price += flavorPrice;
    
    // Add cream price
    if (hasCream) price += 80;
    
    // Add toppings price
    selectedToppings.forEach(id => {
      const topping = toppings.find(t => t.id === id);
      if (topping) price += topping.price;
    });
    
    // Add message price
    if (cakeMessage.trim()) price += 60;
    
    setTotalPrice(price);
  }, [selectedShape, selectedFlavor, hasCream, selectedToppings, cakeMessage]);

  // Handle topping toggle
  const handleToppingToggle = (toppingId) => {
    if (selectedToppings.includes(toppingId)) {
      setSelectedToppings(selectedToppings.filter(id => id !== toppingId));
    } else {
      setSelectedToppings([...selectedToppings, toppingId]);
    }
  };

  // Get current flavor
  const currentFlavor = flavors.find(f => f.id === selectedFlavor);

  return (
    <div className="make-cake-container">
      <h1 className="page-title">🎂 Make Your Own Custom Cake</h1>
      <p className="page-subtitle">Choose from 30+ flavors and 40+ toppings</p>
      
      <div className="cake-builder">
        {/* Left Side - Customization Panel */}
        <div className="customization-panel">
          <h2>Customize Your Cake</h2>
          
          {/* Shape Selection */}
          <div className="section">
            <h3>Choose Shape <span className="section-count">{shapes.length} options</span></h3>
            <div className="shape-options">
              {shapes.map(shape => (
                <button
                  key={shape.id}
                  className={`shape-btn ${selectedShape === shape.id ? 'active' : ''}`}
                  onClick={() => setSelectedShape(shape.id)}
                >
                  <span className="shape-icon">{shape.icon}</span>
                  <span>{shape.name}</span>
                  {shape.price > 0 && <span className="price">+₹{shape.price}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Flavor Selection */}
          <div className="section">
            <h3>Choose Flavor <span className="section-count">{flavors.length} options</span></h3>
            <div className="flavor-options">
              {flavors.map(flavor => (
                <button
                  key={flavor.id}
                  className={`flavor-btn ${selectedFlavor === flavor.id ? 'active' : ''}`}
                  onClick={() => setSelectedFlavor(flavor.id)}
                  style={{ 
                    backgroundColor: flavor.color,
                    color: flavor.id.includes('white') || flavor.id.includes('vanilla') ? '#333' : 'white'
                  }}
                >
                  <span className="flavor-icon">{flavor.icon}</span>
                  <span className="flavor-name">{flavor.name}</span>
                  <span className="flavor-price">+₹{flavor.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Cream Option */}
          <div className="section">
            <h3>Add Cream Layer</h3>
            <label className="cream-toggle">
              <input 
                type="checkbox" 
                checked={hasCream}
                onChange={() => setHasCream(!hasCream)}
              />
              <span className="toggle-label">Add Fresh Cream (+₹80)</span>
            </label>
          </div>

          {/* Toppings Selection by Category */}
          <div className="section">
            <h3>Add Toppings <span className="section-count">{toppings.length} options</span></h3>
            {Object.entries(toppingsByCategory).map(([category, items]) => (
              <div key={category} className="topping-category">
                <h4 className="category-title">
                  {category.charAt(0).toUpperCase() + category.slice(1)} 
                  <span className="category-count">{items.length}</span>
                </h4>
                <div className="toppings-grid">
                  {items.map(topping => (
                    <button
                      key={topping.id}
                      className={`topping-btn ${selectedToppings.includes(topping.id) ? 'active' : ''}`}
                      onClick={() => handleToppingToggle(topping.id)}
                    >
                      <span className="topping-emoji">{topping.emoji}</span>
                      <span className="topping-name">{topping.name}</span>
                      <span className="topping-price">₹{topping.price}</span>
                      {selectedToppings.includes(topping.id) ? 
                        <FaCheckCircle className="check-icon" /> : 
                        <FaRegCircle className="check-icon" />
                      }
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Message on Cake */}
          <div className="section">
            <h3>Message on Cake</h3>
            <textarea
              className="message-input"
              placeholder="Type your message here... (e.g., Happy Birthday, Happy Anniversary, etc.)"
              value={cakeMessage}
              onChange={(e) => setCakeMessage(e.target.value.slice(0, 50))}
              rows="3"
            />
            <div className="message-note">
              <span>{cakeMessage.length}/50 characters</span>
              {cakeMessage && <span className="message-price">+₹60</span>}
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="price-section">
            <div className="total-price">
              <span>Total Amount:</span>
              <span className="price-amount">₹{totalPrice}</span>
            </div>
            <button className="add-to-cart-btn">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>

        {/* Right Side - Cake Preview */}
        <div className="preview-panel">
          <h2>Your Cake Preview</h2>
          
          {/* Slice View Toggle */}
          <div className="preview-controls">
            <button 
              className={`slice-toggle ${showSlice ? 'active' : ''}`}
              onClick={() => setShowSlice(!showSlice)}
            >
              {showSlice ? 'Hide Slice' : 'Show Slice View'}
            </button>
          </div>

          <div className="cake-display">
            {/* Cake Plate */}
            <div className="cake-plate">
              
              {/* Cake - Selected Shape */}
              <div 
                className={`cake ${selectedShape}`}
                style={{ backgroundColor: currentFlavor?.color }}
              >
                {/* Cream Layer (if selected) */}
                {hasCream && (
                  <div className="cream-layer">
                    <div className="cream-drips">
                      {[...Array(8)].map((_, i) => (
                        <span key={i} className="drip" style={{ left: `${i * 12 + 5}%` }}></span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Toppings - Multiple pieces scattered */}
                {selectedToppings.map(toppingId => {
                  const topping = toppings.find(t => t.id === toppingId);
                  if (!topping) return null;
                  
                  const pieces = [];
                  const pieceCount = topping.count || 10;
                  
                  for (let i = 0; i < pieceCount; i++) {
                    // Create different patterns based on topping type
                    let left, top;
                    
                    if (topping.category === 'premium' && topping.id.includes('leaf')) {
                      // Gold/silver leaf - random but elegant
                      left = 20 + Math.random() * 60;
                      top = 20 + Math.random() * 60;
                    } else if (topping.id.includes('drizzle')) {
                      // Drizzle pattern - lines
                      left = 10 + (i * 8);
                      top = 30 + (i * 5);
                    } else if (topping.category === 'fruits' && topping.id.includes('berries')) {
                      // Berries clustered
                      left = 30 + (Math.random() * 40);
                      top = 30 + (Math.random() * 40);
                    } else {
                      // Random scattering
                      left = 10 + Math.random() * 80;
                      top = 10 + Math.random() * 75;
                    }
                    
                    const rotation = Math.random() * 360;
                    const size = 0.6 + Math.random() * 0.8;
                    
                    pieces.push(
                      <span 
                        key={i}
                        className="topping-piece"
                        style={{
                          left: `${left}%`,
                          top: `${top}%`,
                          transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${size})`,
                          fontSize: topping.id.includes('sprinkles') ? '14px' : 
                                   topping.id.includes('pearls') ? '10px' : 
                                   topping.id.includes('leaf') ? '18px' : '24px',
                          zIndex: 20 + i,
                          animationDelay: `${i * 0.1}s`
                        }}
                      >
                        {topping.emoji}
                      </span>
                    );
                  }
                  return pieces;
                })}

                {/* Message on Cake */}
                {cakeMessage && (
                  <div className="cake-message">
                    <div className="message-banner">
                      {cakeMessage}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Slice View */}
            {showSlice && (
              <div className="slice-view">
                <div className="slice">
                  <div className="slice-layer" style={{ backgroundColor: currentFlavor?.color }}>
                    <span className="slice-label">Layer 1</span>
                  </div>
                  <div className="slice-layer" style={{ backgroundColor: currentFlavor?.color }}>
                    <span className="slice-label">Layer 2</span>
                  </div>
                  {hasCream && (
                    <div className="slice-cream">
                      <span className="slice-label">Cream</span>
                    </div>
                  )}
                  <div className="slice-layer" style={{ backgroundColor: currentFlavor?.color }}>
                    <span className="slice-label">Layer 3</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Preview Details */}
          <div className="preview-details">
            <div className="detail-item">
              <span className="detail-label">Shape</span>
              <span className="detail-value">{shapes.find(s => s.id === selectedShape)?.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Flavor</span>
              <span className="detail-value">{currentFlavor?.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Cream</span>
              <span className="detail-value">{hasCream ? 'Yes' : 'No'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Toppings</span>
              <span className="detail-value">{selectedToppings.length} types</span>
            </div>
          </div>

          {/* Selected Toppings List */}
          {selectedToppings.length > 0 && (
            <div className="selected-toppings">
              <h4>Selected Toppings:</h4>
              <div className="selected-toppings-list">
                {selectedToppings.map(id => {
                  const topping = toppings.find(t => t.id === id);
                  return (
                    <span key={id} className="selected-topping-tag">
                      {topping?.emoji} {topping?.name}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MakeYourOwnCake;