import { useEffect, useState } from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getActiveBlogs } from '../../services/blog/blogService';

import trendingIcon from '../../assets/icon trending now/trendinng now.png';
import expertIcon from '../../assets/icon trending now/expert categories.png';
import industryIcon from '../../assets/icon trending now/industry resources.png';
import techSalaryIcon from '../../assets/icon trending now/tech salary guide.png';
import recruitmentIcon from '../../assets/exepert categories/reqirtement.png';
import executiveCatIcon from '../../assets/exepert categories/executive.png';
import complianceCatIcon from '../../assets/exepert categories/HR compliance.png';
import talentIcon from '../../assets/exepert categories/talent analytics.png';
import leadershipIcon from '../../assets/exepert categories/leadership.png';
import arrowIcon from '../../assets/exepert categories/arrow.png';

const categories = [
  { name: 'Recruitment Strategy', icon: recruitmentIcon, w: 20, h: 20 },
  { name: 'Executive Search', icon: executiveCatIcon, w: 20.5, h: 19.5 },
  { name: 'HR Compliance', icon: complianceCatIcon, w: 18, h: 19 },
  { name: 'Talent Analytics', icon: talentIcon, w: 18, h: 18 },
  { name: 'Leadership Development', icon: leadershipIcon, w: 24, h: 12 },
];

