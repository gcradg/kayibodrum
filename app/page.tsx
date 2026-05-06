import About from "@/components/About";
import BrandValues from "@/components/BrandValues";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Materials from "@/components/Materials";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Loader />
      <Header />
      <main>
        <Hero />
        <BrandValues />
        <About />
        <Services />
        <Projects />
        <Materials />
        <Process />
        <Philosophy />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
