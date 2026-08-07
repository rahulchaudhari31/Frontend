const employerSteps = [
  { num: '01', title: 'Discovery', desc: 'We learn about your business, culture, and hiring needs.' },
  { num: '02', title: 'Requirement Planning', desc: 'We define role specs, timelines, and sourcing strategy.' },
  { num: '03', title: 'Candidate Search', desc: 'We tap into our network to find the best matches.' },
  { num: '04', title: 'Shortlisting', desc: 'We present pre-vetted candidates for your review.' },
  { num: '05', title: 'Interview Support', desc: 'We coordinate interviews and gather feedback.' },
  { num: '06', title: 'Successful Hire', desc: 'We support onboarding and ensure a smooth start.' },
];

const employeeSteps = [
  { num: '01', title: 'Register', desc: 'Create your profile and upload your CV to our platform.' },
  { num: '02', title: 'CV Review', desc: 'Our consultants review and refine your CV for maximum impact.' },
  { num: '03', title: 'Job Matching', desc: 'We match you with roles that fit your skills and career goals.' },
  { num: '04', title: 'Interview Preparation', desc: 'We coach you for interviews and salary negotiations.' },
  { num: '05', title: 'Placement', desc: 'We help you land the right role and support the offer process.' },
  { num: '06', title: 'Career Support', desc: 'Ongoing guidance to help you grow and advance your career.' },
];

