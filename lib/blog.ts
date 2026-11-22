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
    slug: "ads-bring-messages-not-customers",
    category: "marketing",
    date: "2026-11-22",
    readMins: 5,
    service: "meta-ads",
    copy: {
      ar: {
        title: "ليش إعلاناتك عم تجيب رسائل… بس ما عم تجيب زبائن؟",
        desc: "الإعلان جاب رسائل كتير بس قليل منها اشترى؟ هاي الأسباب الأكثر شيوعاً، وكيف تصلّح كل واحد منها قبل ما تزيد الميزانية.",
        excerpt: "الرسائل كتير، والمبيعات قليلة. المشكلة غالباً مش بالإعلان نفسه… هي بالي بيصير بعد الرسالة.",
        body: [
          { t: "p", text: "من أكتر الجمل اللي بسمعها من أصحاب المشاريع: «الإعلان عم يجيب رسائل، بس ما حدا عم يشتري». وأول ردة فعل بتكون: نغيّر الإعلان، أو نزيد الميزانية. بس بأغلب الحالات، المشكلة مش هون." },
          { t: "p", text: "الرسالة هي نص الطريق. الإعلان وظيفته يجيب الشخص الصح لعندك، وبعدها في مرحلة كاملة لازم تكون مرتّبة لحتى الرسالة تصير بيعة. خلّينا نمشي عالأسباب وحدة وحدة." },
          { t: "h2", text: "١. الإعلان عم يجيب الشخص الغلط" },
          { t: "p", text: "إذا الإعلان بيوعد بشي عام، أو السعر مخبّى، أو الصورة بتجذب كل الناس، رح يجيك فضوليين أكتر من مشترين. الحل مش إنك تخبّي التفاصيل لتجيب رسائل أكتر، بالعكس: وضّح لمين المنتج، وشو بيحل، وتقريباً بأي فئة سعر. رسائل أقل بس أنضف، أحسن من رسائل كتير ما بتشتري." },
          { t: "h2", text: "٢. الرد بياخد وقت" },
          { t: "p", text: "الشخص اللي بعتلك هلق، بعت لغيرك كمان. إذا رديت بعد ساعات، غالباً يكون اشترى من حدا رد أسرع، أو نسي ليش كان مهتم. سرعة الرد بأول رسالة بتفرق كتير، خصوصاً بالمنتجات اللي بتنشرى بقرار سريع." },
          { t: "tip", title: "جرّبها هالأسبوع", text: "سجّل كم دقيقة بياخد أول رد على كل رسالة لمدة أسبوع. رح تتفاجأ بالرقم، وهو أول شي لازم يتحسّن." },
          { t: "h2", text: "٣. ما في سكربت رد" },
          { t: "p", text: "كل موظف بيرد بطريقته، وكتير مرات الجواب بيكون السعر بس، وبعدها سكوت. الزبون بيحتاج حدا يفهم شو بدو، يقترح الأنسب إله، ويسهّل عليه الخطوة الجاية. سكربت بسيط من ٣ أو ٤ أسئلة بيغيّر النتيجة:" },
          { t: "ol", items: ["سؤال بيفهّمك شو بدو بالظبط", "اقتراح واحد واضح بدل لايحة طويلة", "جواب على الاعتراض الأشهر قبل ما يسأله", "خطوة جاية سهلة: احجزلك؟ ابعتلك رابط الدفع؟"] },
          { t: "h2", text: "٤. ما في متابعة" },
          { t: "p", text: "كتير ناس بيسألوا وبيقولوا «بفكّر وبرجعلك». أغلبهم ما بيرجعوا لحالهم، مش لأنهم مش مهتمين، بس لأنهم انشغلوا. رسالة متابعة بعد يوم أو يومين، فيها معلومة مفيدة أو جواب على سؤال ممكن يكون عنده، بترجّع جزء منهم. بس بلطف، وبلا إلحاح." },
          { t: "h2", text: "٥. ما بتعرف شو اللي جاب البيعة" },
          { t: "p", text: "إذا ما في تتبّع، ما رح تعرف أي إعلان جاب زبائن فعلاً وأي واحد جاب أسئلة بس. هون بيجي دور البكسل وConversions API، وتصنيف المحادثات بالواتساب (جديد، مهتم، اشترى). لما تشوف الصورة كاملة، بتعرف شو تكبّر وشو توقف." },
          { t: "quote", text: "قبل ما تزيد ميزانية الإعلان، تأكد إنك ما عم تدفع لتجيب رسائل رح تضيع." },
          { t: "h2", text: "الخلاصة" },
          { t: "p", text: "إذا الإعلان عم يجيب رسائل، فهو عم يعمل نص شغله. النص التاني عندك: رد سريع، سكربت واضح، متابعة، وقياس. صلّح هدول قبل ما تغيّر الإعلان، وغالباً رح تشوف فرق بنفس الميزانية." },
        ],
      },
      en: {
        title: "Why your ads bring messages… but not customers",
        desc: "Your ads bring plenty of messages, but few buy? Here are the most common reasons, and how to fix each one before you raise the budget.",
        excerpt: "Plenty of messages, few sales. The problem usually isn't the ad itself… it's what happens after the message.",
        body: [
          { t: "p", text: "One of the most common things I hear from business owners: “The ads bring messages, but nobody buys.” The first reaction is usually to change the ad or raise the budget. But in most cases, that's not where the problem is." },
          { t: "p", text: "A message is halfway down the road. The ad's job is to bring the right person to you; after that there's a whole stage that needs to be in order for a message to become a sale. Let's go through the reasons one by one." },
          { t: "h2", text: "1. The ad attracts the wrong person" },
          { t: "p", text: "If the ad promises something vague, hides the price, or uses an image that appeals to everyone, you'll get more curious people than buyers. The fix isn't hiding details to get more messages; it's the opposite. Make clear who it's for, what it solves, and roughly what it costs. Fewer, cleaner messages beat lots of messages that never buy." },
          { t: "h2", text: "2. Replies take too long" },
          { t: "p", text: "The person who just messaged you also messaged someone else. If you reply hours later, they've often bought from whoever replied first, or forgotten why they were interested. Speed on the first reply makes a real difference, especially for quick-decision purchases." },
          { t: "tip", title: "Try this week", text: "Log how many minutes the first reply takes on every message for one week. The number will surprise you, and it's the first thing to improve." },
          { t: "h2", text: "3. There's no reply script" },
          { t: "p", text: "Everyone replies their own way, and often the answer is just the price, followed by silence. Customers need someone to understand what they want, suggest the best fit, and make the next step easy. A simple 3–4 question script changes the outcome:" },
          { t: "ol", items: ["A question that pins down exactly what they want", "One clear suggestion instead of a long list", "An answer to the most common objection before they raise it", "An easy next step: book for you? send a payment link?"] },
          { t: "h2", text: "4. There's no follow-up" },
          { t: "p", text: "Lots of people ask and say “I'll think about it.” Most never come back on their own, not because they lost interest, but because life got busy. A follow-up a day or two later, with something useful or an answer to a likely question, brings some of them back. Gently, never pushy." },
          { t: "h2", text: "5. You don't know what drove the sale" },
          { t: "p", text: "Without tracking, you won't know which ad brought real customers and which only brought questions. That's where the Pixel and Conversions API come in, along with labelling WhatsApp chats (new, interested, bought). Once you see the full picture, you know what to scale and what to stop." },
          { t: "quote", text: "Before raising your ad budget, make sure you're not paying for messages that will get lost." },
          { t: "h2", text: "The takeaway" },
          { t: "p", text: "If your ads bring messages, they're doing half their job. The other half is yours: fast replies, a clear script, follow-up, and measurement. Fix those before changing the ad, and you'll often see a difference on the same budget." },
        ],
      },
    },
  },
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
    slug: "landing-page-that-sells",
    category: "dev",
    date: "2026-11-22",
    readMins: 6,
    service: "websites",
    copy: {
      ar: {
        title: "صفحة هبوط بتبيع: ٧ شغلات لازم تكون فيها",
        desc: "شو الفرق بين صفحة حلوة وصفحة بتجيب طلبات؟ ٧ عناصر لازم تكون بأي صفحة هبوط، مع أمثلة عملية للمشاريع الصغيرة.",
        excerpt: "الصفحة الحلوة بتنعجب… والصفحة المبنية صح بتبيع. هاي الشغلات اللي بتفرق.",
        body: [
          { t: "p", text: "صفحة الهبوط هي الصفحة اللي بيوصلها الزائر من إعلان أو رابط، ووظيفتها وحدة: يعمل خطوة وحدة، متل يبعت رسالة، أو يطلب، أو يحجز. مش موقع كامل، ومش مكان تحكي فيه عن كل شي. كل ما كانت مركّزة أكتر، كل ما اشتغلت أحسن." },
          { t: "h2", text: "١. عنوان بيقول شو بتعمل بثانية" },
          { t: "p", text: "الزائر بيقرر إذا بدو يكمّل بثواني. العنوان لازم يجاوب: شو هاد؟ ولمين؟ «حلول مبتكرة لمستقبل أفضل» ما بتقول شي. «توصيل أكل صحي للمكاتب بإسطنبول» بتقول كل شي." },
          { t: "h2", text: "٢. زر واحد واضح" },
          { t: "p", text: "إذا عندك خمس أزرار لخمس شغلات، الزائر رح يحتار. اختار خطوة وحدة، وخلّي زرها واضح، وكرّره بعد كل قسم. وخلّي النص فعل: «اطلب هلق»، «احجز موعدك»، مش «إرسال»." },
          { t: "h2", text: "٣. سرعة عالموبايل" },
          { t: "p", text: "أغلب الناس رح يفتحوا صفحتك من التلفون، وكتير منهم على نت مش سريع. صور كبيرة، خطوط كتير، وسكربتات زيادة، كلها بتبطّئ الصفحة. والصفحة البطيئة بتخسّرك زوار قبل ما يشوفوا شي." },
          { t: "h2", text: "٤. دليل إنك حقيقي" },
          { t: "ul", items: ["صور حقيقية لشغلك أو منتجك، مش صور جاهزة من النت", "آراء زبائن حقيقية، بموافقتهم", "أسماء مشاريع اشتغلت معها، أو أرقام حقيقية إذا عندك", "طريقة تواصل واضحة: رقم، واتساب، أو عنوان"] },
          { t: "h2", text: "٥. جواب على الاعتراضات قبل ما تنسأل" },
          { t: "p", text: "شو اللي ممكن يخلّي حدا يتردد؟ السعر؟ المدة؟ الثقة؟ «شو إذا ما عجبني؟». قسم أسئلة قصير بيجاوب على هالأسئلة بيشيل الحواجز من قدام الزر." },
          { t: "h2", text: "٦. طريق مختصر للتواصل" },
          { t: "p", text: "نموذج طويل فيه عشر خانات بيطفّش. اسأل بس اللي بتحتاجه فعلاً، أو خلّي الزر يفتح واتساب ومعه رسالة جاهزة. كل خطوة زيادة بتخسّرك ناس." },
          { t: "tip", title: "مثال", text: "بدل نموذج فيه الاسم والإيميل والهاتف والمدينة والخدمة والميزانية، جرّب زر واحد: «ابعتلنا عالواتساب» مع رسالة جاهزة فيها اسم الخدمة." },
          { t: "h2", text: "٧. تتبّع من أول يوم" },
          { t: "p", text: "إذا ما بتقيس، ما رح تعرف إذا الصفحة عم تشتغل. ركّب تتبّع لكبسة الزر، والرسالة، والطلب. وبعد أسبوعين، بتعرف وين الناس بتوقف، وشو لازم يتغيّر." },
          { t: "quote", text: "الصفحة مش لوحة فنية… هي بائع شغّال ٢٤ ساعة. صممها متل ما بتختار بائع." },
          { t: "h2", text: "الخلاصة" },
          { t: "p", text: "عنوان واضح، زر واحد، سرعة، دليل، أجوبة، تواصل سهل، وقياس. إذا صفحتك ناقصها شي من هدول، صلّحه قبل ما تصرف عالإعلانات. الإعلان بيجيب الناس، والصفحة هي اللي بتقنعهم." },
        ],
      },
      en: {
        title: "A landing page that sells: 7 things it must have",
        desc: "What separates a pretty page from one that brings orders? 7 elements every landing page needs, with practical examples for small businesses.",
        excerpt: "A pretty page gets compliments… a well-built page gets orders. Here's what makes the difference.",
        body: [
          { t: "p", text: "A landing page is where a visitor arrives from an ad or link, and it has one job: get them to take one step, like sending a message, ordering, or booking. It isn't a full website, and it isn't the place to talk about everything. The more focused it is, the better it works." },
          { t: "h2", text: "1. A headline that says what you do in a second" },
          { t: "p", text: "Visitors decide in seconds whether to keep going. The headline must answer: what is this, and who is it for? “Innovative solutions for a better future” says nothing. “Healthy lunch delivery for Istanbul offices” says everything." },
          { t: "h2", text: "2. One clear button" },
          { t: "p", text: "Five buttons for five things confuse people. Pick one step, make its button obvious, and repeat it after each section. Make the text an action: “Order now,” “Book your slot,” not “Submit.”" },
          { t: "h2", text: "3. Speed on mobile" },
          { t: "p", text: "Most people will open your page on their phone, many on a slow connection. Big images, lots of fonts, and extra scripts all slow it down, and a slow page loses visitors before they see anything." },
          { t: "h2", text: "4. Proof that you're real" },
          { t: "ul", items: ["Real photos of your work or product, not stock images", "Real customer reviews, with their permission", "Names of businesses you've worked with, or real numbers if you have them", "A clear way to reach you: phone, WhatsApp, or address"] },
          { t: "h2", text: "5. Answers to objections before they're asked" },
          { t: "p", text: "What might make someone hesitate? Price? Timing? Trust? “What if I don't like it?” A short FAQ that answers these removes the barriers in front of the button." },
          { t: "h2", text: "6. A short path to contact" },
          { t: "p", text: "A long form with ten fields drives people away. Ask only what you truly need, or let the button open WhatsApp with a ready-made message. Every extra step costs you people." },
          { t: "tip", title: "Example", text: "Instead of a form asking for name, email, phone, city, service, and budget, try one button: “Message us on WhatsApp,” with a pre-filled message naming the service." },
          { t: "h2", text: "7. Tracking from day one" },
          { t: "p", text: "If you don't measure, you won't know if the page works. Track the button click, the message, and the order. After two weeks you'll know where people stop and what needs to change." },
          { t: "quote", text: "A page isn't a painting… it's a salesperson working 24 hours a day. Design it the way you'd hire one." },
          { t: "h2", text: "The takeaway" },
          { t: "p", text: "A clear headline, one button, speed, proof, answers, easy contact, and measurement. If your page is missing any of these, fix it before spending on ads. Ads bring people; the page is what convinces them." },
        ],
      },
    },
  },
  {
    slug: "check-your-site-speed",
    category: "dev",
    date: "2026-11-22",
    readMins: 5,
    service: "websites",
    copy: {
      ar: {
        title: "موقعك بطيء عالموبايل؟ كيف تفحصه بنفسك بدقيقتين",
        desc: "طريقة بسيطة تفحص فيها سرعة موقعك عالموبايل بأداة مجانية من جوجل، وكيف تفهم النتيجة، وأشهر الأسباب اللي بتبطّئ المواقع.",
        excerpt: "ما بتحتاج تكون مبرمج لتعرف إذا موقعك بطيء. أداة مجانية من جوجل بتقلّك بدقيقتين.",
        body: [
          { t: "p", text: "السرعة مش رفاهية. الزائر اللي بيستنى الصفحة تفتح، كتير مرات بيرجع لورا وبيفتح غيرك. وجوجل كمان بيعتبر السرعة عالموبايل جزء من تقييمه للموقع. الخبر الحلو: فيك تفحص موقعك بنفسك، ببلاش، بدقيقتين." },
          { t: "h2", text: "الخطوة الأولى: افتح PageSpeed Insights" },
          { t: "ol", items: ["فوت على pagespeed.web.dev", "حط رابط موقعك وكبوس «تحليل»", "استنى دقيقة لحتى تطلع النتيجة", "تأكد إنك عم تشوف تبويب «الجوّال» (Mobile)، لأنه الأهم"] },
          { t: "h2", text: "الخطوة التانية: افهم الأرقام" },
          { t: "p", text: "بتطلعلك علامة من ١٠٠، وتحتها كم مقياس. ما تخاف من الأسماء، هاي أهمهن ببساطة:" },
          { t: "ul", items: ["LCP: قديش بياخد أكبر شي بالصفحة (عادةً صورة أو عنوان) ليبيّن. كل ما أقل، أحسن", "TBT أو INP: قديش الصفحة بتعلق لما تكبس عليها", "CLS: إذا العناصر عم تتحرك وتنط وهي عم تحمّل. الرقم المثالي قريب من الصفر"] },
          { t: "tip", title: "ملاحظة", text: "النتيجة ممكن تتغير شوي من فحص لفحص. اعمل الفحص ٢ أو ٣ مرات وخد الفكرة العامة، مش رقم واحد." },
          { t: "h2", text: "أشهر أسباب البطء" },
          { t: "ul", items: ["صور كبيرة كتير: صورة حجمها ميغابايت كامل ممكن تصير عُشر حجمها بنفس الشكل إذا انضغطت صح", "خطوط كتيرة أو أوزان كتيرة من نفس الخط", "إضافات وسكربتات زيادة: ودجتات، شات، أدوات تتبّع مكررة", "حركات ثقيلة عم تشتغل طول الوقت", "استضافة ضعيفة أو بعيدة عن زوارك"] },
          { t: "h2", text: "شو فيك تعمل لحالك؟" },
          { t: "ul", items: ["صغّر الصور قبل ما ترفعها، واستعمل صيغة WebP إذا فيك", "شيل أي إضافة أو ودجت ما عم تستعملها", "خفّف عدد الخطوط", "وإذا الموقع مبني على منصة جاهزة، شوف إذا في إعدادات للتخزين المؤقت (Cache)"] },
          { t: "p", text: "مثال حقيقي من موقعي: صورتي بالواجهة كانت حوالي ٤٣٠ كيلوبايت، ولما حوّلتها لـ WebP صارت حوالي ٤٩، بنفس الشكل تماماً. ووقف تأثير حركة كانت عم تنرسم كل لحظة رفع علامة السرعة عالموبايل بشكل واضح. تغييرات صغيرة، فرق كبير." },
          { t: "quote", text: "الموقع البطيء متل محل بابه تقيل… الناس بتمرق من قدامه." },
          { t: "h2", text: "الخلاصة" },
          { t: "p", text: "افحص موقعك هلق على pagespeed.web.dev، عالموبايل. إذا العلامة واطية أو LCP عالي، ابدأ بالصور، وبعدها الإضافات. وإذا بدك حدا يفحصه ويقلّك شو بالظبط لازم يتصلّح، ابعتلي الرابط." },
        ],
      },
      en: {
        title: "Is your site slow on mobile? Check it yourself in two minutes",
        desc: "A simple way to test your website's mobile speed with a free Google tool, how to read the results, and the most common reasons sites are slow.",
        excerpt: "You don't need to be a developer to know if your site is slow. A free Google tool tells you in two minutes.",
        body: [
          { t: "p", text: "Speed isn't a luxury. A visitor waiting for a page to load often hits back and opens someone else. Google also treats mobile speed as part of how it evaluates your site. The good news: you can check your site yourself, for free, in two minutes." },
          { t: "h2", text: "Step one: open PageSpeed Insights" },
          { t: "ol", items: ["Go to pagespeed.web.dev", "Paste your website link and tap “Analyze”", "Wait a minute for the results", "Make sure you're on the “Mobile” tab; it matters most"] },
          { t: "h2", text: "Step two: understand the numbers" },
          { t: "p", text: "You'll get a score out of 100, with a few metrics underneath. Don't let the names scare you; here are the important ones in plain words:" },
          { t: "ul", items: ["LCP: how long the biggest thing on the page (usually an image or headline) takes to appear. Lower is better", "TBT or INP: how much the page freezes when you tap it", "CLS: whether elements jump around while loading. Ideally close to zero"] },
          { t: "tip", title: "Note", text: "Results can vary a bit between runs. Test 2 or 3 times and look at the overall picture, not a single number." },
          { t: "h2", text: "The most common causes of slowness" },
          { t: "ul", items: ["Huge images: a one-megabyte image can often shrink to a tenth of its size with no visible difference when compressed well", "Too many fonts, or too many weights of the same font", "Extra plugins and scripts: widgets, chat, duplicated tracking tools", "Heavy animations running all the time", "Weak hosting, or hosting far from your visitors"] },
          { t: "h2", text: "What can you do yourself?" },
          { t: "ul", items: ["Shrink images before uploading, and use WebP if you can", "Remove any plugin or widget you don't use", "Cut down the number of fonts", "If your site runs on a ready-made platform, look for caching settings"] },
          { t: "p", text: "A real example from my own site: my hero photo was about 430 KB, and converting it to WebP brought it to about 49 KB with no visible difference. Stopping one animation that was repainting constantly lifted the mobile speed score noticeably. Small changes, big difference." },
          { t: "quote", text: "A slow website is like a shop with a heavy door… people walk past it." },
          { t: "h2", text: "The takeaway" },
          { t: "p", text: "Test your site now at pagespeed.web.dev, on mobile. If the score is low or LCP is high, start with images, then plugins. And if you'd like someone to check it and tell you exactly what to fix, send me the link." },
        ],
      },
    },
  },
  {
    slug: "ux-principles-that-sell",
    category: "ux",
    date: "2026-11-22",
    readMins: 5,
    service: "ux-ui",
    copy: {
      ar: {
        title: "الزبون ما بيقرا… بيكبس: ٥ مبادئ UX لموقع بيبيع",
        desc: "خمس مبادئ بسيطة بتجربة المستخدم بتخلّي الزائر يوصل للزر بأقل تفكير: الوضوح، التركيز، التسلسل، الثقة، والراحة عالموبايل.",
        excerpt: "الزائر ما عنده وقت يفهم موقعك. إذا احتاج يفكّر، غالباً رح يطلع. هاي المبادئ اللي بتريّحه.",
        body: [
          { t: "p", text: "تجربة المستخدم (UX) مش عن الألوان ولا الخطوط. هي عن سؤال واحد: هل الزائر بيقدر يوصل لهدفه بسهولة؟ إذا الجواب «إيه»، الموقع عم يبيع. إذا «تقريباً»، في ناس عم تضيع بالطريق. هاي خمس مبادئ بستعملها بكل مشروع." },
          { t: "h2", text: "١. الوضوح قبل الجمال" },
          { t: "p", text: "إذا الزائر ما فهم شو بتعمل بأول شاشة، ما بتفرق قديش التصميم حلو. عنوان واضح، صورة بتعبّر عن الشغل، وزر بيقول شو رح يصير بعد الكبسة. لو خيّروك بين تصميم مبهر ومش واضح، وتصميم بسيط وواضح، اختار التاني." },
          { t: "h2", text: "٢. خيار واحد مهم بكل شاشة" },
          { t: "p", text: "كل ما زادت الخيارات، كل ما طوّل الزائر بالتفكير وصار احتمال يأجّل القرار أكبر. بكل شاشة، اسأل حالك: شو الخطوة الأهم هون؟ خلّيها الأوضح، وخلّي الباقي أهدى." },
          { t: "h2", text: "٣. رتّب المعلومات متل ما الزبون بيفكّر" },
          { t: "p", text: "الزبون بيسأل بترتيب: شو هاد؟ بيناسبني؟ قديش؟ موثوق؟ كيف بطلبه؟ إذا صفحتك ماشية بنفس الترتيب، بتحس إنها عم تجاوبه وهو عم يقرا. وإذا بلّشت بقصة الشركة وتاريخها، رح يطلع قبل ما يوصل للمهم." },
          { t: "tip", title: "تمرين سريع", text: "اطبع صفحتك الرئيسية، واكتب جنب كل قسم السؤال اللي بيجاوب عليه. إذا في قسم ما بيجاوب على أي سؤال عند الزبون، غالباً ما إله لزوم." },
          { t: "h2", text: "٤. الثقة بالتفاصيل الصغيرة" },
          { t: "ul", items: ["صور حقيقية بدل الصور الجاهزة", "أسعار أو نطاق أسعار واضح إذا فيك", "طرق تواصل مرئية، مش مخبّاية بآخر الصفحة", "لا أخطاء إملائية ولا روابط مكسورة", "تصميم متناسق بكل الصفحات"] },
          { t: "h2", text: "٥. صمّم للإبهام" },
          { t: "p", text: "أغلب زوارك رح يستعملوا إبهامهم على شاشة صغيرة. الأزرار لازم تكون كبيرة كفاية لتنكبس بسهولة، والمسافة بينها كافية لحتى ما ينكبس الغلط. والزر الأهم الأحسن يكون بمكان سهل يوصله الإبهام." },
          { t: "quote", text: "إذا الزائر احتاج يفكّر شو يعمل… التصميم ما خلّص شغله." },
          { t: "h2", text: "الخلاصة" },
          { t: "p", text: "وضوح، تركيز، تسلسل منطقي، ثقة، وراحة عالموبايل. هدول الخمسة بيفرقوا أكتر من أي لون أو خط. وأحسن طريقة تتأكد: خلّي حدا ما بيعرف مشروعك يفتح الموقع، واطلب منه يطلب شي، وراقبه بلا ما تساعده." },
        ],
      },
      en: {
        title: "Customers don't read… they tap: 5 UX principles for a site that sells",
        desc: "Five simple user-experience principles that get visitors to the button with the least thinking: clarity, focus, sequence, trust, and mobile comfort.",
        excerpt: "Visitors don't have time to figure out your site. If they have to think, they'll probably leave. These principles keep it effortless.",
        body: [
          { t: "p", text: "User experience (UX) isn't about colors or fonts. It's about one question: can the visitor reach their goal easily? If yes, the site sells. If “sort of,” people are getting lost on the way. Here are five principles I use on every project." },
          { t: "h2", text: "1. Clarity before beauty" },
          { t: "p", text: "If visitors don't understand what you do on the first screen, it doesn't matter how beautiful the design is. A clear headline, an image that reflects the work, and a button that says what happens next. Given a dazzling but unclear design and a simple, clear one, pick the second." },
          { t: "h2", text: "2. One important choice per screen" },
          { t: "p", text: "The more options there are, the longer visitors think and the more likely they are to postpone the decision. On every screen, ask: what's the most important step here? Make it the most visible, and tone down the rest." },
          { t: "h2", text: "3. Order information the way customers think" },
          { t: "p", text: "Customers ask in order: what is this? Is it for me? How much? Can I trust it? How do I order? If your page follows that order, it feels like it's answering them as they read. If it opens with the company's history, they'll leave before reaching what matters." },
          { t: "tip", title: "Quick exercise", text: "Print your home page and write next to each section the question it answers. If a section doesn't answer any customer question, it probably doesn't need to be there." },
          { t: "h2", text: "4. Trust lives in the small details" },
          { t: "ul", items: ["Real photos instead of stock images", "Clear prices or a price range if you can", "Visible contact options, not hidden at the bottom", "No typos and no broken links", "Consistent design across every page"] },
          { t: "h2", text: "5. Design for the thumb" },
          { t: "p", text: "Most visitors will use their thumb on a small screen. Buttons need to be big enough to tap easily, with enough space between them to avoid wrong taps. And the most important button should sit where the thumb reaches comfortably." },
          { t: "quote", text: "If the visitor has to think about what to do… the design isn't finished." },
          { t: "h2", text: "The takeaway" },
          { t: "p", text: "Clarity, focus, logical sequence, trust, and mobile comfort. These five matter more than any color or font. The best test: ask someone who doesn't know your business to open the site and order something, and watch without helping." },
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
