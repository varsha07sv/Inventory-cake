import React from "react";
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
  FaStar,
  FaChevronRight
} from "react-icons/fa";
import { MdCake, MdDeliveryDining } from "react-icons/md";
import { GiCupcake, GiChocolateBar } from "react-icons/gi";
import { IoMdHappy } from "react-icons/io";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const handleExploreClick = (e) => {
    e.preventDefault();
    // Check if user is logged in (you can modify this based on your auth logic)
    const isLoggedIn = false; // Replace with actual auth check
    
    if (!isLoggedIn) {
      // Redirect to login page
      navigate('/login');
    } else {
      navigate('/products');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    // Scroll to contact section
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
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
    const phoneNumber = "919876543210"; // Without + and spaces
    const message = encodeURIComponent("Hi! I'm interested in ordering a cake from ICB Delights.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="home">
      <section 
        className="hero" 
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
          url('https://images.unsplash.com/photo-1562777717-dc6984f65a63?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white'
        }}
      >
        <div className="hero-content">
          <span className="hero-subtitle">Welcome to</span>
          <h1 className="hero-title" style={{ fontFamily: "'Dancing Script', cursive", fontSize: '4rem' }}>
            ICB <span className="highlight">Delights</span>
          </h1>
          <p className="hero-description">
            Crafting sweet memories with every bite. Freshly baked, 
            lovingly decorated cakes for your special moments.
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
          <h2 className="section-title">Why Choose <span className="highlight">ICB Delights?</span></h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaBirthdayCake />
              </div>
              <h3>Custom Designs</h3>
              <p>Personalized cakes tailored to your vision and preferences</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Premium Ingredients</h3>
              <p>Only the finest, freshest ingredients in every creation</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <MdDeliveryDining />
              </div>
              <h3>Fast Delivery</h3>
              <p>Complimentary delivery within Chennai city limits</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaHeart />
              </div>
              <h3>Occasion Specialists</h3>
              <p>Expert in birthdays, weddings, and all celebrations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="works">
        <div className="container">
          <h2 className="section-title">Our Latest <span className="highlight">Creations</span></h2>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Elegant birthday cake with flowers"
              />
              <div className="gallery-overlay">
                <span>Birthday Special</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Elegant wedding cake"
              />
              <div className="gallery-overlay">
                <span>Wedding Elegance</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Rich chocolate cake"
              />
              <div className="gallery-overlay">
                <span>Chocolate Delight</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Fresh fruit cake"
              />
              <div className="gallery-overlay">
                <span>Fusion Flavors</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Assorted cupcakes"
              />
              <div className="gallery-overlay">
                <span>Cupcake Collection</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1551024702-36f0d337b01d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Special occasion cake with sprinkles"
              />
              <div className="gallery-overlay">
                <span>Special Moments</span>
              </div>
            </div>
          </div>
          
          <div className="gallery-cta">
            <Link to="/products" className="btn btn-primary">
              View All Cakes <FaChevronRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section id="contact-section" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">For Enquiry <span className="highlight">Touch</span></h2>
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
                  <p className="click-hint">Click to view on Google Maps</p>
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
                    style={{ cursor: 'pointer', color: '#007bff' }}
                  >
                    +91 98765 43210
                  </p>
                  <p 
                    onClick={() => makePhoneCall("+919876543211")} 
                    style={{ cursor: 'pointer', color: '#007bff' }}
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
                    style={{ cursor: 'pointer', color: '#007bff' }}
                  >
                    hello@icbdelights.com
                  </p>
                  <p 
                    onClick={() => sendEmail("orders@icbdelights.com")} 
                    style={{ cursor: 'pointer', color: '#007bff' }}
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