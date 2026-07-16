import React from "react";
import towerBridgeImg from "../../assets/images/Career Growth imgs/uk1.jpg";
import manScarfImg from "../../assets/image/mann.jpg";
import childrenImg from "../../assets/image/childrenssss.jpg";

const rows = [
  {
    eyebrow: "PEOPLE FIRST, ALWAYS",
    eyebrowColor: "#004CA5",
    title: "Human Approach",
    description:
      "We believe recruitment is fundamentally a human process. Every candidate is a person with aspirations, every employer has a culture worth protecting. We listen, understand, and connect with genuine care.",
    stats: [
      { value: "500+", label: "Active Clients" },
      { value: "98%", label: "Satisfaction Rate" },
    ],
    statColor: "#004CA5",
    image: towerBridgeImg,
    letterSrc: "/watermark-H.png",
    letterW: "302.64px",
    letterH: "339.54px",
    letterTop: "68.23px",
    letterRight: "42.68px",
    letterColor: "#004CA5",
    letterOpacity: 0.1,
    imageWidth: "496px",
    imageRight: false,
    layout: "row1",
  },
  {
    eyebrow: "MEASURABLE OUTCOMES",
    eyebrowColor: "#F39308",
    title: "Results Driven",
    description:
      "Our track record speaks for itself. With a 98% client retention rate and thousands of successful placements, we\u2019re relentlessly focused on delivering outcomes that matter to your business.",
    stats: [
      { value: "10k+", label: "Placements Made" },
      { value: "25+", label: "Industries Served" },
    ],
    statColor: "#F39308",
    image: manScarfImg,
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
    eyebrow: "LONG-TERM PARTNERSHIP",
    eyebrowColor: "#C9DB82",
    title: "Commitment Always",
    description:
      "We don\u2019t disappear after placement. Our commitment to clients and candidates extends far beyond the hire date \u2014 with aftercare, check-ins, and genuine ongoing support at every stage.",
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "4", label: "UK Offices" },
    ],
    statColor: "#C9DB82",
    image: childrenImg,
    letterSrc: "/watermark-C.png",
    letterW: "250.38px",
    letterH: "314.176px",
    letterTop: "44.41px",
    letterRight: "35.31px",
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

function Row1Card({ row }) {
  return (
    <div
      className="home-diff-card w-full lg:flex-1 relative"
      style={{
        background: "#F8FAFC",
        borderRadius: "16px",
        height: "420px",
        overflow: "hidden",
      }}
    >
      <Watermark row={row} />

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
          color: row.eyebrowColor,
          zIndex: 1,
        }}
      >
        {row.eyebrow}
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
    </div>
  );
}

function Row23Card({ row }) {
  const padLeft = row.layout === "row2" ? "50px" : "58px";
  return (
    <div
      className="home-diff-card w-full lg:flex-1 relative"
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
      <Watermark row={row} />

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
            color: row.eyebrowColor,
            marginBottom: "8px",
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
      </div>
    </div>
  );
}

function Row({ row }) {
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
      <Row1Card row={row} />
    ) : (
      <Row23Card row={row} />
    );

  return (
    <div
      className="home-diff-row"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        height: "420px",
        position: "relative",
      }}
    >
      {row.imageRight ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: row.layout === "row2" ? "0px 40px" : "0px 40px 0px 40px",
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
            padding: row.layout === "row1" ? "0px 1px 0px 40px" : "0px 40px",
            height: "420px",
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
  return (
    <section
      className="home-diff-section"
      style={{
        padding: "0px 54px 0px 61px",
        background: "white",
      }}
    >
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
          {rows.map((row) => (
            <Row key={row.title} row={row} />
          ))}
        </div>
      </div>
    </section>
  );
}
