import type { Lang } from "./dict";

/**
 * Blog posts. Written in Muaz's voice; no invented statistics. Any number used
 * to illustrate is labelled as an example. Add a post by appending to `posts`.
 */

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "tip"; title: string; text: string }
  | { t: "quote"; text: string };

export type PostCopy = {
  title: string;
  desc: string;
  excerpt: string;
  body: Block[];
};

export type Category = "marketing" | "dev" | "ux";

export type Post = {
  slug: string;
  category: Category;
  date: string; // ISO
  readMins: number;
  /** related service page */
  service: string;
  copy: Record<Lang, PostCopy>;
};

export const posts: Post[] = [
  {
    slug: "show-up-on-google-maps",
    category: "marketing",
    date: "2026-11-22",
    readMins: 5,
    service: "seo",
    copy: {
      ar: {
        title: "كيف تطلع بخرائط جوجل لما حدا يدوّر على خدمتك",
        desc: "دليل عملي لملف Google Business: شو لازم تعبّي، كيف تجمع تقييمات حقيقية، وشو الأخطاء اللي ممكن توقف ملفك.",
        excerpt: "الزبون القريب منك ما بيفتح مواقع… بيفتح الخريطة. وأول شي بيشوفه هو ملفك على جوجل.",
        body: [
          { t: "p", text: "لما حدا يكتب «مطعم شاورما قريب مني» أو «مصمم مواقع بإسطنبول»، أول شي بيطلعله غالباً مش موقع، بل خريطة فيها كم مشروع مع تقييماتهم وصورهم. هاد ملف Google Business، وهو من أسهل وأرخص الطرق ليلاقيك زبون جاهز يشتري." },
          { t: "h2", text: "أول شي: هل مشروعك بيحق إله ملف؟" },
          { t: "p", text: "جوجل بيعطي ملف للمشاريع اللي بتتعامل مع زبائنها وجهاً لوجه: إما عندك محل أو مكتب بيجوا عليه، أو إنت بتروح لعندهم بمنطقة معيّنة. إذا ما عندك مكان يستقبل زبائن، فيك تخفي العنوان وتحدد «منطقة الخدمة» بدل منه." },
          { t: "h2", text: "عبّي الملف كامل… كل خانة مهمة" },
          { t: "ul", items: ["الاسم: اسم مشروعك الحقيقي بس، بلا كلمات زيادة متل «أفضل» أو اسم المدينة", "الفئة الأساسية: الأدق لشغلك، وبعدها فئات إضافية", "الوصف: شو بتعمل، لمين، وشو بيميّزك، بلغة الناس مش بلغة إعلانات", "ساعات العمل الحقيقية، والتحديث بالأعياد", "صور حقيقية: المكان، الشغل، الفريق، المنتج", "الخدمات أو المنتجات مع وصف قصير لكل وحدة", "رابط موقعك، ورابط حجز أو واتساب"] },
          { t: "tip", title: "انتبه", text: "إضافة كلمات بحث لاسم المشروع (متل «MUAZ TECH أفضل تسويق بإسطنبول») ممكن تخلّي جوجل يوقف الملف. خلّي الاسم متل ما هو على لافتتك أو أوراقك." },
          { t: "h2", text: "التقييمات: أهم شي بعد الملف نفسه" },
          { t: "p", text: "التقييمات بتأثر على ترتيبك وعلى قرار الزبون. بس الشغلة مش بعددها بس، كمان بحداثتها وبطريقة ردّك عليها." },
          { t: "ol", items: ["خد رابط التقييم من ملفك (زر «اطلب تقييمات»)", "ابعته للزبون مباشرة بعد ما يكون مبسوط، مش بعد شهر", "اطلب منه يحكي شو عجبه بالظبط، هاد بيساعد غيره يقرر", "رد على كل تقييم، الحلو والوحش، بهدوء واحترام"] },
          { t: "p", text: "وما تشتري تقييمات ولا تكتب تقييمات وهمية. غير إنه ممنوع وممكن يوقف ملفك، الزبون بيكشفها بسرعة." },
          { t: "h2", text: "خلّي الملف حي" },
          { t: "p", text: "نزّل تحديثات وصور جديدة بين فترة وفترة: عرض، شغل جديد، أو سؤال بيتكرر. الملف اللي بيتحدّث بيعطي انطباع إنه المشروع شغّال، وجوجل كمان بيلاحظ." },
          { t: "quote", text: "ملف Google Business هو واجهة محلّك على الإنترنت. نضّفها متل ما بتنضّف واجهتك الحقيقية." },
          { t: "h2", text: "الخلاصة" },
          { t: "p", text: "ملف كامل، صور حقيقية، تقييمات مستمرة، ورد على كل وحدة. هاد كله ببلاش، وبيشتغل عنك ٢٤ ساعة. إذا بدك نفحص ملفك ونقلّك شو ناقص، الفحص المجاني موجود." },
        ],
      },
      en: {
        title: "How to show up on Google Maps when people search for your service",
        desc: "A practical guide to Google Business Profile: what to fill in, how to collect real reviews, and the mistakes that can get your profile suspended.",
        excerpt: "Nearby customers don't open websites… they open the map. And the first thing they see is your Google profile.",
        body: [
          { t: "p", text: "When someone searches “shawarma near me” or “web designer in Istanbul,” the first thing they usually see isn't a website but a map with a few businesses, their reviews, and photos. That's Google Business Profile, and it's one of the easiest, cheapest ways for a ready-to-buy customer to find you." },
          { t: "h2", text: "First: is your business eligible?" },
          { t: "p", text: "Google gives profiles to businesses that deal with customers face to face: either you have a shop or office they visit, or you go to them within a certain area. If you don't have a place that receives customers, you can hide the address and set a service area instead." },
          { t: "h2", text: "Fill in the whole profile… every field matters" },
          { t: "ul", items: ["Name: your real business name only, no extra words like “best” or the city", "Primary category: the most accurate one for your work, then extra categories", "Description: what you do, for whom, and what sets you apart, in plain language", "Real opening hours, updated for holidays", "Real photos: the place, the work, the team, the product", "Services or products, each with a short description", "Your website link, plus a booking or WhatsApp link"] },
          { t: "tip", title: "Watch out", text: "Adding search keywords to your business name (like “MUAZ TECH best marketing Istanbul”) can get your profile suspended. Keep the name exactly as it appears on your sign or documents." },
          { t: "h2", text: "Reviews: the most important thing after the profile itself" },
          { t: "p", text: "Reviews affect both your ranking and the customer's decision. It's not just how many you have, but how recent they are and how you respond." },
          { t: "ol", items: ["Get your review link from the profile (“Ask for reviews”)", "Send it right after a happy customer interaction, not a month later", "Ask them to mention what exactly they liked; it helps others decide", "Reply to every review, good or bad, calmly and respectfully"] },
          { t: "p", text: "Never buy reviews or write fake ones. Beyond being against the rules and risking your profile, customers spot them quickly." },
          { t: "h2", text: "Keep the profile alive" },
          { t: "p", text: "Post updates and new photos from time to time: an offer, new work, or a frequently asked question. A profile that gets updated signals an active business, and Google notices too." },
          { t: "quote", text: "Your Google Business Profile is your storefront on the internet. Keep it as clean as your real one." },
          { t: "h2", text: "The takeaway" },
          { t: "p", text: "A complete profile, real photos, a steady flow of reviews, and a reply to each one. It's all free, and it works for you 24 hours a day. If you'd like your profile checked for what's missing, the free audit is there." },
        ],
      },
    },
  },
  {
    slug: "wireframe-before-design",
    category: "ux",
    date: "2026-11-22",
    readMins: 4,
    service: "ux-ui",
    copy: {
      ar: {
        title: "وايرفريم قبل التصميم: ليش لازم تشوف موقعك قبل ما ينبرمج",
        desc: "شو هو الوايرفريم والنموذج التفاعلي، وليش بيوفّروا وقت ومصاري، وكيف بتستفيد منهم كصاحب مشروع حتى لو ما عندك خبرة بالتصميم.",
        excerpt: "التعديل على ورقة بياخد دقيقة. التعديل على موقع مبرمج بياخد أيام. هون بيجي دور الوايرفريم.",
        body: [
          { t: "p", text: "كتير مشاريع بتبلّش هيك: صاحب المشروع بيوصف شو بدو، المصمم بيصمم، المبرمج بيبرمج، وبعدين وقت التسليم: «لا، مش هيك كنت متخيّل». وبيرجع الشغل من الأول. الوايرفريم موجود لحتى ما يصير هالشي." },
          { t: "h2", text: "شو هو الوايرفريم؟" },
          { t: "p", text: "هو رسمة بسيطة للصفحة، بالأبيض والرمادي، بلا ألوان ولا صور حقيقية. بيبيّن وين كل شي: العنوان، الصور، الأزرار، الأقسام، وترتيبها. متل مخطط البيت قبل ما تبلّش تعمّر: بتشوف الغرف ووين الأبواب قبل ما تختار لون الحيطان." },
          { t: "h2", text: "ليش بلا ألوان؟" },
          { t: "p", text: "لأنه لما تشوف ألوان وصور، بتبلّش تحكي عن الألوان والصور. والمهم بهالمرحلة شي تاني: هل الترتيب منطقي؟ هل الزبون رح يلاقي الزر؟ هل في شي ناقص أو زيادة؟ الوايرفريم بيخلّي النقاش عالشي الصح." },
          { t: "h2", text: "وبعدها: النموذج التفاعلي" },
          { t: "p", text: "بعد ما نتفق عالهيكل، منصمم الواجهة بهويتك، ومنعمل منها نموذج تفاعلي (Prototype): صفحات بتنكبس وبتنقلك من وحدة لوحدة متل الموقع الحقيقي، بس بلا برمجة. بتجربه على تلفونك، بتورجيه لشريكك أو لزبون، وبتعرف شو لازم يتغيّر." },
          { t: "ul", items: ["بتشوف الموقع قبل ما تدفع على البرمجة", "التعديل بهالمرحلة سريع ورخيص", "فيك تجرّب الفكرة على زبائن حقيقيين", "المبرمج بيستلم شي واضح، فبيقلّ الغلط والتأخير"] },
          { t: "tip", title: "كصاحب مشروع", text: "لما يوصلك الوايرفريم، لا تسأل «حلو ولا لأ؟». اسأل: «إذا كنت زبون، بعرف شو لازم أعمل؟». هاد السؤال اللي بيفرق." },
          { t: "h2", text: "إيمتى ممكن تتخطّاه؟" },
          { t: "p", text: "إذا الصفحة صغيرة كتير وواضحة، متل صفحة هبوط بسيطة لعرض واحد، ممكن نختصر. بس بأي موقع فيه كذا صفحة، أو تطبيق، أو نظام، الوايرفريم بيوفّر أكتر بكتير من الوقت اللي بياخده." },
          { t: "quote", text: "ورقة ممحية أرخص من كود منكتب من جديد." },
          { t: "h2", text: "الخلاصة" },
          { t: "p", text: "وايرفريم للهيكل، بعدين تصميم بهويتك، بعدين نموذج بتجربه، وبعدها برمجة. هيك بتعرف شو رح تستلم قبل ما تستلمه، وبيوصل الموقع متل ما تخيّلته، أو أحسن." },
        ],
      },
      en: {
        title: "Wireframe before design: why you should see your site before it's built",
        desc: "What wireframes and interactive prototypes are, why they save time and money, and how you benefit from them as a business owner even without design experience.",
        excerpt: "Changing a sketch takes a minute. Changing a built website takes days. That's where wireframes come in.",
        body: [
          { t: "p", text: "Many projects go like this: the owner describes what they want, the designer designs, the developer builds, and then at delivery: “No, that's not what I pictured.” And the work starts over. Wireframes exist so that doesn't happen." },
          { t: "h2", text: "What is a wireframe?" },
          { t: "p", text: "It's a simple sketch of the page, in white and gray, with no colors or real images. It shows where everything goes: headline, images, buttons, sections, and their order. Like a house floor plan before construction: you see the rooms and doors before choosing the wall color." },
          { t: "h2", text: "Why no colors?" },
          { t: "p", text: "Because when you see colors and images, you start discussing colors and images. What matters at this stage is something else: is the order logical? Will customers find the button? Is anything missing or extra? A wireframe keeps the discussion on the right thing." },
          { t: "h2", text: "Then: the interactive prototype" },
          { t: "p", text: "Once we agree on the structure, we design the interface in your brand and turn it into an interactive prototype: tappable pages that move from one to another like the real site, but with no code. You try it on your phone, show it to a partner or customer, and learn what needs to change." },
          { t: "ul", items: ["You see the site before paying for development", "Changes at this stage are fast and cheap", "You can test the idea with real customers", "The developer receives something clear, so fewer mistakes and delays"] },
          { t: "tip", title: "As a business owner", text: "When you receive the wireframe, don't ask “Is it pretty?” Ask: “If I were a customer, would I know what to do?” That's the question that matters." },
          { t: "h2", text: "When can you skip it?" },
          { t: "p", text: "If the page is very small and clear, like a simple landing page for one offer, we can shorten the process. But for any site with several pages, an app, or a system, a wireframe saves far more time than it takes." },
          { t: "quote", text: "An erased sketch is cheaper than rewritten code." },
          { t: "h2", text: "The takeaway" },
          { t: "p", text: "Wireframe for structure, then on-brand design, then a prototype you can try, then development. That way you know what you'll get before you get it, and the site arrives the way you imagined it, or better." },
        ],
      },
    },
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const blogHref = (lang: Lang, slug?: string) =>
  `${lang === "ar" ? "" : "/en"}/blog${slug ? `/${slug}` : ""}`;

export const blogUi: Record<Lang, {
  nav: string; eyebrow: string; title: string; lead: string; all: string; minRead: (n: number) => string;
  cats: Record<Category | "all", string>; read: string; related: string; relatedCta: string; more: string;
  homeTitle: string; homeLead: string; by: string; back: string; audit: string;
}> = {
  ar: {
    nav: "المدونة",
    eyebrow: "المدونة",
    title: "مقالات بالتسويق الرقمي والبرمجة وUX",
    lead: "شرح عملي بلغة بسيطة، من شغل حقيقي مع مشاريع حقيقية.",
    all: "كل المقالات ←",
    minRead: (n) => `${n} دقايق قراءة`,
    cats: { all: "الكل", marketing: "تسويق رقمي", dev: "برمجة", ux: "UX/UI" },
    read: "اقرا المقال ←",
    related: "الخدمة المرتبطة بهالمقال",
    relatedCta: "شوف الخدمة ←",
    more: "مقالات تانية",
    homeTitle: "من المدونة",
    homeLead: "مقالات قصيرة بتساعدك تاخد قرارات أحسن لمشروعك.",
    by: "معاذ",
    back: "← كل المقالات",
    audit: "اعمل الفحص المجاني",
  },
  en: {
    nav: "Blog",
    eyebrow: "Blog",
    title: "Articles on digital marketing, development, and UX",
    lead: "Practical explanations in plain language, from real work with real businesses.",
    all: "All articles →",
    minRead: (n) => `${n} min read`,
    cats: { all: "All", marketing: "Digital marketing", dev: "Development", ux: "UX/UI" },
    read: "Read article →",
    related: "The service behind this article",
    relatedCta: "See the service →",
    more: "More articles",
    homeTitle: "From the blog",
    homeLead: "Short articles that help you make better decisions for your business.",
    by: "Muaz",
    back: "← All articles",
    audit: "Take the free audit",
  },
};
