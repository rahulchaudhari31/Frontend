import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home',                href: '#home' },
  { label: 'About Us',            href: '#' },
  { label: 'Employer',            href: '#' },
  { label: 'Employee',            href: '#' },
  { label: 'Workforce Solutions', href: '#solutions', active: true },
  { label: 'Become a Partner',    href: '#' },
  { label: 'Blogs',               href: '#' },
  { label: 'Contact Us',          href: '#' },
];

function Logo() {
  return (
    <a
      href="#home"
      aria-label="E2E Human Resource Consultancy home"
      className="flex shrink-0 items-center no-underline"
    >
      <img
        src="src/assets/assets/image/image/logo.png"
        alt="E2E Human Resource Consultancy"
        width="146"
        height="58"
        className="block h-auto max-h-[58px] w-[146px] shrink-0 object-contain"
      />
    </a>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky z-50 bg-white"
      style={{
        width: '100%',
        maxWidth: '1440px',
        height: '81px',
        margin: '0 auto',
        top: 0,
        opacity: 1,
        gridRow: '2 / span 1',
        gridColumn: '1 / span 1',
        borderBottom: '1px solid #F3F4F6',
        boxShadow: '0px 1px 2px 0px #0000000D',
      }}
    >
      <div
        className="flex items-center justify-between px-6 xl:px-12"
        style={{ height: '100%', maxWidth: '1440px', margin: '0 auto' }}
      >
        {/* Logo never truncated */}
        <Logo />

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-1">
          {navLinks.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={`flex items-center gap-0.5 px-3 py-2 text-[13px] font-semibold whitespace-nowrap
                          transition-colors duration-150 rounded-md
                          ${active
                            ? 'text-[#0085d5]'
                            : 'text-primary hover:text-accent'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden xl:inline-flex items-center justify-center
                     bg-accent text-white text-[14px] font-semibold
                     px-6 py-2.5 rounded-pill shrink-0
                     hover:bg-orange-500 active:bg-orange-600 transition-colors duration-150"
        >
          Submit Vacancy / CV
        </a>

        {/* Mobile Hamburger */}
        <button
          className="xl:hidden text-primary p-2 rounded-md hover:bg-gray-50 transition-colors"
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
        <div id="mobile-menu" className="xl:hidden bg-white border-t border-gray-100 px-6 pb-5">
          <nav aria-label="Mobile navigation" className="flex flex-col mt-2">
            {navLinks.map(({ label, href, active }) => (
              <a
                key={label}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center justify-between py-3 text-sm font-semibold
                            border-b border-gray-50 transition-colors duration-150
                            ${active ? 'text-[#0085d5]' : 'text-primary hover:text-accent'}`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-4">
            <a
              href="#"
              className="flex items-center justify-center bg-accent text-white text-sm font-semibold
                         px-5 py-3 rounded-pill hover:bg-orange-500 transition-colors duration-150"
              onClick={() => setMobileOpen(false)}
            >
              Submit Vacancy / CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
