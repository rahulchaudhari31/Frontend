import { useState, useEffect } from "react";
import { getEmployeeCards } from "../../services/home/employeeCardService";
import employeeIcon from "../../assets/images/Career Growth imgs/employee1.png";

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M3.125 7.5H11.875M11.875 7.5L7.5 3.125M11.875 7.5L7.5 11.875" stroke="#FFFFFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function ServiceCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const data = await getEmployeeCards();
        setCards(data || []);
      } catch (error) {
        console.error('Failed to fetch employee cards:', error);
        setCards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const renderCard = (card) => {
    // Determine card type and colors
    const isEmployer = card.cardType === 'employer' || card.cardType === 'employer-card';
    const bgColor = isEmployer ? '#C9DB82' : '#FFFFFF';
    const textColor = isEmployer ? '#FFFFFF' : '#004CA5';
    const descColor = isEmployer ? 'rgba(255,255,255,0.9)' : '#004CA5';

    // Extract dynamic data with fallbacks
    const badgeText = card.badgeText || "For Employers";
    const titleLine = card.titleLine || "Find Your";
    const highlightedText = card.highlightedText || "Next Star";
    const description = card.description || "";
    const buttonText = card.buttonText || "Explore";
    const buttonLink = card.buttonLink || "#";

    return (
      <div
        key={card._id || card.id}
        style={{
          background: bgColor,
          borderRadius: '20px',
          padding: 'clamp(24px, 4vw, 40px)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minHeight: '334px',
          boxSizing: 'border-box',
          flex: '1',
        }}
      >
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '6px 14px',
          gap: '8px',
          background: '#FFFFFF',
          border: '0.8px solid #F39308',
          borderRadius: '9999px',
          width: 'fit-content',
          marginBottom: '24px',
        }}>
          <img src={employeeIcon} alt="" style={{ width: '14px', height: '14px' }} />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#004CA5',
          }}>
            {badgeText}
          </span>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '36px',
          lineHeight: '45px',
          color: textColor,
          margin: 0,
          marginBottom: '16px',
        }}>
          {titleLine}
          <br />
          <span style={{ color: isEmployer ? '#F39308' : '#004CA5' }}>{highlightedText}</span>
        </h2>

        {/* Description */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '26px',
          color: descColor,
          margin: 0,
          marginBottom: '24px',
          maxWidth: '519px',
        }}>
          {description}
        </p>

        {/* Button - bottom right */}
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
          <a
            href={buttonLink}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              gap: '8px',
              background: '#F39308',
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
          >
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#FFFFFF',
              whiteSpace: 'nowrap',
            }}>
              {buttonText}
            </span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    );
  };

  // Show skeleton while loading
  if (loading) {
    return (
      <section style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 16px' }} className="sm:px-8">
          <div className="flex flex-col sm:flex-row gap-0">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-full sm:flex-1 animate-pulse"
                style={{
                  background: '#F3F4F6',
                  borderRadius: '20px',
                  padding: '40px',
                  minHeight: '334px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div className="h-6 bg-gray-300 rounded-full w-24 mb-6" />
                <div className="h-12 bg-gray-300 rounded w-3/4 mb-4" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 rounded" />
                  <div className="h-4 bg-gray-300 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // If no cards, render nothing
  if (cards.length === 0) {
    return null;
  }

  return (
    <section style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 16px' }} className="sm:px-8">
        <div className="flex flex-col sm:flex-row gap-0">
          {cards.map((card) => renderCard(card))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
