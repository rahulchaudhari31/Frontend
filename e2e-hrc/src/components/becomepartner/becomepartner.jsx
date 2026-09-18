import React, { useEffect, useState } from 'react';
import { getPartnerProfile } from '../../services/becomePartner/partnerProfileService';

const defaultData = {
  eyebrow: 'PARTNER PROFILE',
  title: 'What You Access as an e2e HRC Partner',
  description:
    'Our partner network spans several types of organisations. What all of them share is a need for the e2e HRC advantage: an established UK presence, sector-specific employer relationships, a compliance infrastructure that handles Skilled Worker visas and Sponsorship Licences in-house, and the capacity to move international placements forward accurately and at speed.',
  cta: {
    label: 'Become a Partner Now!',
    url: '/become-a-partner',
  },
  side_panel: {
    title: 'Let’s Build Something that Lasts',
    description:
      'Join a partner network built to create lasting opportunities, stronger employer relationships, and successful international placements.',
  },
};

const PartnerProfile = () => {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await getPartnerProfile();
        const record = response?.data || response;

        if (isMounted && record) {
          setData({
            eyebrow: record.eyebrow || defaultData.eyebrow,
            title: record.title || defaultData.title,
            description: record.description || defaultData.description,
            cta: {
              label: record.cta?.label || defaultData.cta.label,
              url: record.cta?.url || defaultData.cta.url,
            },
            side_panel: {
              title: record.side_panel?.title || defaultData.side_panel.title,
              description: record.side_panel?.description || defaultData.side_panel.description,
            },
          });
        }
      } catch (error) {
        console.error('Failed to load partner profile data:', error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading && !data) {
    return null;
  }

  return (
    <section className="w-full bg-[#f5f2ed] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_620px] lg:gap-16">
        <div className="max-w-[680px]">
          <p className="mb-5 text-[13px] font-bold uppercase tracking-[0.16em] text-[#004a91]">
            {data.eyebrow}
          </p>

          <h2 className="mb-6 text-4xl font-medium leading-[1.12] tracking-[-0.02em] text-[#063d78] md:text-5xl lg:text-[56px]">
            {data.title}
          </h2>

          <p className="max-w-[650px] text-base leading-7 text-[#3f4c5b] md:text-[17px]">
            {data.description}
          </p>
        </div>

        <div
          className="
            relative
            min-h-[410px]
            overflow-hidden
            rounded-[30px]
            bg-gradient-to-r
            from-[#0758aa]
            via-[#064f9c]
            to-[#003d7d]
            px-8
            py-10
            shadow-[0_18px_45px_rgba(0,45,95,0.14)]
            md:px-10
            md:py-12
            lg:min-h-[410px]
            lg:px-10
          "
        >
          <div className="absolute right-0 top-0 h-full w-[100px] bg-[#003d7d]/40" />

          <div className="relative z-10 max-w-[470px]">
            <h3 className="mb-5 text-3xl font-medium leading-tight text-white md:text-[38px]">
              {data.side_panel.title}
            </h3>

            <p className="mb-8 text-[15px] leading-6 text-white/95 md:text-base">
              {data.side_panel.description}
            </p>

            <a
              href={data.cta.url}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#75a7d7]
                bg-transparent
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-[#0758aa]
                hover:bg-[#0758aa]
                hover:text-white
              "
            >
              {data.cta.label}

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h13" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerProfile;
