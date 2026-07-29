import { useEffect, useRef, useState } from 'react';
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
  badgeText: 'Find Jobs That Match Your Skills',
  titleLine1: 'Connecting Talent with Opportunity',
  description: 'Find your ideal role, upload your CV, and connect with leading employers across multiple industries.',
  leftTopImage: '/images/employee/girl-employee.png',
  leftBottomImage: '/images/employee/man-employee.png',
  rightImage: '/images/employee/office-girl.png',
};

export default function HeroSection() {
  const containerRef = useRef(null);
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  // ── Scale animation (unchanged from original) ───────────────────────────
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      const wrapper = container.parentElement;
      if (!wrapper) return;
      if (window.innerWidth < 768) {
        container.style.transform = '';
        container.style.marginBottom = '';
        return;
      }
      const wrapperWidth = wrapper.clientWidth;
      const scale = Math.min(1, wrapperWidth / 1440);
      if (scale < 1) {
        container.style.transform = `scale(${scale})`;
        container.style.marginBottom = `${-520 * (1 - scale)}px`;
      } else {
        container.style.transform = '';
        container.style.marginBottom = '';
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

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
  const badgeText   = hero?.badgeText   || FALLBACKS.badgeText;
  const titleLine1  = hero?.titleLine1  || FALLBACKS.titleLine1;
  const description = hero?.description || FALLBACKS.description;

  // Images: if backend provides a URL use it, otherwise fall back to the original static paths
  const img1 = hero?.leftTopImage    ? getImageUrl(hero.leftTopImage)    : FALLBACKS.leftTopImage;
  const img2 = hero?.leftBottomImage ? getImageUrl(hero.leftBottomImage) : FALLBACKS.leftBottomImage;
  const img3 = hero?.rightImage      ? getImageUrl(hero.rightImage)      : FALLBACKS.rightImage;

  return (
    <section className="hero-wrapper">
      <div className="hero-scroll-wrap">
        <div className="hero-container" ref={containerRef}>

          {/* Dashed Brackets (L-shaped, behind hexagons) */}
          <div className="dash-bracket-left"></div>
          <div className="dash-bracket-right"></div>

          {/* Left-Top Hexagon Cluster (small, woman) */}
          <div className="hex-bg-1"></div>
          <img src={img1} alt="" className="hero-img-1" loading="lazy" />

          {/* Center-Left Hexagon Cluster (large, man) */}
          <div className="hex-bg-2"></div>
          <img src={img2} alt="" className="hero-img-2" loading="lazy" />

          {/* Right Hexagon Cluster (large, woman) */}
          <div className="hex-bg-3"></div>
          <img src={img3} alt="" className="hero-img-3" loading="lazy" />

          {/* Solid Green Hexagon Dots (left) */}
          <div className="hex-dot hex-dot-1"></div>
          <div className="hex-dot hex-dot-2"></div>

          {/* Gradient Hexagon Dots (bottom-right) */}
          <div className="hex-dot-gradient hex-dot-gradient-1"></div>
          <div className="hex-dot-gradient hex-dot-gradient-2"></div>

          {/* Center Text Content */}
          <div className="hero-eyebrow">
            {/* backend field: badgeText */}
            {badgeText}
          </div>

          <div className="hero-heading-wrap">
            <h1 className="hero-heading">
              {/* backend field: titleLine1 */}
              {titleLine1}
            </h1>
          </div>

          <p className="hero-subtext">
            {/* backend field: description */}
            {description}
          </p>

        </div>
      </div>
    </section>
  );
}