/**
 * Format date to readable format (e.g., "April 8, 2026")
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const stripHtml = (html = '') => {
  const div = document.createElement('div');
  div.innerHTML = html;

  return (div.textContent || div.innerText || '')
    .replace(/\s+/g, ' ')
    .trim();
};

export default function BlogPostsGrid() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getActiveBlogs();
        
        if (response?.success && Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          setError('Failed to load blogs');
          setBlogs([]);
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs');
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blog-grid-section bg-[#F7F9FB] px-16 py-20 max-sm:px-4 max-sm:py-10 max-md:px-6 max-md:py-12">
      <style>{`
        .blog-article-desc {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
      <div className="blog-grid-layout flex gap-10 max-lg:flex-col max-w-[1440px] mx-auto">
        <div className="flex-1 min-w-0 overflow-hidden">
          <div className="flex items-center justify-between mb-8 max-sm:flex-col max-sm:items-start max-sm:gap-2">
            <h2 className="font-heading font-semibold text-3xl max-sm:text-2xl text-[#1B1C1C]">
              All blog posts
            </h2>
            <Link to="/blogs/navigating-leadership-transitions" className="font-['Hanken_Grotesk',sans-serif] text-base text-[#003679]">
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
            {loading && (
              <div className="col-span-2 flex items-center justify-center min-h-48">
                <p className="font-body text-base text-[#424752]">Loading blogs...</p>
              </div>
            )}
            {error && !loading && (
              <div className="col-span-2 flex items-center justify-center min-h-48">
                <p className="font-body text-base text-[#DD4C4C]">Failed to load blogs.</p>
              </div>
            )}
            {!loading && !error && blogs.length === 0 && (
              <div className="col-span-2 flex items-center justify-center min-h-48">
                <p className="font-body text-base text-[#424752]">No blogs available.</p>
              </div>
            )}
            {!loading && !error && blogs.length > 0 && blogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blog/${blog.slug}`}
                className="no-underline"
              >
                <article className="bg-white border border-[#EAE8E7] rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex flex-col min-w-0 h-full hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-200">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.blogHeading}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {blog.tags && blog.tags.length > 0 && (
                      <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-white/85 backdrop-blur rounded-full font-['Hanken_Grotesk',sans-serif] font-bold text-[11px] tracking-[0.96px] uppercase text-[#1B1C1C]">
                        {blog.tags[0]}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="blog-article-title font-heading text-xl leading-7 text-[#1B1C1C] mb-3">
                      {blog.blogHeading}
                    </h3>
                    <p className="blog-article-desc font-body text-sm leading-5 text-[#424752] mb-5">
                      {stripHtml(blog.paragraph1)}
                    </p>
                    <div className="border-t border-[#EAE8E7] pt-4 flex items-center gap-4 font-body text-xs text-[#424752] mt-auto">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={14} aria-hidden="true" />
                        {formatDate(blog.publishDate)}
                      </span>
                      {blog.readTime && (
                        <span className="flex items-center gap-1.5">
                          <FiClock size={14} aria-hidden="true" />
                          {blog.readTime}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <aside className="blog-aside w-[377px] shrink-0 max-lg:w-full flex flex-col gap-8 min-w-0">
          <div className="bg-white border border-[#EAE8E7] rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-[7.99px] mb-5 h-7">
              <img src={trendingIcon} alt="Trending Now" style={{ width: 16, height: 19 }} />
              <h3 className="font-heading font-semibold text-xl text-[#1B1C1C]">Trending Now</h3>
            </div>
            <div className="py-4 border-b border-[#EAE8E7] first:pt-0 last:border-b-0 last:pb-0">
              <p className="font-['Hanken_Grotesk',sans-serif] font-bold text-[11px] tracking-[0.96px] uppercase text-[#003679] mb-1">
                Career
              </p>
              <p className="font-['Hanken_Grotesk',sans-serif] text-sm leading-5 text-[#1B1C1C]">
                How to Retain Top Performers in a Competitive Market
              </p>
            </div>
            <div className="py-4 border-b border-[#EAE8E7] first:pt-0 last:border-b-0 last:pb-0">
              <p className="font-['Hanken_Grotesk',sans-serif] font-bold text-[11px] tracking-[0.96px] uppercase text-[#003679] mb-1">
                Executive Search
              </p>
              <p className="font-['Hanken_Grotesk',sans-serif] text-sm leading-5 text-[#1B1C1C]">
                The Rise of the Fractional Executive: Is It Right for You?
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#EAE8E7] rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-[7.99px] mb-5 h-7">
              <img src={expertIcon} alt="Expert Categories" style={{ width: 19, height: 20 }} />
              <h3 className="font-heading font-semibold text-xl text-[#1B1C1C]">Expert Categories</h3>
            </div>
            <p className="font-body text-sm leading-5 text-[#424752] mb-4">
              Explore deeper insights across our core consultancy pillars.
            </p>
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors duration-150 hover:bg-[#F7F9FB]"
                >
                  <div className="flex items-center" style={{ gap: '11.99px' }}>
                    <img
                      src={cat.icon}
                      alt={cat.name}
                      style={{ width: cat.w, height: cat.h }}
                    />
                    <span className="font-['Inter',sans-serif] font-medium text-sm leading-5 text-[#1B1C1C]">
                      {cat.name}
                    </span>
                  </div>
                  <img src={arrowIcon} alt="arrow" style={{ width: 9.33, height: 9.33 }} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#EAE8E7] rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-[7.99px] mb-5 h-7">
              <img src={industryIcon} alt="Industry Resources" style={{ width: 21.5, height: 16 }} />
              <h3 className="font-heading font-semibold text-xl text-[#1B1C1C]">Industry Resources</h3>
            </div>
            <div className="flex items-center gap-3 h-auto min-h-[62px]">
              <div className="w-[32.67px] h-[35.67px] bg-[rgba(0,54,121,0.1)] rounded-md flex items-center justify-center shrink-0" style={{ padding: '8px 8px 11px 8px' }}>
                <img src={techSalaryIcon} alt="Tech Salary Guide" style={{ width: 16.67, height: 16.67 }} />
              </div>
              <div className="flex-1 min-w-0 h-9 flex flex-col justify-center">
                <p className="font-['Inter',sans-serif] font-medium text-sm leading-5 text-[#1B1C1C] truncate">
                  2026 Tech Salary Guide
                </p>
                <p className="font-['Source_Sans_3',sans-serif] text-xs leading-4 text-[#424752]">
                  PDF &bull; 4.2 MB
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}