import Image from "next/image";
import { waLink } from "@/lib/site";

type Visual =
  | { kind: "shots"; shots: [string, string]; bg: string }
  | { kind: "erp" | "realestate" | "hospital" };

const GOLD_BG = "radial-gradient(80% 70% at 50% 30%, rgba(212,175,55,0.22), #0e0e10 75%)";

type Project = {
  name: string;
  nameLatin: string;
  type: string;
  summary: string;
  did: string[];
  tags: string[];
  visual: Visual;
  live?: string;
  code?: string;
};

const PROJECTS: Project[] = [
  {
    name: "رحلاتي",
    nameLatin: "Rahalaty ERP",
    type: "نظام إدارة ومحاسبة",
    summary: "نظام عربي كامل لوكالات السفر: الركّاب، الحجوزات، الشركات والرحلات، والحسابات بمكان واحد.",
    did: ["لوحة أرقام بالمبيعات والأرباح", "فواتير PDF بالعربي", "تصدير كشوف الركّاب لـ Excel", "حساب الربح لكل حجز تلقائياً"],
    tags: ["Next.js", "Prisma", "PostgreSQL", "React-PDF"],
    visual: { kind: "shots", shots: ["/projects/rehlati-1.webp", "/projects/rehlati-2.webp"], bg: GOLD_BG },
    live: "https://rehlati-sys.vercel.app",
  },
  {
    name: "عقاري",
    nameLatin: "Aqari SaaS",
    type: "منصة عقارات",
    summary: "منصة للسوق العقاري السوري بتجمع المالك والمكتب والمستأجر: عرض، بحث، عقود، وبوابة للمستأجر.",
    did: ["بحث بفلاتر وخريطة", "عقود PDF ولوحة للمكتب", "بوابة خاصة للمستأجر", "صيانة وإشعارات"],
    tags: ["Next.js", "Supabase", "Prisma", "Leaflet"],
    visual: { kind: "shots", shots: ["/projects/aqari-1.webp", "/projects/aqari-2.webp"], bg: "radial-gradient(80% 70% at 50% 30%, rgba(80,190,140,0.22), #0e0e10 75%)" },
    live: "https://aqari-saas.vercel.app",
    code: "https://github.com/Muazalkhabour/aqari-saas",
  },
  {
    name: "نظام إدارة مستشفى",
    nameLatin: "Hospital Management System",
    type: "نظام داخلي",
    summary: "مواعيد، مرضى، أطباء، واستقبال… كل قسم بشاشته وصلاحياته، والتحديث لحظي.",
    did: ["حجز مواعيد أونلاين", "صلاحيات للطبيب والاستقبال والإدارة", "تحديث لحظي للبيانات", "تقارير PDF"],
    tags: ["Next.js", "Supabase Auth", "Realtime", "React Query"],
    visual: { kind: "hospital" },
  },
  {
    name: "Chicken Plus",
    nameLatin: "مطعم · إسطنبول",
    type: "موقع مطعم + تسويق",
    summary: "موقع مطعم شاورما ببيوغلو مبني لهدف واحد: الزبون يشوف المنيو ويطلب بأسرع وقت.",
    did: ["منيو واضح وأزرار واتساب واتصال", "تتبّع تحويلات Google Ads وGA4", "SEO محلي لإسطنبول", "عدة لغات"],
    tags: ["Next.js", "GA4", "Google Ads", "i18n"],
    visual: { kind: "shots", shots: ["/projects/chicken-1.webp", "/projects/chicken-2.webp"], bg: "radial-gradient(80% 70% at 50% 30%, rgba(230,110,40,0.28), #0e0e10 75%)" },
    live: "https://chicken-plus-site.vercel.app",
  },
  {
    name: "حياة تورك",
    nameLatin: "Hayat Turk Tourism",
    type: "موقع شركة سياحة",
    summary: "موقع لشركة سياحة بتركيا: رحلات يومية، سيارة مع سائق، فنادق، وبرامج شهر عسل.",
    did: ["صفحات للرحلات والعروض", "تواصل مباشر عالواتساب", "عربي وأكتر من لغة", "صور وتقييمات الزبائن"],
    tags: ["HTML", "CSS", "JavaScript", "i18n"],
    visual: { kind: "shots", shots: ["/projects/hayat-1.webp", "/projects/hayat-2.webp"], bg: "radial-gradient(80% 70% at 50% 30%, rgba(40,170,200,0.26), #0e0e10 75%)" },
    live: "https://hayaturkey-travel.vercel.app",
  },
];

