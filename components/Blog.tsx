"use client";

import { useState } from "react";
import type { Lang } from "@/lib/dict";
import { posts, blogHref, blogUi, type Category } from "@/lib/blog";

const fmtDate = (lang: Lang, iso: string) =>
  new Date(iso).toLocaleDateString(lang === "ar" ? "ar" : "en-GB", { year: "numeric", month: "long", day: "numeric" });

export function PostCard({ lang, slug }: { lang: Lang; slug: string }) {
  const p = posts.find((x) => x.slug === slug)!;
  const ui = blogUi[lang];
  const c = p.copy[lang];
  return (
    <a href={blogHref(lang, p.slug)} className={`post-card card post-card--${p.category}`}>
      <span className="post-card__cover" aria-hidden="true">
        <span className="post-card__code" dir="ltr">{p.category === "marketing" ? "#" : p.category === "dev" ? "</>" : "{ }"}</span>
      </span>
      <span className="post-card__body">
        <span className="post-card__meta">
          <span className="post-card__cat">{ui.cats[p.category]}</span>
          <span>{ui.minRead(p.readMins)}</span>
        </span>
        <strong>{c.title}</strong>
        <span className="post-card__ex">{c.excerpt}</span>
        <span className="post-card__more">{ui.read}</span>
      </span>
    </a>
  );
}

export function BlogIndex({ lang }: { lang: Lang }) {
  const ui = blogUi[lang];
  const [cat, setCat] = useState<Category | "all">("all");
  const shown = posts.filter((p) => cat === "all" || p.category === cat);
  return (
    <>
      <div className="proj-filter" role="group" aria-label={ui.eyebrow}>
        {(["all", "marketing", "dev", "ux"] as const).filter((k) => k === "all" || posts.some((p) => p.category === k)).map((k) => (
          <button key={k} type="button" aria-pressed={cat === k} className={`mk-goal${cat === k ? " is-on" : ""}`}
            onClick={() => setCat(k)}>{ui.cats[k]}</button>
        ))}
      </div>
      <ul className="grid post-grid">
        {shown.map((p) => <li key={p.slug}><PostCard lang={lang} slug={p.slug} /></li>)}
      </ul>
    </>
  );
}

export { fmtDate };
