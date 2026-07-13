import ukImg from "../../assets/images/uk-location.png";
import uaeImg from "../../assets/images/uae-location.png";
import europeImg from "../../assets/images/europe-location.png";
import indiaImg from "../../assets/images/india-location.png";
import locationIcon from "../../assets/images/Career Growth imgs/DUBAI LOCATION.png";
import arrowIcon from "../../assets/images/Career Growth imgs/arrrow.png";

const locations = [
  { name: "United Kingdom", highlight: "United Kingdom", image: ukImg, link: "#", color: "#004CA5" },
  { name: "Dubai, UAE", highlight: "United Arab Emirates", image: uaeImg, link: "#", color: "#F39308" },
  { name: "Germany, Europe", highlight: "Europe", image: europeImg, link: "#", color: "#C9DB82" },
  { name: "Delhi, India", highlight: "India", image: indiaImg, link: "#", color: "#71DF14" },
];

function Locations() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-8 pb-20">
      <div className="text-center">
        <span className="bg-[#f4f7fb] text-[#004CA5] px-4 py-2 rounded-full text-sm font-medium">
          Our Locations
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004CA5] mt-3">
          Our Office Locations
        </h2>
      </div>

      <div className="mt-12 -mx-6 px-6">
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="location-card snap-center relative flex-shrink-0 overflow-hidden"
              style={{
                width: "344.59px",
                height: "309.74px",
                borderRadius: "12.91px",
                background: "transparent",
                boxShadow: "0px 2.58px 12.91px 0px rgba(0,0,0,0.08)",
                flexShrink: 0,
              }}
            >
              <img
                src={loc.image}
                alt={loc.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Country name centered */}
              <div className="absolute inset-0 flex items-center justify-center">
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
                className="absolute bottom-0 left-0 flex flex-col items-start"
                style={{ padding: "0 16px 7.74px 16px", gap: "5.16px" }}
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
          ))}
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
        .location-card {
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.45s ease;
          transform-origin: center center;
          cursor: pointer;
        }
        .location-card:hover {
          transform: scale(1.25);
          z-index: 10;
          box-shadow: 0px 30px 60px -15px rgba(0, 0, 0, 0.4);
        }
        .location-card img {
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .location-card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

export default Locations;
