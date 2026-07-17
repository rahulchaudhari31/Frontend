import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getServices } from "../../services/home/servicesService";

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M3.125 7.5H11.875M11.875 7.5L7.5 3.125M11.875 7.5L7.5 11.875" stroke="#FFFFFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function SectorCard({ name, image, description }) {
  return (
    <div className="sector-card group relative w-[280px] h-[420px] min-w-[280px] rounded-[20px] overflow-hidden cursor-pointer snap-start shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
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
  const scrollRef = useRef(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await getServices();
        setServices(data || []);
      } catch (error) {
        console.error('Failed to fetch services:', error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const scrollLeft = () => {
    const el = scrollRef.current;
    if (el) {
      const amount = el.clientWidth * 0.5;
      el.scrollBy({ left: -amount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const el = scrollRef.current;
    if (el) {
      const amount = el.clientWidth * 0.5;
      el.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 lg:py-20 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 lg:mb-10 lg:pl-[51px] lg:pr-[32px] gap-4">
          <div className="lg:w-[629.76px]">
            <span className="inline-flex items-center bg-[#C8D96F] text-[#004CA5] font-body font-semibold text-[12px] px-3 py-[6px] rounded-full mb-2">
              Industries We Serve
            </span>
            <h2 className="font-heading font-[800] text-2xl sm:text-3xl lg:text-[36px] lg:leading-[40px] tracking-[0px] text-[#004CA5]">
              Deep expertise across 25+ sectors
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-[8px] lg:w-[96px]">
            <button
              onClick={scrollLeft}
              className="w-[44px] h-[44px] rounded-full border-[1.6px] border-[#004CA5] bg-transparent flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Scroll left"
            >
              <FiChevronLeft size={18} strokeWidth={1.5} className="text-[#004CA5]" />
            </button>
            <button
              onClick={scrollRight}
              className="w-[44px] h-[44px] rounded-full border-[1.6px] border-[#004CA5] bg-transparent flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Scroll right"
            >
              <FiChevronRight size={18} strokeWidth={1.5} className="text-[#004CA5]" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {loading
            ? [1, 2, 3].map((i) => <SectorSkeleton key={i} />)
            : services.map((service) => (
              <SectorCard
                key={service._id || service.id}
                name={service.title || ""}
                image={service.image || ""}
                description={service.shortDescription || ""}
              />
            ))}
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}

export default Sectors;
