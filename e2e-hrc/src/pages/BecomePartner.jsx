import { useState } from 'react';
import { FiGlobe, FiHome, FiLayers } from 'react-icons/fi';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

import heroBg from '../assets/assets/background coonecting reqrirment/background become a partner.jpg';
import teamPhoto from '../assets/assets/background coonecting reqrirment/background connectivity.jpeg';
import nameIcon from '../assets/assets/background coonecting reqrirment/NAME.png';
import mailIcon from '../assets/assets/background coonecting reqrirment/MAIL ICON.png';
import callIcon from '../assets/assets/background coonecting reqrirment/call.png';
import countryFlag from '../assets/assets/background coonecting reqrirment/CONTRY.jpg';
import trustPhoto from '../assets/assets/background coonecting reqrirment/build on trust.jpg';
import mapBg from '../assets/assets/background coonecting reqrirment/Connecting Recruitment Partners background.png';

const checkItems = [
  {
    title: 'Extensive Global Network',
    desc: 'Access to a vast pool of passive candidates and international clients.',
    icon: FiGlobe,
  },
  {
    title: 'UK Headquarters, Global Footprint',
    desc: 'Benefit from our established presence and compliance expertise across major markets.',
    icon: FiHome,
  },
  {
    title: 'Deep Sector Expertise',
    desc: 'Leverage our specialised knowledge across healthcare, IT, finance, engineering, hospitality, and more.',
    icon: FiLayers,
  },
];

const statsData = [
  { value: '18+', label: 'Years Exp' },
  { value: '450+', label: 'Clients' },
  { value: '12k+', label: 'Placements' },
  { value: '4', label: 'Regional Hubs' },
];

