import { useEffect, useState, useRef } from 'react';
import { FiGlobe, FiHome, FiLayers } from 'react-icons/fi';

import trustPhoto from '../../assets/background coonecting reqrirment/build on trust.jpg';
import { getActivePartnerTrust } from '../../services/becomePartner/partnerTrustService';

const checkItems = [
  {
    title: 'Extensive Global Network',
    desc: 'Access to a vast pool of passive candidates and international clients.',
    icon: FiGlobe,
  },
  {
    title: 'UK Headquarters, Global Footprint',
    desc: 'Benefit from our established presence and compliance expertise across major markets.',
    icon: FiHome,
  },
  {
    title: 'Deep Sector Expertise',
    desc: 'Leverage our specialised knowledge across healthcare, IT, finance, engineering, hospitality, and more.',
    icon: FiLayers,
  },
];

const getImageUrl = (path) => {
  if (!path || typeof path !== 'string' || path.trim() === '') return trustPhoto;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

const renderDescription = (data) => {
  if (!data.description && (!data.bullets || data.bullets.length === 0)) return null;
  
  if (data.bullets && Array.isArray(data.bullets) && data.bullets.length > 0) {
    return (
      <div className="flex flex-col gap-2">
        {data.description && <p className="m-0">{data.description}</p>}
        <ul className="list-disc pl-5 m-0 flex flex-col gap-1">
          {data.bullets.map((bullet, i) => {
            const cleanText = typeof bullet === 'string' ? bullet.replace(/^([•●\-\*])\s*/, '').trim() : bullet;
            return cleanText ? <li key={`bullet-${i}`}>{cleanText}</li> : null;
          })}
        </ul>
      </div>
    );
  }

  if (!data.description) return null;

  const lines = data.description.split(/\r?\n/);
  const elements = [];
  let currentList = [];

  const pushList = (keySuffix) => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${keySuffix}`} className="list-disc pl-5 m-0 flex flex-col gap-1">
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    const match = trimmed.match(/^([•●\-\*])\s*(.*)/);
    if (match) {
      const bulletText = match[2].trim();
      if (bulletText) {
        currentList.push(<li key={`li-${i}`}>{bulletText}</li>);
      }
    } else {
      pushList(i);
      elements.push(
        <p key={`p-${i}`} className="m-0">
          {trimmed}
        </p>
      );
    }
  });

  pushList('end');

  return <div className="flex flex-col gap-2">{elements}</div>;
};

export default function BuiltOnTrustSection() {
  const [trustData, setTrustData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const response = await getActivePartnerTrust();

        if (mounted && response?.success && response?.data) {
          setTrustData(response.data);
        }
      } catch (error) {
        console.error('Failed to load active partner trust data:', error);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const checkOverflow = () => {
      if (descRef.current) {
        setIsOverflowing(descRef.current.scrollHeight > descRef.current.clientHeight + 2);
      }
    };
    
    // Slight delay to ensure DOM is fully rendered before measuring
    const timer = setTimeout(checkOverflow, 50);
    window.addEventListener('resize', checkOverflow);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [trustData, isExpanded]);

  const safeTrustData = trustData || {
    title: 'Built on Trust and Transparency Since 2007',
    description:
      'At E2E HRC, we believe that true partnership goes beyond transactional referrals. We build strategic alliances grounded in mutual respect, shared ethical standards, and a commitment to delivering exceptional talent solutions worldwide.',
    image: trustPhoto,
    features: checkItems.map((item) => ({ title: item.title, description: item.desc })),
  };

  const featureItems = Array.isArray(safeTrustData.features) && safeTrustData.features.length > 0
    ? safeTrustData.features
    : checkItems.map((item) => ({ title: item.title, description: item.desc }));

  const imageSrc = getImageUrl(safeTrustData.image);

  return (
    <section className="bg-[#FBF9F8] py-[100px]">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
        <div className="flex flex-col lg:flex-row gap-x-[64px] gap-y-12 items-center">
          <div className="relative w-full lg:w-[568px] lg:h-[500px] shrink-0">
            <div className="hidden lg:block absolute" style={{ left: '48px', top: '8px', width: '459px', height: '487px' }}>
              <div className="absolute inset-0 border border-[#F39308]" style={{ borderWidth: '1.2px' }} />
              <div className="absolute" style={{ left: '12px', top: '12px', width: '435px', height: '463px' }}>
                <img
                  src={imageSrc}
                  alt="Our team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative lg:hidden w-full max-w-[520px] mx-auto">
              <img
                src={imageSrc}
                alt="Our team collaboration"
                className="w-full h-[380px] md:h-[440px] object-cover rounded-[8px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1 max-w-[568px]">
            <h2
              className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px]"
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontWeight: 600,
                letterSpacing: '-0.32px',
                color: '#003679',
              }}
            >
              {safeTrustData.title}
            </h2>
            {safeTrustData.description && (
              <div className="flex flex-col gap-2">
                <div
                  ref={descRef}
                  style={{
                    maxHeight: '120px',
                    overflowY: isExpanded ? 'auto' : 'hidden',
                    overflowX: 'hidden',
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#424752',
                  }}
                  className="pr-1"
                >
                  {renderDescription(safeTrustData)}
                </div>
                {isOverflowing && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="self-start text-[#003679] font-semibold text-[15px] hover:underline"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
            )}
            <div className="flex flex-col gap-6 pt-4">
              {featureItems.map((item, i) => {
                const Icon = checkItems[i]?.icon || FiGlobe;
                return (
                  <div key={`${item.title}-${i}`} className="flex gap-4 items-start">
                    <div
                      className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center"
                      style={{ background: 'rgba(0, 54, 121, 0.1)' }}
                    >
                      <Icon size={14} color="#003679" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4
                        className="text-[18px] md:text-[20px] leading-[26px] md:leading-[28px]"
                        style={{
                          fontFamily: "'Hanken Grotesk', sans-serif",
                          fontWeight: 600,
                          color: '#1B1C1C',
                        }}
                      >
                        {item.title}
                      </h4>
                      <div
                        className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontWeight: 400,
                          color: '#424752',
                        }}
                      >
                        {renderDescription({ description: item.description })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
