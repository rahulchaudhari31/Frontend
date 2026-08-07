import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const socialLinks = [
  { label: 'LinkedIn', href: '#', Icon: FaLinkedinIn },
  { label: 'Twitter', href: '#', Icon: FaTwitter },
  { label: 'Facebook', href: '#', Icon: FaFacebookF },
  { label: 'Instagram', href: '#', Icon: FaInstagram },
];

export default function AnnouncementBar() {
  return (
    <>
      <style>{`
        .eann-bar { height: 48px; width: 100%; background: #000; }
        .eann-bar-inner {
          display: flex; align-items: center; height: 100%;
          max-width: 1440px; margin: 0 auto;
          padding: 0 64px; position: relative;
        }
        .eann-link {
          position: absolute; left: 50%; transform: translateX(-50%);
          display: flex; align-items: center; gap: 8px;
          white-space: nowrap; font-size: 14px; font-weight: 500;
          color: #0073CF; text-decoration: none;
        }
        .eann-link:hover { color: #1C93F3; }
        .eann-social { margin-left: auto; display: flex; align-items: center; gap: 20px; }
        .eann-social a { color: #fff; transition: color 0.15s; }
        .eann-social a:hover { color: #0073CF; }
        @media (max-width: 1024px) {
          .eann-bar-inner { padding: 0 32px; }
          .eann-link { font-size: 12px; }
        }
        @media (max-width: 768px) {
          .eann-bar-inner { padding: 0 16px; }
          .eann-link { font-size: 11px; position: static; transform: none; margin: 0 auto; }
          .eann-social { display: none; }
        }
        @media (max-width: 480px) {
          .eann-link { font-size: 10px; white-space: normal; text-align: center; }
        }
      `}</style>
      <div className="eann-bar">
        <div className="eann-bar-inner">
          <a href="#" className="eann-link">
            Looking to hire exceptional talent? Submit a Vacancy
            <FiArrowRight size={16} aria-hidden="true" />
          </a>
          <div className="eann-social">
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
