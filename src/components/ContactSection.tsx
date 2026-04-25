import { motion } from "framer-motion";
import { RevealCard } from "./RevealCard";
import { contactLinks } from "../data/constants";

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <RevealCard>
        <div className="font-mono text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: "#7a738c" }}>
          04 / Contact
        </div>
        <h2
          className="font-unbounded font-black tracking-[-0.03em] mb-12"
          style={{ fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 1.0, color: "#0b0a1a" }}
        >
          Let's <span style={{ color: "#4a1fff" }}>Talk</span>
        </h2>
      </RevealCard>

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-3"
      >
        {/* Main CTA card */}
        <RevealCard
          className="col-span-1 lg:col-span-2 card-contact-cta relative overflow-hidden rounded-[20px]"
          style={{
            background: "#0b0a1a",
            color: "#f0edff",
          }}
        >
          {/* Orbs */}
          <span
            className="absolute pointer-events-none"
            style={{
              top: -100, right: -100, width: 350, height: 350,
              background: "radial-gradient(circle,rgba(74,31,255,0.4) 0%,transparent 65%)",
              borderRadius: "50%",
            }}
            aria-hidden
          />
          <span
            className="absolute pointer-events-none"
            style={{
              bottom: -80, left: "30%", width: 250, height: 250,
              background: "radial-gradient(circle,rgba(200,255,0,0.12) 0%,transparent 65%)",
              borderRadius: "50%",
            }}
            aria-hidden
          />

          <div className="relative z-10">
            <h3
              className="font-unbounded font-black tracking-[-0.03em] leading-[1.05] mb-5"
              style={{ fontSize: "clamp(1.5rem,2.5vw,2.2rem)" }}
            >
              Open to the
              <br />
              <span style={{ color: "#c8ff00" }}>right role.</span>
            </h3>
            <p
              className="text-[14px] font-light leading-[1.75] mb-8"
              style={{ color: "rgba(240,237,255,0.45)", maxWidth: 380 }}
            >
              Looking for senior backend engineering roles where architecture decisions matter.
              Strong preference for product-led teams building at scale. Mumbai-based,
              remote-friendly.
            </p>
            <motion.a
              href="mailto:ansarinakhshab52@gmail.com"
              className="inline-block font-unbounded text-[10px] font-bold tracking-[0.08em] px-8 py-[0.9rem] rounded-full"
              style={{ background: "#c8ff00", color: "#0b0a1a" }}
              whileHover={{ scale: 1.03, background: "#d6ff00" }}
              transition={{ duration: 0.2 }}
            >
              Send a Message →
            </motion.a>
          </div>
        </RevealCard>

        {/* Link cards column */}
        <div className="flex flex-col gap-3">
          {contactLinks.map((link, i) => (
            <RevealCard key={link.type} delay={i * 0.08}>
              <motion.a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex flex-col justify-between bg-white rounded-[20px] p-7"
                style={{ minHeight: "136px" }}
                whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(11,10,26,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <div
                    className="font-mono text-[9px] tracking-[0.15em] uppercase"
                    style={{ color: "#7a738c" }}
                  >
                    {link.type}
                  </div>
                  <div
                    className="font-bricolage text-[13px] font-semibold mt-3 break-all"
                    style={{ color: "#0b0a1a" }}
                  >
                    {link.value}
                  </div>
                </div>
                <div
                  className="font-mono text-[16px] self-end mt-2"
                  style={{ color: "#4a1fff" }}
                  aria-hidden
                >
                  ↗
                </div>
              </motion.a>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}