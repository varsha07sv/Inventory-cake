import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaBirthdayCake, 
  FaLeaf, 
  FaTruck, 
  FaHeart,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaChevronRight,
  FaArrowLeft
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSubcategories, setShowSubcategories] = useState(false);

  const handleExploreClick = (e) => {
    e.preventDefault();
    const isLoggedIn = false; // Replace with actual auth check
    
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/products');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProductClick = (category) => {
    const isLoggedIn = false; // Replace with actual auth check
    
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      // Show subcategories instead of navigating immediately
      setSelectedCategory(category);
      setShowSubcategories(true);
    }
  };

  const handleSubcategoryClick = (category, subcategory) => {
    const isLoggedIn = false; // Replace with actual auth check
    
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate(`/products?category=${category}&subcategory=${subcategory}`);
    }
  };

  const handleBackToCategories = () => {
    setShowSubcategories(false);
    setSelectedCategory(null);
  };

  const openGoogleMaps = () => {
    const address = encodeURIComponent("123 Bakery Street, Anna Nagar, Chennai - 600040");
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  const makePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const openWhatsApp = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent("Hi! I'm interested in ordering a cake from ICB Delights.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const products = [
    { 
      id: 1, 
      name: "Cakes", 
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format", 
      description: "Delicious layered cakes for every occasion",
      subcategories: [
        { id: 101, name: "Chocolate Cake", image: "https://images.unsplash.com/photo-1606893995103-a431bce9c219?w=500&auto=format", description: "Rich and moist chocolate cake" },
        { id: 102, name: "Black Forest Cake", image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&auto=format", description: "Classic German chocolate cake with cherries" },
        { id: 103, name: "Mango Cake", image: "https://images.unsplash.com/photo-1627308595171-d1b5d671a41f?w=500&auto=format", description: "Fresh mango flavored delight" },
        { id: 104, name: "Red Velvet Cake", image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=500&auto=format", description: "Smooth cream cheese frosting" },
        { id: 105, name: "Pineapple Cake", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&auto=format", description: "Tropical pineapple flavor" },
        { id: 106, name: "Butterscotch Cake", image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&auto=format", description: "Crunchy butterscotch nuts" }
      ]
    },
    { 
      id: 2, 
      name: "Bento Cakes", 
      image: "https://images.unsplash.com/photo-1627308595171-d1b5d671a41f?w=500&auto=format", 
      description: "Personalized mini cakes in a box",
      subcategories: [
        { id: 201, name: "Chocolate Bento", image: "https://images.unsplash.com/photo-1627308595171-d1b5d671a41f?w=500&auto=format", description: "Mini chocolate cake in a box" },
        { id: 202, name: "Strawberry Bento", image: "https://images.unsplash.com/photo-1627308595171-d1b5d671a41f?w=500&auto=format", description: "Fresh strawberry flavored" },
        { id: 203, name: "Custom Message Bento", image: "https://images.unsplash.com/photo-1627308595171-d1b5d671a41f?w=500&auto=format", description: "With personalized message" }
      ]
    },
    { 
      id: 3, 
      name: "Cup Cakes", 
      image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&auto=format", 
      description: "Perfectly portioned sweet treats",
      subcategories: [
        { id: 301, name: "Chocolate Cupcakes", image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&auto=format", description: "Rich chocolate frosting" },
        { id: 302, name: "Vanilla Cupcakes", image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&auto=format", description: "Classic vanilla flavor" },
        { id: 303, name: "Red Velvet Cupcakes", image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&auto=format", description: "With cream cheese frosting" }
      ]
    },
    { 
      id: 4, 
      name: "Brownie", 
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format", 
      description: "Rich, fudgy chocolate brownies",
      subcategories: [
        { id: 401, name: "Walnut Brownie", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format", description: "With crunchy walnuts" },
        { id: 402, name: "Chocolate Fudge Brownie", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format", description: "Extra fudgy chocolate" },
        { id: 403, name: "Blondie", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format", description: "Vanilla based brownie" }
      ]
    },
    { 
      id: 5, 
      name: "Jar Cake", 
      image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&auto=format", 
      description: "Layered cakes in convenient jars",
      subcategories: [
        { id: 501, name: "Chocolate Jar Cake", image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&auto=format", description: "Layered chocolate delight" },
        { id: 502, name: "Strawberry Jar Cake", image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&auto=format", description: "With fresh strawberry puree" },
        { id: 503, name: "Oreo Jar Cake", image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&auto=format", description: "Crushed oreo cookies" }
      ]
    },
    { 
      id: 6, 
      name: "Cookies", 
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format", 
      description: "Freshly baked, crunchy cookies",
      subcategories: [
        { id: 601, name: "Chocolate Chip Cookies", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format", description: "Classic chocolate chip" },
        { id: 602, name: "Oatmeal Cookies", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format", description: "Healthy oatmeal raisins" },
        { id: 603, name: "Sugar Cookies", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format", description: "Buttery sugar cookies" }
      ]
    },
    { 
      id: 7, 
      name: "Celebration Cake", 
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&auto=format", 
      description: "Grand cakes for special moments",
      subcategories: [
        { id: 701, name: "Birthday Cake", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&auto=format", description: "Colorful birthday special" },
        { id: 702, name: "Anniversary Cake", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&auto=format", description: "Elegant anniversary design" },
        { id: 703, name: "Wedding Cake", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&auto=format", description: "Multi-tiered wedding cake" }
      ]
    },
    { 
      id: 8, 
      name: "Desserts", 
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format", 
      description: "Assorted premium desserts",
      subcategories: [
        { id: 801, name: "Tiramisu", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format", description: "Italian coffee dessert" },
        { id: 802, name: "Cheesecake", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format", description: "Creamy New York style" },
        { id: 803, name: "Mousse", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format", description: "Light and airy chocolate mousse" }
      ]
    },
    { 
      id: 9, 
      name: "Chocolates", 
      image: "https://images.unsplash.com/photo-1606312619071-d5b523a1fdbd?w=500&auto=format", 
      description: "Handcrafted chocolate delights",
      subcategories: [
        { id: 901, name: "Dark Chocolate", image: "https://images.unsplash.com/photo-1606312619071-d5b523a1fdbd?w=500&auto=format", description: "Premium dark chocolate" },
        { id: 902, name: "Milk Chocolate", image: "https://images.unsplash.com/photo-1606312619071-d5b523a1fdbd?w=500&auto=format", description: "Smooth milk chocolate" },
        { id: 903, name: "Assorted Chocolates", image: "https://images.unsplash.com/photo-1606312619071-d5b523a1fdbd?w=500&auto=format", description: "Mixed chocolate box" }
      ]
    }
  ];

  // Find the selected category details
  const selectedCategoryData = products.find(p => p.name === selectedCategory);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">WELCOME TO</span>
          <h1 className="hero-title">
            ICB <span className="highlight">Delights</span>
          </h1>
          <p className="hero-description">
            Crafting sweet memories with every bite. Freshly baked, lovingly decorated cakes for your special moments.
          </p>
          <div className="hero-buttons">
            <a href="/products" onClick={handleExploreClick} className="btn btn-primary">
              Explore Cakes
            </a>
            <a href="#contact" onClick={handleContactClick} className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose ICB Delights?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaBirthdayCake />
              </div>
              <h3>Custom Designs</h3>
              <p>Personalized cakes tailored to your vision</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Premium Ingredients</h3>
              <p>Only the finest ingredients in every creation</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <MdDeliveryDining />
              </div>
              <h3>Fast Delivery</h3>
              <p>Free delivery within Chennai city limits</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaHeart />
              </div>
              <h3>Occasion Specialists</h3>
              <p>Expert in all celebrations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-showcase">
        <div className="container">
          <div className="section-header">
            {!showSubcategories ? (
              <>
                <h2 className="section-title">Our <span className="highlight">Products</span></h2>
                <p className="section-description">
                  Explore our delicious range of freshly baked treats
                </p>
              </>
            ) : (
              <div className="subcategory-header">
                <button onClick={handleBackToCategories} className="back-button">
                  <FaArrowLeft /> Back to Categories
                </button>
                <h2 className="section-title">
                  <span className="highlight">{selectedCategory}</span> Varieties
                </h2>
              </div>
            )}
          </div>
          
          {!showSubcategories ? (
            // Main Categories View
            <div className="products-grid">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="product-card"
                  onClick={() => handleProductClick(product.name)}
                >
                  <div className="product-image-wrapper">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image"
                      loading="lazy"
                    />
                    <div className="product-overlay">
                      <span className="view-product">
                        View Varieties <FaChevronRight />
                      </span>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Subcategories View
            <div className="subcategories-grid">
              {selectedCategoryData?.subcategories.map((subcategory) => (
                <div 
                  key={subcategory.id} 
                  className="subcategory-card"
                  onClick={() => handleSubcategoryClick(selectedCategory, subcategory.name)}
                >
                  <div className="subcategory-image-wrapper">
                    <img 
                      src={subcategory.image} 
                      alt={subcategory.name}
                      className="subcategory-image"
                      loading="lazy"
                    />
                    <div className="subcategory-overlay">
                      <span className="view-subcategory">
                        Order Now <FaChevronRight />
                      </span>
                    </div>
                  </div>
                  <div className="subcategory-info">
                    <h3 className="subcategory-name">{subcategory.name}</h3>
                    <p className="subcategory-description">{subcategory.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {!showSubcategories && (
            <div className="view-all-container">
              <button onClick={handleExploreClick} className="btn btn-primary">
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="contact-section" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">For Enquiry</h2>
            <p className="contact-description">
              Ready to order your perfect cake? Contact us today!
            </p>
            <div className="contact-details">
              <div className="contact-item" onClick={openGoogleMaps} style={{ cursor: 'pointer' }}>
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Bakery Street, Anna Nagar, Chennai - 600040</p>
                  <small className="click-hint">Click to view on Google Maps</small>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p 
                    onClick={() => makePhoneCall("+919876543210")} 
                    className="clickable"
                  >
                    +91 98765 43210
                  </p>
                  <p 
                    onClick={() => makePhoneCall("+919876543211")} 
                    className="clickable"
                  >
                    +91 98765 43211
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p 
                    onClick={() => sendEmail("hello@icbdelights.com")} 
                    className="clickable"
                  >
                    hello@icbdelights.com
                  </p>
                  <p 
                    onClick={() => sendEmail("orders@icbdelights.com")} 
                    className="clickable"
                  >
                    orders@icbdelights.com
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://instagram.com/icbdelights" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram /> Instagram
              </a>
              <a href="https://facebook.com/icbdelights" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebookF /> Facebook
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }} className="social-link">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;