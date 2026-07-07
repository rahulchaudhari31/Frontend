import { useEffect, useRef } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      const wrapper = container.parentElement;
      if (!wrapper) return;
      const wrapperWidth = wrapper.clientWidth;
      const scale = Math.min(1, wrapperWidth / 1440);
      container.style.transform = scale < 1 ? `scale(${scale})` : '';
      container.style.height = scale < 1 ? `${520 * scale}px` : '520px';
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <section className="hero-wrapper">
      <div className="hero-scroll-wrap">
        <div className="hero-container" ref={containerRef}>

          {/* Dashed Brackets (L-shaped, behind hexagons) */}
          <div className="dash-bracket-left"></div>
          <div className="dash-bracket-right"></div>

          {/* Left-Top Hexagon Cluster (small, woman) */}
          <div className="hex-bg-1"></div>
          <img src="/images/employee/girl-employee.png" alt="" className="hero-img-1" loading="lazy" />

          {/* Center-Left Hexagon Cluster (large, man) */}
          <div className="hex-bg-2"></div>
          <img src="/images/employee/man-employee.png" alt="" className="hero-img-2" loading="lazy" />

          {/* Right Hexagon Cluster (large, woman) */}
          <div className="hex-bg-3"></div>
          <img src="/images/employee/office-girl.png" alt="" className="hero-img-3" loading="lazy" />

          {/* Solid Green Hexagon Dots (left) */}
          <div className="hex-dot hex-dot-1"></div>
          <div className="hex-dot hex-dot-2"></div>

          {/* Gradient Hexagon Dots (bottom-right) */}
          <div className="hex-dot-gradient hex-dot-gradient-1"></div>
          <div className="hex-dot-gradient hex-dot-gradient-2"></div>

          {/* Center Text Content */}
          <div className="hero-eyebrow">Find Jobs That Match Your Skills</div>

          <div className="hero-heading-wrap">
            <h1 className="hero-heading">Connecting Talent with Opportunity</h1>
          </div>

          <p className="hero-subtext">Find your ideal role, upload your CV, and connect with leading employers across multiple industries.</p>

        </div>
      </div>
    </section>
  );
}
