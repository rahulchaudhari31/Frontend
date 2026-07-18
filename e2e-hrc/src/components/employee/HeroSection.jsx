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

  return (
    <section className="hero-wrapper">
      <div className="hero-scroll-wrap">
        <div className="hero-container" ref={containerRef}>

          {/* Dashed Brackets (L-shaped, behind hexagons) */}
          <div className="dash-bracket-left"></div>
          <div className="dash-bracket-right"></div>

          {/* Images Group */}
          <div className="hero-images-group">
            <div className="hex-bg-1"></div>
            <img src="/images/employee/girl-employee.png" alt="" className="hero-img-1" loading="lazy" />

            <div className="hex-bg-2"></div>
            <img src="/images/employee/man-employee.png" alt="" className="hero-img-2" loading="lazy" />

            <div className="hex-bg-3"></div>
            <img src="/images/employee/office-girl.png" alt="" className="hero-img-3" loading="lazy" />
          </div>

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
