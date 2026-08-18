import { useEffect, useState } from 'react';
import bannerBg from '../../assets/our blog images/backround our blog.jpg';
import { getActiveBlogHero } from '../../services/blog/blogHeroService';

export default function BlogBanner() {
  const [blogHero, setBlogHero] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogHero = async () => {
      try {
        const response = await getActiveBlogHero();
        if (response?.success && response?.data) {
          setBlogHero(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch blog hero data:', error);
        // Fallback: use default data
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogHero();
  }, []);

  // Use dynamic data or fallback to defaults
  const title = blogHero?.title || 'From Our';
  const highlightText = blogHero?.highlightText || 'Blog';
  const backgroundImage = blogHero?.backgroundImage || bannerBg;

  return (
    <>
      <style>{`
        .banner-overlay {
          background: url(${backgroundImage}) center center / cover no-repeat;
          opacity: 0.5;
        }
      `}</style>

      <section className="blog-banner-section relative h-[201px] bg-black overflow-hidden flex items-center border-t border-[#EAE8E7]">
        <div className="absolute inset-0 banner-overlay" />
        <div className="relative z-10 pl-16 max-sm:pl-6">
          <h1 className="font-heading font-extrabold text-6xl text-white max-sm:text-3xl max-md:text-4xl">
            {title} <span className="text-[#F39308]">{highlightText}</span>
          </h1>
        </div>
      </section>
    </>
  );
}
