import girl1 from '../assets/blogs page credentials/office girl1.png';
import girl2 from '../assets/blogs page credentials/office girl2.png';
import man from '../assets/blogs page credentials/office man.png';

const HEX_CLIP = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';

function DashedHex({ size = 110, stroke = '#F39308', className = '' }) {
  const r = size / 2;
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return `${r + r * Math.cos(angle)},${r + r * Math.sin(angle)}`;
  }).join(' ');
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={`absolute pointer-events-none ${className}`} style={{ fill: 'none' }}>
      <polygon points={pts} stroke={stroke} strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
    </svg>
  );
}

function SolidHex({ size = 24, color, gradient, className = '' }) {
  const r = size / 2;
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return `${r + r * Math.cos(angle)},${r + r * Math.sin(angle)}`;
  }).join(' ');
  const id = gradient ? `hex-grad-${Math.random().toString(36).slice(2, 8)}` : null;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={`absolute pointer-events-none ${className}`}>
      {id && (
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradient[0]} />
            <stop offset="100%" stopColor={gradient[1]} />
          </linearGradient>
        </defs>
      )}
      <polygon points={pts} fill={gradient ? `url(#${id})` : color} />
    </svg>
  );
}

export default function HeroBanner() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto overflow-hidden bg-white isolate" style={{ height: 520 }}>
      {/* Dashed decorative hexagons */}
      <DashedHex size={110} stroke="#F39308" className="left-[30px] top-[20px] opacity-70" />
      <DashedHex size={110} stroke="#F39308" className="left-[10px] top-[310px] opacity-50" />
      <DashedHex size={110} stroke="#C4CBD8" className="right-[40px] top-[40px] opacity-60" />
      <DashedHex size={110} stroke="#F39308" className="right-[60px] bottom-[40px] opacity-50" />

      {/* Solid decorative hexagons */}
      <SolidHex size={24} color="#C9DB82" className="left-[20px] top-[170px]" />
      <SolidHex size={24} color="#C9DB82" className="left-[28px] top-[200px]" />
      <SolidHex size={24} gradient={['#1295D4', '#7EC443']} className="right-[30px] bottom-[30px]" />
      <SolidHex size={24} gradient={['#1295D4', '#7EC443']} className="right-[42px] bottom-[14px]" />

      {/* Photo cluster - Left */}
      <div className="absolute left-[60px] top-[42px] hidden md:block">
        <div className="relative" style={{ width: 182, height: 210 }}>
          <div className="absolute inset-[-8px]" style={{ clipPath: HEX_CLIP, background: 'linear-gradient(135deg, #E9E4FF, #CFE7FF)' }} />
          <img src={girl1} alt="Woman in cream blazer" className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: HEX_CLIP }} />
        </div>
      </div>

      <div className="absolute left-[150px] top-[185px] hidden md:block">
        <div className="relative" style={{ width: 290, height: 335 }}>
          <div className="absolute inset-[-8px]" style={{ clipPath: HEX_CLIP, background: 'linear-gradient(135deg, #D9EDFF, #BFD8FF)' }} />
          <img src={man} alt="Man in navy suit with glasses" className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: HEX_CLIP }} />
        </div>
      </div>

      {/* Photo cluster - Right (mirrored) */}
      <div className="absolute right-[95px] top-[42px] hidden md:block" style={{ transform: 'scaleX(-1)' }}>
        <div className="relative" style={{ width: 290, height: 335 }}>
          <div className="absolute inset-[-8px]" style={{ clipPath: HEX_CLIP, background: 'linear-gradient(135deg, #FFE3A9, #FFC04A)' }} />
          <img src={girl2} alt="Woman in mustard blazer" className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: HEX_CLIP }} />
        </div>
      </div>

      {/* Mobile photo clusters */}
      <div className="flex md:hidden flex-col items-center gap-4 pt-24 pb-6 px-4">
        <div className="flex gap-4 justify-center">
          <div className="relative" style={{ width: 110, height: 127 }}>
            <div className="absolute inset-[-6px]" style={{ clipPath: HEX_CLIP, background: 'linear-gradient(135deg, #E9E4FF, #CFE7FF)' }} />
            <img src={girl1} alt="Woman in cream blazer" className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: HEX_CLIP }} />
          </div>
          <div className="relative" style={{ width: 175, height: 202 }}>
            <div className="absolute inset-[-6px]" style={{ clipPath: HEX_CLIP, background: 'linear-gradient(135deg, #D9EDFF, #BFD8FF)' }} />
            <img src={man} alt="Man in navy suit" className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: HEX_CLIP }} />
          </div>
          <div className="relative" style={{ width: 175, height: 202 }}>
            <div className="absolute inset-[-6px]" style={{ clipPath: HEX_CLIP, background: 'linear-gradient(135deg, #FFE3A9, #FFC04A)' }} />
            <img src={girl2} alt="Woman in mustard blazer" className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: HEX_CLIP }} />
          </div>
        </div>
      </div>

      {/* Center text content */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-2 max-w-[600px] px-4" style={{ top: 88 }}>
        <p className="font-['Inter',sans-serif] font-semibold text-base text-[#00458D] mb-1">
          Find Jobs That Match Your Skills
        </p>
        <h1 className="font-['Poppins',sans-serif] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-[#191C1E] mb-2">
          Connecting Talent with Opportunity
        </h1>
        <p className="font-['Inter',sans-serif] text-lg md:text-xl leading-9 text-black max-w-[565px]">
          Find your ideal role, upload your CV, and connect with leading employers across multiple industries.
        </p>
      </div>
    </section>
  );
}
