import Image from "next/image";
import type { Dict } from "@/lib/dict";
import { site, socials, waLink } from "@/lib/site";
import { Brand, CapIcon } from "./Brand";
import { SocialLinks } from "./Social";
import { servicesIn, serviceHref, serviceUi } from "@/lib/services";
import { blogHref, blogUi } from "@/lib/blog";

const pad2 = (n: number) => String(n).padStart(2, "0");
const igUrl = `https://instagram.com/${site.instagram}`;

/* ---------- المشكلة: وين عم يتسرّب زبونك ---------- */
export function Leak({ t }: { t: Dict }) {
  const l = t.leak;
  return (
    <section className="section section--alt">
      <div className="section__inner">
        <div className="section-head">
          <span className="eyebrow">{l.eyebrow}</span>
          <h2 className="h2">{l.title}</h2>
          <p className="lead">{l.lead}</p>
        </div>
        <ol className="grid leak-grid">
          {l.steps.map((s, i) => {
            const gold = i === l.steps.length - 1;
            return (
              <li key={s.t} className={`leak-card card${gold ? " card--gold" : ""}`}>
                <span className="leak-card__num" dir="ltr">{pad2(i + 1)}</span>
                <div className="leak-card__body">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <span className="exit">{l.exitPrefix} {s.exit}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------- كيف بشتغل ---------- */
export function How({ t }: { t: Dict }) {
  const h = t.how;
  return (
    <section id="how" className="section section--alt">
      <div className="section__inner" style={{ gap: 48 }}>
        <div className="section-head">
          <span className="eyebrow">{h.eyebrow}</span>
          <h2 className="h2">{h.title}</h2>
        </div>
        <div className="steps">
          <div className="steps__line" aria-hidden="true" />
          <ol className="grid steps__grid">
            {h.steps.map((s, i) => (
              <li key={s.t} className={`step${i === h.steps.length - 1 ? " step--last" : ""}`}>
                <span className="step__num" dir="ltr">{pad2(i + 1)}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- الخدمات ---------- */
export function Services({ t }: { t: Dict }) {
  const s = t.services;
  return (
    <section id="services" className="section">
      <div className="section__inner">
        <div className="section-head">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="h2">{s.title}</h2>
        </div>
        <div className="grid services-grid">
          {s.items.map((it) => (
            <a
              key={it.t}
              href={waLink(s.msg(it.t))}
              target="_blank"
              rel="noopener noreferrer"
              className={`service card${it.featured ? " service--featured" : ""}`}
            >
              {it.featured ? <span className="badge">{s.badge}</span> : <span className="service__for">{it.for}</span>}
              <h3>{it.t}</h3>
              <p>{it.d}</p>
              {/* TODO(معاذ): حط الأسعار الحقيقية بـ lib/dict.ts */}
              <span className="service__price" style={it.featured ? { color: "var(--ink-2)" } : undefined}>
                {s.price}
              </span>
              <span className="service__more">{s.more}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- البرمجة ---------- */
export function Dev({ t }: { t: Dict }) {
  const d = t.dev;
  return (
    <section id="dev" className="section section--alt" style={{ overflow: "hidden" }}>
      <div className="dev__bgcode" aria-hidden="true" dir="ltr">&lt;/&gt;</div>
      <div className="section__inner">
        <div className="split">
          <div className="split__text">
            <span className="eyebrow">{d.eyebrow}</span>
            <h2 className="h2">{d.title[0]}<span className="gold">{d.title[1]}</span></h2>
            <p className="lead">{d.lead}</p>
            <a href={serviceHref(t.lang, "websites")} className="sec-more">{serviceUi[t.lang].more}</a>
          </div>
          <div className="terminal" dir="ltr">
            <div className="terminal__bar" aria-hidden="true">
              <i style={{ background: "#e8705a" }} />
              <i style={{ background: "#d4af37" }} />
              <i style={{ background: "#4fbf7a" }} />
              <span className="terminal__name">lead.ts</span>
            </div>
            <pre aria-label={d.codeAria}>
              <span className="tk-c">{"// every lead leaves a trace"}</span>{"\n"}
              <span className="tk-k">on</span>(<span className="tk-s">{"'form_submit'"}</span>{", lead => {\n"}
              {"  track("}<span className="tk-s">{"'Lead'"}</span>{", lead.source)\n"}
              {"  sendToWhatsApp(lead)\n  saveToCRM(lead)\n})"}
            </pre>
          </div>
        </div>
        <div className="grid dev-grid">
          {d.cards.map((c, i) => (
            <div key={c.t} className="dev-card card" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <span className="num" dir="ltr" style={{ fontSize: 13, letterSpacing: 1 }}>{pad2(i + 1)}</span>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
              <div className="chips" dir="ltr">
                {c.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- UX/UI ---------- */
export function UxUi({ t }: { t: Dict }) {
  const u = t.ux;
  return (
    <section id="ux" className="section">
      <div className="section__inner ux">
        <div className="ux__text">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span className="eyebrow" dir="ltr" style={{ alignSelf: "flex-start" }}>{u.eyebrow}</span>
            <h2 className="h2">{u.title[0]}<span className="gold">{u.title[1]}</span></h2>
            <p className="lead">{u.lead}</p>
            <a href={serviceHref(t.lang, "ux-ui")} className="sec-more">{serviceUi[t.lang].more}</a>
          </div>
          <ol className="grid ux-grid">
            {u.steps.map((s, i) => (
              <li key={s.t} className="ux-step card">
                <span className="ux-step__n">{u.nums[i]}</span>
                <strong>{s.t}</strong>
                <span>{s.d}</span>
              </li>
            ))}
          </ol>
          <div className="chips" dir="ltr" style={{ gap: 8 }}>
            {["Figma", "Wireframes", "Prototypes", "Design System", "Mobile-first"].map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
        </div>

        <div className="phones" aria-hidden="true">
          <div className="phone phone--wire">
            <span className="phone__label">{u.mock.wire}</span>
            <div className="bar" style={{ height: 70, borderRadius: 12, background: "rgba(255,255,255,0.06)" }} />
            <div className="bar" style={{ height: 10, width: "80%", borderRadius: 6, background: "rgba(255,255,255,0.10)" }} />
            <div className="bar" style={{ height: 10, width: "60%", borderRadius: 6, background: "rgba(255,255,255,0.08)" }} />
            <div className="bar" style={{ height: 44 }} />
            <div className="bar" style={{ height: 44 }} />
            <div style={{ height: 34, borderRadius: 10, border: "1px dashed rgba(255,255,255,0.3)" }} />
          </div>
          <div className="phone phone--ui">
            <span className="phone__label">{u.mock.ui}</span>
            <div style={{ height: 90, borderRadius: 14, background: "radial-gradient(80% 80% at 50% 30%, rgba(212,175,55,0.45), #0e0e10)" }} />
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{u.mock.title}</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>{u.mock.note}</span>
            <div className="days">
              {u.mock.days.map((d, i) => <span key={d} className={i === 1 ? "on" : undefined}>{d}</span>)}
            </div>
            <span style={{ padding: "12px 0", borderRadius: 12, background: "var(--gold-grad)", textAlign: "center", fontSize: 14, fontWeight: 700, color: "#0e0e10" }}>{u.mock.confirm}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- المكتبة ---------- */
const AR_NUM = "١٢٣٤٥٦٧٨٩";

export function Library({ t }: { t: Dict }) {
  const l = t.library;
  const ar = t.lang === "ar";
  const tiktok = socials.find((s) => s.id === "tiktok")!.href;
  return (
    <section id="library" className="section">
      <div className="section__inner">
        {l.ready ? (
          <>
            <div className="lib-head">
              <div className="section-head">
                <span className="eyebrow">{l.eyebrow}</span>
                <h2 className="h2">{l.title}</h2>
                <p className="lead">{l.lead}</p>
              </div>
              <div className="lib-follow">
                <span>{l.watchOn}</span>
                <a href={igUrl} target="_blank" rel="noopener noreferrer" className="btn btn--pill">Instagram</a>
                <a href={tiktok} target="_blank" rel="noopener noreferrer" className="btn btn--pill">TikTok</a>
              </div>
            </div>
            <ol className="grid lib-series">
              {l.series.map((sr, i) => {
                const n = i + 1;
                const num = ar ? (n === 10 ? "١٠" : AR_NUM[i]) : String(n);
                return (
                  <li key={sr.t}>
                    <a href={igUrl} target="_blank" rel="noopener noreferrer"
                      className={`lib-card${i === 0 ? " lib-card--first" : ""}`}>
                      <span className="lib-card__num">{num}</span>
                      <span className="lib-card__body">
                        {i === 0 && <span className="lib-card__badge">{l.featured}</span>}
                        <strong>{sr.t}</strong>
                        <span>{sr.d}</span>
                      </span>
                      <span className="lib-card__eps">{l.episodes}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </>
        ) : (
          /* TODO: لما تنزل السلاسل، حط ready: true بـ lib/dict.ts */
          <div className="lib-soon2">
            <span className="eyebrow">{l.eyebrow}</span>
            <h2 className="h2">
              <span className="lib-soon2__badge">{l.soonBadge}</span>
              {l.title}
            </h2>
            <p className="lead">{l.soonLead}</p>
            <div className="lib-follow">
              <a href={igUrl} target="_blank" rel="noopener noreferrer" className="btn btn--pill">Instagram</a>
              <a href={tiktok} target="_blank" rel="noopener noreferrer" className="btn btn--pill">TikTok</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- أسئلة شائعة ---------- */
export function Faq({ t }: { t: Dict }) {
  const f = t.faq;
  return (
    <section id="faq" className="section">
      <div className="section__inner">
        <div className="section-head">
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 className="h2">{f.title}</h2>
        </div>
        <div className="faq-list">
          {f.items.map((it) => (
            <details key={it.q} className="faq card">
              <summary>{it.q}<span className="faq__plus" aria-hidden="true" /></summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- عني ---------- */
export function About({ t }: { t: Dict }) {
  const a = t.about;
  return (
    <section id="about" className="section section--alt">
      <div className="section__inner about">
        <figure className="about__photo">
          <div className="about__frame">
            <Image src="/images/muaz-desk.webp" alt={a.photoAlt} width={900} height={1125}
              sizes="(max-width: 700px) 78vw, 380px" />
          </div>
        </figure>
        <div className="about__text">
          <span className="eyebrow">{a.eyebrow}</span>
          <h2 className="about__title">{a.title}</h2>
          <div className="cert">
            <CapIcon size={28} withTassel />
            <div style={{ minWidth: 0 }}>
              <strong>{a.cert}</strong>
              <span>{a.certSub}{a.certLatin && <> · <span dir="ltr">{a.certLatin}</span></>}</span>
            </div>
          </div>
          <div className="grid principles">
            {a.principles.map((p) => (
              <div key={p.t} className="principle card">
                <strong>{p.t}</strong>
                <span>{p.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- الدعوة الأخيرة + الفوتر ---------- */
export function FinalCta({ t }: { t: Dict }) {
  const f = t.final;
  return (
    <section className="section">
      <div className="glow" aria-hidden="true"
        style={{ background: "radial-gradient(50% 80% at 50% 100%, rgba(212,175,55,0.22), transparent 70%)" }} />
      <div className="final">
        <h2>{f.title[0]}<br /><span className="gold">{f.title[1]}</span></h2>
        <p className="lead">{f.lead}</p>
        <a href={waLink(f.msg)} target="_blank" rel="noopener noreferrer"
          className="btn btn--gold" style={{ padding: "0 36px" }}>{f.button}</a>
      </div>
      <nav className="foot-svcs" aria-label={serviceUi[t.lang].services}>
        {(["marketing", "dev"] as const).map((g) => (
          <div key={g} className="foot-svcs__group">
            <strong>{g === "marketing" ? serviceUi[t.lang].marketingGroup : serviceUi[t.lang].devGroup}</strong>
            <ul>
              {servicesIn(g).map((s) => (
                <li key={s.slug}><a href={serviceHref(t.lang, s.slug)}>{s.copy[t.lang].nav}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div className="foot-svcs__group">
          <strong>{blogUi[t.lang].nav}</strong>
          <ul><li><a href={blogHref(t.lang)}>{blogUi[t.lang].title}</a></li></ul>
        </div>
      </nav>
      <footer className="footer">
        <Brand size={18} />
        <small>{f.footer}</small>
        <SocialLinks t={t} />
      </footer>
    </section>
  );
}
