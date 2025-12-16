import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <img
              src="https://i.pinimg.com/originals/6c/67/ce/6c67ce1557d591b11d36100307ad5c30.gif"
              alt="Contact Support"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="contact-form-box">
              <h3 className="mb-3">Send Your Requirement</h3>

              {/* 📍 ADDRESS WITH ICON */}
              <div className="contact-address mb-4">
                <i className="bi bi-geo-alt-fill"></i>
                <span>
                  B Wing 2nd Floor Ahura Centre Mahakali Caves Road Andheri East Mumbai Maharashtra 4000932
                </span>
              </div>

              <form
                action="https://formsubmit.co/nontradebalkcement@gmail.com"
                method="POST"
              >
                {/* SECURITY */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  className="form-control mb-3"
                  placeholder="Your Name"
                  required
                />

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  className="form-control mb-3"
                  placeholder="Your Email ID"
                  required
                />

                {/* GST NO */}
                <input
                  type="text"
                  name="gst"
                  className="form-control mb-3"
                  placeholder="GST Number"
                  required
                />

                {/* QUANTITY */}
                <input
                  type="number"
                  name="quantity"
                  className="form-control mb-3"
                  placeholder="Quantity (in Bags)"
                  min="1"
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "0") {
                      e.preventDefault();
                    }
                  }}
                  required
                />

                {/* SELECT PRODUCT */}
                <select
                  name="product"
                  className="form-select mb-3"
                  required
                >
                  <option value="">Select Product</option>
                  <option value="Trade Cement">Trade Cement</option>
                  <option value="Non Trade Cement">Non Trade Cement</option>
                  <option value="OPC 53 Grade">OPC 53 Grade</option>
                  <option value="OPC 43 Grade">OPC 43 Grade</option>
                  <option value="OPC 33 Grade">OPC 33 Grade</option>
                  <option value="PPC">PPC</option>
                </select>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  className="form-control mb-3"
                  placeholder="Additional Message (Optional)"
                  rows="4"
                />

                {/* SUBMIT */}
                <button className="btn btn-warning w-100 fw-bold">
                  Submit Enquiry
                </button>
              </form>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
