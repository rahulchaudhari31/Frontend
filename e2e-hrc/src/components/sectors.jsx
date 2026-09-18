import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import manufacturingImg from "../assets/Manufacturingg.png";
import healthcareImg from "../assets/healthcare.webp";
import engineeringImg from "../assets/Logistics vertical..png";
import constructionImg from "../assets/construction-DhPxqzzm.jpg";
import logisticsImg from "../assets/Logistics vertical..png";
import hospitality from "../assets/photo-1666101040767-d276f74e377c.avif";
import Fmcg from "../assets/1000_F_2176211286_mS6loNNzXBAXTr6McvlUwAmzIBt0CT7c.jpg";

const industries = [
  {
    name: "Manufacturing",
    image: manufacturingImg,
    description:
      "From production operatives and quality engineers to shift supervisors and maintenance specialists, we place skilled professionals into manufacturing roles across the UK Midlands and internationally.",
  },
  {
    name: "Healthcare",
    image: healthcareImg,
    description:
      "We place nurses, allied health professionals, care managers, and clinical and non-clinical support staff into NHS trusts, private hospitals, and palliative care settings across the UK.",
  },
  {
    name: "Construction",
    image: constructionImg,
    description:
      "We bring essential personnel like site managers, skilled trade professionals, quantity surveyors, project management professionals and other sector-experienced professionals into construction and infrastructure projects across the UK.",
  },
  {
    name: "Logistics",
    image: logisticsImg,
    description:
      "Our network includes background-checked warehouse operatives, distribution managers, HGV drivers, supply chain analysts, and logistics coordinators who can work across operations of every scale.",
  },
  {
    name: "Hospitality",
    image: hospitality,
    description:
      "e2e HRC places hospitality professionals across restaurants, hotels, and event venues. Professionals placed in the industry include chefs, housekeeping staff, security personnel, and hospitality management professionals across Birmingham, UK.",
  },
  {
    name: "FMCG",
    image: Fmcg,
    description:
      "Since the FMCG industry faces heavy competition and turnover, we understand the need for consistency and quality in recruitment. For the FMCG sector, we assure placement of uniquely capable merchandisers, sales representatives, customer support executives, and packaging managers.",
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
            <h2 className="font-heading font-[800] text-2xl sm:text-3xl lg:text-[26px] lg:leading-[40px] tracking-[0px] text-[#004CA5] mb-2">
              Deep Expertise Across the Sectors That Matter
            </h2>
            < p className=" mt-5 font-body text-[16px] leading-[24px] text-[#46638A] m-0">
              e2e HRC concentrates on the sectors where our recruitment consultants excel in knowledge, live candidate networks, and established employer relationships. Where the domestic talent pool falls short, we source internationally through our Dubai and Delhi offices, with complete in-house support for skilled worker visas. Our network has been built over nearly two decades of creating an indelible footprint as a specialist recruitment consultant across these sectors:
            </p> 
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