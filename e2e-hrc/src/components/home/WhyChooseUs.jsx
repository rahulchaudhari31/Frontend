import { useState, useEffect } from "react";
import { getApproachCards } from "../../services/home/approachCardService";

function WhyChooseUs() {
  const [cards, setCards] = useState([]);
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
        setCards(sortedCards);
      } catch (error) {
        console.error('Error loading approach cards:', error);
        setCards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);
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
        backgroundColor: "#ffffff",
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
        {cards.map((card, i) => {
          // Determine badge color, stat color, and decorative letter based on badge text
          const getBadgeColor = () => {
            const badgeText = (card.badge || "").toUpperCase();
            if (badgeText.includes("PEOPLE") || badgeText.includes("HUMAN")) return "#004CA5";
            if (badgeText.includes("MEASURABLE") || badgeText.includes("RESULT")) return "#F39308";
            if (badgeText.includes("PARTNERSHIP") || badgeText.includes("COMMITMENT")) return "#C9DB82";
            return "#004CA5";
          };

          const getDecorativeLetter = () => {
            const titleText = (card.title || "").toUpperCase();
            return titleText.charAt(0) || "E";
          };

          const badgeColor = getBadgeColor();
          const reversed = i % 2 === 1;
          const letter = getDecorativeLetter();

          return (
            <div
              key={card._id || i}
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
                  padding: reversed ? "0px 40px" : "0px 1px 0px 40px",
                  justifyContent: reversed ? "flex-start" : "flex-end",
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
                      color: badgeColor,
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
                          color: badgeColor,
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
                          color: badgeColor,
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
                  left: reversed ? undefined : "0px",
                  right: reversed ? "0px" : undefined,
                  top: "0px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                {card.image ? (
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
                  color: badgeColor,
                  opacity: 0.05,
                  left: reversed ? undefined : "0px",
                  right: reversed ? "0px" : undefined,
                  top: "12px",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              >
                {letter}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChooseUs;
