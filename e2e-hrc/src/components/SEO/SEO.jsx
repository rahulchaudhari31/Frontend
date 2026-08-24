import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getSEOByPageKey } from '../../services/seo/seoApi';

const SEO = ({ pageKey }) => {
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setSeoData(null);

    const loadSEO = async () => {
      const key = String(pageKey || '').trim();

      if (!key) {
        return;
      }

      try {
        const result = await getSEOByPageKey(key);

        if (!isMounted) return;
        setSeoData(result || null);
      } catch {
        if (isMounted) {
          setSeoData(null);
        }
      }
    };

    loadSEO();

    return () => {
      isMounted = false;
    };
  }, [pageKey]);

  if (!seoData) return null;

  const {
    meta_title,
    meta_description,
    canonical_url,
    robots,
    og_title,
    og_description,
    og_image,
  } = seoData;

  return (
    <Helmet>
      <title>{meta_title || 'E2E HRC'}</title>

      {meta_description && (
        <meta name="description" content={meta_description} />
      )}

      {canonical_url && <link rel="canonical" href={canonical_url} />}

      <meta name="robots" content={robots || 'index, follow'} />

      {og_title && <meta property="og:title" content={og_title} />}

      {og_description && (
        <meta property="og:description" content={og_description} />
      )}

      {og_image && <meta property="og:image" content={og_image} />}
    </Helmet>
  );

};

export default SEO;
