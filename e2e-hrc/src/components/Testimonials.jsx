import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { getTestimonials } from '../services/workforceSolution/workforceTestimonialsService';

import hrDirector from '../assets/icons of field/hr drector.jpg';
import talentManager from '../assets/icons of field/talent manager.jpg';
import hrManager from '../assets/icons of field/hr manager.jpg';

const fallbackIcons = [hrDirector, talentManager, hrManager];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [testimonialsData, setTestimonialsData] = useState({ section: null, cards: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonials();
        console.log(response)
        if (response.success && response.data) {
          setTestimonialsData(response.data);
        }
      } catch (error) {
        // 404 means no active testimonial section has been created yet — silent, expected state.
        // Only log genuine server errors.
        if (error?.response?.status !== 404) {
          console.error("Failed to fetch testimonials:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const badgeText = testimonialsData.section?.badgeText || "What Our Clients Say";
  const sectionTitle = testimonialsData.section?.sectionTitle || "Trusted by Businesses Worldwide";
  const cards = testimonialsData.cards || [];

  return (
    <section id="testimonials" className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">{badgeText}</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">{sectionTitle}</h2>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {cards.map((testimonial, i) => (
                <motion.div
                  key={testimonial._id || i}
                  variants={cardVariants}
                  whileHover={{ scale: 1.08, boxShadow: '0 20px 48px rgba(0,0,0,0.15)' }}
                  className="border border-gray-100 rounded-xl p-6 flex flex-col gap-5 shadow-sm transition-colors duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-heading font-bold text-primary text-lg leading-none">{testimonial.companyName}</p>
                      <p className="text-text-body text-xs tracking-widest uppercase mt-1">{testimonial.companyCategory}</p>
                    </div>
                    <span className="text-7xl font-serif leading-none text-gray-100 select-none -mt-2" aria-hidden="true">"</span>
                  </div>

                  <p className="text-text-body text-sm leading-relaxed flex-1">"{testimonial.reviewText}"</p>

                  <div className="flex items-center gap-4 pt-6 border-t border-[rgba(195,198,212,0.2)]">
                    <img
                      src={fallbackIcons[i % fallbackIcons.length]}
                      alt={testimonial.reviewerName}
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <p className="font-heading font-semibold text-primary text-sm leading-none">{testimonial.reviewerName}</p>
                      <p className="text-text-body text-xs mt-1">{testimonial.reviewerDesignation} {testimonial.reviewerCompany ? `at ${testimonial.reviewerCompany}` : ''}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-10" role="tablist" aria-label="Testimonial navigation">
              {cards.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-200 ${active === i ? 'bg-accent w-6 h-3' : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}

