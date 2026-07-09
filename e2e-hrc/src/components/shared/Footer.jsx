import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import mapImage from '../../assets/assets/image/image/map.png';
import footerLogo from '../../assets/assets/image/image/logo.png';

const navLinks = ['Home', 'About Us', 'Our Services', 'Latest Jobs', 'Expert Blogs'];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1245px] px-4 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:w-[255px]">
            <img src={footerLogo} alt="E2E HRC Logo" className="w-[200px] lg:w-[255px] h-auto object-contain" />
            <p className="font-body text-sm leading-relaxed text-[#DBEAFE] max-w-xs">
              Connecting exceptional talent with exceptional businesses across the UK, Europe, South Asia, and the GCC since 2007.
            </p>
          </div>

          <div className="lg:w-[180px]">
            <h3 className="font-montserrat font-bold text-lg tracking-[1.8px] uppercase text-[#F39308] mb-8">NAVIGATION</h3>
            <nav>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm text-[#DBEAFE] hover:text-[#F39308] transition-colors no-underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:w-[255px]">
            <h3 className="font-montserrat font-bold text-lg tracking-[1.8px] uppercase text-[#F39308] mb-8">UK HEAD OFFICE</h3>
            <address className="not-italic flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <FiMapPin size={16} className="text-[#F39308] shrink-0 mt-0.5" />
                <span className="font-body text-sm text-[#DBEAFE]">Unit 2, 1204B Stratford Road, Hall Green, Birmingham, B28 8HN, UK</span>
              </div>
              <div className="flex gap-4 items-center">
                <FiPhone size={18} className="text-[#F39308] shrink-0" />
                <a href="tel:+441217782400" className="font-body text-sm text-[#DBEAFE] no-underline">+44 (0) 121 778 2400</a>
              </div>
              <div className="flex gap-4 items-center">
                <FiMail size={20} className="text-[#F39308] shrink-0" />
                <a href="mailto:info@e2ehrc.co.uk" className="font-body text-sm text-[#DBEAFE] no-underline">info@e2ehrc.co.uk</a>
              </div>
            </address>
          </div>

          <div className="lg:w-[255px]">
            <h3 className="font-montserrat font-bold text-lg tracking-[1.8px] uppercase text-[#F39308] mb-8">OUR OFFICE LOCATIONS</h3>
            <div className="relative">
              <img src={mapImage} alt="World map" className="w-full max-w-[255px] h-[210px] object-cover rounded-lg" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12">
          <p className="font-body text-xs text-center tracking-[1.2px] uppercase text-[rgba(191,219,254,0.6)]">
            Copyright &copy; 2026 by E2E Human Resource Consultancy Ltd | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
