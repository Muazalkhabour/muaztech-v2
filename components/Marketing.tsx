"use client";

import { useState } from "react";
import { dicts, type Lang } from "@/lib/dict";
import { serviceHref, serviceUi } from "@/lib/services";

const PAGE: Record<string, string> = { social: "social-media", meta: "meta-ads", google: "google-ads", seo: "seo" };

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

/** Which goals each service serves (keyed by its icon id). */
const GOALS: Record<string, string[]> = {
  strategy: ["trust", "leads"],
  social: ["reach", "trust"],
  meta: ["reach", "leads"],
  google: ["reach", "leads"],
  seo: ["reach", "trust"],
  funnel: ["leads", "time"],
  chart: ["measure"],
  ai: ["time", "measure"],
};

const STEP_ICONS = [ICONS.social, ICONS.strategy, ICONS.funnel, ICONS.chart];

export function Marketing({ lang }: { lang: Lang }) {
  const m = dicts[lang].marketing;
  const [goal, setGoal] = useState<string | null>(null);
  const on = (icon: string) => !goal || GOALS[icon]?.includes(goal);

  return (
    <section id="marketing" className="section">
      <div className="glow marketing__glow" aria-hidden="true" />
      <div className="section__inner">
        <div className="section-head">
          <span className="eyebrow">{m.eyebrow}</span>
          <h2 className="h2">{m.title[0]}<span className="gold">{m.title[1]}</span></h2>
          <p className="lead">{m.lead}</p>
        </div>

        {/* the system: attract → convince → convert → measure */}
        <div className="mk-system">
          <div className="mk-system__head">
            <h3>{m.system.title}</h3>
            <p>{m.system.lead}</p>
          </div>
          <ol className="mk-flow">
            {m.system.steps.map((st, i) => (
              <li key={st.t} className="mk-flow__step">
                <span className="mk-flow__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{STEP_ICONS[i]}</svg>
                </span>
                <strong>{st.t}</strong>
                <span>{st.d}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* goal picker */}
        <div className="mk-goals">
          <div className="mk-goals__head">
            <strong>{m.goalTitle}</strong>
            <span>{m.goalHint}</span>
          </div>
          <div className="mk-goals__chips" role="group" aria-label={m.goalTitle}>
            <button type="button" aria-pressed={goal === null} className={`mk-goal${goal === null ? " is-on" : ""}`}
              onClick={() => setGoal(null)}>{m.goalAll}</button>
            {m.goals.map((g) => (
              <button key={g.id} type="button" aria-pressed={goal === g.id}
                className={`mk-goal${goal === g.id ? " is-on" : ""}`} onClick={() => setGoal(goal === g.id ? null : g.id)}>
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="grid mk-grid">
          {m.items.map((it, i) => (
            <li key={it.t} className={`mk-card card${on(it.icon) ? (goal ? " is-match" : "") : " is-dim"}`}>
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
              {PAGE[it.icon] && (
                <a href={serviceHref(lang, PAGE[it.icon])} className="mk-card__more">{serviceUi[lang].more}</a>
              )}
            </li>
          ))}
        </ul>

        {/* what you get + industries */}
        <div className="mk-extra">
          <div className="mk-deliver card">
            <h3>{m.deliverTitle}</h3>
            <ul className="mk-card__points">
              {m.deliver.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
          <div className="mk-industries card">
            <h3>{m.industriesTitle}</h3>
            <ul className="mk-industries__list">
              {m.industries.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </div>

        <div className="mk-cta">
          <span>{m.ctaText}</span>
          <a href="#audit" className="btn btn--gold" style={{ minHeight: 52, fontSize: 16 }}>{m.cta}</a>
        </div>
      </div>
    </section>
  );
}
