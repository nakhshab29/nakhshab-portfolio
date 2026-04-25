import { motion } from "framer-motion";
import { RevealCard } from "./RevealCard";
import { experiences } from "../data/experience";

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  return (
    <RevealCard
      delay={index * 0.1}
      className="grid grid-cols-1 lg:grid-cols-[200px_1fr_auto] gap-4 lg:gap-8 items-start"
      style={{
        padding: "2.5rem",
        background: "#fff",
        borderRadius: 20,
        border: exp.isCurrent ? "2px solid #4a1fff" : "2px solid transparent",
      }}
    >
      {/* Left — period + badge */}
      <div>
        <div className="font-mono text-[10px] tracking-[0.08em] mb-2" style={{ color: "#7a738c" }}>
          {exp.period}
        </div>
        <span
          className="inline-block font-mono text-[8px] tracking-[0.1em] uppercase px-[10px] py-1 rounded-full font-medium"
          style={
            exp.isCurrent
              ? { background: "rgba(74,31,255,0.1)", color: "#4a1fff" }
              : { background: "rgba(11,10,26,0.06)", color: "#7a738c" }
          }
        >
          {exp.badge}
        </span>
      </div>

      {/* Mid — position, company, bullets */}
      <div>
        <div className="font-unbounded text-[1.05rem] font-bold tracking-[-0.02em] mb-1" style={{ color: "#0b0a1a" }}>
          {exp.position}
        </div>
        <div className="font-bricolage text-[13px] font-light mb-5" style={{ color: "#7a738c" }}>
          {exp.company}
        </div>
        <ul className="flex flex-col gap-[0.4rem] list-none p-0">
          {exp.bullets.map((b, i) => (
            <li key={i} className="text-[13px] font-light leading-[1.6] pl-5 relative" style={{ color: "#7a738c" }}>
              <span className="absolute left-0 top-[9px] w-[5px] h-[5px] rounded-full" style={{ background: "#4a1fff" }} aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Right — tech tags */}
      <div className="hidden lg:flex flex-wrap gap-[5px] max-w-[130px] justify-end">
        {exp.tags.map((tag) => (
          <span key={tag} className="font-mono text-[9px] tracking-[0.06em] px-[9px] py-1 rounded-md" style={{ background: "rgba(11,10,26,0.06)", color: "#7a738c" }}>
            {tag}
          </span>
        ))}
      </div>
    </RevealCard>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <RevealCard>
        <div className="font-mono text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: "#7a738c" }}>
          02 / Experience
        </div>
        <h2
          className="font-unbounded font-black tracking-[-0.03em] mb-12"
          style={{ fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 1.0, color: "#0b0a1a" }}
        >
          Where I've <span style={{ color: "#4a1fff" }}>Shipped</span>
        </h2>
      </RevealCard>

      <div className="flex flex-col gap-3">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            whileHover={{ y: -2, boxShadow: "0 16px 50px rgba(11,10,26,0.1)" }}
            style={{ borderRadius: 20 }}
          >
            <ExperienceCard exp={exp} index={i} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