export default function BecomePartner() {
  const [formData, setFormData] = useState({ name: '', email: '', phoneCode: '+971', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function validate() {
    const err = {};
    if (!formData.name.trim()) err.name = 'Required';
    if (!formData.email.trim()) err.email = 'Required';
    if (!formData.phone.trim()) err.phone = 'Required';
    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar variant="partner" />

      {/* ===== 1. HERO ===== */}
      <section
        className="relative flex items-center"
        style={{
          height: 201,
          background: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg}) center / cover no-repeat`,
          borderTop: '1px solid #EAE8E7',
          padding: '55px 0 55px 64px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 0,
            gap: 16,
            width: 1344,
            height: 48,
          }}
        >
          <h1
            className="text-white"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '48px',
              margin: 0,
            }}
          >
            Become Our Trusted Recruitment Partner
          </h1>
        </div>
      </section>

      {/* ===== 2. PHOTO + FORM ===== */}
      <section className="bg-[#F6F3F2] pb-[180px] lg:pb-[220px]">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <div className="relative pt-4 lg:pt-16">
            <div
              className="relative w-full rounded-[24px] overflow-hidden min-h-[340px] lg:h-[463px]"
              style={{
                backgroundImage: `url(${teamPhoto})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: -127,
                  padding: '0 64px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: 0,
                    gap: 24,
                    width: 576,
                    maxWidth: 576,
                    position: 'relative',
                  }}
                >
                  <h1
                    style={{
                      position: 'absolute',
                      width: 647,
                      height: 212,
                      left: -0.17,
                      top: -26.11,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 800,
                      fontSize: 60,
                      lineHeight: '70.4px',
                      letterSpacing: '-1.28px',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      filter: 'drop-shadow(0 4px 3px rgba(0,0,0,0.1)) drop-shadow(0 10px 8px rgba(0,0,0,0.04))',
                      margin: 0,
                    }}
                  >
                    Connecting Recruitment Partners Worldwide
                  </h1>
                </div>
              </div>
            </div>

            <div
              className="relative z-10 w-full mt-8 lg:mt-0 lg:absolute"
              style={{
                top: '84px',
                left: '64%',
                width: '434px',
              }}
            >
              <div
                className="bg-white"
                style={{ borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', padding: '32px 32px 0' }}
              >
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '28px',
                    color: '#004CA5',
                    marginBottom: '8px',
                  }}
                >
                  Get in Touch with Our Partnership Team
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11px',
                    lineHeight: '20px',
                    color: '#424752',
                    marginBottom: '24px',
                  }}
                >
                  Have questions about partnership opportunities or our global network? Fill out the form below and our team will get back to you shortly.
                </p>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="font-semibold text-[#004CA5] text-base">Thank you!</p>
                    <p className="text-[#424752] text-sm">We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '19px' }}>
                    <div>
                      <label
                        className="block"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: '20px', color: '#004CA5', fontWeight: 400, marginBottom: '8px' }}
                      >
                        Name
                      </label>
                      <div className="relative">
                        <img
                          src={nameIcon}
                          alt=""
                          className="absolute"
                          style={{ left: '16px', top: '30%', width: '13.33px', height: '13.33px', zIndex: 1 }}
                        />
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white"
                          style={{ height: '44px', padding: '13px 16px 13px 48px', border: '1px solid #F1F2F9', borderRadius: '12px', outline: 'none', boxSizing: 'border-box', fontFamily: "'Inter', sans-serif", fontSize: '16px' }}
                        />
                      </div>
                      {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label
                        className="block"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: '20px', color: '#004CA5', fontWeight: 400, marginBottom: '8px' }}
                      >
                        Email
                      </label>
                      <div className="relative">
                        <img
                          src={mailIcon}
                          alt=""
                          className="absolute"
                          style={{ left: '16px', top: '30%', width: '16.67px', height: '13.33px', zIndex: 1 }}
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white"
                          style={{ height: '44px', padding: '13px 16px 13px 48px', border: '1px solid #F1F2F9', borderRadius: '16px', outline: 'none', boxSizing: 'border-box', fontFamily: "'Inter', sans-serif", fontSize: '16px' }}
                        />
                      </div>
                      {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label
                        className="block"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: '20px', color: '#004CA5', fontWeight: 400, marginBottom: '8px' }}
                      >
                        Contact Number
                      </label>
                      <div className="flex" style={{ gap: '7.99px' }}>
                        <div className="relative" style={{ width: '165px' }}>
                          <img
                            src={countryFlag}
                            alt=""
                            className="absolute"
                            style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', borderRadius: '2px', zIndex: 1 }}
                          />
                          <select
                            name="phoneCode"
                            value={formData.phoneCode}
                            onChange={handleChange}
                            className="bg-white"
                            style={{ width: '100%', height: '44px', padding: '12px 12px 12px 40px', border: '1px solid #F1F2F9', borderRadius: '16px', outline: 'none', boxSizing: 'border-box', fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: '24px', color: '#1B1C1C' }}
                          >
                            <option value="UAE +971">UAE +971</option>
                            <option value="UK +44">UK +44</option>
                            <option value="US +1">US +1</option>
                            <option value="IN +91">IN +91</option>
                          </select>
                        </div>
                        <div className="relative" style={{ flex: 1 }}>
                          <img
                            src={callIcon}
                            alt=""
                            className="absolute"
                            style={{ left: '16px', top: '30%', width: '15px', height: '15px', zIndex: 1 }}
                          />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="(000) 000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-white"
                            style={{ height: '44px', padding: '13px 16px 13px 48px', border: '1px solid #F1F2F9', borderRadius: '16px', outline: 'none', boxSizing: 'border-box', fontFamily: "'Source Sans 3', sans-serif", fontSize: '16px', lineHeight: '16px' }}
                          />
                        </div>
                      </div>
                      {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                    </div>

                    <div>
                      <label
                        className="block"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: '20px', color: '#004CA5', fontWeight: 400, marginBottom: '8px', textTransform: 'uppercase' }}
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        placeholder="How can we help your business grow?"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white resize-none"
                        style={{ height: '44px', padding: '13px 16px', border: '1px solid #F1F2F9', borderRadius: '16px', outline: 'none', boxSizing: 'border-box', fontFamily: "'Inter', sans-serif", fontSize: '16px' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '24px',
                        background: '#004CA5',
                        height: '44px',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
                      }}
                      onMouseEnter={(e) => e.target.style.background = '#003b82'}
                      onMouseLeave={(e) => e.target.style.background = '#004CA5'}
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. BUILT ON TRUST ===== */}
      <section className="bg-[#FBF9F8] py-[100px]">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-x-[64px] gap-y-12 items-center">
            <div className="relative w-full lg:w-[568px] lg:h-[500px] shrink-0">
              <div
                className="hidden lg:block absolute w-[435px] h-[463px] border border-[#F39308]"
                style={{ left: '-10px', top: '-10px', borderWidth: '1.2px' }}
              />
              <div className="relative lg:absolute lg:left-[66px] lg:top-[19px] w-full max-w-[520px] mx-auto lg:mx-0 lg:w-[435px] lg:h-[463px]">
                <img
                  src={trustPhoto}
                  alt="Our team collaboration"
                  className="w-full h-[380px] md:h-[440px] lg:h-[463px] object-cover rounded-[8px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1 max-w-[568px]">
              <h2
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '32px',
                  lineHeight: '40px',
                  letterSpacing: '-0.32px',
                  color: '#003679',
                }}
              >
                Built on Trust and Transparency Since 2007
              </h2>
              <p
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: '#424752',
                }}
              >
                At E2E HRC, we believe that true partnership goes beyond transactional referrals. We build strategic alliances grounded in mutual respect, shared ethical standards, and a commitment to delivering exceptional talent solutions worldwide.
              </p>
              <div className="flex flex-col gap-6 pt-4">
                {checkItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center"
                      style={{ background: 'rgba(0, 54, 121, 0.1)' }}
                    >
                      <Icon size={14} color="#003679" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4
                        style={{
                          fontFamily: "'Hanken Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: '20px',
                          lineHeight: '28px',
                          color: '#1B1C1C',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: '#424752',
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. OUR RECRUITMENT NETWORK MAP ===== */}
      <section className="bg-white py-10">
        <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
          <div className="flex flex-col items-center gap-12">
            {/* Map heading + subtext */}
            <div className="text-center max-w-[1072px]">
              <h2 className="font-['Hanken_Grotesk',sans-serif] font-bold text-[48px] leading-[56px] tracking-[-0.96px] text-[#004CA5] mb-4">
                Connecting Recruitment Partners Worldwide
              </h2>
              <p className="font-['Source_Sans_3',sans-serif] font-normal text-base leading-6 text-[#424752] max-w-[672px] mx-auto">
                Our established global infrastructure enables seamless cross-border recruitment and market entry for our partners.
              </p>
            </div>

            <div className="relative w-full h-[385px] overflow-hidden rounded-[24px] border border-[rgba(194,198,212,0.2)] bg-[#F2F4F6]">
              <img
                src={mapBg}
                alt="Our Recruitment Network Map"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: '0.3' }}
              />

              {/* UK Head Office */}
              <div className="group absolute" style={{ left: '45.01%', top: '30.06%' }}>
                <button tabIndex={0} className="relative w-4 h-4 bg-[#00458D] rounded-full shadow-[0_0_0_4px_rgba(0,69,141,0.2)] cursor-pointer hover:scale-125 transition-transform focus:outline-2 focus:outline-offset-2 focus:outline-[#F39308]" aria-label="UK Head Office">
                  <span className="sr-only">UK Head Office</span>
                </button>
                <div className="flex flex-col items-center pt-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-white px-3 py-1 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '12px', lineHeight: '16px', color: '#00458D' }}>
                    UK Head Office
                  </div>
                </div>
              </div>

              {/* GCC Hub */}
              <div className="group absolute" style={{ left: '57.99%', top: '45.01%' }}>
                <button tabIndex={0} className="relative w-3 h-3 bg-[#FFB952] rounded-full shadow-[0_0_0_4px_rgba(255,185,82,0.2)] cursor-pointer hover:scale-125 transition-transform focus:outline-2 focus:outline-offset-2 focus:outline-[#004CA5]" aria-label="GCC Hub">
                  <span className="sr-only">GCC Hub</span>
                </button>
                <div className="flex flex-col items-center pt-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-white px-3 py-1 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '12px', lineHeight: '16px', color: '#00458D' }}>
                    GCC Hub
                  </div>
                </div>
              </div>

              {/* Europe Hub */}
              <div className="group absolute" style={{ left: '50%', top: '35.05%' }}>
                <button tabIndex={0} className="relative w-3 h-3 bg-[#FFB952] rounded-full shadow-[0_0_0_4px_rgba(255,185,82,0.2)] cursor-pointer hover:scale-125 transition-transform focus:outline-2 focus:outline-offset-2 focus:outline-[#004CA5]" aria-label="Europe Hub">
                  <span className="sr-only">Europe Hub</span>
                </button>
                <div className="flex flex-col items-center pt-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-white px-3 py-1 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '12px', lineHeight: '16px', color: '#00458D' }}>
                    Europe Hub
                  </div>
                </div>
              </div>

              {/* South Asia Hub */}
              <div className="group absolute" style={{ left: '64.97%', top: '50%' }}>
                <button tabIndex={0} className="relative w-3 h-3 bg-[#FFB952] rounded-full shadow-[0_0_0_4px_rgba(255,185,82,0.2)] cursor-pointer hover:scale-125 transition-transform focus:outline-2 focus:outline-offset-2 focus:outline-[#004CA5]" aria-label="South Asia Hub">
                  <span className="sr-only">South Asia Hub</span>
                </button>
                <div className="flex flex-col items-center pt-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-white px-3 py-1 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '12px', lineHeight: '16px', color: '#00458D' }}>
                    South Asia Hub
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="w-full max-w-[1072px] flex flex-row justify-center items-start gap-8">
              {statsData.map((stat, i) => (
                <div key={i} className="flex-1 text-center" style={{ maxWidth: '244px' }}>
                  <p className="font-['Hanken_Grotesk'] font-bold text-[48px] leading-[56px] tracking-[-0.96px] text-[#004CA5]">
                    {stat.value}
                  </p>
                  <p className="font-['Hanken_Grotesk'] font-normal text-base leading-6 text-[#424752]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
