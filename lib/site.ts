export const site = {
  name: "MUAZ TECH",
  // TODO: غيّرها للدومين الجديد لما تشتريه
  url: "https://muaztech-01.vercel.app",
  whatsappNumber: "905356577992",
  instagram: "muaztech_mz",
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
