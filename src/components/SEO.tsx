import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  page?: string;
}

export const SEO = ({ title, description, page }: SEOProps) => {
  const { t, i18n } = useTranslation();

  // Use translations if page key is provided, otherwise use explicit props
  const seoTitle = page ? t(`seo.${page}.title`) : title;
  const seoDescription = page ? t(`seo.${page}.description`) : description;

  useEffect(() => {
    // Update the lang attribute on the html tag
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      
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
