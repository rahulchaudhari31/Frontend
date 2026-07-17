import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import locationIcon from "../../assets/images/Career Growth imgs/DUBAI LOCATION.png";
import arrowIcon from "../../assets/images/Career Growth imgs/arrrow.png";
import { getLocationCards } from "../../services/home/locationCardService";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Locations() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const fetchedLocations = await getLocationCards();
        // Sort by order field and filter active locations
        const sortedLocations = fetchedLocations
          .filter(loc => loc.isActive !== false)
          .sort((a, b) => (a.order || 0) - (b.order || 0));
        
        // Map backend fields to component expectations and assign colors based on country/city
        const mappedLocations = sortedLocations.map((loc, idx) => {
          const colorMap = ["#004CA5", "#F39308", "#C9DB82", "#71DF14"];
          return {
            _id: loc._id,
            name: loc.cityname || "",
            highlight: loc.contryname || "",
            image: loc.image || "",
            link: "#",
            color: colorMap[idx % colorMap.length],
          };
        });
        setLocations(mappedLocations);
      } catch (error) {
        console.error('Error loading location cards:', error);
        setLocations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    scrollRef.current.style.cursor = "grabbing";
    startX.current = e.pageX;
    scrollLeftVal.current = scrollRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const walk = (e.pageX - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftVal.current - walk;
  };

  return (
    <motion.section
      ref={sectionRef}
      className="w-full pt-8 pb-20"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="text-center px-6"
        variants={sectionVariants}
      >
        <span className="bg-[#f4f7fb] text-[#004CA5] px-4 py-2 rounded-full text-sm font-medium">
          Our Locations
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004CA5] mt-3">
          Our Office Locations
        </h2>
      </motion.div>

      <div className="mt-12" style={{ overflow: "visible" }}>
        <motion.div
          ref={scrollRef}
          className="locations-scroll flex"
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            paddingLeft: "32px",
            paddingRight: "20px",
            paddingTop: "40px",
            paddingBottom: "6px",
            cursor: "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {locations.map((loc, i) => (
            <motion.div
              key={loc._id || i}
              className="location-card snap-center relative flex-shrink-0"
              variants={cardVariants}
              style={{
                width: "344.59px",
                height: "309.74px",
                borderRadius: "28px",
                background: "transparent",
                boxShadow: "0px 2.58px 12.91px 0px rgba(0,0,0,0.08)",
                flexShrink: 0,
                willChange: "transform",
                animation: `floating 5s ease-in-out ${i * 0.7}s infinite`,
              }}
            >
              <div className="location-card-inner" style={{ position: "absolute", inset: 0, borderRadius: "28px", overflow: "hidden" }}>
                {loc.image ? (
                  <img
                    src={loc.image}
                    alt={loc.name}
                    loading="lazy"
                    decoding="async"
                    className="location-card-img"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      willChange: "transform",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#E8EDF5",
                    }}
                  />
                )}

                <div className="location-card-overlay" />

                {/* Country name centered */}
                <div className="location-card-title" style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <span
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 800,
                      fontSize: "31.08px",
                      lineHeight: "58.08px",
                      letterSpacing: "-1.29px",
                      color: "#FFFFFF",
                      textAlign: "center",
                      verticalAlign: "middle",
                      opacity: 0.87,
                      whiteSpace: "normal",
                      maxWidth: "245px",
                    }}
                  >
                    {loc.highlight}
                  </span>
                </div>

                {/* Bottom section */}
                <div
                  className="location-card-badge"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "0 16px 7.74px 16px",
                    gap: "5.16px",
                  }}
                >
                  <div className="flex items-center" style={{ gap: "5.16px" }}>
                    <div
                      style={{
                        width: "18.07px", height: "18.07px", borderRadius: "17322056px",
                        background: loc.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}
                    >
                      <img src={locationIcon} alt="" style={{ width: "8.39px", height: "8.39px" }} />
                    </div>
                    <span style={{
                      fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "7.74px",
                      lineHeight: "10.32px", color: "#FFFFFF",
                    }}>
                      {loc.name}
                    </span>
                  </div>
                  <a
                    href={loc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                    style={{
                      gap: "4px", fontFamily: "Poppins, sans-serif", fontWeight: 600,
                      fontSize: "7.74px", lineHeight: "10.32px", color: loc.color,
                      display: "inline-flex", alignItems: "center", textDecoration: "none",
                    }}
                  >
                    Get Directions
                    <img src={arrowIcon} alt="" style={{ width: "8px", height: "8px", flexShrink: 0 }} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .locations-scroll::-webkit-scrollbar { display: none; }

        @keyframes floating {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        .location-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          transform-origin: center center;
          cursor: pointer;
          flex-shrink: 0;
          margin: 0 24px;
        }
        .location-card:first-child { margin-left: 0; }
        .location-card:last-child  { margin-right: 0; }

        .location-card:hover {
          transform: translateY(-18px) scale(1.20) !important;
          z-index: 10;
          box-shadow:
            0px 25px 60px -10px rgba(0, 74, 165, 0.3),
            0px 10px 25px -5px rgba(0, 0, 0, 0.18);
          animation-play-state: paused !important;
        }

        .location-card-inner {
          transition: transform 0.35s ease;
        }

        .location-card-img {
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .location-card:hover .location-card-img {
          transform: scale(1.22);
        }

        .location-card-overlay {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.55) 0%,
            rgba(0, 0, 0, 0.15) 40%,
            rgba(0, 0, 0, 0.05) 100%
          );
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .location-card:hover .location-card-overlay {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.65) 0%,
            rgba(0, 0, 0, 0.2) 40%,
            rgba(0, 0, 0, 0.08) 100%
          );
        }

        .location-card-title {
          transition: transform 0.3s ease;
          pointer-events: none;
        }
        .location-card:hover .location-card-title {
          transform: translateY(-8px);
        }

        .location-card-badge {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .location-card:hover .location-card-badge {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </motion.section>
  );
}

export default Locations;
