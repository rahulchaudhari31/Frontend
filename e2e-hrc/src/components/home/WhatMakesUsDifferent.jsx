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
        fontSize: "640px",
        lineHeight: 1,
        color: "#0D4DA1",
        opacity: 0.06,
        zIndex: 0,
        pointerEvents: "none",
        userSelect: "none",
        overflow: "hidden",
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

function Row1Card({ row, index, isExpanded, onToggleExpand }) {
  const config = layoutConfig[index] || layoutConfig[0];
  const hasStats = row.stats && row.stats.length > 0 && row.stats.some(stat => stat.value && stat.label);
  const description = row.description || "";

  return (
    <div
      className="home-diff-card w-full lg:flex-1 relative"
      style={{
        background: "#F8FAFC",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        paddingTop: "56px",
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingBottom: "40px",
        width: "100%",
        zIndex: 1,
      }}
    >
      <BackgroundLetter title={row.title} />
      <Watermark row={row} index={index} />

      {/* Eyebrow */}
      <span
        aria-hidden="true"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          color: config.eyebrowColor,
          marginBottom: "8px",
          zIndex: 2,
          position: "relative",
        }}
      >
        {row.badge}
      </span>

      {/* Heading */}
      <h3
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 800,
          fontSize: "30px",
          lineHeight: "36px",
          color: "#004CA5",
          margin: "0 0 16px 0",
          zIndex: 2,
          position: "relative",
          wordBreak: "break-word",
        }}
      >
        {row.title}
      </h3>

      {/* Description Container — separate from stats */}
      <div
        style={{
          marginBottom: "16px",
          zIndex: 2,
          position: "relative",
          maxWidth: "460px",
          flex: isExpanded ? "auto" : "none",
        }}
      >
        {/* Description with line clamping */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            color: "#475569",
            margin: 0,
            display: isExpanded ? "block" : "-webkit-box",
            WebkitLineClamp: isExpanded ? "unset" : 3,
            WebkitBoxOrient: isExpanded ? "unset" : "vertical",
            overflow: isExpanded ? "visible" : "hidden",
            textOverflow: isExpanded ? "unset" : "ellipsis",
            width: "100%",
            wordBreak: "break-word",
          }}
        >
          {description}
        </p>

        {/* Read More / Read Less button — belongs to description */}
        <button
          onClick={() => onToggleExpand(index)}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            color: config.eyebrowColor,
            background: "none",
            border: "none",
            padding: "8px 0 0 0",
            cursor: "pointer",
            textDecoration: "underline",
            display: "block",
            textAlign: "left",
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Stats — separate section, outside description container */}
      {hasStats && (
        <div
          style={{
            display: "flex",
            gap: "24px",
            zIndex: 2,
            position: "relative",
            marginTop: "0",
            flexWrap: "wrap",
          }}
        >
          {row.stats.map((stat) => (
            stat.value && stat.label && (
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
            )
          ))}
        </div>
      )}
    </div>
  );
}

function Row23Card({ row, index, isExpanded, onToggleExpand }) {
  const config = layoutConfig[index] || layoutConfig[1];
  const hasStats = row.stats && row.stats.length > 0 && row.stats.some(stat => stat.value && stat.label);
  const padLeft = config.layout === "row2" ? "50px" : "58px";
  const description = row.description || "";

  return (
    <div
      className="home-diff-card w-full lg:flex-1 relative"
      style={{
        background: "#F8FAFC",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: `56px 40px 40px ${padLeft}`,
        width: "100%",
        zIndex: 1,
      }}
    >
      <BackgroundLetter title={row.title} />
      <Watermark row={row} index={index} />

      {/* Eyebrow */}
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
          zIndex: 2,
          position: "relative",
        }}
      >
        {row.badge}
      </span>

      {/* Heading */}
      <h3
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 800,
          fontSize: "30px",
          lineHeight: "36px",
          color: "#004CA5",
          margin: "0 0 16px 0",
          zIndex: 2,
          position: "relative",
          wordBreak: "break-word",
        }}
      >
        {row.title}
      </h3>

      {/* Description Container — separate from stats */}
      <div
        style={{
          marginBottom: "16px",
          zIndex: 2,
          position: "relative",
          maxWidth: "460px",
          width: "100%",
          flex: isExpanded ? "auto" : "none",
        }}
      >
        {/* Description with line clamping */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            color: "#475569",
            margin: 0,
            display: isExpanded ? "block" : "-webkit-box",
            WebkitLineClamp: isExpanded ? "unset" : 3,
            WebkitBoxOrient: isExpanded ? "unset" : "vertical",
            overflow: isExpanded ? "visible" : "hidden",
            textOverflow: isExpanded ? "unset" : "ellipsis",
            width: "100%",
            wordBreak: "break-word",
          }}
        >
          {description}
        </p>

        {/* Read More / Read Less button — belongs to description */}
        <button
          onClick={() => onToggleExpand(index)}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            color: config.eyebrowColor,
            background: "none",
            border: "none",
            padding: "8px 0 0 0",
            cursor: "pointer",
            textDecoration: "underline",
            display: "block",
            textAlign: "left",
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Stats — separate section, outside description container */}
      {hasStats && (
        <div
          style={{
            display: "flex",
            gap: "24px",
            zIndex: 2,
            position: "relative",
            marginTop: "0",
            flexWrap: "wrap",
          }}
        >
          {row.stats.map((stat) => (
            stat.value && stat.label && (
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
            )
          ))}
        </div>
      )}
    </div>
  );
}

