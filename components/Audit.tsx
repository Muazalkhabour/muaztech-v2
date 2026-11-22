"use client";

import { useState } from "react";
import { dicts, type Dict, type Lang } from "@/lib/dict";
import { waLink } from "@/lib/site";

type Answers = Partial<Record<string, boolean>>;

const toArabicDigits = (n: number) => String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]);

function evaluate(a: Dict["audit"], answers: Answers) {
  let yes = 0;
  let answered = 0;
  const reds: string[] = [];
  for (const q of a.questions) {
    const v = answers[q.id];
    if (v === true) { yes++; answered++; }
    if (v === false) { answered++; reds.push(q.area); }
  }

  let title = a.idleTitle;
  let text = a.idleText;
  let color = "rgba(255,255,255,0.25)";
  let border = "rgba(255,255,255,0.12)";
  let label = "";

  if (answered > 0) {
    if (yes >= 5) { [title, label] = a.green; color = "#4fbf7a"; border = "rgba(79,191,122,0.5)"; }
    else if (yes >= 3) { [title, label] = a.yellow; color = "#d4af37"; border = "rgba(212,175,55,0.6)"; }
    else { [title, label] = a.red; color = "#e8705a"; border = "rgba(232,112,90,0.6)"; }
    text = reds.length ? a.priority(reds.join(a.listSep)) : a.allGood;
  }

  const yesStr = a.digits === "arabic" ? toArabicDigits(yes) : String(yes);
  const msg = a.msg(label, yesStr, reds.join(a.listSep));
  return { title, text, color, border, href: waLink(msg) };
}

export function Audit({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  const a = t.audit;
  const [answers, setAnswers] = useState<Answers>({});
  const set = (id: string, v: boolean) => setAnswers((s) => ({ ...s, [id]: v }));
  const r = evaluate(a, answers);

  return (
    <section id="audit" className="section">
      <div className="glow audit__glow" aria-hidden="true" />
      <div className="section__inner audit">
        <div className="audit__intro">
          <span className="eyebrow">{a.eyebrow}</span>
          <h2 className="h2">{a.title}</h2>
          <p className="lead">{a.lead}</p>
          <div className="result" style={{ borderColor: r.border }} aria-live="polite">
            <span style={{ fontSize: 14, color: "var(--muted)" }}>{a.resultLabel}</span>
            <div className="result__row">
              <span className="dot" style={{ width: 18, height: 18, background: r.color }} />
              <span className="result__title">{r.title}</span>
            </div>
            <p>{r.text}</p>
            <a href={r.href} target="_blank" rel="noopener noreferrer" className="btn btn--gold"
              style={{ minHeight: 52, fontSize: 16, padding: "0 24px" }}>
              {a.send}
            </a>
          </div>
        </div>

        <ul className="questions">
          {a.questions.map((q) => {
            const v = answers[q.id];
            return (
              <li key={q.id} className="question card">
                <span className="dot" style={{
                  width: 12, height: 12,
                  background: v === true ? "#4fbf7a" : v === false ? "#e8705a" : "rgba(255,255,255,0.2)",
                }} />
                <div className="question__text">
                  <span className="question__area">{q.area}</span>
                  <span className="question__q">{q.text}</span>
                </div>
                <div className="yn" role="group" aria-label={q.area}>
                  <button type="button" aria-pressed={v === true} className={v === true ? "is-yes" : ""}
                    onClick={() => set(q.id, true)}>{a.yes}</button>
                  <button type="button" aria-pressed={v === false} className={v === false ? "is-no" : ""}
                    onClick={() => set(q.id, false)}>{a.no}</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
