import { useRef, useEffect, useState } from "react";
import backgroundImg from "../../assets/images/Career Growth imgs/background employerr.png";
import { getEmployerTestimonials } from "../../services/employer/employerTestimonialsService";

// ─── Image URL helper ────────────────────────────────────────────────────────
const getImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${import.meta.env.VITE_API_BASE_URL || ""}${path}`;
};

// ─── Icons ───────────────────────────────────────────────────────────────────
const ChevronLeftIcon = () => (
  <svg width="8.98" height="15.58" viewBox="0 0 9 16" fill="none">
    <path d="M8 1L1 8L8 15" stroke="#004CA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="8.98" height="15.58" viewBox="0 0 9 16" fill="none">
    <path d="M1 1L8 8L1 15" stroke="#004CA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Card Component ───────────────────────────────────────────────────────────
function TestimonialCard({ t }) {
  const logoSrc = getImageUrl(t.companyLogo);

  return (
    <div
      className="testimonial-card"
      style={{
        position: "relative",
        width: 530,
        height: 388,
        background: "#FFFFFF",
        borderRadius: 12,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 400,
          left: "calc(50% - 400px/2)",
          top: 55,
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 30, width: 368, height: 170 }}>
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
            {/* backend field: title */}
            {t.title}
          </h3>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "19px",
              color: "#000000",
              margin: 0,
              maxWidth: 362,
            }}
          >
            {/* backend field: reviewText */}
            {t.reviewText}
          </p>
        </div>
        <div
          style={{
            width: 400,
            height: 0,
            border: "1px solid rgba(0,0,0,0.25)",
            transform: "rotate(0.27deg)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={t.companyName || "Company logo"}
              style={{ width: 128.65, height: 45.95, objectFit: "contain" }}
            />
          ) : t.companyName ? (
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 18,
                color: "#004CA5",
              }}
            >
              {t.companyName}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Testimonials() {
  const [section, setSection] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const trackRef = useRef(null);
  const scrollOffset = useRef(0);
  const animRef = useRef(null);
  const pausedRef = useRef(false);
  // Keep a ref to the current cards count so the animation loop always sees latest value
  const cardsCountRef = useRef(0);

  // ── Fetch data ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const raw = await getEmployerTestimonials();

        // Support: { success, data: { section, cards } }  ← backend shape
        //          { data: { section, cards } }
        //          { section, cards }
        const payload = raw?.data || raw;
        const fetchedSection = payload?.section ?? null;
        let fetchedCards = [];
        if (Array.isArray(payload?.cards)) {
          fetchedCards = payload.cards;
        } else if (Array.isArray(payload)) {
          fetchedCards = payload;
        }

        setSection(fetchedSection);
        setCards(fetchedCards);
        cardsCountRef.current = fetchedCards.length;
      } catch (err) {
        console.error("[EmployerTestimonials] fetch error:", err);
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ── Infinite auto-scroll animation ─────────────────────────────────────────
  // Depends on cards being loaded; resets offset when cards change
  useEffect(() => {
    scrollOffset.current = 0;
    let lastTime = performance.now();
    const cardWidth = 574; // card width (530) + gap (44)

    const animate = (time) => {
      if (trackRef.current && !pausedRef.current && cardsCountRef.current > 0) {
        const delta = time - lastTime;
        scrollOffset.current -= delta * 0.05;
        const totalWidth = cardsCountRef.current * cardWidth;
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
  }, [cards]);

  // ── Manual scroll buttons ───────────────────────────────────────────────────
  const scroll = (dir) => {
    if (!trackRef.current) return;
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

  // Duplicate cards for seamless infinite loop (same as original doubled logic)
  const doubled = cards.length > 0 ? [...cards, ...cards] : [];

  // Badge text with fallback
  const badgeText = section?.badgeText || "Testimonials";
  const sectionTitle = section?.sectionTitle || "Trusted by Businesses Worldwide";
  const sectionDescription =
    section?.sectionDescription ||
    "Discover the stories and experiences of individuals and companies who have found success and excellence through E2E HRC";

  return (
    <section
      className="employer-testimonials"
      style={{
        position: "relative",
        width: "100%",
        padding: "43px 100px 59px",
        gap: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        background: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImg}) center/cover no-repeat`,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1240, margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 80, height: 0, borderTop: "1px solid #FFFFFF" }} />
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  gap: 10,
                  background: "#FFFFFF",
                  borderRadius: 20,
                  width: 135,
                  height: 32,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "19px",
                  color: "#F39308",
                }}
              >
                {/* backend field: section.badgeText */}
                {badgeText}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: 36,
                lineHeight: "76px",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              {/* backend field: section.sectionTitle */}
              {sectionTitle}
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 568, width: "100%" }}>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "19px",
                color: "#FFFFFF",
                width: 580,
                margin: 0,
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              {/* backend field: section.sectionDescription */}
              {sectionDescription}
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 10, width: 91.93 }}>
              <button
                onClick={() => scroll("left")}
                style={{
                  width: 40.97,
                  height: 40.97,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#EBEEF8",
                  border: "1px solid #004CA5",
                  borderRadius: 58.52,
                  cursor: "pointer",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  padding: "11.7px 17.56px",
                  gap: 11.7,
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
                  background: "#FFFFFF",
                  borderRadius: 58.52,
                  cursor: "pointer",
                  flexShrink: 0,
                  padding: "11.7px 17.56px",
                  gap: 11.7,
                }}
                aria-label="Next"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Continuous scroller */}
        <div className="testimonials-track-wrapper">
          {loading ? (
            <div style={{ color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: 14, padding: "20px 0" }}>
              Loading testimonials...
            </div>
          ) : error ? (
            <div style={{ color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: 14, padding: "20px 0" }}>
              {error}
            </div>
          ) : cards.length === 0 ? (
            <div style={{ color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontSize: 14, padding: "20px 0" }}>
              No testimonials available at the moment.
            </div>
          ) : (
            <div className="testimonials-track" ref={trackRef}>
              {doubled.map((t, i) => (
                <TestimonialCard key={`${t._id || t.id}-${i}`} t={t} />
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
      `}</style>
    </section>
  );
}
