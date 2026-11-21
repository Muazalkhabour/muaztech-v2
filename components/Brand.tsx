export function Brand({ size = 20 }: { size?: number }) {
  return (
    <span className="brand" dir="ltr" style={{ fontSize: size }}>
      <span>M</span>UAZ <span>T</span>ECH <span>&lt;/&gt;</span>
    </span>
  );
}

export function CapIcon({ size = 22, withTassel = false }: { size?: number; withTassel?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c3 2 9 2 12 0v-5" />
      {withTassel && <path d="M22 9v6" />}
    </svg>
  );
}
