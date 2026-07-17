import { useState, useEffect } from "react";
import { getApproachCards } from "../../services/home/approachCardService";

// Static watermark paths (these remain as they are design assets)
const watermarkConfig = {
  0: { letterSrc: "/watermark-H.png", letterW: "302.64px", letterH: "339.54px", letterTop: "68.23px", letterRight: "42.68px", letterOpacity: 0.1 },
  1: { letterSrc: "/watermark-R.png", letterW: "255.84px", letterH: "348.37px", letterTop: "71.82px", letterRight: "36.08px", letterOpacity: 0.1 },
  2: { letterSrc: "/watermark-C.png", letterW: "250.38px", letterH: "314.176px", letterTop: "44.41px", letterRight: "35.31px", letterOpacity: 0.4 },
};

// Color and layout configurations
const layoutConfig = {
  0: { eyebrowColor: "#004CA5", statColor: "#004CA5", imageWidth: "496px", imageRight: false, layout: "row1" },
  1: { eyebrowColor: "#F39308", statColor: "#F39308", imageWidth: "527px", imageRight: true, layout: "row2" },
  2: { eyebrowColor: "#C9DB82", statColor: "#C9DB82", imageWidth: "498px", imageRight: false, layout: "row3" },
};

// Background decorative letter component
function BackgroundLetter({ title }) {
  const backgroundLetter = title?.trim()?.charAt(0)?.toUpperCase() || "";
  
  if (!backgroundLetter) return null;
  
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        right: "150px",
        top: "50%",
        transform: "translateY(-50%)",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 800,
        fontSize: "260px",
        lineHeight: 1,
        color: "#0D4DA1",
        opacity: 0.08,
        zIndex: 0,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {backgroundLetter}
    </span>
  );
}

