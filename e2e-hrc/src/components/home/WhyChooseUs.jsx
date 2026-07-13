import img1 from "../../assets/image/childrenssss.jpg";
import img2 from "../../assets/image/mann.jpg";
import img3 from "../../assets/image/buiding.jpg";

const cards = [
  {
    badge: "PEOPLE FIRST, ALWAYS",
    badgeColor: "#004CA5",
    title: "Human Approach",
    description:
      "We believe recruitment is fundamentally a human process. Behind every vacancy is a career, and behind every hire is a cultural fit waiting to happen. We take the time to understand both sides, ensuring relationships built on trust and mutual respect.",
    stat1Value: "500+",
    stat1Label: "Active Clients",
    stat2Value: "98%",
    stat2Label: "Satisfaction Rate",
    statColor: "#004CA5",
    letter: "H",
    letterColor: "#004CA5",
    image: img3,
    reversed: false,
  },
  {
    badge: "MEASURABLE OUTCOMES",
    badgeColor: "#F39308",
    title: "Results Driven",
    description:
      "Our track record speaks for itself. With a 98% client satisfaction rate and over 10,000 successful placements, we combine data-driven insights with deep industry knowledge to deliver outcomes that matter.",
    stat1Value: "10K+",
    stat1Label: "Placements Made",
    stat2Value: "25+",
    stat2Label: "Industries Served",
    statColor: "#F39308",
    letter: "R",
    letterColor: "#F5A300",
    image: img2,
    reversed: true,
  },
  {
    badge: "LONG-TERM PARTNERSHIP",
    badgeColor: "#C9DB82",
    title: "Commitment Always",
    description:
      "We don't disappear after placement. Our commitment extends beyond filling roles — we provide ongoing support, ensuring both clients and candidates thrive long after the handshake.",
    stat1Value: "15+",
    stat1Label: "Years Experience",
    stat2Value: "4",
    stat2Label: "UK Offices",
    statColor: "#C9DB82",
    letter: "C",
    letterColor: "#C9DB82",
    image: img1,
    reversed: false,
  },
];

function WhyChooseUs() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "60px 54px 0px 61px",
        gap: "34px",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: "12px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6px 12px",
            gap: "8px",
            background: "#E8EDF5",
            borderRadius: "9999px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "16px",
            textAlign: "center",
            color: "#004CA5",
          }}
        >
          Why Choose E2E HRC
        </span>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "36px",
            lineHeight: "40px",
            textAlign: "center",
            color: "#004CA5",
          }}
        >
          What makes us different
        </h2>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: "100%",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "100%",
              height: "420px",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {/* Content card */}
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: card.reversed ? "0px 40px" : "0px 1px 0px 40px",
                justifyContent: card.reversed ? "flex-start" : "flex-end",
                width: "100%",
                height: "420px",
                top: "0px",
                zIndex: 2,
              }}
            >
              {/* Text side */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "1px 40px 40px 50px",
                  background: "#F8FAFC",
                  borderRadius: "16px",
                  width: "755px",
                  height: "420px",
                  boxSizing: "border-box",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: card.badgeColor,
                    paddingBottom: "8px",
                  }}
                >
                  {card.badge}
                </p>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    fontSize: "30px",
                    lineHeight: "36px",
                    color: "#004CA5",
                    paddingBottom: "16px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#475569",
                    maxWidth: "460px",
                  }}
                >
                  {card.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    padding: "32px 0px 0px",
                    gap: "24px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                        fontSize: "24px",
                        lineHeight: "32px",
                        color: card.statColor,
                      }}
                    >
                      {card.stat1Value}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "16px",
                        color: "#64748B",
                      }}
                    >
                      {card.stat1Label}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                        fontSize: "24px",
                        lineHeight: "32px",
                        color: card.statColor,
                      }}
                    >
                      {card.stat2Value}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "16px",
                        color: "#64748B",
                      }}
                    >
                      {card.stat2Label}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image side */}
            <div
              style={{
                position: "absolute",
                width: "498px",
                height: "420px",
                left: card.reversed ? undefined : "0px",
                right: card.reversed ? "0px" : undefined,
                top: "0px",
                borderRadius: "16px",
                overflow: "hidden",
                zIndex: 1,
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(248,250,252,0.15) 100%)",
                }}
              />
            </div>

            {/* Decorative letter */}
            <span
              style={{
                position: "absolute",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "233px",
                lineHeight: "233px",
                color: card.letterColor,
                opacity: 0.05,
                left: card.reversed ? undefined : "0px",
                right: card.reversed ? "0px" : undefined,
                top: "12px",
                zIndex: 3,
                pointerEvents: "none",
              }}
            >
              {card.letter}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
