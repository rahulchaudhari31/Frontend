import React, { useEffect, useState } from "react";
import heroFallbackImage from "../../assets/image/image hero.jpg";
import { FiAward, FiUsers, FiCheckCircle, FiGlobe } from "react-icons/fi";
import styles from "./WorkforceHeroSection.module.css";
import { getWorkforceHero } from "../../services/workforceSolution/workforceHeroService";

const getImageUrl = (path) => {
  if (!path || typeof path !== "string" || path.trim() === "") return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

const DEFAULT_STATS = [
  { icon: FiAward,       value: "18+",  label: "Years Experience" },
  { icon: FiUsers,       value: "450+", label: "Clients Served"   },
  { icon: FiCheckCircle, value: "12K+", label: "Placements"       },
  { icon: FiGlobe,       value: "4",    label: "Global Offices"   },
];

const STAT_ICONS = [FiAward, FiUsers, FiCheckCircle, FiGlobe];

export default function WorkforceHeroSection() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchHeroData = async () => {
      try {
        const response = await getWorkforceHero();
        if (mounted && response?.success && response?.data) {
          setHeroData(response.data);
        }
      } catch (error) {
        console.error("Failed to load Workforce Hero:", error);
      }
    };

    fetchHeroData();
    return () => {
      mounted = false;
    };
  }, []);

  const badgeText = heroData?.badgeText || "STRATEGIC • FLEXIBLE • GLOBAL";
  const titleLine1 = heroData?.titleLine1 || "Workforce Solutions\nThat Drive";
  const highlightedTitle = heroData?.highlightedTitle || "Business Growth";
  const description =
    heroData?.description ||
    "At E2E Human Resource Consultancy, we provide end-to-end workforce solutions that help organisations attract, recruit, manage, and retain exceptional talent.";

  const imageSrc = heroData?.heroImage
    ? getImageUrl(heroData.heroImage)
    : heroFallbackImage;

  const displayStats =
    Array.isArray(heroData?.stats) && heroData.stats.length > 0
      ? heroData.stats.map((stat, index) => ({
          icon: STAT_ICONS[index % STAT_ICONS.length] || FiAward,
          value: stat.value,
          label: stat.label,
        }))
      : DEFAULT_STATS;

  return (
    <div className={styles.sectionWrapper}>
      <section
        className={styles.section}
        aria-label="Our Workforce Solutions"
      >
        <div className={styles.container}>
          <div className={styles.innerContainer}>

            {/* LEFT — badge + heading + body */}
            <div className={styles.leftText}>
              <span className={styles.badge}>
                {badgeText}
              </span>
              <h1 className={styles.heading}>
                {titleLine1.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <span className={styles.headingAccent}>{highlightedTitle}</span>
              </h1>
              <p className={styles.body}>
                {description}
              </p>
            </div>

            {/* RIGHT — image + background shapes */}
            <div className={styles.rightImage}>
              <div className={styles.imageBgShape1} />
              <div className={styles.imageBgShape2}>
                <img
                  src={imageSrc}
                  alt="E2E HRC team collaborating in a modern office"
                  className={styles.heroImage}
                />
                <div className={styles.imageOverlay} />
              </div>
            </div>

          </div>

          {/* Stats card */}
          <div className={styles.statsCard} role="list" aria-label="Company statistics">
            {displayStats.map(({ icon: Icon, value, label }, idx) => (
              <div key={label || idx} className={styles.statItem} role="listitem">
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