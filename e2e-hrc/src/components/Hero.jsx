import heroImage from "../assets/assets/image/image/image hero.jpg";
import { BadgeCheck, Users, ClipboardCheck, Globe2 } from "lucide-react";

const stats = [
  { icon: BadgeCheck,     value: "18+",  label: "Years Experience", color: "#1D4ED8" },
  { icon: Users,          value: "450+", label: "Clients Served",   color: "#F97316" },
  { icon: ClipboardCheck, value: "12K+", label: "Placements",       color: "#1D4ED8" },
  { icon: Globe2,         value: "4",    label: "Global Offices",   color: "#F97316" },
];

export default function Hero() {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1440px',
        height: '626px',
        margin: '0 auto',
        background: '#FFFFFF',
        opacity: 1,
        paddingTop: '4px',
        paddingRight: '64px',
        paddingBottom: '40px',
        paddingLeft: '64px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Two-column row — gap: 64px */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '64px',
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* LEFT column */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
            minWidth: 0,
          }}
        >
          {/* Badge */}
          <span
            style={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
              padding: '7px 18px',
              borderRadius: '999px',
              border: '1.5px solid #F5A623',
              background: '#FFF8EE',
              color: '#F5A623',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            STRATEGIC • FLEXIBLE • GLOBAL
          </span>

          {/* H1 */}
          <h1
            style={{
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 0,
              width: '752px',
              height: '180px',
              flexShrink: 0,
              alignSelf: 'stretch',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '52px',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.5px',
              color: '#0F172A',
            }}
          >
            <span style={{ color: '#003679', display: 'block', lineHeight: 1.15 }}>Workforce Solutions</span>
            <span style={{ color: '#003679', display: 'block', lineHeight: 1.15 }}>That Drive</span>
            <span style={{ color: '#F97316', display: 'block', lineHeight: 1.15 }}>Business Growth</span>
          </h1>

          {/* Paragraph */}
          <p
            style={{
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 0,
              width: '576px',
              maxWidth: '576px',
              height: '84px',
              flexShrink: 0,
              alignSelf: 'stretch',
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.75,
              color: '#64748B',
            }}
          >
            At E2E Human Resource Consultancy, we provide end-to-end workforce
            solutions that help organisations attract, recruit, manage, and
            retain exceptional talent.
          </p>
        </div>

        {/* RIGHT column — image pinned to right edge */}
        <div
          style={{
            position: 'absolute',
            right: '-64px',
            top: 0,
            bottom: 0,
            width: '695.87px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
          }}
        >
          {/* Overlay — same shape, offset behind */}
          <div
            style={{
              position: 'absolute',
              width: '695.87px',
              height: '481px',
              borderTopLeftRadius: '100px',
              borderBottomLeftRadius: '100px',
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
              background: 'rgba(0, 54, 121, 0.05)',
              top: '70px',
              right: '-20px',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              width: '695.87px',
              height: '481px',
              borderTopLeftRadius: '100px',
              borderBottomLeftRadius: '100px',
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
              overflow: 'hidden',
              opacity: 1,
              flexShrink: 0,
              position: 'relative',
              zIndex: 1,
              marginTop: '30px',
            }}
          >
            <img
              src={heroImage}
              alt="Team collaborating in a modern office"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                filter: 'none',
                mixBlendMode: 'normal',
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats card */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '40px',
          width: '952px',
          height: '110px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '32px',
          gap: '32px',
          isolation: 'isolate',
          background: '#FFFFFF',
          border: '1px solid rgba(195, 198, 212, 0.3)',
          borderRadius: '16px',
          zIndex: 20,
          boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
        }}
      >
        {stats.map(({ icon: Icon, value, label, color }, i) => (
          <div
            key={label}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 0,
              gap: '16px',
              width: '197.5px',
              height: '44px',
              flex: '1 1 0',
              zIndex: i + 1,
              borderRight: i < stats.length - 1 ? '1px solid rgba(195,198,212,0.3)' : 'none',
              paddingRight: i < stats.length - 1 ? '32px' : '0',
            }}
          >
            {/* Icon */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexShrink: 0 }}>
              <Icon size={28} color="#FDAB0C" strokeWidth={2} />
            </div>

            {/* Text */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0 }}>
              <span
                style={{
                  fontFamily: "'Hanken Grotesk', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#003679',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontFamily: "'Source Sans 3', 'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#424752',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
