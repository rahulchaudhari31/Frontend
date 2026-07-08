import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import HeroSection from '../components/employee/HeroSection';
import TestimonialsCarousel from '../components/employee/TestimonialsCarousel';
import './Employee.css';

const testimonialsData = [
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
      <section className="py-20" style={{ background: 'url(/images/employee/background.jpg) center/cover no-repeat' }}>
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
          <h2 className="text-center font-[Poppins] font-bold text-[26px] sm:text-[36px] text-[#00264B] mb-[60px]">
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
              <div className="flex gap-12">
                <div>
                  <p className="font-['Hanken_Grotesk'] font-bold text-[30px] text-[#F39308]">500+</p>
                  <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">ACTIVE CLIENTS</p>
                </div>
                <div>
                  <p className="font-['Hanken_Grotesk'] font-bold text-[30px] text-[#F39308]">98%</p>
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
              <div className="flex gap-12">
                <div>
                  <p className="font-[Poppins] font-bold text-[30px] text-[#004CA5]">10K+</p>
                  <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">PLACEMENTS MADE</p>
                </div>
                <div>
                  <p className="font-[Poppins] font-bold text-[30px] text-[#004CA5]">25+</p>
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

      {/* ===== F. OUR PLACEMENTS ===== */}
      <section className="bg-white" style={{ padding: '60px 15px' }}>
        <div className="mx-auto" style={{ maxWidth: '1140px' }}>
          <p className="text-center font-[Roboto] font-medium text-[16px] leading-[16px] uppercase text-[#004CA5] mb-2 tracking-[0px]">
            OUR Placements
          </p>
          <h2 className="text-center font-[Roboto] font-semibold text-[30px] leading-[39px] text-[#2A343E] mb-0" style={{ letterSpacing: '0px' }}>
            Top Companies Hiring Through E2E HRC
          </h2>
        </div>

        <div className="emp-placements-grid mx-auto flex flex-col" style={{ maxWidth: '1140px', paddingTop: '40px', gap: '15px' }}>
          <div className="flex" style={{ gap: '15px' }}>
            {[
              { name: 'google', file: 'google.png' },
              { name: 'tiktok', file: 'tik tok.png' },
              { name: 'instagram', file: 'instagram.png' },
              { name: 'twitter', file: 'twitter.png' },
              { name: 'disney', file: 'disnep.png' },
              { name: 'ibm', file: 'ibm.png' },
            ].map((company) => (
              <div key={company.name} className="flex items-center justify-center shrink-0" style={{ width: '177.41px', height: '100px', border: '0.8px solid #E8ECF7', borderRadius: '10px', padding: '25px' }}>
                <img src={`/images/employee/logos/${company.file}`} alt={company.name} className="max-h-[50px] object-contain" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="flex" style={{ gap: '15px' }}>
            {[
              { name: 'apple', file: 'apple.png' },
              { name: 'adp', file: 'adp.png' },
              { name: 'microsoft', file: 'microsoft.png' },
              { name: 'youtube', file: 'youtube.png' },
              { name: 'nestle', file: 'nestle.png' },
              { name: 'adidas', file: 'adidas.png' },
            ].map((company) => (
              <div key={company.name} className="flex items-center justify-center shrink-0" style={{ width: '177.41px', height: '100px', border: '0.8px solid #E8ECF7', borderRadius: '10px', padding: '25px' }}>
                <img src={`/images/employee/logos/${company.file}`} alt={company.name} className="max-h-[50px] object-contain" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="flex justify-center" style={{ gap: '15px' }}>
            <div className="flex items-center justify-center shrink-0" style={{ width: '177.41px', height: '100px', border: '0.8px solid #E8ECF7', borderRadius: '10px', padding: '25px' }}>
              <img src="/images/employee/logos/amazon.png" alt="amazon" className="max-h-[50px] object-contain" loading="lazy" />
            </div>
            <div className="flex items-center justify-center shrink-0" style={{ width: '177.41px', height: '100px', border: '0.8px solid #E8ECF7', borderRadius: '10px', padding: '25px' }}>
              <img src="/images/employee/logos/coca cola.png" alt="cocacola" className="max-h-[50px] object-contain" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

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
