import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  page?: string;
}

export const SEO = ({ title, description, page }: SEOProps) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Use translations if page key is provided, otherwise use explicit props
  const seoTitle = page ? t(`seo.${page}.title`) : title;
  const seoDescription = page ? t(`seo.${page}.description`) : description;

  // Construct canonical URL
  const baseUrl = 'https://haidi.nl'; // Updated to match robots.txt and sitemap.xml
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update the lang attribute on the html tag
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
    </Helmet>
  );
};
