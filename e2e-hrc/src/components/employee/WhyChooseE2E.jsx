import { useState, useEffect } from 'react';
import { getWhyChooseE2E } from '../../services/aboutus/whyChooseE2EService';

export default function WhyChooseE2E() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getWhyChooseE2E();
        const items = res?.data?.data ?? res?.data;
        if (Array.isArray(items) && items.length > 0) {
          setData(items[0]);
        }
      } catch {
        // use hardcoded
      }
    };
    fetchData();
  }, []);

  const heading = data?.title || 'What makes us different';
  const subtitle = data?.subtitle || 'WHY CHOOSE E2E HRC';
  const desc1 = data?.description1 || 'We view your career journey as more than just a job search. Every candidate is a professional with unique goals; every role is an opportunity for growth. We partner with you to find a culture where you can thrive.';
  const desc2 = data?.description2 || "Our success is defined by yours. We don't just place you in a role; we ensure it's the right fit for your long-term career trajectory. From CV polishing to interview prep, we are invested in your professional advancement.";
  const stat1Value = data?.stat1Value || '500+';
  const stat1Label = data?.stat1Label || 'ACTIVE CLIENTS';
  const stat2Value = data?.stat2Value || '98%';
  const stat2Label = data?.stat2Label || 'SATISFACTION RATE';
  const stat3Value = data?.stat3Value || '10K+';
  const stat3Label = data?.stat3Label || 'PLACEMENTS MADE';
  const stat4Value = data?.stat4Value || '25+';
  const stat4Label = data?.stat4Label || 'INDUSTRIES SERVED';
  const card1Title = data?.card1Title || 'Candidate-Centric Approach';
  const card1Badge = data?.card1Badge || 'CAREER FIRST, ALWAYS';
  const card2Title = data?.card2Title || 'A Career That Moves You';
  const card2Badge = data?.card2Badge || 'YOUR GROWTH, OUR GOAL';
  const card1Image = data?.card1Image || '/images/employee/client2.png';
  const card2Image = data?.card2Image || '/images/employee/client1.jpg';
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
          {subtitle}
        </p>
        <h2 className="text-center font-[Poppins] font-bold text-[26px] sm:text-[36px] text-[#00264B] mb-8 sm:mb-12 md:mb-[60px]">
          {heading}
        </h2>

        {/* Feature Card 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div>
            <img src={card1Image} alt={card1Title} className="w-full h-[250px] lg:h-[420px] object-cover rounded-[16px]" loading="lazy" />
          </div>
          <div className="bg-[#F8FAFC] rounded-[16px] p-8 sm:p-14 flex flex-col justify-center">
            <p className="font-[Poppins] text-base uppercase tracking-[1.6px] text-[#F39308] mb-2">
              {card1Badge}
            </p>
            <h3 className="font-[Poppins] font-bold text-[26px] sm:text-[36px] text-[#00264B] mb-4 leading-tight">
              {card1Title}
            </h3>
            <p className="font-[Inter] text-base text-[#43474F] leading-relaxed mb-6">
              {desc1}
            </p>
            <div className="flex gap-6 sm:gap-12">
              <div>
                <p className="font-['Hanken_Grotesk'] font-bold text-[24px] sm:text-[30px] text-[#F39308]">{stat1Value}</p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">{stat1Label}</p>
              </div>
              <div>
                <p className="font-['Hanken_Grotesk'] font-bold text-[24px] sm:text-[30px] text-[#F39308]">{stat2Value}</p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">{stat2Label}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Card 2 (mirrored) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="order-2 lg:order-1 bg-[#F8FAFC] rounded-[16px] p-8 sm:p-14 flex flex-col justify-center relative overflow-hidden">
            <span className="absolute font-[Poppins] font-extrabold text-[233px] text-[#F39308] opacity-5 leading-none pointer-events-none" style={{ bottom: '-20px', right: '-20px' }}>R</span>
            <p className="font-[Poppins] text-base uppercase tracking-[1.6px] text-[#004CA5] mb-2">
              {card2Badge}
            </p>
            <h3 className="font-[Poppins] font-bold text-[26px] sm:text-[36px] text-[#00264B] mb-4 leading-tight">
              {card2Title}
            </h3>
            <p className="font-[Inter] text-base text-[#43474F] leading-relaxed mb-6">
              {desc2}
            </p>
            <div className="flex gap-6 sm:gap-12">
              <div>
                <p className="font-[Poppins] font-bold text-[24px] sm:text-[30px] text-[#004CA5]">{stat3Value}</p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">{stat3Label}</p>
              </div>
              <div>
                <p className="font-[Poppins] font-bold text-[24px] sm:text-[30px] text-[#004CA5]">{stat4Value}</p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">{stat4Label}</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img src={card2Image} alt={card2Title} className="w-full h-[250px] lg:h-[420px] object-cover rounded-[16px]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}