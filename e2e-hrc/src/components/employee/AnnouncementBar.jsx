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
    <div className="w-full bg-black" style={{ height: '48px' }}>
      <div className="mx-auto flex items-center h-full max-w-[1440px] px-4 xl:px-16 relative">
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm font-medium text-navy no-underline whitespace-nowrap"
        >
          Looking to hire exceptional talent? Submit a Vacancy
          <FiArrowRight size={16} />
        </a>
        <div className="ml-auto flex items-center gap-5">
          {socialLinks.map(({ label, href, Icon }) => (
            <a key={label} href={href} aria-label={label} className="text-white hover:text-white/80 transition-colors">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
