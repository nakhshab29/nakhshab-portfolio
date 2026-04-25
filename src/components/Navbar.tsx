import { useState } from "react";
import { navLinks } from "../data/constants";

export function Navbar({ onOpenResume }: { onOpenResume: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

        {/* Desktop nav */}
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

        <div className="flex gap-2 items-center">
          <button
            onClick={onOpenResume}
            className="font-mono text-[10px] tracking-[0.08em] px-4 md:px-5 py-2 bg-ink text-white rounded-full font-medium transition-all duration-200 hover:bg-violet"
            aria-label="Download Resume"
          >
            <span className="btn-resume-label">Download Resume ↓</span>
            <span className="btn-resume-icon">CV ↓</span>
          </button>
          <a
            href="mailto:ansarinakhshab52@gmail.com"
            className="hidden sm:inline-block font-mono text-[10px] tracking-[0.08em] px-4 md:px-5 py-2 bg-lime text-ink rounded-full font-medium transition-colors duration-200 hover:bg-cream2"
            aria-label="Hire Nakhshab"
          >
            Hire Me →
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-5 h-[2px] rounded bg-ink block" />
            <span className="w-5 h-[2px] rounded bg-ink block" />
            <span className="w-5 h-[2px] rounded bg-ink block" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen nav drawer */}
      <div
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 font-mono text-[10px] tracking-[0.1em] uppercase text-white opacity-50 hover:opacity-100 transition-opacity"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          Close ✕
        </button>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-unbounded text-[1.5rem] font-bold tracking-[-0.02em] text-white hover:text-lime transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => { setMenuOpen(false); onOpenResume(); }}
            className="font-mono text-[10px] tracking-[0.08em] px-5 py-2 bg-white text-ink rounded-full font-medium"
          >
            Download Resume ↓
          </button>
          <a
            href="mailto:ansarinakhshab52@gmail.com"
            className="font-mono text-[10px] tracking-[0.08em] px-5 py-2 bg-lime text-ink rounded-full font-medium"
          >
            Hire Me →
          </a>
        </div>
      </div>
    </>
  );
}