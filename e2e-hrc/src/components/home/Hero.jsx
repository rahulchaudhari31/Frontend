import { useState, useEffect, useRef } from "react";
import useCountUp from "../../hooks/useCountUp";
import { getHomeHero } from "../../services/home/homeHeroService";
import { renderTitleWithHighlight } from "../../utils/heroTextHighlighter";

function HeroSkeleton() {
  return (
    <section className="relative bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
          {/* Left content skeleton */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="h-6 bg-gray-200 rounded-full w-64" />
            <div className="space-y-3">
              <div className="h-14 bg-gray-200 rounded-lg w-3/4" />
              <div className="h-14 bg-gray-200 rounded-lg w-2/3" />
            </div>
            <div className="space-y-2 mt-4">
              <div className="h-5 bg-gray-200 rounded w-1/2" />
              <div className="h-5 bg-gray-200 rounded w-2/5" />
            </div>
            <div className="flex gap-4 pt-4 flex-wrap">
              <div className="h-12 bg-gray-200 rounded-full flex-1 min-w-32 max-w-xs" />
              <div className="h-12 bg-gray-200 rounded-full flex-1 min-w-32 max-w-xs" />
            </div>
          </div>
          {/* Right image skeleton */}
          <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({
  target,
  suffix = "+",
  label,
  duration = 1500,
  delay = 0,
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const { count, done } = useCountUp(target, duration, delay, inView);
  const [visible, setVisible] = useState(false);

  // Trigger count-up when the element enters the viewport on any screen size
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Fade-in after delay (existing behavior preserved)
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-2 py-4 min-w-0 flex-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
      }}
    >
      <div className="font-inter font-bold text-2xl sm:text-3xl text-[#004CA5] leading-tight">
        <span
          style={{
            transform: done ? "scale(1.12)" : "scale(1)",
            transition: "transform 0.3s ease-out",
            display: "inline-block",
          }}
        >
          {count}
          {suffix}
        </span>
      </div>
      <div className="font-inter text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-2 whitespace-normal break-words text-center leading-snug min-h-[32px]">
        {label}
      </div>
    </div>
  );
}

const parseStatValue = (value) => {
  const stringValue = String(value ?? "");
  const match = stringValue.match(/^(\d+)(.*)$/);

  if (match) {
    return {
      numeric: parseInt(match[1], 10),
      suffix: match[2],
    };
  }

  return {
    numeric: 0,
    suffix: stringValue,
  };
};

function Hero({ onHireTalent, onFindOpportunities }) {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setLoading(true);
        const data = await getHomeHero();
        setHeroData(data);
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
        setHeroData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (loading) {
    return <HeroSkeleton />;
  }

  // Extract hero data with fallbacks
  const title = heroData.title || "Connecting Talent. Building Futures.";
  const highlightedText = heroData.highlightedText || "";
  const subtitle =
    heroData.subtitle || "TRUSTED RECRUITMENT SPECIALISTS IN THE UK";
  const description =
    heroData.description ||
    "Helping UK employers find exceptional talent and helping candidates discover opportunities to grow and thrive in their careers.";
  const buttonText = heroData.buttonText || "Hire Talent";
  const buttonLink = heroData.buttonLink || "#";
  const heroImage = heroData.heroImage || "";
  const stats = Array.isArray(heroData.stats) ? heroData.stats : [];

  return (
    <section className="relative z-10 bg-white w-full overflow-visible">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[53.5px] py-8 sm:py-12 lg:py-20 min-h-[400px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center min-w-0">
          {/* Left column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 min-w-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C9DB82] px-3 sm:px-4 py-2 rounded-full w-fit min-w-0 max-w-full">
              <div className="w-3 h-3 rounded-full bg-[#166534] flex-shrink-0" />
              <span className="font-inter font-semibold text-xs text-[#166534] truncate min-w-0">
                {subtitle}
              </span>
            </div>

            {/* Heading */}
            <div className="min-w-0">
              <h1 className="font-inter font-extrabold text-2xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight text-[#004CA5] break-words">
                {renderTitleWithHighlight(title)}
                {highlightedText && (
                  <span className="text-[#F39308]">{highlightedText}</span>
                )}
              </h1>
            </div>

            {/* Description */}
            <div className="min-w-0 max-w-[514px]">
              <p className="font-inter font-normal text-base sm:text-lg text-gray-900 leading-relaxed break-words whitespace-pre-wrap">
                {description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full min-w-0">
              <a
                href={buttonLink}
                onClick={(e) => {
                  if (buttonLink === "#") {
                    e.preventDefault();
                    onHireTalent?.();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#F39308] hover:bg-orange-600 active:bg-orange-700 text-white font-inter font-semibold px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base transition-colors flex-1 sm:flex-none min-w-0 min-h-[52px]"
              >
                <span className="truncate">{buttonText}</span>
                <span className="flex-shrink-0">→</span>
              </a>
              <button
                onClick={onFindOpportunities}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#004CA5] text-[#004CA5] hover:bg-blue-50 active:bg-blue-100 font-inter font-semibold px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base transition-colors flex-1 sm:flex-none min-w-0 min-h-[52px]"
              >
                <span className="truncate">Find Opportunities</span>
              </button>
            </div>

            {/* Stats */}
            {stats.length > 0 && (
              <div className="w-full pt-6 mt-2 border-t border-gray-200 min-w-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 min-w-0">
                  {stats.map((stat, index) => {
                    const { numeric, suffix } = parseStatValue(stat.value);
                    return (
                      <AnimatedStat
                        key={`${stat.label}-${index}`}
                        target={numeric}
                        suffix={suffix}
                        label={stat.label}
                        duration={1500}
                        delay={index * 200}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right column: Image Content */}
          {/* Right column: Image Content */}
          <div className="w-full lg:w-1/2 flex items-center justify-center min-w-0 order-first lg:order-last lg:-translate-y-24">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full aspect-square lg:aspect-auto md:h-[450px] lg:h-[500px] min-w-0">
              {/*<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[519px] lg:h-[519px] bg-[#C2D760] rounded-full opacity-30 blur-sm" />

                <div className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-[330px] md:h-[330px] lg:w-[419px] lg:h-[419px] border-2 border-dashed border-[#C2D760] rounded-full" />
              </div> */} 
              <div className="relative w-full h-full flex items-center justify-center z-10">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt="Hero Image"
                    loading="eager"
                    decoding="async"
                    onLoad={() => setImgLoaded(true)}
                    className="
                        w-full
                        h-full
                        object-cover
                        rounded-2xl
                              "
                    style={{
                      opacity: imgLoaded ? 1 : 0,
                      transition: "opacity 0.5s ease-out",
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 rounded-2xl" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  ``;
}

export default Hero;
