import { useState, useRef, useCallback } from 'react';
import { FiMapPin, FiClock, FiGlobe } from 'react-icons/fi';
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
  { id: 'uk', label: 'UK Head Office', left: '44%', top: '29%', size: 'w-4 h-4', color: '#00458D', shadow: 'rgba(0,69,141,0.2)' },
  { id: 'europe', label: 'Europe Hub', left: '49%', top: '34%', size: 'w-3 h-3', color: '#FFB952', shadow: 'rgba(255,185,82,0.2)' },
  { id: 'gcc', label: 'GCC Hub', left: '57%', top: '44%', size: 'w-3 h-3', color: '#FFB952', shadow: 'rgba(255,185,82,0.2)' },
  { id: 'southasia', label: 'South Asia Hub', left: '64%', top: '49%', size: 'w-3 h-3', color: '#FFB952', shadow: 'rgba(255,185,82,0.2)' },
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
            marginBottom: '140px',
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

      {/* ===== 3. OUR GLOBAL NETWORK SECTION ===== */}
      <section
        className="bg-white mx-auto global-network-section"
        style={{
          padding: '40px 64px',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '48px',
        }}
      >
        {/* Heading + subtext */}
        <div
          className="global-header"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            gap: '16px',
            width: '100%',
            maxWidth: '1072px',
          }}
        >
          <h2
            className="global-heading"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '56px',
              color: '#004CA5',
              margin: 0,
              textAlign: 'center',
              letterSpacing: '-0.96px',
            }}
          >
            Our Global Network
          </h2>
          <p
            className="global-subtext"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#424752',
              margin: 0,
              textAlign: 'center',
              maxWidth: '672px',
            }}
          >
            Strategic recruitment hubs across three continents, providing borderless executive search capabilities.
          </p>
        </div>

        {/* Map Container */}
        <div
          className="relative global-map"
          style={{
            width: '100%',
            maxWidth: '1196px',
            height: '385px',
            borderRadius: '24px',
            border: '1px solid rgba(194,198,212,0.2)',
            background: '#F2F4F6',
            isolation: 'isolate',
          }}
        >
          <div
            className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none"
            style={{ opacity: 0.3 }}
          >
            <img
              src={mapBase}
              alt="World map"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Location markers */}
          {locationMarkers.map((m) => (
            <div
              key={m.id}
              className="absolute"
              style={{ left: m.left, top: m.top, transform: 'translate(-50%, -50%)', zIndex: 1 }}
            >
              <div
                className={`${m.size} rounded-full cursor-pointer hover:scale-125 transition-transform`}
                style={{
                  background: m.color,
                  boxShadow: `0 0 0 4px ${m.shadow}`,
                }}
                aria-label={m.label}
                onMouseEnter={makeHandleEnter(m.id)}
                onMouseLeave={makeHandleLeave(m.id)}
                onFocus={() => setActiveOfficeCard(m.id)}
              >
                <span className="sr-only">{m.label}</span>
              </div>
              <OfficeInfoCard
                data={officeData[m.id]}
                isVisible={activeOfficeCard === m.id}
                style={{ left: '50%', top: 'calc(100% + 12px)', zIndex: 100 }}
                onClose={hideCard}
                onMouseEnter={makeHandleEnter(m.id)}
                onMouseLeave={makeHandleLeave(m.id)}
              />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          className="stats-row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '32px',
            width: '100%',
            maxWidth: '1072px',
          }}
        >
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="stat-item"
              style={{
                flex: '1 1 0',
                maxWidth: '244px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 0,
              }}
            >
              <p
                className="stat-value"
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '48px',
                  lineHeight: '56px',
                  color: '#004CA5',
                  margin: 0,
                  textAlign: 'center',
                  letterSpacing: '-0.96px',
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#424752',
                  margin: 0,
                  textAlign: 'center',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .hero-section { height: 300px !important; padding: 32px 0 32px 16px !important; }
          .hero-heading { font-size: 28px !important; line-height: 32px !important; white-space: normal !important; margin-bottom: 24px !important; }
          .contact-section { padding: 32px 0 !important; }
          .contact-container { gap: 32px !important; }
          .form-card { padding: 24px !important; }
          .info-side { gap: 24px !important; }
          .info-card { padding: 24px !important; }
          .global-network-section { padding: 32px 16px !important; gap: 32px !important; }
          .global-heading { font-size: 28px !important; line-height: 36px !important; }
          .global-subtext { max-width: 100% !important; }
          .global-map { height: 220px !important; }
          .stats-row { flex-wrap: wrap !important; gap: 24px !important; }
          .stat-item { flex: 1 1 40% !important; max-width: 160px !important; }
          .stat-value { font-size: 32px !important; line-height: 40px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-section { padding: 40px 0 40px 32px !important; }
          .hero-heading { font-size: 44px !important; line-height: 44px !important; margin-bottom: 60px !important; }
          .contact-section { padding: 48px 0 !important; }
          .contact-container { gap: 48px !important; }
          .form-card { padding: 36px !important; }
          .global-network-section { padding: 40px 32px !important; }
          .global-heading { font-size: 36px !important; line-height: 44px !important; }
          .global-map { height: 300px !important; }
          .stat-item { max-width: 200px !important; }
          .stat-value { font-size: 40px !important; line-height: 48px !important; }
        }
      `}</style>
      <Footer />
    </div>
  );
}
