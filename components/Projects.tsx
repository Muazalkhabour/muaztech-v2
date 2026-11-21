import Image from "next/image";

type Visual =
  | { kind: "logo"; src: string; alt: string; bg: string; w: number; h: number; plate?: boolean }
  | { kind: "erp" | "realestate" | "hospital" };

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
    visual: { kind: "erp" },
    live: "https://rehlati-sys.vercel.app",
  },
  {
    name: "عقاري",
    nameLatin: "Aqari SaaS",
    type: "منصة عقارات",
    summary: "منصة للسوق العقاري السوري بتجمع المالك والمكتب والمستأجر: عرض، بحث، عقود، وبوابة للمستأجر.",
    did: ["بحث بفلاتر وخريطة", "عقود PDF ولوحة للمكتب", "بوابة خاصة للمستأجر", "صيانة وإشعارات"],
    tags: ["Next.js", "Supabase", "Prisma", "Leaflet"],
    visual: { kind: "realestate" },
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
    visual: { kind: "logo", src: "/projects/chicken-plus-logo.webp", alt: "شعار Chicken Plus", bg: "radial-gradient(70% 70% at 50% 45%, rgba(245,140,30,0.28), #0e0e10 75%)", w: 480, h: 480 },
    live: "https://chicken-plus-site.vercel.app",
  },
  {
    name: "حياة تورك",
    nameLatin: "Hayat Turk Tourism",
    type: "موقع شركة سياحة",
    summary: "موقع لشركة سياحة بتركيا: رحلات يومية، سيارة مع سائق، فنادق، وبرامج شهر عسل.",
    did: ["صفحات للرحلات والعروض", "تواصل مباشر عالواتساب", "عربي وأكتر من لغة", "صور وتقييمات الزبائن"],
    tags: ["HTML", "CSS", "JavaScript", "i18n"],
    visual: { kind: "logo", src: "/projects/hayaturkey-logo.webp", alt: "شعار حياة تورك", bg: "radial-gradient(70% 70% at 50% 45%, rgba(40,170,170,0.25), #0e0e10 75%)", w: 640, h: 278, plate: true },
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
          {PROJECTS.map((p, i) => (
            <article key={p.name} className={`project card${i === 0 ? " project--wide" : ""}`}>
              <div className="project__visual" style={p.visual.kind === "logo" ? { background: p.visual.bg } : undefined}>
                {p.visual.kind === "logo" ? (
                  <Image src={p.visual.src} alt={p.visual.alt} width={p.visual.w} height={p.visual.h}
                    sizes="(max-width: 700px) 70vw, 320px"
                    className={`project__logo${p.visual.plate ? " project__logo--plate" : ""}`} />
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
        </div>
      </div>
    </section>
  );
}
