import { FiBriefcase, FiTarget, FiSearch, FiClipboard, FiSettings, FiUsers } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  { icon: FiBriefcase, step: 'Step 1', title: 'Understand Your Business' },
  { icon: FiTarget,    step: 'Step 2', title: 'Identify Talent Requirements' },
  { icon: FiSearch,    step: 'Step 3', title: 'Source & Screen Candidates' },
  { icon: FiClipboard, step: 'Step 4', title: 'Interview & Assessment' },
  { icon: FiSettings,  step: 'Step 5', title: 'Placement & Onboarding' },
  { icon: FiUsers,     step: 'Step 6', title: 'Ongoing Support' },
];

const delayClass = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', 'reveal-delay-5'];

export default function HowWeWork() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [stepsRef, stepsVisible] = useScrollReveal();

  return (
    <section id="how-we-work" className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div
          ref={headerRef}
          className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Our Proven Process</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">How We Work</h2>
        </div>

        <div ref={stepsRef} className="relative">
          {/* Dashed connector — desktop only */}
          <div className="hidden lg:block absolute top-[22px] left-[calc(100%/12)] right-[calc(100%/12)]
                          border-t-2 border-dashed border-accent opacity-40 z-0" aria-hidden="true" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
            {steps.map(({ icon: Icon, step, title }, i) => (
              <div
                key={step}
                className={`relative z-10 flex flex-col items-center text-center gap-3
                            reveal ${delayClass[i]} ${stepsVisible ? 'visible' : ''}`}
              >
                <span className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-card
                                 hover:bg-primary-dark transition-colors duration-200">
                  <Icon size={18} className="text-white" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-text-body text-xs font-medium">{step}</span>
                  <span className="font-heading font-semibold text-sm text-primary leading-snug">{title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
