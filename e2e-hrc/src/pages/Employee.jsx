import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import HeroSection from '../components/employee/HeroSection';
import TestimonialsCarousel from '../components/employee/TestimonialsCarousel';
import WhyChooseE2E from '../components/employee/WhyChooseE2E';
import './Employee.css';

import FAQAndCTA from '../components/FAQAndCTA';
import LatestInsights from '../components/employee/LatestInsights';
import IndustriesSection from '../components/employee/IndustriesSection';

const testimonialsData = [
  {
    title: 'Efficient and Effective Hiring Process!',
    quote: "The efficiency of E2E HRC's hiring process is commendable. Their intuitive approach, combined with the customizable criteria for candidate ranking, makes it easy to identify the right fit for our company. It's a game-changer for businesses seeking quality hires.",
    logo: '/images/employee/Union.png',
    alt: 'Ford',
  },
  {
    title: 'Top-Notch Talent at Our Fingertips!',
    quote: "As an employer, finding top-notch talent is crucial for our success. E2E HRC has been our go-to partner for hiring. Their candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team.",
    logo: '/images/employee/disnep1.png',
    alt: 'Disney',
  },
  {
    title: 'Top-Notch Talent at Our Fingertips!',
    quote: "As an employer, finding top-notch talent is crucial for our success. E2E HRC has been our go-to partner for hiring. Their candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team.",
    logo: '/images/employee/disnep1.png',
    alt: 'Disney',
  },
];

export default function Employee() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="employee" />

      {/* ===== C. HERO SECTION ===== */}
      <HeroSection />

      {/* ===== D. WHY CHOOSE OUR EMPLOYEE JOURNEY SERVICES ===== */}
      <section className="emp-journey" style={{ background: 'linear-gradient(135deg, #E6BA67 0%, #EAD47A 14.28%, #C9C456 28.57%, #DDCA6A 42.85%, #AEBD54 57.14%, #D0D66B 71.42%, #D5DE80 85.71%, #95B755 100%)' }}>
        <div className="emp-journey-inner mx-auto flex flex-col items-center" style={{ maxWidth: '1220px', height: '566px', padding: '0px 15px', gap: '20px' }}>
          <div className="emp-journey-header flex flex-col items-center" style={{ width: '100%', height: '160px', padding: '20px 0px 0px' }}>
            <p className="font-['DM_Sans'] font-medium text-[17px] leading-[30px] text-center tracking-[1px] uppercase text-[#7A777E] m-0" style={{ width: '446px' }}>
              TRUSTED DIGITAL SOLUTIONS FOR YOUR BUSINESS
            </p>
            <h2 className="font-['DM_Sans'] font-semibold text-center text-[#2B2B2F] m-0" style={{ fontSize: '45.008px', lineHeight: '50px', letterSpacing: '-1px', padding: '0px 0px 1px', width: '682px' }}>
              Why choose Our Employee Journey Services?
            </h2>
          </div>

          <div className="emp-journey-grid grid grid-cols-1 md:grid-cols-2" style={{ width: '100%' }}>
            {[
              { label: 'Register', file: 'register.png' },
              { label: 'Interview Preparation', file: 'interview%20preparation.png' },
              { label: 'CV Review', file: 'cv%20review.png' },
              { label: 'Placement', file: 'placement.png' },
              { label: 'Job Matching', file: 'job%20matching.png' },
              { label: 'Career Support', file: 'career%20support.png' },
            ].map((item, i) => {
              const isLeft = i % 2 === 0;
              const colIdx = Math.floor(i / 2);
              const itemsInCol = 3;
              const isLastInCol = colIdx === itemsInCol - 1;
              return (
                <div
                  key={item.label}
                  className="emp-journey-item flex items-center"
                  style={{ borderTop: '0.8px solid #E4E4E4', borderBottom: '0.8px solid #FFFFFF', minHeight: '100.8px' }}
                >
                  <div className="emp-journey-icon flex items-center justify-center shrink-0" style={{ width: '136px', height: '100px' }}>
                    <img src={`/images/employee/journey-services/${item.file}`} alt={item.label} className="w-[47px] h-[47px] object-contain" loading="lazy" />
                  </div>
                  <div className="emp-journey-content flex items-center" style={{ borderLeft: '0.8px solid #E4E4E4', minHeight: '100px', padding: '30px 40px', width: '459px' }}>
                    <span className="font-['DM_Sans'] font-bold text-[18px] leading-[30px] text-[#2B2B2F]">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== E. WHAT MAKES US DIFFERENT ===== */}
      <WhyChooseE2E />

      {/* ===== F. DEEP EXPERTISE ACROSS 25+ SECTORS ===== */}
      <IndustriesSection />

      <FAQAndCTA />

      {/* ===== LATEST INSIGHTS ===== */}
      <LatestInsights />

      {/* ===== G. TESTIMONIALS ===== */}
      <section
        className="emp-testimonials"
        style={{
          position: "relative",
          width: "100%",
          padding: "43px 100px 59px",
          gap: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          background: "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/employee/background%20Testimonials.png) center/cover no-repeat",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div className="emp-testimonials-inner" style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1240, margin: "0 auto", boxSizing: "border-box" }}>
          <div className="emp-testimonials-top" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div className="emp-testimonials-header" style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              <div className="emp-testimonials-badge" style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 80, height: 0, borderTop: "1px solid #FFFFFF" }} />
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 20px",
                    gap: 10,
                    background: "#FFFFFF",
                    borderRadius: 20,
                    width: 135,
                    height: 32,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "19px",
                    color: "#F39308",
                  }}
                >
                  Testimonials
                </span>
              </div>
              <h2
                className="emp-testimonials-heading"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 36,
                  lineHeight: "76px",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                What our candidates say
              </h2>
            </div>

            <div className="emp-testimonials-controls" style={{ display: "flex", alignItems: "flex-start", gap: 568, width: "100%" }}>
              <p
                className="emp-testimonials-desc"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "19px",
                  color: "#FFFFFF",
                  width: 580,
                  margin: 0,
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                Discover the stories and experiences of individuals and companies who have found success and excellence through E2E HRC
              </p>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <TestimonialsCarousel data={testimonialsData} speed={30} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
