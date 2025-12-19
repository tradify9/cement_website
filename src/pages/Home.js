import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <section className="cement-slider-section">

        <Carousel id="cementSlider" interval={2000} ride="carousel">
          
          {/* ===== SLIDE 1 ===== */}
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://ccemagazine.com/wp-content/uploads/sites/11/2024/12/Construction-engineering-trends-2024-800x445.png"
              alt="Cement Work"
            />

            <Carousel.Caption className="slider-overlay">
              <h1 className="slider-heading">
                <TypeAnimation
                  sequence={[
                    "Strong Cement for Strong Homes",
                    2000,
                    "Build Safe & Durable Houses",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </h1>

              <p className="slider-para">
                Premium quality cement is the foundation of every strong
                and long-lasting home. It ensures better strength,
                durability, and safety for your dream house.
              </p>

              <div className="slider-buttons">
                {/* <button className="btn btn-yellow">Get Quote</button> */}
                <Link to="/about" className="btn btn-yellow">
                 Get Quote
                </Link>

                {/* ✅ CONTACT US LINK */}
                <Link to="/contact" className="btn btn-outline-yellow">
                  Contact Us
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* ===== SLIDE 2 ===== */}
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://static.vecteezy.com/system/resources/thumbnails/033/027/793/small/business-man-construction-engineers-supervising-progress-of-construction-project-at-construction-site-ai-generate-free-photo.jpg"
              alt="Construction Site"
            />

            <Carousel.Caption className="slider-overlay">
              <h1 className="slider-heading">
                <TypeAnimation
                  sequence={[
                    "Strong Cement for Strong Homes",
                    2000,
                    "Build Safe & Durable Houses",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </h1>

              <p className="slider-para">
                Premium quality cement is the foundation of every strong
                and long-lasting home. It ensures better strength,
                durability, and safety for your dream house.
              </p>

              <div className="slider-buttons">
                {/* <button className="btn btn-yellow">Get Quote</button> */}
                   <Link to="/about" className="btn btn-yellow">
                 Get Quote
                </Link>
                <Link to="/contact" className="btn btn-outline-yellow">
                  Contact Us
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* ===== SLIDE 3 ===== */}
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://st2.depositphotos.com/1001335/9340/i/450/depositphotos_93401314-stock-photo-concept-of-construction-and-design.jpg"
              alt="Home Construction"
            />

            <Carousel.Caption className="slider-overlay">
              <h1 className="slider-heading">
                <TypeAnimation
                  sequence={[
                    "Strong Cement for Strong Homes",
                    2000,
                    "Build Safe & Durable Houses",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </h1>

              <p className="slider-para">
                Premium quality cement is the foundation of every strong
                and long-lasting home. It ensures better strength,
                durability, and safety for your dream house.
              </p>

              <div className="slider-buttons">
                {/* <button className="btn btn-yellow">Get Quote</button> */}
                   <Link to="/about" className="btn btn-yellow">
                 Get Quote
                </Link>
                <Link to="/contact" className="btn btn-outline-yellow">
                  Contact Us
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* ===== SLIDE 4 ===== */}
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://www.e-basel.com/wp-content/uploads/2023/04/Growing-Urbanization-is-Bringing-Robots-into-Construction.jpg"
              alt="Building Material"
            />

            <Carousel.Caption className="slider-overlay">
              <h1 className="slider-heading">
                <TypeAnimation
                  sequence={[
                    "Strong Cement for Strong Homes",
                    2000,
                    "Build Safe & Durable Houses",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </h1>

              <p className="slider-para">
                Premium quality cement is the foundation of every strong
                and long-lasting home. It ensures better strength,
                durability, and safety for your dream house.
              </p>

              <div className="slider-buttons">
                {/* <button className="btn btn-yellow">Get Quote</button> */}
                   <Link to="/about" className="btn btn-yellow">
                 Get Quote
                </Link>
                <Link to="/contact" className="btn btn-outline-yellow">
                  Contact Us
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </section>




            {/* INFO SLIDER SECTION */}
            <section className="py-5 bg-light">
                <div className="container">

                    {/* SECTION HEADING */}
                    <div className="text-center mb-4">
                        <h1>Cement Types We Offer</h1>
                        <p>
                            High-quality cement solutions including PPC, OPC 53 Grade,
                            and OPC 43 Grade for all construction needs.
                        </p>
                    </div>

                    {/* CEMENT TYPE BUTTONS */}
                    <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
                        <button
                            className="btn btn-outline-dark"
                            data-bs-target="#infoSectionSlider"
                            data-bs-slide-to="0"
                        >
                            PPC Cement
                        </button>

                        <button
                            className="btn btn-outline-dark"
                            data-bs-target="#infoSectionSlider"
                            data-bs-slide-to="2"
                        >
                            OPC 53 Grade
                        </button>

                        <button
                            className="btn btn-outline-dark"
                            data-bs-target="#infoSectionSlider"
                            data-bs-slide-to="3"
                        >
                            OPC 43 Grade
                        </button>
                    </div>

                    {/* SLIDER */}
                    <Carousel id="infoSectionSlider">
                        {/* SLIDE 1 – PPC */}
                        <Carousel.Item>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <img
                                        src="https://img.freepik.com/free-photo/woman-african-american-worker-standing-with-plan-factory_1303-30604.jpg?semt=ais_hybrid&w=740&q=80"
                                        className="img-fluid rounded shadow"
                                        alt="PPC Cement"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h3>Portland Pozzolana Cement (PPC)</h3>
                                    <p>
                                        PPC Cement is manufactured by blending clinker with
                                        pozzolanic materials like fly ash. It provides better
                                        durability, improved workability, reduced cracking,
                                        and long-term strength.
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>

                        {/* SLIDE 2 – PPC USE */}
                        <Carousel.Item>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <img
                                        src="https://internal-assets.jswonemsme.com/constructionbucketcrane_1736773373798_5302b25747/constructionbucketcrane_1736773373798_5302b25747.jpeg"
                                        className="img-fluid rounded shadow"
                                        alt="PPC Applications"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h3>PPC Cement – Applications</h3>
                                    <p>
                                        PPC Cement is ideal for plastering, masonry work,
                                        residential buildings, bridges, and marine structures
                                        due to its superior bonding and smooth finish.
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>

                        {/* SLIDE 3 – OPC 53 */}
                        <Carousel.Item>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <img
                                        src="https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/types-of-cement/_jcr_content/root/container/container_1646056284/teaser.coreimg.jpeg/1738760970041/a-quick-guide-to-choosing-the-best-cement-for-your-home-min-min.jpeg"
                                        className="img-fluid rounded shadow"
                                        alt="OPC 53 Grade Cement"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h3>OPC 53 Grade Cement</h3>
                                    <p>
                                        OPC 53 Grade Cement offers very high early strength,
                                        making it suitable for RCC work, columns, beams,
                                        slabs, and high-rise structures where fast strength
                                        gain is required.
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>

                        {/* SLIDE 4 – OPC 43 */}
                        <Carousel.Item>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <img
                                        src="https://www.jkcement.com/wp-content/uploads/2023/08/concrete-block-wall-construction-site-scaled.jpg"
                                        className="img-fluid rounded shadow"
                                        alt="OPC 43 Grade Cement"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h3>OPC 43 Grade Cement</h3>
                                    <p>
                                        OPC 43 Grade Cement provides balanced strength and
                                        durability. It is suitable for general construction,
                                        plastering, flooring, and residential projects.
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>

                        {/* SLIDE 5 – COMPARISON */}
                        <Carousel.Item>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <img
                                        src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-architects-wearing-hardhats-safety-vests-are-working-together-construction-site-building-home-cooperation-teamwork-concept_640221-172.jpg?semt=ais_hybrid&w=740&q=80"
                                        className="img-fluid rounded shadow"
                                        alt="Cement Selection"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h3>Choosing the Right Cement</h3>
                                    <p>
                                        PPC Cement is best for durability and plastering,
                                        OPC 53 Grade is ideal for heavy RCC and fast-track
                                        construction, while OPC 43 Grade is suitable for
                                        general-purpose building work.
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </section>




            {/* CEMENT INFO SECTION WITH ICONS */}
            <section className="py-5">
                <div className="container">

                    {/* SECTION HEADING */}
                    <div className="text-center mb-5">
                        <h2>Our Cement Solutions</h2>
                        <p>
                            High quality cement designed to deliver strength, durability,
                            and long-lasting performance.
                        </p>
                    </div>

                    <div className="row">

                        {/* CARD 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm text-center p-3">
                                <div className="mb-3">
                                    <i className="bi bi-bricks fs-1 text-warning"></i>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">PPC Cement</h3>
                                    <p className="card-text">
                                        Portland Pozzolana Cement (PPC) is made by blending clinker
                                        with fly ash, offering better durability, workability,
                                        and long-term strength.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm text-center p-3">
                                <div className="mb-3">
                                    <i className="bi bi-shield-check fs-1 text-warning"></i>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">High Strength & Durability</h3>
                                    <p className="card-text">
                                        Our cement provides excellent strength, reduces cracks,
                                        and improves resistance against moisture, chemicals,
                                        and harsh weather.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm text-center p-3">
                                <div className="mb-3">
                                    <i className="bi bi-tree fs-1 text-warning"></i>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Eco-Friendly Cement</h3>
                                    <p className="card-text">
                                        PPC Cement uses fly ash, helping reduce environmental
                                        impact while supporting sustainable and green
                                        construction practices.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>








            {/* CONTACT CTA SECTION */}
            <section className="contact-cta-section py-5">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT IMAGE */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="https://img.freepik.com/premium-photo/team-experienced-architects-civil-engineers-analyzing-building-plans-construction-site_308072-4392.jpg"
                                alt="Construction Support"
                                className="img-fluid rounded shadow contact-img"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-md-6">
                            <h2 className="mb-3">
                                Feel free to ask any questions
                            </h2>

                            <p className="mb-4">
                                We’re ready to serve your project with certified quality and
                                zero-delay logistics.
                            </p>

                            <div className="contact-box">

                                {/* ADDRESS */}
                                <div className="d-flex align-items-start mb-3">
                                    <i className="bi bi-geo-alt-fill contact-icon"></i>
                                    <p className="address mb-0">
                                       B Wing 2nd Floor Ahura Centre Mahakali Caves Road Andheri East Mumbai Maharashtra 4000932
                                    </p>
                                </div>

                                {/* PHONE */}
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-telephone-fill contact-icon"></i>
                                    <p className="phone mb-0">
                                        +91 2245301996
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>




        </>
    );
}
