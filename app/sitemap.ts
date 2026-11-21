import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { ar: `${site.url}/`, en: `${site.url}/en` };
  return [
    { url: `${site.url}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1, alternates: { languages } },
    { url: `${site.url}/en`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9, alternates: { languages } },
  ];
}
