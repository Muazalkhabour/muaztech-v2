import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { dicts, type Lang } from "@/lib/dict";
import { site } from "@/lib/site";

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-plex",
});

export const viewport: Viewport = { themeColor: "#0b0b0d" };

export function buildMetadata(lang: Lang): Metadata {
  const t = dicts[lang];
  const m = t.meta;
  return {
    metadataBase: new URL(site.url),
    title: m.title,
    description: m.description,
    alternates: {
      canonical: t.path,
      languages: { ar: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      locale: m.locale,
      alternateLocale: lang === "ar" ? ["en_US"] : ["ar"],
      url: t.path,
      siteName: site.name,
      title: m.title,
      description: m.description,
      images: [{ url: m.ogImage, width: 1200, height: 630, alt: m.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: [m.ogImage] },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    appleWebApp: { title: site.name, statusBarStyle: "black-translucent" },
    // Google Search Console: put the token in NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION on Vercel
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
      : {}),
  };
}

/** Each language is its own root layout so <html lang/dir> is right from the first byte. */
export function HtmlShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = dicts[lang];
  return (
    <html lang={t.lang} dir={t.dir} className={plex.variable}>
      <body>{children}</body>
    </html>
  );
}
