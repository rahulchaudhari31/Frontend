import React from "react";
import { FiArrowRight, FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate()
  return (
    <section
      className="about-cta"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "63px 81.5px 67px",
        background: "#00458D",
        isolation: "isolate",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 32px",
          gap: "24px",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "36px",
            lineHeight: "72px",
            textAlign: "center",
            letterSpacing: "-1.28px",
            color: "#FFFFFF",
          }}
        >
          Ready to Build Your Future?
        </h2>

        <p
          style={{
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "28px",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "672px",
          }}
        >
          Whether you are a business looking to fill a critical role or a professional ready for your next step, e2e HRC is here to help. Tell us what you need, and a dedicated consultant will be in touch
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "16px 0 0",
            gap: "16px",
          }}
        >
          <a
            onClick={() => navigate("/contact-us")}
            href="#"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "17px 32px",
              gap: "8px",
              background: "#FFB952",
              borderRadius: "9999px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.7px",
              color: "#004CA5",
              textDecoration: "none",
              boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
            }}
          >
            For Employers
            <FiArrowRight size={16} />
          </a>

          <a
            onClick={() => navigate("/contact-us")}
            href="#"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px 32px",
              gap: "8px",
              border: "1px solid #FFFFFF",
              borderRadius: "9999px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.7px",
              color: "#FFFFFF",
              textDecoration: "none",
              boxSizing: "border-box",
            }}
          >
            For Candidates
            <FiArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
