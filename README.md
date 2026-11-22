# muaztech.com — v2

موقع MUAZ TECH: تسويق رقمي أولاً، ومعه البرمجة وUX/UI.

- **عربي** (عامية شامية، RTL) على `/`
- **English** (LTR) على `/en`

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
| `lib/dict.ts` | **كل نصوص الموقع باللغتين** — عدّل من هون |
| `lib/site.ts` | رقم الواتساب، الإنستغرام، الدومين |
| `lib/page-shell.tsx` | الخط، الميتاداتا، OpenGraph لكل لغة |
| `app/(ar)` و `app/(en)/en` | صفحة كل لغة |
| `components/Hero.tsx` | الهيرو |
| `components/Audit.tsx` | أداة «افحص مشروعك» (٦ أسئلة → أخضر/أصفر/أحمر → واتساب) |
| `components/Sections.tsx` | المشكلة، كيف بشتغل، الخدمات، البرمجة، UX/UI، المكتبة، عني، الدعوة الأخيرة |

## لسا ناقص

- [ ] أسعار الباقات (حالياً «السعر حسب مشروعك» / "Priced to your project" بـ `lib/dict.ts` ← `services.price`)
- [ ] صفحات المكتبة (`/library`)، الروابط حالياً بتروح عالإنستغرام
- [x] صورة OpenGraph 1200×630 (`public/og.jpg` عربي، `public/og-en.jpg` إنجليزي)
- [ ] لما تشتري الدومين: غيّر `url` بـ `lib/site.ts`

## النشر على Vercel

Import للريبو بـ Vercel (الإعدادات الافتراضية بتكفي)، وبعدين ضيف الدومين `muaztech.com`.

## SEO: الإعداد بعد شراء الدومين

1. **الدومين:** Vercel ← Settings ← Domains ← ضيف الدومين وحط سجلات الـ DNS.
2. **رابط الموقع:** Vercel ← Settings ← Environment Variables ← `NEXT_PUBLIC_SITE_URL` = `https://الدومين` ← Redeploy.
3. **Google Search Console:** search.google.com/search-console ← Add property ← URL prefix ← اختار «HTML tag» وانسخ قيمة `content` بس ← حطها بـ `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` بـ Vercel ← Redeploy ← Verify.
4. بـ Search Console ← Sitemaps ← اكتب `sitemap.xml` ← Submit.

## صفحات الخدمات

النصوص كلها بـ `lib/services.ts` (عربي وإنجليزي). كل خدمة إلها صفحة على `/services/<slug>` و`/en/services/<slug>`، وبتنضاف لحالها عالـ sitemap.
