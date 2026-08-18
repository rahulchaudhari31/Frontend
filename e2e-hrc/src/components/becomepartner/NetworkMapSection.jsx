import { useState, useRef, useEffect, useCallback } from 'react';

import OfficeInfoCard from '../OfficeInfoCard';
import { getActiveLocations } from '../../services/becomePartner/locationService';

import mapBg from '../../assets/background coonecting reqrirment/Connecting Recruitment Partners background.png';

// ─── Animated Stat Component ────────────────────────────────────────────────
function AnimatedStat({ value, label, animationKey }) {
  const [displayValue, setDisplayValue] = useState('0');
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Extract numeric value and suffix from the string
    const parseValue = (val) => {
      if (!val || typeof val !== 'string') return { num: 0, suffix: '', original: val };

      const original = val.trim();
      
      // Check if it's a non-numeric value (like "Global", "Available")
      if (!/\d/.test(original)) {
        return { num: 0, suffix: '', original, isNonNumeric: true };
      }

      // Extract numeric part and suffix
      const match = original.match(/^([\d,.]+)([^0-9]*)$/);
      if (!match) return { num: 0, suffix: '', original };

      const numStr = match[1].replace(/,/g, ''); // Remove commas for parsing
      const suffix = match[2]; // Preserve suffix (+, k, %, etc.)
      const num = parseFloat(numStr);

      return { num: isNaN(num) ? 0 : num, suffix, original };
    };

    // Format a number with k, M suffixes where applicable
    const formatNumber = (num, originalSuffix, originalValue) => {
      // If original value is non-numeric, return as-is
      if (!originalValue || !/\d/.test(originalValue.toString())) {
        return originalValue;
      }

      // Check if original had 'k' - if so, format current num with k
      if (originalSuffix && (originalSuffix.includes('k') || originalSuffix.includes('K'))) {
        const divisor = 1000;
        if (num >= divisor) {
          return Math.floor(num / divisor) + originalSuffix;
        }
        return Math.floor(num) + originalSuffix;
      }

      // Check if original had 'm' or 'M'
      if (originalSuffix && (originalSuffix.includes('m') || originalSuffix.includes('M'))) {
        const divisor = 1000000;
        if (num >= divisor) {
          return Math.floor(num / divisor) + originalSuffix;
        }
        return Math.floor(num) + originalSuffix;
      }

      // For regular numbers with suffix like +, %, just return floor + suffix
      return Math.floor(num) + originalSuffix;
    };

    const parsed = parseValue(value);

    // If non-numeric, just display as-is without animation
    if (parsed.isNonNumeric) {
      setDisplayValue(parsed.original);
      return;
    }

    // Animation duration in ms
    const duration = 1200;
    const startTime = Date.now();
    const startValue = 0;
    const endValue = parsed.num;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * easeOut;

      const formatted = formatNumber(current, parsed.suffix, value);
      setDisplayValue(formatted);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [value, animationKey]); // Re-trigger animation when value or key changes

  return displayValue;
}

// ─── Static marker positions (map coordinates) ────────────────────────────
const markerPositions = {
  headOffice: {
    left: '45.01%',
    top: '30.06%',
    size: 'w-4 h-4',
    color: '#00458D',
    shadow: 'rgba(0,69,141,0.2)',
    focus: '#F39308',
    cardTop: -80,
  },
  regional: {
    1: {
      left: '57.99%',
      top: '45.01%',
      size: 'w-3 h-3',
      color: '#FFB952',
      shadow: 'rgba(255,185,82,0.2)',
      focus: '#004CA5',
      cardTop: -80,
    },
    2: {
      left: '50%',
      top: '35.05%',
      size: 'w-3 h-3',
      color: '#FFB952',
      shadow: 'rgba(255,185,82,0.2)',
      focus: '#004CA5',
      cardTop: -80,
    },
    3: {
      left: '64.97%',
      top: '50%',
      size: 'w-3 h-3',
      color: '#FFB952',
      shadow: 'rgba(255,185,82,0.2)',
      focus: '#004CA5',
      cardTop: -80,
    },
  },
};

