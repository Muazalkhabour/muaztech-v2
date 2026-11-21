import { buildMetadata, HtmlShell } from "@/lib/page-shell";
import "../../globals.css";

export { viewport } from "@/lib/page-shell";
export const metadata = buildMetadata("en");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <HtmlShell lang="en">{children}</HtmlShell>;
}
