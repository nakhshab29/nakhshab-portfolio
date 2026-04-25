import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
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
