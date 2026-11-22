import type { Metadata } from "next";
import { BlogListPage } from "@/components/BlogPages";
import { blogHref, blogUi } from "@/lib/blog";
import { dicts } from "@/lib/dict";

const LANG = "ar" as const;
const ui = blogUi[LANG];
const title = `${ui.title} | MUAZ TECH`;

export const metadata: Metadata = {
  title,
  description: ui.lead,
  alternates: { canonical: blogHref(LANG), languages: { ar: blogHref("ar"), en: blogHref("en"), "x-default": blogHref("ar") } },
  openGraph: {
    type: "website", siteName: "MUAZ TECH", locale: dicts[LANG].meta.locale, title, description: ui.lead, url: blogHref(LANG),
    images: [{ url: dicts[LANG].meta.ogImage, width: 1200, height: 630, alt: dicts[LANG].meta.ogAlt }],
  },
  twitter: { card: "summary_large_image", title, description: ui.lead, images: [dicts[LANG].meta.ogImage] },
};

export default function Page() {
  return <BlogListPage lang={LANG} />;
}
