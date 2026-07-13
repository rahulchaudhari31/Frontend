import heroImage from "../../assets/image/image hero.jpg";
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
      >
        <div className={styles.container}>
          <div className={styles.innerContainer}>

            {/* LEFT — badge + heading + body */}
            <div className={styles.leftText}>
              <div className={styles.leftBg} />
              <span className={styles.badge}>
                STRATEGIC • FLEXIBLE • GLOBAL
              </span>
              <h1 className={styles.heading}>
                Workforce Solutions That Drive Business Growth
              </h1>
              <p className={styles.body}>
                At E2E Human Resource Consultancy, we provide end-to-end workforce
                solutions that help organisations attract, recruit, manage, and retain
                exceptional talent.
              </p>
            </div>

            {/* RIGHT — image + overlay */}
            <div className={styles.leftImage}>
              <div className={styles.imageWrapper}>
                <div className={styles.overlay} />
                <img
                  src={heroImage}
                  alt="E2E HRC team collaborating in a modern office"
                  className={styles.heroImage}
                />
              </div>
            </div>

          </div>

          {/* Stats card */}
          <div className={styles.statsCard} role="list" aria-label="Company statistics">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className={styles.statItem} role="listitem">
                <span className={styles.statIcon} aria-hidden="true">
                  <Icon size={18} />
                </span>
                <div className={styles.statText}>
                  <strong className={styles.statValue}>{value}</strong>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
