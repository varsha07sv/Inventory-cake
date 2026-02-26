import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaBirthdayCake, FaLeaf, FaHeart,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaClock, FaInstagram, FaFacebookF, FaWhatsapp,
  FaChevronRight
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import "../styles/Home.css";

/* ── Route map — name shown on card → react-router path ── */
const PRODUCTS = [
  { id:1, name:"Cakes",             route:"/cakes",        image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format", description:"Delicious layered cakes for every occasion" },
  { id:2, name:"Bento Cakes",       route:"/bentocakes",   image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format", description:"Personalized mini cakes in a box" },
  { id:3, name:"Cup Cakes",         route:"/cupcakes",     image:"https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&auto=format", description:"Perfectly portioned sweet treats" },
  { id:4, name:"Brownie",           route:"/brownie",      image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format", description:"Rich, fudgy chocolate brownies" },
  { id:5, name:"Jar Cake",          route:"/jarcake",      image:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format", description:"Layered cakes in convenient jars" },
  { id:6, name:"Cookies",           route:"/cookies",      image:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format", description:"Freshly baked, crunchy cookies" },
  { id:7, name:"Celebration Cake",  route:"/celebration",  image:"https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&auto=format", description:"Grand cakes for special moments" },
  { id:8, name:"Desserts",          route:"/desserts",     image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format", description:"Assorted premium desserts" },
  { id:9, name:"Chocolates",        route:"/chocolates",   image:"https://images.unsplash.com/photo-1606312619071-d5b523a1fdbd?w=500&auto=format", description:"Handcrafted chocolate delights" },
];

function Home() {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const openGoogleMaps = () => {
    const addr = encodeURIComponent("123 Bakery Street, Anna Nagar, Chennai - 600040");
    window.open(`https://www.google.com/maps/search/?api=1&query=${addr}`, "_blank");
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hi! I'm interested in ordering a cake from ICB Delights.");
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
  };

  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">WELCOME TO</span>
          <h1 className="hero-title">ICB <span className="highlight">Delights</span></h1>
          <p className="hero-description">
            Crafting sweet memories with every bite. Freshly baked,
            lovingly decorated cakes for your special moments.
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate("/cakes")} className="btn btn-primary">
              Explore Cakes
            </button>
            <a href="#contact" onClick={handleContactClick} className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="highlight">ICB Delights?</span></h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaBirthdayCake /></div>
              <h3>Custom Designs</h3>
              <p>Personalized cakes tailored to your vision</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaLeaf /></div>
              <h3>Premium Ingredients</h3>
              <p>Only the finest ingredients in every creation</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><MdDeliveryDining /></div>
              <h3>Fast Delivery</h3>
              <p>Free delivery within Chennai city limits</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaHeart /></div>
              <h3>Occasion Specialists</h3>
              <p>Expert in all celebrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Showcase ── */}
      <section className="products-showcase">
        <div className="container">
          <h2 className="section-title">Our <span className="highlight">Products</span></h2>
          <p className="section-subtitle">Explore our delicious range of freshly baked treats</p>

          <div className="products-grid">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="product-card"
                onClick={() => navigate(p.route)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(p.route)}
              >
                <div className="product-image-wrapper">
                  <img src={p.image} alt={p.name} className="product-image" loading="lazy" />
                  <div className="product-overlay">
                    <span className="view-product">View Varieties <FaChevronRight /></span>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-description">{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-container">
            <button onClick={() => navigate("/cakes")} className="btn btn-primary">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact-section" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">For <span className="highlight">Enquiry</span></h2>
            <p className="contact-description">Ready to order your perfect cake? Contact us today!</p>

            <div className="contact-details">
              <div className="contact-item" onClick={openGoogleMaps} style={{ cursor:"pointer" }}>
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Bakery Street, Anna Nagar, Chennai - 600040</p>
                  <small style={{ color:"#805ad5", fontSize:"0.8rem" }}>Click to open Google Maps</small>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaPhoneAlt /></div>
                <div>
                  <h4>Call Us</h4>
                  <p style={{ cursor:"pointer", color:"#805ad5" }} onClick={() => window.location.href="tel:+919876543210"}>+91 98765 43210</p>
                  <p style={{ cursor:"pointer", color:"#805ad5" }} onClick={() => window.location.href="tel:+919876543211"}>+91 98765 43211</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email Us</h4>
                  <p style={{ cursor:"pointer", color:"#805ad5" }} onClick={() => window.location.href="mailto:hello@icbdelights.com"}>hello@icbdelights.com</p>
                  <p style={{ cursor:"pointer", color:"#805ad5" }} onClick={() => window.location.href="mailto:orders@icbdelights.com"}>orders@icbdelights.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaClock /></div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p>Sunday: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://instagram.com/icbdelights" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /> Instagram</a>
              <a href="https://facebook.com/icbdelights" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebookF /> Facebook</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }} className="social-link"><FaWhatsapp /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
