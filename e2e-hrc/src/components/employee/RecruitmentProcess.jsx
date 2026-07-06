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

export default function RecruitmentProcess() {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#F8FAFC]">
      <div className="mx-auto lg:w-[1393px] lg:h-[672.99px] lg:max-w-[1440px] lg:pr-[60px] lg:pl-[4px] lg:gap-[6px]">
        {/* SECTION HEADER */}
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

        {/* TWO-COLUMN JOURNEY LAYOUT */}
        <div className="relative flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-6">
          {/* EMPLOYER JOURNEY - LEFT */}
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
            <div className="relative w-[140px] h-[140px] flex items-center justify-center">
              <div className="absolute w-[120px] h-[120px] rounded-full border border-dashed border-[#004CA5]/20" />
              <div className="absolute w-[100px] h-[100px] rounded-full border border-solid border-[#004CA5]/10" />
              <div
                className="absolute w-[80px] h-[80px] rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(180deg, #005CB9, #003B7A)' }}
              >
                <span className="text-white font-heading font-bold text-[12px] text-center leading-tight">
                  E2E
                </span>
              </div>
              {/* Dot accents */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F5A300]" />
              <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#C8D96F]" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#F5A300]" />
              <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#C8D96F]" />
            </div>
            <p className="text-[#64748B] text-xs text-center mt-3">Connecting</p>
            <p className="font-heading font-bold text-[#004CA5] text-sm text-center">Both Journeys</p>
          </div>

          {/* EMPLOYEE JOURNEY - RIGHT */}
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
          <div className="relative w-[120px] h-[120px] flex items-center justify-center">
            <div className="absolute w-[100px] h-[100px] rounded-full border border-dashed border-[#004CA5]/20" />
            <div className="absolute w-[80px] h-[80px] rounded-full border border-solid border-[#004CA5]/10" />
            <div
              className="absolute w-[60px] h-[60px] rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(180deg, #005CB9, #003B7A)' }}
            >
              <span className="text-white font-heading font-bold text-[10px] text-center leading-tight">E2E</span>
            </div>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F5A300]" />
            <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#C8D96F]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F5A300]" />
            <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#C8D96F]" />
          </div>
          <p className="text-[#64748B] text-xs text-center mt-3">Connecting</p>
          <p className="font-heading font-bold text-[#004CA5] text-sm text-center">Both Journeys</p>
        </div>
      </div>
    </section>
  );
}
