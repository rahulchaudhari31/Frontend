import './TestimonialsCarousel.css';

/**
 * TestimonialsCarousel
 * - Infinite seamless marquee scroll right-to-left
 * - Duplicates items internally for continuous loop
 * - Pauses on hover, resumes on unhover
 * - Speed configurable via `speed` prop (seconds for one full cycle)
 */
export default function TestimonialsCarousel({ data = [], speed = 30 }) {
  // Duplicate items so the scroll can loop seamlessly
  // When translateX(-50%) is reached, the visual matches the start
  const duplicated = [...data, ...data];

  return (
    <div
      className="testimonials-carousel"
      style={{ '--scroll-speed': `${speed}s` }}
    >
      <div className="testimonials-track">
        {duplicated.map((item, i) => (
          <div
            key={i}
            className="bg-white shrink-0 flex flex-col items-center"
            style={{
              width: '530px',
              minHeight: '388px',
              borderRadius: '12px',
              padding: '0px',
            }}
          >
            <div
              className="flex flex-col items-center"
              style={{ width: '400px', gap: '30px', paddingTop: '55px' }}
            >
              <div className="flex flex-col" style={{ width: '368px', gap: '30px' }}>
                <h3
                  className="font-[Poppins] font-medium text-black m-0"
                  style={{ fontSize: '20px', lineHeight: '30px', letterSpacing: '0%' }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-[Inter] text-black m-0"
                  style={{
                    width: '362px',
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                  }}
                >
                  {item.quote}
                </p>
              </div>
              <div
                style={{
                  width: '400px',
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
          </div>
        ))}
      </div>
    </div>
  );
}
