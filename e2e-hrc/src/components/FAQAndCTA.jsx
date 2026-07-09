import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';

import plusIcon from '../assets/assets/icons of field/\+.png';
import browseIcon from '../assets/assets/icons of field/browse.png';
import communityIcon from '../assets/assets/icons of field/community.png';
import searchIcon from '../assets/assets/icons of field/search.png';

const faqs = [
  {
    q: 'What types of workforce solutions do you offer?',
    a: 'We offer a full spectrum of workforce solutions including permanent recruitment, contract and temporary staffing, executive search, RPO, and workforce consultancy. Our services are tailored to meet the unique needs of each client across multiple industries.',
  },
  {
    q: 'Do you provide international recruitment services?',
    a: 'Yes. We source and place talent across the UK, Europe, GCC, and Asia. Our global network allows us to connect organisations with qualified professionals regardless of geography or sector.',
  },
  {
    q: 'Can you support high-volume hiring?',
    a: 'Absolutely. Through our Recruitment Process Outsourcing (RPO) model, we can scale our resources to support large-scale hiring campaigns efficiently and cost-effectively, without compromising on candidate quality.',
  },
  {
    q: 'Do you provide temporary and contract staffing?',
    a: 'Yes. We specialise in flexible staffing arrangements to cover short-term projects, seasonal demand, and interim roles. Our pre-vetted talent pool means we can mobilise quickly to meet your deadlines.',
  },
  {
    q: 'How quickly can you fill a vacancy?',
    a: 'Timelines vary by role and seniority, but for most positions we present a shortlist within 5–10 business days. For urgent or high-volume requirements, we can often move faster thanks to our active candidate pipeline.',
  },
];

export default function FAQAndCTA() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, visible] = useScrollReveal();
  const ctaRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-bg-section py-16 md:py-20 px-4">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-10 items-start reveal ${visible ? 'visible' : ''}`}
      >

        {/* LEFT — FAQ */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#003679' }}>
            Frequently Asked Questions
          </p>
          <div className="flex flex-col gap-3" role="list">
            {faqs.map(({ q, a }, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const btnId = `faq-btn-${i}`;
              return (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm" role="listitem">
                  <button
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 transition-colors duration-150"
                    style={{
                      fontFamily: '"Source Sans 3", sans-serif',
                      fontWeight: 700,
                      fontSize: 14,
                      lineHeight: '20px',
                      color: '#003679',
                    }}
                  >
                    <span>{q}</span>
                    <img
                      src={plusIcon}
                      alt=""
                      aria-hidden="true"
                      className="shrink-0"
                      style={{
                        width: 14,
                        height: 14,
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </button>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="px-5 pb-4 pt-3 border-t border-gray-100"
                      style={{
                        fontFamily: '"Source Sans 3", sans-serif',
                        fontWeight: 400,
                        fontSize: 14,
                        lineHeight: '22.75px',
                        color: '#003679',
                        opacity: 0.8,
                      }}
                    >
                      {a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — CTA Card */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-[32px] relative overflow-hidden flex"
          style={{
            background: 'linear-gradient(128.18deg, #004CA5 0%, #003375 100%)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            minHeight: isMobile ? 'auto' : 414,
          }}
        >
          {/* Content */}
          <div className="flex flex-col gap-6 p-6 md:p-10 flex-1 z-10 justify-center items-center md:items-start text-center md:text-left">
            <div className="flex flex-col gap-4">
              <h3
                className="text-white text-[28px] md:text-[36px]"
                style={{
                  fontFamily: '"Hanken Grotesk", sans-serif',
                  fontWeight: 400,
                  lineHeight: '1.25',
                }}
              >
                Let's Build Your Workforce Together
              </h3>
              <p
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: '22.75px',
                  color: '#FFFFFFE5',
                  maxWidth: 448,
                }}
              >
                Partner with E2E HRC and experience recruitment solutions that drive
                growth, efficiency and long-term success.
              </p>
            </div>

            <a
              href="#"
              className="self-center md:self-start inline-flex items-center gap-2"
              style={{
                borderRadius: 9999,
                border: '1px solid rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.1)',
                padding: '12px 24px',
                fontFamily: '"Source Sans 3", sans-serif',
                fontWeight: 700,
                fontSize: 14,
                color: '#FFFFFF',
                lineHeight: '20px',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
            >
              Submit a Vacancy
              <FiArrowRight size={14} />
            </a>
          </div>

          {/* Gradient overlay - hidden on mobile */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 hidden md:block"
            style={{
              right: 0,
              width: 100,
              background: 'linear-gradient(90deg, #003679 0%, rgba(0, 54, 121, 0) 100%)',
              zIndex: 1,
            }}
          />

          {/* Icon stack - hidden on mobile */}
          <div
            className="absolute flex-col hidden md:flex"
            aria-hidden="true"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 0,
              gap: 16,
              position: 'absolute',
              width: 36,
              height: 110,
              right: 39.5,
              top: 40,
              zIndex: 1,
            }}
          >
            <img src={browseIcon} alt="" style={{ width: 36, height: 18 }} />
            <img src={communityIcon} alt="" style={{ width: 36, height: 30 }} />
            <img src={searchIcon} alt="" style={{ width: 28.51764678955078, height: 30 }} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
