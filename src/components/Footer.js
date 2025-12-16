import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // yahan future me API call bhi kar sakte ho
    setSuccess(true);
    setEmail("");

    // 3 sec baad message hide
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
      <footer className="footer-main">
        <div className="container">
          <div className="footer-grid">

            {/* BRAND */}
            <div className="footer-col">
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
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* CONTACT US */}
            <div className="footer-col">
              <h5>Contact Us</h5>

              <p className="footer-contact">
                <i className="bi bi-geo-alt-fill"></i>
                <span>
                  B Wing 2nd Floor Ahura Centre Mahakali Caves Road Andheri East Mumbai Maharashtra 4000932
                </span>
              </p>

              <p className="footer-contact">
                <i className="bi bi-telephone-fill"></i>
                <a href="tel:+912245301996">+91 2245301996</a>
              </p>
            </div>


            {/* NEWSLETTER */}
            <div className="footer-col">
              <h5>Newsletter</h5>

              <form onSubmit={handleSubmit} className="footer-form">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Signup</button>
              </form>

              {/* ✅ SUCCESS MESSAGE (EMAIL KE NICHE) */}
              {success && (
                <p className="success-msg">
                  ✅ Subscribed successfully!
                </p>
              )}
            </div>

          </div>


        </div>
      </footer>



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
