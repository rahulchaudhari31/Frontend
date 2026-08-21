import { useState, useEffect } from 'react';
import heroBg from '../../assets/about us images/about us background.jpg';
import { getContactUsSection } from '../../services/contactUs/contactUsService';

export default function HeroSection() {
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSection = async () => {
      try {
        setLoading(true);
        const data = await getContactUsSection();
        setSection(data);
      } catch (error) {
        console.error('Error loading Contact Us section:', error);
        // Use fallback data if API fails
        setSection(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSection();
  }, []);

  // Don't render if section is inactive or doesn't exist
  if (!loading && (!section || section.isActive === false)) {
    return null;
  }

  // Use API data or fallback to defaults
  const title = section?.title || 'Connect With';
  const highlightedText = section?.highlightedText || 'E2E HRC';
  const backgroundImage = section?.backgroundImage || heroBg;

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '515px',
        padding: '55px 64px',
        borderTop: '1px solid #EAE8E7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
        }}
      />
      <h1
        className="hero-heading"
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: '60px',
          lineHeight: '48px',
          color: '#FFFFFF',
          margin: 0,
          marginBottom: '60px',
        }}
      >
        {title} <span style={{ color: '#F39308' }}>{highlightedText}</span>
      </h1>
    </section>
  );
}
