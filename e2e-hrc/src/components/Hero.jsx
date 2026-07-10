import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/assets/image/image/image hero.jpg";
import { BadgeCheck, Users, ClipboardCheck, Globe2 } from "lucide-react";
import { getHeroData } from "../services/heroService";

const fallbackStats = [
  { icon: BadgeCheck,     value: "18+",  label: "Years Experience" },
  { icon: Users,          value: "450+", label: "Clients Served"   },
  { icon: ClipboardCheck, value: "12K+", label: "Placements"       },
  { icon: Globe2,         value: "4",    label: "Global Offices"   },
];

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await getHeroData();
        if (res && res.data) {
          setHeroData(res.data);
        }
      } catch {}
    };
    fetchHero();
  }, []);

  const stats = heroData?.stats
    ? heroData.stats.map((s, i) => ({
        icon: [BadgeCheck, Users, ClipboardCheck, Globe2][i % 4],
        value: s.value || s.label || "",
        label: s.label || "",
      }))
    : fallbackStats;

  const subtitle = heroData?.subtitle || "STRATEGIC • FLEXIBLE • GLOBAL";
  const title1 = heroData?.title?.split("\n")[0] || "Workforce Solutions That Drive";
  const title2 = heroData?.title?.split("\n")[1] || "Business Growth";
  const description = heroData?.description || "At E2E Human Resource Consultancy, we provide end-to-end workforce solutions that help organisations attract, recruit, manage, and retain exceptional talent.";
  const heroImg = heroData?.heroImage || heroImage;

  return (
    <>
      <style>{`
        .hero-sec {
          width: 100%; max-width: 1440px; margin: 0 auto;
          background: #FFFFFF; position: relative;
          padding: 4px 64px 40px; box-sizing: border-box;
          display: flex; flex-direction: column;
          min-height: 626px;
        }
        .hero-row {
          display: flex; flex-direction: row; justify-content: center; align-items: center;
          gap: 170px; width: 1200px; max-width: 100%; margin: -33px 0px;
        }
        .hero-left {
          display: flex; flex-direction: column; align-items: flex-start;
          gap: 32px; width: 752px; max-width: 100%; z-index: 1;
          padding-left: 24px;
        }
        .hero-badge {
          box-sizing: border-box;
          display: flex; flex-direction: row; align-items: center;
          padding: 8px 16px; width: 249.3px; height: 34px;
          background: rgba(253, 171, 12, 0.1);
          border: 1px solid rgba(253, 171, 12, 0.2);
          border-radius: 9999px;
        }
        .hero-badge-text {
          font-family: 'Hanken Grotesk', sans-serif;
          font-style: normal; font-weight: 700;
          font-size: 12px; line-height: 16px;
          letter-spacing: 1.2px; text-transform: uppercase;
          color: #F39308;
        }
        .hero-h1 {
          margin: 0; width: 752px; height: 180px;
          font-family: 'Inter', sans-serif;
          font-style: normal; font-weight: 800;
          font-size: 60px; line-height: 60px;
          letter-spacing: -0.96px; color: #004CA5;
          display: flex; align-items: center;
        }
        .hero-p {
          margin: 0; font-family: 'Source Sans 3', sans-serif;
          font-style: normal; font-weight: 400;
          font-size: 18px; line-height: 28px;
          color: #424752; max-width: 576px;
        }
        .hero-right-wrap {
          display: flex; flex-direction: row; justify-content: center; align-items: flex-start;
          width: 460px; height: 473px; z-index: 0;
        }
        .hero-img-box {
          width: 695.87px; height: 481px;
          border-radius: 100px 0px 0px 100px; overflow: hidden;
          position: relative; z-index: 1; margin-top: 30px; flex-shrink: 0;
        }
        .hero-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          object-position: center top; display: block;
        }
        .hero-stats {
          box-sizing: border-box;
          display: flex; flex-direction: row; justify-content: center; align-items: center;
          padding: 32px; gap: 32px; isolation: isolate;
          width: 952px; height: 110px;
          background: #FFFFFF;
          border: 1px solid rgba(195, 198, 212, 0.3);
          border-radius: 16px;
          position: absolute; left: 50%; transform: translateX(-50%);
          bottom: 40px; z-index: 20;
        }
        .hero-stats-shadow {
          position: absolute; left: 0; right: 0; top: 0; bottom: 0;
          background: rgba(255, 255, 255, 0.002);
          box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1);
          border-radius: 16px; z-index: 0;
        }
        .hero-stat-item {
          display: flex; flex-direction: row; align-items: center;
          padding: 0px; gap: 16px;
          width: 197.5px; height: 44px;
          flex: 1 1 0; z-index: 1;
        }
        .hero-stat-icon {
          display: flex; justify-content: center; align-items: center;
          width: 33px; height: 31.5px; background: #FDAB0C;
          border-radius: 4px; flex-shrink: 0;
        }
        .hero-stat-text {
          display: flex; flex-direction: column; align-items: flex-start;
          gap: 0px; width: 97.22px; height: 44px;
        }
        .hero-stat-value {
          font-family: 'Hanken Grotesk', sans-serif;
          font-style: normal; font-weight: 700;
          font-size: 16px; line-height: 24px;
          color: #003679;
        }
        .hero-stat-label {
          font-family: 'Source Sans 3', sans-serif;
          font-style: normal; font-weight: 400;
          font-size: 14px; line-height: 20px;
          color: #424752;
        }

        @media (max-width: 1200px) {
          .hero-sec { padding: 4px 32px 40px; min-height: auto; }
          .hero-row { width: 100%; gap: 64px; flex-direction: column; }
          .hero-left { width: 100%; max-width: none; }
          .hero-h1 { width: 100%; font-size: 40px; line-height: 44px; height: auto; }
          .hero-right-wrap { width: 100%; height: auto; }
          .hero-img-box { width: 100%; height: 380px; margin-top: 0; }
          .hero-stats { position: static; transform: none; width: 100%; height: auto; margin-top: 24px; flex-wrap: wrap; padding: 24px; }
        }
        @media (max-width: 768px) {
          .hero-sec { padding: 24px 20px 32px; }
          .hero-row { gap: 24px; }
          .hero-right-wrap { width: 100%; }
          .hero-img-box { height: 260px; border-radius: 16px; }
          .hero-h1 { font-size: 32px; line-height: 36px; }
          .hero-p { font-size: 16px; }
          .hero-stats { gap: 16px; padding: 20px 16px; }
          .hero-stat-item { flex: 1 1 calc(50% - 8px); }
          .hero-stat-value { font-size: 14px; }
          .hero-stat-label { font-size: 12px; }
        }
      `}</style>
      <section className="hero-sec">
        <div className="hero-row">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-text">{subtitle}</span>
            </div>
            <h1 className="hero-h1">
              <span style={{ color: '#004CA5' }}>Workforce Solutions</span><br />
              <span style={{ color: '#004CA5' }}>That Drive</span><br />
              <span style={{ color: '#F39308' }}>{title2}</span>
            </h1>
            <p className="hero-p">{description}</p>
          </div>
          <div className="hero-right-wrap">
            <div className="hero-img-box">
              <img src={heroImg} alt="Team collaborating in a modern office" />
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stats-shadow" />
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={label} className="hero-stat-item">
              <div className="hero-stat-icon">
                <Icon size={20} color="#FFFFFF" strokeWidth={2} />
              </div>
              <div className="hero-stat-text">
                <span className="hero-stat-value">{value}</span>
                <span className="hero-stat-label">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
