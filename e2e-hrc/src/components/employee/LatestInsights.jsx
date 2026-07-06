const featured = {
  tag: 'Career Advice',
  title: 'Career Growth Strategies for Professionals in 2026',
  desc: 'Discover the top strategies to accelerate your career growth, build valuable skills, and position yourself for success in a competitive job market.',
  readTime: '8 min read',
  date: 'Jun 28, 2026',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
};

const posts = [
  { tag: 'Interview Tips', title: 'How to Ace Your Virtual Interview', readTime: '5 min read', date: 'Jun 25, 2026' },
  { tag: 'Industry Insights', title: 'Top Hiring Trends in Manufacturing 2026', readTime: '6 min read', date: 'Jun 22, 2026' },
  { tag: 'Career Growth', title: 'Upskilling: The Key to Future-Proofing Your Career', readTime: '4 min read', date: 'Jun 20, 2026' },
];

export default function LatestInsights() {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#F39308] text-xs font-semibold tracking-widest uppercase mb-2">Our Blog</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#004CA5]">
              Career Growth Strategies for Professionals
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center justify-center border-2 border-[#004CA5] text-[#004CA5] font-semibold text-sm px-6 py-2.5 rounded-[999px] hover:bg-[#004CA5] hover:text-white transition-colors duration-200"
          >
            View All Articles
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 relative group rounded-2xl overflow-hidden cursor-pointer lg:w-[532px] lg:h-[480px]">
            <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-[#F39308] text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                {featured.tag}
              </span>
              <h3 className="text-white font-heading font-bold text-xl md:text-2xl leading-snug mb-2">{featured.title}</h3>
              <p className="text-gray-300 text-sm line-clamp-2 mb-3">{featured.desc}</p>
              <div className="flex items-center gap-4 text-gray-400 text-xs">
                <span>{featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            {posts.map(({ tag, title, readTime, date }) => (
              <div key={title} className="flex flex-col gap-2 pb-6 border-b border-gray-200 last:border-b-0 cursor-pointer group lg:w-[532px] lg:h-[134.48px]">
                <span className="self-start bg-[#004CA5]/10 text-[#004CA5] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                  {tag}
                </span>
                <h4 className="font-heading font-semibold text-[#004CA5] text-base leading-snug group-hover:text-[#F39308] transition-colors">
                  {title}
                </h4>
                <div className="flex items-center gap-4 text-[#64748B] text-xs">
                  <span>{readTime}</span>
                  <span>{date}</span>
                </div>
              </div>
            ))}
            <a
              href="#"
              className="sm:hidden inline-flex items-center justify-center border-2 border-[#004CA5] text-[#004CA5] font-semibold text-sm px-6 py-2.5 rounded-[999px] hover:bg-[#004CA5] hover:text-white transition-colors duration-200 mt-2"
            >
              View All Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
