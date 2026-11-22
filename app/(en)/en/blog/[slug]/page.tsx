import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage } from "@/components/BlogPages";
import { posts, postBySlug, blogHref } from "@/lib/blog";
import { dicts } from "@/lib/dict";

const LANG = "en" as const;

export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) return {};
  const c = p.copy[LANG];
  const title = `${c.title} | MUAZ TECH`;
  return {
    title,
    description: c.desc,
    alternates: { canonical: blogHref(LANG, slug), languages: { ar: blogHref("ar", slug), en: blogHref("en", slug), "x-default": blogHref("ar", slug) } },
    openGraph: {
      type: "article", siteName: "MUAZ TECH", locale: dicts[LANG].meta.locale, title, description: c.desc, url: blogHref(LANG, slug),
      publishedTime: p.date, images: [{ url: dicts[LANG].meta.ogImage, width: 1200, height: 630, alt: dicts[LANG].meta.ogAlt }],
    },
    twitter: { card: "summary_large_image", title, description: c.desc, images: [dicts[LANG].meta.ogImage] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) notFound();
  return <BlogPostPage lang={LANG} post={p} />;
}
