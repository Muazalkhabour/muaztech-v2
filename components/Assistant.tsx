"use client";

import { useEffect, useRef, useState } from "react";
import { dicts, type Lang } from "@/lib/dict";
import { waLink } from "@/lib/site";

type Msg =
  | { from: "bot"; text: string; faq?: number }
  | { from: "user"; text: string };

const TYPING_MS = 650;

/**
 * Scripted site assistant: canned answers written by Muaz (no invented prices
 * or promises), and anything typed is handed off to WhatsApp.
 */
export function Assistant({ lang, home = true }: { lang: Lang; home?: boolean }) {
  const a = dicts[lang].assistant;
  const path = dicts[lang].path;
  const h = (hash: string) => (home ? hash : `${path === "/" ? "/" : path}${hash}`);
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: a.greeting }]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const [showTop, setShowTop] = useState(false);
  const [seen, setSeen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // back-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // keep the latest message in view
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing, open]);

  // Escape closes; focus moves into the panel when it opens
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>(".as-chip, .as-input")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const ask = (i: number) => {
    if (typing) return;
    const f = a.faqs[i];
    setMsgs((m) => [...m, { from: "user", text: f.q }]);
    setTyping(true);
    timer.current = setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", text: f.a, faq: i }]);
      setTyping(false);
    }, TYPING_MS);
  };

  const sendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    window.open(waLink(a.waIntro + text), "_blank", "noopener,noreferrer");
    setMsgs((m) => [...m, { from: "user", text }, { from: "bot", text: a.sent }]);
    setDraft("");
  };

  const lastBot = [...msgs].reverse().find((m) => m.from === "bot");
  const askedAll = msgs.filter((m) => m.from === "bot" && m.faq !== undefined).map((m) => (m as { faq?: number }).faq);

  return (
    <>
      {showTop && (
        <button type="button" className="to-top" aria-label={a.toTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
          </svg>
        </button>
      )}

      {open && (
        <div ref={panelRef} className="as-panel" role="dialog" aria-modal="false" aria-labelledby="as-title">
          <header className="as-head">
            <span className="as-avatar" aria-hidden="true" dir="ltr">&lt;/&gt;</span>
            <div className="as-head__text">
              <strong id="as-title">{a.title}</strong>
              <span><i className="as-dot" aria-hidden="true" />{a.status}</span>
            </div>
            <button type="button" className="as-close" aria-label={a.close}
              onClick={() => { setOpen(false); launcherRef.current?.focus(); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </header>

          <div ref={listRef} className="as-list" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={`as-msg as-msg--${m.from}`}>
                <p>{m.text}</p>
                {m.from === "bot" && m.faq !== undefined && (() => {
                  const f = a.faqs[m.faq];
                  if ("wa" in f && f.wa) {
                    return (
                      <a className="as-action" href={waLink(f.wa)} target="_blank" rel="noopener noreferrer">{f.waLabel}</a>
                    );
                  }
                  if ("link" in f && f.link) {
                    return (
                      <a className="as-action" href={h(f.link.href)} onClick={() => setOpen(false)}>{f.link.label}</a>
                    );
                  }
                  return null;
                })()}
              </div>
            ))}
            {typing && (
              <div className="as-msg as-msg--bot as-typing" aria-label={a.typing}>
                <span /><span /><span />
              </div>
            )}
          </div>

          {!typing && lastBot && (
            <div className="as-chips" role="group" aria-label={a.back}>
              {a.faqs.map((f, i) => askedAll.includes(i) ? null : (
                <button key={f.q} type="button" className="as-chip" onClick={() => ask(i)}>{f.q}</button>
              ))}
            </div>
          )}

          <form className="as-form" onSubmit={sendDraft}>
            <label htmlFor="as-input" className="sr-only">{a.inputLabel}</label>
            <input id="as-input" className="as-input" value={draft} onChange={(e) => setDraft(e.target.value)}
              placeholder={a.placeholder} autoComplete="off" />
            <button type="submit" className="as-send" aria-label={a.send} disabled={!draft.trim()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button ref={launcherRef} type="button" className={`as-launcher${open ? " is-open" : ""}`}
        aria-label={open ? a.close : a.open} aria-expanded={open} onClick={() => { setOpen((o) => !o); setSeen(true); }}>
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 20.5l1.8-5.2A8.4 8.4 0 1 1 21 11.5z" />
            <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
          </svg>
        )}
        {!open && !seen && <span className="as-badge" aria-hidden="true">1</span>}
      </button>
    </>
  );
}
