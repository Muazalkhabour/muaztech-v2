import { dicts, type Lang } from "@/lib/dict";
import { services, serviceUi, serviceHref, type Service } from "@/lib/services";
import { site, waLink } from "@/lib/site";
import { Nav } from "./Nav";
import { Assistant } from "./Assistant";
import { FinalCta } from "./Sections";

const ICONS: Record<Service["icon"], React.ReactNode> = {
  social: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>),
  meta: (<><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" /><path d="M15 9a4 4 0 0 1 0 6" /><path d="M18 6a8 8 0 0 1 0 12" /></>),
  google: (<><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /><path d="M8 11h6M11 8v6" /></>),
  seo: (<><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>),
  code: (<><path d="M8 7l-5 5 5 5" /><path d="M16 7l5 5-5 5" /><path d="M14 4l-4 16" /></>),
  ux: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M8 14h4" /></>),
};

export { serviceHref };

function Icon({ name, size = 24 }: { name: Service["icon"]; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[name]}</svg>
  );
}

export function ServicePage({ lang, service }: { lang: Lang; service: Service }) {
  const t = dicts[lang];
  const c = service.copy[lang];
  const ui = serviceUi[lang];
  const homeHref = t.path;
  const audit = `${homeHref === "/" ? "/" : homeHref}#audit`;
  const url = `${site.url}${serviceHref(lang, service.slug)}`;
  const others = services.filter((s) => s.slug !== service.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: c.nav,
      description: c.metaDesc,
      serviceType: c.nav,
      url,
      inLanguage: lang,
      areaServed: "Worldwide",
      provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.home, item: `${site.url}${homeHref}` },
        { "@type": "ListItem", position: 2, name: c.nav, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav lang={lang} home={false} switchHref={serviceHref(lang === "ar" ? "en" : "ar", service.slug)} />
      <main>
        {/* hero */}
        <section className="svc-hero">
          <div className="glow hero__grid" aria-hidden="true" />
          <div className="glow svc-hero__glow" aria-hidden="true" />
          <div className="svc-hero__inner">
            <nav aria-label="breadcrumb" className="crumbs">
              <a href={homeHref}>{ui.home}</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{c.nav}</span>
            </nav>
            <span className="svc-hero__icon"><Icon name={service.icon} size={28} /></span>
            <span className="eyebrow">{c.eyebrow}</span>
            <h1 className="svc-hero__title">{c.title[0]}<span className="gold">{c.title[1]}</span></h1>
            <p className="lead">{c.intro}</p>
            <div className="hero__ctas">
              <a href={waLink(c.waMsg)} target="_blank" rel="noopener noreferrer" className="btn btn--gold">{c.ctaBtn}</a>
              <a href={audit} className="btn btn--ghost">{ui.audit} {t.arrow}</a>
            </div>
            <div className="chips svc-hero__tags" dir="ltr">
              {service.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
            </div>
          </div>
        </section>

        {/* for who + what you get */}
        <section className="section section--alt">
          <div className="section__inner svc-two">
            <div className="svc-box card">
              <h2>{c.forTitle}</h2>
              <ul className="mk-card__points">{c.forWho.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="svc-box svc-box--gold card">
              <h2>{c.getTitle}</h2>
              <ul className="mk-card__points">{c.get.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </section>

        {/* steps */}
        <section className="section">
          <div className="section__inner" style={{ gap: 40 }}>
            <div className="section-head"><h2 className="h2">{c.stepsTitle}</h2></div>
            <div className="steps">
              <div className="steps__line" aria-hidden="true" />
              <ol className="grid steps__grid svc-steps">
                {c.steps.map((s, i) => (
                  <li key={s.t} className={`step${i === c.steps.length - 1 ? " step--last" : ""}`}>
                    <span className="step__num" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* faq */}
        <section className="section section--alt">
          <div className="section__inner">
            <div className="section-head"><h2 className="h2">{c.faqTitle}</h2></div>
            <div className="faq-list">
              {c.faqs.map((f) => (
                <details key={f.q} className="faq card">
                  <summary>{f.q}<span className="faq__plus" aria-hidden="true" /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* audit nudge + other services */}
        <section className="section">
          <div className="section__inner">
            <div className="mk-cta">
              <span>{ui.auditText}</span>
              <a href={audit} className="btn btn--gold" style={{ minHeight: 52, fontSize: 16 }}>{ui.audit} {t.arrow}</a>
            </div>
            <h2 className="svc-others__title">{ui.otherTitle}</h2>
            <ul className="grid svc-others">
              {others.map((s) => (
                <li key={s.slug}>
                  <a href={serviceHref(lang, s.slug)} className="svc-link card">
                    <span className="svc-link__icon"><Icon name={s.icon} size={20} /></span>
                    <strong>{s.copy[lang].nav}</strong>
                    <span className="svc-link__more">{ui.more}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCta t={t} />
      </main>
      <Assistant lang={lang} home={false} />
    </>
  );
}
