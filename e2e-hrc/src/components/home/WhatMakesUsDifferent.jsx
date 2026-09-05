import React, { useState, useEffect } from "react";
import { getApproachCards } from "../../services/home/approachCardService";
import towerBridgeImg from "../../assets/image/Human approach .jpeg";
import manScarfImg from "../../assets/image/mann.jpg";
import childrenImg from "../../assets/image/childrenssss.jpg";

const defaultImages = [towerBridgeImg, manScarfImg, childrenImg];

const layoutConfigs = [
  {
    eyebrowColor: "#004CA5",
    statColor: "#004CA5",
    letterSrc: "/watermark-H.png",
    letterW: "302.64px",
    letterH: "339.54px",
    letterTop: "68.23px",
    letterRight: "150px",
    letterColor: "#004CA5",
    letterOpacity: 0.1,
    imageWidth: "496px",
    imageRight: false,
    layout: "row1",
  },
  {
    eyebrowColor: "#F39308",
    statColor: "#F39308",
    letterSrc: "/watermark-R.png",
    letterW: "255.84px",
    letterH: "348.37px",
    letterTop: "71.82px",
    letterRight: "36.08px",
    letterColor: "#F39308",
    letterOpacity: 0.1,
    imageWidth: "527px",
    imageRight: true,
    layout: "row2",
  },
  {
    eyebrowColor: "#C9DB82",
    statColor: "#C9DB82",
    letterSrc: "/watermark-C.png",
    letterW: "250.38px",
    letterH: "314.176px",
    letterTop: "70px",
    letterRight: "50px",
    letterColor: "#C9DB82",
    letterOpacity: 0.4,
    imageWidth: "498px",
    imageRight: false,
    layout: "row3",
  },
];

