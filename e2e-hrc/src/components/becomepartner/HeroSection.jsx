import { useEffect, useState } from 'react';
import heroBg from '../../assets/background coonecting reqrirment/background become a partner.jpg';
import { getActiveRecruitmentPartner } from '../../services/becomePartner/becomePartnerService';

/* Mobile-only overrides — scoped entirely inside @media so desktop is untouched */
const mobileHeroStyles = `
@media (max-width: 768px) {
  .bp-hero {
    min-height: 260px !important;
    background-position: center !important;
    align-items: center !important;
  }
}
`;

// Reuse the same image URL helper pattern used across this project.
const getImageUrl = (path) => {
  if (!path || typeof path !== 'string' || path.trim() === '') return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export default function HeroSection() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const response = await getActiveRecruitmentPartner();
        if (mounted && response?.success && response?.data) {
          setHeroData(response.data);
        }
      } catch (error) {
        console.error('Failed to load Become a Partner hero:', error);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  // Resolve values — fall back to static defaults so the UI never breaks.
  const title = heroData?.title || 'Become Our';
  const highlightText = heroData?.highlightText || 'Trusted';
  const subtitle = heroData?.subtitle || 'Recruitment Partner';
  const description = heroData?.description || '';

  const bgImage = heroData?.backgroundImage
    ? getImageUrl(heroData.backgroundImage)
    : heroBg;

  return (
    <section
      className="bp-hero relative flex items-center px-4 md:px-16 py-10 md:py-12"
      style={{
        minHeight: 201,
        background: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}') center / cover no-repeat`,
        borderTop: '1px solid #EAE8E7',
      }}
    >
      <style>{mobileHeroStyles}</style>
      <div
        className="w-full max-w-[1344px]"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 16,
        }}
      >
        <h1
          className="text-white text-[28px] md:text-[48px]"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            lineHeight: '1.2',
            margin: 0,
            marginTop: "10px",
            wordWrap: 'break-word',
          }}
        >
          {title} <span style={{ color: '#F39308' }}>{highlightText}</span> {subtitle}
        </h1>
        {description && (
          <p
            className="text-white text-[16px] md:text-[18px]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              lineHeight: '1.5',
              maxWidth: '800px',
              margin: 0,
              padding: "8px",
              opacity: 0.8
            }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
