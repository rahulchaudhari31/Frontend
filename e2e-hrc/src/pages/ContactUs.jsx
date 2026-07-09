import { useState } from 'react';
import { FiMapPin, FiClock, FiGlobe } from 'react-icons/fi';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

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

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }

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
      >
        <h1
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
      <section className="bg-[#F6F3F2]" style={{ padding: '64px 0' }}>
        <div
          className="mx-auto flex flex-col lg:flex-row"
          style={{ maxWidth: '1312px', gap: '77px', padding: '0 16px' }}
        >
          {/* ----- LEFT COLUMN: FORM CARD (772px) ----- */}
          <div
            className="w-full bg-white"
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
                    className="w-full bg-white"
                    style={{
                      padding: '17px 16px',
                      height: '44px',
                      border: '1px solid #F1F2F9',
                      borderRadius: '16px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '23px',
                      color: '#6B7280',
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
                    className="w-full bg-white"
                    style={{
                      padding: '17px 16px',
                      height: '44px',
                      border: '1px solid #F1F2F9',
                      borderRadius: '16px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '23px',
                      color: '#6B7280',
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
                    className="w-full bg-white"
                    style={{
                      padding: '17px 16px',
                      height: '44px',
                      border: '1px solid #F1F2F9',
                      borderRadius: '16px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '23px',
                      color: '#6B7280',
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
                    className="w-full bg-white"
                    style={{
                      padding: '17px 16px',
                      height: '44px',
                      border: '1px solid #F1F2F9',
                      borderRadius: '16px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '23px',
                      color: '#6B7280',
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
                  <div style={{ position: 'relative' }}>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full bg-white"
                      style={{
                        padding: '17px 16px',
                        height: '44px',
                        border: '1px solid #F1F2F9',
                        borderRadius: '16px',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#1B1C1C',
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236B7280' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        paddingRight: '40px',
                      }}
                    >
                      <option value="" disabled>Employer Looking for Talent</option>
                      <option value="employer">Employer Looking for Talent</option>
                      <option value="employee">Job Seeker / Candidate</option>
                      <option value="partner">Recruitment Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
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
                    className="w-full bg-white"
                    style={{
                      padding: '17px 16px',
                      height: '44px',
                      border: '1px solid #F1F2F9',
                      borderRadius: '16px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '23px',
                      color: '#6B7280',
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
                  className="w-full bg-white resize-none"
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
                    color: '#6B7280',
                    overflow: 'scroll',
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
          <div className="w-full lg:w-[464px] shrink-0 flex flex-col" style={{ gap: '32px' }}>
            {/* Head Office Birmingham Card */}
            <div
              className="w-full bg-white"
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
      <section className="bg-white" style={{ padding: '40px 64px' }}>
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          {/* Heading + subtext */}
          <div className="text-center mb-10">
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '56px',
                color: '#004CA5',
                margin: '0 0 16px 0',
              }}
            >
              Our Global Network
            </h2>
            <p
              className="mx-auto"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '16px',
                lineHeight: '24px',
                color: '#424752',
                maxWidth: '600px',
                margin: 0,
              }}
            >
              Strategic recruitment hubs across three continents, providing borderless executive search capabilities.
            </p>
          </div>

          {/* Map Container */}
          <div
            className="relative w-full"
            style={{
              minHeight: '385px',
              borderRadius: '24px',
              border: '1px solid rgba(194,198,212,0.2)',
              background: '#F2F4F6',
              overflow: 'hidden',
            }}
          >
            <img
              src={mapBase}
              alt="World map"
              className="w-full h-full object-cover"
              style={{ position: 'absolute', inset: 0, opacity: 0.3 }}
            />
            {/* Location markers */}
            {locationMarkers.map((m) => (
              <div
                key={m.id}
                className="absolute"
                style={{ left: m.left, top: m.top, transform: 'translate(-50%, -50%)' }}
              >
                <div className="relative group">
                  <div
                    className={`${m.size} rounded-full cursor-pointer`}
                    style={{
                      background: m.color,
                      boxShadow: `0 0 0 6px ${m.shadow}`,
                    }}
                  >
                    <span className="sr-only">{m.label}</span>
                  </div>
                  {/* Tooltip */}
                  <div
                    className="absolute whitespace-nowrap px-2 py-1 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bottom: 'calc(100% + 6px)',
                      background: '#FFFFFF',
                      border: '1px solid #E4E2E1',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: '12px',
                      color: '#00458D',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center mt-12" style={{ gap: '32px' }}>
            {statsData.map((stat, i) => (
              <div key={i} className="text-center" style={{ flex: '1 1 160px', maxWidth: '220px' }}>
                <p
                  style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '48px',
                    lineHeight: '56px',
                    color: '#004CA5',
                    margin: 0,
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
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
