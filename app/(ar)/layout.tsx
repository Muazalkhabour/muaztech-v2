import { buildMetadata, HtmlShell } from "@/lib/page-shell";
import "../globals.css";

export { viewport } from "@/lib/page-shell";
export const metadata = buildMetadata("ar");

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return <HtmlShell lang="ar">{children}</HtmlShell>;
}