export default function NetworkMapSection() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeOfficeCard, setActiveOfficeCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(0); // External animation trigger
  const cardTimers = useRef({});

  // ─── Fetch locations on mount ──────────────────────────────────────────
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setIsLoading(true);
        const data = await getActiveLocations();
        setLocations(Array.isArray(data) ? data : []);
        setHasError(false);

        // Set default selected location to head office
        const headOffice = data?.find((loc) => loc.type === 'headOffice');
        if (headOffice) {
          setSelectedLocation(headOffice);
        }
      } catch (error) {
        console.error('Failed to fetch locations:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocations();
  }, []);

  // ─── Mobile detection ──────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const makeHandleEnter = useCallback((id) => () => {
    if (cardTimers.current[id]) clearTimeout(cardTimers.current[id]);
    setActiveOfficeCard(id);
  }, []);

  const makeHandleLeave = useCallback((id) => () => {
    cardTimers.current[id] = setTimeout(() => setActiveOfficeCard(null), 250);
  }, []);

  const hideCard = useCallback(() => setActiveOfficeCard(null), []);

  // ─── Handle location selection (from click or hover) ────────────────────
  const handleSelectLocation = useCallback((location) => {
    setSelectedLocation(location);
    // Trigger animation on location change
    setAnimationTrigger((prev) => prev + 1);
  }, []);

  // ─── Handle yellow dot hover ─────────────────────────────────────────────
  const handleYellowDotHover = useCallback((location) => {
    if (!isMobile) { // Only on desktop, not on mobile
      handleSelectLocation(location);
    }
  }, [handleSelectLocation, isMobile]);

  // ─── Find locations by type and display order ──────────────────────────
  const headOffice = locations.find((loc) => loc.type === 'headOffice');
  const regionalLocations = locations
    .filter((loc) => loc.type === 'regional')
    .sort((a, b) => a.displayOrder - b.displayOrder);

  // ─── Build markers array dynamically ────────────────────────────────────
  const markers = [];

  if (headOffice) {
    markers.push({
      id: headOffice._id,
      location: headOffice,
      label: headOffice.officeName,
      isRegional: false,
      ...markerPositions.headOffice,
    });
  }

  regionalLocations.forEach((location, index) => {
    const displayOrder = location.displayOrder || (index + 1);
    if (markerPositions.regional[displayOrder]) {
      markers.push({
        id: location._id,
        location: location,
        label: location.officeName,
        isRegional: true,
        ...markerPositions.regional[displayOrder],
      });
    }
  });

  // ─── Convert location data to OfficeInfoCard format ────────────────────
  const getOfficeCardData = (location) => {
    if (!location) return null;

    return {
      officeName: location.officeName || location.title || '',
      address: Array.isArray(location.address)
        ? location.address
        : location.address
        ? location.address.split(',').map((a) => a.trim())
        : [],
      phone: location.phone || '',
      email: location.email || '',
      hours: location.openingHours || '',
      aboutText: location.aboutDescription || '',
      directionsQuery: location.directionsQuery || '',
    };
  };

  // ─── Get selected location stats ───────────────────────────────────────
  const selectedStats = selectedLocation
    ? normalizeStats(selectedLocation.stats || selectedLocation.statsData)
    : [];

  // ─── Normalize stats from either 'stats' or 'statsData' field ──────────
  function normalizeStats(statsArray) {
    if (!Array.isArray(statsArray) || statsArray.length === 0) {
      return [];
    }
    return statsArray.slice(0, 4).map((s) => ({
      value: s?.value || '',
      label: s?.label || '',
    }));
  }

  return (
    <section className="bg-white py-10">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-16">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center max-w-[1072px]">
            <h2 className="font-['Hanken_Grotesk',sans-serif] font-bold text-[28px] leading-[34px] md:text-[48px] md:leading-[56px] tracking-[-0.56px] md:tracking-[-0.96px] text-[#004CA5] mb-4">
              Connecting Recruitment Partners Worldwide
            </h2>
            <p className="font-['Source_Sans_3',sans-serif] font-normal text-sm md:text-base leading-5 md:leading-6 text-[#424752] max-w-[672px] mx-auto">
              Our established global infrastructure enables seamless cross-border recruitment and market entry for our partners.
            </p>
          </div>

          <div className="relative w-full min-h-[385px] rounded-[24px] border border-[rgba(194,198,212,0.2)] bg-[#F2F4F6]">
            <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
              <img
                src={mapBg}
                alt="Our Recruitment Network Map"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: '0.3' }}
              />
            </div>

            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#004CA5] border-t-transparent animate-spin mb-3" />
                  <p className="text-sm text-[#424752]">Loading locations...</p>
                </div>
              </div>
            ) : hasError || locations.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-[#424752]">Unable to load location data. Please try again later.</p>
              </div>
            ) : (
              markers.map((m) => (
                <div key={m.id} className="absolute" style={{ left: m.left, top: m.top }}>
                  <button
                    tabIndex={0}
                    className={`relative ${m.size} rounded-full cursor-pointer hover:scale-125 transition-transform focus:outline-2 focus:outline-offset-2`}
                    style={{
                      background: m.color,
                      boxShadow: `0 0 0 4px ${m.shadow}`,
                      outlineColor: m.focus,
                    }}
                    aria-label={m.label}
                    onClick={() => handleSelectLocation(m.location)}
                    onMouseEnter={() => {
                      makeHandleEnter(m.id)();
                      // Trigger animation on hover for yellow dots only
                      if (m.isRegional) {
                        handleYellowDotHover(m.location);
                      }
                    }}
                    onMouseLeave={isMobile ? undefined : makeHandleLeave(m.id)}
                    onFocus={() => setActiveOfficeCard(m.id)}
                  >
                    <span className="sr-only">{m.label}</span>
                  </button>
                  <OfficeInfoCard
                    data={getOfficeCardData(m.location)}
                    isVisible={activeOfficeCard === m.id}
                    isModal={isMobile}
                    style={{ right: 'calc(100% + 12px)', top: m.cardTop, zIndex: 100 }}
                    onClose={hideCard}
                    onMouseEnter={isMobile ? undefined : makeHandleEnter(m.id)}
                    onMouseLeave={isMobile ? undefined : makeHandleLeave(m.id)}
                  />
                </div>
              ))
            )}
          </div>

          <div className="w-full max-w-[1072px] flex flex-wrap justify-center items-start gap-8">
            {selectedStats.map((stat, i) => (
              <div key={i} className="text-center" style={{ flex: '1 1 40%', maxWidth: '244px' }}>
                <p className="font-['Hanken_Grotesk'] font-bold text-[32px] leading-[38px] md:text-[48px] md:leading-[56px] tracking-[-0.64px] md:tracking-[-0.96px] text-[#004CA5]">
                  <AnimatedStat 
                    value={stat.value} 
                    label={stat.label}
                    animationKey={`${selectedLocation?._id}-${animationTrigger}`}
                  />
                </p>
                <p className="font-['Hanken_Grotesk'] font-normal text-base leading-6 text-[#424752]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
