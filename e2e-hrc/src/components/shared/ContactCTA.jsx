import React from "react";
import "./ContactCTA.css";

export default function ContactCTA() {
  return (
    <section className="workforce-section">
      <div className="left-content">
        <div className="badge">
          <span className="badge-dot"></span>
          Ready to get started?
        </div>

        <h1>
          Let's Build <span>Success</span>
          <br />
          Together
        </h1>

        <p>
          Whether you're hiring exceptional talent or searching for your next
          opportunity, we are here to help every step of the way.
        </p>

        <div className="features">
          <div className="feature">
            <span>✓</span>
            Dedicated consultant assigned to you
          </div>

          <div className="feature">
            <span>✓</span>
            Response within 24 hours
          </div>
        </div>

        <div className="buttons">
          <button className="btn-primary">
            Hire Talent <span>→</span>
          </button>

          <button className="btn-secondary">
            Explore Opportunities
          </button>
        </div>
      </div>

      <div className="contact-card">
        <div className="placeholder-icon">
          📩
        </div>

        <h2>Get in Touch with Our Employee Team</h2>

        <p className="form-description">
          Have questions about job opportunities, applications, or workplace
          support? Fill out the form below and our team will get back to you
          shortly.
        </p>

        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" placeholder="+91 (000) 000-0000" />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
