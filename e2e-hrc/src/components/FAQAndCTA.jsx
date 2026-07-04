import { useState } from 'react';
import { FiPlus, FiX, FiUsers, FiGlobe, FiZap } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';

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

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-bg-section py-16 md:py-20 px-4">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start reveal ${visible ? 'visible' : ''}`}
      >

        {/* LEFT — FAQ */}
        <div>
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-6">
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
                    className="w-full flex items-center justify-between px-5 py-4 text-left
                               text-primary font-heading font-semibold text-sm gap-4
                               hover:text-accent transition-colors duration-150"
                  >
                    <span>{q}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-7 h-7 rounded-full border border-gray-200
                                 flex items-center justify-center text-accent"
                    >
                      {isOpen ? <FiX size={14} /> : <FiPlus size={14} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className="px-5 pb-4 text-text-body text-sm leading-relaxed border-t border-gray-100 pt-3"
                    >
                      {a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — CTA Card */}
        <div className="bg-primary rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col gap-6">
          <div className="absolute top-4 right-4 flex gap-3 opacity-10" aria-hidden="true">
            <FiUsers size={40} className="text-white" />
            <FiGlobe size={32} className="text-white" />
            <FiZap size={24} className="text-white" />
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white leading-snug">
              Let's Build Your Workforce Together
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Partner with E2E HRC and experience recruitment solutions that drive
              growth, efficiency and long-term success.
            </p>
          </div>

          <a
            href="#"
            className="self-start bg-white text-primary font-heading font-semibold text-sm
                       px-6 py-3 rounded-pill hover:bg-accent hover:text-white
                       transition-colors duration-200 relative z-10"
          >
            Submit a Vacancy →
          </a>
        </div>

      </div>
    </section>
  );
}
