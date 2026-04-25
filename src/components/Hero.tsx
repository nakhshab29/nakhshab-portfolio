import { motion } from "framer-motion";
import { RevealCard } from "./RevealCard";
import { metrics, skills, stackItems } from "../data/constants";

// ─── Photo card ───
function PhotoCard() {
  return (
    <RevealCard
      className="col-span-1 row-span-2 md:row-span-1 md:col-span-4 lg:col-span-2 md:order-2 card-photo relative overflow-hidden rounded-[20px] md:aspect-auto"
      delay={0.05}
    >
      <motion.img
        src="/nakhshab.jpg"
        alt="Nakhshab Ansari — Senior Software Engineer"
        className="w-full h-full object-cover object-top absolute inset-0"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      {/* Badge overlay */}
      <motion.div
        className="absolute bottom-5 left-5 rounded-full px-[14px] py-[6px] font-mono text-[9px] tracking-[0.12em] uppercase z-10"
        style={{
          background: "rgba(11,10,26,0.75)",
          backdropFilter: "blur(10px)",
          color: "#c8ff00",
          border: "1px solid rgba(200,255,0,0.2)",
        }}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        Mumbai, IN
      </motion.div>
    </RevealCard>
  );
}

// ─── Name hero card ───
function NameCard() {
  return (
    <RevealCard
      className="col-span-2 md:col-span-12 lg:col-span-5 md:order-1 card-name relative overflow-hidden rounded-[20px] flex flex-col justify-between"
      style={{
        background: "#0b0a1a",
        color: "#f0edff",
      }}
    >
      {/* Animated Gradient orbs */}
      <motion.span
        className="absolute pointer-events-none"
        style={{
          top: -60, right: -60, width: 280, height: 280,
          background: "radial-gradient(circle,rgba(74,31,255,0.5) 0%,transparent 70%)",
          borderRadius: "50%",
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden
      />
      <motion.span
        className="absolute pointer-events-none"
        style={{
          bottom: -80, left: "40%", width: 240, height: 240,
          background: "radial-gradient(circle,rgba(255,79,55,0.25) 0%,transparent 70%)",
          borderRadius: "50%",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden
      />

      <div className="relative z-10">
        <div
          className="font-mono text-[9px] tracking-[0.2em] uppercase mb-6 opacity-50"
        >
          // Senior Software Engineer
        </div>
        <h1
          className="font-unbounded font-black leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)" }}
        >
          <div className="flex flex-wrap items-end gap-x-[0.3em]">
            <div className="flex whitespace-nowrap">
              {"Nakhshab".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.04,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  style={{ display: "inline-block", transformOrigin: "bottom" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex whitespace-nowrap text-lime">
              {"Ansari".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + i * 0.04,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  style={{ display: "inline-block", transformOrigin: "bottom" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </h1>
      </div>

      <div className="relative z-10 flex items-end justify-between mt-8">
        <span
          className="font-bricolage text-[13px] font-light"
          style={{ color: "rgba(240,237,255,0.5)" }}
        >
          Backend · Distributed Systems · Azure
        </span>
        <span
          className="flex items-center gap-[6px] font-mono text-[9px] tracking-[0.1em] uppercase"
          style={{ color: "#c8ff00" }}
          aria-label="Available for work"
        >
          <span
            className="avail-dot inline-block w-[7px] h-[7px] rounded-full"
            style={{ background: "#c8ff00" }}
          />
          Open to work
        </span>
      </div>
    </RevealCard>
  );
}

// ─── Years card ───
function YrsCard() {
  return (
    <RevealCard
      className="col-span-1 md:col-span-4 lg:col-span-2 md:order-3 card-stat rounded-[20px] flex flex-col justify-between bg-lime text-ink"
      delay={0.1}
    >
      <div className="font-unbounded font-black leading-none tracking-[-0.04em] text-[2rem] md:text-[3.5rem]">
        4<sup className="text-[1.2rem] font-normal align-super">+</sup>
      </div>
      <div className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-55">
        Years of
        <br />
        Experience
      </div>
    </RevealCard>
  );
}

// ─── Location card ───
function LocationCard() {
  return (
    <RevealCard
      className="col-span-1 md:col-span-4 lg:col-span-3 md:order-4 card-stat rounded-[20px] flex flex-col justify-between bg-sky text-ink relative overflow-hidden"
      delay={0.12}
    >
      <motion.img
        src="/mumbai.png"
        alt="Gateway of India, Mumbai"
        className="w-full h-full object-cover absolute inset-0 opacity-90 mix-blend-soft-light grayscale contrast-125"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="relative z-10 text-[2rem] mb-2" role="img" aria-label="Location pin">📍</div>
      <div className="relative z-10">
        <div className="font-unbounded text-[0.85rem] md:text-[1.1rem] font-bold leading-[1.1] tracking-[-0.02em]">
          Mumbai,
          <br />
          India
        </div>
        <div className="font-mono text-[9px] tracking-[0.1em] uppercase opacity-50 mt-1">
          Remote friendly
        </div>
      </div>
    </RevealCard>
  );
}

// ─── Metric card ───
function MetricCard({
  num,
  sup,
  label,
  theme,
  supColor,
  delay = 0,
}: {
  num: string;
  sup: string;
  label: string;
  theme: "coral" | "dark" | "violet";
  supColor?: string;
  delay?: number;
}) {
  const themeMap = {
    coral: { bg: "#ff4f37", color: "#fff", labelColor: "rgba(255,255,255,0.6)" },
    dark: { bg: "#0b0a1a", color: "#f0edff", labelColor: "rgba(240,237,255,0.4)" },
    violet: { bg: "#4a1fff", color: "#fff", labelColor: "rgba(255,255,255,0.5)" },
  };
  const t = themeMap[theme];

  return (
    <RevealCard
      className="col-span-1 md:col-span-4 lg:col-span-4 md:order-5 card-metric rounded-[20px] flex flex-col justify-between"
      style={{ background: t.bg }}
      delay={delay}
    >
      <div
        className="metric-num font-unbounded font-black leading-none tracking-[-0.04em]"
        style={{ color: t.color }}
      >
        {num}
        <sup
          className="text-[1rem] font-normal align-super"
          style={{ color: supColor === "lime" ? "#c8ff00" : t.color }}
        >
          {sup}
        </sup>
      </div>
      <div
        className="font-mono text-[9px] tracking-[0.15em] uppercase"
        style={{ color: t.labelColor }}
      >
        {label.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < label.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
    </RevealCard>
  );
}

// ─── Skills card ───
function SkillsCard() {
  return (
    <RevealCard
      className="col-span-2 md:col-span-12 lg:col-span-5 md:order-6 card-skills rounded-[20px] bg-white text-ink"
      delay={0.1}
    >
      <div className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-50 mb-5">
        Core Stack
      </div>
      <div className="flex flex-wrap gap-[7px]">
        {skills.hot.map((sk) => (
          <motion.span
            key={sk}
            className="font-mono text-[11px] px-3 py-[5px] rounded-md cursor-default"
            style={{ background: "#4a1fff", color: "#fff" }}
            whileHover={{ background: "#7c5cff" }}
            transition={{ duration: 0.2 }}
          >
            {sk}
          </motion.span>
        ))}
        {skills.normal.map((sk) => (
          <motion.span
            key={sk}
            className="font-mono text-[11px] px-3 py-[5px] rounded-md cursor-default"
            style={{ background: "rgba(11,10,26,0.06)", color: "#0b0a1a" }}
            whileHover={{ background: "rgba(74,31,255,0.12)" }}
            transition={{ duration: 0.2 }}
          >
            {sk}
          </motion.span>
        ))}
      </div>
    </RevealCard>
  );
}

// ─── Role card ───
function RoleCard() {
  return (
    <RevealCard
      className="col-span-1 md:col-span-6 lg:col-span-4 md:order-7 card-role-quote rounded-[20px] flex flex-col justify-between"
      style={{
        background: "#fffbe8",
        color: "#0b0a1a",
      }}
      delay={0.05}
    >
      <div className="font-unbounded text-[0.9rem] md:text-[1rem] font-bold leading-[1.3] tracking-[-0.01em]">
        Building systems
        <br />
        that scale.
      </div>
      <p className="text-[13px] leading-[1.7] font-light opacity-70">
        Specialized in architecting distributed backends — from monolith migrations to
        event-driven microservices at enterprise scale.
      </p>
    </RevealCard>
  );
}

// ─── Quote card ───
function QuoteCard() {
  return (
    <RevealCard
      className="col-span-1 md:col-span-6 lg:col-span-3 md:order-8 card-role-quote rounded-[20px] flex items-center"
      style={{
        background: "#0b0a1a",
      }}
      delay={0.1}
    >
      <blockquote
        className="font-unbounded font-bold leading-[1.3] tracking-[-0.01em] text-[0.9rem] md:text-[1.05rem]"
        style={{ color: "#f0edff" }}
      >
        Ship code that works.{" "}
        <em className="not-italic font-light" style={{ color: "#c8ff00" }}>
          Optimize later.
        </em>{" "}
        Measure always.
      </blockquote>
    </RevealCard>
  );
}

// ─── Stack Marquee ───
function StackMarquee() {
  const doubled = [...stackItems, ...stackItems];
  return (
    <RevealCard
      className="col-span-2 md:col-span-12 md:order-9 rounded-[20px] bg-white flex items-center gap-4 overflow-hidden"
      style={{ padding: "1.25rem 2rem" }}
    >
      <span className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-40 whitespace-nowrap flex-shrink-0">
        Stack
      </span>
      <div className="flex gap-3 overflow-hidden flex-1">
        <div className="marquee-inner">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="font-mono text-[11px] px-[14px] py-[5px] rounded-full whitespace-nowrap flex-shrink-0 text-ink"
              style={{ border: "1.5px solid rgba(11,10,26,0.15)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </RevealCard>
  );
}

// ─── Hero/Bento Grid ───
export function Hero() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-12 gap-3 lg:gap-3 grid-auto-rows-min">
      <NameCard />
      <QuoteCard />
      <YrsCard />
      <LocationCard />
      {metrics.map((m, i) => (
        <MetricCard key={m.num} {...m} delay={i * 0.05} />
      ))}
      <SkillsCard />
      <RoleCard />
      <PhotoCard />
      <StackMarquee />
    </div>
  );
}