import type { Dict } from "@/lib/dict";
import { socials, type SocialId } from "@/lib/site";

const ICONS: Record<SocialId, React.ReactNode> = {
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  ),
  tiktok: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v3a7 7 0 0 1-3.9-1.2v6.2a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v3.1a2.8 2.8 0 1 0 1.9 2.7V3h3.1z" />
    </svg>
  ),
  snapchat: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c-3 0-5 2.2-5 5.2v2.3l-1.6-.4c-.5-.1-.8.5-.4.8l1.7 1c-.6 1.7-1.9 3-3.6 3.6-.4.1-.4.7 0 .8l1.6.5.4 1.3 1.8-.1c.9.1 1.7 1.8 5.1 1.8s4.2-1.7 5.1-1.8l1.8.1.4-1.3 1.6-.5c.4-.1.4-.7 0-.8-1.7-.6-3-1.9-3.6-3.6l1.7-1c.4-.3.1-.9-.4-.8l-1.6.4V8.2C17 5.2 15 3 12 3z" />
    </svg>
  ),
  facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" />
    </svg>
  ),
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.6.6-3.2-1.1-3.2-1.1-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.1-.2-4.3-1-4.3-4.7 0-1 .4-1.9 1-2.6-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.7 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.5 1 2.6 0 3.7-2.2 4.5-4.3 4.7.3.3.6.9.6 1.8v2.6c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5z" />
    </svg>
  ),
  whatsapp: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 20.5l1.8-5.2A8.4 8.4 0 1 1 21 11.5z" />
      <path d="M9 8.8c.2 1.9 2.3 4.2 4.4 4.9l1.1-1.1 1.7.8c-.2 1-1 1.6-2 1.6-3 0-6.2-3.1-6.2-6.1 0-1 .6-1.8 1.6-2l.8 1.7z" />
    </svg>
  ),
};

/** Row of social links; `size` "lg" shows larger round buttons. */
export function SocialLinks({ t, size = "md" }: { t: Dict; size?: "md" | "lg" }) {
  return (
    <ul className={`social social--${size}`} aria-label={t.social.aria}>
      {socials.map((s) => (
        <li key={s.id}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={t.social.labels[s.id]}
            title={t.social.labels[s.id]}>
            {ICONS[s.id]}
          </a>
        </li>
      ))}
    </ul>
  );
}