function Watermark({ row, index }) {
  const config = watermarkConfig[index] || watermarkConfig[0];
  const letterColor = layoutConfig[index]?.eyebrowColor || "#004CA5";

  if (letterColor) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: config.letterW,
          height: config.letterH,
          top: config.letterTop,
          right: config.letterRight,
          backgroundColor: letterColor,
          maskImage: `url(${config.letterSrc})`,
          WebkitMaskImage: `url(${config.letterSrc})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          opacity: config.letterOpacity,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      />
    );
  }

  return (
    <img
      src={config.letterSrc}
      alt=""
      aria-hidden="true"
      draggable={false}
      style={{
        position: "absolute",
        width: config.letterW,
        height: config.letterH,
        top: config.letterTop,
        right: config.letterRight,
        opacity: config.letterOpacity,
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 0,
      }}
    />
  );
}

function Row1Card({ row, index }) {
  const config = layoutConfig[index] || layoutConfig[0];
  return (
    <div
      className="w-full lg:flex-1 relative"
      style={{
        background: "#F8FAFC",
        borderRadius: "16px",
        height: "420px",
        overflow: "hidden",
      }}
    >
      <BackgroundLetter title={row.title} />
      <Watermark row={row} index={index} />

      {/* Eyebrow — left:36px, top:56px */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "36px",
          top: "56px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          color: config.eyebrowColor,
          zIndex: 1,
        }}
      >
        {row.badge}
      </span>

      {/* Heading — left:40px, top:90px */}
      <h3
        style={{
          position: "absolute",
          left: "40px",
          top: "90px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 800,
          fontSize: "30px",
          lineHeight: "36px",
          color: "#004CA5",
          margin: 0,
          zIndex: 1,
        }}
      >
        {row.title}
      </h3>

      {/* Paragraph — left:40px, top:142px, width:460px */}
      <p
        style={{
          position: "absolute",
          left: "40px",
          top: "142px",
          width: "460px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "26px",
          color: "#475569",
          margin: 0,
          zIndex: 1,
        }}
      >
        {row.description}
      </p>

      {/* Stats — left:42px, top:260px */}
      <div
        style={{
          position: "absolute",
          left: "42px",
          top: "260px",
          display: "flex",
          gap: "24px",
          zIndex: 1,
        }}
      >
        {row.stats && row.stats.map((stat) => (
          <div key={stat.label}>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "24px",
                lineHeight: "32px",
                color: config.statColor,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "16px",
                color: "#64748B",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Row23Card({ row, index }) {
  const config = layoutConfig[index] || layoutConfig[1];
  const padLeft = config.layout === "row2" ? "50px" : "58px";
  return (
    <div
      className="w-full lg:flex-1 relative"
      style={{
        background: "#F8FAFC",
        borderRadius: "16px",
        height: "420px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: `1px 40px 40px ${padLeft}`,
      }}
    >
      <BackgroundLetter title={row.title} />
      <Watermark row={row} index={index} />

      <div style={{ position: "relative", zIndex: 1, width: "518.4px" }}>
        <span
          style={{
            display: "block",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            color: config.eyebrowColor,
            marginBottom: "8px",
          }}
        >
          {row.badge}
        </span>

        <h3
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            fontSize: "30px",
            lineHeight: "36px",
            color: "#004CA5",
            margin: "0 0 16px",
          }}
        >
          {row.title}
        </h3>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            color: "#475569",
            margin: 0,
            maxWidth: "460px",
          }}
        >
          {row.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: "24px",
            paddingTop: "32px",
          }}
        >
          {row.stats && row.stats.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: config.statColor,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "#64748B",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ row, index }) {
  const config = layoutConfig[index] || layoutConfig[0];
  
  const imageBlock = (
    <div
      className="shrink-0 overflow-hidden"
      style={{
        width: config.imageWidth,
        height: "420px",
        borderRadius: "16px",
        position: "relative",
        isolation: "isolate",
      }}
    >
      {row.image ? (
        <img
          src={row.image}
          alt={row.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#E8EDF5",
          }}
        />
      )}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(248,250,252,0.15) 100%)",
          zIndex: 1,
        }}
      />
    </div>
  );

  const cardBlock =
    config.layout === "row1" ? (
      <Row1Card row={row} index={index} />
    ) : (
      <Row23Card row={row} index={index} />
    );

  return (
    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        height: "420px",
        position: "relative",
      }}
    >
      {config.imageRight ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: config.layout === "row2" ? "0px 40px" : "0px 40px 0px 40px",
            height: "420px",
          }}
        >
          {cardBlock}
          {imageBlock}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: config.layout === "row1" ? "0px 1px 0px 40px" : "0px 40px",
            height: "420px",
          }}
        >
          {config.layout === "row1" ? (
            <>
              {imageBlock}
              {cardBlock}
            </>
          ) : (
            <>
              {imageBlock}
              {cardBlock}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function WhatMakesUsDifferent() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const fetchedCards = await getApproachCards();
        
        // Sort by displayOrder and filter active cards
        const sortedCards = fetchedCards
          .filter(card => card.isActive !== false)
          .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        
        // Transform API data to match row structure
        const transformedRows = sortedCards.map((card) => ({
          badge: card.badge || "",
          title: card.title || "",
          description: card.description || "",
          image: card.image || "",
          stats: [
            {
              value: card.stat1Value || "",
              label: card.stat1Label || "",
            },
            {
              value: card.stat2Value || "",
              label: card.stat2Label || "",
            },
          ],
        }));
        
        setRows(transformedRows);
      } catch (error) {
        console.error('Error loading approach cards:', error);
        setRows([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <section
      style={{
        padding: "0px 54px 0px 61px",
        background: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "34px",
        }}
      >
        {/* Header — 1325×84px */}
        <div
          style={{
            width: "1325px",
            height: "84px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Pill badge — absolute centered per Figma */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "44px",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "6px 12px",
                gap: "8px",
                background: "#E8EDF5",
                borderRadius: "100px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "16px",
                textAlign: "center",
                color: "#004CA5",
                whiteSpace: "nowrap",
              }}
            >
              Why Choose E2E HRC
            </span>
          </div>

          {/* Heading — 36px/40px, all #004CA5, centered */}
          <div
            style={{
              width: "1325px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "36px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#004CA5",
                margin: 0,
              }}
            >
              What makes us different
            </h2>
          </div>
        </div>

        {/* Rows — gap: 30px */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "1325px",
          }}
        >
          {rows.map((row, index) => (
            <Row key={row.title} row={row} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
