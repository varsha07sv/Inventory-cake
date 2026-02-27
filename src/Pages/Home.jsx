import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBirthdayCake, FaLeaf, FaHeart,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaInstagram, FaFacebookF, FaWhatsapp,
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import OurProducts from "../Components/Ourproducts";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hi! I'm interested in ordering a cake from ICB Delights.");
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
  };

  const openGoogleMaps = () => {
    const addr = encodeURIComponent("123 Bakery Street, Anna Nagar, Chennai - 600040");
    window.open(`https://www.google.com/maps/search/?api=1&query=${addr}`, "_blank");
  };

  return (
    <div className="home">

      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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

      <OurProducts />

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose ICB Delights?</h2>
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

      <section id="contact-section" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">For <span className="highlight">Enquiry</span></h2>
            <p className="contact-description">Ready to order your perfect cake? Contact us today!</p>

            <div className="contact-details">
              <div className="contact-item" onClick={openGoogleMaps} style={{ cursor: "pointer" }}>
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Bakery Street, Anna Nagar, Chennai - 600040</p>
                  <small style={{ color: "#f3e5f5", fontSize: "0.8rem" }}>Click to open Google Maps</small>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaPhoneAlt /></div>
                <div>
                  <h4>Call Us</h4>
                  <p style={{ cursor: "pointer" }} onClick={() => window.location.href = "tel:+919876543210"}>+91 98765 43210</p>
                  <p style={{ cursor: "pointer" }} onClick={() => window.location.href = "tel:+919876543211"}>+91 98765 43211</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email Us</h4>
                  <p style={{ cursor: "pointer" }} onClick={() => window.location.href = "mailto:hello@icbdelights.com"}>hello@icbdelights.com</p>
                  <p style={{ cursor: "pointer" }} onClick={() => window.location.href = "mailto:orders@icbdelights.com"}>orders@icbdelights.com</p>
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