function Mock({ kind }: { kind: "erp" | "realestate" | "hospital" }) {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock__bar"><i /><i /><i /></div>
      {kind === "erp" && (
        <div className="mock__body">
          <div className="mock__kpis">
            <span><b>المبيعات</b><em /></span>
            <span><b>الأرباح</b><em /></span>
            <span><b>الركّاب</b><em /></span>
          </div>
          <div className="mock__chart">
            {[38, 55, 46, 70, 62, 84, 76].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
          </div>
        </div>
      )}
      {kind === "realestate" && (
        <div className="mock__body mock__body--row">
          <div className="mock__map">
            <span style={{ top: "28%", right: "30%" }} />
            <span style={{ top: "55%", right: "62%" }} />
            <span style={{ top: "40%", right: "75%" }} className="on" />
          </div>
          <div className="mock__list">
            {[0, 1, 2].map((i) => <span key={i} className={i === 0 ? "on" : ""}><i /><em /></span>)}
          </div>
        </div>
      )}
      {kind === "hospital" && (
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
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="section__inner">
        <div className="section-head">
          <span className="eyebrow">المشاريع</span>
          <h2 className="h2">شغل حقيقي… <span className="gold">مو صور من النت</span></h2>
          <p className="lead">أنظمة ومواقع بنيتها من الصفر: من لوحات التحكم والمحاسبة، لمواقع بتجيب طلبات.</p>
        </div>

        <div className="grid projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.name} className="project card">
              <div className={`project__visual${p.visual.kind === "shots" ? " project__visual--shots" : ""}`}
                style={p.visual.kind === "shots" ? { background: p.visual.bg } : undefined}>
                {p.visual.kind === "shots" ? (
                  p.visual.shots.map((src, k) => (
                    <div key={src} className={`phone-shot phone-shot--${k}`}>
                      <Image src={src} alt={k === 0 ? `${p.name}: لقطة من الموقع` : ""} width={560} height={721}
                        sizes="(max-width: 700px) 45vw, 200px" />
                    </div>
                  ))
                ) : (
                  <Mock kind={p.visual.kind} />
                )}
              </div>
              <div className="project__body">
                <div className="project__head">
                  <span className="project__type">{p.type}</span>
                  <h3>{p.name}</h3>
                  <span className="project__latin" dir="auto">{p.nameLatin}</span>
                </div>
                <p>{p.summary}</p>
                <ul className="project__did">
                  {p.did.map((d) => <li key={d}>{d}</li>)}
                </ul>
                <div className="chips" dir="ltr">
                  {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
                {(p.live || p.code) && (
                  <div className="project__links">
                    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">شوف الموقع ←</a>}
                    {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer" className="muted-link">الكود على GitHub</a>}
                  </div>
                )}
              </div>
            </article>
          ))}
          <a className="project project--cta" href={waLink("أهلين معاذ، عندي فكرة مشروع وبدي نحكي فيها.")}
            target="_blank" rel="noopener noreferrer">
            <span className="project--cta__code" aria-hidden="true" dir="ltr">&lt;/&gt;</span>
            <h3>مشروعك الجاي؟</h3>
            <p>موقع، نظام، أو متجر… احكيلي الفكرة، وبقلّك من وين منبلّش وقديش بدها.</p>
            <span className="btn btn--gold" style={{ minHeight: 52, fontSize: 16 }}>احكيني عالواتساب</span>
          </a>
        </div>
      </div>
    </section>
  );
}
