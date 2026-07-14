import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

import heroImg from '../assets/blogs page credentials/image employees.jpg';
import peoplesImg from '../assets/blogs page credentials/peoples.jpg';
import vegasProImg from '../assets/blogs page credentials/vegas pro.jpg';
import corelDrawImg from '../assets/blogs page credentials/corel draw.png';
import ultimateDefragImg from '../assets/blogs page credentials/UltimateDefrag.png';
import copyLinkIcon from '../assets/blogs page credentials/copy link.png';
import linkedinIcon from '../assets/blogs page credentials/likdin.png';
import newsletterIcon from '../assets/blogs page credentials/Newsletter.png';
import hierarchicalIcon from '../assets/blogs page credentials/hierachical.png';
import modularIcon from '../assets/blogs page credentials/modular.png';
import columnarIcon from '../assets/blogs page credentials/columnar.png';

const relatedArticles = [
  { title: 'SketchUp Portable for PC [no Virus] [x86x64] Final…', date: '04/12/2026', readTime: '5 min read', image: peoplesImg },
  { title: 'Vegas Pro twixtor Portable tool [Clean] Latest Bypass', date: '04/12/2026', readTime: '6 min read', image: vegasProImg },
  { title: 'CorelDRAW 2023 Activated [Windows] [Final] FileCR', date: '04/12/2026', readTime: '4 min read', image: corelDrawImg },
  { title: 'UltimateDefrag Crack + Activator [Clean] (x86-x64)', date: '04/12/2026', readTime: '7 min read', image: ultimateDefragImg },
];

const tags = ['Leadership', 'Tech Startups', 'Talent Strategy', 'Scale-Up'];

const bentoCards = [
  { title: 'Columnar', icon: columnarIcon, desc: 'Traditional vertical reporting lines. Best for clear accountability and functional specialization in departments like Finance or Legal.' },
  { title: 'Modular', icon: modularIcon, desc: 'Cross-functional "squads" or "tribes." Common in product development, allowing for rapid iteration and autonomy across silos.' },
  { title: 'Hierarchical', icon: hierarchicalIcon, desc: 'Content organized by importance. Used in executive reporting where strategic priorities dictate resource allocation over fixed structures.' },
];

