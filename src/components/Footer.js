import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">

            {/* BRAND */}
            <div className="footer-col brand">
              <img
                src="https://i.ibb.co/wfRyKG2/Construction-Business-Logo-with-Text-NON-TRADE-CEMENT-removebg-preview.png"
                alt="CementBuild Logo"
                className="footer-logo-img"
              />
              <p className="footer-desc">
                Strong foundation solutions for modern construction projects.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="footer-col">
              <h5>Contact Us</h5>

              <p className="footer-contact">
                <i className="bi bi-geo-alt-fill"></i>
                <span>
                  B Wing, 2nd Floor, Ahura Centre, Mahakali Caves Road,
                  Andheri East, Mumbai – 400093
                </span>
              </p>

              <p className="footer-contact">
                <i className="bi bi-telephone-fill"></i>
                <a href="tel:+912245301996">+91 22 4530 1996</a>
              </p>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} CementBuild. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/917450017315"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}
