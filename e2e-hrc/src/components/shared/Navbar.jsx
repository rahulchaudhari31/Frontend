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
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact Us', to: '#' },
];

export default function Navbar({ variant = 'home' }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isEmployer = variant === 'employer';

  const activeStyle = isEmployer ? 'text-[#0085d5]' : 'text-navy';
  const ctaBg = 'bg-[#F39308] hover:bg-[#E07D00]';

  const activePage = isEmployer ? '/employer' : variant === 'employee' ? '/employee' : variant === 'blog' ? '/blogs' : '#solutions';

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
        <>
          <style>{`
            .nann-bar { height: 48px; width: 100%; background: #000; }
            .nann-bar-inner {
              display: flex; align-items: center; height: 100%;
              max-width: 1440px; margin: 0 auto;
              padding: 0 64px; position: relative;
            }
            .nann-link {
              position: absolute; left: 50%; transform: translateX(-50%);
              display: flex; align-items: center; gap: 8px;
              white-space: nowrap; font-size: 14px; font-weight: 500;
              color: #0073CF; text-decoration: none;
            }
            .nann-link:hover { color: #1C93F3; }
            .nann-social { margin-left: auto; display: flex; align-items: center; gap: 20px; }
            .nann-social a { color: #fff; transition: color 0.15s; }
            .nann-social a:hover { color: #0073CF; }
            @media (max-width: 1024px) {
              .nann-bar-inner { padding: 0 32px; }
              .nann-link { font-size: 12px; }
            }
            @media (max-width: 768px) {
              .nann-bar-inner { padding: 0 16px; }
              .nann-link { font-size: 11px; position: static; transform: none; margin: 0 auto; }
              .nann-social { display: none; }
            }
            @media (max-width: 480px) {
              .nann-link { font-size: 10px; white-space: normal; text-align: center; }
            }
          `}</style>
          <div className="nann-bar">
            <div className="nann-bar-inner">
              <Link to="#" className="nann-link">
                Looking to hire exceptional talent? Submit a Vacancy
                <FiArrowRight size={16} />
              </Link>
              <div className="nann-social">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a key={label} href={href} aria-label={label}>
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
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
