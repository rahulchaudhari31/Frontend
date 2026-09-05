import React, { useEffect, useState } from "react";
import { getWhoWeAre } from "../../services/about/whoWeAreService";

const WhoWeAre = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchWhoWeAre = async () => {
      try {
        setLoading(true);
        const response = await getWhoWeAre();
        setData(response?.data || null);
      } catch {
        // use defaults
      } finally {
        setLoading(false);
      }
    };
    fetchWhoWeAre();
  }, []);

  if (!loading && (!data || data.isActive === false)) return null;

  const title = data?.title || "Who We Are";
  const description1 = data?.description1 || "Established in 2007, E2E Human Resource Consultancy has evolved from a boutique agency into a premier global recruitment powerhouse. We specialize in identifying, attracting, and securing top-tier talent for organizations that demand excellence.";
  const description2 = data?.description2 || "Our approach is deeply consultative. We don't just fill vacancies; we analyze workforce requirements, understand corporate cultures, and deliver talent solutions that drive measurable business outcomes. With deep multi-sector expertise ranging from Engineering to Healthcare, our consultants operate as an extension of your own internal teams.";
  const description3 = data?.description3 || "";
  const image = data?.image || "";
  const experienceYears = data?.experienceYears || "15+";
  const experienceLabel = data?.experienceLabel || "Years of Excellence";

  return (
    <section
      className="about-whoweare2"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "66px 113.5px 40px",
        background: "#FFFFFF",
        isolation: "isolate",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .about-whoweare2-desc-wrapper::-webkit-scrollbar {
          width: 6px;
        }
        .about-whoweare2-desc-wrapper::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .about-whoweare2-desc-wrapper::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        @media (max-width: 1024px) {
          .about-whoweare2 {
            padding: 40px 24px !important;
          }
          .about-whoweare2-container {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .about-whoweare2-image {
            width: 100% !important;
            max-width: 593px !important;
            margin: 0 auto;
          }
          .about-whoweare2-image-box {
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 593 / 432;
          }
          .about-whoweare2-image-box img, .about-whoweare2-image-box > div {
            width: 100% !important;
            height: 100% !important;
          }
        }
      `}</style>
      {/* Orange decorative circle */}
      <div
        style={{
          position: "absolute",
          width: "128px",
          height: "128px",
          right: "-20px",
          top: "15px",
          background: "#F39308",
          opacity: 0.2,
          borderRadius: "9999px",
          zIndex: 0,
        }}
      />

      {/* HR watermark */}
      <div
        style={{
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontWeight: 900,
          fontSize: "400px",
          lineHeight: "1",
          color: "rgba(236,238,240,0.3)",
          right: "80px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        HR
      </div>

      {/* Main flex container */}
      <div
        className="about-whoweare2-container"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "60px",
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        {/* Left side - Text content */}
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
          {/* Main Heading */}
          <h2
            style={{
              margin: 0,
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "36px",
              lineHeight: "56px",
              letterSpacing: "-0.48px",
              color: "#191C1E",
            }}
          >
            {title}
          </h2>

          {/* Blue underline */}
          <div style={{ width: "64px", height: "4px", background: "#00458D" }} />

          {/* Who We Are paragraphs */}
          <div
            className="about-whoweare2-desc-wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              width: "100%",
              marginTop: "8px",

              // Keep description area stable
              maxHeight: isExpanded ? "280px" : "200px",

              // Only description scrolls when expanded
              overflowY: isExpanded ? "auto" : "hidden",

              paddingRight: isExpanded ? "12px" : "0",

              boxSizing: "border-box",
            }}
          >
            {description1 && (
              <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#424752" }}>
                {description1}
              </p>
            )}
            {description2 && (
              <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#424752" }}>
                {description2}
              </p>
            )}
            {description3 && (
              <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#424752" }}>
                {description3}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            style={{
              marginTop: "4px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#00458D",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              textDecoration: "underline",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Right side - Image container */}
        <div
          className="about-whoweare2-image"
          style={{
            position: "relative",
            width: "593px",
            flexShrink: 0,
          }}
        >
          {/* Image with border + shadow */}
          <div
            className="about-whoweare2-image-box"
            style={{
              width: "593px",
              height: "432px",
              boxSizing: "border-box",
              background: "rgba(255,255,255,0.002)",
              border: "1px solid rgba(194,198,212,0.2)",
              boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
              borderRadius: "24px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {image ? (
              <img src={image} alt="Who We Are" style={{ width: "591px", height: "430px", objectFit: "cover", display: "block" }} />
            ) : (
              <div style={{ width: "591px", height: "430px", background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)" }} />
            )}
          </div>

          {/* Experience overlay card */}
          <div
            className="absolute bg-white/85 backdrop-blur-md rounded-3xl flex flex-col gap-1 z-20 max-lg:-left-4 max-lg:-bottom-4 max-lg:p-5 max-lg:w-[180px]"
            style={{
              left: "-32px",
              bottom: "-32px",
              width: "220px",
              padding: "32px",
              border: "1px solid rgba(226, 232, 240, 0.8)",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <span
              className="font-poppins font-semibold"
              style={{
                fontSize: "32px",
                lineHeight: "40px",
                color: "#00458D",
              }}
            >
              {experienceYears}
            </span>
            <span
              className="font-inter font-semibold text-sm uppercase"
              style={{ letterSpacing: "0.7px", color: "#424752" }}
            >
              {experienceLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;