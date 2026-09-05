import React, { useState, useEffect } from "react";
import { getMissionVisionData } from "../../services/about/missionVisionService";
import "../aboutus/mission and vision.css"

const getImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${import.meta.env.VITE_API_BASE_URL || ""}${path}`;
};

const MissionVision = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMissionVisionData();
        const items = response?.data || [];
        setData({
          mission: items.find((item) => item.type === "mission"),
          vision: items.find((item) => item.type === "vision"),
        });
      } catch (error) {
        console.error("Error fetching Mission Vision data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderIcon = (imgSrc, imgW, imgH, isVision) => {
    if (!imgSrc) return null;
    return (
      <div
        style={{
          position: "relative",
          width: "80px",
          height: "96px",
          paddingBottom: "16px",
          isolation: "isolate",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: "16px",
            background: "rgba(255, 185, 82, 0.3)",
            filter: "blur(12px)",
            borderRadius: "9999px",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            width: "80px",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: isVision ? "#f2f2f2" : "rgba(255, 255, 255, 0.1)",
            border: isVision ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: isVision ? "none" : "blur(6px)",
            borderRadius: isVision ? "14px" : "24px",
            zIndex: 1,
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          {isVision ? (
            <img
              src={getImageUrl(imgSrc)}
              alt=""
              style={{
                width: `${imgW}px`,
                height: `${imgH}px`,
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "64px",
                height: "64px",
                background: "#005CB9",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={getImageUrl(imgSrc)}
                alt=""
                style={{
                  width: `${imgW}px`,
                  height: `${imgH}px`,
                  objectFit: "contain",
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <section
        className="about-missionvision"
        style={{
          width: "100%",
          padding: "59px 113.5px 67px",
          background: "#FFFFFF",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          minHeight: "560px",
        }}
      >
        {/* Skeleton/Loading layout */}
        <div style={{ textAlign: "center", marginTop: "100px", color: "#666" }}>
          Loading...
        </div>
      </section>
    );
  }

  const mission = data?.mission || {};
  const vision = data?.vision || {};

  return (
    <section
      className="about-missionvision"
      style={{
        width: "100%",
        padding: "59px 113.5px 67px",
        background: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      {/* Optional Badge & Title rendering if backend provides them */}
      {(data?.badgeText || data?.sectionTitle) && (
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          {data?.badgeText && (
            <span
              style={{
                color: "#FFB952",
                fontWeight: 600,
                display: "block",
                marginBottom: "8px",
              }}
            >
              {data.badgeText}
            </span>
          )}
          {data?.sectionTitle && (
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 800,
                color: "#000000",
                margin: 0,
              }}
            >
              {data.sectionTitle}
            </h2>
          )}
          {data?.description && (
            <p
              style={{
                color: "#666",
                marginTop: "16px",
                maxWidth: "800px",
                margin: "16px auto 0",
              }}
            >
              {data.description}
            </p>
          )}
        </div>
      )}

      <div
        className="about-mv-container"
        style={{
          width: "1213px",
          maxWidth: "100%",
          height: "438.25px",
          position: "relative",
          margin: "0 auto",
        }}
      >
        {/* Mission Card */}
        <div
          className="about-mv-mission"
          style={{
            position: "absolute",
            height: "438.25px",
            left: "0px",
            right: "622.5px",
            top: "0px",
            background: "#FFFFFF",
            border: "1px solid rgba(194, 198, 212, 0.3)",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
            borderRadius: "24px",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "16px",
            boxSizing: "border-box",
            isolation: "isolate",
          }}
        >
          {mission.bgImage && (
            <div
              style={{
                position: "absolute",
                width: "164px",
                height: "164px",
                right: "0.5px",
                top: "1px",
                opacity: 0.05,
                padding: "32px",
                boxSizing: "border-box",
                zIndex: 1,
              }}
            >
              <img
                src={getImageUrl(mission.bgImage)}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            </div>
          )}

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "343px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              zIndex: 0,
            }}
          >
            {renderIcon(mission.icon, 18.75, 21.25, false)}
            <div
              style={{
                width: "48px",
                height: "4px",
                background: "#FFB952",
                borderRadius: "9999px",
              }}
            />
            <div
              style={{
                width: "100%",
                height: "48px",
                padding: "8px 0px 0px",
                boxSizing: "border-box",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "36px",
                  lineHeight: "40px",
                  letterSpacing: "-0.9px",
                  color: "#000000",
                }}
              >
                {mission.title}
              </h3>
            </div>
            <div style={{ width: "100%", flex: 1, overflowY: "auto", padding: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "29px",
                  color: "#000000",
                  wordWrap: "break-word",
                }}
              >
                {mission.description}
              </p>
            </div>
            {mission.cta && (
              <a
                href={mission.cta.link || "#"}
                style={{
                  color: "#005CB9",
                  fontWeight: 600,
                  textDecoration: "none",
                  marginTop: "16px",
                }}
              >
                {mission.cta.text}
              </a>
            )}
          </div>
        </div>

        {/* Vision Card */}
        
        <div
          className="about-mv-vision"
          style={{
            position: "absolute",
            height: "439px",
            left: "622.5px",
            right: "0px",
            top: "0px",
            background: "#00458D99",
            boxShadow:
              "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "343px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px",
              gap: "16px",
              zIndex: 1,
            }}
          >
            {renderIcon(vision.icon, 48, 48, true)}

            <div
              style={{
                width: "48px",
                height: "4px",
                background: "#FFB952",
                borderRadius: "9999px",
              }}
            />

            <div
              style={{
                width: "100%",
                height: "48px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "8px 0px 0px",
                boxSizing: "border-box",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  width: "100%",
                  height: "40px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "36px",
                  lineHeight: "40px",
                  letterSpacing: "-0.9px",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {vision.title}
              </h3>
            </div>

            <div
              style={{
                width: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                overflowY: "auto",
              }}
            >
              <p
                style={{
                  margin: 0,
                  width: "100%",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "29px",
                  color: "rgba(255, 255, 255, 0.9)",
                  wordWrap: "break-word",
                }}
              >
                {vision.description}
              </p>
            </div>
            {vision.cta && (
              <a
                href={vision.cta.link || "#"}
                style={{
                  color: "#FFB952",
                  fontWeight: 600,
                  textDecoration: "none",
                  marginTop: "16px",
                }}
              >
                {vision.cta.text}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Optional general CTA */}
      {data?.ctaButton && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <a
            href={data.ctaButton.link || "#"}
            style={{
              padding: "12px 24px",
              background: "#005CB9",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            {data.ctaButton.text}
          </a>
        </div>
      )}
    </section>
  );
};

export default MissionVision;