function Row({ row, index, isExpanded, onToggleExpand }) {
  const config = layoutConfig[index] || layoutConfig[0];
  
  const imageBlock = (
    <div
      className="home-diff-image shrink-0 w-full lg:w-auto"
      style={{
        width: "100%",
        maxWidth: config.imageWidth,
        height: "auto",
        aspectRatio: "16 / 9",
        borderRadius: "16px",
        position: "relative",
        isolation: "isolate",
        flexShrink: 0,
        flexGrow: 0,
        overflow: "hidden",
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
          pointerEvents: "none",
        }}
      />
    </div>
  );

  const cardBlock =
    config.layout === "row1" ? (
      <Row1Card row={row} index={index} isExpanded={isExpanded} onToggleExpand={onToggleExpand} />
    ) : (
      <Row23Card row={row} index={index} isExpanded={isExpanded} onToggleExpand={onToggleExpand} />
    );

  return (
    <div
      className="home-diff-row w-full"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* Desktop: side-by-side, Mobile: stacked vertically */}
      <style>{`
        @media (max-width: 1023px) {
          .home-diff-row {
            flex-direction: column !important;
            gap: 24px;
          }
          .home-diff-row > div {
            flex-direction: column !important;
          }
        }
      `}</style>

      {config.imageRight ? (
        <>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: config.layout === "row2" ? "0px 40px" : "0px 40px 0px 40px",
            }}
          >
            {cardBlock}
          </div>
          <div
            style={{
              flex: "0 0 auto",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {imageBlock}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              flex: "0 0 auto",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {imageBlock}
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: config.layout === "row1" ? "0px 1px 0px 40px" : "0px 40px",
            }}
          >
            {cardBlock}
          </div>
        </>
      )}
    </div>
  );
}

export default function WhatMakesUsDifferent() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRows, setExpandedRows] = useState({});

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
        // Initialize all rows as collapsed
        const initialExpanded = {};
        transformedRows.forEach((_, index) => {
          initialExpanded[index] = false;
        });
        setExpandedRows(initialExpanded);
      } catch (error) {
        console.error('Error loading approach cards:', error);
        setRows([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleToggleExpand = (index) => {
    setExpandedRows(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section
      className="home-diff-section w-full"
      style={{
        padding: "40px 20px lg:40px 54px lg:0px 61px",
        background: "white",
        overflowX: "hidden",
      }}
    >
      <div
        className="home-diff-inner w-full"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "34px",
        }}
      >
        {/* Header */}
        <div
          className="home-diff-header w-full"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Pill badge */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "44px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
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

          {/* Heading */}
          <div
            className="home-diff-heading-wrap w-full"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 20px",
            }}
          >
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(24px, 6vw, 36px)",
                lineHeight: "1.2",
                textAlign: "center",
                color: "#004CA5",
                margin: 0,
                wordBreak: "break-word",
              }}
            >
              What makes us different
            </h2>
          </div>
        </div>

        {/* Rows */}
        <div
          className="home-diff-rows w-full"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            maxWidth: "1325px",
            margin: "0 auto",
            width: "100%",
            paddingLeft: "0",
            paddingRight: "0",
          }}
        >
          {rows.map((row, index) => (
            <Row 
              key={row.title} 
              row={row} 
              index={index}
              isExpanded={expandedRows[index] || false}
              onToggleExpand={handleToggleExpand}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
