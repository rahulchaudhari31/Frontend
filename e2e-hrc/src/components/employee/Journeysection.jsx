import { useEffect, useState } from 'react';
import { getEmployeeJourney } from '../../services/employee/employeeJourneyService';

// Static icon filenames — mapped by card order index (0-based).
// The backend cards have no icon field; the original UI used static paths keyed by position.
const STATIC_ICONS = [
  'register.png',
  'interview%20preparation.png',
  'cv%20review.png',
  'placement.png',
  'job%20matching.png',
  'career%20support.png',
];

// Fallback section text shown while loading or if the API returns nothing
const FALLBACK_SECTION = {
  badgeText: 'TRUSTED DIGITAL SOLUTIONS FOR YOUR BUSINESS',
  sectionTitle: 'Why choose Our Employee Journey Services?',
};

// Fallback cards — original static list preserved so UI never goes blank
const FALLBACK_CARDS = [
  { title: 'Register' },
  { title: 'Interview Preparation' },
  { title: 'CV Review' },
  { title: 'Placement' },
  { title: 'Job Matching' },
  { title: 'Career Support' },
];

export default function Journeysection() {
  const [section, setSection] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJourney = async () => {
      try {
        const data = await getEmployeeJourney();
        // Response shape: { section: { badgeText, sectionTitle }, cards: [{ title, order }] }
        if (data) {
          if (data.section) setSection(data.section);
          if (Array.isArray(data.cards) && data.cards.length > 0) setCards(data.cards);
        }
      } catch (err) {
        console.error('[EmployeeJourney] fetch error:', err);
        // On error: section/cards stay null/[] → fallbacks used below
      } finally {
        setLoading(false);
      }
    };
    fetchJourney();
  }, []);

  // Resolve display values — API data takes priority, fallbacks used while loading or on error
  const badgeText    = section?.badgeText    || FALLBACK_SECTION.badgeText;
  const sectionTitle = section?.sectionTitle || FALLBACK_SECTION.sectionTitle;
  const displayCards = cards.length > 0 ? cards : FALLBACK_CARDS;

  return (
    <section className="emp-journey" style={{ background: 'linear-gradient(135deg, #E6BA67 0%, #EAD47A 14.28%, #C9C456 28.57%, #DDCA6A 42.85%, #AEBD54 57.14%, #D0D66B 71.42%, #D5DE80 85.71%, #95B755 100%)' }}>
      <div className="emp-journey-inner mx-auto flex flex-col items-center" style={{ maxWidth: '1220px', height: '566px', padding: '0px 15px', gap: '20px' }}>
        <div className="emp-journey-header flex flex-col items-center" style={{ width: '100%', height: '160px', padding: '20px 0px 0px' }}>
          <p className="font-['DM_Sans'] font-medium text-[17px] leading-[30px] text-center tracking-[1px] uppercase text-[#7A777E] m-0" style={{ width: '446px' }}>
            {/* backend field: section.badgeText */}
            {badgeText}
          </p>
          <h2 className="font-['DM_Sans'] font-semibold text-center text-[#2B2B2F] m-0" style={{ fontSize: '45.008px', lineHeight: '50px', letterSpacing: '-1px', padding: '0px 0px 1px', width: '682px' }}>
            {/* backend field: section.sectionTitle */}
            {sectionTitle}
          </h2>
        </div>

        <div className="emp-journey-grid grid grid-cols-1 md:grid-cols-2" style={{ width: '100%' }}>
          {displayCards.map((item, i) => {
            // Use the static icon that matches this card's position index.
            // Clamp to available icons so extra cards degrade gracefully.
            const iconFile = STATIC_ICONS[i] || STATIC_ICONS[STATIC_ICONS.length - 1];
            return (
              <div
                key={item._id || item.title || i}
                className="emp-journey-item flex items-center"
                style={{ borderTop: '0.8px solid #E4E4E4', borderBottom: '0.8px solid #FFFFFF', minHeight: '100.8px' }}
              >
                <div className="emp-journey-icon flex items-center justify-center shrink-0" style={{ width: '136px', height: '100px' }}>
                  <img
                    src={`/images/employee/journey-services/${iconFile}`}
                    alt={item.title}
                    className="w-[47px] h-[47px] object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="emp-journey-content flex items-center" style={{ borderLeft: '0.8px solid #E4E4E4', minHeight: '100px', padding: '30px 40px', width: '459px' }}>
                  <span className="font-['DM_Sans'] font-bold text-[18px] leading-[30px] text-[#2B2B2F]">
                    {/* backend field: card.title */}
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}