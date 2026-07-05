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
            width: '620px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
          }}
        >
          {/* Overlay shadow */}
          <div
            style={{
              position: 'absolute',
              left: '-80px',
              right: 0,
              top: '60px',
              bottom: '-30px',
              background: 'rgba(0, 54, 121, 0.05)',
              borderRadius: '100px 0px 0px 100px',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              width: '620px',
              height: '420px',
              borderTopLeftRadius: '100px',
              borderBottomLeftRadius: '100px',
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
              overflow: 'hidden',
              opacity: 1,
              flexShrink: 0,
              position: 'relative',
              zIndex: 1,
              marginTop: '50px',
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

      {/* Stats card — Figma overlay+shadow spec */}
      <div
        style={{
          position: 'absolute',
          left: '64px',
          right: '64px',
          bottom: '40px',
          background: 'rgba(255, 255, 255, 0.002)',
          boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
          borderRadius: '16px',
          zIndex: 20,
          flexGrow: 0,
          /* solid white behind the near-transparent bg */
          backdropFilter: 'none',
          overflow: 'hidden',
        }}
      >
        {/* Solid white fill layer so card is visible */}
        <div
          style={{
            position: 'absolute',
            left: 0, right: 0, top: 0, bottom: 0,
            background: '#FFFFFF',
            borderRadius: '16px',
            zIndex: 0,
          }}
        />

        {/* Stats grid */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            padding: '20px 32px',
            boxSizing: 'border-box',
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
      </div>

    </section>
  );
}
