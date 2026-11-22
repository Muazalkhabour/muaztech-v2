export const site = {
  name: "MUAZ TECH",
  // TODO: غيّرها للدومين الجديد لما تشتريه
  url: "https://muaztech-01.vercel.app",
  whatsappNumber: "905356577992",
  instagram: "muaztech_mz",
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export type SocialId = "instagram" | "facebook" | "github" | "whatsapp";

export const socials: { id: SocialId; href: string }[] = [
  { id: "instagram", href: `https://instagram.com/${site.instagram}` },
  { id: "facebook", href: "https://www.facebook.com/muaz.alkhabour" },
  { id: "github", href: "https://github.com/Muazalkhabour" },
  { id: "whatsapp", href: waLink() },
];
