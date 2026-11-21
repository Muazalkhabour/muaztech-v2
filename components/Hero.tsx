import Image from "next/image";
import { CapIcon } from "./Brand";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="glow hero__grid" aria-hidden="true" />
      <div className="glow hero__glow" aria-hidden="true" />

      <div className="hero__copy">
        <h1 className="hero__title">
          تسويق رقمي… <span className="gold">مبني متل الكود</span>
        </h1>
        <p className="hero__sub">
          بساعد أصحاب المشاريع يحوّلوا الزيارات لرسائل، والرسائل لزبائن. كل كبسة إلها مكان، كل رقم
          بينقاس، وما في زبون بيضيع.
        </p>
        <div className="hero__ctas">
          <a href="#audit" className="btn btn--gold">اطلب فحص مشروعك</a>
          <a href="#how" className="btn btn--ghost">شوف كيف بشتغل ←</a>
        </div>
        <p className="hero__cred">مبرمج ومسوّق رقمي · شهادة بالتسويق الرقمي من جامعة إسطنبول ميديبول</p>
      </div>

      <div className="hero__stage">
        <div className="hero__halo" aria-hidden="true" />
        <div className="hero__code" aria-hidden="true" dir="ltr">&lt;/&gt;</div>
        <Image
          src="/images/muaz-hero.png"
          alt="معاذ، مبرمج ومسوّق رقمي"
          width={768}
          height={768}
          priority
          sizes="(max-width: 640px) 68vw, 560px"
          className="hero__photo"
        />
        <div className="hero__fade" aria-hidden="true" />

        <div className="float-chip float-chip--top">
          <span style={{ fontSize: 13, color: "var(--muted)" }}>قبل أي إعلان</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: "var(--gold-light)" }}>الفحص قبل الوصفة</span>
        </div>
        <div className="float-chip float-chip--bottom">
          <CapIcon />
          <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>شهادة بالتسويق الرقمي</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>جامعة إسطنبول ميديبول</span>
          </span>
        </div>
      </div>
    </section>
  );
}
