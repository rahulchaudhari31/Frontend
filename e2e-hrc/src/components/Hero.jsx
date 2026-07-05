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
              fontFamily: "'Poppins', sans-serif",
              fontSize: '52px',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.5px',
              color: '#0F172A',
            }}
          >
            Workforce Solutions
            <br />
            That Drive
            <br />
            <span style={{ color: '#F97316' }}>Business Growth</span>
          </h1>

          {/* Paragraph */}
          <p
            style={{
              margin: 0,
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.75,
              color: '#64748B',
              maxWidth: '480px',
            }}
          >
            At E2E Human Resource Consultancy, we provide end-to-end workforce
            solutions that help organisations attract, recruit, manage, and
            retain exceptional talent.
          </p>
        </div>

        {/* RIGHT column — image */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            paddingBottom: '72px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
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

      {/* Stats card — anchored to bottom, full width */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '64px',
          right: '64px',
          background: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 8px 40px rgba(15, 42, 82, 0.12)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          padding: '20px 32px',
          boxSizing: 'border-box',
          zIndex: 10,
        }}
      >
        {stats.map(({ icon: Icon, value, label, color }, i) => (
          <div
            key={label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRight: i < stats.length - 1 ? '1px solid #E8EDF3' : 'none',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#FFF3DC',
                marginBottom: '2px',
              }}
            >
              <Icon size={20} color={color} strokeWidth={2.2} />
            </span>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '24px',
                fontWeight: 700,
                color: '#0F172A',
                lineHeight: 1,
              }}
            >
              {value}
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                fontWeight: 400,
                color: '#64748B',
                lineHeight: 1.4,
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
