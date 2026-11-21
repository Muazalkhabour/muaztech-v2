import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Audit } from "@/components/Audit";
import { Leak, How, Services, Dev, UxUi, Library, About, FinalCta, WhatsAppFloat } from "@/components/Sections";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "ar",
  image: `${site.url}/images/muaz-round.png`,
  founder: { "@type": "Person", name: "معاذ" },
  sameAs: [`https://instagram.com/${site.instagram}`],
  knowsAbout: ["التسويق الرقمي", "برمجة المواقع", "UX/UI"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <Hero />
        <Leak />
        <Audit />
        <How />
        <Services />
        <Dev />
        <UxUi />
        <Library />
        <About />
        <FinalCta />
      </main>
      <WhatsAppFloat />
    </>
  );
}
