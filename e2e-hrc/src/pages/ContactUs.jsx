import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiMapPin, FiClock, FiGlobe, FiX, FiCompass } from 'react-icons/fi';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import OfficeInfoCard from '../components/OfficeInfoCard';

import heroBg from '../assets/assets/about us images/about us background.jpg';
import mapBase from '../assets/assets/about us images/map image.png';
import dropIcon from '../assets/assets/about us images/drop icon.png';

const statsData = [
  { value: '18+', label: 'YEARS EXP' },
  { value: '450+', label: 'CLIENTS' },
  { value: '12k+', label: 'PLACEMENTS' },
  { value: '4', label: 'REGIONAL HUBS' },
];

const locationMarkers = [
  { id: 'uk', label: 'UK Head Office', left: '45.01%', top: '30.06%', size: 'w-4 h-4', color: '#00458D', shadow: 'rgba(0,69,141,0.2)', focus: '#F39308', cardTop: -80 },
  { id: 'europe', label: 'Europe Hub', left: '50%', top: '35.05%', size: 'w-3 h-3', color: '#FFB952', shadow: 'rgba(255,185,82,0.2)', focus: '#004CA5', cardTop: -80 },
  { id: 'gcc', label: 'GCC Hub', left: '57.99%', top: '45.01%', size: 'w-3 h-3', color: '#FFB952', shadow: 'rgba(255,185,82,0.2)', focus: '#004CA5', cardTop: -80 },
  { id: 'southasia', label: 'South Asia Hub', left: '64.97%', top: '50%', size: 'w-3 h-3', color: '#FFB952', shadow: 'rgba(255,185,82,0.2)', focus: '#004CA5', cardTop: -80 },
];

