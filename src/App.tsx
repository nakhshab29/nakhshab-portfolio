import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="page">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
