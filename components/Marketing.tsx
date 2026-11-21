import type { Dict } from "@/lib/dict";

const ICONS: Record<string, React.ReactNode> = {
  strategy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  social: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  meta: (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" />
      <path d="M15 9a4 4 0 0 1 0 6" />
      <path d="M18 6a8 8 0 0 1 0 12" />
    </>
  ),
  google: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
      <path d="M8 11h6M11 8v6" />
    </>
  ),
  seo: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  funnel: (
    <>
      <path d="M3 4h18l-7 8v6l-4 2v-8z" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 6-6" />
      <path d="M16 8h4v4" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
    </>
  ),
};

export function Marketing({ t }: { t: Dict }) {
  const m = t.marketing;
  return (
    <section id="marketing" className="section">
      <div className="glow marketing__glow" aria-hidden="true" />
      <div className="section__inner">
        <div className="section-head">
          <span className="eyebrow">{m.eyebrow}</span>
          <h2 className="h2">{m.title[0]}<span className="gold">{m.title[1]}</span></h2>
          <p className="lead">{m.lead}</p>
        </div>

        <ul className="grid mk-grid">
          {m.items.map((it, i) => (
            <li key={it.t} className="mk-card card">
              <div className="mk-card__top">
                <span className="mk-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {ICONS[it.icon]}
                  </svg>
                </span>
                <span className="num" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
              <ul className="mk-card__points">
                {it.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <div className="chips" dir="ltr">
                {it.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
              </div>
            </li>
          ))}
        </ul>

        <div className="mk-cta">
          <span>{m.ctaText}</span>
          <a href="#audit" className="btn btn--gold" style={{ minHeight: 52, fontSize: 16 }}>{m.cta}</a>
        </div>
      </div>
    </section>
  );
}
