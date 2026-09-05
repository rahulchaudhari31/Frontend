import React, { useState, useEffect } from 'react';
import { FiUserPlus, FiClock, FiTarget, FiGlobe, FiShare2, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { getWorkforceSolutions } from '../services/workforceSolution/workforceSolutionsService';

const getImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

// Map backend icon string to react-icons if possible, or use a default
const iconMap = {
  FiUserPlus,
  FiClock,
  FiTarget,
  FiGlobe,
  FiShare2,
  FiMapPin,
  users: FiUserPlus,
  clock: FiClock,
  target: FiTarget,
  globe: FiGlobe,
  share: FiShare2,
  mappin: FiMapPin,
};

const SolutionCard = ({ solution }) => {
  const cardTitle = solution.cardTitle || solution.title;
  const cardDescription = solution.cardDescription || solution.description || solution.desc;
  const Icon = iconMap[solution.icon] || FiCheckCircle;
  const hasImage = !!solution.image;

  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descRef = React.useRef(null);

  useEffect(() => {
    if (descRef.current) {
      // Check if the content is overflowing
      if (descRef.current.scrollHeight > descRef.current.clientHeight) {
        setShowReadMore(true);
      } else {
        setShowReadMore(false);
      }
    }
  }, [cardDescription]);

  return (
    <div
      className="bg-white rounded-xl shadow-card p-6 flex flex-col gap-4
                 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-[340px]"
    >
      {hasImage ? (
        <div className="w-11 h-11 rounded-full shrink-0 overflow-hidden bg-gray-100 flex items-center justify-center">
          <img src={getImageUrl(solution.image)} alt={cardTitle || "Solution Image"} className="w-full h-full object-cover" />
        </div>
      ) : (
        <span className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0">
          <Icon size={18} className="text-white" aria-hidden="true" />
        </span>
      )}

      <div className="flex flex-col gap-2 flex-grow overflow-hidden">
        <h3 className="font-heading font-semibold text-lg text-primary leading-snug shrink-0">
          {cardTitle}
        </h3>

        <div
          ref={descRef}
          className={`text-text-body text-sm leading-relaxed pr-2 ${isExpanded ? 'overflow-y-auto' : 'overflow-hidden'}`}
          style={{ flexGrow: 1, minHeight: 0 }}
        >
          {cardDescription}
        </div>

        {showReadMore && (
          <div className="mt-2 shrink-0">
            <button
              onClick={(e) => { e.preventDefault(); setIsExpanded(!isExpanded); }}
              className="text-primary font-semibold text-sm hover:underline focus:outline-none"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        )}

        {solution.buttonText && !showReadMore && (
          <div className="mt-2 shrink-0">
            <a href={solution.buttonLink || "#"} className="text-primary font-semibold text-sm hover:underline inline-block">
              {solution.buttonText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default function WorkforceSolutions() {
  const [sectionData, setSectionData] = useState(null);
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchSolutions = async () => {
      try {
        const responseData = await getWorkforceSolutions();
        if (isMounted && responseData) {
          if (responseData.section) {
            setSectionData(responseData.section);
          }
          const cards = Array.isArray(responseData.cards)
            ? responseData.cards
            : Array.isArray(responseData)
              ? responseData
              : [];
          setSolutions(cards);
        }
      } catch (err) {
        console.error("Error loading workforce solutions:", err);
        setError("Failed to load solutions.");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetchSolutions();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section id="solutions" className="bg-bg-section py-16 md:py-20 px-4 flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="solutions" className="bg-bg-section py-16 md:py-20 px-4 flex justify-center items-center min-h-[400px]">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  const badgeText = sectionData?.badgeText || "WHAT WE OFFER";
  const titleLine1 = sectionData?.titleLine1;
  const highlightedTitle = sectionData?.highlightedTitle;
  const sectionDescription = sectionData?.description;

  const activeSolutions = solutions
    .filter((s) => s.isActive !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section id="solutions" className="bg-bg-section py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
            {badgeText}
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
            {titleLine1 ? (
              <>
                {titleLine1}{" "}
                {highlightedTitle && (
                  <span className="text-accent">{highlightedTitle}</span>
                )}
              </>
            ) : (
              "Our Workforce Solutions"
            )}
          </h2>
          {sectionDescription && (
            <p className="text-text-body text-base max-w-2xl mx-auto mt-3">
              {sectionDescription}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSolutions.map((solution, index) => (
            <SolutionCard key={solution._id || index} solution={solution} />
          ))}
        </div>

      </div>
    </section>
  );
}

