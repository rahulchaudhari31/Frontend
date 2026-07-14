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
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
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
