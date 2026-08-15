import { useEffect, useState } from 'react';
import heroBg from '../../assets/background coonecting reqrirment/background become a partner.jpg';
import { getActiveRecruitmentPartner } from '../../services/becomePartner/becomePartnerService';

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

  const bgImage = heroData?.backgroundImage
    ? getImageUrl(heroData.backgroundImage)
    : heroBg;

  return (
    <section
      className="relative flex items-center px-4 md:px-16"
      style={{
        height: 201,
        background: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage}) center / cover no-repeat`,
        borderTop: '1px solid #EAE8E7',
      }}
    >
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
            lineHeight: '28px',
            margin: 0,
          }}
        >
          {title} <span style={{ color: '#F39308' }}>{highlightText}</span> {subtitle}
        </h1>
      </div>
    </section>
  );
}
