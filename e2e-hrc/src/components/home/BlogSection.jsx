import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Clock, Calendar, ArrowRight } from "lucide-react";
import { getActiveBlogs } from "../../services/blog/blogService";
import { useNavigate } from "react-router-dom";

const defaultPosts = {
  featured: {
    image: new URL("../../assets/images/Career Growth imgs/uk1.jpg", import.meta.url).href,
    badge: "Hiring Trends",
    title: "Hiring Trends in the UK: What Employers Need to Know in 2025",
    description:
      "From AI-driven screening to flexible working demands, the UK recruitment landscape is shifting rapidly.",
    author: "Sarah Mitchell",
    readTime: "5 min read",
    date: "28 May 2025",
    link: "#",
  },
  cards: [
    {
      image: new URL("../../assets/images/Career Growth imgs/strategy ..jpg", import.meta.url).href,
      badge: "Strategy",
      badgeBg: "#FFF4E0",
      badgeColor: "#C17800",
      title: "Talent Acquisition Strategies That Actually Work",
      readTime: "4 min read",
      date: "20 May 2025",
      link: "#",
    },
    {
      image: new URL("../../assets/images/Career Growth imgs/planning.jpg", import.meta.url).href,
      badge: "Workforce Planning",
      badgeBg: "#F0F7E0",
      badgeColor: "#5A7A00",
      title: "Future Workforce Planning: Building Teams for Tomorrow",
      readTime: "6 min read",
      date: "12 May 2025",
      link: "#",
    },
    {
      image: new URL("../../assets/images/Career Growth imgs/leadership ..jpg", import.meta.url).href,
      badge: "Leadership",
      badgeBg: "#004CA5",
      badgeColor: "#C8D96F",
      title: "Building High Performing Teams From Day One",
      readTime: "5 min read",
      date: "5 May 2025",
      link: "#",
    },
  ],
};

/**
 * Format date to readable format (e.g., "28 May 2025")
 */
const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  } catch {
    return "";
  }
};

/**
 * Strip HTML tags from text
 */
const stripHtml = (html = "") => {
  if (!html) return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return (div.textContent || div.innerText || "").replace(/\s+/g, " ").trim().substring(0, 150);
};

/**
 * Get badge color based on category/tag
 */
const getBadgeColor = (tag) => {
  const colorMap = {
    "Strategy": { bg: "#FFF4E0", color: "#C17800" },
    "Workforce Planning": { bg: "#F0F7E0", color: "#5A7A00" },
    "Leadership": { bg: "#004CA5", color: "#C8D96F" },
    "Recruitment": { bg: "#FFF4E0", color: "#C17800" },
    "Career": { bg: "#F0F7E0", color: "#5A7A00" },
  };
  return colorMap[tag] || { bg: "#FFF4E0", color: "#C17800" };
};

/**
 * Transform API blog data to component format
 */
const transformBlogData = (blog, isFeatured = false) => {
  const tag = blog.tags && blog.tags.length > 0 ? blog.tags[0] : "Blog";
  const { bg, color } = getBadgeColor(tag);

  if (isFeatured) {
    return {
      image: blog.image || defaultPosts.featured.image,
      badge: tag,
      title: blog.blogHeading || "",
      description: stripHtml(blog.paragraph1) || "",
      author: "E2E HRC",
      readTime: blog.readTime || "5 min read",
      date: formatDate(blog.publishDate) || "",
      link: `/blog/${blog.slug}` || "#",
    };
  }

  return {
    image: blog.image || defaultPosts.cards[0].image,
    badge: tag,
    badgeBg: bg,
    badgeColor: color,
    title: blog.blogHeading || "",
    readTime: blog.readTime || "5 min read",
    date: formatDate(blog.publishDate) || "",
    link: `/blog/${blog.slug}` || "#",
  };
};

function FeaturedCard({ card }) {
  return (
    <Link
      to={card.link}
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        className="home-blog-featured relative overflow-hidden cursor-pointer"
        style={{
          width: "532px", height: "480px", minWidth: "532px",
          borderRadius: "20px", padding: "36px", boxSizing: "border-box",
          display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.95";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
      >
        <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(0deg, rgba(0, 15, 40, 0.93) 35%, rgba(0, 15, 40, 0.3) 80%, rgba(0, 0, 0, 0) 100%)",
        }} />
        <div className="home-blog-featured-text relative z-10" style={{ width: "460px" }}>
          <span style={{
            fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px",
            backgroundColor: "#004CA5", color: "#FFFFFF", padding: "4px 12px",
            borderRadius: "9999px", display: "inline-block", width: "fit-content", marginBottom: "16px",
          }}>
            {card.badge}
          </span>
          <h3 className="home-blog-featured-title" style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "33px",
            color: "#FFFFFF", margin: 0, marginBottom: "12px", width: "460px",
          }}>
            {card.title}
          </h3>
          <p className="home-blog-featured-desc" style={{
            fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px",
            color: "rgba(255, 255, 255, 0.7)", margin: 0, marginBottom: "24px", width: "460px",
          }}>
            {card.description}
          </p>
          <div className="home-blog-featured-meta" style={{
            display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            width: "460px", marginBottom: "16px",
          }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
              <span style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.6)", fontSize: "12px", fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "16px" }}>
                <User size={12} />{card.author}
              </span>
              <span style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.6)", fontSize: "12px", fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "16px" }}>
                <Clock size={12} />{card.readTime}
              </span>
            </div>
            <span style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.6)", fontSize: "12px", fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "16px" }}>
              <Calendar size={12} />{card.date}
            </span>
          </div>
          <div style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px",
            color: "#C8D96F", textDecoration: "none", display: "flex", flexDirection: "row",
            alignItems: "center", gap: "6px",
          }}>
            Read More <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </Link>
  );
}

