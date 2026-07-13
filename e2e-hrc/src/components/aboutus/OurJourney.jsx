import { useState, useEffect, useRef, useCallback } from "react";

const C = {
  navy: "#16213E",
  blue: "#00458D",
  orange: "#F5871F",
  lime: "#C6D93C",
  cream: "#F3F1ED",
  white: "#FFFFFF",
  heading: "#191C1E",
  body: "#424752",
  spine: "#E2E2E2",
  border: "rgba(194,198,212,0.2)",
};

const MILESTONES = [
  { year: "2007", title: "Founded in the United Kingdom", detail: "Khalid Mahmood founded the company in the UK, laying the foundation for what would grow into a multi-country consultancy group." },
  { year: "2007", title: "First overseas office opens in India", detail: "We expanded beyond the UK for the first time, opening our first international office in India." },
  { year: "2007", title: "Entered the GCC with a Dubai office", detail: "We set our first foothold in the Gulf region, opening an office in Dubai to serve clients across the GCC." },
  { year: "2008", title: "David Robertson joins as Immigration Advisor & HR Consultant", detail: "David brought deep expertise in immigration advisory and HR consulting, strengthening our founding team\u2019s capability." },
  { year: "2010", title: "Third overseas office opens in Pakistan", detail: "Continuing our international growth, we opened our third overseas office, this time in Pakistan." },
  { year: "2014", title: "Rebranded into three specialist ventures", detail: "We reorganised under three industry-focused brands: e2e HRC, e2e Infosys, and Elite PiC \u2014 each built to serve a distinct part of our clients\u2019 needs." },
  { year: "2014", title: "Aakanksha Chimote takes the helm of e2e HRC", detail: "Aakanksha stepped in to lead e2e HRC, guiding the venture\u2019s direction from that year onward." },
  { year: "2018", title: "Secured a contract with the UAE Ministry of Education", detail: "A landmark contract win with the Ministry of Education in the UAE, marking our growing credibility with government clients." },
  { year: "2019", title: "Our highest-ever number of consultancy projects", detail: "We closed out the year having completed more consultancy projects than in any year before it." },
  { year: "2021", title: "Expanded globally into Germany", detail: "We took our first step into continental Europe, establishing a presence in Germany." },
  { year: "2022", title: "Became a UKVI-approved English training & test provider", detail: "We earned UKVI approval to deliver Global English training and testing, expanding our service offering." },
  { year: "2024", title: "Recognised as an NHS-approved healthcare supplier", detail: "We were recognised as an approved supplier to the NHS, marking our entry into the UK healthcare sector." },
];

const STATS = [
  { number: "17+", label: "Years" },
  { number: "8", label: "Countries" },
  { number: "12", label: "Milestones" },
];

const R =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── hooks ── */
const useFade = (th = 0.1) => {
  const r = useRef(null);
  const [v, setV] = useState(R);
  useEffect(() => {
    if (R) return;
    const el = r.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); o.unobserve(el); } },
      { threshold: th, rootMargin: "0px 0px -30px 0px" }
    );
    o.observe(el);
    return () => o.disconnect();
  }, [th]);
  return [r, v];
};

/* ── icons ── */
const Chev = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transition: R ? "none" : "transform .3s", transform: open ? "rotate(180deg)" : "none" }}>
    <path d="M4 6L8 10L12 6" stroke={C.blue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MilestoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="3" fill={C.orange} />
    <circle cx="8" cy="8" r="6" stroke={C.orange} strokeWidth="1.5" fill="none" opacity=".35" />
  </svg>
);

