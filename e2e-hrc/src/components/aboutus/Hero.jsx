import React from "react";
import bgImage from "../../assets/image/About us image.jpg";
import { ArrowRight, Search } from "lucide-react";

export default function HeroSection() {
  const subtitle = "Trusted";
  const description =
    "We are more than a recruitment agency; we are strategic partners in your growth. E2E Consultancy connects visionary organizations with exceptional human capital across the globe, ensuring precision, compliance, and long-term success.";

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "480px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(10,20,40,0.25) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "620px",
          padding: "48px 64px",
        }}
      >
        {/* Eyebrow badge */}
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
          <span style={{ color: "#ffffff", fontSize: "13px", fontWeight: 500 }}>
            {subtitle}
          </span>
        </div>

        {/* Heading */}
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

        {/* Description */}
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

        {/* Button group */}
        <div className="flex flex-wrap items-start gap-4 pt-4">
          {/* Button 1 — Hire Talent (primary) */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 py-[17px] px-8 bg-[#F39308] hover:bg-[#d9820a] text-[#004CA5] font-inter font-semibold text-sm tracking-[0.7px] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00458D] no-underline"
          >
            Hire Talent
            <ArrowRight className="w-[13.33px] h-[13.33px] text-[#004CA5]" strokeWidth={2} />
          </a>

          {/* Button 2 — Find Opportunities (outline) */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 py-4 px-8 bg-[#F7F9FB] hover:bg-[#EDF0F4] border border-[#C2C6D4] text-[#004CA5] font-inter font-semibold text-sm tracking-[0.7px] rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00458D] no-underline"
          >
            Find Opportunities
            <Search className="w-[15px] h-[15px] text-[#00458D]" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
