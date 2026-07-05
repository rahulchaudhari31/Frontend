import { FiArrowRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { label: 'LinkedIn',  href: '#', Icon: FaLinkedinIn },
  { label: 'Twitter',   href: '#', Icon: FaTwitter    },
  { label: 'Facebook',  href: '#', Icon: FaFacebookF  },
  { label: 'Instagram', href: '#', Icon: FaInstagram  },
];

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-black" style={{ height: '48px' }}>
      <div
        className="relative flex h-full items-center"
        style={{ maxWidth: '1440px', margin: '0 auto', paddingLeft: '64px', paddingRight: '64px' }}
      >
        {/* Centered announcement link */}
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap text-[14px] font-medium text-[#0073CF] transition-colors hover:text-[#1C93F3]"
        >
          Looking to hire exceptional talent? Submit a Vacancy
          <FiArrowRight size={16} aria-hidden="true" />
        </a>

        {/* Social icons — right aligned */}
        <div className="ml-auto flex items-center gap-5">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-white transition-colors hover:text-[#0073CF]"
            >
              <Icon size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
