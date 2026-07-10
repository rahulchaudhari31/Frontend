import heroImage from "../../assets/assets/images/workforce-hero.png";
import { FiAward, FiUsers, FiCheckCircle, FiGlobe } from "react-icons/fi";
import styles from "./WorkforceHeroSection.module.css";

const stats = [
  { icon: FiAward,       value: "18+",  label: "Years Experience" },
  { icon: FiUsers,       value: "450+", label: "Clients Served"   },
  { icon: FiCheckCircle, value: "12K+", label: "Placements"       },
  { icon: FiGlobe,       value: "4",    label: "Global Offices"   },
];

export default function WorkforceHeroSection() {
  return (
    <div className={styles.sectionWrapper}>
      <section
        className={styles.section}
        aria-label="Workforce Solutions Hero"
        style={{ marginTop: '0px' }}
      >
        {/* ── Two-column hero row ── */}
        <div className={styles.hero}>

          {/* LEFT */}
          <div className={styles.left}>
            <span className={styles.badge}>
              STRATEGIC • FLEXIBLE • GLOBAL
            </span>

            <h1 className={styles.heading}>
              <span className={styles.headingBlue}>
                Workforce Solutions<br />That Drive
              </span>
              <br />
              <span className={styles.headingOrange}>Business Growth</span>
            </h1>

            <p className={styles.body}>
              At E2E Human Resource Consultancy, we provide end-to-end workforce
              solutions that help organisations attract, recruit, manage, and retain
              exceptional talent.
            </p>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <img
              src={heroImage}
              alt="E2E HRC team collaborating in a modern office"
              className={styles.heroImage}
            />
          </div>

        </div>

        {/* ── Stats card ── */}
        <div className={styles.statsCard} role="list" aria-label="Company statistics">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className={styles.statItem} role="listitem">
              <span className={styles.statIcon} aria-hidden="true">
                <Icon size={22} />
              </span>
              <strong className={styles.statValue}>{value}</strong>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
