import { useEffect, useState } from 'react';
import { getEmployeeWhyChoose } from '../../services/employee/employeeWhyChooseService';

// ─── Image URL helper ────────────────────────────────────────────────────────
const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

// ─── Static fallbacks (original hardcoded values) ────────────────────────────
// Used while loading or when the API has no content yet, so the UI is never blank.
const FALLBACK_SECTION = {
  badgeText: 'WHY CHOOSE E2E HRC',
  sectionTitle: 'What makes us different',
};

const FALLBACK_CARDS = [
  {
    eyebrowText: 'CAREER FIRST, ALWAYS',
    title: 'Candidate-Centric Approach',
    description: "We view your career journey as more than just a job search. Every candidate is a professional with unique goals; every role is an opportunity for growth. We partner with you to find a culture where you can thrive.",
    image: '/images/employee/client2.png',
    stat1Value: '500+',
    stat1Label: 'ACTIVE CLIENTS',
    stat2Value: '98%',
    stat2Label: 'SATISFACTION RATE',
  },
  {
    eyebrowText: 'YOUR GROWTH, OUR GOAL',
    title: 'A Career That Moves You',
    description: "Our success is defined by yours. We don't just place you in a role; we ensure it's the right fit for your long-term career trajectory. From CV polishing to interview prep, we are invested in your professional advancement.",
    image: '/images/employee/client1.jpg',
    stat1Value: '10K+',
    stat1Label: 'PLACEMENTS MADE',
    stat2Value: '25+',
    stat2Label: 'INDUSTRIES SERVED',
  },
];

