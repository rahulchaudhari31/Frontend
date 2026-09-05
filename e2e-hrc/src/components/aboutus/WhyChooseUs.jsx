import React, { useState, useEffect } from "react";
import { getWhyChooseData } from "../../services/about/whyChooseService";

const getIcon = (type) => {
  const color = "#004CA5";

  switch (type) {
    case "globe":
      return (
        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" aria-hidden="true">
          <circle cx="14.5" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" />
          <line x1="4.5" y1="12" x2="24.5" y2="12" stroke={color} strokeWidth="1.5" />
          <ellipse cx="14.5" cy="12" rx="5" ry="10" stroke={color} strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "shield":
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <path d="M15 3L4 8v7c0 6.5 4.7 12.6 11 14 6.3-1.4 11-7.5 11-14V8L15 3z" stroke={color} strokeWidth="2" fill="none" />
          <path d="M11 15l3 3 5-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "check":
      return (
        <svg width="24" height="30" viewBox="0 0 24 30" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="3" stroke={color} strokeWidth="2" fill="none" />
          <path d="M7 15l4 4 6-8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bolt":
      return (
        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" aria-hidden="true">
          <path d="M18 2L6 14h8l-2 8 12-12h-8l2-8z" fill={color} />
        </svg>
      );
    case "wrench":
      return (
        <svg width="30" height="27" viewBox="0 0 30 27" fill="none" aria-hidden="true">
          <path d="M22 4a6 6 0 00-8.5 8.5L4 22l2 2 9.5-9.5A6 6 0 0022 4z" stroke={color} strokeWidth="2" fill="none" />
          <circle cx="22" cy="4" r="3" stroke={color} strokeWidth="2" fill="none" />
        </svg>
      );
    default:
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
          <circle cx="13" cy="13" r="10" stroke={color} strokeWidth="2" />
          <path d="M13 7v6l4 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};

const WhyChooseUs = () => {
  const [section, setSection] = useState(null);
  const [apiCards, setApiCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const data = await getWhyChooseData();

        if (!mounted) return;

        if (data?.success && data?.data) {
          setSection(data.data.section || null);
          const sorted = Array.isArray(data.data.cards)
            ? [...data.data.cards].sort((a, b) => Number(a.displayOrder || 0) - Number(b.displayOrder || 0))
            : [];
          setApiCards(sorted);
        }
      } catch (err) {
        console.error("WhyChooseUs: failed to fetch data", err);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  if (isLoading) return null;
  if (apiCards.length === 0) return null;

  const sectionTitle = section?.sectionTitle || "Why Choose E2E HRC?";
  const sectionDesc = section?.sectionDescription || "";

  const setExpanded = (index, value) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      className="why-choose-us-section"
      style={{
        width: "100%",
        background: "#F5F4F0",
        fontFamily: "'Inter', sans-serif",
        padding: "72px 0 80px",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .why-choose-us-shell {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .why-choose-us-header {
          text-align: center;
          margin: 0 auto 32px;
          max-width: 760px;
        }

        .why-choose-us-header h2 {
          margin: 0;
          font-family: "Poppins", sans-serif;
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.04em;
          color: #0F172A;
        }

        .why-choose-us-header p {
          margin: 16px 0 0;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          line-height: 26px;
          color: #4B5563;
        }

        .why-choose-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
        }

        .why-choose-item {
          width: 100%;
          background: #FFFFFF;
          border: 1px solid rgba(0, 76, 165, 0.12);
          border-radius: 12px;
          padding: 18px 20px;
          box-sizing: border-box;
          box-shadow: 0 5px 14px rgba(15, 23, 42, 0.03);
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .why-choose-item:hover {
          border-color: rgba(0, 76, 165, 0.22);
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.05);
        }

        .why-choose-item-inner {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .why-choose-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #004CA5;
        }

        .why-choose-body {
          flex: 1;
          min-width: 0;
        }

        .why-choose-title-wrap {
          display: inline-block;
          max-width: 100%;
          cursor: pointer;
          user-select: none;
        }

        .why-choose-title-wrap h3 {
          margin: 0;
          font-family: "Poppins", sans-serif;
          font-size: clamp(18px, 1.4vw, 22px);
          line-height: 1.35;
          font-weight: 500;
          color: #0F172A;
        }

        .why-choose-description {
          margin-top: 6px;
          overflow: hidden;
          max-height: 28px;
          transition: max-height 0.35s ease, opacity 0.3s ease;
          opacity: 0.95;
        }

        .why-choose-item.expanded .why-choose-description {
          max-height: 220px;
          opacity: 1;
        }

        .why-choose-description p {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 24px;
          color: #4B5563;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
          overflow-wrap: anywhere;
        }

        .why-choose-item.expanded .why-choose-description p {
          display: block;
          -webkit-line-clamp: unset;
          -webkit-box-orient: unset;
          overflow: visible;
          text-overflow: unset;
        }

        @media (max-width: 768px) {
          .why-choose-us-section {
            padding: 56px 0 64px;
          }

          .why-choose-us-shell {
            padding: 0 12px;
          }

          .why-choose-item {
            padding: 16px 16px;
            border-radius: 10px;
          }

          .why-choose-item-inner {
            gap: 12px;
          }

          .why-choose-icon {
            width: 28px;
            height: 28px;
          }

          .why-choose-description {
            max-height: 24px;
          }
        }
      `}</style>

      <div className="why-choose-us-shell">
        <div className="why-choose-us-header">
          <h2>{sectionTitle}</h2>
          {sectionDesc ? <p>{sectionDesc}</p> : null}
        </div>

        <div className="why-choose-list">
          {apiCards.map((apiCard, index) => {
            const expanded = !!expandedCards[index];
            const iconType = apiCard.icon || ["globe", "shield", "check", "bolt", "wrench"][index % 5];

            return (
              <div
                key={apiCard._id || apiCard.title || index}
                className={`why-choose-item ${expanded ? "expanded" : ""}`}
              >
                <div className="why-choose-item-inner">
                  <div className="why-choose-icon">{getIcon(iconType)}</div>

                  <div className="why-choose-body">
                    <div
                      className="why-choose-title-wrap"
                      onMouseEnter={() => setExpanded(index, true)}
                      onMouseLeave={() => setExpanded(index, false)}
                      onClick={() => {
                        if (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) {
                          toggleCard(index);
                        }
                      }}
                      onTouchStart={() => toggleCard(index)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={expanded}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          toggleCard(index);
                        }
                      }}
                    >
                      <h3>{apiCard.title || "Feature"}</h3>
                    </div>

                    <div className="why-choose-description">
                      <p>{apiCard.description || ""}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;