import { navLinks } from "../data/constants";

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-[1.1rem]"
      style={{
        background: "rgba(240,237,255,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(11,10,26,0.12)",
      }}
    >
      <span
        className="font-unbounded text-[12px] font-bold tracking-[0.02em] text-ink"
        aria-label="Nakhshab Ansari"
      >
        NA<span className="text-violet">.</span>
      </span>

      <div
        className="hidden md:flex gap-1 rounded-full px-[5px] py-[5px]"
        style={{ background: "#0b0a1a" }}
        role="navigation"
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-mono text-[10px] tracking-[0.06em] px-[14px] py-[6px] rounded-full transition-all duration-200"
            style={{ color: "rgba(240,237,255,0.5)" }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
              (e.target as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.background = "";
              (e.target as HTMLAnchorElement).style.color = "rgba(240,237,255,0.5)";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="mailto:ansarinakhshab52@gmail.com"
        className="font-mono text-[10px] tracking-[0.08em] px-5 py-2 bg-lime text-ink rounded-full font-medium transition-colors duration-200 hover:bg-cream2"
        aria-label="Hire Nakhshab"
      >
        Hire Me →
      </a>
    </nav>
  );
}
