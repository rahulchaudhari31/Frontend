import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    name: 'NHS',
    industry: 'Healthcare',
    quote: 'E2E HRC consistently delivers high-quality candidates and understands our hiring needs. They are a true recruitment partner.',
    person: 'HR Director',
    company: 'NHS Trust',
  },
  {
    name: 'Siemens',
    industry: 'Engineering',
    quote: 'Their professionalism, global reach and quick turnaround helped us build strong teams across multiple projects.',
    person: 'Talent Manager',
    company: 'Siemens Ltd.',
  },
  {
    name: 'Radisson',
    industry: 'Hospitality',
    quote: 'E2E HRC helps us hire the right talent at the right time. Their team is responsive, reliable and easy to work with.',
    person: 'HR Manager',
    company: 'Radisson Hotel Group',
  },
];

const delayClass = ['', 'reveal-delay-2', 'reveal-delay-3'];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [headerRef, headerVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <section id="testimonials" className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div
          ref={headerRef}
          className={`text-center mb-12 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">What Our Clients Say</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Trusted by Businesses Worldwide</h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, industry, quote, person, company }, i) => (
            <div
              key={name}
              className={`border border-gray-100 rounded-xl p-6 flex flex-col gap-5
                         shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200
                         reveal ${delayClass[i]} ${cardsVisible ? 'visible' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-heading font-bold text-primary text-lg leading-none">{name}</p>
                  <p className="text-text-body text-xs tracking-widest uppercase mt-1">{industry}</p>
                </div>
                <span className="text-7xl font-serif leading-none text-gray-100 select-none -mt-2" aria-hidden="true">"</span>
              </div>

              <p className="text-text-body text-sm leading-relaxed flex-1">"{quote}"</p>

              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <span className="w-9 h-9 rounded-full bg-bg-section flex items-center justify-center shrink-0" aria-hidden="true">
                  <FiUser size={15} className="text-text-body" />
                </span>
                <div>
                  <p className="font-heading font-semibold text-primary text-sm leading-none">{person}</p>
                  <p className="text-text-body text-xs mt-1">{company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-200 ${
                active === i ? 'bg-accent w-6 h-3' : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
