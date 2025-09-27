import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonicalUrl?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
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

export default function SEO({ title, description, canonicalUrl, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;
    const desc = ensureMeta("description");
    desc.setAttribute("content", description);
    if (canonicalUrl) {
      const link = ensureLinkRel("canonical");
      link.setAttribute("href", canonicalUrl);
    }
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



