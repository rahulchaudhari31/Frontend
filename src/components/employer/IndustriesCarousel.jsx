import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const industries = [
  { name: 'Manufacturing', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80' },
  { name: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80' },
  { name: 'Engineering', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80' },
  { name: 'Construction', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80' },
  { name: 'Logistics', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80' },
];

export default function IndustriesCarousel() {
  const scroll = (dir) => {
    const container = document.getElementById('employer-industries-scroll');
    if (container) {
      const amount = container.clientWidth * 0.5;
      container.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">Industries</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
              Deep expertise across 25+ sectors
            </h2>
          </div>
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Scroll left"
            >
              <FiChevronLeft size={20} className="text-primary" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Scroll right"
            >
              <FiChevronRight size={20} className="text-primary" />
            </button>
          </div>
        </div>

        <div
          id="employer-industries-scroll"
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {industries.map(({ name, image }) => (
            <div
              key={name}
              className="relative min-w-[260px] sm:min-w-[280px] h-72 rounded-2xl overflow-hidden group cursor-pointer snap-start"
            >
              <img
                src={image}
                alt={`${name} industry`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-white font-heading font-bold text-lg">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
