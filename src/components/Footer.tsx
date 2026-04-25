export function Footer() {
  return (
    <footer
      className="rounded-[20px] flex justify-between items-center mt-3 mb-3 flex-col sm:flex-row gap-2 sm:gap-0"
      style={{
        background: "#0b0a1a",
        padding: "1.5rem 2.5rem",
        color: "rgba(240,237,255,0.3)",
      }}
    >
      <span
        className="font-unbounded text-[11px] font-bold tracking-[0.02em]"
        style={{ color: "rgba(240,237,255,0.25)" }}
      >
        Nakhshab Ansari
      </span>
      <span className="font-mono text-[9px] tracking-[0.1em] text-center">
        © 2025 · Mumbai, India · Built for impact.
      </span>
    </footer>
  );
}