export default function BlogArticle() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden" style={{ overflow: 'hidden' }}>
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
          width: 312px;
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
          width: 312px;
          height: 187.5px;
          background: #F0EDED;
          border-radius: 24px;
          overflow: hidden;
        }
        .card-image img {
          width: 312px;
          height: 187.5px;
          object-fit: cover;
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
          .blog-layout { flex-direction: column !important; }
          .blog-sidebar { position: relative !important; left: 0 !important; right: 0 !important; width: 100% !important; height: auto !important; padding: 0 0 32px !important; margin-bottom: 32px; }
          .blog-article-body { position: relative !important; left: 0 !important; right: 0 !important; width: 100% !important; height: auto !important; }
          .blog-main-container { padding-top: 24px !important; }
          .article-card { width: 100% !important; }
          .card-image, .card-image img { width: 100% !important; }
        }
        @media (max-width: 640px) {
          .blog-sidebar .sidebar-inner { width: 100% !important; }
          .blog-article-body h1 { font-size: 32px !important; line-height: 40px !important; }
          .newsletter-section { padding: 4px 24px 61px !important; }
          .newsletter-form { flex-direction: column !important; }
          .newsletter-input { width: 100% !important; }
          .newsletter-btn { width: 100% !important; }
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

      {/* Main Layout */}
      <div className="blog-main-container" style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', paddingTop: 40 }}>

        {/* Aside - Sticky Left Sidebar */}
        <aside
          className="blog-sidebar"
          style={{
            position: 'absolute',
            left: 61,
            right: 1067.5,
            top: 0,
            width: 311.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0 0 1618.8px',
            height: 3387.8,
          }}
        >
          {/* Container */}
          <div className="sidebar-inner" style={{ width: 311.5, display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Section 1: Badge + Author */}
            <div style={{ width: 311.5, display: 'flex', flexDirection: 'column', gap: 16, padding: '2px 0 0' }}>
              {/* Badge */}
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px 12px',
                  background: '#004CA5',
                  borderRadius: 9999,
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  lineHeight: '16px',
                  letterSpacing: 1.2,
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  width: 144.08,
                  height: 24,
                }}
              >
                Executive Search
              </span>

              {/* Section 2: Author */}
              <div style={{ width: 311.5, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#424752', margin: 0, width: 311.5, height: 20 }}>
                  Authored by
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: 311.5, height: 40 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#D8E2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#004CA5' }}>JD</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', width: 121, height: 40 }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, lineHeight: '24px', color: '#1B1C1C', height: 24 }}>Jane Doe</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#424752', height: 16 }}>Senior HR Consultant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Share Insight */}
            <div style={{ width: 311.5, borderTop: '1px solid #EAE8E7', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#737783', textTransform: 'uppercase', margin: 0, width: 311.5, height: 24 }}>
                SHARE INSIGHT
              </p>

              {/* Share Buttons */}
              <div style={{ width: 311.5, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Copy Link */}
                <button onClick={handleCopyLink} className="sidebar-share-btn" style={{ width: 247.68, height: 36 }}>
                  <div className="share-icon-box" style={{ width: 34, height: 36 }}>
                    {copied ? (
                      <span style={{ color: '#166534', fontSize: 14, fontWeight: 700 }}>✓</span>
                    ) : (
                      <img src={copyLinkIcon} alt="Copy Link" style={{ width: 18, height: 20 }} />
                    )}
                  </div>
                  <span className="share-text" style={{ width: 66, height: 20 }}>
                    {copied ? 'Copied' : 'Copy Link'}
                  </span>
                </button>

                {/* LinkedIn */}
                <button onClick={() => window.open('https://linkedin.com', '_blank')} className="sidebar-share-btn" style={{ width: 250.26, height: 36 }}>
                  <div className="share-icon-box" style={{ width: 36, height: 36 }}>
                    <img src={linkedinIcon} alt="LinkedIn" style={{ width: 20, height: 20 }} />
                  </div>
                  <span className="share-text" style={{ width: 56, height: 20 }}>
                    LinkedIn
                  </span>
                </button>

                {/* Newsletter */}
                <button className="sidebar-share-btn" style={{ width: 250.89, height: 32 }}>
                  <div className="share-icon-box" style={{ width: 36, height: 32 }}>
                    <img src={newsletterIcon} alt="Newsletter" style={{ width: 20, height: 16 }} />
                  </div>
                  <span className="share-text" style={{ width: 73, height: 20 }}>
                    Newsletter
                  </span>
                </button>
              </div>
            </div>

            {/* Section 4: Related Reading Box */}
            <div style={{ width: 311.5, background: '#F6F3F2', border: '1px solid #EAE8E7', borderRadius: 16, padding: '21px 24px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, lineHeight: '24px', color: '#004CA5', margin: 0, width: 261.5 }}>
                Related Reading
              </p>
            </div>

            {/* Section 5: Article Cards */}
            <div style={{ width: 312, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50 }}>
              {relatedArticles.map((article) => (
                <div key={article.title} className="article-card">
                  {/* Image */}
                  <div className="card-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                  {/* Text */}
                  <div style={{ width: 312, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#424752', margin: 0, width: 312, height: 20 }}>
                      {article.date} • {article.readTime}
                    </p>
                    <h4 className="card-title" style={{ width: 312, height: 56 }}>
                      {article.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Central Article Body */}
        <div
          className="blog-article-body"
          style={{
            position: 'absolute',
            left: 396.5,
            right: 61,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            height: 2579.8,
          }}
        >
          {/* Header */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Breadcrumbs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 20 }}>
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#424752' }}>April 11, 2026</span>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C3C6D4', flexShrink: 0 }} />
              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#424752' }}>8 min read</span>
            </div>

            {/* Title */}
            <h1 className="blog-article-body h1" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 56, lineHeight: '70px', color: '#004CA5', margin: 0, maxWidth: 896 }}>
              Navigating Leadership Transitions in Fast-Growing Tech Firms
            </h1>

            {/* Intro */}
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#424752', margin: 0, maxWidth: 768, textAlign: 'left', whiteSpace: 'normal' }}>
              As tech startups move from seed funding to scale-up phases, the leadership requirements shift dramatically. Identifying "transitional talent"—leaders who can navigate the chaos of growth while building sustainable systems—is the primary challenge for modern executive search.
            </p>
          </div>

          {/* Hero Image */}
          <div style={{ width: '100%', filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.04))', borderRadius: 24, overflow: 'hidden' }}>
            <img src={heroImg} alt="HR Strategy Meeting" style={{ width: '100%', height: 445.8, objectFit: 'cover' }} />
          </div>

          {/* Article Body */}
          <div style={{ width: 768, maxWidth: 768, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
            {/* Opening paragraph */}
            <div style={{ width: '100%' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', margin: 0, maxWidth: 768, textAlign: 'left', whiteSpace: 'normal' }}>
                The transition from a founding team to a professionalized leadership tier is often the most precarious period for a fast-growing tech firm. Cultural erosion, process friction, and loss of momentum are common pitfalls that occur when leadership growth fails to keep pace with operational scaling.
              </p>
            </div>

            {/* H2: The Cultural Fit Paradox */}
            <div style={{ width: '100%', paddingTop: 16 }}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '36px', color: '#004CA5', margin: 0, maxWidth: 768 }}>
                The Cultural Fit Paradox
              </h2>
            </div>

            {/* Paragraph + Quote container */}
            <div style={{ width: '100%', paddingBottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', margin: 0, maxWidth: 768, textAlign: 'left', whiteSpace: 'normal' }}>
                In the early days of a startup, "culture fit" often means shared interests and late-night coding sessions. However, as a firm grows, culture fit must evolve into "culture add." This requires leaders who don't just mimic the existing environment but bring the professional maturity needed to stabilize it. Executive search in this domain isn't just about matching resumes; it's about identifying individuals who can translate founder vision into scalable corporate strategy without extinguishing the entrepreneurial spark.
              </p>

              {/* Executive Insight Pull Quote */}
              <div style={{ width: 768, maxWidth: 768, marginTop: 16, padding: '0 32px 32px', filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.04))', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
                  <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#FFFFFF', margin: 0 }}>
                    Executive Insight:
                  </h3>
                  <div style={{ width: '100%', opacity: 0.9 }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', fontStyle: 'italic', color: '#424752', margin: 0, textAlign: 'left', whiteSpace: 'normal' }}>
                      "The best transitional leaders act as a bridge between the 'move fast and break things' mentality and the 'build to last' infrastructure required for IPO readiness."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* H2: Common Grid Structures */}
            <div style={{ width: '100%', paddingTop: 32 }}>
              <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '36px', color: '#004CA5', margin: 0, maxWidth: 768 }}>
                Common Grid Structures
              </h2>
            </div>

            {/* Paragraph */}
            <div style={{ width: '100%' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', margin: 0, maxWidth: 768, textAlign: 'left', whiteSpace: 'normal' }}>
                Understanding how to structure an organization during hyper-growth is critical. Much like a UI grid provides a framework for design, an organizational grid provides a framework for communication and accountability. We identify three primary structures used in modern tech environments:
              </p>
            </div>

            {/* Bento Grid */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', padding: '24px 0 0', gap: 24, width: 768, height: 358 }}>
              {/* Columnar */}
              <div style={{ width: 240, height: 314, background: '#FFFFFF', border: '1px solid #F2F2F2', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 16, padding: '24px 24px 48px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, boxSizing: 'border-box', order: 0, flexGrow: 1 }}>
                <div style={{ width: 48, height: 48, background: 'rgba(0,76,165,0.1)', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, order: 0 }}>
                  <img src={columnarIcon} alt="Columnar icon" style={{ width: 17.98, height: 14, objectFit: 'contain' }} />
                </div>
                <div style={{ width: 190, height: 36, padding: '8px 0 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', order: 1, alignSelf: 'stretch', flexGrow: 0 }}>
                  <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 18, lineHeight: '28px', color: '#1B1C1C', margin: 0, width: 190, height: 28, display: 'flex', alignItems: 'center' }}>
                    Columnar
                  </h4>
                </div>
                <div style={{ width: 190, height: 140, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, order: 2, alignSelf: 'stretch', flexGrow: 0 }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#424752', margin: 0, width: 190, height: 140, display: 'flex', alignItems: 'center' }}>
                    Traditional vertical reporting lines. Best for clear accountability and functional specialization in departments like Finance or Legal.
                  </p>
                </div>
              </div>

              {/* Modular */}
              <div style={{ width: 240, height: 334, background: '#FFFFFF', border: '1px solid #F2F2F2', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 16, padding: '24px 24px 48px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, boxSizing: 'border-box', order: 1, flexGrow: 1 }}>
                <div style={{ width: 48, height: 48, background: 'rgba(0,76,165,0.1)', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, order: 0 }}>
                  <img src={modularIcon} alt="Modular icon" style={{ width: 18, height: 18, objectFit: 'contain' }} />
                </div>
                <div style={{ width: 190, height: 36, padding: '8px 0 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', order: 1, alignSelf: 'stretch', flexGrow: 0 }}>
                  <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 18, lineHeight: '28px', color: '#1B1C1C', margin: 0, width: 190, height: 28, display: 'flex', alignItems: 'center' }}>
                    Modular
                  </h4>
                </div>
                <div style={{ width: 190, height: 160, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, order: 2, alignSelf: 'stretch', flexGrow: 0 }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#424752', margin: 0, width: 190, height: 160, display: 'flex', alignItems: 'center' }}>
                    Cross-functional "squads" or "tribes." Common in product development, allowing for rapid iteration and autonomy across silos.
                  </p>
                </div>
              </div>

              {/* Hierarchical */}
              <div style={{ width: 240, height: 314, background: '#FFFFFF', border: '1px solid #F2F2F2', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 16, padding: '24px 24px 48px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, boxSizing: 'border-box', order: 2, flexGrow: 1 }}>
                <div style={{ width: 48, height: 48, background: 'rgba(0,76,165,0.1)', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, order: 0 }}>
                  <img src={hierarchicalIcon} alt="Hierarchical icon" style={{ width: 20, height: 18, objectFit: 'contain' }} />
                </div>
                <div style={{ width: 190, height: 36, padding: '8px 0 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', order: 1, alignSelf: 'stretch', flexGrow: 0 }}>
                  <h4 style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 18, lineHeight: '28px', color: '#1B1C1C', margin: 0, width: 190, height: 28, display: 'flex', alignItems: 'center' }}>
                    Hierarchical
                  </h4>
                </div>
                <div style={{ width: 190, height: 140, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, order: 2, alignSelf: 'stretch', flexGrow: 0 }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#424752', margin: 0, width: 190, height: 140, display: 'flex', alignItems: 'center' }}>
                    Content organized by importance. Used in executive reporting where strategic priorities dictate resource allocation over fixed structures.
                  </p>
                </div>
              </div>
            </div>

            {/* Paragraph after bento */}
            <div style={{ width: '100%', paddingTop: 24 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', margin: 0, maxWidth: 768, textAlign: 'left', whiteSpace: 'normal' }}>
                When scaling, firms often start with a flat (Columnar) structure and must pivot toward a Modular or Matrix approach to maintain agility. The role of HR consultancy is to diagnose which "grid" best supports the current growth stage and to source the executive talent capable of managing that specific architecture.
              </p>
            </div>

            {/* H2: Identifying the Gap */}
            <div style={{ width: '100%', paddingTop: 16 }}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '36px', color: '#004CA5', margin: 0, maxWidth: 768 }}>
                Identifying the Gap
              </h2>
            </div>

            {/* Final paragraph */}
            <div style={{ width: '100%' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', margin: 0, maxWidth: 768, textAlign: 'left', whiteSpace: 'normal' }}>
                The gap is rarely one of technical skill. In our experience, leadership failures in tech firms usually stem from a lack of "emotional intelligence at scale." Can the leader manage 50 people with the same empathy they managed 5? This is where the Executive Search methodology must transcend traditional metrics and dive deep into behavioral psychology and organizational health markers.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: 8, paddingTop: 32, maxWidth: 768 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  background: '#F2F2F2',
                  borderRadius: 9999,
                  padding: '6px 16px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#424752' }}>
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for absolute layout */}
      <div style={{ height: 2200 }} />

      {/* Newsletter Section */}
      <section className="newsletter-section" style={{ position: 'relative', width: 1440, height: 437, background: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4px 304px 61px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '5.5px 0 0', gap: 24, width: 672, maxWidth: 672, height: 355 }}>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#003679', textAlign: 'center', width: 98.25, height: 16, margin: 0 }}>
            STAY INFORMED
          </p>
          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400, fontSize: 48, lineHeight: '48px', color: '#1B1C1C', textAlign: 'center', width: 641.05, height: 96, margin: 0, padding: '2.5px 0 0' }}>
            Get executive insights directly to your inbox
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#424752', textAlign: 'center', width: 606.22, height: 48, margin: 0 }}>
            Join over 2,500 HR leaders who receive our weekly briefing on talent strategy, market intelligence, and leadership best practices.
          </p>
          <div className="newsletter-form" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 16, width: 672, height: 59 }}>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your business email"
              style={{
                width: 473.48,
                height: 59,
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
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 1,
              }}
            />
            <button
              className="newsletter-btn"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '17px 40px',
                width: 182.52,
                height: 58,
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
                flex: 'none',
                order: 1,
                flexGrow: 0,
                isolation: 'isolate',
                position: 'relative',
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Subscribe Now</span>
            </button>
          </div>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#737783', textAlign: 'center', width: 368.88, height: 16, margin: 0, padding: '16px 0 0' }}>
            We respect your privacy. Read our <Link to="#" style={{ textDecoration: 'underline', color: '#004CA5' }}>Privacy Policy</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
