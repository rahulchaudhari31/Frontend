const featured = {
  tag: 'Hiring Insights',
  title: 'Top Recruitment Strategies for 2026',
  desc: 'Discover the latest recruitment trends and strategies to attract and retain top talent in a competitive job market.',
  readTime: '8 min read',
  date: 'Jun 28, 2026',
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
};

const posts = [
  { tag: 'Talent Acquisition', title: 'How to Build a Strong Employer Brand', readTime: '5 min read', date: 'Jun 25, 2026' },
  { tag: 'Industry Insights', title: 'Manufacturing Hiring Trends to Watch', readTime: '6 min read', date: 'Jun 22, 2026' },
  { tag: 'Workforce Planning', title: 'The Future of Flexible Workforce Management', readTime: '4 min read', date: 'Jun 20, 2026' },
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">Our Blog</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
              Recruitment Insights for Employers
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex text-accent font-semibold text-sm hover:text-orange-500 transition-colors"
          >
            View All Blog &rarr;
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 relative group rounded-2xl overflow-hidden cursor-pointer h-80 md:h-96">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-accent text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
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
              <div key={title} className="flex flex-col gap-2 pb-6 border-b border-gray-100 last:border-b-0 cursor-pointer group">
                <span className="self-start bg-blue-100 text-blue-700 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                  {tag}
                </span>
                <h4 className="font-heading font-semibold text-primary text-base leading-snug group-hover:text-accent transition-colors">
                  {title}
                </h4>
                <div className="flex items-center gap-4 text-text-body text-xs">
                  <span>{readTime}</span>
                  <span>{date}</span>
                </div>
              </div>
            ))}
            <a
              href="#"
              className="sm:hidden text-accent font-semibold text-sm hover:text-orange-500 transition-colors mt-2"
            >
              View All Blog &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
