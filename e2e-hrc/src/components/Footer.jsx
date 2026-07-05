import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import mapImage from '../assets/assets/image/image/map.png';
import footerLogo from '../assets/assets/image/image/logo.png';

const navLinks = ['Home', 'About Us', 'Our Services', 'Latest Jobs', 'Expert Blogs'];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 96px 98px 48px;
          gap: 80px;
          width: 100%;
          height: 548px;
          background: #000000;
          color: #ffffff;
          box-sizing: border-box;
        }
        .footer-inner {
          display: flex;
          flex-direction: row;
          gap: 64px;
          width: 100%;
          max-width: 1244px;
          align-self: center;
          flex-wrap: wrap;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
          width: 255px;
        }
        .footer-col.brand {
          gap: 31.1px;
        }
        .footer-brand-logo {
          width: 255px;
          height: 96.43px;
          opacity: 1;
          object-fit: contain;
        }
        .footer-brand-text-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px 0px 0.875px;
          width: 255px;
        }
        .footer-brand-text {
          width: 255px;
          font-family: Inter, sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 23px;
          color: #DBEAFE;
          margin: 0;
        }
        .footer-heading {
          font-family: Montserrat, sans-serif;
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: #F39308;
          margin: 0;
          width: 255px;
        }
        .footer-contact {
          font-style: normal;
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 255px;
        }
        .footer-contact-row {
          display: flex;
          flex-direction: row;
          gap: 16px;
        }
        .footer-contact-icon {
          color: #F39308;
          flex-shrink: 0;
        }
        .footer-contact-text {
          font-family: Inter, sans-serif;
          font-size: 14px;
          line-height: 20px;
          color: #DBEAFE;
        }
        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 255px;
        }
        .footer-nav-link {
          font-family: Inter, sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #DBEAFE;
          text-decoration: none;
        }
        .footer-map {
          width: 255px;
          height: 210px;
          opacity: 1;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          width: 100%;
          max-width: 1244px;
          align-self: center;
          padding-top: 48px;
        }
        .footer-copy {
          font-family: Inter, sans-serif;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: rgba(191, 219, 254, 0.6);
          margin: 0;
        }
        @media (max-width: 1024px) {
          .footer-wrap {
            padding: 60px 32px 40px;
            height: auto;
            gap: 48px;
          }
          .footer-inner {
            gap: 40px;
          }
          .footer-col {
            width: calc(50% - 20px);
          }
          .footer-col.brand { width: 100%; }
          .footer-heading { width: 100%; }
          .footer-brand-logo { width: 200px; height: auto; }
          .footer-brand-text-wrap { width: 100%; }
          .footer-brand-text { width: 100%; max-width: 400px; }
          .footer-contact { width: 100%; }
          .footer-nav-list { width: 100%; }
          .footer-map { width: 100%; height: auto; max-width: 255px; }
        }
        @media (max-width: 640px) {
          .footer-wrap {
            padding: 40px 20px 32px;
            gap: 32px;
          }
          .footer-inner {
            flex-direction: column;
            gap: 32px;
          }
          .footer-col {
            width: 100%;
          }
          .footer-bottom { padding-top: 24px; }
          .footer-brand-logo { width: 180px; }
        }
      `}</style>
      <footer className="footer-wrap">
        <div className="footer-inner">
          {/* Col 1 — Brand */}
          <div className="footer-col brand">
            <img src={footerLogo} alt="E2E HRC Logo" className="footer-brand-logo" />
            <div className="footer-brand-text-wrap">
              <p className="footer-brand-text">
                Connecting exceptional talent with exceptional businesses across the UK, Europe,
                South Asia, and the GCC since 2007.
              </p>
            </div>
          </div>
          {/* Col 2 — UK Head Office */}
          <div className="footer-col">
            <h3 className="footer-heading">UK Head Office</h3>
            <address className="footer-contact">
              <div className="footer-contact-row" style={{ alignItems: 'flex-start' }}>
                <FiMapPin size={16} className="footer-contact-icon" style={{ marginTop: '2px' }} aria-hidden="true" />
                <span className="footer-contact-text">Unit 2, 1204B Stratford Road, Hall Green, Birmingham, B28 8HN, UK</span>
              </div>
              <div className="footer-contact-row" style={{ alignItems: 'center' }}>
                <FiPhone size={18} className="footer-contact-icon" aria-hidden="true" />
                <a href="tel:+441217782400" className="footer-contact-text" style={{ textDecoration: 'none' }}>
                  +44 (0) 121 778 2400
                </a>
              </div>
              <div className="footer-contact-row" style={{ alignItems: 'center' }}>
                <FiMail size={20} className="footer-contact-icon" aria-hidden="true" />
                <a href="mailto:info@e2ehrc.co.uk" className="footer-contact-text" style={{ textDecoration: 'none' }}>
                  info@e2ehrc.co.uk
                </a>
              </div>
            </address>
          </div>
          {/* Col 3 — Navigation */}
          <div className="footer-col">
            <h3 className="footer-heading">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="footer-nav-list">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-nav-link">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Col 4 — Office Locations */}
          <div className="footer-col">
            <h3 className="footer-heading">Our Office Locations</h3>
            <img src={mapImage} alt="Office locations map" className="footer-map" />
          </div>
        </div>
        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            Copyright &copy; 2026 by E2E Human Resource Consultancy Ltd | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
