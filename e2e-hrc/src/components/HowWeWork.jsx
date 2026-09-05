import React, { useState, useEffect } from 'react';
import { FiBriefcase, FiTarget, FiSearch, FiClipboard, FiSettings, FiUsers } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getHowWeWork } from '../services/workforceSolution/workforceHowWeWorkService';

const DEFAULT_STEPS = [
  { icon: FiBriefcase, step: 'Step 1', title: 'Understand Your Business' },
  { icon: FiTarget,    step: 'Step 2', title: 'Identify Talent Requirements' },
  { icon: FiSearch,    step: 'Step 3', title: 'Source & Screen Candidates' },
  { icon: FiClipboard, step: 'Step 4', title: 'Interview & Assessment' },
  { icon: FiSettings,  step: 'Step 5', title: 'Placement & Onboarding' },
  { icon: FiUsers,     step: 'Step 6', title: 'Ongoing Support' },
];

const DEFAULT_ICONS = [FiBriefcase, FiTarget, FiSearch, FiClipboard, FiSettings, FiUsers];

const delayClass = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', 'reveal-delay-5'];

const HowWeWorkStepItem = ({ icon: Icon, step, title, description, i, stepsVisible }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDescription = description && description.trim().length > 0;

  return (
    <div
      className={`relative z-10 flex flex-col items-center text-center gap-3
                  reveal ${delayClass[i % delayClass.length]} ${stepsVisible ? 'visible' : ''}`}
    >
      <span className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-card
                       hover:bg-primary-dark transition-colors duration-200 shrink-0">
        <Icon size={18} className="text-white" aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-1 items-center w-full">
        <span className="text-text-body text-xs font-medium">{step}</span>
        <span 
          className={`font-heading font-semibold text-sm text-primary leading-snug ${hasDescription ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
          onClick={() => { if (hasDescription) setIsExpanded(!isExpanded); }}
          title={hasDescription ? "Click to expand/collapse description" : ""}
        >
          {title}
        </span>
        {hasDescription && isExpanded && (
          <div className="text-text-body text-xs leading-relaxed mt-1 text-center w-full">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default function HowWeWork() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [stepsRef, stepsVisible] = useScrollReveal();

  const [sectionData, setSectionData] = useState(null);
  const [stepsData, setStepsData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchHowWeWorkData = async () => {
      try {
        const responseData = await getHowWeWork();
        if (isMounted && responseData) {
          if (responseData.section) {
            setSectionData(responseData.section);
          }
          if (Array.isArray(responseData.steps)) {
            setStepsData(responseData.steps);
          } else if (Array.isArray(responseData)) {
            setStepsData(responseData);
          }
        }
      } catch (error) {
        console.error("Failed to fetch How We Work data:", error);
      }
    };

    fetchHowWeWorkData();
    return () => {
      isMounted = false;
    };
  }, []);

  const badgeText = sectionData?.badgeText || "Our Proven Process";
  const sectionTitle = sectionData?.sectionTitle || "How We Work";

  const displaySteps =
    Array.isArray(stepsData) && stepsData.length > 0
      ? stepsData
          .filter((s) => s.isActive !== false)
          .sort((a, b) => (a.order || 0) - (b.order || 0))
          .map((item, index) => ({
            icon: DEFAULT_ICONS[index % DEFAULT_ICONS.length] || FiBriefcase,
            step: item.stepNumber
              ? item.stepNumber.startsWith("Step")
                ? item.stepNumber
                : `Step ${item.stepNumber}`
              : `Step ${index + 1}`,
            title: item.title,
            description: item.description,
            id: item._id || index,
          }))
      : DEFAULT_STEPS.map((s, i) => ({ ...s, id: i }));

  return (
    <section id="how-we-work" className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div
          ref={headerRef}
          className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
            {badgeText}
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
            {sectionTitle}
          </h2>
        </div>

        <div ref={stepsRef} className="relative">
          {/* Dashed connector — desktop only */}
          <div className="hidden lg:block absolute top-[22px] left-[calc(100%/12)] right-[calc(100%/12)]
                          border-t-2 border-dashed border-accent opacity-40 z-0" aria-hidden="true" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
            {displaySteps.map(({ icon: Icon, step, title, description, id }, i) => (
              <HowWeWorkStepItem
                key={id || step}
                icon={Icon}
                step={step}
                title={title}
                description={description}
                i={i}
                stepsVisible={stepsVisible}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

