import { FiMapPin } from 'react-icons/fi';
import ukImage from '../../assets/images/united kingdom.png';
import uaeImage from '../../assets/images/united arab.png';
import europeImage from '../../assets/images/building.jpg';
import indiaImage from '../../assets/images/india.png.png';

const defaultLocations = [
  { name: 'United Kingdom', image: ukImage, pinColor: '#004CA5', label: 'United Kingdom' },
  { name: 'United Arab Emirates', image: uaeImage, pinColor: '#F5A300', label: 'Dubai,UAE' },
  { name: 'Europe', image: europeImage, pinColor: '#C8D96F', label: 'Germany,Europe' },
  { name: 'India', image: indiaImage, pinColor: '#004CA5', label: 'Delhi,India' },
];

export default function OfficeLocations({
  locations = defaultLocations,
  variant = 'scroll',
  badgeText = 'Our Locations',
  heading = 'Our Office Locations',
  bgColor = '#F8FAFC',
  sectionHeight = '521px',
  accentColor = '#F39308',
}) {
  if (variant === 'grid') {
    return (
      <section className="py-16 md:py-20 px-4 relative" style={{ background: bgColor }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#E8EDF5] text-[#004CA5] font-body font-semibold text-[12px] leading-[16px] text-center gap-1.5 rounded-full px-3 py-[6px]">
              <FiMapPin size={12} strokeWidth={2} color="#004CA5" />
              {badgeText}
            </span>
            <h2 className="font-heading font-[800] text-[36px] leading-[40px] tracking-[0px] text-[#004CA5] text-center mt-3">
              {heading}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map(({ name, image, pinColor, label }) => (
              <div key={name} className="relative group rounded-2xl overflow-hidden cursor-pointer h-64">
                <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <FiMapPin size={16} color={accentColor} />
                    <span className="text-white font-heading font-[700] text-[13px] leading-tight">{label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full pt-[37px] pb-[3px] lg:h-auto" style={{ background: bgColor, height: sectionHeight }}>
      <div className="mx-auto px-4 lg:px-0" style={{ maxWidth: '1396px' }}>
        <div className="flex flex-col items-center">
          <span
            className="inline-flex items-center justify-center bg-[#E8EDF5] text-[#004CA5] font-body font-semibold text-[12px] leading-[16px] text-center gap-1.5 rounded-full"
            style={{ padding: '6px 12px' }}
          >
            <FiMapPin size={12} strokeWidth={2} color="#004CA5" />
            {badgeText}
          </span>
          <h2
            className="font-heading font-[800] text-[24px] sm:text-[36px] leading-[40px] tracking-[0px] text-[#004CA5] text-center mt-3"
          >
            {heading}
          </h2>
        </div>

        <div className="flex gap-4 sm:gap-[46.46px] overflow-x-auto pb-4 snap-x snap-mandatory mt-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {locations.map(({ name, image, pinColor, label }) => (
            <div
              key={name}
              className="relative w-[280px] sm:w-[344.59px] h-[240px] sm:h-[309.74px] rounded-[12.91px] overflow-hidden group cursor-pointer snap-start shrink-0"
              style={{ boxShadow: '0px 2.58px 12.91px rgba(0,0,0,0.08)' }}
            >
              <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center top-0 pt-8">
                <span className="font-heading font-[800] text-white text-center px-4 leading-tight" style={{ fontSize: '31px', letterSpacing: '-0.5px' }}>
                  {name}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <FiMapPin size={16} color={pinColor} fill={pinColor} />
                  <span className="text-white font-heading font-[700] text-[13px] leading-tight">{label}</span>
                </div>
                <a href="#" className="font-heading font-[600] text-[12px] hover:underline inline-flex items-center gap-1" style={{ color: pinColor }}>
                  Get Directions
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
