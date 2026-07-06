const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn about your business, culture, and specific hiring needs.' },
  { num: '02', title: 'Requirement Planning', desc: 'We define role specifications, timelines, and sourcing strategy.' },
  { num: '03', title: 'Candidate Sourcing', desc: 'We tap into our extensive network to find the best matches.' },
  { num: '04', title: 'Vetting & Shortlisting', desc: 'We interview, assess, and present pre-vetted candidates.' },
  { num: '05', title: 'Interview Coordination', desc: 'We manage scheduling, feedback, and offer negotiations.' },
  { num: '06', title: 'Onboarding Support', desc: 'We ensure a smooth transition and long-term satisfaction.' },
];

export default function HowWeWork() {
  return (
    <section className="py-16 md:py-20 px-4 bg-bg-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Our Process</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">How We Hire for You</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map(({ num, title, desc }) => (
            <div key={num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                {num}
              </span>
              <h3 className="font-heading font-semibold text-primary text-lg">{title}</h3>
              <p className="text-text-body text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
