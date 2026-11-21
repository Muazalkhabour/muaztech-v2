import Image from "next/image";
import type { Dict } from "@/lib/dict";
import { waLink } from "@/lib/site";

type ProjectId = keyof Dict["projects"]["items"];

type ProjectMeta = {
  id: ProjectId;
  tags: string[];
  shots?: [string, string];
  bg?: string;
  live?: string;
  code?: string;
};

const PROJECTS: ProjectMeta[] = [
  {
    id: "rehlati",
    tags: ["Next.js", "Prisma", "PostgreSQL", "React-PDF"],
    shots: ["/projects/rehlati-1.webp", "/projects/rehlati-2.webp"],
    bg: "radial-gradient(80% 70% at 50% 30%, rgba(212,175,55,0.22), #0e0e10 75%)",
    live: "https://rehlati-sys.vercel.app",
  },
  {
    id: "aqari",
    tags: ["Next.js", "Supabase", "Prisma", "Leaflet"],
    shots: ["/projects/aqari-1.webp", "/projects/aqari-2.webp"],
    bg: "radial-gradient(80% 70% at 50% 30%, rgba(80,190,140,0.22), #0e0e10 75%)",
    live: "https://aqari-saas.vercel.app",
    code: "https://github.com/Muazalkhabour/aqari-saas",
  },
  {
    id: "hms",
    tags: ["Next.js", "Supabase Auth", "Realtime", "React Query"],
  },
  {
    id: "chicken",
    tags: ["Next.js", "GA4", "Google Ads", "i18n"],
    shots: ["/projects/chicken-1.webp", "/projects/chicken-2.webp"],
    bg: "radial-gradient(80% 70% at 50% 30%, rgba(230,110,40,0.28), #0e0e10 75%)",
    live: "https://chicken-plus-site.vercel.app",
  },
  {
    id: "hayat",
    tags: ["HTML", "CSS", "JavaScript", "i18n"],
    shots: ["/projects/hayat-1.webp", "/projects/hayat-2.webp"],
    bg: "radial-gradient(80% 70% at 50% 30%, rgba(40,170,200,0.26), #0e0e10 75%)",
    live: "https://hayaturkey-travel.vercel.app",
  },
];

/** Drawn calendar screen for projects without public screenshots. */
function CalendarMock() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock__bar"><i /><i /><i /></div>
      <div className="mock__body">
        <div className="mock__cal">
          {Array.from({ length: 21 }, (_, i) => (
            <span key={i} className={[3, 8, 9, 15].includes(i) ? "on" : i === 11 ? "now" : ""} />
          ))}
        </div>
        <div className="mock__rows">
          {[0, 1].map((i) => <span key={i}><i /><em /></span>)}
        </div>
      </div>
    </div>
  );
}

export function Projects({ t }: { t: Dict }) {
  const P = t.projects;
  return (
    <section id="projects" className="section section--alt">
      <div className="section__inner">
        <div className="section-head">
          <span className="eyebrow">{P.eyebrow}</span>
          <h2 className="h2">{P.title[0]}<span className="gold">{P.title[1]}</span></h2>
          <p className="lead">{P.lead}</p>
        </div>

        <div className="grid projects-grid">
          {PROJECTS.map((m) => {
            const p = P.items[m.id];
            return (
              <article key={m.id} className="project card">
                <div className={`project__visual${m.shots ? " project__visual--shots" : ""}`}
                  style={m.bg ? { background: m.bg } : undefined}>
                  {m.shots ? (
                    m.shots.map((src, k) => (
                      <div key={src} className={`phone-shot phone-shot--${k}`}>
                        <Image src={src} alt={k === 0 ? P.shotAlt(p.name) : ""} width={560} height={721}
                          sizes="(max-width: 700px) 45vw, 200px" />
                      </div>
                    ))
                  ) : (
                    <CalendarMock />
                  )}
                </div>
                <div className="project__body">
                  <div className="project__head">
                    <span className="project__type">{p.type}</span>
                    <h3>{p.name}</h3>
                    <span className="project__latin" dir="auto">{p.sub}</span>
                  </div>
                  <p>{p.summary}</p>
                  <ul className="project__did">
                    {p.did.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                  <div className="chips" dir="ltr">
                    {m.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
                  </div>
                  {(m.live || m.code) && (
                    <div className="project__links">
                      {m.live && <a href={m.live} target="_blank" rel="noopener noreferrer">{P.visit}</a>}
                      {m.code && <a href={m.code} target="_blank" rel="noopener noreferrer" className="muted-link">{P.code}</a>}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
          <a className="project project--cta" href={waLink(P.cta.msg)} target="_blank" rel="noopener noreferrer">
            <span className="project--cta__code" aria-hidden="true" dir="ltr">&lt;/&gt;</span>
            <h3>{P.cta.title}</h3>
            <p>{P.cta.text}</p>
            <span className="btn btn--gold" style={{ minHeight: 52, fontSize: 16 }}>{P.cta.button}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
