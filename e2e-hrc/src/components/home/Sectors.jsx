import { useState, useEffect } from "react";
import { getServices, getSectors } from "../../services/home/servicesService";

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M3.125 7.5H11.875M11.875 7.5L7.5 3.125M11.875 7.5L7.5 11.875" stroke="#FFFFFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function SectorCard({ name, image, description }) {
  return (
    <div className="sector-card group relative w-[280px] h-[420px] min-w-[280px] rounded-[20px] overflow-hidden cursor-pointer shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] flex-shrink-0">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#004CA5] via-[#2b6cb0] to-[#77c0f4] text-center text-sm font-semibold text-white">
          {name}
        </div>
      )}

      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,15,40,0.9) 30%, rgba(0,15,40,0.35) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-7">
        <div className="w-[224px]">
          <p className="sector-desc font-[Poppins] font-medium text-[13px] leading-[15px] text-white m-0">
            {description}
          </p>
          <h3 className="font-[Poppins] font-bold text-[20px] leading-[28px] text-white m-0">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
}

function SectorSkeleton() {
  return (
    <div className="w-[280px] h-[420px] min-w-[280px] rounded-[20px] bg-gray-200 animate-pulse" />
  );
}

function Sectors() {
  const [services, setServices] = useState([]);
  const [sectionData, setSectionData] = useState({
    sectionTitle: '',
    sectionDescription: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayServices, setDisplayServices] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const fetchSection = async () => {
      try {
        setLoading(true);
        setError(null);

        const [sectionResponse, cardsResponse] = await Promise.all([
          getSectors().catch(() => null),
          getServices().catch(() => []),
        ]);

        const sectionPayload = sectionResponse?.data || sectionResponse || {};

        setSectionData({
          sectionTitle: sectionPayload.sectionTitle || '',
          sectionDescription: sectionPayload.sectionDescription || '',
        });
        const servicesList = Array.isArray(cardsResponse) ? cardsResponse : [];
        setServices(servicesList);
        
        // Create infinite loop by duplicating the list
        if (servicesList.length > 0) {
          setDisplayServices([...servicesList, ...servicesList]);
        }
      } catch (error) {
        console.error('Failed to fetch sectors section:', error);
        setSectionData({ sectionTitle: '', sectionDescription: '' });
        setServices([]);
        setDisplayServices([]);
        setError('Unable to load sectors right now.');
      } finally {
        setLoading(false);
      }
    };

    fetchSection();
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const hasSectionData = Boolean(sectionData.sectionTitle || sectionData.sectionDescription);

  return (
    <section className="py-10 lg:py-20 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 lg:mb-10 lg:pl-[51px] lg:pr-[32px] gap-4">
          <div className="lg:w-[629.76px]">
            <span className="inline-flex items-center bg-[#C8D96F] text-[#004CA5] font-body font-semibold text-[12px] px-3 py-[6px] rounded-full mb-3">
              UK INDUSTRIES WE SERVE
            </span>

            {loading ? (
              <div className="space-y-2">
                <div className="h-8 w-64 rounded bg-gray-200 animate-pulse" />
                <div className="h-5 w-full max-w-[520px] rounded bg-gray-200 animate-pulse" />
              </div>
            ) : error ? (
              <div className="text-sm text-red-600">{error}</div>
            ) : hasSectionData ? (
              <>
                <h2 className="font-heading font-[800] text-2xl sm:text-3xl lg:text-[26px] lg:leading-[40px] tracking-[0px] text-[#004CA5] mb-2">
                  {sectionData.sectionTitle}
                </h2>

                <p className="font-body text-[16px] leading-[24px] text-[#46638A] m-0">
                  {sectionData.sectionDescription}
                </p>
              </>
            ) : (
              <div className="text-sm text-gray-500">No sectors content available yet.</div>
            )}
          </div>
        </div>

        <div
          className="carousel-wrapper overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`carousel-track flex gap-5 pb-4 ${isHovering ? "carousel-paused" : "carousel-running"}`}>
            {loading
              ? [1, 2, 3].map((i) => <SectorSkeleton key={i} />)
              : error
                ? null
                : displayServices.length > 0
                  ? displayServices.map((service, index) => (
                      <SectorCard
                        key={`${service._id || service.id || `${service.title}-${service.image}`}-${index}`}
                        name={service.title || service.name || ""}
                        image={service.image || ""}
                        description={service.shortDescription || service.description || ""}
                      />
                    ))
                  : null}
          </div>
        </div>
      </div>

      <style>{`
        .carousel-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .carousel-track {
          display: flex;
          gap: 20px;
          animation: scroll-left 35s linear infinite;
          will-change: transform;
        }

        .carousel-track.carousel-paused {
          animation-play-state: paused;
        }

        .carousel-track.carousel-running {
          animation-play-state: running;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        .sector-card .sector-desc {
          max-height: 0;
          opacity: 0;
          margin-bottom: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease, margin-bottom 0.3s ease;
        }
        .sector-card:hover .sector-desc {
          max-height: 200px;
          opacity: 1;
          margin-bottom: 12px;
        }
        @media (max-width: 1024px) {
          .sector-card .sector-desc {
            max-height: 200px !important;
            opacity: 1 !important;
            margin-bottom: 12px !important;
          }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .carousel-track {
            gap: 16px;
          }
          .sector-card {
            width: 240px;
            height: 360px;
            min-width: 240px;
          }
        }

        @media (max-width: 480px) {
          .carousel-track {
            gap: 12px;
          }
          .sector-card {
            width: 200px;
            height: 300px;
            min-width: 200px;
          }
          .sector-card .sector-desc {
            font-size: 11px !important;
            line-height: 13px !important;
          }
        }

        /* Prevent horizontal scroll on mobile */
        .carousel-wrapper {
          overflow-x: hidden;
          margin: 0 -16px;
          padding: 0 16px;
        }

        @media (max-width: 640px) {
          .carousel-wrapper {
            margin: 0 -8px;
            padding: 0 8px;
          }
        }
      `}</style>
    </section>
  );
}

export default Sectors;
