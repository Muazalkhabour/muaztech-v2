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
  {
    slug: "email-marketing-small-business",
    category: "marketing",
    date: "2026-11-22",
    readMins: 5,
    service: "marketing-strategy",
    copy: {
      ar: {
        title: "التسويق بالإيميل للمشاريع الصغيرة: لسا بيشتغل؟",
        desc: "الإيميل مش موضة قديمة. هو القناة الوحيدة اللي بتملكها فعلاً. كيف تبني قائمة، شو تبعت، وكيف ما تصير رسايلك سبام.",
        excerpt: "حسابك على السوشال ممكن ينقفل بكرا. قائمة الإيميلات تبعك… بتضل إلك.",
        body: [
          { t: "p", text: "كتير ناس بيفكروا إنه الإيميل صار قديم، وإنه كل شي هلق سوشال ميديا وواتساب. بس في شغلة وحدة بتميّز الإيميل عن كل المنصات: إنت بتملكه. المتابعين على إنستغرام فعلياً تبع إنستغرام. إذا تغيّرت الخوارزمية أو انقفل الحساب، بتخسر الوصول إلهم. أما قائمة الإيميلات، فهي إلك." },
          { t: "h2", text: "لمين بينفع الإيميل؟" },
          { t: "ul", items: ["المشاريع اللي زبونها بيرجع يشتري: متاجر، مطاعم، خدمات دورية", "الخدمات اللي قرار الشراء فيها بياخد وقت: دورات، استشارات، عقارات", "أي مشروع عنده محتوى مفيد بيقدر يشاركه بانتظام", "الشركات اللي بتبيع لشركات (B2B)، لأنه الإيميل لسا لغة الشغل الرسمية"] },
          { t: "h2", text: "كيف تبني قائمة بلا ما تزعج حدا" },
          { t: "p", text: "القاعدة الأولى: ما تشتري قوايم إيميلات أبداً. غير إنها غالباً ممنوعة، الناس ما بتعرفك وما طلبت تسمع منك، فرسايلك بتروح عالسبام وبتخرّب سمعة إيميلك. القائمة المنيحة بتنبني من ناس اختاروا ينضموا." },
          { t: "ol", items: ["قدّم شي مفيد مقابل الإيميل: دليل مختصر، قائمة تحقق، كود خصم", "حط نموذج اشتراك بسيط بموقعك، بخانة وحدة إذا فيك", "اطلب الإيميل وقت الشراء أو الحجز، بموافقة واضحة", "خلّي الاشتراك والإلغاء سهلين"] },
          { t: "tip", title: "انتبه للقوانين", text: "بكتير بلدان في قوانين بتطلب موافقة صريحة قبل ما تبعت رسايل تسويقية، ورابط إلغاء اشتراك واضح بكل رسالة. خلّيهم أساس من أول يوم." },
          { t: "h2", text: "شو تبعت؟" },
          { t: "p", text: "الغلط الأشهر إنه كل رسالة تكون «اشتري هلق». الناس بتمل وبتلغي. الأحسن توازن: أغلب الرسايل فيها قيمة، وبين فترة وفترة عرض واضح." },
          { t: "ul", items: ["رسالة ترحيب أوتوماتيكية لما حدا يشترك: مين إنت وشو رح يوصله", "نصيحة أو فكرة مفيدة مرتبطة بشغلك", "قصة زبون (بموافقته) أو شي ورا الكواليس", "عرض أو منتج جديد، بشكل واضح ومباشر", "تذكير للي ترك سلة الشراء أو ما كمّل الحجز"] },
          { t: "h2", text: "كيف ما تروح رسايلك عالسبام" },
          { t: "ul", items: ["ابعت من إيميل رسمي على دومينك، مش من إيميل مجاني", "استعمل أداة إيميل معروفة، وفعّل إعدادات التحقق اللي بتطلبها للدومين", "عنوان صادق بيوصف المحتوى، بلا مبالغة ولا أحرف كبيرة وعلامات تعجّب", "نضّف القائمة: شيل الإيميلات اللي ما بتفتح من زمان", "ابعت بانتظام، مش مرة كل ست أشهر ومرة كل يوم"] },
          { t: "quote", text: "السوشال بتجيبلك ناس جداد… والإيميل بيخلّيك على تواصل مع اللي عرفوك." },
          { t: "h2", text: "الخلاصة" },
          { t: "p", text: "الإيميل مش بديل عن السوشال ولا عن الواتساب، بس هو القناة الوحيدة اللي ما حدا بياخدها منك. بلّش صغير: نموذج اشتراك، رسالة ترحيب، ورسالة مفيدة كل أسبوعين. ومع الوقت بتصير القائمة من أقوى أصولك." },
        ],
      },
      en: {
        title: "Email marketing for small businesses: does it still work?",
        desc: "Email isn't outdated. It's the one channel you truly own. How to build a list, what to send, and how to stay out of the spam folder.",
        excerpt: "Your social account could be shut down tomorrow. Your email list… stays yours.",
        body: [
          { t: "p", text: "Many people think email is old news and that everything is social media and WhatsApp now. But one thing sets email apart from every platform: you own it. Instagram followers effectively belong to Instagram. If the algorithm changes or the account gets shut down, you lose access to them. Your email list is yours." },
          { t: "h2", text: "Who is email good for?" },
          { t: "ul", items: ["Businesses where customers buy again: stores, restaurants, recurring services", "Services with a longer buying decision: courses, consulting, real estate", "Any business with useful content it can share regularly", "Businesses selling to businesses (B2B), where email is still the formal language of work"] },
          { t: "h2", text: "How to build a list without annoying anyone" },
          { t: "p", text: "Rule one: never buy email lists. Besides often being against the rules, those people don't know you and didn't ask to hear from you, so your messages land in spam and damage your sender reputation. A good list is built from people who chose to join." },
          { t: "ol", items: ["Offer something useful in exchange for the email: a short guide, a checklist, a discount code", "Add a simple signup form to your site, ideally a single field", "Ask for the email at checkout or booking, with clear consent", "Make subscribing and unsubscribing easy"] },
          { t: "tip", title: "Mind the rules", text: "Many countries have laws requiring explicit consent before sending marketing emails, and a clear unsubscribe link in every message. Build both in from day one." },
          { t: "h2", text: "What should you send?" },
          { t: "p", text: "The most common mistake is making every email “buy now.” People get tired and unsubscribe. Balance works better: most emails deliver value, with a clear offer from time to time." },
          { t: "ul", items: ["An automatic welcome email when someone subscribes: who you are and what they'll get", "A useful tip or idea related to your work", "A customer story (with permission) or something behind the scenes", "An offer or new product, stated clearly and directly", "A reminder for people who left a cart or didn't finish booking"] },
          { t: "h2", text: "How to stay out of spam" },
          { t: "ul", items: ["Send from a professional address on your domain, not a free email", "Use a well-known email tool and complete the domain verification settings it asks for", "Write honest subject lines that describe the content, without hype, all caps, or exclamation marks", "Clean your list: remove addresses that haven't opened in a long time", "Send consistently, not once every six months and then daily"] },
          { t: "quote", text: "Social media brings you new people… email keeps you in touch with those who already know you." },
          { t: "h2", text: "The takeaway" },
          { t: "p", text: "Email doesn't replace social media or WhatsApp, but it's the one channel nobody can take from you. Start small: a signup form, a welcome email, and a useful email every two weeks. Over time, the list becomes one of your strongest assets." },
        ],
      },
    },
  },
  {
    slug: "ready-made-vs-custom-website",
    category: "dev",
    date: "2026-11-22",
    readMins: 5,
    service: "websites",
    copy: {
      ar: {
        title: "موقع جاهز ولا موقع مبرمج؟ كيف تختار الأنسب لمشروعك",
        desc: "ووردبريس وشوبيفاي ومنصات البناء الجاهزة، ولا موقع مبرمج خصيصاً؟ مقارنة صادقة بالإيجابيات والسلبيات، ومتى بيناسب كل خيار.",
        excerpt: "ما في جواب واحد صح للكل. في جواب صح لمشروعك… وهيك بتعرفه.",
        body: [
          { t: "p", text: "من أكتر الأسئلة اللي بتجيني: «بعمل موقعي على ووردبريس ولا شوبيفاي ولا برمجة خاصة؟». والجواب الصادق: حسب. كل خيار إله مكانه، والغلط مش إنك تختار واحد منهم، الغلط إنك تختار بلا ما تعرف ليش." },
          { t: "h2", text: "شو يعني «موقع جاهز»؟" },
          { t: "p", text: "يعني منصة بتعطيك أساس جاهز، وإنت بتختار قالب وبتعدّل عليه: ووردبريس، شوبيفاي، Wix، Squarespace وغيرهن. البناء أسرع، والتعديل على النصوص والصور غالباً سهل بلا خبرة تقنية." },
          { t: "h2", text: "إيمتى الموقع الجاهز بيكون الخيار الأحسن؟" },
          { t: "ul", items: ["بدك تبلّش بسرعة وبميزانية محدودة", "موقعك بسيط: تعريف، خدمات، تواصل، أو متجر عادي", "بدك تعدّل المحتوى بنفسك كل فترة", "ما عندك احتياجات خاصة ما بتغطيها الإضافات الموجودة"] },
          { t: "p", text: "شوبيفاي مثلاً ممتاز لمتجر بدو يبيع بسرعة ويتعامل مع الدفع والشحن بلا وجع راس. وووردبريس قوي للمواقع اللي فيها محتوى كتير ومدونة." },
          { t: "h2", text: "شو المشاكل المعتادة بالمواقع الجاهزة؟" },
          { t: "ul", items: ["كل ما تزيد الإضافات، كل ما يتقّل الموقع ويزيد خطر التعارض بينها", "القالب بيحدّك: بتعدّل لحد معيّن وبعدين بتعلق", "اشتراكات شهرية للمنصة والإضافات، بتتجمّع مع الوقت", "التحديثات والأمان بدهم متابعة، خصوصاً بووردبريس"] },
          { t: "h2", text: "إيمتى البرمجة الخاصة بتستاهل؟" },
          { t: "ul", items: ["عندك فكرة أو نظام ما إله قالب جاهز: حجوزات خاصة، لوحة تحكم، بوابة عملاء", "السرعة والأداء أساسيين لشغلك، متل صفحات هبوط لحملات إعلانية", "بدك ربط عميق مع أنظمة تانية: CRM، واتساب، محاسبة", "مشروعك رح يكبر وبدك أساس ما يحدّك بعد سنة"] },
          { t: "tip", title: "سؤال بيوضّح القرار", text: "اكتب ٣ شغلات لازم موقعك يعملها. إذا كلها بتنحل بإضافات معروفة وموثوقة، الجاهز غالباً بيكفي. إذا وحدة منها «مش موجودة جاهزة»، فكّر بالبرمجة." },
          { t: "h2", text: "وفي حل بالنص" },
          { t: "p", text: "مش لازم تختار طرف. ممكن يكون عندك متجر على شوبيفاي، وصفحة هبوط مبرمجة لحملة معيّنة، أو موقع مبرمج مربوط بلوحة محتوى سهلة لتعدّل النصوص بنفسك. المهم إنه الحل يخدم هدفك، مش العكس." },
          { t: "quote", text: "الأداة مش هي الموقع… الهدف هو الموقع. اختار الأداة اللي بتوصلك إله بأقل تعقيد." },
          { t: "h2", text: "شو ما اخترت، تأكد من هدول" },
          { t: "ul", items: ["الدومين والاستضافة والحسابات باسمك إنت", "الموقع سريع عالموبايل", "في تتبّع مضبوط من أول يوم", "في نسخة احتياطية، وحدا مسؤول عن التحديثات"] },
          { t: "h2", text: "الخلاصة" },
          { t: "p", text: "موقع جاهز إذا بدك سرعة وبساطة واحتياجاتك عادية. برمجة خاصة إذا عندك شي مميّز أو بدك أداء وربط أعمق. وإذا محتار، قلّي شو بدك موقعك يعمل، وبقلّك بصراحة شو الأنسب، حتى لو الجواب «ما بتحتاجني، الجاهز بيكفيك»." },
        ],
      },
      en: {
        title: "Ready-made or custom-built website? How to choose the right one",
        desc: "WordPress, Shopify, and site builders, or a custom-coded site? An honest comparison of the pros and cons, and when each option fits.",
        excerpt: "There's no single right answer for everyone. There's a right answer for your business… and here's how to find it.",
        body: [
          { t: "p", text: "One of the questions I hear most: “Should I build my site on WordPress, Shopify, or custom code?” The honest answer: it depends. Each option has its place. The mistake isn't picking one of them; it's picking without knowing why." },
          { t: "h2", text: "What does “ready-made” mean?" },
          { t: "p", text: "A platform that gives you a ready base, where you pick a template and customize it: WordPress, Shopify, Wix, Squarespace, and others. Building is faster, and editing text and images is usually easy without technical skills." },
          { t: "h2", text: "When is ready-made the better choice?" },
          { t: "ul", items: ["You want to launch fast on a limited budget", "Your site is simple: about, services, contact, or a standard store", "You want to edit content yourself regularly", "You don't have special needs that existing plugins can't cover"] },
          { t: "p", text: "Shopify, for example, is excellent for a store that wants to sell quickly and handle payments and shipping without headaches. WordPress is strong for content-heavy sites with a blog." },
          { t: "h2", text: "Common problems with ready-made sites" },
          { t: "ul", items: ["The more plugins you add, the slower the site and the higher the risk of conflicts", "The template limits you: you can customize up to a point, then you're stuck", "Monthly subscriptions for the platform and plugins add up over time", "Updates and security need ongoing attention, especially on WordPress"] },
          { t: "h2", text: "When is custom development worth it?" },
          { t: "ul", items: ["You have an idea or system with no ready template: custom bookings, a dashboard, a client portal", "Speed and performance are central to your business, like ad-campaign landing pages", "You need deep integration with other systems: CRM, WhatsApp, accounting", "Your business will grow and you want a foundation that won't limit you in a year"] },
          { t: "tip", title: "A question that clarifies the decision", text: "Write down 3 things your site must do. If all of them are solved by well-known, trusted plugins, ready-made is probably enough. If one of them “doesn't exist ready-made,” consider custom development." },
          { t: "h2", text: "There's a middle ground" },
          { t: "p", text: "You don't have to pick a side. You could run a Shopify store plus a custom landing page for a specific campaign, or a custom site connected to an easy content panel so you can edit text yourself. What matters is that the solution serves your goal, not the other way around." },
          { t: "quote", text: "The tool isn't the website… the goal is. Pick the tool that gets you there with the least complexity." },
          { t: "h2", text: "Whatever you choose, make sure of these" },
          { t: "ul", items: ["The domain, hosting, and accounts are in your name", "The site is fast on mobile", "Tracking is set up properly from day one", "There are backups, and someone is responsible for updates"] },
          { t: "h2", text: "The takeaway" },
          { t: "p", text: "Ready-made if you want speed and simplicity and your needs are standard. Custom if you have something distinctive or need deeper performance and integration. If you're unsure, tell me what your site should do and I'll tell you honestly what fits, even if the answer is “you don't need me, ready-made is enough.”" },
        ],
      },
    },
  },
  {
    slug: "domain-hosting-business-email",
    category: "dev",
    date: "2026-11-22",
    readMins: 5,
    service: "websites",
    copy: {
      ar: {
        title: "الدومين والاستضافة والإيميل الرسمي: شو لازم تعرف قبل ما تشتري",
        desc: "دليل بسيط لأصحاب المشاريع: شو الفرق بين الدومين والاستضافة، كيف تختار اسم دومين، ليش لازم يكون باسمك، وكيف تعمل إيميل رسمي.",
        excerpt: "الدومين هو عنوانك، والاستضافة هي بيتك، والإيميل الرسمي هو كرتك. وكلهم لازم يكونوا باسمك.",
        body: [
          { t: "p", text: "قبل أي موقع، في ٣ شغلات أساسية بتنشرى: دومين، واستضافة، وإيميل. وكتير أصحاب مشاريع بيتعبوا بعدين لأنه حدا تاني اشتراهم باسمه، أو لأنهم ما فهموا شو الفرق بينهم. خلّينا نبسّطها." },
          { t: "h2", text: "الدومين: عنوانك على الإنترنت" },
          { t: "p", text: "الدومين هو الاسم اللي الناس بتكتبه لتوصل لموقعك، متل muaztech.com. بتشتريه بالسنة من شركة تسجيل دومينات، وبتجدّده كل سنة. إذا نسيت تجدّده، ممكن يروح عليك وحدا تاني يشتريه." },
          { t: "h2", text: "كيف تختار اسم دومين منيح؟" },
          { t: "ul", items: ["قصير وسهل يتلفظ ويتكتب، حتى لو حدا سمعه بس", "بلا أرقام وشرطات قدر الإمكان، لأنها بتلخبط", "قريب من اسم مشروعك أو هو نفسه", ".com إذا متوفر، أو امتداد بلدك إذا شغلك محلي", "شيك إنه الاسم مش مسجّل كعلامة تجارية لحدا تاني"] },
          { t: "tip", title: "مهم جداً", text: "سجّل الدومين باسمك وبإيميلك إنت، حتى لو المصمم أو الشركة عم يساعدوك. وفعّل التجديد التلقائي. خسارة الدومين بعد ما اشتهر بتكلّف كتير." },
          { t: "h2", text: "الاستضافة: المكان اللي ساكن فيه موقعك" },
          { t: "p", text: "الاستضافة هي السيرفر اللي عليه ملفات موقعك، وهي اللي بتخلّيه يفتح لما حدا يكتب الدومين. في أنواع كتير: استضافة مشتركة رخيصة، سيرفرات خاصة، ومنصات حديثة متل Vercel وNetlify للمواقع الحديثة. الاختيار بيعتمد على نوع موقعك." },
          { t: "ul", items: ["السرعة: قديش الموقع بيفتح بسرعة، خصوصاً من بلد زبائنك", "الاستقرار: الموقع ما بيوقف كل شوي", "النسخ الاحتياطي: في نسخ تلقائية بترجّعك إذا صار شي", "الدعم: في حدا بيرد إذا علقت", "شهادة الأمان (SSL): القفل جنب الرابط، ولازم تكون مجانية ومفعّلة"] },
          { t: "h2", text: "الإيميل الرسمي: كرتك قدام الزبون" },
          { t: "p", text: "فرق كبير بين إيميل متل name@gmail.com وإيميل متل hello@اسم-مشروعك.com. التاني بيبيّن مشروع حقيقي ومرتّب، وبيقلّل احتمال رسايلك تروح عالسبام. ما بتحتاج سيرفر خاص: في خدمات معروفة بتربط إيميلك بدومينك بخطوات بسيطة." },
          { t: "ol", items: ["اختار خدمة إيميل للأعمال", "ضيف الدومين تبعك فيها", "حط السجلات اللي بتطلبها بإعدادات الدومين (DNS)", "اعمل العناوين اللي بتحتاجها: hello@، sales@، أو اسمك"] },
          { t: "h2", text: "أغلاط شائعة لازم تتجنّبها" },
          { t: "ul", items: ["الدومين أو الاستضافة باسم المصمم أو الشركة، مش باسمك", "اختيار استضافة بس لأنها الأرخص، وبعدين الموقع بطيء وبيوقف", "ما في حدا بيعرف كلمات السر غير شخص واحد", "شراء كل شي من مكان واحد بلا ما تعرف كيف تنقله إذا بدك"] },
          { t: "quote", text: "الموقع ممكن ينعاد بناؤه… بس الدومين اللي خسرته ممكن ما يرجع." },
          { t: "h2", text: "الخلاصة" },
          { t: "p", text: "دومين قصير وواضح باسمك مع تجديد تلقائي، استضافة سريعة ومستقرة فيها نسخ احتياطي، وإيميل رسمي على الدومين. هدول الأساس، وكل شي تاني بينبني فوقهم. وإذا محتار شو تختار، بقلّك حسب مشروعك." },
        ],
      },
      en: {
        title: "Domain, hosting, and business email: what to know before you buy",
        desc: "A simple guide for business owners: the difference between a domain and hosting, how to choose a domain name, why it must be in your name, and how to set up business email.",
        excerpt: "The domain is your address, hosting is your home, and business email is your card. All of them should be in your name.",
        body: [
          { t: "p", text: "Before any website, three basics get purchased: a domain, hosting, and email. Many business owners run into trouble later because someone else bought them in their own name, or because the difference wasn't clear. Let's simplify it." },
          { t: "h2", text: "The domain: your address on the internet" },
          { t: "p", text: "The domain is the name people type to reach your site, like muaztech.com. You buy it yearly from a domain registrar and renew it every year. If you forget to renew, you can lose it and someone else can buy it." },
          { t: "h2", text: "How to choose a good domain name" },
          { t: "ul", items: ["Short and easy to say and spell, even if someone only heard it", "Avoid numbers and hyphens where possible; they confuse people", "Close to your business name, or the same", ".com if available, or your country's extension if you work locally", "Check that the name isn't someone else's registered trademark"] },
          { t: "tip", title: "Very important", text: "Register the domain in your name and with your email, even if a designer or agency is helping you. And turn on auto-renew. Losing a domain after it's known is expensive." },
          { t: "h2", text: "Hosting: where your website lives" },
          { t: "p", text: "Hosting is the server that stores your site's files and makes it open when someone types the domain. There are many types: cheap shared hosting, private servers, and modern platforms like Vercel and Netlify for modern sites. The choice depends on your site." },
          { t: "ul", items: ["Speed: how fast the site loads, especially from your customers' country", "Stability: the site doesn't go down regularly", "Backups: automatic copies that restore you if something goes wrong", "Support: someone answers when you're stuck", "Security certificate (SSL): the padlock next to the URL, which should be free and enabled"] },
          { t: "h2", text: "Business email: your card in front of customers" },
          { t: "p", text: "There's a big difference between name@gmail.com and hello@yourbusiness.com. The second looks like a real, organized business and makes it less likely your emails land in spam. You don't need your own server: well-known services connect email to your domain in a few simple steps." },
          { t: "ol", items: ["Choose a business email service", "Add your domain to it", "Add the records it asks for in your domain's DNS settings", "Create the addresses you need: hello@, sales@, or your name"] },
          { t: "h2", text: "Common mistakes to avoid" },
          { t: "ul", items: ["The domain or hosting registered to the designer or agency, not you", "Choosing hosting only because it's cheapest, then the site is slow and goes down", "Only one person knows the passwords", "Buying everything from one place without knowing how to move it if needed"] },
          { t: "quote", text: "A website can be rebuilt… but a lost domain may never come back." },
          { t: "h2", text: "The takeaway" },
          { t: "p", text: "A short, clear domain in your name with auto-renew, fast and stable hosting with backups, and business email on your domain. These are the foundation, and everything else is built on top. If you're unsure what to choose, I'll tell you based on your business." },
        ],
      },
    },
  },
  {
    slug: "web-accessibility-basics",
    category: "ux",
    date: "2026-11-22",
    readMins: 5,
    service: "ux-ui",
    copy: {
      ar: {
        title: "موقع بيقدر يستعمله الكل: أساسيات إمكانية الوصول (Accessibility)",
        desc: "شو يعني إمكانية الوصول بالمواقع، ليش بتهمّ مشروعك، و٧ شغلات بسيطة بتخلّي موقعك أسهل للكل: التباين، النصوص البديلة، الكيبورد، وغيرها.",
        excerpt: "مش كل زوارك بيشوفوا متلك أو بيستعملوا الماوس. الموقع اللي بيراعيهم… أسهل للكل.",
        body: [
          { t: "p", text: "إمكانية الوصول (Accessibility) يعني إنه موقعك بيقدر يستعمله أي حدا: اللي نظره ضعيف، اللي ما بيقدر يستعمل الماوس، اللي بيستعمل قارئ شاشة، واللي عم يتصفّح بالشمس على تلفون صغير. ولما تصمم إلهم، بتطلع النتيجة أسهل لكل الناس." },
          { t: "h2", text: "ليش بتهمّ مشروعك؟" },
          { t: "ul", items: ["زوار أكتر بيقدروا يشتروا منك، بدل ما يطلعوا لأنهم ما قدروا يكمّلوا", "كتير من مبادئها هي نفسها مبادئ SEO: عناوين مرتبة، نصوص بديلة للصور، روابط واضحة", "ببعض البلدان والقطاعات في قوانين بتطلبها", "بتبيّن إنه مشروعك بيحترم كل زبائنه"] },
          { t: "p", text: "هاي ٧ شغلات بسيطة بتفرق كتير:" },
          { t: "h2", text: "١. تباين كافي بين النص والخلفية" },
          { t: "p", text: "نص رمادي فاتح على أبيض، أو ذهبي باهت على أسود، ممكن يكون حلو بالتصميم بس صعب ينقرا. في معايير معروفة لنسبة التباين، وفي أدوات مجانية بتفحصها. القاعدة البسيطة: إذا احتجت تقرّب عينك لتقرا، النص باهت زيادة." },
          { t: "h2", text: "٢. نص بديل لكل صورة مهمة" },
          { t: "p", text: "النص البديل (alt) هو وصف قصير للصورة بيقراه قارئ الشاشة، وبيطلع إذا الصورة ما حمّلت. اكتب شو في بالصورة وليش هي مهمة، مش بس «صورة». والصور الديكور البحت ما بتحتاج وصف." },
          { t: "h2", text: "٣. الموقع بيشتغل بالكيبورد" },
          { t: "p", text: "جرّب تتنقّل بموقعك بزر Tab بس. بتقدر توصل لكل زر ورابط؟ بتشوف وين إنت واقف؟ إذا لأ، في ناس ما رح يقدروا يستعملوه أبداً." },
          { t: "h2", text: "٤. عناوين مرتبة" },
          { t: "p", text: "عنوان رئيسي واحد بكل صفحة، وتحته عناوين فرعية بترتيب منطقي. هاد بيساعد قارئ الشاشة يتنقّل، وبيساعد جوجل يفهم الصفحة، وبيساعد أي حدا عم يقرا بسرعة." },
          { t: "h2", text: "٥. روابط وأزرار واضحة" },
          { t: "p", text: "«اضغط هنا» ما بتقول شي إذا انقرت لحالها. «شوف خدمة إعلانات جوجل» بتقول كل شي. والأزرار لازم تكون كبيرة كفاية لتنكبس بالإصبع بسهولة." },
          { t: "h2", text: "٦. ما تعتمد عاللون لحاله" },
          { t: "p", text: "إذا الخطأ بالنموذج بيبيّن بس بلون أحمر، اللي عنده عمى ألوان ممكن ما ينتبه. زيد نص أو أيقونة: «الإيميل مش صحيح» جنب الخانة." },
          { t: "h2", text: "٧. احترم الحركة" },
          { t: "p", text: "الحركات الحلوة بتعطي حياة، بس في ناس الحركة الكتيرة بتزعجهم أو بتدوّخهم. الأجهزة فيها إعداد «تقليل الحركة»، والموقع المنيح بيحترمه وبيخفف حركاته." },
          { t: "tip", title: "فحص سريع ببلاش", text: "افتح موقعك بمتصفح كروم، وشغّل Lighthouse من أدوات المطوّر، واختار Accessibility. بيعطيك علامة ولائحة بالمشاكل. موقع MUAZ TECH نفسه جاب ١٠٠ بهالفحص، ومش صعب توصل لعلامة عالية إذا انتبهت للأساسيات." },
          { t: "quote", text: "التصميم اللي بيراعي الأصعب… بيريّح الكل." },
          { t: "h2", text: "الخلاصة" },
          { t: "p", text: "تباين، نص بديل، كيبورد، عناوين، روابط واضحة، ألوان مع نص، وحركة محترمة. هدول بيبدّلوا تجربة ناس كتير، وبيحسّنوا SEO موقعك كمان. وأحسن وقت تفكّر فيهم هو وقت التصميم، مش بعد ما يخلص الموقع." },
        ],
      },
      en: {
        title: "A website everyone can use: accessibility basics",
        desc: "What web accessibility means, why it matters for your business, and 7 simple things that make your site easier for everyone: contrast, alt text, keyboard use, and more.",
        excerpt: "Not all your visitors see like you or use a mouse. A site that considers them… is easier for everyone.",
        body: [
          { t: "p", text: "Accessibility means anyone can use your website: people with low vision, people who can't use a mouse, people using a screen reader, and people browsing in bright sunlight on a small phone. When you design for them, the result is easier for everyone." },
          { t: "h2", text: "Why does it matter for your business?" },
          { t: "ul", items: ["More visitors can buy from you, instead of leaving because they couldn't continue", "Many of its principles are the same as SEO principles: ordered headings, image alt text, clear links", "Some countries and sectors legally require it", "It shows your business respects all its customers"] },
          { t: "p", text: "Here are 7 simple things that make a big difference:" },
          { t: "h2", text: "1. Enough contrast between text and background" },
          { t: "p", text: "Light gray text on white, or faint gold on black, can look nice in a mockup but be hard to read. There are established contrast-ratio standards and free tools to check them. Simple rule: if you have to lean in to read it, the text is too faint." },
          { t: "h2", text: "2. Alt text for every meaningful image" },
          { t: "p", text: "Alt text is a short description of an image that screen readers read aloud, and it appears if the image fails to load. Describe what's in the image and why it matters, not just “image.” Purely decorative images don't need one." },
          { t: "h2", text: "3. The site works with a keyboard" },
          { t: "p", text: "Try navigating your site using only the Tab key. Can you reach every button and link? Can you see where you are? If not, some people won't be able to use it at all." },
          { t: "h2", text: "4. Ordered headings" },
          { t: "p", text: "One main heading per page, with subheadings in a logical order beneath it. This helps screen-reader users navigate, helps Google understand the page, and helps anyone skimming." },
          { t: "h2", text: "5. Clear links and buttons" },
          { t: "p", text: "“Click here” means nothing when read on its own. “See the Google Ads service” says it all. And buttons should be big enough to tap easily with a finger." },
          { t: "h2", text: "6. Don't rely on color alone" },
          { t: "p", text: "If a form error is shown only in red, someone with color blindness might miss it. Add text or an icon: “This email isn't valid” next to the field." },
          { t: "h2", text: "7. Respect motion" },
          { t: "p", text: "Nice animations add life, but heavy motion bothers or dizzies some people. Devices have a “reduce motion” setting, and a good site respects it by toning its animations down." },
          { t: "tip", title: "A free quick check", text: "Open your site in Chrome, run Lighthouse from the developer tools, and select Accessibility. You'll get a score and a list of issues. The MUAZ TECH site itself scored 100 on this check, and a high score isn't hard if you mind the basics." },
          { t: "quote", text: "Design that considers the hardest case… makes things easier for everyone." },
          { t: "h2", text: "The takeaway" },
          { t: "p", text: "Contrast, alt text, keyboard use, headings, clear links, color plus text, and respectful motion. These change the experience for many people and improve your site's SEO too. The best time to think about them is during design, not after the site is finished." },
        ],
      },
    },
  },
];

/** Listing order: one per category first, so the home teaser shows a mix */
const ORDER = [
  "email-marketing-small-business", "ready-made-vs-custom-website", "web-accessibility-basics",
  "show-up-on-google-maps", "domain-hosting-business-email", "wireframe-before-design",
];
posts.sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug));

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
