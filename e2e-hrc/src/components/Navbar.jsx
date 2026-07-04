import { useState } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home',               href: '#home' },
  { label: 'About Us',           href: '#' },
  { label: 'Employer',           href: '#', hasDropdown: true },
  { label: 'Employee',           href: '#', hasDropdown: true },
  { label: 'Workforce Solutions', href: '#solutions' },
  { label: 'Become a Partner',   href: '#' },
  { label: 'Blogs',              href: '#' },
  { label: 'Contact Us',         href: '#' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="/" className="font-heading font-bold text-xl text-primary tracking-tight">
          E2E <span className="text-accent">HRC</span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ label, href, hasDropdown }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-0.5 px-3 py-2 text-[13px] font-medium text-primary rounded-md
                         hover:text-accent transition-colors duration-150 whitespace-nowrap"
            >
              {label}
              {hasDropdown && <FiChevronDown size={13} className="mt-px opacity-60" aria-hidden="true" />}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="text-[13px] font-medium text-primary hover:text-accent transition-colors duration-150 whitespace-nowrap"
          >
            Submit Vacancy / CV
          </a>
          <a
            href="#"
            className="bg-accent text-white text-[13px] font-semibold px-5 py-2 rounded-pill
                       hover:bg-orange-500 active:bg-orange-600 transition-colors duration-150 whitespace-nowrap"
          >
            Submit a Vacancy
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-primary p-2 rounded-md hover:bg-gray-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav aria-label="Mobile navigation" className="flex flex-col mt-2">
            {navLinks.map(({ label, href, hasDropdown }) => (
              <a
                key={label}
                href={href}
                className="flex items-center justify-between py-3 text-sm font-medium text-primary
                           border-b border-gray-50 hover:text-accent transition-colors duration-150"
                onClick={() => setMobileOpen(false)}
              >
                {label}
                {hasDropdown && <FiChevronDown size={14} className="opacity-50" aria-hidden="true" />}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-4">
            <a href="#" className="text-sm font-medium text-primary hover:text-accent text-center">
              Submit Vacancy / CV
            </a>
            <a
              href="#"
              className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-pill
                         text-center hover:bg-orange-500 active:bg-orange-600 transition-colors duration-150"
            >
              Submit a Vacancy
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
