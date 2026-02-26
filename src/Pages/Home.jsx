import React, { useState, useEffect } from "react";
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
  FaArrowLeft,
  FaStar,
  FaQuoteRight,
  FaUserFriends,
  FaAward,
  FaSmile
} from "react-icons/fa";
import { MdDeliveryDining, MdCelebration, MdDiscount } from "react-icons/md";
import { GiCakeSlice, GiCupcake, GiChocolateBar } from "react-icons/gi";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const handleProductClick = (productName) => {
    const isLoggedIn = false; // Replace with actual auth check
    
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      // Navigate directly to products page with category
      navigate(`/products?category=${productName.toLowerCase().replace(' ', '-')}`);
    }
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
    const message = encodeURIComponent("Hi! I'm interested in ordering from ICB Delights.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Birthday Celebration",
      image: "https://images.unsplash.com/photo-1494790108755-27193f48e3f2?w=150&h=150&fit=crop",
      quote: "The cake was absolutely beautiful and delicious! Everyone at the party loved it. Will definitely order again.",
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Anniversary Gift",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      quote: "Best bakery in town! The attention to detail and taste is exceptional. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Neha Gupta",
      role: "Wedding Cake",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      quote: "They created our dream wedding cake. It was stunning and tasted even better than it looked!",
      rating: 5
    }
  ];

  const products = [
    { 
      id: 1, 
      name: "Cakes", 
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format", 
      description: "Delicious layered cakes for every occasion",
      icon: <GiCakeSlice />,
      color: "#9b6b9d"
    },
    { 
      id: 2, 
      name: "Bento Cakes", 
      image: "https://images.unsplash.com/photo-1627308595171-d1b5d671a41f?w=500&auto=format", 
      description: "Personalized mini cakes in a box",
      icon: <GiCupcake />,
      color: "#b185b3"
    },
    { 
      id: 3, 
      name: "Cup Cakes", 
      image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&auto=format", 
      description: "Perfectly portioned sweet treats",
      icon: <GiCupcake />,
      color: "#d9b0d9"
    },
    { 
      id: 4, 
      name: "Brownie", 
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format", 
      description: "Rich, fudgy chocolate brownies",
      icon: <GiChocolateBar />,
      color: "#c8a2c8"
    },
    { 
      id: 5, 
      name: "Jar Cake", 
      image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&auto=format", 
      description: "Layered cakes in convenient jars",
      icon: <GiCakeSlice />,
      color: "#f3e5f5"
    },
    { 
      id: 6, 
      name: "Cookies", 
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format", 
      description: "Freshly baked, crunchy cookies",
      icon: <GiCakeSlice />,
      color: "#e8d3ea"
    },
    { 
      id: 7, 
      name: "Celebration Cake", 
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&auto=format", 
      description: "Grand cakes for special moments",
      icon: <GiCakeSlice />,
      color: "#9b6b9d"
    },
    { 
      id: 8, 
      name: "Desserts", 
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format", 
      description: "Assorted premium desserts",
      icon: <GiCakeSlice />,
      color: "#b185b3"
    },
    { 
      id: 9, 
      name: "Chocolates", 
      image: "https://images.unsplash.com/photo-1606312619071-d5b523a1fdbd?w=500&auto=format", 
      description: "Handcrafted chocolate delights",
      icon: <GiChocolateBar />,
      color: "#d9b0d9"
    }
  ];

  return (
    <div className="home">
    
      <section className="hero">
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
              background: `rgba(155, 107, 157, ${0.1 + Math.random() * 0.3})`
            }} />
          ))}
        </div>
        <div className="hero-content">
          <span className="hero-subtitle animate-pop">WELCOME TO</span>
          <h1 className="hero-title animate-slide-up">
            ICB <span className="highlight">Delights</span>
          </h1>
          <p className="hero-description animate-slide-up">
            Crafting sweet memories with every bite. Freshly baked, lovingly decorated cakes for your special moments.
          </p>
          <div className="hero-buttons animate-slide-up">
            <button onClick={handleExploreClick} className="btn btn-primary btn-glow">
              <span>Explore Cakes</span>
              <FaChevronRight className="btn-icon" />
            </button>
            <button onClick={handleContactClick} className="btn btn-secondary btn-border-pulse">
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#f8f0fc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ICB Delights ?</h2>
            <p className="section-description">We make every moment special with our delicious creations</p>
          </div>
          <div className="features-grid">
            <div className="feature-card card-hover">
              <div className="feature-icon">
                <FaBirthdayCake />
              </div>
              <h3>Custom Designs</h3>
              <p>Personalized cakes tailored to your vision</p>
              <div className="card-shine"></div>
            </div>
            <div className="feature-card card-hover">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Premium Ingredients</h3>
              <p>Only the finest ingredients in every creation</p>
              <div className="card-shine"></div>
            </div>
            <div className="feature-card card-hover">
              <div className="feature-icon">
                <MdDeliveryDining />
              </div>
              <h3>Fast Delivery</h3>
              <p>Free delivery within Chennai city limits</p>
              <div className="card-shine"></div>
            </div>
            <div className="feature-card card-hover">
              <div className="feature-icon">
                <FaHeart />
              </div>
              <h3>Occasion Specialists</h3>
              <p>Expert in all celebrations</p>
              <div className="card-shine"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="products-section" className="products-showcase">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-description">
              Explore our delicious range of freshly baked treats
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="product-card float-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                      View Product <FaChevronRight />
                    </span>
                  </div>
                  <div className="product-badge" style={{ background: product.color }}>
                    New
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
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
              <div className="contact-item" onClick={openGoogleMaps}>
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
                  <p onClick={() => makePhoneCall("+919876543210")} className="clickable">
                    +91 98765 43210
                  </p>
                  <p onClick={() => makePhoneCall("+919876543211")} className="clickable">
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
                  <p onClick={() => sendEmail("hello@icbdelights.com")} className="clickable">
                    hello@icbdelights.com
                  </p>
                  <p onClick={() => sendEmail("orders@icbdelights.com")} className="clickable">
                    orders@icbdelights.com
                  </p>
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