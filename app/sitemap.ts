import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const home = { ar: `${site.url}/`, en: `${site.url}/en` };
  const pages: MetadataRoute.Sitemap = [
    { url: home.ar, lastModified: now, changeFrequency: "weekly", priority: 1, alternates: { languages: home } },
    { url: home.en, lastModified: now, changeFrequency: "weekly", priority: 0.9, alternates: { languages: home } },
  ];
  for (const s of services) {
    const languages = { ar: `${site.url}/services/${s.slug}`, en: `${site.url}/en/services/${s.slug}` };
    pages.push(
      { url: languages.ar, lastModified: now, changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
      { url: languages.en, lastModified: now, changeFrequency: "monthly", priority: 0.7, alternates: { languages } },
    );
  }
  return pages;
}
