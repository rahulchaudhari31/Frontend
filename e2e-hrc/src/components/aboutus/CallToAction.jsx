import React from "react";
import { FiArrowRight, FiUpload } from "react-icons/fi";

const CallToAction = () => {
  return (
    <section
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
            fontSize: "15px",
            lineHeight: "28px",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "672px",
          }}
        >
          Whether you are an organization seeking elite talent or a
          professional looking for your next strategic career move, E2E
          Consultancy is your trusted partner.
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
            Submit a Vacancy
            <FiArrowRight size={16} />
          </a>

          <a
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
            Upload CV
            <FiUpload size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
