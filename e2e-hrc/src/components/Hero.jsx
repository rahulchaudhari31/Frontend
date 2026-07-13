import heroImage from "../assets/image/image hero.jpg";
import { BadgeCheck, Users, ClipboardCheck, Globe2 } from "lucide-react";

const stats = [
  { icon: BadgeCheck,     value: "18+",  label: "Years Experience", color: "#1D4ED8" },
  { icon: Users,          value: "450+", label: "Clients Served",   color: "#F97316" },
  { icon: ClipboardCheck, value: "12K+", label: "Placements",       color: "#1D4ED8" },
  { icon: Globe2,         value: "4",    label: "Global Offices",   color: "#F97316" },
];

export default function Hero() {
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
          display: flex; flex-direction: row; align-items: center;
          gap: 64px; flex: 1; min-height: 0;
        }
        .hero-left {
          flex: 1; display: flex; flex-direction: column;
          justify-content: flex-start; gap: 20px; min-width: 0;
          max-width: 580px; padding-top: 10px;
        }
        .hero-badge {
          display: inline-flex; align-self: flex-start; white-space: nowrap;
          padding: 7px 18px; border-radius: 999px;
          border: 1.5px solid #F5A623; background: #FFF8EE;
          color: #F5A623; font-family: 'Poppins', sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .hero-h1 {
          margin: 0; display: flex; flex-direction: column;
          font-family: 'Poppins', sans-serif; font-weight: 800;
          font-size: 52px; line-height: 1.15;
          letter-spacing: -0.5px; color: #0F172A;
        }
        .hero-h1 .blue { color: #003679; display: block; line-height: 1.15; }
        .hero-h1 .orange { color: #F97316; display: block; line-height: 1.15; }
        .hero-p {
          margin: 0; font-family: 'Inter', sans-serif;
          font-size: 15px; font-weight: 400; line-height: 1.75;
          color: #64748B; max-width: 576px;
        }
        .hero-right-wrap {
          position: absolute; right: -64px; top: 0; bottom: 0;
          width: 695.87px; display: flex; align-items: flex-start;
          justify-content: flex-end;
        }
        .hero-overlay {
          position: absolute; width: 775.87px; height: 501px;
          border-radius: 100px 0px 0px 100px;
          background: #0036790D; top: 20px; right: -20px;
          z-index: 0; pointer-events: none;
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
          position: absolute; left: 50%; transform: translateX(-50%);
          bottom: 40px; width: 952px; height: 110px;
          box-sizing: border-box; display: flex; flex-direction: row;
          justify-content: center; align-items: center;
          padding: 32px; gap: 32px; isolation: isolate;
          background: #FFFFFF; border: 1px solid rgba(195,198,212,0.3);
          border-radius: 16px; z-index: 20;
          box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1);
        }
        .hero-stat-item {
          display: flex; flex-direction: row; align-items: center;
          gap: 16px; flex: 1 1 0;
        }
        .hero-stat-value {
          font-family: 'Hanken Grotesk', 'Poppins', sans-serif;
          font-weight: 700; font-size: 16px; line-height: 24px;
          color: #003679;
        }
        .hero-stat-label {
          font-family: 'Source Sans 3', 'Inter', sans-serif;
          font-weight: 400; font-size: 14px; line-height: 20px;
          color: #424752;
        }

        @media (max-width: 1200px) {
          .hero-sec { padding: 4px 32px 40px; min-height: auto; }
          .hero-right-wrap { width: 50%; right: 0; position: relative; }
          .hero-img-box { width: 100%; height: 380px; margin-top: 0; }
          .hero-overlay { display: none; }
          .hero-row { gap: 32px; }
          .hero-stats { position: static; transform: none; width: 100%; height: auto; margin-top: 24px; flex-wrap: wrap; padding: 24px; }
          .hero-h1 { font-size: 40px; }
          .hero-left { max-width: none; }
        }
        @media (max-width: 768px) {
          .hero-sec { padding: 20px 20px 0; flex: 1; min-height: 0; overflow: hidden; display: flex; flex-direction: column; }
          .hero-row { flex-direction: column; gap: 0; flex: 1; min-height: 0; }
          .hero-left { max-width: none; padding-top: 0; gap: 12px; }
          .hero-right-wrap { width: 100%; flex: 1; min-height: 0; position: relative; display: flex; flex-direction: column; overflow: hidden; border-radius: 16px; }
          .hero-img-box { width: 100%; height: auto; margin-top: 0; border-radius: 0; flex: 1; min-height: 0; }
          .hero-h1 { font-size: 32px; }
          .hero-p { font-size: 14px; margin-bottom: 0; }
          .hero-stats { position: static; transform: none; width: 100%; height: auto; margin-top: auto; flex-wrap: wrap; gap: 12px; padding: 16px; margin-bottom: 0; }
          .hero-stat-item { flex: 1 1 calc(50% - 6px); border-right: none !important; padding-right: 0 !important; }
          .hero-stat-value { font-size: 14px; }
          .hero-stat-label { font-size: 12px; }
        }
      `}</style>
      <section className="hero-sec">
        <div className="hero-row">
          {/* LEFT column */}
          <div className="hero-left">
            <span className="hero-badge">STRATEGIC â€¢ FLEXIBLE â€¢ GLOBAL</span>
            <h1 className="hero-h1">
              <span className="blue">Workforce Solutions<br />That Drive</span>
              <span className="orange">Business Growth</span>
            </h1>
            <p className="hero-p">
              At E2E Human Resource Consultancy, we provide end-to-end workforce
              solutions that help organisations attract, recruit, manage, and
              retain exceptional talent.
            </p>
          </div>

          {/* RIGHT column */}
          <div className="hero-right-wrap">
            <div className="hero-overlay" />
            <div className="hero-img-box">
              <img src={heroImage} alt="Team collaborating in a modern office" />
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div className="hero-stats">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className="hero-stat-item"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(195,198,212,0.3)' : 'none',
                paddingRight: i < stats.length - 1 ? '32px' : '0',
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <Icon size={28} color="#FDAB0C" strokeWidth={2} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
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
