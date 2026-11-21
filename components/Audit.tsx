"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";

const QUESTIONS = [
  { id: "g", area: "جوجل", text: "بتطلع لما حدا يكتب خدمتك ومدينتك؟" },
  { id: "s", area: "الموقع", text: "موقعك بيفتح بسرعة عالموبايل، وفيه زر واضح؟" },
  { id: "m", area: "القياس", text: "بتعرف كل زبون من أي منصة إجا؟" },
  { id: "a", area: "الإعلانات", text: "حساب الإعلانات والبكسل باسمك؟" },
  { id: "w", area: "الواتساب", text: "بترد على أول رسالة خلال ساعة؟" },
  { id: "c", area: "المحتوى", text: "نزّلت محتوى هالأسبوع جاب رسالة من زبون؟" },
] as const;

type Answers = Partial<Record<string, boolean>>;

const toArabicDigits = (n: number) => String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]);

function evaluate(answers: Answers) {
  let yes = 0;
  let answered = 0;
  const reds: string[] = [];
  for (const q of QUESTIONS) {
    const v = answers[q.id];
    if (v === true) { yes++; answered++; }
    if (v === false) { answered++; reds.push(q.area); }
  }

  let title = "جاوب على الأسئلة الستة";
  let text = "النتيجة بتطلع هون أول ما تجاوب.";
  let color = "rgba(255,255,255,0.25)";
  let border = "rgba(255,255,255,0.12)";
  let label = "";

  if (answered > 0) {
    if (yes >= 5) { title = "أخضر: جاهز تكبر"; color = "#4fbf7a"; border = "rgba(79,191,122,0.5)"; label = "أخضر"; }
    else if (yes >= 3) { title = "أصفر: في براغي لازم تنشد"; color = "#d4af37"; border = "rgba(212,175,55,0.6)"; label = "أصفر"; }
    else { title = "أحمر: ابدأ من الأساس"; color = "#e8705a"; border = "rgba(232,112,90,0.6)"; label = "أحمر"; }
    text = reds.length
      ? `الأولوية: ${reds.join("، ")}. ابعتلي النتيجة وبقلّك أول خطوة.`
      : "ممتاز. ابعتلي النتيجة ومنشوف كيف نكبّر بلا ما نحرق مصاري.";
  }

  const msg =
    `أهلين معاذ، عملت الفحص بالموقع. النتيجة: ${label || "لسا ما خلّصت"} (${toArabicDigits(yes)} من ٦).` +
    (reds.length ? ` الناقص: ${reds.join("، ")}.` : "");

  return { title, text, color, border, href: waLink(msg) };
}

export function Audit() {
  const [answers, setAnswers] = useState<Answers>({});
  const set = (id: string, v: boolean) => setAnswers((a) => ({ ...a, [id]: v }));
  const r = evaluate(answers);

  return (
    <section id="audit" className="section">
      <div className="glow" aria-hidden="true"
        style={{ background: "radial-gradient(50% 60% at 80% 30%, rgba(212,175,55,0.14), transparent 70%)" }} />
      <div className="section__inner audit">
        <div className="audit__intro">
          <span className="eyebrow">أداة مجانية</span>
          <h2 className="h2">افحص مشروعك… بدقيقتين</h2>
          <p className="lead">
            نفس الفحص اللي بعمله بأول ساعة مع أي مشروع. جاوب بنعم أو لأ، وبتطلعلك النتيجة: أخضر، أصفر، أحمر.
          </p>
          <div className="result" style={{ borderColor: r.border }} aria-live="polite">
            <span style={{ fontSize: 14, color: "var(--muted)" }}>نتيجتك</span>
            <div className="result__row">
              <span className="dot" style={{ width: 18, height: 18, background: r.color }} />
              <span className="result__title">{r.title}</span>
            </div>
            <p>{r.text}</p>
            <a href={r.href} target="_blank" rel="noopener noreferrer" className="btn btn--gold"
              style={{ minHeight: 52, fontSize: 16, padding: "0 24px" }}>
              ابعتلي نتيجتي عالواتساب
            </a>
          </div>
        </div>

        <ul className="questions">
          {QUESTIONS.map((q) => {
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
                    onClick={() => set(q.id, true)}>نعم</button>
                  <button type="button" aria-pressed={v === false} className={v === false ? "is-no" : ""}
                    onClick={() => set(q.id, false)}>لأ</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
