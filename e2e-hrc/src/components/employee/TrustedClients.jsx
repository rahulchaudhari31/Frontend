import { useState, useEffect } from 'react';
import { getTrustedBy } from '../../services/employee/trustedByService';

function TrustedClients() {
  const [section, setSection] = useState(null);
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await getTrustedBy();
        const data = response?.data || response || null;

        if (!data || data.isActive === false) {
          setSection(null);
          setLogos([]);
          return;
        }

        const activeLogos = (data.logos || [])
          .filter((logo) => logo?.isActive !== false)
          .sort((a, b) => (a.order || 0) - (b.order || 0));

        setSection(data);
        setLogos(activeLogos);
      } catch (error) {
        console.error('Error loading trusted by data:', error);
        setSection(null);
        setLogos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const allLogos = loading || logos.length === 0 ? [] : [...logos, ...logos, ...logos, ...logos];

  if (!loading && !section) {
    return null;
  }

  return (
    <section className="w-full bg-white py-6 lg:py-0 lg:h-[226px] mb-28">
      <div className="text-center mt-10 lg:mb-0 md:mb-10 px-20">
          <span
            className="uppercase text-[#004CA5] block"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '1.2px',
            }}
          >
            {section?.eyebrowText || 'Trusted By'}
          </span>
          <p
            className="text-[#004CA5] mt-2 lg:mt-0"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              
            }}
          >
            {section?.description || 'Leading organisations across the UK choose E2E HRC.'}
          </p>
        </div>
      <div className="max-w-[1440px] mx-auto h-full flex flex-col lg:flex-row items-center gap-4 lg:gap-0 px-5 sm:px-8 lg:px-[92px]">
      
        <div className="overflow-hidden flex-1 w-full" style={{ height: '69px' }}>
          <div className="trusted-clients-track flex items-center" style={{ gap: '12px' }}>
            {allLogos.map((logo, index) => (
              <div
                key={`${logo._id || logo.image || 'trusted-by'}-${index}`}
                className="flex items-center flex-shrink-0 bg-[#F5F5F5] border border-[#E5E5E5]"
                style={{
                  width: '116px',
                  height: '68px',
                  borderRadius: '40px',
                  padding: '4px 20px',
                  gap: '4px',
                }}
              >
                <img
                  src={logo.image}
                  alt={logo.altText || 'Trusted accreditation'}
                  style={{
                    width: 'auto',
                    height: '60px',
                    objectFit: 'contain',
                    maxWidth: '100%',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .trusted-clients-track {
          display: flex;
          gap: 12px;
          animation: scrollLogos 25s linear infinite;
          width: max-content;
        }
        .trusted-clients-track:hover {
          animation-play-state: paused;
        }
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default TrustedClients;
