"use client";

import { useEffect, useState } from "react";
import { dicts, type Lang } from "@/lib/dict";
import { waLink } from "@/lib/site";
import { Brand } from "./Brand";
import { SocialLinks } from "./Social";

const ICONS: Record<string, React.ReactNode> = {
  megaphone: (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" />
      <path d="M15 9a4 4 0 0 1 0 6" />
      <path d="M18 6a8 8 0 0 1 0 12" />
    </>
  ),
  check: (
    <>
      <path d="M9 11l3 3 8-8" />
      <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  code: (
    <>
      <path d="M8 7l-5 5 5 5" />
      <path d="M16 7l5 5-5 5" />
      <path d="M14 4l-4 16" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
};

export function Nav({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  const n = t.nav;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const close = () => setOpen(false);

  // close the sheet first, then scroll once the header is back in the page flow
  const go = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const id = e.currentTarget.getAttribute("href")?.slice(1);
    const el = id ? document.getElementById(id) : null;
    if (!open || !el) { setOpen(false); return; }
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }));
  };

  // lock page scroll + Escape to close while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // highlight the link of the section currently in view
  useEffect(() => {
    const ids = n.links.map((l) => l.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => { if (window.scrollY < 200) setActive(""); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, [n.links]);

  return (
    <header className={`nav-wrap${open ? " is-open" : ""}`}>
      <nav aria-label={n.aria} className="nav">
        <a href="#top" aria-label={n.home} onClick={close} className="brand-capsule">
          <Brand />
        </a>
        <a href={n.switchHref} hrefLang={n.switchLang} lang={n.switchLang} className="lang-switch"
          aria-label={n.switchAria}>
          {n.switchLabel}
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? n.close : n.open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <div id="nav-links" className="nav__links">
          {n.links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={go}
              className={active === l.href.slice(1) ? "is-active" : undefined}
              aria-current={active === l.href.slice(1) ? "true" : undefined}
              style={{ "--i": i } as React.CSSProperties}>
              <span className="nav__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round">{ICONS[l.icon]}</svg>
              </span>
              {l.label}
            </a>
          ))}
        </div>
        <a href="#audit" className="btn btn--pill nav__cta" onClick={go}>
          {n.cta}
        </a>

        {/* mobile-only footer of the open menu */}
        <div className="nav__sheet-foot">
          <a href={waLink(n.waMsg)} target="_blank" rel="noopener noreferrer" className="btn btn--gold nav__wa">
            {n.waCta}
          </a>
          <SocialLinks t={t} />
        </div>
      </nav>
    </header>
  );
}
