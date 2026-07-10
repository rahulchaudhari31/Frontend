import { useState, useEffect, useRef } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import HeroSection from '../components/employee/HeroSection';
import TestimonialsCarousel from '../components/employee/TestimonialsCarousel';
import WhyChooseE2E from '../components/employee/WhyChooseE2E';
import './Employee.css';
import { getTestimonials } from '../services/aboutServices';

import sectorConstruction from '../assets/assets/sectors/construction.jpg';
import sectorEducation from '../assets/assets/sectors/education.jpg';
import sectorEngineering from '../assets/assets/sectors/engineering.jpg';
import sectorFinance from '../assets/assets/sectors/finance.jpg';
import sectorHealthcare from '../assets/assets/sectors/healthcare.jpg';
import sectorIT from '../assets/assets/sectors/it technology.jpg';
import sectorLogistics from '../assets/assets/sectors/logistics.jpg';
import sectorManufacturing from '../assets/assets/sectors/manuifacturing.jpg';
import FAQAndCTA from '../components/FAQAndCTA';

const fallbackTestimonials = [
  {
    title: 'Efficient and Effective Hiring Process!',
    quote: "The efficiency of Applyfier's hiring process is commendable. The platform's intuitive interface, combined with the customizable criteria for candidate ranking, makes it easy to identify the right fit for our company. It's a game-changer for businesses seeking quality hires.",
    logo: '/images/employee/Union.png',
    alt: 'Ford',
  },
  {
    title: 'Top-Notch Talent at Our Fingertips!',
    quote: "As an employer, finding top-notch talent is crucial for our success. Applyfier has been our go-to platform for hiring. The automated candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team.",
    logo: '/images/employee/disnep1.png',
    alt: 'Disney',
  },
  {
    title: 'Top-Notch Talent at Our Fingertips!',
    quote: "As an employer, finding top-notch talent is crucial for our success. Applyfier has been our go-to platform for hiring. The automated candidate ranking system significantly simplified our hiring process, and we were able to connect with exceptional candidates who have become valuable assets to our team.",
    logo: '/images/employee/disnep1.png',
    alt: 'Disney',
  },
];

export default function Employee() {
  const trackRef = useRef(null);
  const [testimonialsData, setTestimonialsData] = useState(fallbackTestimonials);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTestimonials();
        const items = res?.data?.data ?? res?.data;
        if (Array.isArray(items) && items.length > 0) {
          setTestimonialsData(
            items.map((t) => ({
              title: t.title || t.name || '',
              quote: t.quote || t.testimonial || t.description || '',
              logo: t.logo || t.image || '/images/employee/Union.png',
              alt: t.alt || t.company || 'Testimonial',
            }))
          );
        }
      } catch {
        // use fallback
      }
    };
    fetchData();
  }, []);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = 300;
    trackRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnnouncementBar />
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
      <section className="industries-section">
        <div className="industries-header">
          <div className="industries-header-left">
            <div className="industries-badge">Industries We Serve</div>
            <h2 className="industries-heading">Deep expertise across 25+ sectors</h2>
          </div>
          <div className="industries-nav">
            <button className="industries-nav-btn" aria-label="Previous" onClick={() => scroll('prev')}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="#004CA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="industries-nav-btn" aria-label="Next" onClick={() => scroll('next')}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="#004CA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="industries-cards-wrapper">
          <div className="industries-cards-track" ref={trackRef}>
            {[
              { name: 'Manufacturing', image: sectorManufacturing },
              { name: 'Healthcare', image: sectorHealthcare },
              { name: 'Engineering', image: sectorEngineering },
              { name: 'Construction', image: sectorConstruction },
              { name: 'Logistics', image: sectorLogistics },
              { name: 'Finance', image: sectorFinance },
              { name: 'Education', image: sectorEducation },
              { name: 'IT Technology', image: sectorIT },
            ].map((sector) => (
              <div key={sector.name} className="industries-card">
                <img src={sector.image} alt={sector.name} className="industries-card-img" loading="lazy" />
                <div className="industries-card-overlay" />
                <div className="industries-card-content">
                  <div className="industries-card-heading-wrap">
                    <h3 className="industries-card-title">{sector.name}</h3>
                  </div>
                  <div className="industries-card-link"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAndCTA />

      {/* ===== G. TESTIMONIALS ===== */}
      <section className="emp-testimonials relative overflow-hidden" style={{ background: 'url(/images/employee/background%20Testimonials.png) center/cover no-repeat', padding: '43px 100px 59px 100px' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.6)' }} />
        <div className="emp-testimonials-inner relative z-10 mx-auto flex flex-col" style={{ maxWidth: '1240px', gap: '50px' }}>

          <div className="emp-testimonials-top flex flex-col" style={{ width: '100%', gap: '40px' }}>
            <div className="emp-testimonials-header flex flex-col" style={{ width: '100%', gap: '30px' }}>
              <div className="emp-testimonials-badge flex items-center" style={{ gap: '20px', height: '32px' }}>
                <div style={{ width: '80px', borderTop: '1px solid #FFFFFF' }} />
                <span className="bg-white inline-flex items-center justify-center" style={{ width: '135px', height: '32px', padding: '10px 20px', borderRadius: '20px', gap: '10px' }}>
                  <span className="font-[Inter] text-[16px] leading-[19px] text-[#F39308]" style={{ fontWeight: 400 }}>Testimonials</span>
                </span>
              </div>
              <h2 className="emp-testimonials-heading font-[Poppins] font-semibold text-[36px] text-white m-0" style={{ width: '100%', lineHeight: '76px', letterSpacing: '0%' }}>
                What our candidates say
              </h2>
            </div>

            <div className="emp-testimonials-controls flex items-start" style={{ width: '100%', gap: '568px' }}>
              <p className="emp-testimonials-desc font-[Inter] text-white m-0" style={{ width: '100%', maxWidth: '580px', fontSize: '16px', lineHeight: '19px', fontWeight: 400, display: 'flex', alignItems: 'flex-end' }}>
                Discover the stories and experiences of individuals and companies who have found success and excellence through Applyfier
              </p>
            </div>
          </div>

          <TestimonialsCarousel data={testimonialsData} speed={30} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
