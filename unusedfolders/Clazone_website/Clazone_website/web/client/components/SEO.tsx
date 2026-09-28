import { useEffect } from "react";

export default function SEO({
  title,
  description,
  keywords,
  jsonLd,
}: {
  title: string;
  description: string;
  keywords?: string[];
  jsonLd?: Record<string, any>;
}) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let metaDesc = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    let metaKeywords = document.querySelector(
      'meta[name="keywords"]',
    ) as HTMLMetaElement | null;
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = (keywords ?? []).join(", ");

    let ldScript = document.querySelector(
      'script[data-seo-jsonld="1"]',
    ) as HTMLScriptElement | null;
    if (!ldScript) {
      ldScript = document.createElement("script");
      ldScript.type = "application/ld+json";
      ldScript.setAttribute("data-seo-jsonld", "1");
      document.head.appendChild(ldScript);
    }
    ldScript.text = JSON.stringify(jsonLd ?? {});

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, keywords, jsonLd]);

  return null;
}
