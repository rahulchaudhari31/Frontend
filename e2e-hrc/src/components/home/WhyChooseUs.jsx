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
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-12 lg:mb-16">
          <span
            className="inline-flex items-center justify-center px-3 py-1.5 bg-[#E8EDF5] text-[#004CA5] rounded-full text-xs font-semibold"
          >
            Why Choose E2E HRC
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004CA5] text-center leading-tight">
            What makes us different
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {cards.map((card, i) => {
            // Determine badge color, stat color, and decorative letter based on badge text
            const getBadgeColor = () => {
              const badgeText = (card.badge || "").toUpperCase();
              if (badgeText.includes("PEOPLE") || badgeText.includes("HUMAN")) return "#004CA5";
              if (badgeText.includes("MEASURABLE") || badgeText.includes("RESULT")) return "#F39308";
              if (badgeText.includes("PARTNERSHIP") || badgeText.includes("COMMITMENT")) return "#C9DB82";
              return "#004CA5";
            };

            const badgeColor = getBadgeColor();
            const reversed = i % 2 === 1;

            return (
              <div
                key={card._id || i}
                className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center"
              >
                {/* Image side */}
                <div className={`w-full ${reversed ? "lg:order-2" : "lg:order-1"} h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden flex-shrink-0`}>
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#E8EDF5]" />
                  )}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(248,250,252,0.15) 100%)",
                    }}
                  />
                </div>

                {/* Content side */}
                <div className={`w-full lg:w-1/2 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div
                    className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 lg:p-10"
                    style={{
                      minHeight: "300px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
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
                        fontSize: "clamp(24px, 5vw, 30px)",
                        lineHeight: "1.2",
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
                        fontSize: "14px",
                        lineHeight: "26px",
                        color: "#475569",
                        marginBottom: "24px",
                      }}
                    >
                      {card.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: "24px",
                        flexWrap: "wrap",
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
