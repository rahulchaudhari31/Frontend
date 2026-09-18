import { useEffect, useState } from 'react';
import './HeroSection.css';
import { getEmployeeHero } from '../../services/employee/employeeHeroService';

// Convert relative image paths to absolute URLs
const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

// Static fallback values (shown while loading or on error)
const FALLBACKS = {
  badgeText: 'FIND JOBS THAT MATCH YOUR SKILLS',
  titleLine1: 'Find Opportunities that Your Talent Deserves',
  description: 'Based in Birmingham and serving the West Midlands, e2e HRC is a specialised recruitment consultancy that connects you with employers who are actively recruiting across key industries. You could be the next find that helps them build a stronger team. If you are already working in the UK, searching for UK jobs from overseas, or looking to recruit skilled professionals, our team can help you navigate the process.',
  leftTopImage: '/images/employee/hero-man-1.jpg',
  leftBottomImage: '/images/employee/hero-woman-2.jpg',
};

export default function HeroSection() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  // ── Fetch hero data ──────────────────────────────────────────────────────
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await getEmployeeHero();
        if (data) setHero(data);
      } catch (err) {
        console.error('[EmployeeHero] fetch error:', err);
        // On error: hero stays null → fallbacks are used
      } finally {
        setLoading(false);
      }
    };
    fetchHero();
  }, []);

  // Resolve field values — backend data takes priority, static fallbacks used while loading or if field is empty
  const badgeText = hero?.badgeText || FALLBACKS.badgeText;
  const titleLine1 = hero?.titleLine1 || FALLBACKS.titleLine1;
  const description = hero?.description || FALLBACKS.description;

  // Images: if backend provides a URL use it, otherwise fall back to the original static paths
  const img1 = hero?.leftTopImage ? getImageUrl(hero.leftTopImage) : FALLBACKS.leftTopImage;
  const img2 = hero?.leftBottomImage ? getImageUrl(hero.leftBottomImage) : FALLBACKS.leftBottomImage;

  return (
    <section className="hero-wrapper">
      <div className="hero-container">

        {/* ── Left Column: Employee Images & Decorative Elements ── */}
        <div className="hero-left">

          {/* Orange dashed corner bracket — behind all hexagons */}
          <div className="dash-bracket-left"></div>

          {/* Small hexagon — upper-left (man) */}
          <div className="hex-bg-1"></div>
          <img src={img1} alt="Employee" className="hero-img-1" loading="lazy" />

          {/* Large hexagon — lower-right (woman) */}
          <div className="hex-bg-2"></div>
          <img src={img2} alt="Employee" className="hero-img-2" loading="lazy" />

          {/* Lime-green decorative hex dots */}
          <div className="hex-dot hex-dot-1"></div>
          <div className="hex-dot hex-dot-2"></div>

        </div>

        {/* ── Right Column: Text Content ── */}
        <div className="flex flex-col space-y-6">

          {/* Eyebrow / Badge - blue uppercase label */}
          <div className="inline-flex">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
              {badgeText}
            </span>
          </div>

          {/* Main Heading - large, bold, dark navy */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {titleLine1}
          </h1>

          {/* Body paragraph - full description, naturally wrapping */}
          <p className="text-base lg:text-lg text-gray-700 leading-snug max-w-2xl">
            {description}
          </p>

        </div>
      </div>

      {/* Thin lime/yellow-green accent line at the bottom of the hero */}
      <div className="hero-bottom-line" aria-hidden="true"></div>
    </section>
  );
}