function SmallCard({ card }) {
  return (
    <Link
      to={card.link}
      style={{ textDecoration: "none", display: "block", width: "100%" }}
    >
      <div className="home-blog-small-card" style={{
        display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "20px",
        width: "532px", minHeight: "130px", backgroundColor: "#F8FAFC",
        borderRadius: "16px", flexShrink: 0, overflow: "hidden", cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.1)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
      >
        <div className="home-blog-small-card-image" style={{ width: "144px", height: "130px", flexShrink: 0, borderRadius: "16px 0 0 16px", overflow: "hidden" }}>
          <img src={card.image} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start",
          padding: "20px 20px 20px 0", gap: "8px", flex: 1, minWidth: 0,
        }}>
          <span style={{
            fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px",
            backgroundColor: card.badgeBg, color: card.badgeColor, padding: "4px 10px",
            borderRadius: "9999px", width: "fit-content",
          }}>
            {card.badge}
          </span>
          <h4 style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "19px",
            color: "#004CA5", margin: 0,
          }}>
            {card.title}
          </h4>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", color: "#64748B", fontSize: "12px", fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "16px" }}>
            <span style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4px" }}>
              <Clock size={11} />{card.readTime}
            </span>
            <span>·</span>
            <span style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4px" }}>
              <Calendar size={11} />{card.date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function BlogSection() {
  const [posts, setPosts] = useState(defaultPosts);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await getActiveBlogs();

        // Handle API response
        if (response?.success && Array.isArray(response.data) && response.data.length > 0) {
          // Sort blogs by publishDate (newest first)
          const sortedBlogs = [...response.data].sort((a, b) => {
            const dateA = new Date(a.publishDate || 0);
            const dateB = new Date(b.publishDate || 0);
            return dateB - dateA;
          });

          // Take first 4 blogs
          const selectedBlogs = sortedBlogs.slice(0, 4);

          if (selectedBlogs.length > 0) {
            // First blog is featured, rest are cards
            const featured = transformBlogData(selectedBlogs[0], true);
            const cards = selectedBlogs.slice(1, 4).map((blog) => transformBlogData(blog, false));

            // Pad with default cards if less than 3 available
            while (cards.length < 3) {
              cards.push(defaultPosts.cards[cards.length]);
            }

            setPosts({ featured, cards });
          }
        }
      } catch (error) {
        console.error("Error fetching blogs for home section:", error);
        // Keep default posts on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const { featured, cards } = posts;

  return (
    <section style={{
      display: "flex", flexDirection: "column", alignItems: "flex-start",
      padding: "13px 0 37px", width: "100%", background: "#FFFFFF",
    }}>
      <div className="home-blog-container" style={{
        display: "flex", flexDirection: "column", alignItems: "flex-start",
        padding: "0 32px 0 124px", width: "100%", maxWidth: "1440px",
      }}>
        {/* Header Row */}
        <div className="home-blog-header" style={{
          display: "flex", flexDirection: "row", justifyContent: "space-between",
          alignItems: "flex-end", width: "100%", height: "84px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0" }}>
            <span style={{
              fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px",
              backgroundColor: "#E8EDF5", color: "#004CA5", padding: "6px 12px",
              borderRadius: "9999px", display: "inline-flex", alignItems: "center",
              width: "108.72px", justifyContent: "center",
            }}>
              Latest Blog
            </span>
            <h2 className="home-blog-heading" style={{
              fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: "40px",
              color: "#004CA5", margin: 0, marginTop: "0", width: "793px",
            }}>
              Career Growth Strategies for Professionals
            </h2>
          </div>
          <button style={{
            display: "flex", flexDirection: "row", alignItems: "center", padding: "12px 24px",
            gap: "8px", border: "1.6px solid #004CA5", borderRadius: "9999px",
            backgroundColor: "transparent", cursor: "pointer", boxSizing: "border-box", flexShrink: 0,
          }}>
            <span 
              onClick={()=>navigate("/blogs")}
            style={{
              fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#003679",
            }}>
              View All Articles
            </span>
            <ArrowRight size={15} color="#003679" />
          </button>
        </div>

        {/* Content Container */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "flex-start",
          padding: "48px 0 0 0", width: "100%",
        }}>
          <div className="home-blog-content-inner" style={{ display: "flex", flexDirection: "row", width: "100%", height: "480px", position: "relative" }}>
            <FeaturedCard card={featured} />
            <div className="home-blog-small-cards" style={{
              display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "41px",
              position: "absolute", left: "556px", top: 0, width: "532px", height: "480px",
            }}>
              {cards.map((card, i) => (
                <SmallCard key={i} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;