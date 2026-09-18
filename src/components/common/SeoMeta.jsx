import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SeoMeta = ({
  title = "YB EVERYDAY / JEDEN — RADIANCE",
  description = "Contemporary luxury fashion house specializing in fine jewelry, L'Optique sculpted frames, and Jeden objects of radiance.",
  image = "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
  canonical
}) => {
  const formattedTitle = title.includes('YB') ? title : `${title} | YB EVERYDAY / JEDEN`;

  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SeoMeta;
