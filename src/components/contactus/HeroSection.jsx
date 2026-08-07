import heroBg from '../../assets/about us images/about us background.jpg';

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '515px',
        padding: '55px 64px',
        borderTop: '1px solid #EAE8E7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="hero-bg-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
        }}
      />
      <h1
        className="hero-heading"
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: '60px',
          lineHeight: '48px',
          color: '#FFFFFF',
          margin: 0,
          marginBottom: '60px',
        }}
      >
        Connect With <span style={{ color: '#F39308' }}>E2E HRC</span>
      </h1>
    </section>
  );
}
