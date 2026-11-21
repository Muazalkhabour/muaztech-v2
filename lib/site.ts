export const site = {
  name: "MUAZ TECH",
  url: "https://muaztech.com",
  title: "MUAZ TECH — تسويق رقمي مبني متل الكود",
  description:
    "بساعد أصحاب المشاريع يحوّلوا الزيارات لرسائل، والرسائل لزبائن. تسويق رقمي، برمجة، وتصميم UX/UI.",
  whatsappNumber: "905356577992",
  instagram: "muaztech_mz",
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const navLinks = [
  { href: "#services", label: "الخدمات" },
  { href: "#how", label: "كيف بشتغل" },
  { href: "#dev", label: "البرمجة" },
  { href: "#ux", label: "UX/UI" },
  { href: "#library", label: "المكتبة" },
  { href: "#audit", label: "أدوات مجانية" },
  { href: "#about", label: "عني" },
];
