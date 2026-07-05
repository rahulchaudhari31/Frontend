import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import mapImage from '../assets/assets/image/image/map.png';
import footerLogo from '../assets/assets/image/image/logo.png';

const navLinks = ['Home', 'About Us', 'Our Services', 'Latest Jobs', 'Expert Blogs'];

export default function Footer() {
  const [ref, visible] = useScrollReveal();

  return (
    <footer
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '96px 98px 48px',
        gap: '80px',
        width: '100%',
        height: '548px',
        background: '#000000',
        color: '#ffffff',
        boxSizing: 'border-box',
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '64px',
        width: '100%',
        maxWidth: '1244px',
        alignSelf: 'center',
      }}>
        {/* Col 1 — Brand */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '31.1px',
          width: '255px',
        }}>
          <img
            src={footerLogo}
            alt="E2E HRC Logo"
            style={{
              width: '255px',
              height: '96.43px',
              opacity: 1,
              objectFit: 'contain',
            }}
          />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px 0px 0.875px',
            width: '255px',
          }}>
            <p style={{
              width: '255px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '23px',
              color: '#DBEAFE',
              margin: 0,
            }}>
              Connecting exceptional talent with exceptional businesses across the UK, Europe,
              South Asia, and the GCC since 2007.
            </p>
          </div>
        </div>

        {/* Col 2 — UK Head Office */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '32px',
          width: '255px',
        }}>
          <h3 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '28px',
            letterSpacing: '1.8px',
            textTransform: 'uppercase',
            color: '#F39308',
            margin: 0,
            width: '255px',
          }}>
            UK Head Office
          </h3>
          <address style={{
            fontStyle: 'normal',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: '255px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'flex-start' }}>
              <FiMapPin size={16} style={{ color: '#F39308', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#DBEAFE',
              }}>
                Unit 2, 1204B Stratford Road, Hall Green, Birmingham, B28 8HN, UK
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
              <FiPhone size={18} style={{ color: '#F39308', flexShrink: 0 }} aria-hidden="true" />
              <a href="tel:+441217782400" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#DBEAFE',
                textDecoration: 'none',
              }}>
                +44 (0) 121 778 2400
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
              <FiMail size={20} style={{ color: '#F39308', flexShrink: 0 }} aria-hidden="true" />
              <a href="mailto:info@e2ehrc.co.uk" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#DBEAFE',
                textDecoration: 'none',
              }}>
                info@e2ehrc.co.uk
              </a>
            </div>
          </address>
        </div>

        {/* Col 3 — Navigation */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '32px',
          width: '255px',
        }}>
          <h3 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '28px',
            letterSpacing: '1.8px',
            textTransform: 'uppercase',
            color: '#F39308',
            margin: 0,
            width: '255px',
          }}>
            Navigation
          </h3>
          <nav aria-label="Footer navigation">
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '255px',
            }}>
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#DBEAFE',
                    textDecoration: 'none',
                  }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Col 4 — Office Locations */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '32px',
          width: '255px',
        }}>
          <h3 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '28px',
            letterSpacing: '1.8px',
            textTransform: 'uppercase',
            color: '#F39308',
            margin: 0,
            width: '255px',
          }}>
            Our Office Locations
          </h3>
          <img
            src={mapImage}
            alt="Office locations map"
            style={{
              width: '255px',
              height: '210px',
              opacity: 1,
            }}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        width: '100%',
        maxWidth: '1244px',
        alignSelf: 'center',
        paddingTop: '48px',
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          lineHeight: '16px',
          textAlign: 'center',
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          color: 'rgba(191, 219, 254, 0.6)',
          margin: 0,
        }}>
          Copyright &copy; 2024 by E2E Human Resource Consultancy Ltd | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
