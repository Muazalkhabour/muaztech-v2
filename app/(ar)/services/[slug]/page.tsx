import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage, serviceHref } from "@/components/ServicePage";
import { services, serviceBySlug } from "@/lib/services";
import { dicts } from "@/lib/dict";

const LANG = "ar" as const;

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  const c = s.copy[LANG];
  const path = serviceHref(LANG, slug);
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: {
      canonical: path,
      languages: { ar: serviceHref("ar", slug), en: serviceHref("en", slug), "x-default": serviceHref("ar", slug) },
    },
    openGraph: {
      type: "website",
      siteName: "MUAZ TECH",
      locale: dicts[LANG].meta.locale,
      title: c.metaTitle,
      description: c.metaDesc,
      url: path,
      images: [{ url: dicts[LANG].meta.ogImage, width: 1200, height: 630, alt: dicts[LANG].meta.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.metaDesc, images: [dicts[LANG].meta.ogImage] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  return <ServicePage lang={LANG} service={s} />;
}
