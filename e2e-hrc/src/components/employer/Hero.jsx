import backgroundImage from '../../assets/image/EMPLOYER BACKGROUND.jpg';

export default function Hero() {

  return (
    <section
      className="employer-hero"
      style={{
        position: "relative",
        width: "100%",
        height: "491px",
        background: backgroundImage
          ? `linear-gradient(0deg, rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url(${backgroundImage}) center/cover no-repeat`
          : "linear-gradient(0deg, rgba(0,0,0,0.58), rgba(0,0,0,0.58)) #000",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "500px",
          maxWidth: "500px",
          height: "254.8px",
          left: "73px",
          top: "236px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div style={{ position: "relative", width: "824px", height: "254.8px" }}>
          <div
            style={{
              position: "absolute",
              width: "824px",
              height: "47px",
              left: "0px",
              top: "-15px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "60px",
              lineHeight: "46.8px",
              letterSpacing: "0px",
              color: "#F39308",
            }}
          >
            Employer Recruitment
          </div>

          <div
            style={{
              position: "absolute",
              width: "289.64px",
              height: "5px",
              left: "0px",
              top: "52px",
              background: "#F39308",
              borderRadius: "5px",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "627px",
              height: "159px",
              left: "1px",
              top: "68px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "60px",
              lineHeight: "76.8px",
              letterSpacing: "0px",
              color: "#FFFFFF",
            }}
          >
            Helping businesses hire the right talent.
          </div>
        </div>
      </div>
    </section>
  );
}
