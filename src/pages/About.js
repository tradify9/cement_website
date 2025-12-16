import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="container text-center">
          <h1 data-aos="fade-up">About CementBuild</h1>
          <p data-aos="fade-up" data-aos-delay="150">
            Delivering quality cement solutions that build strong
            foundations for a better future.
          </p>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <div className="container py-5">
        <div className="row align-items-center mb-5">

          {/* TEXT */}
          <div className="col-md-6" data-aos="fade-right">
            <h2>Who We Are</h2>
            <p>
              CementBuild is a trusted cement solutions provider committed
              to delivering high-quality cement products across India.
              We work with reputed non-trade cement manufacturers to ensure
              consistent quality, strength, and durability.
            </p>
            <p>
              Our focus is on reliability, transparency, and customer
              satisfaction — ensuring every project is supported with
              certified materials and timely delivery.
            </p>
          </div>

          {/* IMAGE */}
          <div className="col-md-6" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt="Cement Manufacturing"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* ICON SECTION */}
        <div className="row text-center">

          {/* QUALITY */}
          <div className="col-md-4 mb-4" data-aos="zoom-in">
            <div className="about-card">
              <i className="bi bi-patch-check-fill"></i>
              <h3>Certified Quality</h3>
              <p>
                We supply only quality-tested cement sourced from
                trusted manufacturers, ensuring long-lasting strength
                and performance.
              </p>
            </div>
          </div>

          {/* DELIVERY */}
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="150">
            <div className="about-card">
              <i className="bi bi-truck"></i>
              <h3>Pan-India Delivery</h3>
              <p>
                With a strong logistics network, we ensure fast and
                reliable delivery to construction sites across India.
              </p>
            </div>
          </div>

          {/* PRICING */}
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="about-card">
              <i className="bi bi-currency-rupee"></i>
              <h3>Best Value Pricing</h3>
              <p>
                Competitive wholesale pricing that helps builders and
                contractors stay within budget without compromising quality.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