function Watermark({ row }) {
  if (row.letterColor) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: row.letterW,
          height: row.letterH,
          top: row.letterTop,
          ...(row.letterRight
            ? { right: row.letterRight }
            : { left: row.letterLeft }),
          backgroundColor: row.letterColor,
          maskImage: `url(${row.letterSrc})`,
          WebkitMaskImage: `url(${row.letterSrc})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          opacity: 1,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      />
    );
  }

  return (
    <img
      src={row.letterSrc}
      alt=""
      aria-hidden="true"
      draggable={false}
      style={{
        position: "absolute",
        width: row.letterW,
        height: row.letterH,
        top: row.letterTop,
        ...(row.letterRight
          ? { right: row.letterRight }
          : { left: row.letterLeft }),
        opacity: 1,
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 0,
      }}
    />
  );
}

function Row1Card({ row, isExpanded, onToggleExpand }) {
  const descriptionHeight = "104px";

  return (
    <div
      className="home-diff-card w-full lg:flex-1 relative"
      style={{
        background: "#F8FAFC",
        borderRadius: "16px",
        minHeight: "420px",
        overflow: "hidden",
        padding: "56px 40px 40px 36px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Watermark row={row} />

      <div className="home-diff-card-content" style={{ position: "relative", zIndex: 1, width: "464px", display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            color: row.eyebrowColor,
            marginBottom: "18px",
          }}
        >
          {row.eyebrow}
        </span>

        <h3
          style={{
            marginLeft: "4px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            fontSize: "30px",
            lineHeight: "36px",
            color: "#004CA5",
            margin: "0 0 16px 4px",
          }}
        >
          {row.title}
        </h3>

        <p
          className="home-diff-desc-scroll"
          style={{
            marginLeft: "4px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            color: "#475569",
            margin: "0 0 0 12px",
            display: isExpanded ? "block" : "-webkit-box",
            WebkitLineClamp: isExpanded ? "unset" : 6,
            WebkitBoxOrient: "vertical",
            overflow: isExpanded ? "auto" : "hidden",
            overflowY: isExpanded ? "auto" : "hidden",
            height: descriptionHeight,
            maxHeight: descriptionHeight,
            minHeight: descriptionHeight,
            textOverflow: isExpanded ? "clip" : "ellipsis",
            paddingRight: isExpanded ? "6px" : 0,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {row.description}
        </p>

        {row.stats && row.stats.length > 0 && (
          <div
            style={{
              marginLeft: "6px",
              marginTop: "40px",
              display: "flex",
              gap: "24px",
            }}
          >
            {row.stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 800,
                    fontSize: "24px",
                    lineHeight: "32px",
                    color: row.statColor,
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
        )}

        <button
          onClick={onToggleExpand}
          style={{
            marginLeft: "4px",
            marginTop: "24px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            color: row.eyebrowColor,
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
            textDecoration: "underline",
            textAlign: "left",
            alignSelf: "flex-start",
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

function Row23Card({ row, isExpanded, onToggleExpand }) {
  const padLeft = row.layout === "row2" ? "50px" : "58px";
  const descriptionHeight = "104px";

  return (
    <div
      className="home-diff-card w-full lg:flex-1 relative"
      style={{
        background: "#F8FAFC",
        borderRadius: "16px",
        minHeight: "420px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: `40px 40px 40px ${padLeft}`,
      }}
    >
      <Watermark row={row} />

      <div className="home-diff-card-content" style={{ position: "relative", zIndex: 1, width: "518.4px", display: "flex", flexDirection: "column", flex: 1 }}>
        <span
          style={{
            display: "block",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            color: row.eyebrowColor,
            marginBottom: "8px",
            marginTop: "auto",
          }}
        >
          {row.eyebrow}
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
          className="home-diff-desc-scroll"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            color: "#475569",
            margin: 0,
            display: isExpanded ? "block" : "-webkit-box",
            WebkitLineClamp: isExpanded ? "unset" : 3,
            WebkitBoxOrient: "vertical",
            overflow: isExpanded ? "auto" : "hidden",
            overflowY: isExpanded ? "auto" : "hidden",
            height: descriptionHeight,
            maxHeight: descriptionHeight,
            minHeight: descriptionHeight,
            textOverflow: isExpanded ? "clip" : "ellipsis",
            paddingRight: isExpanded ? "6px" : 0,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {row.description}
        </p>

        {row.stats && row.stats.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "24px",
              paddingTop: "32px",
            }}
          >
            {row.stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 800,
                    fontSize: "24px",
                    lineHeight: "32px",
                    color: row.statColor,
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
        )}

        <button
          onClick={onToggleExpand}
          style={{
            marginTop: "24px",
            marginBottom: "auto",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            color: row.eyebrowColor,
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
            textDecoration: "underline",
            textAlign: "left",
            alignSelf: "flex-start",
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

function Row({ row, isExpanded, onToggleExpand }) {
  const imageBlock = (
    <div
      className="home-diff-image shrink-0 overflow-hidden"
      style={{
        width: row.imageWidth,
        height: "420px",
        borderRadius: "16px",
        position: "relative",
        isolation: "isolate",
      }}
    >
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
    row.layout === "row1" ? (
      <Row1Card row={row} isExpanded={isExpanded} onToggleExpand={onToggleExpand} />
    ) : (
      <Row23Card row={row} isExpanded={isExpanded} onToggleExpand={onToggleExpand} />
    );

  return (
    <div
      className="home-diff-row"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {row.imageRight ? (
        <div
          className="home-diff-row-inner"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: row.layout === "row2" ? "0px 40px" : "0px 40px 0px 40px",
          }}
        >
          {cardBlock}
          {imageBlock}
        </div>
      ) : (
        <div
          className="home-diff-row-inner"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: row.layout === "row1" ? "0px 1px 0px 40px" : "0px 40px",
          }}
        >
          {row.layout === "row1" ? (
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
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const fetchedCards = await getApproachCards();
        const sortedCards = fetchedCards
          .filter(c => c.isActive !== false)
          .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

        const transformedRows = sortedCards.map((card, idx) => {
          const config = layoutConfigs[idx % layoutConfigs.length];
          const stats = [];
          if (card.stat1Value && card.stat1Label) stats.push({ value: card.stat1Value, label: card.stat1Label });
          if (card.stat2Value && card.stat2Label) stats.push({ value: card.stat2Value, label: card.stat2Label });

          return {
            ...config,
            eyebrow: card.badge || "",
            title: card.title || "",
            description: card.description || "",
            image: card.image || defaultImages[idx % defaultImages.length],
            stats: stats,
          };
        });

        setRows(transformedRows);
      } catch (error) {
        console.error('Error fetching cards:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  return (
    <section
      className="home-diff-section"
      style={{
        padding: "0px 54px 0px 61px",
        background: "white",
      }}
    >
      <style>{`
        .home-diff-desc-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .home-diff-desc-scroll::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 1350px) {
          .home-diff-header, .home-diff-heading-wrap, .home-diff-rows {
            width: 100% !important;
          }
          .home-diff-row-inner {
            padding: 0 20px !important;
          }
        }
        @media (max-width: 1023px) {
          .home-diff-section {
            padding: 40px 24px !important;
          }
          .home-diff-row-inner {
            flex-direction: column !important;
            height: auto !important;
            padding: 0 !important;
            gap: 24px !important;
          }
          .home-diff-card {
            min-height: auto !important;
            padding: 40px 24px !important;
          }
          .home-diff-card-content {
            width: 100% !important;
          }
          .home-diff-image {
            width: 100% !important;
            height: 300px !important;
          }
        }
      `}</style>

      <div
        className="home-diff-inner"
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
          className="home-diff-header"
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
            className="home-diff-heading-wrap"
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
          className="home-diff-rows"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "1325px",
          }}
        >
          {loading ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>Loading...</div>
          ) : rows.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>No content available.</div>
          ) : (
            rows.map((row, i) => (
              <Row
                key={i}
                row={row}
                isExpanded={Boolean(expandedCards[i])}
                onToggleExpand={() =>
                  setExpandedCards((prev) => ({
                    ...prev,
                    [i]: !prev[i],
                  }))
                }
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}