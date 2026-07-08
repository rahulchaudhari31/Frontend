import { FiCalendar, FiClock, FiTrendingUp, FiChevronRight, FiFile } from 'react-icons/fi';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

import bannerBg from '../assets/assets/our blog images/backround our blog.jpg';
import heroBg from '../assets/assets/our blog images/background every employer.jpg';
import executiveImg from '../assets/assets/our blog images/executive search.jpg';
import complianceImg from '../assets/assets/our blog images/compliance.png';
import cultureImg from '../assets/assets/our blog images/culture.jpg';
import datadrivenImg from '../assets/assets/our blog images/requirement.jpg';
import trendingIcon from '../assets/assets/icon trending now/trendinng now.png';
import expertIcon from '../assets/assets/icon trending now/expert categories.png';

const articles = [
  {
    tag: 'Executive Search',
    title: 'Navigating Leadership Transitions in Fast-Growing Tech Firms',
    desc: 'A comprehensive guide to managing executive turnover and ensuring smooth transitions during periods of rapid company growth.',
    date: 'April 8, 2026',
    readTime: '5 min read',
    image: executiveImg,
  },
  {
    tag: 'Compliance',
    title: '2026 Employment Law Updates: What HR Teams Need to Know',
    desc: 'Stay compliant with our breakdown of the latest employment regulations affecting businesses across the UK and EMEA regions.',
    date: 'April 3, 2026',
    readTime: '6 min read',
    image: complianceImg,
  },
  {
    tag: 'Culture',
    title: 'Building Remote-First Cultures That Actually Work',
    desc: 'Strategies for maintaining team cohesion, productivity, and wellbeing when your workforce is distributed across time zones.',
    date: 'March 29, 2026',
    readTime: '7 min read',
    image: cultureImg,
  },
  {
    tag: 'Recruitment',
    title: 'Data-Driven Hiring: Metrics That Truly Matter',
    desc: 'Move beyond time-to-fill and cost-per-hire. Discover the new metrics that indicate true recruitment success.',
    date: 'March 21, 2026',
    readTime: '4 min read',
    image: datadrivenImg,
  },
];

const categories = [
  'Recruitment Strategy',
  'Executive Search',
  'HR Compliance',
  'Talent Analytics',
  'Leadership Development',
];

