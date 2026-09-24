import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { getTestimonials } from '../services/workforceSolution/workforceTestimonialsService';

import hrDirector from '../assets/icons of field/hr drector.jpg';
import talentManager from '../assets/icons of field/talent manager.jpg';
import hrManager from '../assets/icons of field/hr manager.jpg';

const fallbackIcons = [hrDirector, talentManager, hrManager];

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const TestimonialCard = ({ testimonial, index, isCenter, isVisible }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isVisible ? 1 : 0.4, scale: isCenter ? 1 : 0.85 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="flex-shrink-0"
      style={{
        width: 'clamp(280px, 90vw, 420px)',
      }}
    >
      <motion.div
        whileHover={isCenter ? { y: -8, boxShadow: '0 20px 48px rgba(0,0,0,0.15)' } : {}}
        className={`border rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
          isCenter
            ? 'border-gray-200 bg-white shadow-lg'
            : 'border-gray-100 bg-white shadow-md opacity-75'
        }`}
      >
        {/* Testimonial Title */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="font-heading font-bold text-primary text-lg leading-tight">
              {testimonial.title || ''}
            </p>
          </div>
        </div>

        {/* Testimonial Description */}
        <p className="text-text-body text-base leading-relaxed flex-1 font-normal">
          {testimonial.reviewText || testimonial.description || ''}
        </p>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Reviewer Info */}
        <div className="flex items-center gap-4 pt-2">
          <img
            src={fallbackIcons[index % fallbackIcons.length]}
            alt={testimonial.reviewerName}
            className="w-14 h-14 rounded-full object-cover flex-shrink-0 border border-gray-100"
          />
          <div className="flex-1 min-w-0">
            <p className="font-heading font-semibold text-primary text-sm leading-tight">
              {testimonial.reviewerName}
            </p>
            <p className="text-text-body text-xs mt-1 leading-tight">
              {testimonial.reviewerDesignation}
              {testimonial.reviewerCompany && ` at ${testimonial.reviewerCompany}`}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [testimonialsData, setTestimonialsData] = useState({ section: null, cards: [] });
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(null);
  const autoPlayInterval = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonials();
        if (response.success && response.data) {
          setTestimonialsData(response.data);
        }
      } catch (error) {
        if (error?.response?.status !== 404) {
          console.error("Failed to fetch testimonials:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const sectionTitle = testimonialsData.section?.sectionTitle || "Trusted by Businesses Worldwide";
  const cards = testimonialsData.cards || [];

  // Auto-play carousel
  useEffect(() => {
    if (loading || cards.length === 0) return;

    const startAutoPlay = () => {
      autoPlayInterval.current = setInterval(() => {
        setDirection(1);
        setActive((prev) => (prev + 1) % cards.length);
      }, 6000); // Auto-advance every 6 seconds
    };

    const stopAutoPlay = () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };

    startAutoPlay();

    return stopAutoPlay;
  }, [loading, cards.length]);

  const handlePrevious = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + cards.length) % cards.length);
    // Reset auto-play
    if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
  };

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % cards.length);
    // Reset auto-play
    if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
    touchStartX.current = null;
  };

  if (loading) {
    return (
      <section id="testimonials" className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (cards.length === 0) {
    return null;
  }

  const getPrevious = (active - 1 + cards.length) % cards.length;
  const getNext = (active + 1) % cards.length;

  return (
    <section id="testimonials" className="bg-white py-16 md:py-20 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary">
            {sectionTitle}
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Card (Hidden on Mobile) */}
          <div className="hidden lg:block absolute left-0 w-1/4 pointer-events-none">
            <TestimonialCard
              testimonial={cards[getPrevious]}
              index={getPrevious}
              isCenter={false}
              isVisible={true}
            />
          </div>

          {/* Center Active Card */}
          <div className="w-full px-4 md:px-8 lg:w-1/2 z-10">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={active}
                testimonial={cards[active]}
                index={active}
                isCenter={true}
                isVisible={true}
              />
            </AnimatePresence>
          </div>

          {/* Next Card (Hidden on Mobile) */}
          <div className="hidden lg:block absolute right-0 w-1/4 pointer-events-none">
            <TestimonialCard
              testimonial={cards[getNext]}
              index={getNext}
              isCenter={false}
              isVisible={true}
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="p-3 rounded-full border border-gray-300 text-primary hover:bg-gray-50 hover:border-primary transition-all duration-200 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
            {cards.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={active === i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  setDirection(i > active ? 1 : -1);
                  setActive(i);
                  if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
                }}
                className={`rounded-full transition-all duration-300 ${
                  active === i
                    ? 'bg-primary w-3 h-3'
                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-gray-300 text-primary hover:bg-gray-50 hover:border-primary transition-all duration-200 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mt-8 text-text-body text-sm">
          <span className="font-semibold text-primary">{active + 1}</span> / {cards.length}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #testimonials [class*="absolute"] {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

