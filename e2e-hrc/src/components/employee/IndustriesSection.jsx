import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const industries = [
  { name: 'Manufacturing', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80' },
  { name: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80' },
  { name: 'Engineering', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80' },
  { name: 'Construction', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80' },
  { name: 'Logistics', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80' },
  { name: 'Finance', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80' },
  { name: 'Education', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80' },
];

export default function IndustriesSection() {
  const scroll = (dir) => {
    const el = document.getElementById('emp-industries-scroll');
    if (el) {
      const amount = el.clientWidth * 0.5;
      el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-end justify-between mb-10 lg:pl-[51px] lg:pr-[32px]">
          <div className="lg:w-[629.76px]">
            <span className="inline-flex items-center bg-[#C8D96F] text-[#004CA5] font-body font-semibold text-[12px] px-3 py-[6px] rounded-full mb-2">
              Industries We Serve
            </span>
            <h2 className="font-heading font-[800] text-2xl sm:text-3xl lg:text-[36px] lg:leading-[40px] tracking-[0px] text-[#004CA5]">
              Deep expertise across 25+ sectors
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-[8px] lg:w-[96px]">
            <button onClick={() => scroll('left')} className="w-[44px] h-[44px] rounded-full border-[1.6px] border-[#004CA5] bg-transparent flex items-center justify-center hover:bg-gray-50 transition-colors" aria-label="Scroll left">
              <FiChevronLeft size={18} strokeWidth={1.5} className="text-[#004CA5]" />
            </button>
            <button onClick={() => scroll('right')} className="w-[44px] h-[44px] rounded-full border-[1.6px] border-[#004CA5] bg-transparent flex items-center justify-center hover:bg-gray-50 transition-colors" aria-label="Scroll right">
              <FiChevronRight size={18} strokeWidth={1.5} className="text-[#004CA5]" />
            </button>
          </div>
        </div>

        <div
          id="emp-industries-scroll"
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {industries.map(({ name, image }) => (
            <div key={name} className="relative min-w-[260px] lg:min-w-[280px] lg:w-[280px] lg:h-[420px] rounded-2xl overflow-hidden group cursor-pointer snap-start">
              <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-white font-heading font-bold text-lg">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