// ─── Even-index card: image LEFT, text panel RIGHT (orange accents) ──────────
function CardEven({ card, isExpanded, onToggle, cardKey }) {
  const imgSrc = card.image ? getImageUrl(card.image) : '';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      {/* Image column */}
      <div>
        {imgSrc && (
          <img
            src={imgSrc}
            alt={card.title}
            className="w-full h-[250px] lg:h-[420px] object-cover rounded-[16px]"
            loading="lazy"
          />
        )}
      </div>

      {/* Text panel */}
      <div className="bg-[#F8FAFC] rounded-[16px] p-8 sm:p-14 flex flex-col justify-center">
        {card.eyebrowText && (
          <p className="font-[Poppins] text-base uppercase tracking-[1.6px] text-[#F39308] mb-2">
            {/* backend field: eyebrowText */}
            {card.eyebrowText}
          </p>
        )}
        <h3 className="font-[Poppins] font-bold text-[26px] sm:text-[36px] text-[#00264B] mb-4 leading-tight">
          {/* backend field: title */}
          {card.title}
        </h3>

        <div
  className="description-scroll-container"
  style={{
    height: '104px',
    maxHeight: '104px',
    overflowY: isExpanded ? 'scroll' : 'hidden',
    overflowX: 'hidden',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    marginBottom: '18px',
    display: 'block',
    flexShrink: 0,
  }}
>
  <p
    className="font-[Inter] text-base text-[#43474F] leading-relaxed m-0"
    style={{
      margin: 0,
      padding: 0,
    }}
  >
    {card.description}
  </p>
</div>

        <button
          type="button"
          onClick={() => onToggle(cardKey)}
          className="font-[Inter] text-sm font-semibold text-[#004CA5] bg-transparent border-0 p-0 text-left cursor-pointer"
          style={{
            width: 'fit-content',
            lineHeight: '20px',
            outline: 'none',
          }}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>

        {/* Stats row — only rendered when values exist */}
        {(card.stat1Value || card.stat2Value) && (
          <div className="flex gap-6 sm:gap-12 mt-6">
            {card.stat1Value && (
              <div>
                <p className="font-['Hanken_Grotesk'] font-bold text-[24px] sm:text-[30px] text-[#F39308]">
                  {/* backend field: stat1Value */}
                  {card.stat1Value}
                </p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">
                  {/* backend field: stat1Label */}
                  {card.stat1Label}
                </p>
              </div>
            )}
            {card.stat2Value && (
              <div>
                <p className="font-['Hanken_Grotesk'] font-bold text-[24px] sm:text-[30px] text-[#F39308]">
                  {/* backend field: stat2Value */}
                  {card.stat2Value}
                </p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">
                  {/* backend field: stat2Label */}
                  {card.stat2Label}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Odd-index card: text panel LEFT (mirrored + blue accents + "R" watermark), image RIGHT ──
function CardOdd({ card, isExpanded, onToggle, cardKey }) {
  const imgSrc = card.image ? getImageUrl(card.image) : '';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Text panel — mirrored: order-2 on mobile, order-1 on desktop */}
      <div className="order-2 lg:order-1 bg-[#F8FAFC] rounded-[16px] p-8 sm:p-14 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative watermark letter — first char of title, matches original "R" for "A Career..." */}
        <span
          className="absolute font-[Poppins] font-extrabold text-[233px] text-[#F39308] opacity-5 leading-none pointer-events-none"
          style={{ bottom: '-20px', right: '-20px' }}
        >
          {card.title ? card.title.charAt(0) : 'R'}
        </span>

        {card.eyebrowText && (
          <p className="font-[Poppins] text-base uppercase tracking-[1.6px] text-[#004CA5] mb-2">
            {/* backend field: eyebrowText */}
            {card.eyebrowText}
          </p>
        )}
        <h3 className="font-[Poppins] font-bold text-[26px] sm:text-[36px] text-[#00264B] mb-4 leading-tight">
          {/* backend field: title */}
          {card.title}
        </h3>

        <div
          className="description-scroll-container"
          style={{
            height: '104px',
            overflowY: isExpanded ? 'auto' : 'hidden',
            overflowX: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            marginBottom: '18px',
            display: 'block',
          }}
        >
          <p className="font-[Inter] text-base text-[#43474F] leading-relaxed m-0">
            {/* backend field: description */}
            {card.description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onToggle(cardKey)}
          className="font-[Inter] text-sm font-semibold text-[#004CA5] bg-transparent border-0 p-0 text-left cursor-pointer"
          style={{
            width: 'fit-content',
            lineHeight: '20px',
            outline: 'none',
          }}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>

        {/* Stats row — only rendered when values exist */}
        {(card.stat1Value || card.stat2Value) && (
          <div className="flex gap-6 sm:gap-12 mt-6">
            {card.stat1Value && (
              <div>
                <p className="font-[Poppins] font-bold text-[24px] sm:text-[30px] text-[#004CA5]">
                  {/* backend field: stat1Value */}
                  {card.stat1Value}
                </p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">
                  {/* backend field: stat1Label */}
                  {card.stat1Label}
                </p>
              </div>
            )}
            {card.stat2Value && (
              <div>
                <p className="font-[Poppins] font-bold text-[24px] sm:text-[30px] text-[#004CA5]">
                  {/* backend field: stat2Value */}
                  {card.stat2Value}
                </p>
                <p className="font-[Inter] text-xs uppercase text-[#43474F] mt-0.5">
                  {/* backend field: stat2Label */}
                  {card.stat2Label}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Image column — order-1 on mobile, order-2 on desktop */}
      <div className="order-1 lg:order-2">
        {imgSrc && (
          <img
            src={imgSrc}
            alt={card.title}
            className="w-full h-[250px] lg:h-[420px] object-cover rounded-[16px]"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function WhyChooseE2E() {
  const [section, setSection] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmployeeWhyChoose();
        if (data) {
          if (data.section) setSection(data.section);
          if (Array.isArray(data.cards) && data.cards.length > 0) setCards(data.cards);
        }
      } catch (err) {
        console.error('[WhyChooseE2E] fetch error:', err);
        // On error: section/cards stay null/[] → fallbacks used below
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleExpanded = (cardKey) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey],
    }));
  };

  // Resolve display values — API data takes priority, fallbacks used while loading / on error
  const badgeText    = section?.badgeText    || FALLBACK_SECTION.badgeText;
  const sectionTitle = section?.sectionTitle || FALLBACK_SECTION.sectionTitle;
  const displayCards = cards.length > 0 ? cards : FALLBACK_CARDS;

  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      style={{ background: 'url(/images/employee/background.jpg) center/cover no-repeat' }}
    >
      <style>{`
        .description-scroll-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .description-scroll-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Section badge */}
        <p
          className="text-center font-[Poppins] text-base uppercase tracking-[1.6px] mb-2"
          style={{
            background: 'linear-gradient(49.52deg, #1295D4 -4.12%, #7EC443 85.04%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {/* backend field: section.badgeText */}
          {badgeText}
        </p>

        {/* Section heading */}
        <h2 className="text-center font-[Poppins] font-bold text-[26px] sm:text-[36px] text-[#00264B] mb-8 sm:mb-12 md:mb-[60px]">
          {/* backend field: section.sectionTitle */}
          {sectionTitle}
        </h2>

        {/* Feature cards — rendered dynamically from backend, alternating layout by index */}
        {displayCards.map((card, i) => {
          const cardKey = card._id || i;
          return i % 2 === 0 ? (
            <CardEven key={cardKey} card={card} cardKey={cardKey} isExpanded={!!expandedCards[cardKey]} onToggle={toggleExpanded} />
          ) : (
            <CardOdd key={cardKey} card={card} cardKey={cardKey} isExpanded={!!expandedCards[cardKey]} onToggle={toggleExpanded} />
          );
        })}
      </div>
    </section>
  );
}