export default function HowWeWork({ variant = 'employee' }) {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#F8FAFC]">
      <div className="mx-auto lg:w-[1393px] lg:max-w-[1440px] lg:pr-[60px] lg:pl-[4px]">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center bg-[#E8EDF5] text-[#004CA5] font-body font-semibold text-[12px] px-3 py-[6px] rounded-full">
            Our Process
          </span>
          <h2 className="font-heading font-[800] text-3xl sm:text-4xl lg:text-[36px] lg:leading-[40px] tracking-[0px] text-[#004CA5] mt-3">
            How We Work
          </h2>
          <p className="font-body font-[400] text-base sm:text-lg lg:text-[18px] lg:leading-[28px] text-[#64748B] max-w-[775px] mx-auto mt-3 px-4">
            Dedicated pathways for employers and job seekers, united by one commitment to success.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-6">
          {/* EMPLOYER JOURNEY */}
          <div className="w-full lg:w-[416px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#004CA5] px-6 py-4 flex items-center gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-[#C8D96F] flex items-center justify-center font-heading font-bold text-sm text-[#004CA5]">
                E
              </span>
              <div>
                <h3 className="font-heading font-bold text-white text-base">Employer Journey</h3>
                <p className="text-white/60 text-xs">From brief to successful hire</p>
              </div>
            </div>
            <div className="px-6 py-6">
              <div className="relative flex flex-col gap-0">
                {employerSteps.map(({ num, title, desc }, idx) => (
                  <div key={num} className="flex gap-4 relative pb-6 last:pb-0">
                    {idx < employerSteps.length - 1 && (
                      <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[#004CA5]/20" />
                    )}
                    <span className="shrink-0 w-[38px] h-[38px] rounded-full bg-[#004CA5] text-white font-bold text-xs flex items-center justify-center relative z-10">
                      {num}
                    </span>
                    <div className="pt-1.5">
                      <p className="font-heading font-bold text-[#004CA5] text-sm">{title}</p>
                      <p className="text-[#64748B] text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER CONNECTOR */}
          <div className="hidden lg:flex flex-col items-center justify-center shrink-0 pt-16">
            <div className="e2e-badge-wrapper relative w-[140px] h-[140px] flex items-center justify-center">
              <div className="e2e-dashed-ring absolute w-[120px] h-[120px] rounded-full border border-dashed border-[#004CA5]/20">
                <span className="e2e-dot absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F5A300]" />
                <span className="e2e-dot absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#C8D96F]" />
                <span className="e2e-dot absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#F5A300]" />
                <span className="e2e-dot absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#C8D96F]" />
              </div>
              <div className="e2e-blue-ring absolute w-[100px] h-[100px] rounded-full border border-solid border-[#004CA5]/10" />
              <div
                className="e2e-inner-circle absolute w-[80px] h-[80px] rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(180deg, #005CB9, #003B7A)' }}
              >
                <span className="text-white font-heading font-bold text-[12px] text-center leading-tight">
                  E2E
                </span>
              </div>
            </div>
            <div className="e2e-text mt-3 text-center">
              <p className="text-[#64748B] text-xs m-0">Connecting</p>
              <p className="font-heading font-bold text-[#004CA5] text-sm m-0">Both Journeys</p>
            </div>
          </div>

          {/* EMPLOYEE JOURNEY */}
          <div className="w-full lg:w-[416px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#C8D96F] px-6 py-4 flex items-center gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-[#004CA5] flex items-center justify-center font-heading font-bold text-sm text-[#F39308]">
                E
              </span>
              <div>
                <h3 className="font-heading font-bold text-[#004CA5] text-base">Employee Journey</h3>
                <p className="text-[#004CA5]/60 text-xs">From registration to career support</p>
              </div>
            </div>
            <div className="px-6 py-6">
              <div className="relative flex flex-col gap-0">
                {employeeSteps.map(({ num, title, desc }, idx) => (
                  <div key={num} className="flex gap-4 relative pb-6 last:pb-0">
                    {idx < employeeSteps.length - 1 && (
                      <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[#C8D96F]/40" />
                    )}
                    <span className="shrink-0 w-[38px] h-[38px] rounded-full bg-[#C8D96F] text-[#004CA5] font-bold text-xs flex items-center justify-center relative z-10">
                      {num}
                    </span>
                    <div className="pt-1.5">
                      <p className="font-heading font-bold text-[#004CA5] text-sm">{title}</p>
                      <p className="text-[#64748B] text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE CONNECTOR */}
        <div className="lg:hidden flex flex-col items-center mt-10">
          <div className="e2e-badge-wrapper relative w-[120px] h-[120px] flex items-center justify-center">
            <div className="e2e-dashed-ring absolute w-[100px] h-[100px] rounded-full border border-dashed border-[#004CA5]/20">
              <span className="e2e-dot absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F5A300]" />
              <span className="e2e-dot absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#C8D96F]" />
              <span className="e2e-dot absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F5A300]" />
              <span className="e2e-dot absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#C8D96F]" />
            </div>
            <div className="e2e-blue-ring absolute w-[80px] h-[80px] rounded-full border border-solid border-[#004CA5]/10" />
            <div
              className="e2e-inner-circle absolute w-[60px] h-[60px] rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(180deg, #005CB9, #003B7A)' }}
            >
              <span className="text-white font-heading font-bold text-[10px] text-center leading-tight">E2E</span>
            </div>
          </div>
          <div className="e2e-text mt-3 text-center">
            <p className="text-[#64748B] text-xs m-0">Connecting</p>
            <p className="font-heading font-bold text-[#004CA5] text-sm m-0">Both Journeys</p>
          </div>
        </div>
      </div>
    </section>

    <style>{`
      @keyframes e2e-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes e2e-pulse {
        0% { transform: scale(1); opacity: 0.7; }
        100% { transform: scale(1.05); opacity: 1; }
      }
      @keyframes e2e-breathe {
        0% { transform: scale(1); box-shadow: 0 0 20px rgba(0,60,140,0.4); }
        100% { transform: scale(1.03); box-shadow: 0 0 20px rgba(0,60,140,0.6); }
      }
      @keyframes e2e-text-in {
        0% { opacity: 0; transform: translateY(8px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .e2e-dashed-ring {
        animation: e2e-spin 20s linear infinite;
        will-change: transform;
      }
      .e2e-blue-ring {
        animation: e2e-pulse 2.5s ease-in-out infinite alternate;
        will-change: transform, opacity;
      }
      .e2e-inner-circle {
        animation: e2e-breathe 3s ease-in-out infinite alternate;
        will-change: transform, box-shadow;
      }
      .e2e-text {
        animation: e2e-text-in 0.6s ease-out forwards;
        opacity: 0;
      }
    `}</style>
  );
}
