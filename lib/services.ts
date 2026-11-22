import type { Lang } from "./dict";

/**
 * One landing page per service (for search). Copy is Muaz's voice; no invented
 * numbers or client results. Slugs are shared by both languages.
 */

export type ServiceCopy = {
  nav: string;
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  title: [string, string];
  intro: string;
  forTitle: string;
  forWho: string[];
  getTitle: string;
  get: string[];
  stepsTitle: string;
  steps: { t: string; d: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
  waMsg: string;
};

export type Service = {
  slug: string;
  icon: "social" | "meta" | "google" | "seo" | "code" | "ux";
  tags: string[];
  /** home-page section this service belongs to */
  home: "#marketing" | "#dev" | "#ux";
  copy: Record<Lang, ServiceCopy>;
};

export const services: Service[] = [
  {
    slug: "social-media",
    icon: "social",
    tags: ["Instagram", "TikTok", "Facebook", "Reels"],
    home: "#marketing",
    copy: {
      ar: {
        nav: "إدارة السوشال ميديا",
        metaTitle: "إدارة سوشال ميديا وصناعة محتوى | MUAZ TECH",
        metaDesc: "إدارة حسابات إنستغرام وتيك توك وفيسبوك بمحتوى بيبيع: خطة شهرية، ريلز، كاروسيل، وسكربتات مكتوبة بلغة زبونك. اعمل فحص مجاني لحساباتك.",
        eyebrow: "إدارة السوشال ميديا والمحتوى",
        title: ["محتوى بيجيب ", "رسائل… مو بس لايكات"],
        intro: "اللايكات حلوة، بس ما بتدفع إيجار. بكتبلك وبخططلك محتوى بيحكي مع زبونك الحقيقي، بيجاوب على أسئلته قبل ما يسألها، وبيوصّله لزر الرسالة.",
        forTitle: "هالخدمة إلك إذا:",
        forWho: [
          "عم تنزّل محتوى بس ما في رسائل ولا طلبات",
          "ما عندك وقت تفكّر شو تنزّل كل يوم",
          "حسابك مش واضح شو بتبيع ولمين",
          "بدك ريلز بس ما بتعرف كيف تبلّش",
        ],
        getTitle: "شو بتستلم",
        get: [
          "خطة محتوى شهرية مبنية على أسئلة زبونك",
          "أفكار ريلز وسكربتات جاهزة للتصوير",
          "كاروسيل وتصاميم بهوية مشروعك",
          "كابشن ودعوات تواصل واضحة بكل منشور",
          "مراجعة أسبوعية: شو جاب رسائل وشو لأ",
        ],
        stepsTitle: "كيف منشتغل",
        steps: [
          { t: "فحص الحساب", d: "منشوف شو عم ينزل، ومين عم يتفاعل، ووين الفجوة." },
          { t: "رسالة واضحة", d: "منحدد شو بتبيع، لمين، وليش إنت مو غيرك." },
          { t: "خطة الشهر", d: "مواضيع، صيغ، وأيام نشر، كلها مربوطة بهدف." },
          { t: "نشر وقياس", d: "كل أسبوع منشوف الأرقام ومنعدّل الخطة." },
        ],
        faqTitle: "أسئلة عن السوشال ميديا",
        faqs: [
          { q: "لازم إطلع أنا بالفيديوهات؟", a: "مش شرط. بس الوجه الحقيقي غالباً بيبني ثقة أسرع. منختار سوا الصيغة اللي بترتاح فيها." },
          { q: "بتنشروا عني ولا بس بتخططوا؟", a: "حسب الباقة. فينا نسلّمك الخطة والسكربتات، أو منتابع النشر والردود معك." },
          { q: "إيمتى بتبيّن النتيجة؟", a: "المحتوى بيحتاج وقت ليبني ثقة. بس من أول أسابيع منتابع إشارات واضحة: رسائل، حفظ، ومشاركات." },
        ],
        ctaTitle: "خلّي حسابك يبلّش يجيب رسائل",
        ctaText: "ابعتلي رابط حسابك، وبقلّك أول ٣ شغلات لازم تتغيّر.",
        ctaBtn: "ابعتلي حسابي عالواتساب",
        waMsg: "أهلين معاذ، حابب تشوف حسابي على السوشال ميديا. هاد الرابط: ",
      },
      en: {
        nav: "Social Media Management",
        metaTitle: "Social Media Management & Content Creation | MUAZ TECH",
        metaDesc: "Instagram, TikTok and Facebook management with content that sells: a monthly plan, reels, carousels, and scripts in your customer's language. Get a free audit.",
        eyebrow: "Social media & content",
        title: ["Content that brings ", "messages… not just likes"],
        intro: "Likes feel nice, but they don't pay rent. I plan and write content that talks to your real customer, answers their questions before they ask, and leads them to the message button.",
        forTitle: "This is for you if:",
        forWho: [
          "You post regularly but get no messages or orders",
          "You don't have time to think about what to post",
          "Your account doesn't make clear what you sell, or to whom",
          "You want reels but don't know where to start",
        ],
        getTitle: "What you get",
        get: [
          "A monthly content plan built on your customers' questions",
          "Reel ideas and ready-to-shoot scripts",
          "On-brand carousels and designs",
          "Captions with a clear call to action on every post",
          "A weekly review: what brought messages and what didn't",
        ],
        stepsTitle: "How we work",
        steps: [
          { t: "Account audit", d: "What you post, who engages, and where the gap is." },
          { t: "A clear message", d: "What you sell, to whom, and why you over anyone else." },
          { t: "The monthly plan", d: "Topics, formats, and posting days, all tied to a goal." },
          { t: "Publish & measure", d: "Every week we read the numbers and adjust the plan." },
        ],
        faqTitle: "Social media questions",
        faqs: [
          { q: "Do I have to appear in the videos?", a: "Not necessarily. A real face usually builds trust faster, though. We'll pick a format you're comfortable with." },
          { q: "Do you post for me, or just plan?", a: "It depends on the package. I can hand over the plan and scripts, or handle publishing and replies with you." },
          { q: "When will I see results?", a: "Content takes time to build trust. But from the first weeks we track clear signals: messages, saves, and shares." },
        ],
        ctaTitle: "Make your account bring in messages",
        ctaText: "Send me your account link, and I'll tell you the first 3 things to change.",
        ctaBtn: "Send my account on WhatsApp",
        waMsg: "Hi Muaz, I'd like you to look at my social media account. Here's the link: ",
      },
    },
  },
  {
    slug: "meta-ads",
    icon: "meta",
    tags: ["Meta Ads", "Pixel", "Conversions API", "A/B testing"],
    home: "#marketing",
    copy: {
      ar: {
        nav: "إعلانات فيسبوك وإنستغرام",
        metaTitle: "إعلانات فيسبوك وإنستغرام (Meta Ads) | MUAZ TECH",
        metaDesc: "حملات إعلانية على فيسبوك وإنستغرام هدفها رسائل وطلبات ومبيعات، مع Pixel وConversions API مضبوطين واختبارات أسبوعية. بلا حرق مصاري.",
        eyebrow: "إعلانات ميتا الممولة",
        title: ["إعلانات فيسبوك وإنستغرام… ", "بلا حرق مصاري"],
        intro: "الإعلان مش زر «ترويج». هو نظام: جمهور صح، رسالة صح، وصفحة أو واتساب جاهزين يستقبلوا. وكل قرش لازم نعرف وين راح وشو جاب.",
        forTitle: "هالخدمة إلك إذا:",
        forWho: [
          "دفعت عالإعلانات وما بتعرف شو رجعلك",
          "عم تجيك رسائل بس مش زبائن حقيقيين",
          "حساب الإعلانات أو البكسل مش باسمك",
          "بدك تكبّر بس خايف تخسر",
        ],
        getTitle: "شو بتستلم",
        get: [
          "إعداد Pixel وConversions API لقياس دقيق",
          "حملات مبنية على هدف واحد: رسالة، طلب، أو بيعة",
          "اختبار إعلانات أسبوعي (صور، فيديو، نص)",
          "استهداف وجماهير مشابهة لزبائنك الحاليين",
          "تقرير أسبوعي: شو منزيد، وشو منوقّف",
          "حساب الإعلانات والبيانات باسمك",
        ],
        stepsTitle: "كيف منشتغل",
        steps: [
          { t: "فحص قبل الصرف", d: "القياس، الصفحة، والواتساب جاهزين؟ إذا لأ منصلّحهن أول." },
          { t: "عرض ورسالة", d: "شو اللي بيخلّي حدا يوقف ويكبس؟ منكتبه ومنصممه." },
          { t: "إطلاق واختبار", d: "ميزانية صغيرة، كذا نسخة، ومنشوف مين بيربح." },
          { t: "تكبير", d: "اللي بيشتغل منزيده، واللي ما بيشتغل منوقفه بسرعة." },
        ],
        faqTitle: "أسئلة عن الإعلانات",
        faqs: [
          { q: "قديش لازم ميزانية؟", a: "منبلّش بميزانية صغيرة للاختبار، وما منكبّر إلا لما يبيّن شو عم يجيب نتيجة. الرقم بيتحدد حسب مشروعك وسوقك." },
          { q: "ليش لازم الحساب يكون باسمي؟", a: "لأن البيانات والجمهور اللي بيتجمّع هن ملكك. إذا وقّفنا الشغل، كل شي بيضل عندك." },
          { q: "شو يعني Conversions API؟", a: "طريقة بتبعت أحداث البيع والرسائل لميتا من السيرفر، فالقياس بيصير أدق والإعلانات بتتعلم أحسن." },
        ],
        ctaTitle: "قبل ما تصرف قرش كمان…",
        ctaText: "خلّينا نفحص إعلاناتك وقياسك، وبقلّك وين المصاري عم تروح.",
        ctaBtn: "افحصلي إعلاناتي",
        waMsg: "أهلين معاذ، بدي تفحصلي إعلاناتي على فيسبوك وإنستغرام.",
      },
      en: {
        nav: "Facebook & Instagram Ads",
        metaTitle: "Facebook & Instagram Ads (Meta Ads) | MUAZ TECH",
        metaDesc: "Facebook and Instagram campaigns built for messages, orders, and sales, with a properly configured Pixel and Conversions API and weekly testing. No burning cash.",
        eyebrow: "Meta ads",
        title: ["Facebook & Instagram ads… ", "without burning cash"],
        intro: "An ad isn't a “boost” button. It's a system: the right audience, the right message, and a page or WhatsApp ready to receive them. And every cent should be traceable.",
        forTitle: "This is for you if:",
        forWho: [
          "You've spent on ads and don't know what came back",
          "You get messages, but not real customers",
          "The ad account or pixel isn't in your name",
          "You want to scale but you're afraid of losing money",
        ],
        getTitle: "What you get",
        get: [
          "Pixel and Conversions API set up for accurate tracking",
          "Campaigns built on one goal: a message, an order, or a sale",
          "Weekly creative testing (image, video, copy)",
          "Targeting and lookalike audiences based on your customers",
          "A weekly report: what to scale, and what to stop",
          "The ad account and data in your name",
        ],
        stepsTitle: "How we work",
        steps: [
          { t: "Audit before spend", d: "Are tracking, the page, and WhatsApp ready? If not, we fix them first." },
          { t: "Offer & message", d: "What makes someone stop and tap? We write and design it." },
          { t: "Launch & test", d: "A small budget, several versions, and we see what wins." },
          { t: "Scale", d: "What works gets more budget; what doesn't gets stopped fast." },
        ],
        faqTitle: "Ads questions",
        faqs: [
          { q: "How much budget do I need?", a: "We start with a small testing budget and only scale once it's clear what's working. The number depends on your business and market." },
          { q: "Why should the account be in my name?", a: "Because the data and audiences it collects belong to you. If we ever stop working together, everything stays with you." },
          { q: "What is the Conversions API?", a: "A way to send sales and message events to Meta from the server, so tracking is more accurate and ads learn better." },
        ],
        ctaTitle: "Before you spend another cent…",
        ctaText: "Let's audit your ads and tracking, and I'll show you where the money is going.",
        ctaBtn: "Audit my ads",
        waMsg: "Hi Muaz, I'd like you to audit my Facebook and Instagram ads.",
      },
    },
  },
  {
    slug: "google-ads",
    icon: "google",
    tags: ["Google Ads", "Search", "Maps", "YouTube"],
    home: "#marketing",
    copy: {
      ar: {
        nav: "إعلانات جوجل",
        metaTitle: "إعلانات جوجل (Google Ads) | MUAZ TECH",
        metaDesc: "اطلع قدام الناس اللي عم تدوّر على خدمتك هلق: حملات بحث وخرائط ويوتيوب، كلمات مفتاحية بتجيب زبائن، وتتبّع للمكالمات والواتساب.",
        eyebrow: "إعلانات جوجل",
        title: ["اطلع قدام اللي ", "عم يدوّر عليك هلق"],
        intro: "اللي بيكتب خدمتك بجوجل جاهز يشتري. إعلانات جوجل بتحطّك قدامه بهاللحظة، بس لازم كلمات صح وصفحة بتقنع وتتبّع بيعرّفك مين اتصل ومين بعت.",
        forTitle: "هالخدمة إلك إذا:",
        forWho: [
          "زبائنك بيدوّروا على خدمتك بجوجل",
          "منافسينك طالعين قبلك بالبحث",
          "جرّبت إعلانات جوجل وطلعت غالية",
          "بدك تعرف كل اتصال من وين إجا",
        ],
        getTitle: "شو بتستلم",
        get: [
          "بحث كلمات مفتاحية حسب نية الشراء",
          "حملات بحث وخرائط (ويوتيوب إذا بيناسب)",
          "كلمات سلبية لحتى ما تدفع على بحث ما إله دخل",
          "تتبّع المكالمات ورسائل الواتساب والنماذج",
          "تحسين أسبوعي للإعلانات والعروض",
        ],
        stepsTitle: "كيف منشتغل",
        steps: [
          { t: "الكلمات", d: "شو بيكتب زبونك فعلاً؟ منجمع ومنصنّف حسب النية." },
          { t: "الصفحة والتتبّع", d: "منتأكد إنه كل اتصال ورسالة بينعدّ." },
          { t: "الإطلاق", d: "حملات مركّزة بميزانية مدروسة." },
          { t: "التحسين", d: "منقطع اللي بيهدر، ومنزيد اللي بيجيب زبون." },
        ],
        faqTitle: "أسئلة عن إعلانات جوجل",
        faqs: [
          { q: "شو الفرق بين إعلانات جوجل وميتا؟", a: "جوجل بيوصلك للي عم يدوّر أصلاً، وميتا بيوصلك لناس ممكن يهتموا. كتير مشاريع بتستفيد من الاتنين، بس حسب الهدف." },
          { q: "بطلع بالخرائط كمان؟", a: "إذا عندك موقع فعلي أو منطقة خدمة، فينا نشغّل إعلانات بتطلع بخرائط جوجل، ومعها منرتّب ملف Google Business." },
          { q: "كيف بعرف إنه الإعلان جاب اتصال؟", a: "منركّب تتبّع للمكالمات وكبسات الواتساب، فبتشوف بالتقرير كل إعلان قديش جاب." },
        ],
        ctaTitle: "خلّي الزبون يلاقيك قبل غيرك",
        ctaText: "قلّي شو خدمتك ووين بتشتغل، وبقلّك إذا جوجل بيناسبك.",
        ctaBtn: "اسألني عن إعلانات جوجل",
        waMsg: "أهلين معاذ، حابب أعرف إذا إعلانات جوجل بتناسب مشروعي.",
      },
      en: {
        nav: "Google Ads",
        metaTitle: "Google Ads Management | MUAZ TECH",
        metaDesc: "Show up for people searching for your service right now: Search, Maps, and YouTube campaigns, buyer-intent keywords, and call and WhatsApp tracking.",
        eyebrow: "Google ads",
        title: ["Show up for people ", "searching for you right now"],
        intro: "Someone searching for your service on Google is ready to buy. Google Ads put you in front of them at that moment, but you need the right keywords, a convincing page, and tracking that shows who called and who messaged.",
        forTitle: "This is for you if:",
        forWho: [
          "Your customers search for your service on Google",
          "Competitors show up before you in search",
          "You tried Google Ads and it was expensive",
          "You want to know where every call came from",
        ],
        getTitle: "What you get",
        get: [
          "Keyword research by buyer intent",
          "Search and Maps campaigns (and YouTube when it fits)",
          "Negative keywords so you don't pay for irrelevant searches",
          "Call, WhatsApp, and form tracking",
          "Weekly optimization of ads and offers",
        ],
        stepsTitle: "How we work",
        steps: [
          { t: "Keywords", d: "What does your customer actually type? We gather and sort by intent." },
          { t: "Page & tracking", d: "We make sure every call and message counts." },
          { t: "Launch", d: "Focused campaigns with a considered budget." },
          { t: "Optimize", d: "Cut what wastes, scale what brings customers." },
        ],
        faqTitle: "Google Ads questions",
        faqs: [
          { q: "What's the difference between Google and Meta ads?", a: "Google reaches people already searching; Meta reaches people who might be interested. Many businesses benefit from both, depending on the goal." },
          { q: "Will I show up on Maps too?", a: "If you have a physical location or service area, we can run ads that appear on Google Maps, and set up your Google Business Profile alongside." },
          { q: "How do I know an ad brought a call?", a: "We set up call and WhatsApp-click tracking, so the report shows what each ad brought in." },
        ],
        ctaTitle: "Be found before your competitors",
        ctaText: "Tell me what you offer and where, and I'll tell you if Google fits.",
        ctaBtn: "Ask me about Google Ads",
        waMsg: "Hi Muaz, I'd like to know if Google Ads fit my business.",
      },
    },
  },
  {
    slug: "seo",
    icon: "seo",
    tags: ["SEO", "Local SEO", "Google Business", "Reviews"],
    home: "#marketing",
    copy: {
      ar: {
        nav: "SEO والظهور بجوجل",
        metaTitle: "تحسين محركات البحث SEO والظهور المحلي | MUAZ TECH",
        metaDesc: "خلّي زبونك يلاقيك لما يكتب خدمتك ومدينتك: SEO للموقع، ملف Google Business مرتّب، خطة تقييمات، وصفحات بتتصدّر البحث.",
        eyebrow: "SEO والظهور المحلي",
        title: ["لما حدا يدوّر على خدمتك… ", "لازم تطلع إنت"],
        intro: "الـ SEO مش سحر ولا كلمات مخبّاية. هو موقع سريع ومفهوم لجوجل، صفحات بتجاوب على أسئلة الناس، وملف Google Business مرتّب بتقييمات حقيقية.",
        forTitle: "هالخدمة إلك إذا:",
        forWho: [
          "ما بتطلع بجوجل لما حدا يكتب خدمتك",
          "عندك موقع بس ما حدا بيوصله من البحث",
          "ملفك على خرائط جوجل ناقص أو بلا تقييمات",
          "بدك زيارات ما بتدفع عليها كل شهر",
        ],
        getTitle: "شو بتستلم",
        get: [
          "فحص تقني للموقع: السرعة، الفهرسة، والأخطاء",
          "بحث كلمات وخطة صفحات حسب أسئلة زبونك",
          "تحسين العناوين والمحتوى والصور",
          "ترتيب ملف Google Business وخطة لجمع التقييمات",
          "ربط Search Console وتقرير شهري بالتطور",
        ],
        stepsTitle: "كيف منشتغل",
        steps: [
          { t: "الأساس التقني", d: "سرعة، فهرسة، وموقع مفهوم لجوجل." },
          { t: "الكلمات والصفحات", d: "صفحة لكل خدمة وسؤال مهم." },
          { t: "الظهور المحلي", d: "Google Business، تقييمات، وتواجد بالخرائط." },
          { t: "متابعة", d: "منراقب الترتيب والزيارات ومنضيف ونحسّن." },
        ],
        faqTitle: "أسئلة عن الـ SEO",
        faqs: [
          { q: "قديش بياخد الـ SEO وقت؟", a: "الـ SEO شغل طويل النفس. التحسينات التقنية بتبيّن أسرع، وبناء الترتيب بياخد أشهر حسب المنافسة. ما بوعدك بالمركز الأول بتاريخ محدد." },
          { q: "بتضمنلي أطلع أول نتيجة؟", a: "لأ، وما حدا صادق بيضمنها. اللي بضمنه إنه الموقع يكون مبني صح والمحتوى بيستاهل يطلع." },
          { q: "شو هو Google Business؟", a: "هو ملفك على خرائط جوجل: عنوانك، ساعاتك، صورك، وتقييماتك. وغالباً هو أول شي بيشوفه الزبون القريب." },
        ],
        ctaTitle: "خلّي جوجل يشتغل عندك",
        ctaText: "ابعتلي رابط موقعك أو اسم مشروعك، وبقلّك وين واقف بجوجل.",
        ctaBtn: "افحصلي ظهوري بجوجل",
        waMsg: "أهلين معاذ، بدي تفحصلي ظهور مشروعي بجوجل.",
      },
      en: {
        nav: "SEO & Google Visibility",
        metaTitle: "SEO & Local Search Optimization | MUAZ TECH",
        metaDesc: "Be found when customers search your service and city: website SEO, an optimized Google Business Profile, a review plan, and pages that rank.",
        eyebrow: "SEO & local visibility",
        title: ["When someone searches your service… ", "it should be you"],
        intro: "SEO isn't magic or hidden keywords. It's a fast site Google understands, pages that answer people's questions, and a well-kept Google Business Profile with real reviews.",
        forTitle: "This is for you if:",
        forWho: [
          "You don't show up when someone searches your service",
          "You have a website, but nobody finds it through search",
          "Your Google Maps profile is incomplete or has no reviews",
          "You want traffic you don't pay for every month",
        ],
        getTitle: "What you get",
        get: [
          "A technical audit: speed, indexing, and errors",
          "Keyword research and a page plan based on your customers' questions",
          "Optimized titles, content, and images",
          "Google Business Profile setup and a review plan",
          "Search Console connected and a monthly progress report",
        ],
        stepsTitle: "How we work",
        steps: [
          { t: "Technical base", d: "Speed, indexing, and a site Google understands." },
          { t: "Keywords & pages", d: "A page for every service and important question." },
          { t: "Local presence", d: "Google Business, reviews, and Maps visibility." },
          { t: "Follow-up", d: "We monitor rankings and traffic, then add and improve." },
        ],
        faqTitle: "SEO questions",
        faqs: [
          { q: "How long does SEO take?", a: "SEO is a long game. Technical fixes show sooner; building rankings takes months depending on competition. I won't promise the top spot by a date." },
          { q: "Do you guarantee the first result?", a: "No, and nobody honest does. What I guarantee is a properly built site and content that deserves to rank." },
          { q: "What is Google Business?", a: "Your profile on Google Maps: address, hours, photos, and reviews. It's often the first thing a nearby customer sees." },
        ],
        ctaTitle: "Make Google work for you",
        ctaText: "Send me your website or business name, and I'll tell you where you stand on Google.",
        ctaBtn: "Check my Google visibility",
        waMsg: "Hi Muaz, I'd like you to check my business's visibility on Google.",
      },
    },
  },
  {
    slug: "websites",
    icon: "code",
    tags: ["Next.js", "React", "Landing pages", "Dashboards"],
    home: "#dev",
    copy: {
      ar: {
        nav: "تصميم وبرمجة المواقع",
        metaTitle: "تصميم وبرمجة مواقع وصفحات هبوط | MUAZ TECH",
        metaDesc: "مواقع وصفحات هبوط سريعة عالموبايل ومبنية لتبيع، وأنظمة ولوحات تحكم للطلبات والحجوزات، مع ربط الواتساب والتتبّع. برمجة Next.js وReact.",
        eyebrow: "البرمجة",
        title: ["موقع مبني ", "ليجيب طلبات"],
        intro: "لأني مسوّق ومبرمج، ما ببني موقع حلو وبس. ببني صفحة سريعة عالموبايل، فيها رسالة واضحة وزر واحد، ومربوطة بالواتساب والتتبّع من أول يوم.",
        forTitle: "هالخدمة إلك إذا:",
        forWho: [
          "ما عندك موقع، أو موقعك قديم وبطيء",
          "بتجيك زيارات بس ما في طلبات",
          "بدك صفحة هبوط لحملة إعلانية",
          "شغلك ماشي على دفاتر وجداول وبدك نظام",
        ],
        getTitle: "شو بتستلم",
        get: [
          "موقع أو صفحة هبوط سريعة عالموبايل",
          "تصميم بهوية مشروعك ونص مكتوب ليبيع",
          "ربط الواتساب والنماذج والتتبّع (GA4 وPixel)",
          "SEO تقني من الأساس",
          "أنظمة ولوحات تحكم للطلبات والحجوزات (حسب الحاجة)",
          "الكود والدومين والاستضافة باسمك",
        ],
        stepsTitle: "كيف منشتغل",
        steps: [
          { t: "الهدف والرحلة", d: "شو بدنا الزائر يعمل؟ منرسم طريقه للزر." },
          { t: "تصميم وتجربة", d: "وايرفريم، بعدين واجهة بتجربها قبل البرمجة." },
          { t: "برمجة وربط", d: "موقع سريع، مربوط بالواتساب والتتبّع." },
          { t: "إطلاق وتحسين", d: "منقيس شو بيصير ومنحسّن." },
        ],
        faqTitle: "أسئلة عن المواقع",
        faqs: [
          { q: "بقدر عدّل الموقع لحالي؟", a: "إيه، حسب حاجتك منختار طريقة تخلّيك تعدّل النصوص والصور بسهولة، أو منتابع التعديلات معك." },
          { q: "بتعمل متاجر إلكترونية؟", a: "إيه، حسب حجم المتجر منختار الحل المناسب، من متجر بسيط مربوط بالواتساب لنظام كامل." },
          { q: "الموقع بيكون سريع عالموبايل؟", a: "هاد أول شي. السرعة بتأثر عالمبيعات وعلى ترتيبك بجوجل." },
        ],
        ctaTitle: "خلّي موقعك يشتغل عنك",
        ctaText: "قلّي شو مشروعك وشو بدك الموقع يعمل، وبقلّك الحل الأنسب.",
        ctaBtn: "قلّي عن مشروعك",
        waMsg: "أهلين معاذ، بدي موقع لمشروعي وحابب نحكي بالتفاصيل.",
      },
      en: {
        nav: "Web Design & Development",
        metaTitle: "Website & Landing Page Design and Development | MUAZ TECH",
        metaDesc: "Fast, mobile-first websites and landing pages built to sell, plus systems and dashboards for orders and bookings, with WhatsApp and tracking built in. Next.js and React.",
        eyebrow: "Development",
        title: ["A website built ", "to bring in orders"],
        intro: "Because I'm a marketer and a developer, I don't just build a pretty site. I build a fast mobile page with a clear message and one button, connected to WhatsApp and tracking from day one.",
        forTitle: "This is for you if:",
        forWho: [
          "You don't have a website, or yours is old and slow",
          "You get visits, but no orders",
          "You need a landing page for an ad campaign",
          "Your business runs on notebooks and spreadsheets and you want a system",
        ],
        getTitle: "What you get",
        get: [
          "A fast, mobile-first website or landing page",
          "On-brand design and copy written to sell",
          "WhatsApp, forms, and tracking (GA4 and Pixel) connected",
          "Technical SEO from the ground up",
          "Systems and dashboards for orders and bookings (when needed)",
          "Code, domain, and hosting in your name",
        ],
        stepsTitle: "How we work",
        steps: [
          { t: "Goal & journey", d: "What should the visitor do? We map their path to the button." },
          { t: "Design & prototype", d: "Wireframe, then an interface you can try before coding." },
          { t: "Build & connect", d: "A fast site connected to WhatsApp and tracking." },
          { t: "Launch & improve", d: "We measure what happens and improve it." },
        ],
        faqTitle: "Website questions",
        faqs: [
          { q: "Can I edit the site myself?", a: "Yes. Depending on your needs, we pick a setup that lets you edit text and images easily, or I handle edits with you." },
          { q: "Do you build online stores?", a: "Yes. Depending on the store's size, we pick the right solution, from a simple WhatsApp-connected store to a full system." },
          { q: "Will the site be fast on mobile?", a: "That comes first. Speed affects sales and your Google ranking." },
        ],
        ctaTitle: "Make your website work for you",
        ctaText: "Tell me about your business and what the site should do, and I'll suggest the right solution.",
        ctaBtn: "Tell me about your site",
        waMsg: "Hi Muaz, I need a website for my business and would like to discuss details.",
      },
    },
  },
  {
    slug: "ux-ui",
    icon: "ux",
    tags: ["Figma", "Wireframes", "Prototypes", "Design System"],
    home: "#ux",
    copy: {
      ar: {
        nav: "تصميم UX/UI",
        metaTitle: "تصميم تجربة وواجهة المستخدم UX/UI Design | MUAZ TECH",
        metaDesc: "تصميم UX/UI لمواقع وتطبيقات بتوصّل الزبون للزر بأقل كبسات: بحث المستخدم، رحلة الزبون، وايرفريم، واجهات بهويتك، ونموذج تفاعلي بتجربه قبل البرمجة.",
        eyebrow: "UX/UI Design",
        title: ["الزبون ما بيقرا… ", "بيكبس"],
        intro: "تصميم مو بس حلو. كل شاشة لازم تجاوب على سؤال الزبون قبل ما يسأله، وتوصّله للخطوة الجاية بلا ما يفكّر. وبتجرّب التصميم قبل ما يبلّش التنفيذ.",
        forTitle: "هالخدمة إلك إذا:",
        forWho: [
          "عندك فكرة تطبيق أو منصة وبدك تشوفها قبل البرمجة",
          "الناس بتفوت عموقعك وبتطلع بسرعة",
          "واجهتك مزحومة ومش واضح شو لازم يكبس الزائر",
          "بدك هوية بصرية موحّدة لكل شاشاتك",
        ],
        getTitle: "شو بتستلم",
        get: [
          "فهم الزبون ورسم رحلته من أول زيارة للطلب",
          "وايرفريم للهيكل قبل الألوان",
          "واجهات كاملة بهويتك، مريحة عالموبايل",
          "نموذج تفاعلي (Prototype) بتجربه وبتعرضه",
          "نظام تصميم (ألوان، خطوط، مكوّنات) للفريق",
        ],
        stepsTitle: "كيف منشتغل",
        steps: [
          { t: "فهم", d: "مين الزبون، شو بدو، ووين بيعلق." },
          { t: "هيكل", d: "رحلة ووايرفريم، قبل أي لون." },
          { t: "واجهة", d: "تصميم بهويتك، وجاهز للمطوّر." },
          { t: "اختبار", d: "منجرّب على ناس حقيقيين ومنصلّح." },
        ],
        faqTitle: "أسئلة عن UX/UI",
        faqs: [
          { q: "شو الفرق بين UX وUI؟", a: "الـ UX هو التجربة: الزبون بيوصل لهدفه بسهولة؟ والـ UI هو الشكل: الألوان والخطوط والأزرار. الاتنين لازم يمشوا سوا." },
          { q: "بتسلّم ملفات Figma؟", a: "إيه، بتستلم الملفات منظّمة وجاهزة للمطوّر، أو فيني أبرمجها أنا كمان." },
          { q: "بتصمم تطبيقات موبايل؟", a: "إيه، بصمم واجهات تطبيقات ومواقع، ومنقرر سوا إذا البرمجة بتكون عندي أو عند فريقك." },
        ],
        ctaTitle: "خلّينا نصمم تجربة بتقنع",
        ctaText: "ابعتلي فكرتك أو رابط موقعك، وبقلّك وين الزبون عم يعلق.",
        ctaBtn: "ابعتلي فكرتك",
        waMsg: "أهلين معاذ، عندي مشروع بحاجة تصميم UX/UI وحابب نحكي فيه.",
      },
      en: {
        nav: "UX/UI Design",
        metaTitle: "UX/UI Design for Websites and Apps | MUAZ TECH",
        metaDesc: "UX/UI design that gets customers to the button in the fewest taps: user research, customer journeys, wireframes, on-brand interfaces, and a clickable prototype before development.",
        eyebrow: "UX/UI Design",
        title: ["Customers don't read… ", "they tap"],
        intro: "Design that's more than pretty. Every screen should answer the customer's question before they ask it and move them to the next step without thinking. And you try the design before building starts.",
        forTitle: "This is for you if:",
        forWho: [
          "You have an app or platform idea and want to see it before coding",
          "People land on your site and leave quickly",
          "Your interface is cluttered and the next step isn't clear",
          "You want one consistent look across all your screens",
        ],
        getTitle: "What you get",
        get: [
          "Customer understanding and a journey map from first visit to order",
          "Wireframes for structure before color",
          "Complete on-brand interfaces, comfortable on mobile",
          "A clickable prototype to test and present",
          "A design system (colors, type, components) for your team",
        ],
        stepsTitle: "How we work",
        steps: [
          { t: "Understand", d: "Who the customer is, what they want, where they get stuck." },
          { t: "Structure", d: "Journey and wireframes, before any color." },
          { t: "Interface", d: "On-brand design, ready for developers." },
          { t: "Test", d: "We try it with real people and fix what's off." },
        ],
        faqTitle: "UX/UI questions",
        faqs: [
          { q: "What's the difference between UX and UI?", a: "UX is the experience: can the customer reach their goal easily? UI is the look: colors, type, and buttons. Both need to work together." },
          { q: "Do you deliver Figma files?", a: "Yes, organized files ready for developers, or I can build them myself too." },
          { q: "Do you design mobile apps?", a: "Yes, I design app and website interfaces, and we decide together whether I build it or your team does." },
        ],
        ctaTitle: "Let's design an experience that convinces",
        ctaText: "Send me your idea or website, and I'll show you where customers get stuck.",
        ctaBtn: "Tell me about your idea",
        waMsg: "Hi Muaz, I have a project that needs UX/UI design and I'd like to discuss it.",
      },
    },
  },
];

export const serviceHref = (lang: Lang, slug: string) =>
  `${lang === "ar" ? "" : "/en"}/services/${slug}`;

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/** Small shared labels for service pages. */
export const serviceUi: Record<Lang, {
  home: string; services: string; otherTitle: string; audit: string; auditText: string; more: string;
}> = {
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    otherTitle: "خدمات تانية ممكن تحتاجها",
    audit: "اعمل الفحص المجاني",
    auditText: "مش متأكد شو بيحتاج مشروعك؟ جاوب على ٦ أسئلة بدقيقتين.",
    more: "اعرف أكتر ←",
  },
  en: {
    home: "Home",
    services: "Services",
    otherTitle: "Other services you might need",
    audit: "Take the free audit",
    auditText: "Not sure what your business needs? Answer 6 questions in two minutes.",
    more: "Learn more →",
  },
};
