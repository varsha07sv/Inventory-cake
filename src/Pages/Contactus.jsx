import React, { useState } from "react";
import { FaUser, FaMobile, FaEnvelope, FaCalendar, FaCity, FaMapMarkerAlt } from "react-icons/fa";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    date: "",
    month: "01",
    day: "00",
    ampm: "AM",
    city: "",
    zipCode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Enquiry submitted successfully!");
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      date: "",
      month: "01",
      day: "00",
      ampm: "AM",
      city: "",
      zipCode: ""
    });
  };

  // Generate options for days (1-31)
  const dayOptions = [];
  for (let i = 1; i <= 31; i++) {
    dayOptions.push(<option key={i} value={i.toString().padStart(2, '0')}>{i.toString().padStart(2, '0')}</option>);
  }

  // Generate options for months (1-12)
  const monthOptions = [];
  for (let i = 1; i <= 12; i++) {
    monthOptions.push(<option key={i} value={i.toString().padStart(2, '0')}>{i.toString().padStart(2, '0')}</option>);
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Enquiry <span className="highlight">Form</span></h1>
          <p className="contact-subtitle">We'd love to hear from you! Please fill out the form below.</p>
        </div>

        <div className="contact-wrapper">
          {/* Left side - Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-title">Get in Touch</h3>
              <p className="info-description">
                Have questions about our cakes? Want to place a custom order? 
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <div className="info-details">
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>+91 98765 43210</p>
                    <p>+91 98765 43211</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>hello@icbdelights.com</p>
                    <p>orders@icbdelights.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <MdLocationOn className="info-icon" />
                  <div>
                    <h4>Address</h4>
                    <p>123 Bakery Street,</p>
                    <p>Anna Nagar, Chennai - 600040</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <MdAccessTime className="info-icon" />
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enquiry Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    First Name: <span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Last Name: <span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Mobile: <span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <FaMobile className="input-icon" />
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Email: <span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Requirement Date & Time: <span className="required">*</span>
                </label>
                <div className="datetime-group">
                  <div className="date-input">
                    <FaCalendar className="datetime-icon" />
                    <input
                      type="text"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      placeholder="DD/MM/YYYY"
                      pattern="\d{2}/\d{2}/\d{4}"
                      className="date-field"
                    />
                  </div>
                  <span className="datetime-separator">▼</span>
                  <select 
                    name="day" 
                    value={formData.day} 
                    onChange={handleChange}
                    className="datetime-select"
                  >
                    {dayOptions}
                  </select>
                  <span className="datetime-separator">▼</span>
                  <select 
                    name="month" 
                    value={formData.month} 
                    onChange={handleChange}
                    className="datetime-select"
                  >
                    {monthOptions}
                  </select>
                  <span className="datetime-separator">▼</span>
                  <select 
                    name="ampm" 
                    value={formData.ampm} 
                    onChange={handleChange}
                    className="datetime-select"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
                <small className="datetime-hint">Format: DD/MM/YYYY | Day | Month | AM/PM</small>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    City: <span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <FaCity className="input-icon" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Zip Code: <span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <FaMapMarkerAlt className="input-icon" />
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="Enter zip code"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn-submit">
                  SUBMIT
                </button>
                <button type="button" onClick={handleReset} className="btn-reset">
                  RESET
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;