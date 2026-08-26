import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

function ConnectSection() {
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConnectSection = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/connect-section', {
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Connect section');
        }

        const data = await response.json();
        if (data?.success && data?.data) {
          setSection(data.data);
        } else {
          throw new Error(data?.message || 'Failed to load Connect section');
        }
      } catch (err) {
        console.error('Error loading Connect section:', err);
        setError(err.message);
        setSection(null);
      } finally {
        setLoading(false);
      }
    };

    fetchConnectSection();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-white py-12 lg:py-24">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center px-5 sm:px-8 lg:px-[92px] min-h-64">
          <div className="flex items-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
            <span className="text-gray-600">Loading Connect section...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error || !section) {
    return null;
  }

  const { title, highlightedText, backgroundImage } = section;

  return (
    <section
      className="w-full py-8 sm:py-12 lg:py-20 xl:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Title */}
          {title && (
            <p
              className="text-white mb-3 sm:mb-4 lg:mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(18px, 5vw, 48px)',
                lineHeight: '1.3',
                letterSpacing: '-0.5px',
              }}
            >
              {title}
            </p>
          )}

          {/* Highlighted Text */}
          {highlightedText && (
            <h2
              className="text-[#F39308]"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(28px, 7vw, 64px)',
                lineHeight: '1.2',
                letterSpacing: '-0.8px',
              }}
            >
              {highlightedText}
            </h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
