import { useRef, useEffect, useImperativeHandle, forwardRef, useState, useCallback } from "react";

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
      className="emp-testimonial-card"
      style={{
        position: "relative",
        width: "100%",
        height: 388,
        background: "#FFFFFF",
        borderRadius: 12,
        flexShrink: 0,
        overflow: "hidden",
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: t.alt === "Ford" ? "center" : "flex-start" }}>
          <img src={t.logo} alt={t.alt} style={{ width: 128.65, height: 45.95, objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}

const TestimonialsCarousel = forwardRef(function TestimonialsCarousel({ data = [] }, ref) {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);
  const total = data.length;

  const goTo = useCallback((idx) => {
    setActive(((idx % total) + total) % total);
  }, [total]);

  const scroll = (dir) => {
    if (dir === "left") {
      goTo(active - 1);
    } else {
      goTo(active + 1);
    }
  };

  useImperativeHandle(ref, () => ({ scroll }), [scroll]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [total]);

  // Pause on hover
  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 3000);
  };

  return (
    <div
      className="emp-testimonials-slider"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={() => setTimeout(resume, 3000)}
    >
      <div
        className="emp-testimonials-slider-track"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {data.map((t, i) => (
          <div className="emp-testimonials-slider-slide" key={`${t.alt}-${i}`}>
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
    </div>
  );
});

export function NavButtons({ carouselRef }) {
  return (
    <div className="emp-testimonials-nav-buttons">
      <button
        onPointerDown={(e) => { e.preventDefault(); carouselRef.current?.scroll("left"); }}
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
        onPointerDown={(e) => { e.preventDefault(); carouselRef.current?.scroll("right"); }}
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
  );
}

export default TestimonialsCarousel;
