import React, { useEffect, useState } from "react";
import { getAboutHero } from "../../services/about/aboutHeroService";
import { ArrowRight, Search } from "lucide-react";

export default function HeroSection() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await getAboutHero();
        setHero(response?.data || null);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  const title = hero?.mainTitle || hero?.maintitle || "";
  const subtitle = hero?.subtitle || hero?.subTitle || "";
  const description = hero?.description || "";
  const button1Text = hero?.button1Text || "";
  const button1Link = hero?.button1Link || "";
  const button2Text = hero?.button2Text || "";
  const button2Link = hero?.button2Link || "";
  const image = hero?.heroImage || hero?.image || "";

  return (
    <section
      className="about-hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "480px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: image ? `url(${image})` : "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(10,20,40,0.25) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "620px",
          padding: "48px 64px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "20px",
            backdropFilter: "blur(4px)",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
            }}
          />
          <span
            style={{
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {loading ? "Loading" : error ? "Unavailable" : "About Us"}
          </span>
        </div>

        {loading ? (
          <div style={{ color: "#fff", fontSize: "18px" }}>Loading content...</div>
        ) : (
          <>
            <h1
              style={{
                margin: 0,
                fontSize: "45px",
                lineHeight: 1.25,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              <span style={{ color: "#FFFFFF" }}>{title}</span>
              <br />
              <span style={{ color: "#094283" }}>{subtitle}</span>
            </h1>

            <p
              style={{
                marginTop: "20px",
                marginBottom: "32px",
                fontSize: "16px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.85)",
                maxWidth: "540px",
              }}
            >
              {description || "We are more than a recruitment agency; we are strategic partners in your growth."}
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {button1Text ? (
                <a
                  href={button1Link || "#"}
                  className="flex items-center justify-center gap-2 py-[17px] px-8 bg-[#F39308] hover:bg-[#d9820a] text-[#004CA5] font-inter font-semibold text-sm tracking-[0.7px] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00458D] no-underline"
                >
                  {button1Text}
                  <ArrowRight className="w-[13.33px] h-[13.33px] text-[#004CA5]" strokeWidth={2} />
                </a>

              ) : null}

              {button2Text ? (
                <a
                  href={button2Link || "#"}
                  className="flex items-center justify-center gap-2 py-4 px-8 bg-[#F7F9FB] hover:bg-[#EDF0F4] border border-[#C2C6D4] text-[#004CA5] font-inter font-semibold text-sm tracking-[0.7px] rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00458D] no-underline"
                >
                  {button2Text}
                  <Search className="w-[15px] h-[15px] text-[#00458D]" strokeWidth={2} />
                </a>
              ) : null}
            </div>
          </>
        )}
      </div>
    </section>
  );
}


<div className="flex flex-wrap items-start gap-4 pt-4">
  {/* Button 1 — Hire Talent (primary) */}
  <a
    href="#"
    className="flex items-center justify-center gap-2 py-[17px] px-8 bg-[#F39308] hover:bg-[#d9820a] text-[#004CA5] font-inter font-semibold text-sm tracking-[0.7px] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00458D] no-underline"
  >
    Hire Talent
    <ArrowRight className="w-[13.33px] h-[13.33px] text-[#004CA5]" strokeWidth={2} />
  </a>

  {/* Button 2 — Find Opportunities (outline) */}
  <a
    href="#"
    className="flex items-center justify-center gap-2 py-4 px-8 bg-[#F7F9FB] hover:bg-[#EDF0F4] border border-[#C2C6D4] text-[#004CA5] font-inter font-semibold text-sm tracking-[0.7px] rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00458D] no-underline"
  >
    Find Opportunities
    <Search className="w-[15px] h-[15px] text-[#00458D]" strokeWidth={2} />
  </a>
</div>
