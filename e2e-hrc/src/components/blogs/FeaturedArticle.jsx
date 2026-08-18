import { useEffect, useState } from 'react';
import heroBg from '../../assets/our blog images/background every employer.jpg';
import { getActiveFeaturedBlog } from '../../services/blog/featuredBlogService';

// Helper function to format date as relative time (e.g., "2 days ago")
const formatRelativeDate = (dateString) => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
      return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
    }
    if (diffHours > 0) {
      return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
    }
    if (diffMins > 0) {
      return diffMins === 1 ? '1 minute ago' : `${diffMins} minutes ago`;
    }
    return 'Just now';
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Recently';
  }
};

export default function FeaturedArticle() {
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedBlog = async () => {
      try {
        const response = await getActiveFeaturedBlog();
        if (response?.success && response?.data) {
          setFeaturedBlog(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch featured blog data:', error);
        // Fallback: use default data
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedBlog();
  }, []);

  // Use dynamic data or fallback to defaults
  const title = featuredBlog?.title || 'Top 10 Hiring Trends Every Employer\nShould Know in 2026';
  const shortDescription = featuredBlog?.shortDescription || 'As the global talent landscape evolves, staying ahead of recruitment trends\nis crucial. From AI-driven candidate screening to shifting expectations\naround flexible work, discover what will shape the future of hiring.';
  const backgroundImage = featuredBlog?.image || heroBg;
  const publishedDate = featuredBlog?.publishedAt ? formatRelativeDate(featuredBlog.publishedAt) : '2 days ago';
  const readTime = featuredBlog?.readTime || '8 min read';

  return (
    <>
      <style>{`
        .hero-card-img {
          width: 874.66px;
          height: 400px;
          flex-shrink: 0;
          flex: none;
          background: linear-gradient(to right, #F6F3F2 0%, #F6F3F2 10%, transparent 40%), url(${backgroundImage});
          background-size: 100% 100%, cover;
          background-position: 0 0, center;
          background-repeat: no-repeat;
        }
        .heading-overlap {
          margin-right: -240px;
          position: relative;
          z-index: 1;
        }
        .desc-overlap {
          margin-right: -200px;
          max-width: 689px;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 1024px) {
          .hero-card-img {
            width: 100%;
            height: 250px;
            flex-shrink: 0;
            background: linear-gradient(to bottom, #F6F3F2 0%, transparent 30%), url(${backgroundImage});
            background-size: 100% 100%, cover;
            background-position: 0 0, center;
            background-repeat: no-repeat;
          }
          .heading-overlap {
            margin-right: 0;
          }
          .desc-overlap {
            margin-right: 0;
          }
        }
      `}</style>

      <section className="px-16 py-16 max-sm:px-4 max-sm:py-6 max-md:px-6 max-md:py-8">
        <div className="featured-card flex max-lg:flex-col rounded-3xl min-h-[400px] bg-[#F6F3F2] overflow-hidden">
          <div className="featured-card-text flex-1 max-lg:w-full p-12 max-sm:p-6 max-md:p-8 flex flex-col justify-center">
            <p className="font-body text-sm text-[#424752] mb-4">{publishedDate} &bull; {readTime}</p>
            <h2 className="featured-heading font-heading text-[36px] leading-[40px] tracking-normal max-sm:text-2xl max-sm:leading-8 text-[#1B1C1C] mb-5 heading-overlap">
              {title}
            </h2>
            <p className="featured-desc font-body text-base leading-6 text-[#424752] desc-overlap">
              {shortDescription}
            </p>
          </div>
          <div className="featured-card-img hero-card-img max-lg:hidden" role="img" aria-label="Hiring trends team meeting" />
        </div>
      </section>
    </>
  );
}
