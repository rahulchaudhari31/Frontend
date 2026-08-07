import { FiArrowRight, FiBriefcase } from 'react-icons/fi';

export default function EmployerCandidateSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#F8FAFC]">
      <div className="mx-auto flex justify-center">
        <div className="flex flex-col lg:flex-row lg:w-[1330px] lg:h-[334px]">
          {/* LEFT CARD - Olive */}
          <div
            className="relative flex flex-col justify-center rounded-2xl lg:rounded-none lg:rounded-l-2xl px-10 lg:pl-[84px] lg:pr-10 py-10 lg:w-[650px] lg:h-[334px]"
            style={{ background: '#C9DB82' }}
          >
            <span className="inline-flex items-center gap-2 bg-white text-[#004CA5] text-xs font-semibold px-4 py-2 rounded-full border border-[#F39308] w-max mb-5">
              <FiBriefcase size={14} className="text-[#004CA5]" />
              For Employers
            </span>

            <h2 className="font-heading font-bold text-[36px] leading-[1.1] text-white">
              Find Your<br />
              <span className="text-[#F39308]">Next Star</span>{' '}
              <span className="text-white">Hire</span>
            </h2>

            <p className="text-white/90 text-sm leading-relaxed max-w-md mt-2">
              Tailored recruitment and workforce solutions designed to help you build high-performing teams across every sector.
            </p>

            <a
              href="#"
              className="self-end mt-4 inline-flex items-center gap-2 bg-[#F39308] text-white font-semibold text-sm px-6 py-3 rounded-[999px] hover:bg-[#E07D00] transition-colors duration-200"
            >
              Explore
              <FiArrowRight size={16} />
            </a>
          </div>

          {/* RIGHT CARD - White */}
          <div
            className="relative flex flex-col justify-center rounded-2xl lg:rounded-none lg:rounded-r-2xl px-10 lg:pl-[84px] lg:pr-10 py-10 lg:w-[650px] lg:h-[334px] bg-white border border-gray-200 shadow-sm"
          >
            <span className="inline-flex items-center gap-2 bg-white text-[#004CA5] text-xs font-semibold px-4 py-2 rounded-full border border-[#F39308] w-max mb-5">
              <FiBriefcase size={14} className="text-[#004CA5]" />
              For Employee
            </span>

            <h2 className="font-heading font-bold text-[36px] leading-[1.1] text-[#004CA5]">
              Discover Your<br />
              <span className="text-[#004CA5]">Dream </span>
              <span className="text-[#F39308]">Career</span>
            </h2>

            <p className="text-[#004CA5]/80 text-sm leading-relaxed max-w-md mt-2">
              Explore opportunities that match your skills, experience and ambitions. We connect you with employers who value your potential.
            </p>

            <a
              href="#"
              className="self-end mt-4 inline-flex items-center gap-2 bg-[#F39308] text-white font-semibold text-sm px-6 py-3 rounded-[999px] hover:bg-[#E07D00] transition-colors duration-200"
            >
              Explore
              <FiArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
