import { useRef, useEffect } from "react";
import backgroundImg from "../../assets/images/Career Growth imgs/background employerr.png";
import fordLogo from "../../assets/images/Career Growth imgs/ford 1.png";
import disneyLogo from "../../assets/images/Career Growth imgs/disnep1.png";

const testimonials = [
  {
    id: 1,
    title: "Efficient and Effective Hiring Process!",
    quote:
      "The efficiency of E2E HRC's hiring process is commendable. Their intuitive approach, combined with the customizable criteria for candidate ranking, makes it easy to identify the right fit for our company. It's a game-changer for businesses seeking quality hires.",
    brand: "Ford",
    logo: fordLogo,
  },
  {
    id: 2,
    title: "Top-Notch Talent at Our Fingertips!",
    quote:
      "As an employer, finding top-notch talent is crucial for our success. E2E HRC has been our go-to partner for hiring. Their candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team.",
    brand: "Disney",
    logo: disneyLogo,
  },
  {
    id: 3,
    title: "Top-Notch Talent at Our Fingertips!",
    quote:
      "As an employer, finding top-notch talent is crucial for our success. E2E HRC has been our go-to partner for hiring. Their candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team.",
    brand: "Disney",
    logo: disneyLogo,
  },
  {
    id: 4,
    title: "Efficient and Effective Hiring Process!",
    quote:
      "The efficiency of E2E HRC's hiring process is commendable. Their intuitive approach, combined with the customizable criteria for candidate ranking, makes it easy to identify the right fit for our company. It's a game-changer for businesses seeking quality hires.",
    brand: "Ford",
    logo: fordLogo,
  },
];

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

function TestimonialCard({ t }) {
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
            {t.quote}
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: t.brand === "Ford" ? "center" : "flex-start" }}>
          <img src={t.logo} alt={t.brand} style={{ width: 128.65, height: 45.95, objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  const trackRef = useRef(null);
  const scrollOffset = useRef(0);
  const animRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    let lastTime = performance.now();
    const animate = (time) => {
      if (trackRef.current && !pausedRef.current) {
        const delta = time - lastTime;
        scrollOffset.current -= delta * 0.05;
        const cardWidth = 574;
        const totalWidth = testimonials.length * cardWidth;
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
  }, []);

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
                Testimonials
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
              Trusted by Businesses Worldwide
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
              Discover the stories and experiences of individuals and companies who have found success and excellence through E2E HRC
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 10, width: 91.93 }}>
              <button
                onPointerDown={(e) => { e.preventDefault(); scroll("left"); }}
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
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                }}
                aria-label="Previous"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onPointerDown={(e) => { e.preventDefault(); scroll("right"); }}
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
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
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
          <div className="testimonials-track" ref={trackRef}>
            {doubled.map((t, i) => (
              <TestimonialCard key={`${t.id}-${i}`} t={t} />
            ))}
          </div>
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
