export const site = {
  name: "MUAZ TECH",
  // لما تشتري الدومين: حط NEXT_PUBLIC_SITE_URL بـ Vercel (مثلاً https://muaztech.com)
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://muaztech-01.vercel.app").replace(/\/$/, ""),
  whatsappNumber: "905356577992",
  instagram: "muaztech_mz",
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export type SocialId = "instagram" | "tiktok" | "snapchat" | "facebook" | "github" | "whatsapp";

export const socials: { id: SocialId; href: string }[] = [
  { id: "instagram", href: `https://instagram.com/${site.instagram}` },
  { id: "tiktok", href: "https://www.tiktok.com/@muaztech_mz" },
  { id: "snapchat", href: "https://snapchat.com/t/wUaeqacS" },
  { id: "facebook", href: "https://www.facebook.com/muaz.alkhabour" },
  { id: "github", href: "https://github.com/Muazalkhabour" },
  { id: "whatsapp", href: waLink() },
];
