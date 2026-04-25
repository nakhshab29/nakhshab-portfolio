import { motion } from "framer-motion";
import { RevealCard } from "./RevealCard";
import { projects } from "../data/projects";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const bg = project.variant === "p1" ? "#4a1fff" : "#0b0a1a";

  return (
    <RevealCard delay={index * 0.1}>
      <motion.article
        className="rounded-[20px] flex flex-col justify-between relative overflow-hidden"
        style={{
          background: bg,
          padding: "2.75rem",
          minHeight: "320px",
        }}
        whileHover={{ y: -4, boxShadow: "0 24px 70px rgba(11,10,26,0.18)" }}
        transition={{ duration: 0.25 }}
      >
        {/* Ghost number */}
        <div
          className="font-unbounded font-black leading-none absolute right-6 top-4 pointer-events-none"
          style={{ fontSize: "5rem", color: "rgba(255,255,255,0.06)" }}
          aria-hidden
        >
          {project.num}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3
            className="font-unbounded font-bold leading-[1.2] tracking-[-0.02em] mb-4"
            style={{ fontSize: "1.3rem", color: "#fff" }}
          >
            {project.name.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < project.name.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h3>
          <p
            className="text-[13px] font-light leading-[1.75] mb-6"
            style={{ color: "rgba(255,255,255,0.5)", maxWidth: 360 }}
          >
            {project.desc}
          </p>
        </div>

        {/* Stat + tags */}
        <div className="relative z-10">
          <div
            className="font-unbounded font-bold tracking-[-0.01em] mb-5"
            style={{ fontSize: "0.85rem", color: "#c8ff00" }}
          >
            {project.stat}
          </div>
          <div className="flex flex-wrap gap-[6px]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] tracking-[0.08em] px-[10px] py-[5px] rounded-md"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </RevealCard>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <RevealCard>
        <div className="font-mono text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: "#7a738c" }}>
          03 / Projects
        </div>
        <h2
          className="font-unbounded font-black tracking-[-0.03em] mb-12"
          style={{ fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 1.0, color: "#0b0a1a" }}
        >
          Key <span style={{ color: "#4a1fff" }}>Builds</span>
        </h2>
      </RevealCard>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
