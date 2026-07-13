import React from "react";
import bgImage from "../../assets/image/About us image.jpg";

export default function HeroSection() {
  const subtitle = "Trusted";
  const description = "We are more than a recruitment agency; we are strategic partners in your growth. E2E Consultancy connects visionary organizations with exceptional human capital across the globe, ensuring precision, compliance, and long-term success.";
  const button1Text = "Submit a Vacancy";
  const button1Link = "#";
  const button2Text = "Upload CV";
  const button2Link = "#";

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "480px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(10,20,40,0.25) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "620px",
          padding: "48px 64px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "20px",
            backdropFilter: "blur(4px)",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
            }}
          />
          <span
            style={{
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {subtitle}
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "48px",
            lineHeight: 1.15,
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>Connecting Talent.</span>
          <br />
          <span style={{ color: "#004CA5" }}>Building Futures.</span>
        </h1>

        <p
          style={{
            marginTop: "20px",
            marginBottom: "32px",
            fontSize: "16px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.85)",
            maxWidth: "540px",
          }}
        >
          {description}
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {button1Text ? (
            <a
              href={button1Link}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f59e0b",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                padding: "14px 26px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {button1Text} <span aria-hidden="true">&#8594;</span>
            </a>
          ) : null}

          {button2Text ? (
            <a
              href={button2Link}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#ffffff",
                color: "#1e293b",
                border: "none",
                borderRadius: "8px",
                padding: "14px 26px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {button2Text} <span aria-hidden="true">🔍</span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
