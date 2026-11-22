import { dicts, type Lang } from "@/lib/dict";
import { posts, blogHref, blogUi, type Post } from "@/lib/blog";
import { serviceBySlug, serviceHref } from "@/lib/services";
import { site } from "@/lib/site";
import { Nav } from "./Nav";
import { Assistant } from "./Assistant";
import { FinalCta } from "./Sections";
import { BlogIndex, PostCard } from "./Blog";
import { ServiceIcon } from "./ServiceIcon";

const fmtDate = (lang: Lang, iso: string) =>
  new Date(iso).toLocaleDateString(lang === "ar" ? "ar" : "en-GB", { year: "numeric", month: "long", day: "numeric" });

export function BlogListPage({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  const ui = blogUi[lang];
  const ld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} — ${ui.eyebrow}`,
    url: `${site.url}${blogHref(lang)}`,
    inLanguage: lang,
    blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.copy[lang].title, url: `${site.url}${blogHref(lang, p.slug)}`, datePublished: p.date })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Nav lang={lang} home={false} switchHref={blogHref(lang === "ar" ? "en" : "ar")} />
      <main>
        <section className="svc-hero">
          <div className="glow hero__grid" aria-hidden="true" />
          <div className="glow svc-hero__glow" aria-hidden="true" />
          <div className="svc-hero__inner">
            <nav aria-label="breadcrumb" className="crumbs">
              <a href={t.path}>{lang === "ar" ? "الرئيسية" : "Home"}</a><span aria-hidden="true">/</span><span aria-current="page">{ui.nav}</span>
            </nav>
            <span className="eyebrow" style={{ marginTop: 12 }}>{ui.eyebrow}</span>
            <h1 className="svc-hero__title">{ui.title}</h1>
            <p className="lead">{ui.lead}</p>
          </div>
        </section>
        <section className="section section--alt">
          <div className="section__inner">
            <BlogIndex lang={lang} />
          </div>
        </section>
        <FinalCta t={t} />
      </main>
      <Assistant lang={lang} home={false} />
    </>
  );
}

function Body({ post, lang }: { post: Post; lang: Lang }) {
  return (
    <>
      {post.copy[lang].body.map((b, i) => {
        switch (b.t) {
          case "p": return <p key={i}>{b.text}</p>;
          case "h2": return <h2 key={i}>{b.text}</h2>;
          case "ul": return <ul key={i}>{b.items.map((x) => <li key={x}>{x}</li>)}</ul>;
          case "ol": return <ol key={i}>{b.items.map((x) => <li key={x}>{x}</li>)}</ol>;
          case "tip": return <aside key={i} className="art-tip"><strong>{b.title}</strong><p>{b.text}</p></aside>;
          case "quote": return <blockquote key={i}>{b.text}</blockquote>;
        }
      })}
    </>
  );
}

export function BlogPostPage({ lang, post }: { lang: Lang; post: Post }) {
  const t = dicts[lang];
  const ui = blogUi[lang];
  const c = post.copy[lang];
  const svc = serviceBySlug(post.service);
  const url = `${site.url}${blogHref(lang, post.slug)}`;
  const others = posts.filter((p) => p.slug !== post.slug).sort((a, b) => (a.category === post.category ? -1 : 0) - (b.category === post.category ? -1 : 0)).slice(0, 3);
  const audit = `${t.path === "/" ? "/" : t.path}#audit`;
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: c.title,
      description: c.desc,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: lang,
      url,
      mainEntityOfPage: url,
      image: `${site.url}${t.meta.ogImage}`,
      author: { "@type": "Person", name: ui.by, url: site.url },
      publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/icon-512.png` } },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: lang === "ar" ? "الرئيسية" : "Home", item: `${site.url}${t.path}` },
        { "@type": "ListItem", position: 2, name: ui.nav, item: `${site.url}${blogHref(lang)}` },
        { "@type": "ListItem", position: 3, name: c.title, item: url },
      ],
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Nav lang={lang} home={false} switchHref={blogHref(lang === "ar" ? "en" : "ar", post.slug)} />
      <main>
        <article>
          <header className="svc-hero art-head">
            <div className="glow hero__grid" aria-hidden="true" />
            <div className="glow svc-hero__glow" aria-hidden="true" />
            <div className="svc-hero__inner">
              <nav aria-label="breadcrumb" className="crumbs">
                <a href={t.path}>{lang === "ar" ? "الرئيسية" : "Home"}</a><span aria-hidden="true">/</span>
                <a href={blogHref(lang)}>{ui.nav}</a>
              </nav>
              <span className="post-card__cat" style={{ marginTop: 10 }}>{ui.cats[post.category]}</span>
              <h1 className="art-title">{c.title}</h1>
              <p className="lead">{c.desc}</p>
              <p className="art-meta">
                <span>{ui.by}</span><span aria-hidden="true">·</span>
                <time dateTime={post.date}>{fmtDate(lang, post.date)}</time><span aria-hidden="true">·</span>
                <span>{ui.minRead(post.readMins)}</span>
              </p>
            </div>
          </header>
          <div className="section section--plain">
            <div className="art-body">
              <Body post={post} lang={lang} />
              {svc && (
                <aside className="art-svc card">
                  <span className="svc-link__icon"><ServiceIcon name={svc.icon} size={22} /></span>
                  <div>
                    <span className="art-svc__label">{ui.related}</span>
                    <strong>{svc.copy[lang].nav}</strong>
                  </div>
                  <a href={serviceHref(lang, svc.slug)} className="btn btn--pill">{ui.relatedCta}</a>
                </aside>
              )}
              <div className="mk-cta">
                <a href={audit} className="btn btn--gold" style={{ minHeight: 52, fontSize: 16 }}>{ui.audit} {t.arrow}</a>
              </div>
              <a href={blogHref(lang)} className="art-back">{ui.back}</a>
            </div>
          </div>
        </article>
        <section className="section section--alt">
          <div className="section__inner">
            <h2 className="svc-others__title">{ui.more}</h2>
            <ul className="grid post-grid">{others.map((p) => <li key={p.slug}><PostCard lang={lang} slug={p.slug} /></li>)}</ul>
          </div>
        </section>
        <FinalCta t={t} />
      </main>
      <Assistant lang={lang} home={false} />
    </>
  );
}

/** Home-page teaser: latest 3 posts */
export function BlogTeaser({ lang }: { lang: Lang }) {
  const ui = blogUi[lang];
  const latest = [...posts].slice(0, 3);
  return (
    <section id="blog" className="section section--alt">
      <div className="section__inner">
        <div className="lib-head">
          <div className="section-head">
            <span className="eyebrow">{ui.eyebrow}</span>
            <h2 className="h2">{ui.homeTitle}</h2>
            <p className="lead">{ui.homeLead}</p>
          </div>
          <a href={blogHref(lang)} className="btn btn--pill" style={{ minHeight: 46 }}>{ui.all}</a>
        </div>
        <ul className="grid post-grid">{latest.map((p) => <li key={p.slug}><PostCard lang={lang} slug={p.slug} /></li>)}</ul>
      </div>
    </section>
  );
}
