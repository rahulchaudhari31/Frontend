import bciLogo from '../../assets/employee/LOGO BCI.png';
import ecoLogo from '../../assets/employee/LOGO ECO.png';
import icoLogo from '../../assets/employee/LOGO ICO.png';
import recLogo from '../../assets/employee/logo REC.png';
import bsiLogo from '../../assets/employee/LOGOI bsi.png';

const defaultLogos = [
  { name: 'BCI', tagline: 'British Columbia Institute', image: bciLogo },
  { name: 'ECO', tagline: 'Ecology Certified Org', image: ecoLogo },
  { name: 'ICO', tagline: 'Information Commissioner', image: icoLogo },
  { name: 'REC', tagline: 'Recruitment & Employment', image: recLogo },
  { name: 'BSI', tagline: 'British Standards Institution', image: bsiLogo },
];

function LogoPill({ name, tagline, image }) {
  return (
    <div className="inline-flex items-center gap-3 h-[68px] rounded-[40px] border border-[#E5E5E5] bg-white px-5 pr-5 pl-1 shrink-0" style={{ padding: '4px 20px 4px 4px' }}>
      <div className="w-[60px] h-[60px] rounded-full bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center overflow-hidden shrink-0">
        {image ? (
          <img src={image} alt={`${name} logo`} className="w-full h-full object-contain p-2" />
        ) : (
          <span className="font-body font-semibold text-sm text-[#475569]">{name.slice(0, 3)}</span>
        )}
      </div>
      <div className="flex flex-col">
        <span className="font-body font-semibold text-sm text-[#004CA5] leading-tight">{name}</span>
        {tagline && (
          <span className="font-body text-[10px] text-[#64748B] leading-tight mt-0.5">{tagline}</span>
        )}
      </div>
    </div>
  );
}

export default function TrustedClients({ logos = defaultLogos }) {
  return (
    <section className="w-full bg-white border-y border-[#EAEAEA] py-10 px-4 lg:px-[38px]">
      <div
        className="mx-auto flex flex-col items-start gap-10"
        style={{ maxWidth: '1364px' }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 w-full">
          <div className="shrink-0 w-full lg:w-[224px]">
            <p
              className="font-body font-semibold text-[12px] leading-[16px] tracking-[1.2px] uppercase text-[#004CA5] mb-2"
            >
              Trusted By
            </p>
            <p className="font-body font-normal text-[14px] leading-[22.75px] text-[#004CA5]">
              Leading organisations across the UK choose E2E HRC.
            </p>
          </div>

          <div className="flex flex-nowrap gap-4 min-w-0 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {logos.map((logo) => (
              <LogoPill key={logo.name} {...logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
