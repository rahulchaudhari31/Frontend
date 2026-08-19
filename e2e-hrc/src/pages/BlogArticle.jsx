import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { getBlogBySlug, getActiveBlogs } from '../services/blog/blogService';
import { getActiveBlogCta } from '../services/blog/blogCtaService';

import copyLinkIcon from '../assets/blogs page credentials/copy link.png';
import linkedinIcon from '../assets/blogs page credentials/likdin.png';
import newsletterIcon from '../assets/blogs page credentials/Newsletter.png';

/**
 * Format date to readable format (e.g., "April 11, 2026")
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

/**
 * Get initials from author name
 */
const getInitials = (name) => {
  if (!name) return 'AB';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

const stripHtml = (html = '') => {
  const div = document.createElement('div');
  div.innerHTML = html;

  return (div.textContent || div.innerText || '')
    .replace(/\s+/g, ' ')
    .trim();
};

export default function BlogArticle() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [cta, setCta] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ctaLoading, setCtaLoading] = useState(true);
  const [relatedBlogsLoading, setRelatedBlogsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  // Fetch blog data when slug changes
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getBlogBySlug(slug);

        if (response?.success && response.data) {
          setBlog(response.data);

          // Update SEO tags dynamically
          if (response.data.seo) {
            document.title = response.data.seo.metaTitle || 'Blog Article';

            // Update or create meta description tag
            let metaDescriptionTag = document.querySelector('meta[name="description"]');
            if (!metaDescriptionTag) {
              metaDescriptionTag = document.createElement('meta');
              metaDescriptionTag.name = 'description';
              document.head.appendChild(metaDescriptionTag);
            }
            metaDescriptionTag.content = response.data.seo.metaDescription || '';

            // Update or create meta keywords tag if available
            if (response.data.seo.keywords) {
              let metaKeywordsTag = document.querySelector('meta[name="keywords"]');
              if (!metaKeywordsTag) {
                metaKeywordsTag = document.createElement('meta');
                metaKeywordsTag.name = 'keywords';
                document.head.appendChild(metaKeywordsTag);
              }
              metaKeywordsTag.content = response.data.seo.keywords || '';
            }
          }
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  // Fetch CTA data (independent of blog)
  useEffect(() => {
    const fetchCta = async () => {
      try {
        setCtaLoading(true);
        const response = await getActiveBlogCta();

        if (response?.success && response.data) {
          setCta(response.data);
        }
      } catch (err) {
        console.error('Error fetching CTA:', err);
        // Don't set error for CTA - let blog render even if CTA fails
      } finally {
        setCtaLoading(false);
      }
    };

    fetchCta();
  }, []);

  // Fetch related blogs for the Related Reading section
  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        setRelatedBlogsLoading(true);
        const response = await getActiveBlogs();

        if (response?.success && Array.isArray(response.data)) {
          // Get first 4 blogs for the Related Reading section
          const limitedBlogs = response.data.slice(0, 4);
          setRelatedBlogs(limitedBlogs);
        }
      } catch (err) {
        console.error('Error fetching related blogs:', err);
        // Don't set error for related blogs - let blog render even if this fails
        setRelatedBlogs([]);
      } finally {
        setRelatedBlogsLoading(false);
      }
    };

    fetchRelatedBlogs();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar variant="blog" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#424752' }}>Loading blog...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Show error state
  if (error || !blog) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar variant="blog" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#DD4C4C' }}>Blog not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Get first tag for badge (or use tags[0] if available)
  const badgeTag = blog.tags && blog.tags.length > 0 ? blog.tags[0] : 'Blog';

  // Get author initials
  const authorInitials = getInitials(blog.author);

  // Format publish date for display
  const formattedDate = formatDate(blog.publishDate);

  // Calculate approximate read time if not provided
  const readTime = blog.readTime || '5 min read';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white" style={{ width: '100%', overflowX: 'hidden' }}>
      <style>{`
        .sidebar-share-btn {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }
        .sidebar-share-btn:hover .share-icon-box {
          background: #004CA5;
        }
        .sidebar-share-btn:hover .share-icon-box img {
          filter: brightness(0) invert(1);
        }
        .sidebar-share-btn:hover .share-text {
          color: #004CA5;
        }
        .share-icon-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 8px;
          background: #F0EDED;
          border-radius: 8px;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }
        .share-text {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #424752;
          text-align: center;
          transition: color 0.3s ease;
        }
        .article-card {
          width: 100%;
          max-width: 312px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .article-card:hover {
          transform: translateY(-6px);
          box-shadow: 0px 8px 24px rgba(0,0,0,0.12);
        }
        .article-card:hover .card-image img {
          transform: scale(1.05);
        }
        .article-card:hover .card-title {
          color: #004CA5;
        }
        .card-image {
          width: 100%;
          max-width: 312px;
          height: 187.5px;
          background: #F0EDED;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card-image img {
          width: 115%;
          height: 100%;
          max-width: none;
          margin-left: -7.5%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.3s ease;
        }
        .card-title {
          font-family: 'Hanken Grotesk', sans-serif;
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
          color: #1B1C1C;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }
        @media (max-width: 1024px) {
          .blog-main-container { flex-direction: column !important; padding-left: 16px !important; padding-right: 16px !important; }
          .blog-sidebar { width: 100% !important; }
          .blog-article-body { width: 100% !important; }
        }
        @media (max-width: 768px) {
          .blog-article-body { width: 100% !important; max-width: 100% !important; box-sizing: border-box !important; }
          .blog-article-body div { max-width: 100% !important; width: 100% !important; }
          .blog-sidebar .sidebar-inner { width: 100% !important; max-width: 100% !important; box-sizing: border-box !important; padding: 0 !important; }
          .blog-sidebar .sidebar-inner > div { width: 100% !important; max-width: 100% !important; box-sizing: border-box !important; }
          .newsletter-section { width: 100% !important; max-width: 100% !important; padding: 40px 16px !important; box-sizing: border-box !important; }
          .newsletter-inner { width: 100% !important; max-width: 100% !important; }
          .newsletter-heading { font-size: 28px !important; line-height: 34px !important; width: 100% !important; }
          .newsletter-desc { font-size: 14px !important; line-height: 22px !important; width: 100% !important; }
          .newsletter-label { width: auto !important; }
          .newsletter-form { width: 100% !important; flex-direction: column !important; gap: 12px !important; }
          .newsletter-input { width: 100% !important; box-sizing: border-box !important; }
          .newsletter-btn { width: 100% !important; box-sizing: border-box !important; }
          .newsletter-privacy { width: 100% !important; padding-top: 16px !important; }
          .blog-article-body h1 { font-size: 28px !important; line-height: 36px !important; }
          .blog-article-body h2 { font-size: 20px !important; line-height: 28px !important; }
          .blog-article-body p { font-size: 14px !important; line-height: 22px !important; }
          .tag-wrap { flex-wrap: wrap !important; }
        }
        @media (max-width: 640px) {
          .blog-main-container { padding-left: 12px !important; padding-right: 12px !important; }
          .blog-article-body h1 { font-size: 24px !important; line-height: 32px !important; }
          .newsletter-section { padding: 32px 16px !important; }
          .newsletter-heading { font-size: 24px !important; line-height: 30px !important; }
          .newsletter-desc { font-size: 13px !important; line-height: 20px !important; }
          .blog-article-body h2 { font-size: 18px !important; line-height: 26px !important; }
          .blog-article-body p { font-size: 13px !important; line-height: 20px !important; }
          .article-card { width: 100% !important; }
          .card-image { width: 100% !important; }
          .tag-wrap { flex-wrap: wrap !important; }
        }
        .blog-article-body p {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #424752;
          text-align: left;
          white-space: normal;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
      `}</style>

      <Navbar variant="blog" />

      {/* Main Layout - Changed from absolute positioning to flex layout */}
      <div className="blog-main-container" style={{ maxWidth: 1440, margin: '0 auto', paddingTop: 40, display: 'flex', gap: 40, paddingLeft: 61, paddingRight: 61 }}>

        {/* Aside - Left Sidebar */}
        <aside className="blog-sidebar" style={{ width: 311.5, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexShrink: 0 }}>
          {/* Container */}
          <div className="sidebar-inner" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Section 1: Badge + Author */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16, padding: '2px 0 0' }}>
              {/* Badge */}
              <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', background: '#004CA5', borderRadius: 9999, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#FFFFFF' }}>
                {badgeTag}
              </span>

              {/* Section 2: Author */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#424752', margin: 0, width: '100%' }}>
                  Authored by
                </p>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, width: '100%' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#D8E2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#004CA5' }}>
                      {authorInitials}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: 0 }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, lineHeight: '24px', color: '#1B1C1C', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                      {blog.author}
                    </span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#424752', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                      {blog.authorDesignation || 'Consultant'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Share Insight */}
            <div style={{ width: '100%', borderTop: '1px solid #EAE8E7', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#737783', textTransform: 'uppercase', margin: 0, width: '100%' }}>
                SHARE INSIGHT
              </p>

              {/* Share Buttons */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Copy Link */}
                <button onClick={handleCopyLink} className="sidebar-share-btn" style={{ width: '100%' }}>
                  <div className="share-icon-box" style={{ width: 34, height: 36 }}>
                    {copied ? (
                      <span style={{ color: '#166534', fontSize: 14, fontWeight: 700 }}>✓</span>
                    ) : (
                      <img src={copyLinkIcon} alt="Copy Link" style={{ width: 18, height: 20 }} />
                    )}
                  </div>
                  <span className="share-text">{copied ? 'Copied' : 'Copy Link'}</span>
                </button>

                {/* LinkedIn */}
                <button onClick={() => window.open('https://linkedin.com', '_blank')} className="sidebar-share-btn" style={{ width: '100%' }}>
                  <div className="share-icon-box" style={{ width: 36, height: 36 }}>
                    <img src={linkedinIcon} alt="LinkedIn" style={{ width: 20, height: 20 }} />
                  </div>
                  <span className="share-text">LinkedIn</span>
                </button>

                {/* Newsletter */}
                <button className="sidebar-share-btn" style={{ width: '100%' }}>
                  <div className="share-icon-box" style={{ width: 36, height: 32 }}>
                    <img src={newsletterIcon} alt="Newsletter" style={{ width: 20, height: 16 }} />
                  </div>
                  <span className="share-text">Newsletter</span>
                </button>
              </div>
            </div>

            {/* Section 4: Related Reading Box */}
            <div style={{ width: '100%', background: '#F6F3F2', border: '1px solid #EAE8E7', borderRadius: 16, padding: '21px 24px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, lineHeight: '24px', color: '#004CA5', margin: 0, width: '100%' }}>
                Related Reading
              </p>
            </div>

            {/* Section 5: Article Cards */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50 }}>
              {relatedBlogsLoading && (
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#424752', margin: 0, width: '100%', textAlign: 'center' }}>
                  Loading...
                </p>
              )}
              {!relatedBlogsLoading && relatedBlogs.length === 0 && (
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#424752', margin: 0, width: '100%', textAlign: 'center' }}>
                  No related blogs available.
                </p>
              )}
              {!relatedBlogsLoading && relatedBlogs.length > 0 && relatedBlogs.map((article) => (
                <Link key={article._id} to={`/blog/${article.slug}`} style={{ textDecoration: 'none', width: '100%' }}>
                  <div className="article-card" style={{ cursor: 'pointer' }}>
                    <div className="card-image">
                      <img src={article.image} alt={article.blogHeading} />
                    </div>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#424752', margin: 0, width: '100%' }}>
                        {formatDate(article.publishDate)} • {article.readTime || '5 min read'}
                      </p>
                      <h4 className="card-title" style={{ width: '100%' }}>
                        {article.blogHeading}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Central Article Body */}
        <div className="blog-article-body" style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Header */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Breadcrumbs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 'auto', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#424752' }}>
                {formattedDate}
              </span>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C3C6D4', flexShrink: 0 }} />
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#424752' }}>
                {readTime}
              </span>
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 56, lineHeight: '70px', color: '#004CA5', margin: 0, maxWidth: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
              {stripHtml(blog.blogHeading)}
            </h1>

            {/* Intro */}
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#424752', margin: 0, maxWidth: '100%', textAlign: 'left', whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
              {stripHtml(blog.paragraph1)}
            </p>
          </div>

          {/* Hero Image */}
          <div style={{ width: '100%', filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.04))', borderRadius: 24, overflow: 'hidden', maxHeight: '600px' }}>
            <img src={blog.image} alt={blog.blogHeading} style={{ width: '100%', height: 'auto', minHeight: '300px', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Article Body */}
          <div style={{ width: '100%', maxWidth: 768, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            {/* Opening paragraph */}
            {blog.paragraph2 && (
              <div style={{ width: '100%' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', margin: 0, maxWidth: '100%', textAlign: 'left', whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  {stripHtml(blog.paragraph2)}
                </p>
              </div>
            )}

            {/* H2: Heading 2 */}
            {blog.heading2 && (
              <div style={{ width: '100%', paddingTop: 16 }}>
                <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '36px', color: '#004CA5', margin: 0, maxWidth: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  {blog.heading2}
                </h2>
              </div>
            )}

            {/* Paragraph + Quote container */}
            {(blog.paragraph3 || blog.quote) && (
              <div style={{ width: '100%', paddingBottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0 }}>
                {blog.paragraph3 && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', margin: 0, maxWidth: '100%', textAlign: 'left', whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                    {stripHtml(blog.paragraph3)}
                  </p>
                )}

                {/* Executive Insight Pull Quote */}
                {blog.quote && (
                  <div style={{ width: '100%', maxWidth: 768, marginTop: 16, padding: '0 32px 32px', filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.04))', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, boxSizing: 'border-box' }}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
                      <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#FFFFFF', margin: 0 }}>
                        Executive Insight:
                      </h3>
                      <div style={{ width: '100%', opacity: 0.9 }}>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', fontStyle: 'italic', color: '#424752', margin: 0, textAlign: 'left', whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                          "{blog.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* H2: Heading 3 */}
            {blog.heading3 && (
              <div style={{ width: '100%', paddingTop: 32 }}>
                <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '36px', color: '#004CA5', margin: 0, maxWidth: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  {blog.heading3}
                </h2>
              </div>
            )}

            {/* Paragraph after heading 3 */}
            {blog.paragraph4 && (
              <div style={{ width: '100%' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', margin: 0, maxWidth: '100%', textAlign: 'left', whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  {stripHtml(blog.paragraph4)}
                </p>
              </div>
            )}

            {/* Paragraph after bento */}
            {blog.paragraph5 && (
              <div style={{ width: '100%', paddingTop: 24 }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', margin: 0, maxWidth: '100%', textAlign: 'left', whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  {stripHtml(blog.paragraph5)}
                </p>
              </div>
            )}

            {/* H2: Heading 4 */}
            {blog.heading4 && (
              <div style={{ width: '100%', paddingTop: 16 }}>
                <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '36px', color: '#004CA5', margin: 0, maxWidth: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  {blog.heading4}
                </h2>
              </div>
            )}

            {/* Final paragraph */}
            {blog.paragraph6 && (
              <div style={{ width: '100%' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', margin: 0, maxWidth: '100%', textAlign: 'left', whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  {stripHtml(blog.paragraph6)}
                </p>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="tag-wrap" style={{ display: 'flex', gap: 8, paddingTop: 32, maxWidth: '100%', flexWrap: 'wrap' }}>
            {blog.tags && blog.tags.length > 0 ? (
              blog.tags.map((tag) => (
                <div key={tag} style={{ background: '#F2F2F2', borderRadius: 9999, padding: '6px 16px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#424752' }}>
                    {tag}
                  </span>
                </div>
              ))
            ) : (
              <div style={{ background: '#F2F2F2', borderRadius: 9999, padding: '6px 16px', display: 'flex', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#424752' }}>
                  Blog
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="newsletter-section" style={{ position: 'relative', width: '100%', background: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '60px 16px', boxSizing: 'border-box', marginTop: 40 }}>
        <div className="newsletter-inner" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, width: '100%', maxWidth: 672 }}>
          <p className="newsletter-label" style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#003679', textAlign: 'center', margin: 0 }}>
            STAY INFORMED
          </p>
          <h2 className="newsletter-heading" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400, fontSize: 48, lineHeight: '48px', color: '#1B1C1C', textAlign: 'center', margin: 0, maxWidth: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            {cta?.title || 'Get executive insights directly to your inbox'}
          </h2>
          <p className="newsletter-desc" style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', textAlign: 'center', margin: 0, maxWidth: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            {cta?.description || 'Join over 2,500 HR leaders who receive our weekly briefing on talent strategy, market intelligence, and leadership best practices.'}
          </p>
          <div className="newsletter-form" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 16, width: '100%', maxWidth: 672, boxSizing: 'border-box' }}>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your business email"
              style={{
                flex: 1,
                minWidth: 0,
                padding: '17px 16px',
                background: '#FFFFFF',
                border: '1px solid #EAE8E7',
                borderRadius: 12,
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '23px',
                color: '#6B7280',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <button
              className="newsletter-btn"
              onClick={() => window.open(cta?.buttonLink || '#', '_self')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '17px 40px',
                background: '#003679',
                borderRadius: 12,
                border: 'none',
                boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: '24px',
                color: '#FFFFFF',
                textAlign: 'center',
                flexShrink: 0,
                isolation: 'isolate',
                position: 'relative',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>
                {cta?.buttonText || 'Subscribe Now'}
              </span>
            </button>
          </div>
          <p className="newsletter-privacy" style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#737783', textAlign: 'center', margin: 0, paddingTop: 16, maxWidth: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            We respect your privacy. Read our <Link to="#" style={{ textDecoration: 'underline', color: '#004CA5' }}>Privacy Policy</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
