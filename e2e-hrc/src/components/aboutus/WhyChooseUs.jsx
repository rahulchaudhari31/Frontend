import React, { useState, useEffect } from "react";
import hiringImg from "../../assets/images/Career Growth imgs/hiring.jpg";
import expertImg from "../../assets/images/Career Growth imgs/expert.png";
import globalImg from "../../assets/images/Career Growth imgs/global.png";
import complianceImg from "../../assets/images/Career Growth imgs/compliance 1.png";
import { getWhyChooseData } from "../../services/about/whyChooseService";

// ─── Icon renderer — hardcoded SVGs, never from backend ───────────────────────
const getIcon = (type) => {
  const color = "#00458D";
  switch (type) {
    case "globe":
      return (
        <svg width="29" height="24" viewBox="0 0 29 24" fill="none">
          <circle cx="14.5" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" />
          <line x1="4.5" y1="12" x2="24.5" y2="12" stroke={color} strokeWidth="1.5" />
          <ellipse cx="14.5" cy="12" rx="5" ry="10" stroke={color} strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "shield":
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 3L4 8v7c0 6.5 4.7 12.6 11 14 6.3-1.4 11-7.5 11-14V8L15 3z" stroke={color} strokeWidth="2" fill="none" />
          <path d="M11 15l3 3 5-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "check":
      return (
        <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="3" stroke={color} strokeWidth="2" fill="none" />
          <path d="M7 15l4 4 6-8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bolt":
      return (
        <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
          <path d="M18 2L6 14h8l-2 8 12-12h-8l2-8z" fill={color} />
        </svg>
      );
    case "wrench":
      return (
        <svg width="30" height="27" viewBox="0 0 30 27" fill="none">
          <path d="M22 4a6 6 0 00-8.5 8.5L4 22l2 2 9.5-9.5A6 6 0 0022 4z" stroke={color} strokeWidth="2" fill="none" />
          <circle cx="22" cy="4" r="3" stroke={color} strokeWidth="2" fill="none" />
        </svg>
      );
    default:
      return null;
  }
};

// ─── Image URL helper ─────────────────────────────────────────────────────────
const getImageUrl = (path) => {
  if (!path || path.trim() === "") return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"}${path}`;
};

// ─── Fixed layout config — positions, icons, and fallback icons are
//     hardcoded. Only title, description, and optional card image
//     are driven by the backend. ──────────────────────────────────
const CARD_LAYOUT = [
  {
    key: 0,
    icon: "globe",
    imgSrc: expertImg,          // fallback icon image (card 1)
    dir: "column", pad: "32px",
    hasImage: false,
  },
  {
    key: 1,
    icon: "shield",
    imgSrc: globalImg,          // fallback icon image (card 2)
    dir: "column", pad: "32px 32px 56px",
    hasImage: false,
  },
  {
    key: 2,
    icon: "check",
    imgSrc: complianceImg,      // fallback icon image (card 3)
    dir: "column", pad: "32px 32px 56px",
    hasImage: false,
  },
  {
    key: 3,
    icon: "bolt",
    imgSrc: null,               // card 4 uses SVG icon, not a PNG
    dir: "row", pad: "32px",
    hasImage: true,             // shows the hiring photo panel
  },
  {
    key: 4,
    icon: "wrench",
    imgSrc: null,               // card 5 uses SVG icon
    dir: "column", pad: "32px",
    hasImage: false,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const WhyChooseUs = () => {
  const [section, setSection] = useState(null);
  const [apiCards, setApiCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const data = await getWhyChooseData();
        if (!mounted) return;

        if (data?.success && data?.data) {
          setSection(data.data.section || null);

          // Sort cards by displayOrder before storing
          const sorted = Array.isArray(data.data.cards)
            ? [...data.data.cards].sort(
                (a, b) => Number(a.displayOrder || 0) - Number(b.displayOrder || 0)
              )
            : [];
          setApiCards(sorted);
        }
      } catch (err) {
        console.error("WhyChooseUs: failed to fetch data", err);
        // Keep empty state — no crash, no broken layout
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    load();
    return () => { mounted = false; };
  }, []);

  // While loading, render nothing to avoid layout shift
  if (isLoading) return null;

  // If API returned no cards, render nothing (section won't appear)
  if (apiCards.length === 0) return null;

  const sectionTitle = section?.sectionTitle || "";
  const sectionDesc = section?.sectionDescription || "";

  return (
    <section
      className="about-whychooseus"
      style={{
        width: "100%",
        background: "#F3F1ED",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="about-wcu-container"
        style={{
          width: "1324px",
          maxWidth: "100%",
          margin: "0 auto",
          position: "relative",
          height: "auto",
          minHeight: "692px",
          boxSizing: "border-box",
        }}
      >
        {/* ── Section header ───────────────────────────────────────── */}
        <div
          className="about-wcu-header"
          style={{
            margin: "0 auto",
            maxWidth: "768px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            paddingTop: "40px",
            paddingBottom: "32px",
          }}
        >
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <h2
              style={{
                margin: 0,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "36px",
                lineHeight: "1.3",
                color: "#0F172A",
                textAlign: "center",
              }}
            >
              {sectionTitle}
            </h2>
          </div>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <p
              style={{
                margin: 0,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#424752",
                textAlign: "center",
              }}
            >
              {sectionDesc}
            </p>
          </div>
        </div>

        {/* ── Cards Grid ────────────────────────────────────────────── */}
        <div
          className="about-wcu-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 404px)",
            gap: "34px 24px",
            justifyContent: "center",
            paddingBottom: "50px",
          }}
        >
          {apiCards.map((apiCard, index) => {
            // Merge fixed layout with dynamic API data
            const layout = CARD_LAYOUT[index];
            if (!layout) return null; // guard: more than 5 cards from API

            const row = Math.floor(index / 3);

            // ── Image logic for card index 3 (the large "Fast Hiring" card)
            const cardPhotoSrc =
              layout.hasImage
                ? (apiCard.image && apiCard.image.trim() !== ""
                    ? getImageUrl(apiCard.image)
                    : hiringImg)
                : null;

            // ── Icon: always from CARD_LAYOUT — never from backend
            const iconEl = layout.imgSrc ? (
              <img
                src={layout.imgSrc}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : (
              getIcon(layout.icon)
            );

            const iconBoxW = layout.imgSrc
              ? "28.52px"
              : layout.icon === "globe"
              ? "28.52px"
              : "30px";
            const iconBoxH = layout.imgSrc
              ? "30px"
              : layout.icon === "bolt"
              ? "24px"
              : layout.icon === "wrench"
              ? "27px"
              : "30px";

            return (
              <div
                key={apiCard._id || layout.key}
                style={{
                  gridColumn: index === 3 ? "span 2" : "span 1",
                  minHeight: row === 0 ? "244px" : "230px",
                  height: "auto",
                  background: "#FFFFFF",
                  border: "1px solid #C9DB82",
                  borderRadius: "24px",
                  padding: layout.pad,
                  display: "flex",
                  flexDirection: layout.dir,
                  alignItems: "stretch",
                  gap: layout.dir === "row" ? "32px" : "12px",
                  boxSizing: "border-box",
                }}
              >
                {/* Left / text column */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  {/* Icon */}
                  <div style={{ width: iconBoxW, height: iconBoxH, display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    {iconEl}
                  </div>

                  {/* Title — from API */}
                  <div
                    style={{
                      width: "100%",
                      paddingTop: "4px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#0F172A",
                      }}
                    >
                      {apiCard.title || ""}
                    </h3>
                  </div>

                  {/* Description — from API */}
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#424752",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {apiCard.description || ""}
                    </p>
                  </div>
                </div>

                {/* Photo panel — only on card 4, always shows an image */}
                {layout.hasImage && (
                  <div
                    style={{
                      width: "245.55px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      background: "#ECEEF0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      alignSelf: "stretch",
                    }}
                  >
                    <img
                      src={cardPhotoSrc}
                      alt={apiCard.title || "Card image"}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.8,
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;