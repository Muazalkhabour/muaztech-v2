import type { Dict } from "@/lib/dict";
import { site, socials } from "@/lib/site";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Audit } from "./Audit";
import { Projects } from "./Projects";
import { Marketing } from "./Marketing";
import { Leak, How, Services, Dev, UxUi, Library, About, FinalCta } from "./Sections";
import { Assistant } from "./Assistant";

export function HomePage({ t }: { t: Dict }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: new URL(t.path, site.url).toString(),
    description: t.meta.description,
    inLanguage: t.lang,
    image: `${site.url}/images/muaz-round.png`,
    founder: { "@type": "Person", name: t.lang === "ar" ? "معاذ" : "Muaz" },
    sameAs: socials.filter((s) => s.id !== "whatsapp").map((s) => s.href),
    availableLanguage: ["ar", "en"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav lang={t.lang} />
      <main>
        <Hero t={t} />
        <Leak t={t} />
        <Marketing t={t} />
        <Audit lang={t.lang} />
        <How t={t} />
        <Services t={t} />
        <Dev t={t} />
        <UxUi t={t} />
        <Projects t={t} />
        <Library t={t} />
        <About t={t} />
        <FinalCta t={t} />
      </main>
      <Assistant lang={t.lang} />
    </>
  );
}
