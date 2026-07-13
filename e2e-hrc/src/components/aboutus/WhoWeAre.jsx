import office1 from "../../assets/image/office 1.png";

const WhoWeAre = () => {
  const title = "Who We Are";
  const description1 = "Established in 2007, E2E Human Resource Consultancy has evolved from a boutique agency into a premier global recruitment powerhouse. We specialize in identifying, attracting, and securing top-tier talent for organizations that demand excellence.";
  const description2 = "Our approach is deeply consultative. We don't just fill vacancies; we analyze workforce requirements, understand corporate cultures, and deliver talent solutions that drive measurable business outcomes. With deep multi-sector expertise ranging from Engineering to Healthcare, our consultants operate as an extension of your own internal teams.";
  const description3 = "In an era of automated hiring, we remain staunch advocates for the human element\u2014balancing cutting-edge sourcing technology with nuanced human judgment to create perfect professional alignments.";
  const image = office1;
  const experienceYears = "15+";
  const experienceLabel = "Years of Excellence";

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "66px 113.5px 40px",
        background: "#FFFFFF",
        isolation: "isolate",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "128px",
          height: "128px",
          right: "-20px",
          top: "15px",
          background: "#F39308",
          opacity: 0.2,
          borderRadius: "9999px",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          fontFamily: "Inter, sans-serif",
          fontWeight: 900,
          fontSize: "400px",
          lineHeight: "1",
          color: "rgba(236,238,240,0.3)",
          right: "80px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        HR
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "60px",
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            minWidth: 0,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "36px",
              lineHeight: "56px",
              letterSpacing: "-0.48px",
              color: "#191C1E",
            }}
          >
            {title}
          </h2>

          <div style={{ width: "64px", height: "4px", background: "#00458D" }} />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              width: "100%",
              marginTop: "8px",
            }}
          >
            <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#424752" }}>
              {description1}
            </p>
            <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#424752" }}>
              {description2}
            </p>
            <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#424752" }}>
              {description3}
            </p>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "593px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "593px",
              height: "432px",
              boxSizing: "border-box",
              background: "rgba(255,255,255,0.002)",
              border: "1px solid rgba(194,198,212,0.2)",
              boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
              borderRadius: "24px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {image ? (
              <img src={image} alt="Who We Are" style={{ width: "591px", height: "430px", objectFit: "cover", display: "block" }} />
            ) : (
              <div style={{ width: "591px", height: "430px", background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)" }} />
            )}
          </div>

          <div
            style={{
              position: "absolute",
              width: "219.55px",
              height: "130px",
              left: "-32px",
              bottom: "-32px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px",
              gap: "4px",
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(226,232,240,0.8)",
              boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
              backdropFilter: "blur(6px)",
              borderRadius: "24px",
              zIndex: 1,
            }}
          >
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "40px", display: "flex", alignItems: "center", color: "#00458D" }}>
              {experienceYears}
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", display: "flex", alignItems: "center", letterSpacing: "0.7px", textTransform: "uppercase", color: "#424752" }}>
              {experienceLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
