import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-violet z-[10000] origin-left"
        style={{ scaleX }}
      />
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />
      <main className="page">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
      <Analytics />
    </>
  );
}

export default App;
