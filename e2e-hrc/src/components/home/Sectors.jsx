import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import manufacturingImg from "../../assets/images/sectors/manuifacturing.jpg";
import healthcareImg from "../../assets/images/sectors/healthcare.jpg";
import engineeringImg from "../../assets/images/sectors/engineering.jpg";
import constructionImg from "../../assets/images/sectors/construction.jpg";
import logisticsImg from "../../assets/images/sectors/logistics.jpg";
import financeImg from "../../assets/images/sectors/finance.jpg";
import educationImg from "../../assets/images/sectors/education.jpg";
import itImg from "../../assets/images/sectors/it technology.jpg";

const industries = [
  {
    name: "Manufacturing",
    image: manufacturingImg,
    description:
      "We provide experienced manufacturing professionals for production, operations, quality assurance, supply chain, and plant management roles. Our recruitment solutions support businesses in maintaining efficiency, productivity, and growth.",
  },
  {
    name: "Healthcare",
    image: healthcareImg,
    description:
      "We connect healthcare facilities with skilled doctors, nurses, and allied health professionals. Our staffing solutions ensure quality patient care while helping institutions manage workforce demands efficiently.",
  },
  {
    name: "IT & Technology",
    image: itImg,
    description:
      "We source top-tier developers, engineers, and IT specialists to help businesses scale their technology teams. Our recruitment process identifies talent with the right technical skills and cultural fit.",
  },
  {
    name: "Engineering",
    image: engineeringImg,
    description:
      "We provide qualified engineers across civil, mechanical, electrical, and industrial disciplines. Our recruitment expertise helps organizations build strong technical teams for complex projects.",
  },
  {
    name: "Construction",
    image: constructionImg,
    description:
      "We supply experienced construction professionals including site managers, engineers, and skilled tradespeople. Our staffing solutions help construction firms meet project timelines and safety standards.",
  },
  {
    name: "Logistics",
    image: logisticsImg,
    description:
      "We provide skilled logistics and supply chain professionals for warehousing, distribution, and transportation roles. Our recruitment solutions help businesses optimize operations and delivery efficiency.",
  },
  {
    name: "Finance",
    image: financeImg,
    description:
      "We connect organizations with experienced finance professionals including accountants, analysts, and financial managers. Our recruitment solutions support businesses in maintaining financial accuracy and strategic growth.",
  },
  {
    name: "Education",
    image: educationImg,
    description:
      "We provide qualified educators, administrators, and support staff for schools and educational institutions. Our recruitment solutions help maintain quality teaching and learning environments.",
  },
];

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

function Sectors() {
  const scrollRef = useRef(null);

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
          {industries.map((industry) => (
            <SectorCard
              key={industry.name}
              name={industry.name}
              image={industry.image}
              description={industry.description}
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
