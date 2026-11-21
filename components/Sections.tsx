import Image from "next/image";
import { site, waLink } from "@/lib/site";
import { Brand, CapIcon } from "./Brand";

/* ---------- المشكلة: وين عم يتسرّب زبونك ---------- */
const LEAK = [
  { n: "01", t: "بيشوفك", d: "ريل، بحث بجوجل، إعلان، توصية", exit: "ما فهم شو بتعمل" },
  { n: "02", t: "بيثق فيك", d: "موقع سريع، شغل حقيقي، تقييمات", exit: "ما في دليل" },
  { n: "03", t: "بيحكيك", d: "زر واضح، رد سريع، سؤال صح", exit: "الرد بياخد ساعات" },
  { n: "04", t: "بيشتري… وبيرجع", d: "عرض واضح، متابعة، وتوصية", exit: "ما حدا تابعه", gold: true },
];

export function Leak() {
  return (
    <section className="section section--alt">
      <div className="section__inner">
        <div className="section-head">
          <span className="eyebrow">المشكلة</span>
          <h2 className="h2">وين عم يتسرّب زبونك؟</h2>
          <p className="lead">
            التسويق الرقمي مو بس إنك تجيب ناس… هو إنك ما تضيّع اللي جبتهم. الزبون بيمرق بأربع محطات،
            وبكل وحدة في باب ممكن يطلع منه.
          </p>
        </div>
        <div className="grid leak-grid">
          {LEAK.map((s) => (
            <div key={s.n} className={`leak-card card${s.gold ? " card--gold" : ""}`}>
              <span className="num" dir="ltr">{s.n}</span>
              <h3>{s.t}</h3>
              <p style={s.gold ? { color: "var(--ink-2)" } : undefined}>{s.d}</p>
              <span className="exit">بيطلع إذا: {s.exit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- كيف بشتغل ---------- */
const STEPS = [
  { t: "الفحص", d: "٦ فحوصات قبل ما أحكي بالأسعار" },
  { t: "طريق الزبون", d: "برسمه قبل أي تصميم" },
  { t: "البناء والقياس", d: "صفحة سريعة، وكل كبسة بتنعدّ" },
  { t: "المحتوى والإطلاق", d: "أول ٧٢ ساعة… بلا تعديل عالعمياني" },
  { t: "تقرير أسبوعي", d: "صفحة وحدة و٣ قرارات" },
  { t: "تسليم المفاتيح", d: "كل الحسابات باسمك" },
];

export function How() {
  return (
    <section id="how" className="section section--alt">
      <div className="section__inner" style={{ gap: 48 }}>
        <div className="section-head">
          <span className="eyebrow">ورا الكواليس</span>
          <h2 className="h2">كيف بشتغل… بلا أسرار</h2>
        </div>
        <div className="steps">
          <div className="steps__line" aria-hidden="true" />
          <ol className="grid steps__grid">
            {STEPS.map((s, i) => (
              <li key={s.t} className={`step${i === STEPS.length - 1 ? " step--last" : ""}`}>
                <span className="step__num" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
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
const SERVICES = [
  { for: "للي لسا ما عنده أساس", t: "الأساس", d: "ملف جوجل، صفحة بتبيع، واتساب مرتّب، وقياس كامل." },
  { t: "النمو", d: "الأساس + محتوى شهري + نظام متابعة + تقرير أسبوعي.", featured: true },
  { for: "للي جاهز يكبر", t: "الإعلانات", d: "حملات ميتا وجوجل، Conversions API، واختبارات أسبوعية." },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="section__inner">
        <div className="section-head">
          <span className="eyebrow">الخدمات</span>
          <h2 className="h2">من وين بدك نبلّش؟</h2>
        </div>
        <div className="grid services-grid">
          {SERVICES.map((s) => (
            <a
              key={s.t}
              href={waLink(`أهلين معاذ، حابب أعرف تفاصيل باقة «${s.t}».`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`service card${s.featured ? " service--featured" : ""}`}
            >
              {s.featured ? <span className="badge">المقترح</span> : <span className="service__for">{s.for}</span>}
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              {/* TODO(معاذ): حط الأسعار الحقيقية */}
              <span className="service__price" style={s.featured ? { color: "var(--ink-2)" } : undefined}>
                بيبلّش من [السعر]
              </span>
              <span className="service__more">شوف التفاصيل ←</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- البرمجة ---------- */
const DEV = [
  { t: "مواقع وصفحات هبوط", d: "سريعة عالموبايل، زر واضح، ومبنية لهدف واحد: رسالة أو طلب.", tags: ["Next.js", "React", "SEO"] },
  { t: "أنظمة ولوحات تحكم", d: "طلبات، حجوزات، زبائن… كله بمكان واحد بدل الدفاتر والجداول.", tags: ["Laravel", "Vue", "MySQL"] },
  { t: "ربط وأتمتة", d: "النموذج بيوصل عالواتساب، والطلب بينحفظ، والمتابعة بتصير لحالها.", tags: ["APIs", "Webhooks", "WhatsApp"] },
  { t: "قياس وتتبع", d: "بكسل وأحداث مضبوطة، فبتعرف كل زبون من وين إجا.", tags: ["GA4", "GTM", "Pixel + CAPI"] },
];

export function Dev() {
  return (
    <section id="dev" className="section section--alt" style={{ overflow: "hidden" }}>
      <div className="dev__bgcode" aria-hidden="true" dir="ltr">&lt;/&gt;</div>
      <div className="section__inner">
        <div className="split">
          <div className="split__text">
            <span className="eyebrow">البرمجة</span>
            <h2 className="h2">التسويق بيجيب الزبون… <span className="gold">والكود بيمسكه</span></h2>
            <p className="lead">
              لأني مبرمج، ما بوقف عند «حط إعلان». ببني الصفحة اللي بتبيع، والنظام اللي بيرتّب الطلبات،
              والربط اللي بيخلّي كل رقم ينقاس صح.
            </p>
          </div>
          <div className="terminal" dir="ltr">
            <div className="terminal__bar" aria-hidden="true">
              <i style={{ background: "#e8705a" }} />
              <i style={{ background: "#d4af37" }} />
              <i style={{ background: "#4fbf7a" }} />
              <span className="terminal__name">lead.ts</span>
            </div>
            <pre aria-label="مثال كود: كل طلب بينقاس وبيوصل عالواتساب وبينحفظ">
              <span className="tk-c">{"// every lead leaves a trace"}</span>{"\n"}
              <span className="tk-k">on</span>(<span className="tk-s">{"'form_submit'"}</span>{", lead => {\n"}
              {"  track("}<span className="tk-s">{"'Lead'"}</span>{", lead.source)\n"}
              {"  sendToWhatsApp(lead)\n  saveToCRM(lead)\n})"}
            </pre>
          </div>
        </div>
        <div className="grid dev-grid">
          {DEV.map((c, i) => (
            <div key={c.t} className="dev-card card" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <span className="num" dir="ltr" style={{ fontSize: 13, letterSpacing: 1 }}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
              <div className="chips" dir="ltr">
                {c.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- UX/UI ---------- */
const UX = [
  { t: "بفهم الزبون", d: "مين هو، شو بدو، ووين بيعلق." },
  { t: "برسم الرحلة", d: "من أول زيارة لحد الطلب." },
  { t: "وايرفريم", d: "الهيكل قبل الألوان." },
  { t: "الواجهة", d: "بهويتك، ومريحة عالموبايل." },
  { t: "نموذج تفاعلي", d: "بتجربه قبل ما ينبرمج." },
  { t: "اختبار وتحسين", d: "منشوف وين بيوقف الناس ومنصلّح." },
];
const AR = "١٢٣٤٥٦";

export function UxUi() {
  return (
    <section id="ux" className="section">
      <div className="section__inner ux">
        <div className="ux__text">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span className="eyebrow" dir="ltr" style={{ alignSelf: "flex-end" }}>UX / UI</span>
            <h2 className="h2">الزبون ما بيقرا… <span className="gold">بيكبس</span></h2>
            <p className="lead">
              تصميم مو بس حلو. كل شاشة بتجاوب على سؤال الزبون قبل ما يسأله، وبتوصّله للزر بأقل عدد كبسات.
            </p>
          </div>
          <ol className="grid ux-grid">
            {UX.map((s, i) => (
              <li key={s.t} className="ux-step card">
                <span className="ux-step__n">{AR[i]}</span>
                <strong>{s.t}</strong>
                <span>{s.d}</span>
              </li>
            ))}
          </ol>
          <div className="chips" dir="ltr" style={{ gap: 8 }}>
            {["Figma", "Wireframes", "Prototypes", "Design System", "Mobile-first"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>

        <div className="phones" aria-hidden="true">
          <div className="phone phone--wire">
            <span className="phone__label">وايرفريم</span>
            <div className="bar" style={{ height: 70, borderRadius: 12, background: "rgba(255,255,255,0.06)" }} />
            <div className="bar" style={{ height: 10, width: "80%", borderRadius: 6, background: "rgba(255,255,255,0.10)" }} />
            <div className="bar" style={{ height: 10, width: "60%", borderRadius: 6, background: "rgba(255,255,255,0.08)" }} />
            <div className="bar" style={{ height: 44 }} />
            <div className="bar" style={{ height: 44 }} />
            <div style={{ height: 34, borderRadius: 10, border: "1px dashed rgba(255,255,255,0.3)" }} />
          </div>
          <div className="phone phone--ui">
            <span className="phone__label">الواجهة</span>
            <div style={{ height: 90, borderRadius: 14, background: "radial-gradient(80% 80% at 50% 30%, rgba(212,175,55,0.45), #0e0e10)" }} />
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>احجز موعدك بكبسة</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>مثال لشاشة حجز</span>
            <div className="days"><span>الأحد</span><span className="on">الإثنين</span><span>الثلاثاء</span></div>
            <span style={{ padding: "12px 0", borderRadius: 12, background: "var(--gold-grad)", textAlign: "center", fontSize: 14, fontWeight: 700, color: "#0e0e10" }}>أكّد الحجز</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- المكتبة ---------- */
const REELS = [
  { tag: "خريطة التسويق الرقمي · ١", t: "شغلة عن التسويق الرقمي… ما حدا رح يقلك ياها", file: "تسريب", a: 0.35 },
  { tag: "محتوى بيبيع · ١", t: "اللايكات اللي عم تفرح فيها… ممكن تكون أكبر دليل إنو محتواك ما عم يبيع", file: "زبائن", a: 0.28 },
  { tag: "أرقامك عم تحكي · ١", t: "الرقم اللي عم تشوفه بمدير الإعلانات… جزء منه تقدير، مو عدّ", file: "دقة", a: 0.22 },
  { tag: "الذكاء الاصطناعي · ١٠", t: "الأداة صارت عند الكل… الميزة إنت", file: "حدود", a: 0.3 },
];

export function Library() {
  const ig = `https://instagram.com/${site.instagram}`;
  return (
    <section id="library" className="section section--alt">
      <div className="section__inner">
        <div className="lib-head">
          <div className="section-head">
            <span className="eyebrow">المكتبة</span>
            <h2 className="h2">١٠٠ درس مجاني بالتسويق الرقمي</h2>
            <p className="lead">١٠ سلاسل، كل حلقة بصفحتها: الفيديو، الفكرة، والملف المجاني.</p>
          </div>
          {/* TODO: لما تجهز صفحات الحلقات، غيّر الروابط لـ /library */}
          <a href={ig} target="_blank" rel="noopener noreferrer" className="btn btn--pill"
            style={{ minHeight: 48, borderColor: "rgba(212,175,55,0.5)" }}>كل السلاسل ←</a>
        </div>
        <div className="grid lib-grid">
          {REELS.map((r) => (
            <a key={r.tag} href={ig} target="_blank" rel="noopener noreferrer" className="reel"
              style={{ background: `linear-gradient(180deg, rgba(11,11,13,0) 30%, rgba(11,11,13,0.95)), radial-gradient(80% 60% at 50% 30%, rgba(212,175,55,${r.a}), #0e0e10 70%)` }}>
              <span className="reel__tag">{r.tag}</span>
              <span className="reel__title">{r.t}</span>
              <span className="reel__file">الملف: «{r.file}»</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- عني ---------- */
const PRINCIPLES = [
  { t: "ما بخترع أرقام", d: "كل نتيجة حقيقية، وكل مثال مكتوب عليه «مثال»." },
  { t: "الحسابات باسمك", d: "الدومين والإعلانات والبكسل… إلك، وأنا شريك." },
  { t: "تقرير بتفهمه", d: "صفحة وحدة كل أسبوع، و٣ قرارات واضحة." },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="section__inner about">
        <div className="about__photo">
          <Image src="/images/muaz-round.png" alt="معاذ" width={260} height={260} />
        </div>
        <div className="about__text">
          <span className="eyebrow">أنا معاذ</span>
          <h2 className="about__title">مبرمج ومسوّق رقمي… بفكّر بالتسويق متل الكود</h2>
          <div className="cert">
            <CapIcon size={28} withTassel />
            <div style={{ minWidth: 0 }}>
              <strong>شهادة بالتسويق الرقمي</strong>
              <span>جامعة إسطنبول ميديبول · <span dir="ltr">Istanbul Medipol University</span></span>
            </div>
          </div>
          <div className="grid principles">
            {PRINCIPLES.map((p) => (
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
export function FinalCta() {
  return (
    <section className="section">
      <div className="glow" aria-hidden="true"
        style={{ background: "radial-gradient(50% 80% at 50% 100%, rgba(212,175,55,0.22), transparent 70%)" }} />
      <div className="final">
        <h2>قبل ما تدفع ولا قرش عالإعلانات…<br /><span className="gold">خلّينا نفحص</span></h2>
        <p className="lead">ابعتلي شو نوع مشروعك، وبقلّك من وين تبلّش… بدقيقتين.</p>
        <a href={waLink("أهلين معاذ، بدي أعمل الفحص المجاني لمشروعي.")} target="_blank" rel="noopener noreferrer"
          className="btn btn--gold" style={{ padding: "0 36px" }}>ابدأ الفحص المجاني</a>
      </div>
      <footer className="footer">
        <Brand size={18} />
        <small>تسويق رقمي · برمجة · UX/UI</small>
        <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" dir="ltr"
          style={{ fontSize: 14 }}>@{site.instagram}</a>
      </footer>
    </section>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="راسلني عالواتساب">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 20.5l1.8-5.2A8.4 8.4 0 1 1 21 11.5z" />
      </svg>
    </a>
  );
}
