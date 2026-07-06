const rows = [
  {
    letter: 'H',
    title: 'Human Approach',
    desc: 'We put people at the heart of recruitment, building genuine relationships that lead to better hiring outcomes for your business.',
    stats: [
      { value: '500+', label: 'Active Clients' },
      { value: '98%', label: 'Client Retention' },
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    reversed: false,
  },
  {
    letter: 'R',
    title: 'Results Driven',
    desc: 'We are measured by outcomes. Our data-driven approach ensures we deliver the right talent, on time, every time.',
    stats: [
      { value: '10k+', label: 'Placements Made' },
      { value: '25+', label: 'Industries Served' },
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    reversed: true,
  },
  {
    letter: 'C',
    title: 'Commitment Always',
    desc: 'From first contact to long after placement, we stay committed to your success with ongoing support and partnership.',
    stats: [
      { value: '15+', label: 'Years Experience' },
      { value: '4', label: 'UK Offices' },
    ],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
    reversed: false,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 px-4 bg-bg-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Why Us</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Why employers choose us</h2>
        </div>

        <div className="flex flex-col gap-16">
          {rows.map(({ letter, title, desc, stats, image, reversed }) => (
            <div
              key={letter}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${reversed ? 'md:direction-rtl' : ''}`}
              style={{ direction: reversed ? 'rtl' : 'ltr' }}
            >
              <div style={{ direction: 'ltr' }}>
                <div className="relative">
                  <span
                    className="absolute -top-8 -left-4 text-[120px] md:text-[180px] font-heading font-black text-primary/5 select-none leading-none"
                    aria-hidden="true"
                  >
                    {letter}
                  </span>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4 relative z-10">
                    {title}
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed mb-6 relative z-10">{desc}</p>
                  <div className="flex gap-8 relative z-10">
                    {stats.map(({ value, label }) => (
                      <div key={label}>
                        <p className="font-heading font-bold text-2xl text-accent">{value}</p>
                        <p className="text-text-body text-xs">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ direction: 'ltr' }}>
                <img
                  src={image}
                  alt={title}
                  className="rounded-2xl shadow-lg w-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
