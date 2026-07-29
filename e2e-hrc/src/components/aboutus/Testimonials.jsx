import { useState, useRef, useEffect } from "react";
import { getTestimonials } from "../../services/about/testimonialService";

const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'}${path.startsWith('/') ? '' : '/'}${path}`;
};

const ChevronLeftIcon = () => (
  <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
    <path d="M8 1L1 8L8 15" stroke="#9A72F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
    <path d="M1 1L8 8L1 15" stroke="#FCF6F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function TestimonialCard({ t }) {
  const brand = t.companyName || "";
  const isFord = brand.toLowerCase().includes("ford"); // Kept original logic if it matters for alignment

  return (
    <div
      className="testimonial-card"
      style={{
        position: "relative",
        minWidth: 530,
        height: 388,
        background: "#FFFFFF",
        borderRadius: 12,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 484,
          height: 388,
          background: "rgba(255,255,255,0.5)",
          borderRadius: 12,
          left: 0,
          top: 0,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 400,
          height: 277.8,
          left: "calc(50% - 200px)",
          top: 35,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 0, width: 368, height: 170 }}>
          {t.title && (
            <h3
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: 20,
                lineHeight: "30px",
                color: "#000000",
                margin: 0,
              }}
            >
              {t.title}
            </h3>
          )}
          {t.description && (
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "19px",
                color: "#000000",
                margin: 0,
                marginTop: 6,
                display: "-webkit-box",
                WebkitLineClamp: 6,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}
            >
              {t.description}
            </p>
          )}
        </div>
        <div
          style={{
            width: 400,
            height: 0,
            border: "1px solid rgba(0,0,0,0.25)",
            transform: "rotate(0.27deg)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: isFord ? "center" : "flex-start", width: "100%" }}>
          {t.companyLogo ? (
            <img src={getImageUrl(t.companyLogo)} alt={brand} style={{ height: 40, objectFit: "contain", maxWidth: 150 }} />
          ) : (
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16, color: "#2A2A2A" }}>{brand}</span>
          )}
        </div>
      </div>
    </div>
  );
}

const Testimonials = () => {
  const [sectionData, setSectionData] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const displayItems = cards;
  const doubled = displayItems.length > 0 ? [...displayItems, ...displayItems] : [];

  const trackRef = useRef(null);
  const scrollOffset = useRef(0);
  const animRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTestimonials();
        if (response.success && response.data) {
          setSectionData(response.data.section || {});

          // Sort by order ASC just to be safe, though backend already sorts it
          const sortedCards = (response.data.cards || []).sort((a, b) => (a.order || 0) - (b.order || 0));
          setCards(sortedCards);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (displayItems.length === 0 || loading || error) return;

    let lastTime = performance.now();
    const animate = (time) => {
      if (trackRef.current && !pausedRef.current) {
        const delta = time - lastTime;
        scrollOffset.current -= delta * 0.05;
        const cardWidth = 574;
        const totalWidth = displayItems.length * cardWidth;
        if (Math.abs(scrollOffset.current) >= totalWidth) {
          scrollOffset.current = 0;
        }
        trackRef.current.style.transform = `translateX(${scrollOffset.current}px)`;
      }
      lastTime = time;
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [displayItems.length, loading, error]);

  const scroll = (dir) => {
    if (!trackRef.current || displayItems.length === 0) return;
    const cardWidth = 574;
    pausedRef.current = true;
    if (dir === "left") {
      scrollOffset.current += cardWidth;
    } else {
      scrollOffset.current -= cardWidth;
    }
    trackRef.current.style.transform = `translateX(${scrollOffset.current}px)`;
    setTimeout(() => { pausedRef.current = false; }, 2000);
  };

  return (
    <section
      className="about-testimonials"
      style={{
        position: "relative",
        width: "100%",
        margin: "0 auto",
        padding: "43px 100px 63px",
        gap: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        background: "linear-gradient(49.52deg, #1295D4 -4.12%, #7EC443 85.04%)",
        overflow: "hidden",
        boxSizing: "border-box",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 20, width: 403, height: "auto" }}>

            {sectionData?.badgeText && (
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20, width: 235, height: 32 }}>
                <div style={{ width: 80, height: 0, borderTop: "1px solid #FFFFFF" }} />
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 20px",
                    gap: 10,
                    background: "#FFFFFF",
                    borderRadius: 20,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "19px",
                    color: "#F39308",
                    height: 32,
                    whiteSpace: "nowrap"
                  }}
                >
                  {sectionData.badgeText}
                </span>
              </div>
            )}

            {sectionData?.sectionTitle && (
              <h2
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "30px",
                  lineHeight: "38px",
                  color: "#000",
                  margin: 0,
                  width: "100%",
                  height: "auto",
                }}
              >
                {sectionData.sectionTitle}
              </h2>
            )}

          </div>

          <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 568, width: "100%", minHeight: 40.97 }}>
            <div style={{ maxWidth: 580, display: "flex", alignItems: "flex-end", flex: 1 }}>
              {sectionData?.sectionDescription && (
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: 20,
                    lineHeight: "19px",
                    color: "#2A2A2A",
                    margin: 0,
                    lineHeight: "20px",
                  }}
                >
                  {sectionData.sectionDescription}
                </p>
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 10, width: 91.93, height: 40.97, flexShrink: 0 }}>
              <button
                onClick={() => scroll("left")}
                style={{
                  width: 40.97,
                  height: 40.97,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "11.7px 17.56px",
                  gap: 11.7,
                  background: "#EBEEF8",
                  border: "1px solid #9A72F9",
                  borderRadius: 58.52,
                  cursor: "pointer",
                  boxSizing: "border-box",
                  flexShrink: 0,
                }}
                aria-label="Previous"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={() => scroll("right")}
                style={{
                  width: 40.97,
                  height: 40.97,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "11.7px 17.56px",
                  gap: 11.7,
                  background: "#000000",
                  borderRadius: 58.52,
                  cursor: "pointer",
                  flexShrink: 0,
                }}
                aria-label="Next"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="testimonials-track-wrapper">
          {loading ? (
            <div style={{ display: 'flex', gap: 44, marginTop: 20 }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ minWidth: 530, height: 388, background: "rgba(255,255,255,0.4)", borderRadius: 12, animation: "pulse 1.5s infinite" }} />
              ))}
            </div>
          ) : error || cards.length === 0 ? (
            <div style={{ width: '100%', padding: '40px 0', textAlign: 'center', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
              {error || "No testimonials available at the moment."}
            </div>
          ) : (
            <div className="testimonials-track" ref={trackRef}>
              {doubled.map((t, i) => (
                <TestimonialCard key={`${t._id || i}-${i}`} t={t} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }

        .testimonials-track-wrapper {
          overflow: hidden;
          width: 100%;
          padding: 10px 0;
          margin-top: 20px;
        }

        .testimonials-track {
          display: flex;
          gap: 44px;
          width: max-content;
        }

        .testimonial-card {
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .testimonial-card:hover {
          transform: scale(1.05);
          z-index: 10;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
