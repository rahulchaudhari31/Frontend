import React from "react";
import office2 from "../../assets/image/office 2.png";

const BridgingGap = () => {
  const heading = "Bridging the Gap Between Ambition and Achievement";
  const description = "Since our inception, E2E HRC has been more than just a matching service. We are strategic growth partners. We specialize in deep-market intelligence, identifying the unique DNA of organizations and the professionals who can lead them into the next decade.";
  const features = [
    "Personalized consultancy that prioritizes culture and fit.",
    "Unrivaled access to passive talent pools globally.",
    "Data-driven screening processes for precision matching.",
  ];

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "60px 113.5px",
        background: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "60px",
          width: "100%",
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "500px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "500px",
              height: "420px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
              border: "1px solid rgba(194,198,212,0.2)",
            }}
          >
            <img
              src={office2}
              alt="Bridging the Gap"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            minWidth: 0,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "36px",
              lineHeight: "48px",
              letterSpacing: "-0.48px",
              color: "#191C1E",
            }}
          >
            {heading}
          </h2>

          <div style={{ width: "64px", height: "4px", background: "#00458D" }} />

          <p
            style={{
              margin: 0,
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#424752",
              marginTop: "8px",
            }}
          >
            {description}
          </p>

          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            {features.map((feature, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#424752",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "8px",
                    height: "8px",
                    marginTop: "10px",
                    background: "#00458D",
                    borderRadius: "2px",
                  }}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BridgingGap;
