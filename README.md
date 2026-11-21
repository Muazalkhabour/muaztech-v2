# muaztech.com — v2

موقع MUAZ TECH: تسويق رقمي أولاً، ومعه البرمجة وUX/UI. عربي RTL، عامية شامية.

- **التقنية:** Next.js (App Router) + TypeScript، صفحة ستاتيك بالكامل، جاهز لـ Vercel.
- **الخط:** IBM Plex Sans Arabic (عن طريق `next/font`).
- **الهوية:** غامق `#0b0b0d` / `#0e0e10`، ذهبي `#d4af37` / `#f5d77a`. كل الألوان كمتغيّرات بـ `app/globals.css`.
- **الهيرو:** «ب٣ الكود»، الصورة بالنص ووراها علامة `</>` ضخمة بخط ذهبي مضيء.

## التشغيل

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## البنية

| الملف | شو فيه |
|---|---|
| `lib/site.ts` | رقم الواتساب، الإنستغرام، الدومين، روابط القائمة |
| `app/layout.tsx` | الخط، الميتاداتا، OpenGraph |
| `components/Hero.tsx` | الهيرو |
| `components/Audit.tsx` | أداة «افحص مشروعك» (٦ أسئلة → أخضر/أصفر/أحمر → واتساب) |
| `components/Sections.tsx` | المشكلة، كيف بشتغل، الخدمات، البرمجة، UX/UI، المكتبة، عني، الدعوة الأخيرة |

## لسا ناقص

- [ ] أسعار الباقات (حالياً `[السعر]` بـ `components/Sections.tsx`)
- [ ] صفحات المكتبة (`/library`)، الروابط حالياً بتروح عالإنستغرام
- [ ] صورة OpenGraph 1200×630

## النشر على Vercel

Import للريبو بـ Vercel، و**Root Directory = `muaztech-v2`** إذا ضل المشروع بهالمجلد. بعدين ضيف الدومين `muaztech.com`.
