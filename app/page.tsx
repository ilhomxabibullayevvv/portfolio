import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Services from "./components/Home/Services";
import Skills from "./components/Home/Skills";
import Contact from "./components/Home/Contact";
import Projects from "./components/Home/Projects";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
