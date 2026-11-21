import { HomePage } from "@/components/HomePage";
import { dicts } from "@/lib/dict";

export default function Page() {
  return <HomePage t={dicts.en} />;
}
