import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground relative">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
