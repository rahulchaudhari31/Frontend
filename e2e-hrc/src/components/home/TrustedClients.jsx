import { useState, useEffect } from 'react';
import { getTrustedBySection } from '../../services/home/trustedBySectionService';
import { getTrustedByLogos } from '../../services/home/trustedByLogoService';

function TrustedClients() {
  const [section, setSection] = useState(null);
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch section data
        const sectionData = await getTrustedBySection();
        setSection(sectionData);
        
        // Fetch logos and sort by order
        const logosData = await getTrustedByLogos();
        const sortedLogos = logosData.sort((a, b) => (a.order || 0) - (b.order || 0));
        setLogos(sortedLogos);
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

  // Create repeated logos array for infinite marquee effect
  const allLogos = loading || logos.length === 0 ? [] : [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-white py-6 lg:py-0 lg:h-[226px]">
      <div className="max-w-[1440px] mx-auto h-full flex flex-col lg:flex-row items-center gap-4 lg:gap-0 px-5 sm:px-8 lg:px-[92px]">
        {/* Left side - Text */}
        <div className="lg:w-[224px] lg:h-[70px] flex-shrink-0 text-center lg:text-left">
          <span
            className="uppercase text-[#004CA5] block"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "1.2px",
            }}
          >
            {section?.badgeText || 'Trusted By'}
          </span>
          <p
            className="text-[#004CA5] mt-2 lg:mt-0"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "23px",
            }}
          >
            {section?.title || 'Leading organisations across the UK choose E2E HRC.'}
          </p>
        </div>

        {/* Right side - Logo scroll */}
        <div className="overflow-hidden flex-1 w-full" style={{ height: "69px" }}>
          <div className="trusted-clients-track flex items-center" style={{ gap: "12px" }}>
            {allLogos.map((logo, index) => {
              const logoElement = (
                <div
                  key={`${logo._id || logo.companyName}-${index}`}
                  className="flex items-center flex-shrink-0 bg-[#F5F5F5] border border-[#E5E5E5]"
                  style={{
                    width: "116px",
                    height: "68px",
                    borderRadius: "40px",
                    padding: "4px 20px",
                    gap: "4px",
                  }}
                >
                  <img
                    src={logo.logo}
                    alt={logo.companyName}
                    style={{
                      width: "auto",
                      height: "60px",
                      objectFit: "contain",
                      maxWidth: "100%",
                    }}
                  />
                </div>
              );

              // If websiteUrl exists, wrap in link
              if (logo.websiteUrl) {
                return (
                  <a
                    key={`${logo._id || logo.companyName}-${index}`}
                    href={logo.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    {logoElement}
                  </a>
                );
              }

              return logoElement;
            })}
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
