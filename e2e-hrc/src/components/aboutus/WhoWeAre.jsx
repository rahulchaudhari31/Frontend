import React, { useEffect, useState } from "react";
import { getBridgingSection } from "../../services/about/bridgingService";

const BridgingGap = () => {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBridgingSection();
        setSectionData(response?.data || null);
      } catch {
        // use defaults
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <section style={{ width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "60px 113.5px", background: "#FFFFFF", fontFamily: "'Inter', sans-serif", boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
          <div style={{ width: "200px", height: "20px", background: "#E2E8F0", borderRadius: "4px" }} />
          <div style={{ width: "100%", height: "40px", background: "#E2E8F0", borderRadius: "4px" }} />
          <div style={{ width: "100%", height: "80px", background: "#E2E8F0", borderRadius: "4px" }} />
        </div>
      </section>
    );
  }

  const heading = sectionData?.heading || "Bridging the Gap Between Ambition and Achievement";
  const description = sectionData?.description || "Since our inception, E2E HRC has been more than just a matching service. We are strategic growth partners. We specialize in deep-market intelligence, identifying the unique DNA of organizations and the professionals who can lead them into the next decade.";
  const features = [
    sectionData?.feature1 || "Personalized consultancy that prioritizes culture and fit.",
    sectionData?.feature2 || "Unrivaled access to passive talent pools globally.",
    sectionData?.feature3 || "Data-driven screening processes for precision matching.",
  ].filter((f) => f && f.toString().trim() !== "");

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
        {/* Left side - Image */}
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
              src={sectionData?.image || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"}
              alt="Bridging the Gap"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* Right side - Content */}
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
          {/* Heading */}
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

          {/* Blue underline */}
          <div style={{ width: "64px", height: "4px", background: "#00458D" }} />

          {/* Description */}
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

          {/* Feature bullets */}

          <ul className="flex flex-col gap-4" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {features.map((feature, index) => (
              <li key={index} className="flex gap-4 items-start">
                <span
                  className="shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginTop: "4px",
                    background: "#00458D",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span
                  className="font-inter text-base"
                  style={{ lineHeight: "24px", color: "#191C1E" }}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default BridgingGap;




{/* Checklist */ }
