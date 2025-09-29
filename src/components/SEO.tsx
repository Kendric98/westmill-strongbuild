import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonicalUrl?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  keywords?: string[];
  og?: {
    title?: string;
    description?: string;
    type?: string;
    image?: string;
    url?: string;
  };
};

const ensureMeta = (name: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  return el;
};

const ensureLinkRel = (rel: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  return el;
};

export default function SEO({ title, description, canonicalUrl, jsonLd, keywords, og }: SEOProps) {
  useEffect(() => {
    document.title = title;
    const desc = ensureMeta("description");
    desc.setAttribute("content", description);
    if (keywords && keywords.length > 0) {
      const kw = ensureMeta("keywords");
      kw.setAttribute("content", keywords.join(", "));
    }
    if (canonicalUrl) {
      const link = ensureLinkRel("canonical");
      link.setAttribute("href", canonicalUrl);
    }
    // Open Graph
    const ogTitle = ensureMeta("og:title");
    ogTitle.setAttribute("content", og?.title || title);
    const ogDesc = ensureMeta("og:description");
    ogDesc.setAttribute("content", og?.description || description);
    const ogType = ensureMeta("og:type");
    ogType.setAttribute("content", og?.type || "website");
    if (og?.image) {
      const ogImage = ensureMeta("og:image");
      ogImage.setAttribute("content", og.image);
    }
    const ogUrl = ensureMeta("og:url");
    ogUrl.setAttribute("content", og?.url || canonicalUrl || window.location.href);
  }, [title, description, canonicalUrl]);

  // JSON-LD script
  const json = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      {json.map((obj, i) => (
        <script
          // Using index is fine here since order is stable per page
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </>
  );
}



