import { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { getFooterCompany } from '../../services/footer/footerCompanyService';
import { getFooterContact } from '../../services/footer/footerContactService';
import { getFooterNavigation } from '../../services/footer/footerNavigationService';
import { getFooterOfficeLocation } from '../../services/footer/footerOfficeLocationService';

export default function Footer() {
  const [company, setCompany] = useState(null);
  const [contact, setContact] = useState(null);
  const [navigation, setNavigation] = useState([]);
  const [officeLocations, setOfficeLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllFooterData = async () => {
      try {
        setLoading(true);
        const [
          companyResponse,
          contactResponse,
          navigationResponse,
          officeResponse,
        ] = await Promise.all([
          getFooterCompany(),
          getFooterContact(),
          getFooterNavigation(),
          getFooterOfficeLocation(),
        ]);

        console.log('Footer Company:', companyResponse);
        console.log('Footer Contact:', contactResponse);
        console.log('Footer Navigation:', navigationResponse);
        console.log('Footer Office:', officeResponse);

        setCompany(companyResponse || null);
        setContact(contactResponse || null);
        setNavigation(Array.isArray(navigationResponse) ? navigationResponse : []);
        setOfficeLocations(Array.isArray(officeResponse) ? officeResponse : []);
      } catch (error) {
        console.error('Error loading footer data:', error);
        setCompany(null);
        setContact(null);
        setNavigation([]);
        setOfficeLocations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllFooterData();
  }, []);

  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-[1245px] px-4 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:w-[255px]">
            {company?.logo && (
              <img src={company.logo} alt="Company Logo" className="w-[200px] lg:w-[255px] h-auto object-contain" />
            )}
            <p className="font-body text-sm leading-relaxed text-[#DBEAFE] max-w-xs">
              {company?.description || 'Connecting exceptional talent with exceptional businesses across the UK, Europe, South Asia, and the GCC since 2007.'}
            </p>
          </div>

          <div className="lg:w-[255px]">
            {/* sectionTitle is the correct field from FooterContact model */}
            <h3 className="font-montserrat font-bold text-lg tracking-[1.8px] uppercase text-[#F39308] mb-8">{contact?.sectionTitle || 'UK HEAD OFFICE'}</h3>
            <address className="not-italic flex flex-col gap-6">
              {contact?.address && (
                <div className="flex gap-4 items-start">
                  <FiMapPin size={16} className="text-[#F39308] shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-[#DBEAFE]">{contact.address}</span>
                </div>
              )}
              {contact?.phone && (
                <div className="flex gap-4 items-center">
                  <FiPhone size={18} className="text-[#F39308] shrink-0" />
                  <a href={`tel:${contact.phone}`} className="font-body text-sm text-[#DBEAFE] no-underline">{contact.phone}</a>
                </div>
              )}
              {contact?.email && (
                <div className="flex gap-4 items-center">
                  <FiMail size={20} className="text-[#F39308] shrink-0" />
                  <a href={`mailto:${contact.email}`} className="font-body text-sm text-[#DBEAFE] no-underline">{contact.email}</a>
                </div>
              )}
            </address>
          </div>

          <div className="lg:w-[180px]">
            <h3 className="font-montserrat font-bold text-lg tracking-[1.8px] uppercase text-[#F39308] mb-8">NAVIGATION</h3>
            <nav>
              <ul className="flex flex-col gap-4">
                {navigation.map((item, index) => (
                  /* label is the correct field from FooterNavigation menuItems schema */
                  <li key={item._id || item.label || index}>
                    <a href={item.url || '#'} className="font-body text-sm text-[#DBEAFE] hover:text-[#F39308] transition-colors no-underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:w-[255px]">
            <h3 className="font-montserrat font-bold text-lg tracking-[1.8px] uppercase text-[#F39308] mb-8">OUR OFFICE LOCATIONS</h3>
            <div className="relative">
              {officeLocations.length > 0 && officeLocations[0]?.image ? (
                <img src={officeLocations[0].image} alt={officeLocations[0].title || 'World map'} className="w-full max-w-[255px] h-[210px] object-cover rounded-lg" />
              ) : (
                <div className="w-full max-w-[255px] h-[210px] bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                  Map Preview
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12">
          <p className="font-body text-xs text-center tracking-[1.2px] uppercase text-[rgba(191,219,254,0.6)]">
            {company?.copyright || 'Copyright © 2026 by E2E Human Resource Consultancy Ltd | All Rights Reserved'}
          </p>
        </div>
      </div>
    </footer>
  );
}
