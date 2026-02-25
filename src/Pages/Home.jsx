import React from "react";
import { Link } from "react-router-dom";
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
  FaTwitter,
  FaStar,
  FaChevronRight
} from "react-icons/fa";
import { MdCake, MdDeliveryDining } from "react-icons/md";
import { GiCupcake, GiChocolateBar } from "react-icons/gi";
import { IoMdHappy } from "react-icons/io";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">Welcome to</span>
          <h1 className="hero-title">
            ICB <span className="highlight">Delights</span>
          </h1>
          <p className="hero-description">
            Crafting sweet memories with every bite. Freshly baked, 
            lovingly decorated cakes for your special moments.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Cakes
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3"
            alt="Celebration cake"
          />
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
              <h3>Free Delivery</h3>
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

      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Our Sweet <span className="highlight">Story</span></h2>
              <p className="about-description">
                At ICB Delights, we believe every celebration deserves a perfect cake. 
                Founded in 2020, we've been spreading joy through our exquisite creations 
                across Chennai. Our passion for baking and attention to detail ensures 
                that each cake is not just a dessert, but a centerpiece of your special moments.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Cakes Delivered</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Cake Designs</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6f6?ixlib=rb-4.0.3"
                alt="Our bakery"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="works">
        <div className="container">
          <h2 className="section-title">Our Latest <span className="highlight">Creations</span></h2>
          <p className="section-subtitle">Browse through our recent masterpieces</p>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1605478900896-9c7d8f7fbe5d?ixlib=rb-4.0.3"
                alt="Elegant birthday cake"
              />
              <div className="gallery-overlay">
                <span>Birthday Special</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1542826438-1e0d0d1e8f52?ixlib=rb-4.0.3"
                alt="Wedding cake"
              />
              <div className="gallery-overlay">
                <span>Wedding Elegance</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3"
                alt="Chocolate cake"
              />
              <div className="gallery-overlay">
                <span>Chocolate Delight</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3"
                alt="Fruit cake"
              />
              <div className="gallery-overlay">
                <span>Fusion Flavors</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3"
                alt="Cupcakes"
              />
              <div className="gallery-overlay">
                <span>Cupcake Collection</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3"
                alt="Special occasion cake"
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

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our <span className="highlight">Customers Say</span></h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="testimonial-text">
                "The cake was absolutely beautiful and delicious! Everyone at the party loved it. 
                Thank you ICB Delights for making my daughter's birthday extra special."
              </p>
              <div className="testimonial-author">
                <strong>Priya Sharma</strong>
                <span>Birthday Celebration</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="testimonial-text">
                "Ordered a wedding cake and it exceeded all expectations. 
                The design was perfect and the taste was heavenly. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <strong>Rahul Mehta</strong>
                <span>Wedding Anniversary</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="testimonial-text">
                "Their attention to detail and customer service is outstanding. 
                The custom design they created for our corporate event was a huge hit!"
              </p>
              <div className="testimonial-author">
                <strong>Ananya Reddy</strong>
                <span>Corporate Event</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
            <p className="contact-description">
              Ready to order your perfect cake? Contact us today!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Bakery Street, Anna Nagar, Chennai - 600040</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@icbdelights.com</p>
                  <p>orders@icbdelights.com</p>
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
              <a href="#" className="social-link">
                <FaInstagram /> Instagram
              </a>
              <a href="#" className="social-link">
                <FaFacebookF /> Facebook
              </a>
              <a href="#" className="social-link">
                <FaTwitter /> Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get updates on new flavors and special offers!</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;