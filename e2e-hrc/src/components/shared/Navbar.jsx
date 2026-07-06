import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logoImage from '../../assets/assets/image/image/logo.png';

const socialLinks = [
  { label: 'LinkedIn', href: '#', Icon: FaLinkedinIn },
  { label: 'Twitter', href: '#', Icon: FaTwitter },
  { label: 'Facebook', href: '#', Icon: FaFacebookF },
  { label: 'Instagram', href: '#', Icon: FaInstagram },
];

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '#' },
  { label: 'Employer', to: '/employer' },
  { label: 'Employee', to: '/employee' },
  { label: 'Workforce Solutions', to: '#solutions' },
  { label: 'Become a Partner', to: '#' },
  { label: 'Blogs', to: '#' },
  { label: 'Contact Us', to: '#' },
];

export default function Navbar({ variant = 'home' }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isEmployer = variant === 'employer';

  const activeStyle = isEmployer ? 'text-[#0085d5]' : 'text-navy';
  const ctaBg = isEmployer ? 'bg-accent hover:bg-orange-500' : 'bg-navy hover:bg-navy/90';

  const activePage = isEmployer ? '/employer' : variant === 'employee' ? '/employee' : '#solutions';

  function renderLink({ label, to }, extraCls = '', onClick) {
    const isActive = to === activePage;
    const cls = `${extraCls} ${isActive ? activeStyle : 'text-primary hover:text-accent'}`;
    return (
      <Link key={label} to={to} aria-current={isActive ? 'page' : undefined} className={cls} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <>
      {isEmployer && (
        <div className="w-full" style={{ background: '#000', height: '48px' }}>
          <div
            className="mx-auto"
            style={{
              display: 'flex', alignItems: 'center', height: '100%',
              maxWidth: '1440px', padding: '0 64px', position: 'relative',
            }}
          >
            <Link
              to="#"
              style={{
                position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', alignItems: 'center', gap: '8px',
                whiteSpace: 'nowrap', fontSize: '14px', fontWeight: 500,
                color: '#0073CF', textDecoration: 'none',
              }}
            >
              Looking to hire exceptional talent? Submit a Vacancy
              <FiArrowRight size={16} />
            </Link>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label} style={{ color: '#fff', transition: 'color 0.15s' }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <header
        className="sticky z-50 bg-white w-full"
        style={{
          height: '81px',
          top: 0,
          borderBottom: '1px solid #F3F4F6',
          boxShadow: '0px 1px 2px 0px #0000000D',
        }}
      >
        <div className="flex items-center justify-between h-full max-w-[1440px] mx-auto px-6 xl:px-16">
          <Link to="/" aria-label="E2E HRC home" className="flex shrink-0 items-center no-underline">
            <img src={logoImage} alt="E2E HRC" width="146" height="58" className="block h-auto max-h-[58px] w-[146px] shrink-0 object-contain" />
          </Link>

          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => renderLink(link, 'flex items-center px-3 py-2 text-[13px] font-semibold whitespace-nowrap rounded-md transition-colors duration-150'))}
          </nav>

          <Link
            to="#"
            className={`hidden xl:inline-flex items-center justify-center text-white text-[14px] font-semibold px-6 py-2.5 rounded-pill transition-colors duration-150 shrink-0 ${ctaBg}`}
          >
            Submit Vacancy / CV
          </Link>

          <button
            className="xl:hidden text-primary p-2 rounded-md hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 px-6 pb-5">
            <nav aria-label="Mobile navigation" className="flex flex-col mt-2">
              {navLinks.map((link) => renderLink(link, 'flex items-center justify-between py-3 text-sm font-semibold border-b border-gray-50 transition-colors duration-150', () => setMobileOpen(false)))}
            </nav>
            <div className="mt-4">
              <Link
                to="#"
                className={`flex items-center justify-center text-white text-sm font-semibold px-5 py-3 rounded-pill transition-colors duration-150 ${ctaBg}`}
                onClick={() => setMobileOpen(false)}
              >
                Submit Vacancy / CV
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
