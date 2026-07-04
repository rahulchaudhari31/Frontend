import { FiUserPlus, FiClock, FiTarget, FiGlobe, FiShare2, FiMapPin } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  { icon: FiUserPlus, title: 'Permanent Recruitment',          desc: 'Hire skilled professionals for long-term success with our tailored recruitment approach.' },
  { icon: FiClock,    title: 'Contract & Temporary Staffing',  desc: 'Flexible staffing solutions to meet short-term, seasonal, and project-based business needs.' },
  { icon: FiTarget,   title: 'Executive Search',               desc: 'We identify and attract senior leaders and specialists for critical business roles.' },
  { icon: FiGlobe,    title: 'International Recruitment',      desc: 'Access qualified talent from the UK, Europe, GCC, and Asia to support global growth.' },
  { icon: FiShare2,   title: 'Recruitment Process Outsourcing', desc: 'Streamline your hiring with dedicated recruitment support and scalable RPO solutions.' },
  { icon: FiMapPin,   title: 'Workforce Consultancy',          desc: 'Expert advice on workforce planning, hiring strategies, market insights and organisational growth.' },
];

const delayClass = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', 'reveal-delay-5'];

export default function Solutions() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section id="solutions" className="bg-bg-section py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div
          ref={headerRef}
          className={`text-center mb-12 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Our Workforce Solutions</h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`bg-white rounded-xl shadow-card p-6 flex flex-col gap-4
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-200
                         reveal ${delayClass[i]} ${gridVisible ? 'visible' : ''}`}
            >
              <span className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Icon size={18} className="text-white" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-semibold text-lg text-primary leading-snug">{title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
