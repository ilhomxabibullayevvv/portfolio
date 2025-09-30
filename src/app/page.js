import About from "@/components/about";
import Clients from "@/components/clients";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Clients />
      <Contact />
    </>
  );
}
