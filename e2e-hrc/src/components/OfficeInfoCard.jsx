import { useEffect, useCallback } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiCompass, FiX } from 'react-icons/fi';

const defaultData = {
  officeName: 'UK Head Office',
  address: ['Unit 2, 1204B Stratford Road, Hall Green,', 'Birmingham, B28 8AS, UK'],
  phone: '+44 (0) 121 778 2400',
  email: 'info@e2ehrc.co.uk',
  hours: 'Mon to Fri: 9AM to 6PM',
  aboutText:
    'Our UK head office is located in Birmingham, easily accessible by road and public transport. Our team is available to assist you with all your recruitment needs.',
  directionsQuery: 'Unit 2, 1204B Stratford Road, Hall Green, Birmingham, B28 8AS, UK',
};

/* ─── Mobile-only overrides ─────────────────────────────────────────────────
   All rules are scoped inside @media (max-width: 768px) so desktop/tablet
   styling is completely unaffected.
   ─────────────────────────────────────────────────────────────────────────── */
const mobileStyles = `
@media (max-width: 768px) {
  .oic-card {
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    right: auto !important;
    bottom: auto !important;
    transform: translate(-50%, -50%) !important;
    width: calc(100% - 36px) !important;
    max-width: 360px !important;
    max-height: 85vh !important;
    overflow-y: auto !important;
    padding: 24px 20px !important;
    border-radius: 20px !important;
    box-sizing: border-box !important;
    z-index: 1000 !important;
  }

  .oic-close-btn {
    top: 14px !important;
    right: 14px !important;
    width: 34px !important;
    height: 34px !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important;
  }

  .oic-title {
    font-size: 20px !important;
    margin-bottom: 18px !important;
    padding-right: 40px !important;
  }

  .oic-info-text {
    font-size: 14px !important;
  }

  .oic-directions-btn {
    padding: 14px !important;
    font-size: 15px !important;
  }
}
`;

export default function OfficeInfoCard({
  data = defaultData,
  isVisible,
  style,
  onClose,
  isModal = false,
  onMouseEnter,
  onMouseLeave,
}) {
  const { officeName, address, phone, email, hours, aboutText, directionsQuery } = data;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape' && onClose) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isModal && isVisible) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModal, isVisible, handleKeyDown]);

  if (!isVisible) return null;

  const handleGetDirections = () => {
    const q = encodeURIComponent(directionsQuery);
    window.open(`https://maps.google.com/?q=${q}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Inject mobile-only styles */}
      <style>{mobileStyles}</style>

      {isModal && (
        <div
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 49,
            borderRadius: 24,
          }}
        />
      )}
      <div
        role={isModal ? 'dialog' : 'tooltip'}
        aria-label={officeName}
        aria-modal={isModal}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`oic-card${isModal ? ' custom-scrollbar' : ''}`}
        style={{
          position: 'absolute',
          zIndex: 50,
          width: isModal ? '92%' : 380,
          maxWidth: 380,
          maxHeight: isModal ? '90%' : 'auto',
          overflowY: isModal ? 'auto' : 'visible',
          background: '#FFFFFF',
          borderRadius: 24,
          padding: isModal ? '32px 24px' : '40px 32px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
          opacity: 1,
          border: 'none',
          outline: 'none',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          ...(isModal
            ? {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              transform: 'translate(-50%, -50%)',
            }
            : style),
        }}
      >
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close"
            className="oic-close-btn"
            style={{
              position: 'absolute',
              top: isModal ? 16 : 16,
              right: isModal ? 16 : 16,
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <FiX size={16} color="#000" />
          </button>
        )}

        <h2
          className="oic-title"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: isModal ? 22 : 28,
            color: '#004CA5',
            margin: 0,
            marginBottom: 24,
            paddingRight: 24, // prevent overlap with close button
          }}
        >
          {officeName}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {address && address.length > 0 && (
            <InfoRow icon={FiMapPin} color="#004CA5">
              {address.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < address.length - 1 && <br />}
                </span>
              ))}
            </InfoRow>
          )}

          {phone && (
            <InfoRow icon={FiPhone} color="#004CA5">
              {phone}
            </InfoRow>
          )}

          {email && (
            <InfoRow icon={FiMail} color="#004CA5">
              {email}
            </InfoRow>
          )}

          {hours && (
            <InfoRow icon={FiClock} color="#004CA5">
              {hours}
            </InfoRow>
          )}
        </div>

        {aboutText && (
          <>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: '#1B1C1C',
                margin: 0,
                marginTop: 20,
                marginBottom: 12,
              }}
            >
              About this Office
            </h3>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: '#424752',
                margin: 0,
                marginBottom: 24,
                fontFamily: "'Inter', sans-serif",
                wordBreak: 'break-word',
              }}
            >
              {aboutText}
            </p>
          </>
        )}

        <button
          onClick={handleGetDirections}
          className="oic-directions-btn"
          style={{
            width: '100%',
            padding: isModal ? 14 : 16,
            borderRadius: 9999,
            background: '#004CA5',
            color: '#FFFFFF',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 16,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#003b82')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#004CA5')}
        >
          <FiCompass size={18} color="#FFF" />
          Get Directions
        </button>
      </div>
    </>
  );
}

function InfoRow({ icon: Icon, color, children }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        marginBottom: 16,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ flexShrink: 0, marginTop: 2 }}>
        <Icon size={18} color={color} />
      </div>
      <span
        className="oic-info-text"
        style={{
          fontSize: 16,
          lineHeight: 1.5,
          color: '#1B1C1C',
          fontFamily: "'Inter', sans-serif",
          wordBreak: 'break-word',
          minWidth: 0,
        }}
      >
        {children}
      </span>
    </div>
  );
}
