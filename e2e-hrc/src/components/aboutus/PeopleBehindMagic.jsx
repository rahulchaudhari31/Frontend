import React, { useEffect, useState } from "react";
import { getPeopleBehindMagic } from '../../services/about/peopleBehindMagicApi';

const PeopleBehindMagic = () => {
  const [content, setContent] = useState({
    sectionTitle: '',
    sectionDescription: '',
    sectionDetails: '',
  });

  useEffect(() => {
    let isMounted = true;

    const fetchContent = async () => {
      try {
        const data = await getPeopleBehindMagic();

        if (isMounted && data) {
          setContent({
            sectionTitle: data.sectionTitle || '',
            sectionDescription: data.sectionDescription || '',
            sectionDetails: data.sectionDetails || '',
          });
        }
      } catch (error) {
        console.error('Failed to load People Behind Magic data:', error);
      }
    };

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      className="people-behind-magic"
      aria-labelledby="people-behind-magic-title"
      style={{
        width: "100%",
        padding: "72px 24px",
        background: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .people-behind-magic__content {
          width: 100%;
          max-width: 880px;
          margin: 0 auto;
          padding: 48px 56px;
          box-sizing: border-box;
          background: #ffffff;
          text-align: center;
        }

        .people-behind-magic__accent {
          width: 48px;
          height: 4px;
          margin: 0 auto 20px;
          background: #ffb952;
          border-radius: 9999px;
        }

        .people-behind-magic__title {
          margin: 0;
          color: #16213e;
          font-family: 'Poppins', sans-serif;
          font-size: 36px;
          font-weight: 800;
          line-height: 1.2;
        }

        .people-behind-magic__intro,
        .people-behind-magic__details {
          max-width: 720px;
          margin-right: auto;
          margin-left: auto;
          color: #424752;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.7;
        }

        .people-behind-magic__intro {
          margin-top: 24px;
          margin-bottom: 0;
          color: #16213e;
          font-weight: 600;
        }

        .people-behind-magic__details {
          margin-top: 20px;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .people-behind-magic {
            padding: 40px 16px !important;
          }

          .people-behind-magic__content {
            padding: 32px 24px;
            border-radius: 20px;
          }

          .people-behind-magic__title {
            font-size: 28px;
            line-height: 1.25;
          }

          .people-behind-magic__intro,
          .people-behind-magic__details {
            font-size: 15px;
            line-height: 1.65;
          }
        }
      `}</style>

      <div className="people-behind-magic__content">
        <div className="people-behind-magic__accent" aria-hidden="true" />
        <h2 id="people-behind-magic-title" className="people-behind-magic__title">
          {content.sectionTitle || ''}
        </h2>
        <p className="people-behind-magic__intro">
          {content.sectionDescription || ''}
        </p>
        <p className="people-behind-magic__details">
          {content.sectionDetails || ''}
        </p>
      </div>
    </section>
  );
};

export default PeopleBehindMagic;
