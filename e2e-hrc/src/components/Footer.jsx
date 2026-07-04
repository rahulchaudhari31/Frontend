import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';

const navLinks = ['Home', 'About Us', 'Our Services', 'Latest Jobs', 'Expert Blogs'];
const offices  = ['India'];

export default function Footer() {
  const [ref, visible] = useScrollReveal();

  return (
    <footer className="bg-primary text-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 py-14 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Tagline */}
        <p className="text-white/70 text-sm leading-relaxed mb-12 max-w-2xl">
          Connecting exceptional talent with exceptional businesses across the UK, Europe,
          South Asia, and the GCC since 2007.
        </p>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Col 1 — UK Head Office */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-xs tracking-widest uppercase text-accent">
              UK Head Office
            </h3>
            <address className="not-italic flex flex-col gap-3">
              <div className="flex gap-3 text-white/70 text-sm">
                <FiMapPin size={15} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>Unit 2, 1204B Stratford Road, Hall Green, Birmingham, B28 8HN, UK</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <FiPhone size={14} className="text-accent shrink-0" aria-hidden="true" />
                <a href="tel:+441217782400" className="hover:text-accent transition-colors duration-150">
                  +44 (0) 121 778 2400
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <FiMail size={14} className="text-accent shrink-0" aria-hidden="true" />
                <a href="mailto:info@e2ehrc.co.uk" className="hover:text-accent transition-colors duration-150">
                  info@e2ehrc.co.uk
                </a>
              </div>
            </address>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-xs tracking-widest uppercase text-accent">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 text-sm hover:text-accent transition-colors duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Office Locations */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-xs tracking-widest uppercase text-accent">
              Our Office Locations
            </h3>
            <ul className="flex flex-col gap-2">
              {offices.map((loc) => (
                <li key={loc} className="flex items-center gap-2 text-white/70 text-sm">
                  <FiMapPin size={13} className="text-accent shrink-0" aria-hidden="true" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <p className="text-center text-white/40 text-xs py-5 px-4 tracking-wide uppercase">
          Copyright © 2024 by E2E Human Resource Consultancy Ltd | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
