export default function WhyChooseE2E() {
  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ background: 'url(/images/employee/background.jpg) center/cover no-repeat' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <p
          className="text-center font-[Poppins] text-base uppercase tracking-[1.6px] mb-2"
          style={{
            background: 'linear-gradient(49.52deg, #1295D4 -4.12%, #7EC443 85.04%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          WHY CHOOSE E2E HRC
        </p>
        <h2 className="text-center font-[Poppins] font-bold text-[26px] sm:text-[36px] text-[#00264B] mb-8 sm:mb-12 md:mb-[60px]">
          What makes us different
        </h2>

        {/* Feature Card 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div>
            <img src="/images/employee/client2.png" alt="Candidate-Centric Approach" className="w-full h-[250px] lg:h-[420px] object-cover rounded-[16px]" loading="lazy" />
          </div>
          <div className="bg-[#F8FAFC] rounded-[16px] p-8 sm:p-14 flex flex-col justify-center">
            <p className="font-[Poppins] text-base uppercase tracking-[1.6px] text-[#F39308] mb-2">
              CAREER FIRST, ALWAYS
            </p>
            <h3 className="font-[Poppins] font-bold text-[26px] sm:text-[36px] text-[#00264B] mb-4 leading-tight">
              Candidate-Centric Approach
            </h3>
            <p className="font-[Inter] text-base text-[#43474F] leading-relaxed mb-6">
              We view your career journey as more than just a job search. Every candidate is a professional with unique goals; every role is an opportunity for growth. We partner with you to find a culture where you can thrive.
            </p>
            <div className="flex gap-6 sm:gap-12">
              <div>
                <p className="font-['Hanken_Grotesk'] font-bold text-[24px] sm:text-[30px] text-[#F39308]">500+</p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">ACTIVE CLIENTS</p>
              </div>
              <div>
                <p className="font-['Hanken_Grotesk'] font-bold text-[24px] sm:text-[30px] text-[#F39308]">98%</p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">SATISFACTION RATE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Card 2 (mirrored) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="order-2 lg:order-1 bg-[#F8FAFC] rounded-[16px] p-8 sm:p-14 flex flex-col justify-center relative overflow-hidden">
            <span className="absolute font-[Poppins] font-extrabold text-[233px] text-[#F39308] opacity-5 leading-none pointer-events-none" style={{ bottom: '-20px', right: '-20px' }}>R</span>
            <p className="font-[Poppins] text-base uppercase tracking-[1.6px] text-[#004CA5] mb-2">
              YOUR GROWTH, OUR GOAL
            </p>
            <h3 className="font-[Poppins] font-bold text-[26px] sm:text-[36px] text-[#00264B] mb-4 leading-tight">
              A Career That Moves You
            </h3>
            <p className="font-[Inter] text-base text-[#43474F] leading-relaxed mb-6">
              Our success is defined by yours. We don't just place you in a role; we ensure it's the right fit for your long-term career trajectory. From CV polishing to interview prep, we are invested in your professional advancement.
            </p>
            <div className="flex gap-6 sm:gap-12">
              <div>
                <p className="font-[Poppins] font-bold text-[24px] sm:text-[30px] text-[#004CA5]">10K+</p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">PLACEMENTS MADE</p>
              </div>
              <div>
                <p className="font-[Poppins] font-bold text-[24px] sm:text-[30px] text-[#004CA5]">25+</p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">INDUSTRIES SERVED</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img src="/images/employee/client1.jpg" alt="A Career That Moves You" className="w-full h-[250px] lg:h-[420px] object-cover rounded-[16px]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}