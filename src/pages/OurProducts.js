import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurProducts.css";

export default function OurProducts() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <>


    {/* IMAGE ONLY SECTION */}
<section className="mt-3">
  <div className="container-fluid p-0">
    <img
      src="https://media.istockphoto.com/id/533899972/photo/engineer-architect-construction-site-planning-concept.jpg?s=612x612&w=0&k=20&c=ysoe9wUHnV1Mf41jcLqNVzD3CfpfytONODI5xlrbVKQ="
      alt="Construction Site"
      className="img-fluid w-100"
      style={{ height: "300px", objectFit: "cover" }}
    />
  </div>
</section>


    <section className="our-products-page py-5">
      <div className="container">

        {/* PAGE HEADING */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h1>Our Products</h1>
          <p className="page-subtitle">
            High-quality cement solutions engineered for strength,
            durability, and long-lasting performance.
          </p>
        </div>

        <div className="row">

          {/* PPC */}
          <div className="col-md-4 mb-4" data-aos="fade-up">
            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/11/358206316/JX/TF/YC/12852022/zuari-portland-pozzolana-cement.jpeg"
                  alt="PPC Cement"
                />
              </div>
              <h3>Portland Pozzolana Cement (PPC)</h3>
              <p>
                PPC Cement provides superior durability, better
                workability, and reduced cracking. Ideal for residential,
                commercial, and marine construction.
              </p>
            </div>
          </div>

          {/* OPC 53 */}
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/types-of-cement/_jcr_content/root/container/container_1646056284/teaser.coreimg.jpeg"
                  alt="OPC 53 Cement"
                />
              </div>
              <h3>OPC 53 Grade Cement</h3>
              <p>
                OPC 53 Grade Cement offers high early strength, making it
                suitable for RCC work, columns, beams, slabs, and
                high-rise structures.
              </p>
            </div>
          </div>

          {/* OPC 43 */}
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://www.jkcement.com/wp-content/uploads/2023/08/concrete-block-wall-construction-site-scaled.jpg"
                  alt="OPC 43 Cement"
                />
              </div>
              <h3>OPC 43 Grade Cement</h3>
              <p>
                OPC 43 Grade Cement delivers balanced strength and
                durability for general construction, plastering,
                flooring, and masonry work.
              </p>
            </div>
          </div>

          {/* PSC */}
          <div className="col-md-6 mb-4" data-aos="fade-up">
            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                  alt="PSC Cement"
                />
              </div>
              <h3>Portland Slag Cement (PSC)</h3>
              <p>
                PSC Cement provides excellent resistance against chemical
                attacks and is widely used in marine structures,
                bridges, and coastal projects.
              </p>
            </div>
          </div>

          {/* SPECIAL */}
          <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="product-card">
              <div className="product-img">
                <img
                  src="https://s7ap1.scene7.com/is/image/TslDXP/cement-the-foundation-of-modern-construction?fmt=webp-alpha"
                  alt="Special Cement"
                />
              </div>
              <h3>Special & Blended Cement</h3>
              <p>
                Customized blended cement solutions developed for
                specific project requirements, ensuring superior
                performance and long service life.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>



    {/* WHY CHOOSE US SECTION */}
<section className="why-choose-us py-5">
  <div className="container">

    {/* HEADING */}
    <div className="text-center mb-5">
      <h2>Why Choose Us</h2>
      <p>
        Trusted cement solutions backed by quality, reliability,
        and competitive pricing.
      </p>
    </div>

    <div className="row text-center">

      {/* QUALITY */}
      <div className="col-md-4 mb-4">
        <div className="choose-card h-100">
          <div className="icon-box">
            <i className="bi bi-patch-check-fill"></i>
          </div>
          <h3>High-Quality Cement Guaranteed</h3>
          <p>
            Cement Online, quality is non-negotiable. We source only
            from reputable non-trade cement suppliers and conduct
            stringent quality checks.
          </p>
        </div>
      </div>

      {/* DELIVERY */}
      <div className="col-md-4 mb-4">
        <div className="choose-card h-100">
          <div className="icon-box">
            <i className="bi bi-truck"></i>
          </div>
          <h3>Fast & Reliable Delivery</h3>
          <p>
            With our extensive distribution network, we ensure quick
            and efficient delivery to your site, no matter where you
            are in India.
          </p>
        </div>
      </div>

      {/* PRICING */}
      <div className="col-md-4 mb-4">
        <div className="choose-card h-100">
          <div className="icon-box">
            <i className="bi bi-currency-rupee"></i>
          </div>
          <h3>Competitive Wholesale Pricing</h3>
          <p>
            We offer cost-effective pricing that helps you stay within
            budget without compromising on cement quality.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
}
