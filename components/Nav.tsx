"use client";

import { useState } from "react";
import { navLinks } from "@/lib/site";
import { Brand } from "./Brand";

export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <nav aria-label="القائمة الرئيسية" className={`nav${open ? " nav--open" : ""}`}>
        <a href="#top" aria-label="MUAZ TECH — الرئيسية" onClick={close}>
          <Brand />
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "سكّر القائمة" : "افتح القائمة"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <div id="nav-links" className="nav__links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </div>
        <a href="#audit" className="btn btn--pill nav__cta" onClick={close}>
          اطلب فحص مشروعك
        </a>
      </nav>
    </header>
  );
}