const officeData = {
  uk: {
    officeName: 'UK Head Office',
    address: ['1204B Stratford Road, Hall Green,', 'Birmingham, B28 8AS, UK'],
    phone: '+44 (0) 121 778 2400',
    email: 'info@e2ehrc.co.uk',
    hours: 'Mon to Fri: 9AM to 6PM',
    aboutText: 'Our UK head office in Birmingham serves as the central hub for executive recruitment across the United Kingdom, connecting top talent with leading businesses.',
    directionsQuery: '1204B Stratford Road, Hall Green, Birmingham, B28 8AS, UK',
  },
  europe: {
    officeName: 'Europe Hub',
    address: ['Friedrichstraße 68,', '10117 Berlin, Germany'],
    phone: '+49 30 1234 5678',
    email: 'europe@e2ehrc.co.uk',
    hours: 'Mon to Fri: 9AM to 6PM',
    aboutText: 'Our Berlin office connects clients and candidates across the European Union, with deep expertise in DACH and Nordics markets.',
    directionsQuery: 'Friedrichstraße 68, 10117 Berlin, Germany',
  },
  gcc: {
    officeName: 'GCC Hub',
    address: ['Level 14, Al Fattan Currency House,', 'Tower 2, DIFC, Dubai, UAE'],
    phone: '+971 4 123 4567',
    email: 'gcc@e2ehrc.co.uk',
    hours: 'Sun to Thu: 9AM to 6PM',
    aboutText: 'Our GCC hub in Dubai serves as the central operations base for the Middle East and North Africa region.',
    directionsQuery: 'Level 14, Al Fattan Currency House, Tower 2, DIFC, Dubai, UAE',
  },
  southasia: {
    officeName: 'South Asia Hub',
    address: ['91 Springboard, Sector 44,', 'Gurugram, Haryana 122003, India'],
    phone: '+91 124 456 7890',
    email: 'southasia@e2ehrc.co.uk',
    hours: 'Mon to Sat: 9AM to 6PM',
    aboutText: 'Our Gurugram office drives our South Asia operations, offering end-to-end recruitment services across India and neighbouring markets.',
    directionsQuery: '91 Springboard, Sector 44, Gurugram, Haryana 122003, India',
  },
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    role: '',
    subject: '',
    message: '',
  });
  const [activeOfficeCard, setActiveOfficeCard] = useState(null);
  const cardTimers = useRef({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }

  const makeHandleEnter = useCallback((id) => () => {
    if (cardTimers.current[id]) clearTimeout(cardTimers.current[id]);
    setActiveOfficeCard(id);
  }, []);

  const makeHandleLeave = useCallback((id) => () => {
    cardTimers.current[id] = setTimeout(() => setActiveOfficeCard(null), 250);
  }, []);

  const hideCard = useCallback(() => setActiveOfficeCard(null), []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnnouncementBar />
      <Navbar variant="home" />

      {/* ===== 1. HERO ===== */}
      <section
        style={{
          width: '1440px',
          maxWidth: '100%',
          height: '515px',
          padding: '55px 0px 55px 64px',
          background: `linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBg}) center / cover no-repeat`,
          borderTop: '1px solid #EAE8E7',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          boxSizing: 'border-box',
        }}
        className="hero-section"
      >
        <h1
          className="hero-heading"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: '60px',
            lineHeight: '48px',
            color: '#FFFFFF',
            margin: 0,
            whiteSpace: 'nowrap',
            marginBottom: '60px',
          }}
        >
          Connect With <span style={{ color: '#F39308' }}>E2E HRC</span>
        </h1>
      </section>

      {/* ===== 2. MAIN CONTACT SECTION ===== */}
      <section className="bg-[#F6F3F2] contact-section" style={{ padding: '64px 0' }}>
        <div
          className="mx-auto flex flex-col lg:flex-row contact-container"
          style={{ maxWidth: '1312px', gap: '77px', padding: '0 16px' }}
        >
          {/* ----- LEFT COLUMN: FORM CARD (772px) ----- */}
          <div
            className="w-full bg-white form-card"
            style={{
              maxWidth: '772px',
              flex: 1,
              borderRadius: '24px',
              padding: '48px',
              boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
            }}
          >
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '30px',
                lineHeight: '40px',
                letterSpacing: '-0.32px',
                color: '#1B1C1C',
                margin: 0,
              }}
            >
              Send Us A Message
            </h2>

            <form onSubmit={handleSubmit} style={{ marginTop: '32px' }}>
              {/* Row 1: First Name / Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6" style={{ gap: '24px 24px' }}>
                <div>
                  <label
                    htmlFor="firstName"
                    style={{
                      display: 'block',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0.96px',
                      textTransform: 'uppercase',
                      color: '#424752',
                      marginBottom: '11px',
                    }}
                  >
                    FIRST NAME
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white placeholder-[#6B7280]"
                    style={{
                      padding: '13px 16px',
                      height: '44px',
                      border: '1px solid #F1F2F9',
                      borderRadius: '16px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '23px',
                      color: '#1B1C1C',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    style={{
                      display: 'block',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0.96px',
                      textTransform: 'uppercase',
                      color: '#424752',
                      marginBottom: '11px',
                    }}
                  >
                    LAST NAME
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white placeholder-[#6B7280]"
                    style={{
                      padding: '13px 16px',
                      height: '44px',
                      border: '1px solid #F1F2F9',
                      borderRadius: '16px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '23px',
                      color: '#1B1C1C',
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Company / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px', marginTop: '36px' }}>
                <div>
                  <label
                    htmlFor="company"
                    style={{
                      display: 'block',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0.96px',
                      textTransform: 'uppercase',
                      color: '#424752',
                      marginBottom: '11px',
                    }}
                  >
                    COMPANY
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white placeholder-[#6B7280]"
                    style={{
                      padding: '13px 16px',
                      height: '44px',
                      border: '1px solid #F1F2F9',
                      borderRadius: '16px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '23px',
                      color: '#1B1C1C',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0.96px',
                      textTransform: 'uppercase',
                      color: '#424752',
                      marginBottom: '11px',
                    }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white placeholder-[#6B7280]"
                    style={{
                      padding: '13px 16px',
                      height: '44px',
                      border: '1px solid #F1F2F9',
                      borderRadius: '16px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '23px',
                      color: '#1B1C1C',
                    }}
                  />
                </div>
              </div>

              {/* Row 3: I am a... / Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px', marginTop: '36px' }}>
                <div>
                  <label
                    htmlFor="role"
                    style={{
                      display: 'block',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0.96px',
                      textTransform: 'uppercase',
                      color: '#424752',
                      marginBottom: '11px',
                    }}
                  >
                    I AM A...
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-white"
                    style={{
                      padding: '10px 16px',
                      border: '1px solid #F1F2F9',
                      borderRadius: '16px',
                      outline: 'none',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#1B1C1C',
                      boxSizing: 'border-box',
                    }}
                  >
                    <option value="">Employer Looking for Talent</option>
                    <option value="employer">Employer Looking for Talent</option>
                    <option value="employee">Job Seeker / Candidate</option>
                    <option value="partner">Recruitment Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    style={{
                      display: 'block',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0.96px',
                      textTransform: 'uppercase',
                      color: '#424752',
                      marginBottom: '11px',
                    }}
                  >
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Executive Search Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white placeholder-[#6B7280]"
                    style={{
                      padding: '13px 16px',
                      height: '44px',
                      border: '1px solid #F1F2F9',
                      borderRadius: '16px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '23px',
                      color: '#1B1C1C',
                    }}
                  />
                </div>
              </div>

              {/* Row 4: Your Message */}
              <div style={{ marginTop: '36px' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '0.96px',
                    textTransform: 'uppercase',
                    color: '#424752',
                    marginBottom: '11px',
                  }}
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help your business grow?"
                  value={formData.message}
                  onChange={handleChange}
                    className="w-full bg-white resize-none placeholder-[#6B7280]"
                  style={{
                    padding: '16px 16px 88px',
                    height: '128px',
                    border: '1px solid #F1F2F9',
                    borderRadius: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#1B1C1C',
                    overflow: 'hidden',
                  }}
                />
              </div>

              {/* Row 5: Attach Resume / Brief */}
              <div style={{ marginTop: '36px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '0.96px',
                    textTransform: 'uppercase',
                    color: '#424752',
                    marginBottom: '11px',
                  }}
                >
                  ATTACH RESUME / BRIEF (OPTIONAL)
                </label>
                <div
                  className="flex flex-col items-center justify-center w-full cursor-pointer"
                  style={{
                    border: '2px dashed #F1F2F9',
                    borderRadius: '16px',
                    height: '123px',
                    padding: '32px',
                    gap: '15px',
                    boxSizing: 'border-box',
                  }}
                >
                  <img src={dropIcon} alt="" width={22} height={16} />
                  <p
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#424752',
                      margin: 0,
                      textAlign: 'center',
                    }}
                  >
                    Click to upload or drag and drop
                  </p>
                </div>
              </div>

              {/* Row 6: Submit Button */}
              <div style={{ marginTop: '32px' }}>
                <button
                  type="submit"
                  className="w-full text-white border-none cursor-pointer"
                  style={{
                    background: '#004CA5',
                    borderRadius: '16px',
                    height: '44px',
                    padding: '16px 0',
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '28px',
                    boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#003b82'}
                  onMouseLeave={(e) => e.target.style.background = '#004CA5'}
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* ----- RIGHT COLUMN: INFO SIDE (464px) ----- */}
          <div className="w-full lg:w-[464px] shrink-0 flex flex-col info-side" style={{ gap: '32px' }}>
            {/* Head Office Birmingham Card */}
            <div
              className="w-full bg-white info-card"
              style={{
                borderRadius: '24px',
                padding: '40px',
                border: '1px solid rgba(255,255,255,0.5)',
                boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#004CA5',
                  margin: 0,
                }}
              >
                Head Office Birmingham
              </h3>

              <div className="flex flex-col" style={{ gap: '24px', marginTop: '24px' }}>
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <FiMapPin size={16} color="#004CA5" className="shrink-0" style={{ marginTop: '2px' }} />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#1B1C1C',
                    }}
                  >
                    1204B Stratford Road, Hall Green, Birmingham, West Midlands, B28 8AS
                  </span>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-4 items-start">
                  <FiClock size={20} color="#004CA5" className="shrink-0" />
                  <div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#1B1C1C',
                      }}
                    >
                      Opening Hours
                    </span>
                    <br />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#424752',
                      }}
                    >
                      Monday – Friday: 09:00 – 18:00
                    </span>
                    <br />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#424752',
                      }}
                    >
                      Saturday – Sunday: Closed
                    </span>
                  </div>
                </div>

                {/* Global Inquiries */}
                <div className="flex gap-4 items-start">
                  <FiGlobe size={20} color="#004CA5" className="shrink-0" />
                  <div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#1B1C1C',
                      }}
                    >
                      Global Inquiries
                    </span>
                    <br />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#424752',
                      }}
                    >
                      Available via virtual consultation in GMT, GST, and IST time zones.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ready to Connect Card */}
            <div
              className="w-full bg-white"
              style={{
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#000000',
                  margin: 0,
                }}
              >
                Ready to Connect? Contact Us Today.
              </h3>

              <div className="flex flex-col" style={{ gap: '16px', marginTop: '32px' }}>
                {/* Call Us */}
                <div
                  className="bg-white"
                  style={{
                    border: '1px solid rgba(228,226,225,0.5)',
                    borderRadius: '24px',
                    padding: '29px 32px',
                    boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(0,54,121,0.1)',
                    }}
                  >
                    <FaPhoneAlt size={18} color="#004CA5" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '15px',
                        lineHeight: '28px',
                        color: '#1B1C1C',
                        margin: 0,
                      }}
                    >
                      Call Us
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#424752',
                        margin: 0,
                      }}
                    >
                      +44 121 778 2400
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div
                  className="bg-white"
                  style={{
                    border: '1px solid rgba(228,226,225,0.5)',
                    borderRadius: '24px',
                    padding: '29px 32px',
                    boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(0,54,121,0.1)',
                    }}
                  >
                    <FaEnvelope size={18} color="#004CA5" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '15px',
                        lineHeight: '28px',
                        color: '#1B1C1C',
                        margin: 0,
                      }}
                    >
                      Email Us
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#424752',
                        margin: 0,
                      }}
                    >
                      info@e2ehrc.co.uk
                    </p>
                  </div>
                </div>

                {/* Visit Office */}
                <div
                  className="bg-white"
                  style={{
                    border: '1px solid rgba(228,226,225,0.5)',
                    borderRadius: '24px',
                    padding: '29px 32px',
                    boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(0,54,121,0.1)',
                    }}
                  >
                    <FaMapMarkerAlt size={18} color="#004CA5" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '15px',
                        lineHeight: '28px',
                        color: '#1B1C1C',
                        margin: 0,
                      }}
                    >
                      Visit Office
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#424752',
                        margin: 0,
                      }}
                    >
                      Birmingham, B28 8AS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. OUR GLOBAL NETWORK ===== */}
      <section className="bg-white py-10">
        <div className="mx-auto px-6 xl:px-16" style={{ maxWidth: '1440px' }}>
          <div className="flex flex-col items-center gap-12">
            {/* Heading + subtext */}
            <div className="text-center" style={{ maxWidth: '1072px' }}>
              <h2 className="font-['Hanken_Grotesk',sans-serif] font-bold text-[28px] leading-[34px] md:text-[48px] md:leading-[56px] tracking-[-0.56px] md:tracking-[-0.96px] text-[#004CA5] mb-4">
                Our Global Network
              </h2>
              <p className="font-['Source_Sans_3',sans-serif] font-normal text-sm md:text-base leading-5 md:leading-6 text-[#424752] max-w-[672px] mx-auto">
                Strategic recruitment hubs across three continents, providing borderless executive search capabilities.
              </p>
            </div>

            {/* Map Container */}
            <div className="relative w-full min-h-[385px] rounded-[24px] border border-[rgba(194,198,212,0.2)] bg-[#F2F4F6]">
              <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
                <img
                  src={mapBase}
                  alt="World map"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: '0.3' }}
                />
              </div>

              {locationMarkers.map((m) => (
                <div key={m.id} className="absolute" style={{ left: m.left, top: m.top }}>
                  <button
                    tabIndex={0}
                    className={`relative ${m.size} rounded-full cursor-pointer hover:scale-125 transition-transform focus:outline-2 focus:outline-offset-2`}
                    style={{ background: m.color, boxShadow: `0 0 0 4px ${m.shadow}`, outlineColor: m.focus }}
                    aria-label={m.label}
                    onMouseEnter={makeHandleEnter(m.id)}
                    onMouseLeave={isMobile ? undefined : makeHandleLeave(m.id)}
                    onFocus={() => setActiveOfficeCard(m.id)}
                  >
                    <span className="sr-only">{m.label}</span>
                  </button>
                  <OfficeInfoCard
                    data={officeData[m.id]}
                    isVisible={activeOfficeCard === m.id}
                    isModal={isMobile}
                    style={{ right: 'calc(100% + 12px)', top: m.cardTop, zIndex: 100 }}
                    onClose={hideCard}
                    onMouseEnter={isMobile ? undefined : makeHandleEnter(m.id)}
                    onMouseLeave={isMobile ? undefined : makeHandleLeave(m.id)}
                  />
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="w-full flex flex-wrap justify-center items-start gap-8" style={{ maxWidth: '1072px' }}>
              {statsData.map((stat, i) => (
                <div key={i} className="text-center" style={{ flex: '1 1 40%', maxWidth: '244px' }}>
                  <p className="font-['Hanken_Grotesk'] font-bold text-[32px] leading-[38px] md:text-[48px] md:leading-[56px] tracking-[-0.64px] md:tracking-[-0.96px] text-[#004CA5]">
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

      {isMobile && activeOfficeCard && (() => {
        const d = officeData[activeOfficeCard];
        return createPortal(
          <div
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: '#FFF',
              display: 'flex', flexDirection: 'column',
              padding: 24, overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
              <button
                onClick={hideCard}
                aria-label="Close"
                style={{
                  width: 36, height: 36,
                  borderRadius: '50%', background: '#FFF', border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <FiX size={20} color="#000" />
              </button>
            </div>

            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 22, color: '#004CA5', margin: 0, marginBottom: 20 }}>
              {d.officeName}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { icon: FiMapPin, color: '#004CA5', content: d.address.map((line, i) => (<span key={i}>{line}{i < d.address.length - 1 && <br />}</span>)) },
                { icon: FaPhoneAlt, color: '#004CA5', content: d.phone },
                { icon: FaEnvelope, color: '#004CA5', content: d.email },
                { icon: FiClock, color: '#004CA5', content: d.hours },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, marginTop: 2 }}><row.icon size={16} color={row.color} /></div>
                  <span style={{ fontSize: 15, lineHeight: 1.5, color: '#1B1C1C', fontFamily: "'Inter', sans-serif" }}>{row.content}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontWeight: 700, fontSize: 18, color: '#1B1C1C', margin: 0, marginTop: 8, marginBottom: 12 }}>
              About this Office
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#424752', margin: 0, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
              {d.aboutText}
            </p>

            <button
              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(d.directionsQuery)}`, '_blank', 'noopener,noreferrer')}
              style={{
                width: '100%', padding: 14, borderRadius: 9999, background: '#004CA5',
                color: '#FFF', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16,
              }}
            >
              <FiCompass size={16} color="#FFF" />
              Get Directions
            </button>
          </div>,
          document.body
        );
      })()}

      <Footer />
    </div>
  );
}
