import React from "react";
import hiringImg from "../../assets/images/Career Growth imgs/hiring.jpg";
import expertImg from "../../assets/images/Career Growth imgs/expert.png";
import globalImg from "../../assets/images/Career Growth imgs/global.png";
import complianceImg from "../../assets/images/Career Growth imgs/compliance 1.png";

const DEFAULT_TITLE = "Why Choose E2E HRC?";
const DEFAULT_DESC = "Delivering excellence through dedicated service and unparalleled market knowledge.";

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

const WhyChooseUs = () => {
  const cards = [
    { id: 1, title: "Industry Expertise", desc: "In-depth knowledge across multiple sectors ensures we understand your specific technical and cultural requirements.", icon: "globe", imgSrc: expertImg, w: "404px", h: "244px", left: "0px", right: null, top: "0px", dir: "column", pad: "32px", descH: "96px" },
    { id: 2, title: "Global Talent Network", desc: "Access to a vast, pre-vetted pool of skilled professionals not just locally, but from across the globe.", icon: "shield", imgSrc: globalImg, w: null, h: "244px", left: "428px", right: "428px", top: "0px", dir: "column", pad: "32px 32px 56px", descH: "72px" },
    { id: 3, title: "Compliance Focused", desc: "Strict adherence to legal and ethical recruitment standards, mitigating risk for your business.", icon: "check", imgSrc: complianceImg, w: null, h: "244px", left: "856px", right: "0px", top: "0px", dir: "column", pad: "32px 32px 56px", descH: "72px" },
    { id: 4, title: "Fast & Efficient Hiring", desc: "Streamlined processes and agile methodologies designed to save you time and cost without compromising on quality.", icon: "bolt", w: null, h: "230px", left: "0px", right: "428px", top: "278px", dir: "row", pad: "32px", descH: "48px", hasImage: true },
    { id: 5, title: "Dedicated Account Managers", desc: "Personalised support throughout your entire recruitment journey, acting as an extension of your team.", icon: "wrench", w: null, h: "230px", left: "856px", right: "0px", top: "278px", dir: "column", pad: "32px", descH: "72px" },
  ];

  return (
    <section
      style={{
        width: "100%",
        background: "#F3F1ED",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "1324px",
          maxWidth: "100%",
          margin: "0 auto",
          position: "relative",
          height: "692px",
        }}
      >
        <div
          style={{
            position: "absolute",
            maxWidth: "768px",
            height: "64px",
            left: "256px",
            right: "302px",
            top: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            paddingBottom: "40px",
          }}
        >
          <div style={{ width: "766px", height: "24px", display: "flex", justifyContent: "center" }}>
            <h2
              style={{
                margin: 0,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "36px",
                lineHeight: "24px",
                color: "#0F172A",
                whiteSpace: "nowrap",
              }}
            >
              {DEFAULT_TITLE}
            </h2>
          </div>
          <div style={{ width: "766px", height: "24px", display: "flex", justifyContent: "center" }}>
            <p
              style={{
                margin: 0,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#424752",
              }}
            >
              {DEFAULT_DESC}
            </p>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            height: "508px",
            left: "32px",
            right: "32px",
            top: "128px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                position: "absolute",
                ...(card.w ? { width: card.w } : {}),
                height: card.h,
                left: card.left,
                ...(card.right ? { right: card.right } : {}),
                top: card.top,
                background: "#FFFFFF",
                border: "1px solid #C9DB82",
                borderRadius: "24px",
                padding: card.pad,
                display: "flex",
                flexDirection: card.dir,
                alignItems: "flex-start",
                gap: card.dir === "row" ? "32px" : "12px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  ...(card.dir === "row" ? { width: "459.11px", height: "124px", flexShrink: 0 } : {}),
                }}
              >
                <div style={{ width: card.imgSrc ? "28.52px" : card.icon === "globe" ? "28.52px" : card.icon === "wrench" ? "30px" : "30px", height: card.imgSrc ? "30px" : card.icon === "bolt" ? "24px" : card.icon === "wrench" ? "27px" : "30px" }}>
                  {card.imgSrc ? (
                    <img src={card.imgSrc} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  ) : (
                    getIcon(card.icon)
                  )}
                </div>
                <div style={{ width: card.dir === "row" ? "459.11px" : "338px", height: "28px", paddingTop: "4px" }}>
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
                    {card.title}
                  </h3>
                </div>
                <div style={{ width: card.dir === "row" ? "459.11px" : "338px", height: card.descH }}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#424752",
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
              {card.hasImage && (
                <div
                  style={{
                    width: "245.55px",
                    height: "160px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#ECEEF0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={hiringImg}
                    alt="Fast Hiring"
                    style={{
                      width: "245.55px",
                      height: "160px",
                      objectFit: "cover",
                      opacity: 0.8,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
