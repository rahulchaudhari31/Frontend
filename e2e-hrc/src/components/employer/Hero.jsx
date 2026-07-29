import React, { useState, useEffect } from 'react';
import defaultBackgroundImage from '../../assets/image/EMPLOYER BACKGROUND.jpg';
import { getEmployerHero } from '../../services/employer/employerHeroService';

const getImageUrl = (path) => {
  if (!path || path.trim() === "") return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"}${path}`;
};

export default function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchHeroData = async () => {
      try {
        const data = await getEmployerHero();
        if (mounted) {
          setHeroData(data);
        }
      } catch (error) {
        console.error("Failed to fetch employer hero data:", error);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    fetchHeroData();

    return () => {
      mounted = false;
    };
  }, []);

  if (isLoading) return null;

  const bgImage = heroData?.backgroundImage ? getImageUrl(heroData.backgroundImage) : defaultBackgroundImage;
  const title = heroData?.title || "Employer Recruitment";
  const description = heroData?.description || "Helping businesses hire the right talent.";

  return (
    <section
      className="employer-hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "491px",
        background: bgImage
          ? `linear-gradient(0deg, rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url('${bgImage}') center/cover no-repeat`
          : "linear-gradient(0deg, rgba(0,0,0,0.58), rgba(0,0,0,0.58)) #000",
        fontFamily: "'Inter', sans-serif",
        flexShrink: 0,
        display: "flex",
        paddingTop: "221px",
        paddingLeft: "73px",
        paddingRight: "20px",
        paddingBottom: "50px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "824px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {title && (
          <div
            style={{
              width: "100%",
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "60px",
              lineHeight: "1.1",
              letterSpacing: "0px",
              color: "#F39308",
              marginBottom: "0px",
            }}
          >
            {title}
          </div>
        )}

        {title && (
          <div
            style={{
              width: "289.64px",
              height: "5px",
              background: "#F39308",
              borderRadius: "5px",
              marginBottom: "12px",
              flexShrink: 0,
            }}
          />
        )}

        {description && (
          <div
            style={{
              width: "100%",
              maxWidth: "627px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "60px",
              lineHeight: "76.8px",
              letterSpacing: "0px",
              color: "#FFFFFF",
            }}
          >
            {description}
          </div>
        )}
      </div>
    </section>
  );
}
