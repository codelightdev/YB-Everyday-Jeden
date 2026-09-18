import React from 'react';
import { Helmet } from 'react-helmet-async';

const DEFAULT_TITLE = "YB EVERYDAY / JEDEN — RADIANCE";
const DEFAULT_DESCRIPTION = "Contemporary luxury fashion house specializing in fine jewelry, L'Optique sculpted frames, and Jeden objects of radiance. Precision craftsmanship born in Lagos, styled for the world.";
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop";
const SITE_NAME = "YB EVERYDAY / JEDEN";
const TWITTER_HANDLE = "@ybeveryday";
const BASE_URL = "https://ybeveryday.com";

/**
 * Complete SEO & Social Meta Optimization Component
 * Features OpenGraph, Twitter Cards, Schema.org JSON-LD, Robots directives & Canonicalization.
 */
export const SeoMeta = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  imageAlt,
  canonical,
  type = 'website',
  keywords,
  product,
  article,
  noindex = false,
  schema
}) => {
  const formattedTitle = title.includes('YB') ? title : `${title} | YB EVERYDAY / JEDEN`;
  const cleanDescription = description || DEFAULT_DESCRIPTION;
  const ogImage = image || DEFAULT_IMAGE;
  const canonicalUrl = canonical ? (canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`) : null;
  const altText = imageAlt || formattedTitle;

  const defaultKeywords = "YB EVERYDAY, JEDEN, RADIANCE, contemporary luxury, fine jewelry, L'Optique, sunglasses, optical frames, solid 18k gold, sterling silver, Nigerian luxury fashion, Lagos, London, Paris";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  // Generate Base Organization & Website Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": SITE_NAME,
        "url": BASE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": DEFAULT_IMAGE,
          "caption": "YB EVERYDAY / JEDEN Luxury House"
        },
        "sameAs": [
          "https://instagram.com/ybeveryday",
          "https://twitter.com/ybeveryday"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": BASE_URL,
        "name": SITE_NAME,
        "description": DEFAULT_DESCRIPTION,
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        }
      }
    ]
  };

  // If page provides product details, generate rich Product Schema
  if (type === 'product' && product) {
    defaultSchema["@graph"].push({
      "@type": "Product",
      "name": product.name || title,
      "image": Array.isArray(product.images) ? product.images : [ogImage],
      "description": cleanDescription,
      "sku": String(product.id || product.sku || ''),
      "brand": {
        "@type": "Brand",
        "name": SITE_NAME
      },
      "category": product.category,
      "material": product.material,
      "offers": {
        "@type": "Offer",
        "url": canonicalUrl || BASE_URL,
        "priceCurrency": "NGN",
        "price": product.price,
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    });
  }

  // If page provides article details, generate rich Article Schema
  if (type === 'article' && article) {
    defaultSchema["@graph"].push({
      "@type": "Article",
      "headline": title,
      "description": cleanDescription,
      "image": [ogImage],
      "author": {
        "@type": "Person",
        "name": article.author || "YB Editorial Bureau"
      },
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      },
      "datePublished": article.publishedTime || "2026-09-01",
      "mainEntityOfPage": canonicalUrl || BASE_URL
    });
  }

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={cleanDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="YB EVERYDAY / JEDEN Atelier" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="theme-color" content="#0A0A0A" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Tags (Facebook, LinkedIn, WhatsApp, iMessage, Pinterest) */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={cleanDescription} />
      <meta property="og:type" content={type === 'product' ? 'product.item' : type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={altText} />
      <meta property="og:locale" content="en_US" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Product OpenGraph Extensions */}
      {type === 'product' && product && (
        <>
          <meta property="product:price:amount" content={String(product.price)} />
          <meta property="product:price:currency" content="NGN" />
          <meta property="product:availability" content="in stock" />
          <meta property="product:condition" content="new" />
        </>
      )}

      {/* Article OpenGraph Extensions */}
      {type === 'article' && article && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
        </>
      )}

      {/* Twitter Card Tags (X / Twitter) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={cleanDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={altText} />

      {/* JSON-LD Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SeoMeta;
