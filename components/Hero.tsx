import Image from "next/image";
import type { Dict } from "@/lib/dict";
import { CapIcon } from "./Brand";

export function Hero({ t }: { t: Dict }) {
  const h = t.hero;
  return (
    <section id="top" className="hero">
      <div className="glow hero__grid" aria-hidden="true" />
      <div className="glow hero__glow" aria-hidden="true" />

      <div className="hero__copy">
        <h1 className="hero__title">
          {h.title[0]}<span className="gold">{h.title[1]}</span>
        </h1>
        <p className="hero__sub">{h.sub}</p>
        <div className="hero__ctas">
          <a href="#audit" className="btn btn--gold">{h.cta}</a>
          <a href="#how" className="btn btn--ghost">{h.secondary}</a>
        </div>
        <p className="hero__cred">{h.cred}</p>
      </div>

      <div className="hero__stage">
        <div className="hero__halo" aria-hidden="true" />
        <div className="hero__code" aria-hidden="true" dir="ltr">&lt;/&gt;</div>
        <Image
          src="/images/muaz-hero.png"
          alt={h.photoAlt}
          width={768}
          height={768}
          priority
          sizes="(max-width: 640px) 68vw, 560px"
          className="hero__photo"
        />
        <div className="hero__fade" aria-hidden="true" />

        <div className="float-chip float-chip--top">
          <span style={{ fontSize: 13, color: "var(--muted)" }}>{h.chipTop[0]}</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: "var(--gold-light)" }}>{h.chipTop[1]}</span>
        </div>
        <div className="float-chip float-chip--bottom">
          <CapIcon />
          <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>{h.chipBottom[0]}</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>{h.chipBottom[1]}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
