import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoreSkills from "@/components/CoreSkills";
import WorkExperience from "@/components/WorkExperience";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionBar from "@/components/SectionBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WorkExperience />
      <Certificates />
      <CoreSkills />
      <Projects />
      <Contact />
      <Footer />
      <SectionBar />
    </main>
  );
}