/* ── card ── */
function Card({ m, i, isLeft }) {
  const [open, setOpen] = useState(false);
  const [hov, setHov] = useState(false);
  const [ref, vis] = useFade(0.12);

  const tog = useCallback(() => setOpen(v => !v), []);
  const key = useCallback(e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); tog(); } }, [tog]);

  return (
    <div
      ref={ref}
      className="oj-row"
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-end" : "flex-start",
        paddingLeft: isLeft ? 0 : "calc(50% + 36px)",
        paddingRight: isLeft ? "calc(50% + 36px)" : 0,
        position: "relative",
        marginBottom: 24,
        opacity: R ? 1 : vis ? 1 : 0,
        transform: R ? "none" : vis ? "translateY(0)" : "translateY(20px)",
        transition: R ? "none" : "opacity .5s ease, transform .5s ease",
        transitionDelay: `${(i % 3) * 0.06}s`,
      }}
    >
      {/* node */}
      <div
        className="oj-node"
        style={{
          position: "absolute", left: "50%", top: 20, width: 42, height: 42,
          borderRadius: "50%", background: C.navy,
          border: `3px solid ${open ? C.orange : C.white}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 3,
          boxShadow: open ? "0 0 0 5px rgba(245,135,31,.12)" : "0 2px 8px rgba(22,33,62,.15)",
          transition: R ? "none" : "border-color .3s, box-shadow .3s, transform .3s",
          transform: open ? "translateX(-50%) scale(1.1)" : "translateX(-50%) scale(1)",
        }}
      >
        <MilestoneIcon />
      </div>

      {/* card */}
      <div
        role="button" tabIndex={0} aria-expanded={open}
        onClick={tog} onKeyDown={key}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        onFocus={() => setHov(true)} onBlur={() => setHov(false)}
        className="oj-card"
        style={{
          width: "100%", maxWidth: 440,
          background: C.white,
          border: `1.5px solid ${open ? C.lime : hov ? "rgba(0,69,141,.18)" : C.border}`,
          borderRadius: 20, cursor: "pointer", outline: "none", overflow: "hidden",
          boxShadow: open ? "0 8px 32px rgba(0,0,0,.06)" : hov ? "0 4px 16px rgba(0,0,0,.04)" : "0 1px 3px rgba(0,0,0,.03)",
          transition: R ? "none" : "border-color .25s, box-shadow .3s, transform .3s",
          transform: hov && !open ? "translateY(-2px)" : "none",
        }}
      >
        <div style={{ padding: "20px 24px 18px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
            {/* year pill */}
            <span style={{
              fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 13,
              color: C.white, background: C.navy, padding: "6px 14px",
              borderRadius: 10, flexShrink: 0, letterSpacing: ".02em", lineHeight: "18px",
            }}>
              {m.year}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{
                margin: 0, fontFamily: "'Poppins',sans-serif", fontWeight: 600,
                fontSize: 15, lineHeight: "23px", color: C.heading,
              }}>
                {m.title}
              </h3>
              {/* read-more */}
              <div style={{
                display: "flex", alignItems: "center", gap: 6, marginTop: 8,
                fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 12,
                color: C.blue, letterSpacing: ".01em", cursor: "pointer",
              }}>
                <span>{open ? "Show less" : "Read more"}</span>
                <Chev open={open} />
              </div>
            </div>
          </div>

          {/* expandable — grid rows trick, no scrollHeight needed */}
          <div style={{
            display: "grid",
            gridTemplateRows: open ? "1fr" : "0fr",
            transition: R ? "none" : "grid-template-rows .35s ease",
          }}>
            <div style={{ overflow: "hidden", opacity: open ? 1 : 0, transition: R ? "none" : "opacity .25s ease .08s" }}>
              <div style={{ paddingTop: 14, marginTop: 12, borderTop: "1px solid #ECECEC" }}>
                <p style={{
                  margin: 0, fontFamily: "'Inter',sans-serif", fontWeight: 400,
                  fontSize: 14, lineHeight: "24px", color: C.body,
                }}>
                  {m.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── main ── */
export default function OurJourney() {
  const secRef = useRef(null);
  const fillRef = useRef(null);
  const [hdr, hdrV] = useFade(0.08);

  useEffect(() => {
    if (R) { if (fillRef.current) fillRef.current.style.height = "100%"; return; }
    const go = () => {
      if (!secRef.current || !fillRef.current) return;
      const r = secRef.current.getBoundingClientRect();
      const p = Math.min(100, Math.max(0, ((window.innerHeight - r.top) / (r.height + window.innerHeight * 0.4)) * 100));
      fillRef.current.style.height = `${p}%`;
    };
    window.addEventListener("scroll", go, { passive: true });
    go();
    return () => window.removeEventListener("scroll", go);
  }, []);

  return (
    <section
      ref={secRef}
      aria-label="Our Journey timeline"
      style={{
        width: "1440px", maxWidth: "100%", margin: "0 auto",
        padding: "80px 113.5px 88px",
        background: C.cream,
        fontFamily: "'Inter',sans-serif",
        position: "relative", overflow: "hidden", boxSizing: "border-box",
      }}
    >
      {/* decorative */}
      <div style={{ position: "absolute", width: 180, height: 180, left: -50, top: 20, background: C.orange, opacity: .05, borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", width: 240, height: 240, right: -70, bottom: 40, background: C.blue, opacity: .03, borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", fontWeight: 900, fontSize: 280, lineHeight: "1", color: "rgba(0,69,141,.02)", right: 60, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", userSelect: "none", fontFamily: "Inter,sans-serif", zIndex: 0 }}>E2E</div>

      {/* header */}
      <div
        ref={hdr}
        style={{
          maxWidth: 768, margin: "0 auto 48px", padding: "0 32px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
          position: "relative", zIndex: 1,
          opacity: R ? 1 : hdrV ? 1 : 0,
          transform: R ? "none" : hdrV ? "translateY(0)" : "translateY(16px)",
          transition: R ? "none" : "opacity .5s, transform .5s",
        }}
      >
        {/* eyebrow */}
        <span style={{
          fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 13,
          letterSpacing: ".1em", textTransform: "uppercase", color: C.orange,
          padding: "6px 18px", border: `1px solid ${C.orange}`,
          borderRadius: 20, background: "rgba(245,135,31,.04)", marginBottom: 4,
        }}>
          2007 — 2024
        </span>

        <h2 style={{
          margin: 0, fontFamily: "'Poppins',sans-serif", fontWeight: 800,
          fontSize: 36, lineHeight: "48px", letterSpacing: "-.48px",
          color: C.heading, textAlign: "center",
        }}>
          Our Journey
        </h2>

        <p style={{
          margin: 0, fontFamily: "'Poppins',sans-serif", fontWeight: 600,
          fontSize: 17, color: C.orange, textAlign: "center",
        }}>
          Building a Legacy of Excellence
        </p>

        <div style={{ width: 64, height: 4, background: C.blue, borderRadius: 2, marginTop: 2 }} />

        <p style={{
          margin: 0, fontFamily: "'Inter',sans-serif", fontWeight: 400,
          fontSize: 17, lineHeight: "28px", color: C.body, textAlign: "center", maxWidth: 600,
        }}>
          From a single UK office to a global consultancy group — nearly two decades of growth, expansion, and impact.
        </p>
      </div>

      {/* stats */}
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 60, position: "relative", zIndex: 1, flexWrap: "wrap" }}>
        {STATS.map(s => (
          <div key={s.label} style={{
            width: 176, background: C.white, border: `1.5px solid ${C.border}`,
            borderRadius: 16, padding: "28px 20px", textAlign: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,.03)",
          }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 34, lineHeight: "1", color: C.orange, marginBottom: 6 }}>{s.number}</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: C.body }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* timeline */}
      <div style={{ position: "relative", maxWidth: 960, margin: "0 auto", zIndex: 1 }}>
        {/* spine */}
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 3, transform: "translateX(-50%)", background: C.spine, borderRadius: 2, zIndex: 0 }}>
          <div ref={fillRef} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0%", borderRadius: 2, background: `linear-gradient(180deg, ${C.orange}, ${C.lime})`, transition: R ? "none" : "height .06s linear", willChange: "height" }} />
        </div>

        {MILESTONES.map((m, i) => (
          <Card key={i} m={m} i={i} isLeft={i % 2 === 0} />
        ))}
      </div>

      <style>{`
        @media(max-width:900px){
          .oj-row{padding-left:56px!important;padding-right:0!important;justify-content:flex-start!important}
          .oj-node{left:18px!important;transform:translateX(0)!important;width:36px!important;height:36px!important}
          .oj-card{max-width:100%!important}
        }
        @media(max-width:640px){
          .oj-row{padding-left:48px!important}
          .oj-node{left:14px!important;width:32px!important;height:32px!important}
          .oj-card h3{font-size:14px!important;line-height:20px!important}
        }
      `}</style>
    </section>
  );
}
