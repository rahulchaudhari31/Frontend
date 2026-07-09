import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './TestimonialsCarousel.css';

/**
 * TestimonialsCarousel
 * - Infinite seamless marquee scroll right-to-left
 * - Duplicates items internally for continuous loop
 * - Desktop: pauses on hover, resumes on leave
 * - Mobile (<768px): single tap to stop, single tap to play
 * - Speed configurable via `speed` prop (seconds for one full cycle)
 */
export default function TestimonialsCarousel({ data = [], speed = 30 }) {
  // Duplicate items so the scroll can loop seamlessly
  // When translateX(-50%) is reached, the visual matches the start
  const duplicated = [...data, ...data];
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);
  const toggle = useCallback(() => setPaused((p) => !p), []);

  const handlers = isMobile
    ? { onClick: toggle }
    : { onMouseEnter: pause, onMouseLeave: resume };

  return (
    <div
      ref={carRef}
      className={`testimonials-carousel${paused ? ' paused' : ''}${isMobile ? ' is-mobile' : ''}`}
      style={{ '--scroll-speed': `${speed}s` }}
      {...handlers}
    >
      <div className="testimonials-track">
        {duplicated.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.12, boxShadow: '0 24px 56px rgba(0,0,0,0.18)' }}
            className="bg-white shrink-0 flex flex-col items-center testimonials-card"
            style={{
              width: 'min(85vw, 530px)',
              minHeight: '388px',
              borderRadius: '12px',
              padding: '0px',
            }}
          >
            <div
              className="flex flex-col items-center testimonials-card-inner"
              style={{ width: 'min(75vw, 400px)', gap: '30px', paddingTop: '55px' }}
            >
              <div className="flex flex-col testimonials-card-text" style={{ width: 'min(70vw, 368px)', gap: '30px' }}>
                <h3
                  className="font-[Poppins] font-medium text-black m-0 testimonials-card-title"
                  style={{ fontSize: '20px', lineHeight: '30px', letterSpacing: '0%' }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-[Inter] text-black m-0 testimonials-card-quote"
                  style={{
                    width: 'min(68vw, 362px)',
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                  }}
                >
                  {item.quote}
                </p>
              </div>
              <div
                className="testimonials-card-divider"
                style={{
                  width: 'min(75vw, 400px)',
                  borderTop: '1px solid rgba(0,0,0,0.25)',
                  transform: 'rotate(0.27deg)',
                }}
              />
              <img
                src={item.logo}
                alt={item.alt}
                className="h-auto object-contain"
                style={{ width: '128.65px', maxHeight: '45.95px' }}
                loading="lazy"
              />
            </div>
            </motion.div>
          ))}
        </div>
      </div>
  );
}