export default function Blogs() {
  return (
    <>
      <style>{`
        .hero-card-img {
          width: 874.66px;
          height: 400px;
          flex-shrink: 0;
          flex: none;
          background: linear-gradient(to right, #F6F3F2 0%, #F6F3F2 10%, transparent 40%), url(${heroBg});
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
        .banner-overlay {
          background: url(${bannerBg}) center center / cover no-repeat;
          opacity: 0.5;
        }
        @media (max-width: 1024px) {
          .hero-card-img {
            width: 100%;
            height: 250px;
            flex-shrink: 0;
            background: linear-gradient(to bottom, #F6F3F2 0%, transparent 30%), url(${heroBg});
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

      <div className="min-h-screen bg-white overflow-x-hidden">
        <AnnouncementBar />
        <Navbar variant="blog" />

        {/* ====== BLOG BANNER ====== */}
        <section className="relative h-[201px] bg-black overflow-hidden flex items-center border-t border-[#EAE8E7]">
          <div className="absolute inset-0 banner-overlay" />
          <div className="relative z-10 pl-16 max-sm:pl-6">
            <h1 className="font-heading font-extrabold text-6xl text-white max-sm:text-3xl max-md:text-4xl">
              From Our <span className="text-[#F39308]">Blog</span>
            </h1>
          </div>
        </section>

        {/* ====== HERO FEATURED ARTICLE ====== */}
        <section className="px-16 py-16 max-sm:px-4 max-sm:py-6 max-md:px-6 max-md:py-8">
          <div className="flex max-lg:flex-col rounded-3xl min-h-[400px] bg-[#F6F3F2] overflow-hidden">
            <div className="flex-1 max-lg:w-full p-12 max-sm:p-6 max-md:p-8 flex flex-col justify-center">
              <p className="font-body text-sm text-[#424752] mb-4">2 days ago &bull; 8 min read</p>
              <h2 className="font-heading text-[36px] leading-[40px] tracking-normal max-sm:text-2xl max-sm:leading-8 text-[#1B1C1C] mb-5 heading-overlap">
                Top 10 Hiring Trends Every Employer<br />
                Should Know in 2026
              </h2>
              <p className="font-body text-base leading-6 text-[#424752] desc-overlap">
                As the global talent landscape evolves, staying ahead of recruitment trends<br />
                is crucial. From AI-driven candidate screening to shifting expectations<br />
                around flexible work, discover what will shape the future of hiring.
              </p>
            </div>
            <div className="hero-card-img max-lg:hidden" role="img" aria-label="Hiring trends team meeting" />
          </div>
        </section>

        {/* ====== POSTS + SIDEBAR ====== */}
        <section className="bg-[#F7F9FB] px-16 py-20 max-sm:px-4 max-sm:py-10 max-md:px-6 max-md:py-12">
          <div className="flex gap-10 max-lg:flex-col max-w-[1440px] mx-auto">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-8 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                <h2 className="font-heading font-semibold text-3xl max-sm:text-2xl text-[#1B1C1C]">
                  All blog posts
                </h2>
                <a href="#" className="font-['Hanken_Grotesk',sans-serif] text-base text-[#003679]">
                  View All &rarr;
                </a>
              </div>

              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
                {articles.map((item) => (
                  <article
                    key={item.title}
                    className="bg-white border border-[#EAE8E7] rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-white/85 backdrop-blur rounded-full font-['Hanken_Grotesk',sans-serif] font-bold text-[11px] tracking-[0.96px] uppercase text-[#1B1C1C]">
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading text-xl leading-7 text-[#1B1C1C] mb-3">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm leading-5 text-[#424752] mb-5 flex-1">
                        {item.desc}
                      </p>
                      <div className="border-t border-[#EAE8E7] pt-4 flex items-center gap-4 font-body text-xs text-[#424752]">
                        <span className="flex items-center gap-1.5">
                          <FiCalendar size={14} aria-hidden="true" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FiClock size={14} aria-hidden="true" />
                          {item.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="w-[427px] shrink-0 max-lg:w-full flex flex-col gap-8">
              <div className="bg-white border border-[#EAE8E7] rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-2.5 mb-5">
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
                <div className="flex items-center gap-2.5 mb-5">
                  <img src={expertIcon} alt="Expert Categories" style={{ width: 19, height: 20 }} />
                  <h3 className="font-heading font-semibold text-xl text-[#1B1C1C]">Expert Categories</h3>
                </div>
                <p className="font-body text-sm leading-5 text-[#424752] mb-4">
                  Explore deeper insights across our core consultancy pillars.
                </p>
                <div className="flex flex-col">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className="flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer transition-colors duration-150 hover:bg-[#F7F9FB]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#F39308] shrink-0" />
                      <span className="flex-1 font-['Hanken_Grotesk',sans-serif] text-sm text-[#1B1C1C]">
                        {cat}
                      </span>
                      <FiChevronRight size={16} className="text-[#94A3B8]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#EAE8E7] rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-2.5 mb-5">
                  <FiFile size={20} className="text-[#003679]" />
                  <h3 className="font-heading font-semibold text-xl text-[#1B1C1C]">Industry Resources</h3>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <div className="w-12 h-12 bg-[rgba(0,54,121,0.1)] rounded-md flex items-center justify-center shrink-0">
                    <FiFile size={22} className="text-[#003679]" />
                  </div>
                  <div>
                    <p className="font-['Hanken_Grotesk',sans-serif] text-sm text-[#1B1C1C]">
                      2026 Tech Salary Guide
                    </p>
                    <p className="font-body text-xs text-[#94A3B8]">PDF Guide</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
