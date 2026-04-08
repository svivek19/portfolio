import Navbar from "./components/Navbar";
import ParticlesBg from "./components/ParticlesBg";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div>
      <div className="mesh-bg" />
      <div className="noise-overlay" />
      <ParticlesBg />
      <Navbar />
      <main className="pt-16">
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
