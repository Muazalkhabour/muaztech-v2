"use client";

import { useState } from "react";
import { dicts, type Dict, type Lang } from "@/lib/dict";
import { Brand } from "./Brand";

export function Nav({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const n = t.nav;

  return (
    <header className="nav-wrap">
      <nav aria-label={n.aria} className={`nav${open ? " nav--open" : ""}`}>
        <a href="#top" aria-label={n.home} onClick={close}>
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
          {n.links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </div>
        <a href="#audit" className="btn btn--pill nav__cta" onClick={close}>
          {n.cta}
        </a>
      </nav>
    </header>
  );
}
