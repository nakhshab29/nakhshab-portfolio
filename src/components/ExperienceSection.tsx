import { motion } from "framer-motion";
import { RevealCard } from "./RevealCard";
import { experiences } from "../data/experience";

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  return (
    <RevealCard
      delay={index * 0.1}
      className="exp-card-inner relative overflow-hidden"
      style={{
        background: "#0b0a1a",
        borderRadius: 24,
        padding: "2.5rem",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Current role highlight glow */}
      {exp.isCurrent && (
        <div 
          className="absolute top-0 right-0 w-48 h-48 blur-[80px] pointer-events-none opacity-30"
          style={{ background: "radial-gradient(circle, #4a1fff 0%, transparent 70%)" }}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 relative z-10">
        {/* Left — Date and Badge */}
        <div className="flex flex-col gap-3">
          <div className="font-mono text-[11px] tracking-[0.1em] text-white/30 uppercase">
            {exp.period}
          </div>
          <div>
            <span
              className="inline-block font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full font-bold"
              style={
                exp.isCurrent
                  ? { background: "#4a1fff", color: "#fff" }
                  : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }
              }
            >
              {exp.badge}
            </span>
          </div>
        </div>

        {/* Right — Content */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-unbounded text-[1.2rem] md:text-[1.4rem] font-black tracking-tight text-white mb-1">
                {exp.position}
              </h3>
              <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/40">
                {exp.company}
              </div>
            </div>
            
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 md:justify-end max-w-[300px]">
              {exp.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="font-mono text-[9px] tracking-[0.08em] px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03] text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-4 list-none p-0">
            {exp.bullets.map((b, i) => (
              <li 
                key={i} 
                className="text-[14px] font-light leading-relaxed pl-6 relative text-white/60"
              >
                <span 
                  className="absolute left-0 top-[0.6em] w-[6px] h-[6px] rounded-full" 
                  style={{ background: exp.isCurrent ? "#4a1fff" : "rgba(255,255,255,0.2)" }} 
                  aria-hidden 
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
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
            whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
            style={{ borderRadius: 24 }}
          >
            <ExperienceCard exp={exp} index={i} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}